// Chronics Comprehensive High-Fashion Products Database
// Curated Luxury Apparel, Footwear, Bags, Eyewear & Fine Jewelry

const PRODUCTS_DATA = [
  // ==========================================
  // --- 1. ACCESSORIES & JEWELRY & HEADWEAR ---
  // ==========================================
  {
    id: "vintage-baker-boy-cap",
    title: "Vintage Baker Boy Cap",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Headwear",
    price: 19.99,
    originalPrice: 28.00,
    discount: "-28%",
    rating: 4.9,
    reviewsCount: 115,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Caps", "Accessories", "Headwear", "New Arrival"],
    colors: [
      { name: "Pastel Pink", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Oatmeal Tweed", hex: "#FFFDF0", bgClass: "bg-[#FFFDF0]" },
      { name: "Plum Velvet", hex: "#300033", bgClass: "bg-[#300033]" }
    ],
    sizes: ["One Size (Adjustable)"],
    defaultSize: "One Size (Adjustable)",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAGQVV-DXaD-x6TfGxrHsTD_-OgNicJtfTdn3AKKzXhiVSHJBSa9dbuawygqTBpN4Y7zD9s53j0JAgsx6tucejqAJ_pwW9GyyRpbL7zxHv_uugLNVG-O8rvlVOwe2dzyzrd1V3hsnaZ04PQbB8NMgKYCIroBttgPLlttxYJmhqlwA80rUByIKFiCBYoobvWu9YXl8GZy-rbg7VmVKysOi6_fvJl01XhnV2PZgsr0znMJXl2l6hEyj6ehw"
    ],
    description: "Classic Parisian-style baker boy cap crafted from soft brushed twill with structured visor, braided rope band detailing, and interior elastic comfort band for effortless chic.",
    specs: {
      composition: "70% Wool-Feel Poly Twill, 30% Cotton Lining",
      care: "Spot clean with damp cloth. Do not machine wash.",
      fit: "Adjustable inner drawstring fits 54-58cm head circumference."
    }
  },
  {
    id: "layered-pearl-gold-necklace",
    title: "Layered Baroque Pearl & Gold Necklace",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Jewelry",
    price: 24.50,
    originalPrice: 35.00,
    discount: "-30%",
    rating: 5.0,
    reviewsCount: 88,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Jewelry", "Accessories", "Hot Deals"],
    colors: [
      { name: "18K Gold Plated", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Sterling Silver Tone", hex: "#E3E0F8", bgClass: "bg-[#E3E0F8]" }
    ],
    sizes: ["Adjustable Chain"],
    defaultSize: "Adjustable Chain",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Elegant dual-strand necklace combining genuine freshwater baroque cultured pearls with an 18K gold-dipped herringbone paperclip chain and lobster clasp closure.",
    specs: {
      composition: "18K Gold PVD Coating over Stainless Steel & Cultured Pearls",
      care: "Tarnish-resistant, hypoallergenic, and waterproof.",
      fit: "16-inch + 18-inch layers with 2-inch extension chain."
    }
  },
  {
    id: "silk-satin-hair-scarf-scrunchie",
    title: "Mulberry Silk Hair Scarf & Band Ensemble",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories",
    price: 15.00,
    originalPrice: 22.00,
    discount: "-31%",
    rating: 4.8,
    reviewsCount: 74,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Accessories", "Pastel Tops", "Headwear"],
    colors: [
      { name: "Lilac Botanical", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Blush Marble", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Multi-way 100% Mulberry silk square scarf with matching oversized scrunchie. Wear in your hair, around your neck, or tied to your handbag handle as an accent.",
    specs: {
      composition: "100% 19mm Grade 6A Pure Mulberry Silk",
      care: "Hand wash cold with delicate silk shampoo.",
      fit: "50cm x 50cm square scarf."
    }
  },
  {
    id: "chunky-gold-hoop-earrings",
    title: "Architectural Chunky Teardrop Hoops",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Jewelry",
    price: 18.50,
    originalPrice: 25.00,
    discount: "-26%",
    rating: 4.9,
    reviewsCount: 93,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Jewelry", "Accessories", "Earrings"],
    colors: [
      { name: "Gleaming Gold", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Polished Silver", hex: "#E3E0F8", bgClass: "bg-[#E3E0F8]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Celebrity-favorite hollow teardrop chunky hoop earrings with featherlight comfort for all-day wear without pulling on delicate earlobes.",
    specs: {
      composition: "Hollow Brass with 18K Yellow Gold Dip",
      care: "Hypoallergenic titanium posts for sensitive ears.",
      fit: "30mm height x 20mm width."
    }
  },
  {
    id: "statement-waist-cinch-belt",
    title: "Gold Buckle Statement Leather Waist Belt",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Belts",
    price: 22.00,
    originalPrice: 30.00,
    discount: "-26%",
    rating: 4.7,
    reviewsCount: 52,
    isBestSeller: false,
    isFeatured: false,
    isTrending: false,
    tags: ["Accessories", "Belts"],
    colors: [
      { name: "Cognac Tan", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Noir Black", hex: "#1F2937", bgClass: "bg-gray-900" },
      { name: "Blush Pink", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["S/M (26-32in)", "L/XL (32-38in)"],
    defaultSize: "S/M (26-32in)",
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sleek waist belt featuring custom brushed organic gold buckle. Cinch oversized blazers, knit cardigans, or flowy summer dresses with effortless refinement.",
    specs: {
      composition: "100% Genuine Full Grain Italian Leather & Solid Alloy Buckle",
      care: "Wipe with leather conditioner.",
      fit: "3.5cm width with 7 adjustment holes."
    }
  },
  {
    id: "gold-snake-chain-necklace",
    title: "18K Gold Herringbone Flat Snake Chain",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Jewelry",
    price: 21.00,
    originalPrice: 32.00,
    discount: "-34%",
    rating: 4.9,
    reviewsCount: 142,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Jewelry", "Accessories", "Gold"],
    colors: [
      { name: "18K Gold", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Silver Chrome", hex: "#E3E0F8", bgClass: "bg-[#E3E0F8]" }
    ],
    sizes: ["16-inch + 2-inch ext"],
    defaultSize: "16-inch + 2-inch ext",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Silky-smooth flat snake herringbone chain that rests flat against collarbones with high mirror liquid reflection. Perfect for solo minimalist wear or stacking.",
    specs: {
      composition: "PVD 18K Gold Plated Stainless Steel (Never tarnishes)",
      care: "Sweat-proof, swim-proof, shower-proof.",
      fit: "4mm thickness, 16-inch length with 2-inch extender."
    }
  },
  {
    id: "pearl-velvet-padded-headband",
    title: "French Pearl Velvet Padded Headband",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Headwear",
    price: 16.50,
    originalPrice: 24.00,
    discount: "-31%",
    rating: 4.8,
    reviewsCount: 67,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Accessories", "Headwear"],
    colors: [
      { name: "Lilac Lavender", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Dusty Rose", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Noir Plum", hex: "#300033", bgClass: "bg-[#300033]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Couture-inspired padded velvet hairband studded with scattered lustrous simulated ivory pearls for instant runway-ready styling.",
    specs: {
      composition: "Plush Micro-Velvet & Reinforced Flexible Memory Band",
      care: "Spot clean gently.",
      fit: "Pressure-free padded frame for pain-free wear."
    }
  },
  {
    id: "chunky-dome-gold-ring-set",
    title: "Sculptural Melted Gold Dome Ring Trio",
    category: "accessories",
    gender: "women",
    categoryLabel: "Accessories & Jewelry",
    price: 19.00,
    originalPrice: 28.00,
    discount: "-32%",
    rating: 4.9,
    reviewsCount: 110,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Jewelry", "Accessories", "Rings"],
    colors: [
      { name: "High-Shine Gold", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Brushed Silver", hex: "#E3E0F8", bgClass: "bg-[#E3E0F8]" }
    ],
    sizes: ["Size 6", "Size 7", "Size 8"],
    defaultSize: "Size 7",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Set of three stacking dome rings featuring organic molten textures, smooth croissant curves, and modern minimalist statement weight.",
    specs: {
      composition: "Heavy 18K Gold Vermeil over Recycled Brass",
      care: "Store in protective pouch.",
      fit: "Comfort-fit rounded band interior."
    }
  },

  // ==========================================
  // --- 2. DRESSES & SKIRTS ---
  // ==========================================
  {
    id: "v-neck-summer-dress",
    title: "V-Neck Summer Dress",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 29.99,
    originalPrice: 39.99,
    discount: "-25%",
    rating: 5.0,
    reviewsCount: 128,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Summer Dresses", "Pastel Tops", "Hot Deals"],
    colors: [
      { name: "Lilac Lavender", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Pastel Blossom", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Buttercup Yellow", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Sky Blue", hex: "#BAE6FD", bgClass: "bg-[#BAE6FD]" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "S",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5v4FoFiApF3Qca4X2_9Nzy0hcZrbuM-jr2gzT1xr6PR7iJ2xIALMzTPus_WOYz5SQpLtiuTs0pexElPkwOPDWffpyhmLhI-cT4mUsmUe4ZSzg8JnMPXzDRPbHCrNw67MwF2_vIlyrc7SOf1VJf8xisbZL_H-s24qXXuE_QqqoQpp6w6FVngvAEi2YTu0rZJ6HMbXcjtyQZYFX_jJyAT9zypHF1lhR26JUTVqaZZuP0rEOfkdrxPlmA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDevK1_7H8ppcfkAp4Z0D_AGOHUBdPUpfPIT_5F1JcmexKkJpFxANsmyee1yAZC2tHPxTcEbwyebg-uK7i6llAnLjsJR-R1-lmpTOj1QPzd6f22JFpvzRfkLItVMpmq5Qce8CRAHqK_2HMH3ha0hPtfEqHEqrdfOfGE0L60kX5x5h1FFnP5KfYeZylk0NYY2vU9Wb9ZRqXh3ZLdNnX2q6OZmptpqFA3aGmXOsT_lb8s-NhDMF5TXq6ihA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsmXVmDSKTdgfJIy3BQLMAqDs8SLYKCu4jMTi9MD3lTxn998aYL7pS26Uj2nL9rClqkv2VRZoF9sFb0y3TCHJJJkmpGl5vJa8eZ2V5npYL2vqcYOY356m7a6jER-D361aAiRtq7mkTVwJr9znAv8PCZJT4a0Qy4_YmAhABB0YObMiGT650Mu-lmzhDCM93mIoadTJUSSRQ9SVP1eMFvSnqKFq3ZIFqkwGoGQkx3wiAmuF7eLyrPWTeKQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJBKULE6AHM-dJoYHNzspu-Dpb1JS_2_QNiAu6kuOXsBIpqH9KIswIHrwlQ1BFGX8UAzC8WJyFmlVM_VgjCcU4DLFgE1a_9oGRLdzKW4C2jp6WyevuWsFHjreG3id3Z6iggUDaj-7oZ0lvEp6PPTUUfoEzH8JxMByW1wcqw2xQUPR5c6eqerZmvHJVuIUcOvwKzT6aYah0y8VAR_Qg2TeiUKDRSI_E4P7qTVc8huvjvVMbCKmQFLy96g"
    ],
    description: "Cut from an exceptionally airy organic cotton-linen weave, the V-Neck Summer Dress captures carefree Mediterranean charm. Featuring a sculpted plunge V-neckline, soft gathered empire waist, and delicate flutter tier hem that cascades gently with every stride.",
    specs: {
      composition: "80% Organic Combed Cotton, 20% European Flax Linen",
      care: "Machine wash cold on delicate cycle. Line dry in shade.",
      fit: "Relaxed A-Line Silhouette, true to size."
    }
  },
  {
    id: "floral-wrap-mini-dress",
    title: "Floral Wrap Mini Dress",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 31.99,
    originalPrice: 39.99,
    discount: "-20%",
    rating: 4.9,
    reviewsCount: 89,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Summer Dresses", "Floral", "Hot Deals"],
    colors: [
      { name: "Blush Floral", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Mint Bloom", hex: "#C8F2E2", bgClass: "bg-[#C8F2E2]" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "S",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5z1SLGFM-eVl7GVfAzCjiOmJ24fe66DFwjmqRwTXnMdISvxdAQ__d_dUVy_ogfcljX4ga10f3aWQYNgiQ_o6uA3DBIGQy3ZIlwqhy9820G98Aj_wl_TW3GkctO42Nul8hF7nwMcaOcJw5X0k6jKNFY4FF9Z2QBZdocBB93k_0UbZPjYlldO9peS8O6hPmWBZgUTTe_T3Q7EVCCtY56S-XilY7jWh3gJbGT6LwsNBc0KNW6Uml7JamZA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGnESjOXyo3et1IibjtGsE8NE-naz8WWncs-dYTA4s51pgLB7BzmfuumH2A7ztrn_6pF8ahvoeTvPzy1PcMBNp0mM5Mx6f3RDpAyYhKSPKH9HqvYHj976z6U1Q0L6AZmOr9MjItgh6qxnBP2DgvRqkave5Bh_NtHx2hujYJuHV2akAVCCqVl9ewvuIjMrNiJd9kCa4Frn2PZCRuzKRug9Z8Kzmc_eWeWAgZHgJBgntOv5-e5evD-l5_Q"
    ],
    description: "Chic romantic pink floral wrap mini dress with adjustable tied waist sash and flared elbow sleeves. Made for sunlit garden brunches and coastal vacations.",
    specs: {
      composition: "100% Eco-Vero Viscose",
      care: "Dry clean or delicate cold hand wash.",
      fit: "Adjustable wrap fit to accentuate curves."
    }
  },
  {
    id: "pleated-satin-midi-skirt",
    title: "Pleated Satin Midi Skirt",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 34.50,
    originalPrice: 45.00,
    discount: "-23%",
    rating: 4.8,
    reviewsCount: 112,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Pastel Tops", "Party Wear", "Skirts"],
    colors: [
      { name: "Shimmering Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Champagne Pearl", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACQuZAcei_W0gf9bPF2BI69Khu1TGp_CcNK5-dlNSALMa1mtOGoU43B7LACERcKGYQv-VtaYLk4H2vxd_1H8NwC-7LYwF-yHB5MaUb9i26izMuVLIhtukEiwRkuZ1wg2pyj_HI7fOQCtIn89c3u5pOQupOWIWUCisiHsVAsUUsoKtY6dp_hF6C94JzaXz3naMJj_jpw6fV71xx9Jwb8FarCVQwzkEOz62Kf8CFODsFuZaM8G6CG6Vu0A"
    ],
    description: "High-waisted elegant pleated satin midi skirt with liquid sheen drape that moves gracefully with every step.",
    specs: {
      composition: "100% Lustrous Satin Poly Weave",
      care: "Hand wash cold, hang dry.",
      fit: "Flattering high-rise with hidden elastic band."
    }
  },
  {
    id: "satin-cowl-slip-dress",
    title: "Satin Cowl Slip Dress",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 32.50,
    originalPrice: 50.00,
    discount: "-35%",
    rating: 4.8,
    reviewsCount: 92,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Summer Dresses", "Pastel Tops", "Hot Deals"],
    colors: [
      { name: "Lilac Satin", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Rose Quartz", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "S",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKnw4atXUPI-b2HD6cgAJOUeqLDJfbgXvc47h4UJpA3dll847-qxSTrnJBe_-3BBBzGPqIgOYcYP92CFGC5xkUQ8LejRbheqlPg_IdF40yUddmxTbZCLcmz4uFMsKPRVvOGMjnZCMZUsw-n2MAZxeY_trXrFymji-fSrte-a_-T_KQ6fqjSIYjCYOCnerSYBzMrklrnVy5SBAFTrFsxaUf3QVa9RtSyA7Q_o6dBwRLQhGontNY41cLHA"
    ],
    description: "Luxurious silk-satin evening cowl neck slip dress with bias cut that skims your natural silhouette.",
    specs: {
      composition: "95% Poly Satin, 5% Elastane",
      care: "Hand wash cold.",
      fit: "Sensual body-skimming bias cut."
    }
  },
  {
    id: "boho-tiered-maxi-dress",
    title: "Boho Tiered Chiffon Maxi Dress",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 44.99,
    originalPrice: 59.99,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 68,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Summer Dresses", "Maxi", "Boho"],
    colors: [
      { name: "Pastel Lavender", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Dusty Peach", hex: "#FFD6E0", bgClass: "bg-[#FFD6E0]" }
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Flowing bohemian tiered maxi dress with flutter angel sleeves, smocked stretch bodice, and delicate ruffle hemline.",
    specs: {
      composition: "100% Breathable Georgette Chiffon with Lined Interior",
      care: "Hand wash cold or gentle machine wash.",
      fit: "Graceful empire tiered silhouette."
    }
  },
  {
    id: "corset-linen-sundress",
    title: "Corset Poplin Tiered Sundress",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 36.00,
    originalPrice: 48.00,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 77,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Summer Dresses", "Corset", "Women"],
    colors: [
      { name: "Pastel Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Cream White", hex: "#FFFFFF", bgClass: "bg-white" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "S",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Structured boned corset bustier bodice meets a tiered lightweight cotton poplin skirt with concealed rear zipper and romantic sweetheart neckline.",
    specs: {
      composition: "98% Crisp Organic Cotton Poplin, 2% Spandex",
      care: "Machine wash cold delicate.",
      fit: "Fitted corset bodice with flared skirt."
    }
  },
  {
    id: "ribbed-knit-bodycon-midi",
    title: "Ribbed Knit Cut-Out Bodycon Midi",
    category: "dresses",
    gender: "women",
    categoryLabel: "Dresses & Skirts",
    price: 38.00,
    originalPrice: 52.00,
    discount: "-27%",
    rating: 4.7,
    reviewsCount: 63,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Dresses", "Bodycon", "Knitwear"],
    colors: [
      { name: "Plum Magenta", hex: "#B40063", bgClass: "bg-[#B40063]" },
      { name: "Sage Mist", hex: "#C8F2E2", bgClass: "bg-[#C8F2E2]" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "S",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Form-flattering sculpted ribbed knit midi dress with subtle waist cutout and side slit for effortless transition from day to evening cocktails.",
    specs: {
      composition: "85% Viscose Rayon, 15% Nylon Elastic Stretch",
      care: "Hand wash cold, dry flat to maintain shape.",
      fit: "Figure-hugging stretch knit."
    }
  },

  // ==========================================
  // --- 3. TOPS & TEES ---
  // ==========================================
  {
    id: "off-shoulder-yellow-top",
    title: "Off-Shoulder Yellow Top",
    category: "tops",
    gender: "women",
    categoryLabel: "Tops & Tees",
    price: 21.99,
    originalPrice: 28.00,
    discount: "-21%",
    rating: 4.8,
    reviewsCount: 96,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Pastel Tops", "Summer Tops", "Women"],
    colors: [
      { name: "Buttercup Yellow", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Soft White", hex: "#FFFFFF", bgClass: "bg-white" },
      { name: "Coral Pink", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASzDF2O7nofDRjHaREJRY5psbG0GPzQ2icNLtFH7_4TaX77tRsk4zQfMaYftmzlRMIPT8s5I51qXKb1HVB4aMsX8Bc_TGZ0lQjFQJOWMIxyp_uEAuV3AI2yENPFPsvvZCwq0I6McM3y-UX-aFaKxtCVHtQ9zaW8nDZKCfHqge77_Wol8A44U9fy5R5NvGM6N2vTDEa14zaIQqPQzHDgZHLcDvZ4gmbdpJsYWqduAJG4cw2a-xkbYaIIQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmIvX1navxYwjJcGp0yAOV_tgwbwe0dDLlQB0FNFwcVhsjRR_QC_xBgY5sThTFj4vGUTB__mXXtUQPtUoiulQgN332j2Tv-FWovWb-hyjUPHkmA2Jxweq4wo0A8jK0GeMGy73ynOuHbJTHHBNL9wA5yBXGYaQfvQ7dU_rHRHRDnQVhG6MPcvVDjffZyF7wQD0OE648QHBgM7F0TtrnEZif7FYEJjhZbvcrgNrV7FXtxI4_A375UZDRZA"
    ],
    description: "A joyful sunshine-yellow off-shoulder crop blouse with delicate ruffled trims and an elasticated supportive neckline that stays comfortably in place all day.",
    specs: {
      composition: "100% Breathable Rayon Poplin",
      care: "Hand wash or gentle machine wash cold.",
      fit: "Flattering cropped silhouette with stretch waistband."
    }
  },
  {
    id: "striped-casual-shirt",
    title: "Striped Casual Shirt",
    category: "tops",
    gender: "men",
    categoryLabel: "Tops & Tees",
    price: 27.99,
    originalPrice: 39.99,
    discount: "-30%",
    rating: 4.9,
    reviewsCount: 150,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Pastel Tops", "Hot Deals", "Men"],
    colors: [
      { name: "Rainbow Sunset", hex: "#FFB0C9", bgClass: "bg-[#FFB0C9]" },
      { name: "Ocean Breeze", hex: "#BAE6FD", bgClass: "bg-[#BAE6FD]" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "L",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRldJOnG83Ggn7f8V9iNYbbnG2fWNzYa12MYAFpKtC2k289KsC0CdX8MXmdvnH-xfbbjGuVYVCiyKbEp6aF1WiwTM7t_FQuwANhJo_6XnTr6_C45FNfHFZ1OGkeqst4Sdrgk7ZT9rAwRgSl7dasVJm6KPzFce2iNUMbNDHEc--LfuQLNKvSZz05WGzsXyzuWH64TOQ7MyNBtyyDjYjRMOlx6jJBPdshIrAB3EUU-JEG4ffQiTFw47zRA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8WCRKomYW3_DoC6PpFumvyMrmWuoXenDxCPoyjYUDGk34fxPKATrLDWrN6vLLkJJ_nta-FwPrsEGMiXuer3skmAQPANrBGjZczd-dpcjwMKV_Tjd2YWBJfmgSrzJy3TDgH3JVnQy1KpFtB2uOczDlheJmzvxNZvNrIboCIYYr4dIcfm27yjggUKDVHiiAJd9trRnDiUX1hsCcoG1M2Uwk09vPCmDpTXAqRw4wM5QSdtJiSWSnpoxbfg"
    ],
    description: "Multicolor rainbow vertical striped short-sleeve collared resort shirt. Joyful contemporary aesthetic made from ultra-soft washed cotton.",
    specs: {
      composition: "100% Washed Premium Slub Cotton",
      care: "Tumble dry low, iron warm.",
      fit: "Relaxed boxy resort fit."
    }
  },
  {
    id: "embroidered-knit-cardigan",
    title: "Embroidered Knit Cardigan",
    category: "tops",
    gender: "women",
    categoryLabel: "Tops & Cardigans",
    price: 38.00,
    originalPrice: 48.00,
    discount: "-20%",
    rating: 5.0,
    reviewsCount: 104,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Pastel Tops", "Knitwear", "Women"],
    colors: [
      { name: "Cream & Blossom", hex: "#FFFDF0", bgClass: "bg-[#FFFDF0]" },
      { name: "Pale Mint", hex: "#C8F2E2", bgClass: "bg-[#C8F2E2]" }
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAW4t9nQPaACnjvK_Rb-_4DJNy810DxHeKn6YBKR_CJEBIK8s_-UfzcOQCQjAwOQMjJv88oa7nHfMBMnQdjB3FbN8jWCgigZVbWYciYo9f0Q6angKg7qeUec6MjXNinizmoVNq7vuUcJWSf2mYJA6gfck02y4yJV1fFsqRJs3p55RKtjKTTvtZ0s6O6zqTdVuI2UtHqS2M2Ih4tJ29J5p41ECfAbtLeKs8GeB-jCmvNkMXK_OgXMYdfUw"
    ],
    description: "Cozy cream chunky cable-knit cardigan adorned with handmade pastel floral embroidery and pearlized buttons.",
    specs: {
      composition: "60% Soft Cotton, 40% Merino Blend",
      care: "Hand wash cold, dry flat.",
      fit: "Relaxed slouchy silhouette."
    }
  },
  {
    id: "linen-cuban-collar-shirt",
    title: "Pastel Linen Cuban Collar Resort Shirt",
    category: "tops",
    gender: "men",
    categoryLabel: "Tops & Tees",
    price: 32.00,
    originalPrice: 42.00,
    discount: "-24%",
    rating: 4.8,
    reviewsCount: 65,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Men", "Pastel Tops", "Linen"],
    colors: [
      { name: "Sage Mint", hex: "#C8F2E2", bgClass: "bg-[#C8F2E2]" },
      { name: "Dusty Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Clean White", hex: "#FFFFFF", bgClass: "bg-white" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    defaultSize: "L",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Breezy pure European linen short sleeve shirt with relaxed camp collar, mother-of-pearl buttons, and chest patch pocket.",
    specs: {
      composition: "100% Certified Normandy Linen",
      care: "Machine wash cold, line dry.",
      fit: "Relaxed resort cut."
    }
  },
  {
    id: "silk-halter-neck-top",
    title: "Liquid Silk Halter Neck Top",
    category: "tops",
    gender: "women",
    categoryLabel: "Tops & Blouses",
    price: 26.00,
    originalPrice: 38.00,
    discount: "-31%",
    rating: 4.9,
    reviewsCount: 82,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Tops", "Silk", "Women"],
    colors: [
      { name: "Lavender Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Champagne Glow", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" }
    ],
    sizes: ["XS", "S", "M", "L"],
    defaultSize: "S",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Sculptural backless halter top with high draped neckline in liquid silk-touch satin weave. Pair with wide-leg denim or matching satin skirts.",
    specs: {
      composition: "100% Silk Charmeuse Poly Blend",
      care: "Hand wash cold.",
      fit: "Flowing drape halter silhouette."
    }
  },
  {
    id: "oversized-vintage-graphic-tee",
    title: "Heavyweight Oversized Vintage Graphic Tee",
    category: "tops",
    gender: "men",
    categoryLabel: "Tops & Tees",
    price: 24.00,
    originalPrice: 32.00,
    discount: "-25%",
    rating: 4.8,
    reviewsCount: 118,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Men", "Tops", "Streetwear"],
    colors: [
      { name: "Washed Black", hex: "#1F2937", bgClass: "bg-gray-800" },
      { name: "Oatmeal Heather", hex: "#FFFDF0", bgClass: "bg-[#FFFDF0]" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    defaultSize: "L",
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    description: "260 GSM heavy combed jersey t-shirt with dropped shoulders, ribbed crew collar, and vintage botanical typography screenprint.",
    specs: {
      composition: "100% Organic Heavyweight Cotton (260 GSM)",
      care: "Machine wash cold inside out.",
      fit: "Drop-shoulder relaxed oversized boxy fit."
    }
  },

  // ==========================================
  // --- 4. DENIM & JACKETS & OUTERWEAR ---
  // ==========================================
  {
    id: "denim-classic-jacket",
    title: "Denim Classic Jacket",
    category: "denim",
    gender: "women",
    categoryLabel: "Denim & Jackets",
    price: 49.99,
    originalPrice: 65.00,
    discount: "-23%",
    rating: 5.0,
    reviewsCount: 76,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Denim", "Outerwear", "Women"],
    colors: [
      { name: "Light Wash", hex: "#BAE6FD", bgClass: "bg-[#BAE6FD]" },
      { name: "Vintage Indigo", hex: "#60A5FA", bgClass: "bg-[#60A5FA]" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5C0x6iwtEHSrP-nJGwFzaSH8nf9DrVqACDGXQg3ZcuQ-fcmu3ocrEAJeeSAKHSX3DFOFs5C2ZswfSyEg6IBlrvrZrDM02Zg2NDWNecU03JiEWZ0JsztNLaZRverUYbqVNZV6vF0vGSlGQUSxEgCv3LeHK6GFsoEAUGdqIN8AlMYLsG_TPnOzx1q41pPt3JrzTmcsfhCmNxD8KhrYf_wXaLuGYbZpaxPHbe-sbqqJLiuur6EXPBTF7_w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqjVmkc6uz93quMXKOazDQ8ELzx2km0AbqXtku_UiSwqRnO5akIB9mG2MxOcYffKTux7p2cfCqFH72xQCXx6lPsX_4ijRPG6vs3qf9t1QyL9wb3MSiN_-Gj2fT_VQlqBNoTsiTeI5nKE32ZFQM-PZR41i-fvSCoHEgXkECBK8HgI-92ybpBXKJddcFRkIHsW-9Z_2qPLEQbjK-cGELrDnRN7ow1dxs_1dARbODu8Hb15SxuzUXGQpX1g"
    ],
    description: "Classic light-wash denim trucker jacket featuring branded silver-tone hardware, chest flap pockets, and timeless vintage fading.",
    specs: {
      composition: "100% Rigid Heavyweight Cotton Denim",
      care: "Machine wash cold inside out with like colors.",
      fit: "Structured relaxed trucker jacket."
    }
  },
  {
    id: "pastel-oversized-blazer",
    title: "Pastel Oversized Blazer",
    category: "denim",
    gender: "women",
    categoryLabel: "Denim & Jackets",
    price: 54.99,
    originalPrice: 89.99,
    discount: "-40%",
    rating: 5.0,
    reviewsCount: 210,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Hot Deals", "Pastel Tops", "Outerwear", "Women"],
    colors: [
      { name: "Soft Coral Pink", hex: "#FFB0C9", bgClass: "bg-[#FFB0C9]" },
      { name: "Lilac Violet", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" }
    ],
    sizes: ["S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSglrwaB0OcRE6dyKvsXxw78qkFWDvbAxGyI-b9djy6KHGSD2aS7RQ8oG6xMnrh2eai5XobDm55MV6klNeUuX4jiv8ER8r7-v7m8WE9f_yHw5bwOWdHoCKpVcb3PMgb8md7xZ39LdhJY7eJHLbeAEsbhUYl2X3UoknocyAhmti-OMA0VUw21AksNDti-ks4HfgbfybGnVEB7tAxK9mcW2K5ysNioQmN9KUff2PNuMg4x1r7iMzLeyaQQ"
    ],
    description: "Tailored boyfriend blazer in striking soft pink with peaked lapels and relaxed structured shoulders for high-fashion power dressing.",
    specs: {
      composition: "70% Polyester, 26% Rayon, 4% Spandex",
      care: "Dry clean only.",
      fit: "Relaxed oversized modern tailored fit."
    }
  },
  {
    id: "vintage-distressed-men-trucker",
    title: "Men's Vintage Washed Denim Jacket",
    category: "denim",
    gender: "men",
    categoryLabel: "Denim & Jackets",
    price: 58.00,
    originalPrice: 75.00,
    discount: "-22%",
    rating: 4.9,
    reviewsCount: 84,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Men", "Denim", "Outerwear"],
    colors: [
      { name: "Stone Washed Blue", hex: "#93C5FD", bgClass: "bg-[#93C5FD]" },
      { name: "Washed Charcoal", hex: "#374151", bgClass: "bg-gray-700" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    defaultSize: "L",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavyweight 14oz ring-spun cotton denim jacket with authentic whiskering, brass shank buttons, and fleece interior lining.",
    specs: {
      composition: "100% Ring-Spun Cotton Heavy Denim",
      care: "Machine wash cold.",
      fit: "Standard boxy trucker fit."
    }
  },
  {
    id: "wide-leg-high-rise-jeans",
    title: "High-Rise Relaxed Wide-Leg Denim",
    category: "denim",
    gender: "women",
    categoryLabel: "Denim & Pants",
    price: 46.00,
    originalPrice: 62.00,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 135,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Denim", "Women", "Jeans"],
    colors: [
      { name: "Vintage Bleach Wash", hex: "#BAE6FD", bgClass: "bg-[#BAE6FD]" },
      { name: "Midnight Indigo", hex: "#1E3A8A", bgClass: "bg-blue-900" }
    ],
    sizes: ["24", "26", "28", "30", "32"],
    defaultSize: "28",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
    ],
    description: "The ultimate 90s skater high-rise jean with full-length relaxed wide legs, 5-pocket styling, and rigid non-stretch organic cotton that molds to your shape.",
    specs: {
      composition: "100% Certified Organic Cotton (Non-Stretch)",
      care: "Wash inside out cold.",
      fit: "High rise (11.5in), relaxed through thigh into wide hem."
    }
  },
  {
    id: "classic-belted-trench-coat",
    title: "Classic Double-Breasted Trench Coat",
    category: "denim",
    gender: "women",
    categoryLabel: "Jackets & Outerwear",
    price: 79.99,
    originalPrice: 110.00,
    discount: "-27%",
    rating: 5.0,
    reviewsCount: 94,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Outerwear", "Women", "Jackets"],
    colors: [
      { name: "Classic Honey Sand", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Pastel Lilac Mist", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    defaultSize: "M",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Water-repellent cotton gabardine double-breasted trench coat with storm flap, buckled wrist tabs, and removable waist belt with tortoiseshell buckle.",
    specs: {
      composition: "100% Water-Resistant Cotton Twill Gabardine",
      care: "Professional dry clean only.",
      fit: "Tailored midi-length classic fit."
    }
  },

  // ==========================================
  // --- 5. SHOES & FOOTWEAR ---
  // ==========================================
  {
    id: "chunky-sole-sneakers",
    title: "Chunky Sole Platform Sneakers",
    category: "shoes",
    gender: "women",
    categoryLabel: "Shoes & Footwear",
    price: 62.00,
    originalPrice: 78.00,
    discount: "-20%",
    rating: 4.7,
    reviewsCount: 142,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Shoes", "Streetwear", "Women"],
    colors: [
      { name: "Chalk White & Blush", hex: "#FFFFFF", bgClass: "bg-white" },
      { name: "Pastel Lavender Mix", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" }
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    defaultSize: "38",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcP4fpAoNsqVJ1jJX4WwnhVPxWq4eeusZO1iEd6_ooc-2_mWizWdrXutPNMJC-hcH-v7Mcr0QyeNmAHs4ZR7MG75usbV5gJVWO-QaJDvDPvb_5E6qYhabK7GRfUO2-CO8m03AICxmDVNIaizDTXSkRt7rlBvf7KGCMaf_Mhbi4wetG89wCMGE4XV72N3ugRU4WACJYlUG-ehVBosm4SRG9hpcJMHpl-fN4gkPgeb3OqSWdLyEiBPUylA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcc24IqgxzQfUPoKYad3UcHv4HpglQ6WTv6t4Iy0D9_gakFoTp6dqqmeJw_IRq_gAQlPEKr3SaoG-vAJXTAUarENl06PtC0eCN6r9CuGzQHJulWq6y0ICDhrZNM0Y16BZubwnh1g9D9SgbLgqJ57QfMXRaItddH_JjAohxV1e31TN6ZkTc2KatzKBDytvspPerO2Mbh5hvwBCEh-qTBCiXpCAR6fXddBGqryT-EgNgXP-XWw6Sn-mOqg"
    ],
    description: "Chunky platform trainers featuring premium vegan leather, cushioned cloud insoles, and subtle pastel accent paneling for elevated street flair.",
    specs: {
      composition: "Premium Vegan Leather & Breathable Mesh",
      care: "Wipe clean with damp cloth.",
      fit: "True to standard European size (4cm platform height)."
    }
  },
  {
    id: "embroidered-heart-canvas-lowtops",
    title: "Embroidered Heart Canvas Low-Tops",
    category: "shoes",
    gender: "women",
    categoryLabel: "Shoes & Footwear",
    price: 36.00,
    originalPrice: 48.00,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 119,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Shoes", "Hot Deals", "Women"],
    colors: [
      { name: "Cream & Crimson", hex: "#FFFDF0", bgClass: "bg-[#FFFDF0]" },
      { name: "Lavender Kiss", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" }
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
    defaultSize: "38",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcc24IqgxzQfUPoKYad3UcHv4HpglQ6WTv6t4Iy0D9_gakFoTp6dqqmeJw_IRq_gAQlPEKr3SaoG-vAJXTAUarENl06PtC0eCN6r9CuGzQHJulWq6y0ICDhrZNM0Y16BZubwnh1g9D9SgbLgqJ57QfMXRaItddH_JjAohxV1e31TN6ZkTc2KatzKBDytvspPerO2Mbh5hvwBCEh-qTBCiXpCAR6fXddBGqryT-EgNgXP-XWw6Sn-mOqg"
    ],
    description: "Playful organic cotton canvas sneakers with hand-embroidered red heart accents and vulcanized waffle rubber grip soles for everyday adventures.",
    specs: {
      composition: "100% Organic Washed Canvas, Natural Gum Rubber",
      care: "Hand wash with sneaker foam cleanser.",
      fit: "Comfort regular width fit."
    }
  },
  {
    id: "strappy-pastel-block-heels",
    title: "Pastel Lilac Strappy Block Heel Sandals",
    category: "shoes",
    gender: "women",
    categoryLabel: "Shoes & Footwear",
    price: 48.00,
    originalPrice: 65.00,
    discount: "-26%",
    rating: 4.8,
    reviewsCount: 78,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Shoes", "Party Wear", "Women"],
    colors: [
      { name: "Soft Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Butter Cream", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Rose Tint", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    defaultSize: "37",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Minimalist asymmetrical strappy square-toe sandals on an architectural 6cm sturdy block heel for comfortable all-night dancing.",
    specs: {
      composition: "Vegan Nappa Leather, Memory Foam Insole",
      care: "Store in protective dust bags.",
      fit: "6cm heel height, square toe."
    }
  },
  {
    id: "retro-court-leather-sneakers",
    title: "Minimalist White Leather Court Sneakers",
    category: "shoes",
    gender: "men",
    categoryLabel: "Shoes & Footwear",
    price: 68.00,
    originalPrice: 90.00,
    discount: "-24%",
    rating: 4.9,
    reviewsCount: 165,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Men", "Shoes", "Sneakers"],
    colors: [
      { name: "Triple White", hex: "#FFFFFF", bgClass: "bg-white" },
      { name: "White & Gum", hex: "#92400E", bgClass: "bg-[#92400E]" }
    ],
    sizes: ["40", "41", "42", "43", "44", "45"],
    defaultSize: "42",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Full-grain Italian white leather tennis sneakers with stitch-reinforced rubber cupsole, waxed laces, and butter-soft calfskin lining.",
    specs: {
      composition: "100% Genuine Full-Grain Calfskin Leather",
      care: "Wipe with leather foam cleaner.",
      fit: "True to standard European size."
    }
  },
  {
    id: "woven-leather-mule-slides",
    title: "Handwoven Leather Mule Slides",
    category: "shoes",
    gender: "women",
    categoryLabel: "Shoes & Footwear",
    price: 42.00,
    originalPrice: 58.00,
    discount: "-27%",
    rating: 4.8,
    reviewsCount: 91,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Shoes", "Women", "Slides"],
    colors: [
      { name: "Caramel Tan", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Alabaster White", hex: "#FFFFFF", bgClass: "bg-white" }
    ],
    sizes: ["36", "37", "38", "39", "40"],
    defaultSize: "38",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Artisanal handwoven leather crossover mule slides with padded leather insole and micro heel for effortless summer resort elegance.",
    specs: {
      composition: "Supple Intrecciato Woven Vegan Nappa",
      care: "Keep away from prolonged water exposure.",
      fit: "Slip-on flat slide."
    }
  },

  // ==========================================
  // --- 6. SUNGLASSES & EYEWEAR ---
  // ==========================================
  {
    id: "retro-cat-eye-sunglasses",
    title: "Retro Round Sunglasses",
    category: "sunglasses",
    gender: "women",
    categoryLabel: "Sunglasses & Eyewear",
    price: 18.00,
    originalPrice: 22.00,
    discount: "-18%",
    rating: 5.0,
    reviewsCount: 64,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Sunglasses", "Accessories", "Women"],
    colors: [
      { name: "Amber Tortoise", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Glossy Onyx", hex: "#1F2937", bgClass: "bg-gray-900" },
      { name: "Pastel Rose", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTeX_dCzI8op0ggkqlEE1ThPcBy8c42uiRC3SEUp9FnbfyNGIb3rxpCrRloSXA5LXV0nnTSSaStPQi7q2eGtG6UqYfcMZVdv9Ogj1qfrzn4rAzArJDst9RWYPRRim7qOh-0ekaKFbpzgslfG_qytb9ABZwsYXOHpY0DlpEIODIcs93AefJuAKpo2sISHE1Y9OB_8B5Jfy4LT4W_uS8y7C6brYIfrY_OhiIhsQsV9_bb84pu45e8Ah39w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOA28vF-uhOKCJPAI9GA8XdwhGSSqyWEq_x5k76kBheevcwHrr5RNMLKrqzlkBaQgB76KXryXiYbPxlWiDzC3gjiYYAkol5YrEot3iS-EQ8b5YYZSV5CuQ10lbAL5S8TWRMYYXVX9C7xtGRIxpgukxbOj-KcxqcTjtnhGrX0H7vOm2lyBwDOIBK6AkAFZTJ1EbAOkPIpUgPQsll2pxtLUMgmUe9JQlA3Id7V-tHhmsM0qs4yEeGbKS-w"
    ],
    description: "Iconic amber tortoiseshell cat-eye sunglasses with 100% UV400 polarized lenses and gold-tone metal accent trims.",
    specs: {
      composition: "Italian Acetate Frame, Category 3 UV400 Lenses",
      care: "Includes microfiber cleaning pouch.",
      fit: "Universal flattering face frame."
    }
  },
  {
    id: "aura-oversized-cat-eye",
    title: "Aura Oversized Cat-Eye Shades",
    category: "sunglasses",
    gender: "women",
    categoryLabel: "Sunglasses & Eyewear",
    price: 24.00,
    originalPrice: 32.00,
    discount: "-25%",
    rating: 4.9,
    reviewsCount: 112,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Sunglasses", "Accessories", "Best Seller", "Women"],
    colors: [
      { name: "Onyx Jet Black", hex: "#1F2937", bgClass: "bg-gray-900" },
      { name: "Champagne Tint", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Blush Pink", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmr2xypp0E-NJBZWLfxs0BFmYk2ZMtaE-NX3I05KLSw20RgzvTLSi5p_lvv4oAE5jhUjcLPGyn8PsusO_5I0kG17EXRceRTnI3ffa6DJiD0FcbEhhqO7tXVqZPiE5zQ1nuU03IzeW2AHnNUbyBXeLiXvtODzTosBCEiLN0tOUtHrBYDdN1GuC_UPHkyoJLwUe6PGVbhg8UpiLIrje_jgvtdnA1C3XVHf0bifBJAewKWtz_MQIUfHtQog"
    ],
    description: "High-fashion oversized bevel-edge cat eye frame designed for glamour, offering complete glare reduction and high-contrast optics.",
    specs: {
      composition: "Cellulose Bio-Acetate & Scratch-Resistant TAC Lenses",
      care: "Hard case and cleaning cloth included.",
      fit: "Medium to large face profile."
    }
  },
  {
    id: "geometric-hex-metal-sunglasses",
    title: "Geometric Hexagon Gold Wire Sunglasses",
    category: "sunglasses",
    gender: "men",
    categoryLabel: "Sunglasses & Eyewear",
    price: 22.00,
    originalPrice: 30.00,
    discount: "-26%",
    rating: 4.8,
    reviewsCount: 56,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Men", "Sunglasses", "Accessories"],
    colors: [
      { name: "Gold & Olive Lens", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Silver & Smoke Lens", hex: "#6B7280", bgClass: "bg-gray-500" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-slim lightweight stainless steel hexagonal frame with silicone comfort nosepads and UV400 tinted crystal lenses.",
    specs: {
      composition: "Corrosion-Resistant Monel Alloy, UV400 Lenses",
      care: "Wipe with lens cloth only.",
      fit: "Unisex geometric wire frame."
    }
  },
  {
    id: "gradient-aviator-sunglasses",
    title: "Polarized Gradient Aviator Pilot Sunglasses",
    category: "sunglasses",
    gender: "men",
    categoryLabel: "Sunglasses & Eyewear",
    price: 26.00,
    originalPrice: 38.00,
    discount: "-31%",
    rating: 4.9,
    reviewsCount: 98,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Men", "Sunglasses", "Accessories"],
    colors: [
      { name: "Gunmetal & Smoke", hex: "#374151", bgClass: "bg-gray-700" },
      { name: "Rose Gold & Tea", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Classic double-bridge teardrop pilot aviators with gradient polarized lenses that eliminate reflective highway and water glare.",
    specs: {
      composition: "Ultralight Titanium Alloy Frame, Polarized HD TAC",
      care: "Hard travel case included.",
      fit: "Universal teardrop pilot fit."
    }
  },
  {
    id: "chunky-tortoise-square-shades",
    title: "Chunky Beveled Tortoise Square Sunglasses",
    category: "sunglasses",
    gender: "women",
    categoryLabel: "Sunglasses & Eyewear",
    price: 23.50,
    originalPrice: 32.00,
    discount: "-26%",
    rating: 4.8,
    reviewsCount: 80,
    isBestSeller: false,
    isFeatured: true,
    isTrending: true,
    tags: ["Sunglasses", "Accessories", "Women"],
    colors: [
      { name: "Havana Tortoise", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Cream Horn", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bold thick-rimmed square sunglasses with beveled edges, gold core wire temples, and warm brown gradient lenses.",
    specs: {
      composition: "Heavy Bio-Acetate & UV400 Polarized Lenses",
      care: "Microfiber pouch included.",
      fit: "Statement wide silhouette."
    }
  },

  // ==========================================
  // --- 7. BAGS & PURSES & HANDBAGS ---
  // ==========================================
  {
    id: "quilted-crossbody-bag",
    title: "Quilted Mini Crossbody Bag",
    category: "bags",
    gender: "women",
    categoryLabel: "Bags & Purses",
    price: 38.00,
    originalPrice: 55.00,
    discount: "-30%",
    rating: 5.0,
    reviewsCount: 178,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Bags", "Accessories", "Hot Deals", "Women"],
    colors: [
      { name: "Blush Gold", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Lavender Lilac", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Vanilla Cream", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmyUCzqJx9cJES9Ay5iA9Y59uQ4OfPj3rDo0cOMzh-t9xsZ_H2BD-HDqI4ssFZ3NWJCf2vf382RAUIkW_zzXCrkTQmA1PzHRJACywPH8JcOeTqYg1e8L3TqHVOEAdKIOe1AutJdBQRq4bMssh6DjRDmom9ZSl4RAaLku9SRvqxwziMxFhvs_hR9xDvtztg7k2aBUOR-F79R4S8myelfEXkYNzKZzpsX440T5hocy5KQu3zNYWy_4CVhg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyzzJc5hme8Xdf4LN55D5td6J_cRY5Hk3v5bUvbN6AI92TC6XLSk3m0qwGmsW_Ol7trvUY8P6fopG-3AusezAIFFTC0OPJCQbTUAnpT0g21lZ-5o_3LgFUg3jKYZSkQIx_MRCiSKW_vvTKrAXoPSETh40wTRW-Z8Fi0GDOBVG_45CsB1vF2dvFlhHTYDphwyYSPPrnQsqG4uQlq3RgYFtmUPkWEs83tYyIdznGZ7_9-sTPuSOl4AGw3A"
    ],
    description: "Mini quilted vegan leather crossbody handbag with gleaming gold chain strap, twist-lock closure, and dual card compartments.",
    specs: {
      composition: "Supple Vegan Microfiber Leather, Polished Brass Metal",
      care: "Store in protective dust bag when not in use.",
      fit: "Measures 19cm W x 14cm H x 6cm D."
    }
  },
  {
    id: "woven-straw-summer-tote",
    title: "Handwoven Raffia Summer Tote Bag",
    category: "bags",
    gender: "women",
    categoryLabel: "Bags & Purses",
    price: 42.00,
    originalPrice: 58.00,
    discount: "-27%",
    rating: 4.9,
    reviewsCount: 94,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Bags", "Summer Dresses", "Accessories", "Women"],
    colors: [
      { name: "Natural Honey", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Cream & Tan", hex: "#FFFDF0", bgClass: "bg-[#FFFDF0]" }
    ],
    sizes: ["Medium Tote"],
    defaultSize: "Medium Tote",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Artisanal handwoven natural raffia straw shoulder tote with soft calfskin leather handles and magnetic snap interior closure.",
    specs: {
      composition: "100% Sustainable Madagascar Raffia Straw, Leather Handles",
      care: "Keep dry and spot clean.",
      fit: "34cm W x 28cm H x 12cm D."
    }
  },
  {
    id: "pastel-leather-shoulder-baguette",
    title: "Croissant Leather Baguette Bag",
    category: "bags",
    gender: "women",
    categoryLabel: "Bags & Purses",
    price: 36.50,
    originalPrice: 49.00,
    discount: "-25%",
    rating: 4.8,
    reviewsCount: 81,
    isBestSeller: false,
    isFeatured: true,
    isTrending: false,
    tags: ["Bags", "Pastel Tops", "Women"],
    colors: [
      { name: "Lilac Violet", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Butter Cream", hex: "#FEF08A", bgClass: "bg-[#FEF08A]" },
      { name: "Sage Mint", hex: "#C8F2E2", bgClass: "bg-[#C8F2E2]" }
    ],
    sizes: ["One Size"],
    defaultSize: "One Size",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgUPetZY4xC84nhEYzvDf5AE7uNCqS8R2qgdvfQ-EhY_maguY3D2X2doqeLN5ZguIBfzfJJpiApszVR8LMFVNJQkXnaYX2NhKOILxQa19qg1bqJrwUP0HnEDr4-Sq-L6lJSyyMmltx3OW3pYmgy-ls-fn0dR7s72ybRt-EOTEn5lI3UDm9lHxyHP6aL4VqyUNxMBd-3N0Fdusj7YV0-y3ZBXkZ5Yo1bRUYxvKerzIW4PFnamr74sDniw"
    ],
    description: "Trendy 90s-inspired ruched croissant baguette shoulder bag with smooth zip closure and padded cloud shoulder strap.",
    specs: {
      composition: "Ultra-Soft Vegan Nappa Leather, Gold Finished Hardware",
      care: "Wipe clean with soft microfiber.",
      fit: "25cm W x 15cm H x 8cm D."
    }
  },
  {
    id: "structured-top-handle-mini-bag",
    title: "Structured Top-Handle Mini Kelly Bag",
    category: "bags",
    gender: "women",
    categoryLabel: "Bags & Purses",
    price: 49.00,
    originalPrice: 68.00,
    discount: "-28%",
    rating: 5.0,
    reviewsCount: 114,
    isBestSeller: true,
    isFeatured: true,
    isTrending: true,
    tags: ["Bags", "Luxury", "Women"],
    colors: [
      { name: "Dusty Lavender", hex: "#D8B4F8", bgClass: "bg-[#D8B4F8]" },
      { name: "Powder Pink", hex: "#FFD6E8", bgClass: "bg-[#FFD6E8]" },
      { name: "Jet Noir", hex: "#1F2937", bgClass: "bg-gray-900" }
    ],
    sizes: ["Mini (20cm)"],
    defaultSize: "Mini (20cm)",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Architectural structured trapezoid handbag featuring brushed gold clasp hardware, removable leather shoulder strap, and interior zippered divider pocket.",
    specs: {
      composition: "Saffiano Scratch-Resistant Vegan Leather",
      care: "Store upright with dust cover.",
      fit: "20cm W x 16cm H x 9cm D."
    }
  },
  {
    id: "canvas-leather-weekender-duffle",
    title: "Canvas & Saddle Leather Weekender Duffle",
    category: "bags",
    gender: "men",
    categoryLabel: "Bags & Luggage",
    price: 64.00,
    originalPrice: 85.00,
    discount: "-24%",
    rating: 4.9,
    reviewsCount: 88,
    isBestSeller: true,
    isFeatured: true,
    isTrending: false,
    tags: ["Men", "Bags", "Travel"],
    colors: [
      { name: "Khaki Olive & Tan", hex: "#92400E", bgClass: "bg-[#92400E]" },
      { name: "Charcoal & Black", hex: "#374151", bgClass: "bg-gray-700" }
    ],
    sizes: ["45L Weekender"],
    defaultSize: "45L Weekender",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavy 18oz waterproofed cotton duck canvas duffle bag reinforced with full-grain saddle leather straps, solid brass rivets, and shoe tunnel compartment.",
    specs: {
      composition: "18oz Waxed Cotton Canvas & Full-Grain Saddle Leather",
      care: "Spot clean with cold water.",
      fit: "52cm L x 30cm W x 28cm H (TSA Carry-on approved)."
    }
  }
];

// Helper to look up a product by ID with fallback
function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];
}

// Global category summary counter
function getCategoryProductCounts() {
  const counts = {
    all: PRODUCTS_DATA.length,
    women: PRODUCTS_DATA.filter(p => p.gender === 'women').length,
    men: PRODUCTS_DATA.filter(p => p.gender === 'men').length,
    accessories: PRODUCTS_DATA.filter(p => p.category === 'accessories' || p.tags?.includes('Accessories') || p.tags?.includes('Jewelry') || p.tags?.includes('Caps')).length,
    dresses: PRODUCTS_DATA.filter(p => p.category === 'dresses').length,
    tops: PRODUCTS_DATA.filter(p => p.category === 'tops').length,
    denim: PRODUCTS_DATA.filter(p => p.category === 'denim').length,
    shoes: PRODUCTS_DATA.filter(p => p.category === 'shoes').length,
    sunglasses: PRODUCTS_DATA.filter(p => p.category === 'sunglasses').length,
    bags: PRODUCTS_DATA.filter(p => p.category === 'bags').length
  };
  return counts;
}
