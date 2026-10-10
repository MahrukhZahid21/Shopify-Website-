# Chronics — Luxury Fashion Shopify Theme (Online Store 2.0)

Welcome to the **Chronics** Shopify theme, an ultra-luxury, high-conversion e-commerce theme built strictly following Shopify's modern **Online Store 2.0 (OS 2.0)** architecture.

---

## 📦 How to Install on Shopify

1. Log into your **Shopify Admin** (`https://admin.shopify.com/store/YOUR-STORE-NAME`).
2. In the left navigation, go to **Online Store** → **Themes**.
3. Under **Theme library**, click **Add theme** → **Upload zip file**.
4. Select the generated archive:
   ```
   chronics-shopify-theme.zip
   ```
5. Click **Upload file**.
6. Once uploaded, click **Actions** → **Publish** (or **Customize** to preview first in the Theme Editor).

---

## 💎 Features & Architecture

### 1. Online Store 2.0 JSON Templates
- **Homepage** (`templates/index.json`): Modular sections including Hero Showcase, 5-Column Category Tiles, Trending Products, and Service Guarantees.
- **Collection Catalog** (`templates/collection.json`): Full filterable catalog with category sidebar, price range slider, sizes, colors, and sort dropdown.
- **Product Details (PDP)** (`templates/product.json`): Multi-image gallery with zoom, dynamic variant swatches, quantity controls, AJAX Add to Bag, Buy It Now, and Craftsmanship tabs.
- **Pages & Contact** (`templates/page.json`, `templates/page.contact.json`, `templates/404.json`).

### 2. High-Conversion Global Drawers
- **Slide-out AJAX Cart Drawer**: Free Express Shipping Goal meter ($50 threshold), line-item quantity adjusters, live subtotal, and 1-click checkout.
- **Global Wishlist**: Instant heart-toggle saving products directly in browser storage.
- **Predictive Search Modal**: Live search queries connecting directly to Shopify's `/search/suggest.json` API.
- **Concierge Stylist Chat Drawer**: Live concierge assistant drawer for high customer engagement.

### 3. Theme Customizer Settings (`config/settings_schema.json`)
Customize colors, fonts, shipping threshold, promo codes (`CHRONICAPP`), phone numbers, and social links directly within Shopify's visual theme editor without writing code.

---

## 📁 Directory Structure
```
shopify-theme/
├── assets/
│   ├── chronics-styles.css
│   └── chronics-app.js
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── announcement-bar.liquid
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── featured-categories.liquid
│   ├── trending-products.liquid
│   ├── service-guarantees.liquid
│   ├── main-collection.liquid
│   ├── main-product.liquid
│   ├── main-page.liquid
│   ├── contact-form.liquid
│   └── main-404.liquid
├── snippets/
│   ├── product-card.liquid
│   ├── price.liquid
│   └── rating-stars.liquid
└── templates/
    ├── index.json
    ├── collection.json
    ├── product.json
    ├── page.json
    ├── page.contact.json
    ├── cart.json
    └── 404.json
```
