// Chronics Shopify OS 2.0 Theme Engine
// Handles AJAX Cart, Dynamic Drawers, Wishlist, Predictive Search & Concierge Chat

class ChronicsShopify {
  constructor() {
    this.cart = null;
    this.wishlist = this.loadState('chronics_wishlist', []);
    this.shippingThreshold = 50.00;
    this.appliedPromo = this.loadState('chronics_promo', null);

    this.init();
  }

  loadState(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch(e) {
      return fallback;
    }
  }

  saveState(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch(e) {}
  }

  async init() {
    await this.fetchCart();
    this.setupGlobalEvents();
    this.syncWishlistIcons();
  }

  // --- AJAX Shopify Cart Integration ---
  async fetchCart() {
    try {
      const res = await fetch('/cart.js');
      if (res.ok) {
        this.cart = await res.json();
        this.renderCartUI();
      }
    } catch(e) {
      console.log('Chronics Cart Note: Using offline/demo cart state');
      // Fallback demo cart if viewed outside active Shopify store
      if (!this.cart) {
        this.cart = {
          item_count: 2,
          total_price: 4799,
          items: [
            {
              id: 101,
              title: "V-Neck Summer Dress",
              price: 2999,
              quantity: 1,
              variant_options: ["Lilac Lavender", "S"],
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5v4FoFiApF3Qca4X2_9Nzy0hcZrbuM-jr2gzT1xr6PR7iJ2xIALMzTPus_WOYz5SQpLtiuTs0pexElPkwOPDWffpyhmLhI-cT4mUsmUe4ZSzg8JnMPXzDRPbHCrNw67MwF2_vIlyrc7SOf1VJf8xisbZL_H-s24qXXuE_QqqoQpp6w6FVngvAEi2YTu0rZJ6HMbXcjtyQZYFX_jJyAT9zypHF1lhR26JUTVqaZZuP0rEOfkdrxPlmA"
            },
            {
              id: 102,
              title: "Retro Round Sunglasses",
              price: 1800,
              quantity: 1,
              variant_options: ["Amber Tortoise", "One Size"],
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTeX_dCzI8op0ggkqlEE1ThPcBy8c42uiRC3SEUp9FnbfyNGIb3rxpCrRloSXA5LXV0nnTSSaStPQi7q2eGtG6UqYfcMZVdv9Ogj1qfrzn4rAzArJDst9RWYPRRim7qOh-0ekaKFbpzgslfG_qytb9ABZwsYXOHpY0DlpEIODIcs93AefJuAKpo2sISHE1Y9OB_8B5Jfy4LT4W_uS8y7C6brYIfrY_OhiIhsQsV9_bb84pu45e8Ah39w"
            }
          ]
        };
        this.renderCartUI();
      }
    }
  }

  async addToCart(variantId, quantity = 1, properties = {}) {
    try {
      const res = await fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: variantId, quantity, properties })
      });

      if (res.ok) {
        await this.fetchCart();
        this.showToast('✨ Added to your shopping bag!', 'success');
        this.toggleCartDrawer(true);
      } else {
        const err = await res.json();
        this.showToast(err.description || 'Could not add to bag', 'error');
      }
    } catch(e) {
      // Demo/local simulation
      this.cart.item_count += quantity;
      this.renderCartUI();
      this.showToast('✨ Added to your shopping bag!', 'success');
      this.toggleCartDrawer(true);
    }
  }

  async updateQuantity(lineKey, newQuantity) {
    try {
      const res = await fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: lineKey, quantity: newQuantity })
      });
      if (res.ok) {
        await this.fetchCart();
      }
    } catch(e) {
      if (this.cart && this.cart.items[lineKey]) {
        if (newQuantity <= 0) {
          this.cart.items.splice(lineKey, 1);
        } else {
          this.cart.items[lineKey].quantity = newQuantity;
        }
        this.cart.item_count = this.cart.items.reduce((s, i) => s + i.quantity, 0);
        this.cart.total_price = this.cart.items.reduce((s, i) => s + (i.price * i.quantity), 0);
        this.renderCartUI();
      }
    }
  }

  renderCartUI() {
    if (!this.cart) return;

    // Badges in header
    document.querySelectorAll('.cart-count-badge').forEach(b => {
      b.textContent = this.cart.item_count || 0;
      b.style.display = (this.cart.item_count > 0) ? 'flex' : 'none';
    });

    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('cart-empty-state');
    const footer = document.getElementById('cart-drawer-footer');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const shippingEl = document.getElementById('cart-shipping-val');
    const totalEl = document.getElementById('cart-total-val');
    const shippingProgress = document.getElementById('cart-free-shipping-progress');
    const shippingText = document.getElementById('cart-free-shipping-text');

    if (!container) return;

    if (!this.cart.items || this.cart.items.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      if (footer) footer.classList.add('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    if (footer) footer.classList.remove('hidden');

    const subtotalDollars = (this.cart.total_price / 100);

    container.innerHTML = this.cart.items.map((item, index) => {
      const itemPrice = (item.price / 100).toFixed(2);
      const img = item.featured_image?.url || item.image || '';
      const options = item.variant_options ? item.variant_options.join(' • ') : (item.variant_title || '');
      const lineKey = item.key || index;

      return `
        <div class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-secondary/30 transition-all">
          <img src="${img}" alt="${item.title}" class="w-16 h-20 object-cover rounded-lg bg-white shrink-0 shadow-sm">
          <div class="flex-1 min-w-0">
            <div class="flex justify-between items-start gap-1">
              <h4 class="font-bold text-sm text-primary truncate">${item.product_title || item.title}</h4>
              <button onclick="window.shopifyTheme.updateQuantity('${lineKey}', 0)" class="text-on-surface-variant hover:text-red-600 transition-colors p-1" title="Remove item">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
            ${options ? `<p class="text-xs text-on-surface-variant">${options}</p>` : ''}
            <div class="flex justify-between items-center mt-2">
              <span class="font-bold text-secondary text-sm">$${itemPrice}</span>
              <div class="flex items-center bg-white rounded-lg border border-outline-variant/40 overflow-hidden shadow-xs">
                <button onclick="window.shopifyTheme.updateQuantity('${lineKey}', ${item.quantity - 1})" class="w-7 h-7 flex items-center justify-center text-primary hover:bg-gray-100 font-bold">-</button>
                <span class="w-7 text-center text-xs font-bold text-primary">${item.quantity}</span>
                <button onclick="window.shopifyTheme.updateQuantity('${lineKey}', ${item.quantity + 1})" class="w-7 h-7 flex items-center justify-center text-primary hover:bg-gray-100 font-bold">+</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Shipping calculations ($50 threshold)
    const threshold = this.shippingThreshold;
    const progress = Math.min(100, (subtotalDollars / threshold) * 100);
    const needed = Math.max(0, threshold - subtotalDollars).toFixed(2);

    if (shippingProgress) shippingProgress.style.width = `${progress}%`;
    if (shippingText) {
      if (subtotalDollars >= threshold) {
        shippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Express Shipping</strong>!`;
      } else {
        shippingText.innerHTML = `Add <strong>$${needed}</strong> more to unlock <strong>FREE Shipping</strong>!`;
      }
    }

    const shipping = subtotalDollars >= threshold ? 0 : 4.99;
    const total = subtotalDollars + shipping;

    if (subtotalEl) subtotalEl.textContent = `$${subtotalDollars.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }

  // --- Wishlist Management ---
  toggleWishlist(handle) {
    const idx = this.wishlist.indexOf(handle);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast('Removed from wishlist', 'info');
    } else {
      this.wishlist.push(handle);
      this.showToast('💖 Saved to your wishlist!', 'success');
    }
    this.saveState('chronics_wishlist', this.wishlist);
    this.syncWishlistIcons();
  }

  syncWishlistIcons() {
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(b => {
      b.textContent = this.wishlist.length;
      b.style.display = this.wishlist.length > 0 ? 'flex' : 'none';
    });

    document.querySelectorAll('[data-product-handle]').forEach(btn => {
      const handle = btn.getAttribute('data-product-handle');
      const icon = btn.querySelector('.wishlist-icon') || btn;
      if (this.wishlist.includes(handle)) {
        icon.style.fontVariationSettings = "'FILL' 1";
        btn.classList.add('text-secondary');
      } else {
        icon.style.fontVariationSettings = "'FILL' 0";
        btn.classList.remove('text-secondary');
      }
    });
  }

  // --- Drawer Toggles ---
  toggleCartDrawer(show) {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (!drawer || !backdrop) return;
    if (show) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      this.fetchCart();
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  toggleSearchModal(show) {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    if (show) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const input = document.getElementById('global-search-input');
      if (input) setTimeout(() => input.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  toggleChatDrawer(show) {
    const drawer = document.getElementById('chat-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (!drawer || !backdrop) return;
    if (show) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  toggleMobileNav(show) {
    const nav = document.getElementById('mobile-nav-panel');
    const backdrop = document.getElementById('drawer-backdrop');
    if (!nav || !backdrop) return;
    if (show) {
      nav.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  closeAllDrawers() {
    this.toggleCartDrawer(false);
    this.toggleSearchModal(false);
    this.toggleChatDrawer(false);
    this.toggleMobileNav(false);
  }

  // --- Toasts ---
  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    const bg = type === 'error' ? 'bg-[#ffdad6] text-[#93000a] border-red-300' :
               type === 'info' ? 'bg-[#e0f2fe] text-[#0284c7] border-sky-300' :
               'bg-white text-primary border-purple-200';

    const icon = type === 'error' ? 'error' : type === 'info' ? 'info' : 'check_circle';
    const iconColor = type === 'error' ? 'text-red-600' : type === 'info' ? 'text-sky-600' : 'text-secondary';

    toast.className = `toast-item flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border ${bg} text-xs font-bold`;
    toast.innerHTML = `
      <span class="material-symbols-outlined ${iconColor} text-[20px]">${icon}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- Events ---
  setupGlobalEvents() {
    const backdrop = document.getElementById('drawer-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => this.closeAllDrawers());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeAllDrawers();
    });

    // Wishlist click delegation
    document.addEventListener('click', (e) => {
      const wishBtn = e.target.closest('[data-product-handle]');
      if (wishBtn && !wishBtn.closest('a')) {
        e.preventDefault();
        const handle = wishBtn.getAttribute('data-product-handle');
        if (handle) this.toggleWishlist(handle);
      }
    });

    // Live search input
    const searchInput = document.getElementById('global-search-input');
    const searchResults = document.getElementById('search-results-grid');
    if (searchInput && searchResults) {
      searchInput.addEventListener('input', async (e) => {
        const q = e.target.value.trim();
        if (!q) {
          searchResults.innerHTML = `
            <div class="col-span-full py-8 text-center text-on-surface-variant">
              <span class="material-symbols-outlined text-4xl text-lavender block mb-2">search</span>
              <p class="text-xs">Type to discover dresses, tops, denim, jackets, or jewelry...</p>
            </div>
          `;
          return;
        }

        try {
          const res = await fetch(`/search/suggest.json?q=${encodeURIComponent(q)}&resources[type]=product&resources[limit]=6`);
          if (res.ok) {
            const data = await res.json();
            const prods = data.resources.results.products;
            if (!prods || prods.length === 0) {
              searchResults.innerHTML = `<p class="col-span-full text-center py-6 text-xs text-on-surface-variant">No items found for "<strong>${q}</strong>".</p>`;
              return;
            }
            searchResults.innerHTML = prods.map(p => `
              <div class="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex items-center justify-between gap-3 border border-outline-variant/30">
                <a href="${p.url}" class="flex items-center gap-3 min-w-0">
                  <img src="${p.image}" alt="${p.title}" class="w-12 h-14 object-cover rounded-lg bg-white shrink-0">
                  <div class="truncate">
                    <h5 class="font-bold text-xs text-primary truncate">${p.title}</h5>
                    <span class="text-xs font-bold text-secondary">$${p.price}</span>
                  </div>
                </a>
              </div>
            `).join('');
          }
        } catch(err) {
          // Fallback UI
        }
      });
    }

    // Chat concierge interaction
    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    if (chatForm && chatMessages && chatInput) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = chatInput.value.trim();
        if (!msg) return;

        const u = document.createElement('div');
        u.className = 'flex justify-end';
        u.innerHTML = `<div class="bg-secondary text-white py-2 px-3.5 rounded-2xl rounded-tr-none max-w-[80%] text-xs shadow-sm">${msg}</div>`;
        chatMessages.appendChild(u);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {
          let reply = "I'm delighted to assist you! Explore our seasonal drops with code **CHRONICAPP** for 10% OFF.";
          const low = msg.toLowerCase();
          if (low.includes('size')) reply = "Our garments fit true to size! Check our comprehensive Size Guide on any product page.";
          else if (low.includes('return')) reply = "Enjoy 30-Day Hassle-Free Returns with complimentary prepaid return labels.";
          else if (low.includes('shipping')) reply = "All orders over $50 receive Free Worldwide Express Shipping (2-4 business days).";

          const b = document.createElement('div');
          b.className = 'flex justify-start items-start gap-2';
          b.innerHTML = `
            <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold shrink-0">C</div>
            <div class="bg-surface-container-high text-on-surface py-2 px-3.5 rounded-2xl rounded-tl-none max-w-[85%] text-xs shadow-xs">${reply}</div>
          `;
          chatMessages.appendChild(b);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.shopifyTheme = new ChronicsShopify();
});
