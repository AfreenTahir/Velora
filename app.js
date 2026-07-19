const img = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=92`;

const swatchMap = {
  Ivory: "#f7f0df",
  Blush: "#e8c8c2",
  Black: "#151515",
  Emerald: "#12483c",
  Gold: "#b68b48",
  Navy: "#1b2a41",
  Sage: "#9fb4a7",
  Maroon: "#6d1f2a",
  Tan: "#b78b62",
  Silver: "#c7c9cc",
  White: "#ffffff",
  Denim: "#536f91",
  Teal: "#0f5f64",
  Lavender: "#b8a7d8",
  Plum: "#5c1738",
  Sky: "#9fc6e8",
  Cream: "#f4ead7",
  Champagne: "#dbc7a5",
  Beige: "#d9c4aa",
  Nude: "#d6b59f",
  "Dusty Rose": "#c9969a",
  Peach: "#efb49d",
  "Mint Green": "#b9d8c4",
  "Powder Blue": "#b7cfe5",
  "Sky Blue": "#9fc6e8",
  Lilac: "#c8b6dd",
  "Soft Grey": "#c9c9c4",
  Pearl: "#f2eadf",
  Olive: "#777553",
  Mocha: "#8b6f5b",
  Taupe: "#a59686"
};

const baseProducts = [
  {
    id: "noor-embroidered-3-piece",
    name: "Noor Embroidered 3 Piece Suit",
    category: "Eastern Wear",
    subcategory: "3 Piece Suits",
    collection: "Eid Collection",
    occasion: "Festive",
    material: "Lawn and chiffon",
    price: 12990,
    sale: 10990,
    rating: 4.8,
    reviews: 124,
    colors: ["Ivory", "Blush", "Emerald"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 18,
    badge: "New",
    images: [
      "assets/velora-product-noor.png",
      "assets/velora-category-eastern.png",
      "assets/velora-eastern-lilac-bagh-lawn.png"
    ],
    description:
      "A polished festive suit with delicate embroidery, a soft chiffon dupatta, and an easy ready-to-wear silhouette for Eid dinners and family gatherings.",
    care: "Dry clean preferred. Steam lightly inside out. Store the dupatta flat to protect the embroidery.",
    fit: "Regular South Asian fit. Choose your usual size for a graceful drape."
  },
  {
    id: "saira-silk-kurta-set",
    name: "Saira Silk Kurta Set",
    category: "Ready to Wear",
    subcategory: "Kurtas",
    collection: "Wedding Wear",
    occasion: "Formal",
    material: "Silk blend",
    price: 15990,
    sale: null,
    rating: 4.9,
    reviews: 88,
    colors: ["Emerald", "Gold", "Maroon"],
    sizes: ["S", "M", "L", "XL"],
    stock: 7,
    badge: "Low Stock",
    images: [
      "assets/velora-product-saira.png",
      "assets/velora-eastern-zarmin-lawn.png",
      "assets/velora-eastern-neelam-lawn.png"
    ],
    description:
      "A rich silk kurta set designed for mehndi nights, intimate receptions, and polished evening wear.",
    care: "Dry clean only. Avoid direct perfume on fabric.",
    fit: "Straight fit kurta with relaxed trousers."
  },
  {
    id: "iman-linen-workwear-set",
    name: "Iman Linen Workwear Set",
    category: "Western Wear",
    subcategory: "Tops",
    collection: "Workwear",
    occasion: "Work",
    material: "Linen viscose",
    price: 8990,
    sale: 7490,
    rating: 4.6,
    reviews: 52,
    colors: ["Sage", "White", "Black"],
    sizes: ["XS", "S", "M", "L"],
    stock: 28,
    badge: "Sale",
    images: [
      "assets/velora-product-iman.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "A breathable coordinated set made for office days, cafe meetings, and travel-friendly dressing.",
    care: "Machine wash cold on gentle cycle. Line dry.",
    fit: "Relaxed fit shirt with tapered trousers."
  },
  {
    id: "amara-denim-midi-dress",
    name: "Amara Denim Midi Dress",
    category: "Western Wear",
    subcategory: "Dresses",
    collection: "Casual Wear",
    occasion: "Casual",
    material: "Cotton denim",
    price: 6990,
    sale: null,
    rating: 4.5,
    reviews: 41,
    colors: ["Denim", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 24,
    badge: "New",
    images: [
      "assets/velora-product-amara.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-shoes.png"
    ],
    description:
      "A structured midi dress with a clean neckline and soft waist shaping for everyday styling.",
    care: "Wash inside out. Dark colors may transfer during first wash.",
    fit: "Defined at the waist with an easy skirt."
  },
  {
    id: "zareen-stitched-formal",
    name: "Zareen Stitched Formal Outfit",
    category: "Stitched",
    subcategory: "Formal Wear",
    collection: "Party Wear",
    occasion: "Party",
    material: "Organza and raw silk",
    price: 21990,
    sale: 18990,
    rating: 4.9,
    reviews: 67,
    colors: ["Maroon", "Gold", "Black"],
    sizes: ["S", "M", "L"],
    stock: 5,
    badge: "Sale",
    images: [
      "assets/velora-product-zareen.png",
      "assets/velora-eastern-zarmin-lawn.png",
      "assets/velora-eastern-aabroo-lawn.png"
    ],
    description:
      "An occasion-ready stitched formal with luminous fabric, ornate details, and a modern South Asian finish.",
    care: "Professional dry clean only.",
    fit: "Semi-fitted bodice with relaxed lower silhouette."
  },
  {
    id: "mehreen-summer-kurta",
    name: "Mehreen Printed Summer Kurta",
    category: "Eastern Wear",
    subcategory: "Kurtas",
    collection: "Summer Edit",
    occasion: "Casual",
    material: "Cotton lawn",
    price: 4290,
    sale: null,
    rating: 4.4,
    reviews: 96,
    colors: ["Blush", "Sage", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 37,
    badge: "Best Seller",
    images: [
      "assets/velora-product-mehreen.png",
      "assets/velora-eastern-neelam-lawn.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "A light cotton kurta with fresh seasonal printwork, made for warm days and easy repeat wear.",
    care: "Machine wash cold. Do not bleach.",
    fit: "Straight relaxed cut."
  },
  {
    id: "aabroo-ivory-lawn-suit",
    name: "Aabroo Ivory Printed Lawn Suit",
    category: "Eastern Wear",
    subcategory: "3 Piece Suits",
    collection: "Summer Edit",
    occasion: "Casual",
    material: "Printed lawn",
    price: 8990,
    sale: null,
    rating: 4.8,
    reviews: 76,
    colors: ["Ivory", "Plum", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 22,
    badge: "Ready to Deliver",
    images: [
      "assets/velora-eastern-aabroo-lawn.png",
      "assets/velora-product-noor.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "An ivory lawn suit framed with deep plum printed borders, made for garden lunches, family visits, and easy summer styling.",
    care: "Wash separately in cold water. Dry in shade to protect printed color.",
    fit: "Straight shirt with relaxed trousers and a soft printed dupatta."
  },
  {
    id: "neelam-pastel-lawn-suit",
    name: "Neelam Pastel Blue Lawn Suit",
    category: "Eastern Wear",
    subcategory: "3 Piece Suits",
    collection: "Summer Edit",
    occasion: "Casual",
    material: "Embroidered lawn",
    price: 10990,
    sale: 9490,
    rating: 4.9,
    reviews: 91,
    colors: ["Blush", "Sky", "Ivory"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 14,
    badge: "Ready to Deliver",
    images: [
      "assets/velora-eastern-neelam-lawn.png",
      "assets/velora-product-mehreen.png",
      "assets/velora-eastern-lilac-bagh-lawn.png"
    ],
    description:
      "A soft pastel lawn outfit with blue floral embroidery and an airy printed dupatta for polished daytime dressing.",
    care: "Hand wash gently or dry clean. Steam on low from the reverse side.",
    fit: "Easy ready-to-wear fit with a graceful dupatta drape."
  },
  {
    id: "zarmin-teal-embroidered-lawn",
    name: "Zarmin Teal Embroidered Lawn Suit",
    category: "Eastern Wear",
    subcategory: "3 Piece Suits",
    collection: "Eid Collection",
    occasion: "Festive",
    material: "Embroidered lawn",
    price: 12990,
    sale: null,
    rating: 4.9,
    reviews: 118,
    colors: ["Teal", "Blush", "Ivory"],
    sizes: ["S", "M", "L", "XL"],
    stock: 9,
    badge: "Ready to Deliver",
    images: [
      "assets/velora-eastern-zarmin-lawn.png",
      "assets/velora-product-saira.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "A deep teal embroidered lawn suit with floral detailing and a statement dupatta, designed for Eid plans and intimate festive evenings.",
    care: "Dry clean recommended for embroidery. Avoid direct perfume on fabric.",
    fit: "Straight festive silhouette with comfortable trousers."
  },
  {
    id: "lilac-bagh-floral-lawn-suit",
    name: "Lilac Bagh Floral Lawn Suit",
    category: "Eastern Wear",
    subcategory: "3 Piece Suits",
    collection: "Summer Edit",
    occasion: "Casual",
    material: "Printed lawn",
    price: 9990,
    sale: 8490,
    rating: 4.7,
    reviews: 64,
    colors: ["Ivory", "Lavender", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 17,
    badge: "Ready to Deliver",
    images: [
      "assets/velora-eastern-lilac-bagh-lawn.png",
      "assets/velora-product-zareen.png",
      "assets/velora-eastern-neelam-lawn.png"
    ],
    description:
      "A fresh ivory and lilac lawn suit with garden-inspired florals, scalloped borders, and an elegant everyday finish.",
    care: "Cold wash separately. Do not bleach. Iron on medium heat.",
    fit: "Regular ready-to-wear fit with a lightweight dupatta."
  },
  {
    id: "heritage-handcrafted-khussa",
    name: "Heritage Handcrafted Khussa",
    category: "Shoes",
    subcategory: "Khussas",
    collection: "Wedding Wear",
    occasion: "Festive",
    material: "Leather and threadwork",
    heel: "Flat",
    price: 5490,
    sale: 4690,
    rating: 4.7,
    reviews: 143,
    colors: ["Gold", "Maroon", "Ivory"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    stock: 20,
    badge: "Sale",
    images: [
      "assets/velora-product-khussa.png",
      "assets/velora-category-shoes.png",
      "assets/velora-category-accessories.png"
    ],
    description:
      "Handcrafted khussas finished with festive embroidery and cushioned lining for long event days.",
    care: "Keep dry. Clean with a soft cloth.",
    fit: "True to size. If between sizes, choose one size up."
  },
  {
    id: "lyra-block-heel-sandal",
    name: "Lyra Block Heel Sandal",
    category: "Shoes",
    subcategory: "Heels",
    collection: "Party Wear",
    occasion: "Party",
    material: "Faux leather",
    heel: "Block heel",
    price: 6990,
    sale: null,
    rating: 4.5,
    reviews: 38,
    colors: ["Black", "Gold", "Tan"],
    sizes: ["36", "37", "38", "39", "40"],
    stock: 12,
    badge: "New",
    images: [
      "assets/velora-product-lyra.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-shoes.png"
    ],
    description:
      "A clean block heel sandal with a stable lift, padded sole, and evening-friendly shine.",
    care: "Wipe clean with a damp cloth.",
    fit: "Regular fit with adjustable ankle strap."
  },
  {
    id: "noori-everyday-sneaker",
    name: "Noori Everyday Sneaker",
    category: "Shoes",
    subcategory: "Sneakers",
    collection: "Casual Wear",
    occasion: "Casual",
    material: "Canvas and rubber",
    heel: "Flat",
    price: 5990,
    sale: null,
    rating: 4.3,
    reviews: 57,
    colors: ["White", "Black", "Sage"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    stock: 0,
    badge: "Out of Stock",
    images: [
      "assets/velora-product-noori.png",
      "assets/velora-category-shoes.png",
      "assets/velora-category-western.png"
    ],
    description:
      "A minimal everyday sneaker that pairs with denim, kurtas, and travel looks.",
    care: "Spot clean only.",
    fit: "True to size."
  },
  {
    id: "maira-structured-tote",
    name: "Maira Structured Tote Bag",
    category: "Accessories",
    subcategory: "Bags",
    collection: "Workwear",
    occasion: "Work",
    material: "Vegan leather",
    price: 8490,
    sale: 6990,
    rating: 4.6,
    reviews: 73,
    colors: ["Tan", "Black", "Emerald"],
    sizes: ["One Size"],
    stock: 16,
    badge: "Sale",
    images: [
      "assets/velora-product-maira.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-western.png"
    ],
    description:
      "A structured tote with a laptop-friendly interior and refined hardware for daily use.",
    care: "Wipe clean. Store filled to keep shape.",
    fit: "Fits a 13 inch laptop and daily essentials."
  },
  {
    id: "ayla-pearl-earrings",
    name: "Ayla Pearl Drop Earrings",
    category: "Accessories",
    subcategory: "Jewelry",
    collection: "Wedding Wear",
    occasion: "Formal",
    material: "Gold plated brass",
    price: 3290,
    sale: null,
    rating: 4.8,
    reviews: 109,
    colors: ["Gold", "Ivory"],
    sizes: ["One Size"],
    stock: 31,
    badge: "Best Seller",
    images: [
      "assets/velora-product-ayla.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "Elegant pearl drops with a warm gold finish for bridal events, dinners, and gifting.",
    care: "Avoid water and perfume. Store in pouch.",
    fit: "Lightweight pierced earrings."
  },
  {
    id: "sana-minimal-watch",
    name: "Sana Minimal Bracelet Watch",
    category: "Accessories",
    subcategory: "Watches",
    collection: "Workwear",
    occasion: "Work",
    material: "Stainless steel",
    price: 11990,
    sale: null,
    rating: 4.7,
    reviews: 45,
    colors: ["Gold", "Silver", "Black"],
    sizes: ["One Size"],
    stock: 9,
    badge: "New",
    images: [
      "assets/velora-product-sana.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-shoes.png"
    ],
    description:
      "A slim bracelet watch with a clean dial and polished finish for everyday luxury.",
    care: "Keep away from moisture and harsh chemicals.",
    fit: "Adjustable bracelet strap."
  },
  {
    id: "zoya-silk-scarf",
    name: "Zoya Printed Silk Scarf",
    category: "Accessories",
    subcategory: "Scarves",
    collection: "Winter Edit",
    occasion: "Casual",
    material: "Silk blend",
    price: 3990,
    sale: 3190,
    rating: 4.4,
    reviews: 61,
    colors: ["Blush", "Navy", "Emerald"],
    sizes: ["One Size"],
    stock: 26,
    badge: "Sale",
    images: [
      "assets/velora-product-zoya.png",
      "assets/velora-v-mark.png",
      "assets/velora-category-eastern.png"
    ],
    description:
      "A soft printed scarf for layering with kurtas, coats, dresses, and travel looks.",
    care: "Hand wash cold or dry clean.",
    fit: "Generous square scarf."
  },
  {
    id: "mira-wide-leg-trouser",
    name: "Mira Wide Leg Trouser",
    category: "Western Wear",
    subcategory: "Bottoms",
    collection: "Workwear",
    occasion: "Work",
    material: "Crepe blend",
    price: 5490,
    sale: null,
    rating: 4.5,
    reviews: 33,
    colors: ["Black", "Ivory", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 19,
    badge: "New",
    images: [
      "assets/velora-product-mira.png",
      "assets/velora-category-western.png",
      "assets/velora-category-accessories.png"
    ],
    description:
      "A fluid wide leg trouser with a polished waistline for office styling and evening separates.",
    care: "Machine wash cold. Hang to dry.",
    fit: "High rise with wide leg."
  },
  {
    id: "alina-wedding-clutch",
    name: "Alina Embellished Wedding Clutch",
    category: "Accessories",
    subcategory: "Bags",
    collection: "Wedding Wear",
    occasion: "Formal",
    material: "Satin and beadwork",
    price: 7590,
    sale: null,
    rating: 4.8,
    reviews: 28,
    colors: ["Gold", "Silver", "Maroon"],
    sizes: ["One Size"],
    stock: 11,
    badge: "New",
    images: [
      "assets/velora-product-alina.png",
      "assets/velora-category-accessories.png",
      "assets/velora-category-shoes.png"
    ],
    description:
      "A compact embellished clutch made for shaadi nights, formal dinners, and gifting.",
    care: "Spot clean only. Store in dust bag.",
    fit: "Fits phone, lipstick, cards, and keys."
  }
];

const featuredEasternDropIds = [
  "aabroo-ivory-lawn-suit",
  "neelam-pastel-lawn-suit",
  "zarmin-teal-embroidered-lawn",
  "lilac-bagh-floral-lawn-suit"
];

const catalogVersion = "velora-premium-catalog-v5";
if (localStorage.getItem("velora-catalog-version") !== catalogVersion) {
  localStorage.removeItem("afree-products");
  localStorage.setItem("velora-catalog-version", catalogVersion);
}

const heroEasternProduct = {
  id: "eastern-olive-beige-lawn",
  name: "Olive Beige Embroidered Lawn Suit",
  category: "Eastern Wear",
  audience: "Women",
  subcategory: "3 Piece Suits",
  collection: "Summer Edit",
  occasion: "Festive",
  material: "Embroidered lawn",
  price: 13990,
  sale: 11990,
  rating: 4.9,
  reviews: 176,
  colors: ["Emerald", "Cream", "Gold"],
  sizes: ["XS", "S", "M", "L", "XL"],
  stock: 14,
  badge: "New",
  images: [
    "assets/velora-front-campaign.png",
    "assets/velora-eastern-zarmin-lawn.png",
    "assets/velora-eastern-aabroo-lawn.png"
  ],
  description:
    "A refined olive and beige eastern suit with delicate embroidery, a modest stitched silhouette, and a soft summer finish.",
  care: "Dry clean recommended. Steam gently from reverse.",
  fit: "Regular ready-to-wear fit with a graceful dupatta drape."
};

const categoryPlans = [
  {
    category: "Eastern Wear",
    audience: "Women",
    count: 42,
    subcategories: ["Kurtas", "2 Piece Suits", "3 Piece Suits", "Stitched Suits", "Formal Wear"],
    materials: ["Embroidered lawn", "Cotton lawn", "Silk blend", "Jacquard"],
    occasions: ["Festive", "Casual", "Formal"],
    collections: ["Eid Collection", "Summer Edit", "Wedding Wear"],
    colors: [["Ivory", "Maroon"], ["Teal", "Blush"], ["Emerald", "Gold"], ["Cream", "Sage"]],
    names: ["Noor", "Zarmin", "Aabroo", "Neelam", "Saira", "Mehreen"],
    query: "pakistani eastern wear embroidered lawn suit"
  },
  {
    category: "Women",
    audience: "Women",
    count: 42,
    subcategories: ["Kurtas", "2 Piece Suits", "Dresses", "Tops", "Bottoms", "Casual Wear"],
    materials: ["Cotton lawn", "Silk blend", "Linen viscose", "Cambric cotton"],
    occasions: ["Casual", "Work", "Festive"],
    collections: ["Summer Edit", "Workwear", "Casual Wear"],
    colors: [["Ivory", "Sage"], ["Blush", "Cream"], ["Black", "Gold"], ["Emerald", "Ivory"]],
    names: ["Aara", "Nisa", "Mina", "Eshal", "Lara", "Sobia"],
    query: "pakistani fashion woman premium outfit"
  },
  {
    category: "Western Wear",
    audience: "Women",
    count: 32,
    subcategories: ["Dresses", "Tops", "Bottoms", "Blazers", "Co-ord Sets", "Jeans"],
    materials: ["Crepe blend", "Cotton denim", "Linen viscose", "Satin"],
    occasions: ["Work", "Casual", "Party"],
    collections: ["Workwear", "Casual Wear", "Party Wear"],
    colors: [["Black", "Ivory"], ["Denim", "White"], ["Navy", "Gold"], ["Blush", "Black"]],
    names: ["Amara", "Iman", "Mira", "Leena", "Raya", "Noelle"],
    query: "premium modest western fashion outfit"
  },
  {
    category: "Ready to Wear",
    audience: "Women",
    count: 42,
    subcategories: ["Kurtas", "2 Piece Suits", "3 Piece Suits", "Formal Wear", "Casual Wear"],
    materials: ["Embroidered lawn", "Cotton lawn", "Silk blend", "Jacquard"],
    occasions: ["Festive", "Casual", "Formal"],
    collections: ["Eid Collection", "Summer Edit", "Wedding Wear"],
    colors: [["Teal", "Ivory"], ["Maroon", "Gold"], ["Lavender", "Sage"], ["Blush", "Sky"]],
    names: ["Noor", "Saira", "Zarmin", "Mehreen", "Aabroo", "Neelam"],
    query: "pakistani ready to wear embroidered suit"
  },
  {
    category: "Unstitched",
    audience: "Women",
    count: 36,
    subcategories: ["Unstitched Lawn", "Printed Lawn", "Embroidered Fabric", "3 Piece Suits"],
    materials: ["Printed lawn", "Embroidered lawn", "Chiffon dupatta", "Cambric cotton"],
    occasions: ["Casual", "Festive", "Work"],
    collections: ["Summer Edit", "Eid Collection", "Winter Edit"],
    colors: [["Ivory", "Plum"], ["Sky", "Blush"], ["Emerald", "Gold"], ["Cream", "Tan"]],
    names: ["Bagh", "Gul", "Rang", "Zeenat", "Fiza", "Mahnoor"],
    query: "pakistani unstitched lawn fabric suit"
  },
  {
    category: "Formals",
    audience: "Women",
    count: 32,
    subcategories: ["Formal Wear", "Wedding Wear", "Party Wear", "Organza Suits"],
    materials: ["Organza", "Raw silk", "Chiffon", "Velvet"],
    occasions: ["Formal", "Party", "Festive"],
    collections: ["Wedding Wear", "Party Wear", "Eid Collection"],
    colors: [["Maroon", "Gold"], ["Black", "Silver"], ["Emerald", "Gold"], ["Ivory", "Blush"]],
    names: ["Zareen", "Mehr", "Shehnaz", "Rumi", "Afsana", "Darya"],
    query: "pakistani formal embroidered dress"
  },
  {
    category: "Footwear",
    audience: "Women",
    count: 36,
    subcategories: ["Heels", "Sandals", "Flats", "Sneakers", "Khussa", "Pumps", "Boots"],
    materials: ["Leather", "Faux leather", "Suede", "Canvas and rubber"],
    occasions: ["Casual", "Formal", "Party"],
    collections: ["Wedding Wear", "Casual Wear", "Party Wear"],
    colors: [["Gold", "Ivory"], ["Black", "Tan"], ["Silver", "Blush"], ["White", "Sage"]],
    names: ["Lyra", "Noori", "Heritage", "Ayla", "Ziva", "Maira"],
    query: "premium women shoes sandals heels khussa"
  },
  {
    category: "Accessories",
    audience: "Women",
    count: 32,
    subcategories: ["Handbags", "Tote Bags", "Wallets", "Sunglasses", "Belts", "Scarves", "Watches", "Hair Accessories"],
    materials: ["Vegan leather", "Silk blend", "Stainless steel", "Acetate"],
    occasions: ["Work", "Casual", "Formal"],
    collections: ["Workwear", "Casual Wear", "Wedding Wear"],
    colors: [["Tan", "Gold"], ["Black", "Silver"], ["Blush", "Ivory"], ["Emerald", "Gold"]],
    names: ["Maira", "Sana", "Zoya", "Alina", "Ayla", "Lumi"],
    query: "premium fashion accessories handbag scarf watch sunglasses"
  },
  {
    category: "Jewellery & Beauty",
    audience: "Women",
    count: 42,
    subcategories: ["Earrings", "Necklaces", "Rings", "Bracelets", "Bangles", "Lipstick", "Foundation", "Perfume", "Nail Polish", "Skincare"],
    materials: ["Gold plated brass", "Pearl", "Matte lipstick", "Fragrance"],
    occasions: ["Formal", "Party", "Casual"],
    collections: ["Wedding Wear", "Party Wear", "Gift Edit"],
    colors: [["Gold", "Ivory"], ["Silver", "Black"], ["Blush", "Maroon"], ["Cream", "Gold"]],
    names: ["Ayla", "Mehr", "Lina", "Rouge", "Nura", "Pearl"],
    query: "premium jewellery beauty cosmetics flatlay"
  },
  {
    category: "Teens",
    audience: "Teens",
    count: 32,
    subcategories: ["Hoodies", "T-shirts", "Jeans", "Dresses", "Sneakers", "Bags"],
    materials: ["Cotton fleece", "Jersey cotton", "Denim", "Canvas"],
    occasions: ["Casual", "Work", "Party"],
    collections: ["Casual Wear", "Summer Edit", "Winter Edit"],
    colors: [["Sky", "White"], ["Black", "Denim"], ["Lavender", "Cream"], ["Sage", "Ivory"]],
    names: ["Mishi", "Lana", "Tara", "Zee", "Rumi", "Nora"],
    query: "premium teen fashion outfit sneakers bag"
  }
];

const stablePhotoIds = [
  "photo-1496747611176-843222e1e57c",
  "photo-1483985988355-763728e1935b",
  "photo-1558769132-cb1aea458c5e",
  "photo-1529139574466-a303027c1d8b",
  "photo-1487412720507-e7ab37603c6f",
  "photo-1503342217505-b0a15ec3261c",
  "photo-1495385794356-15371f348c31",
  "photo-1524504388940-b1c1722653e1",
  "photo-1515372039744-b8f02a3ae446",
  "photo-1539109136881-3be0616acf4b",
  "photo-1509631179647-0177331693ae",
  "photo-1512436991641-6745cdb1723f",
  "photo-1490481651871-ab68de25d43d",
  "photo-1516762689617-e1cffcef479d",
  "photo-1539008835657-9e8e9680c956",
  "photo-1554412933-514a83d2f3c8",
  "photo-1542291026-7eec264c27ff",
  "photo-1543163521-1bf539c55dd2",
  "photo-1549298916-b41d501d3772",
  "photo-1525966222134-fcfa99b8ae77",
  "photo-1552346154-21d32810aba3",
  "photo-1594223274512-ad4803739b7c",
  "photo-1584917865442-de89df76afd3",
  "photo-1523170335258-f5ed11844a49",
  "photo-1522312346375-d1a52e2b99b3",
  "photo-1515562141207-7a88fb7ce338",
  "photo-1512496015851-a90fb38ba796",
  "photo-1522335789203-aabd1fc54bc9"
];

function catalogImage(query, index) {
  const photoId = stablePhotoIds[index % stablePhotoIds.length];
  return img(photoId, 1400);
}

function fallbackFor(product = {}) {
  const category = typeof product === "string" ? product : product.category;
  const map = {
    "Eastern Wear": "assets/velora-category-eastern.png",
    Women: "assets/velora-category-eastern.png",
    "Ready to Wear": "assets/velora-eastern-zarmin-lawn.png",
    Unstitched: "assets/velora-drop-printed-dupatta.png",
    Formals: "assets/velora-front-campaign.png",
    "Western Wear": "assets/velora-category-western.png",
    Footwear: "assets/velora-category-shoes.png",
    Shoes: "assets/velora-category-shoes.png",
    Accessories: "assets/velora-category-accessories.png",
    "Jewellery & Beauty": "assets/velora-product-ayla.png",
    Teens: "assets/velora-category-western.png"
  };
  return map[category] || "assets/velora-category-eastern.png";
}

function productImage(product, index = 0) {
  return product?.images?.[index] || fallbackFor(product);
}

function imageTag(src, alt, product, attrs = "") {
  const fallback = fallbackFor(product);
  const safeSrc = src || fallback;
  const safeAlt = String(alt || "").replace(/"/g, "&quot;");
  return `<img src="${safeSrc}" alt="${safeAlt}" loading="lazy" decoding="async" onerror="this.onerror=null;this.alt='';this.src='${fallback}'" ${attrs} />`;
}

function buildGeneratedCatalog() {
  const products = [heroEasternProduct];
  let index = 1;
  categoryPlans.forEach((plan) => {
    for (let i = 0; i < plan.count; i += 1) {
      const subcategory = plan.subcategories[i % plan.subcategories.length];
      const material = plan.materials[i % plan.materials.length];
      const occasion = plan.occasions[i % plan.occasions.length];
      const collection = plan.collections[i % plan.collections.length];
      const colors = plan.colors[i % plan.colors.length];
      const nameRoot = plan.names[i % plan.names.length];
      const basePrice = plan.category === "Jewellery & Beauty" ? 2490 : plan.category === "Accessories" ? 4990 : plan.category === "Footwear" ? 5490 : 6990;
      const price = basePrice + ((i % 11) * 850) + (Math.floor(i / 6) * 500);
      const salePercent = [0, 10, 15, 20, 25, 30, 40][(i + plan.category.length) % 7];
      const sale = salePercent ? Math.round((price * (100 - salePercent)) / 100 / 10) * 10 : null;
      const stock = (i + plan.category.length) % 13 === 0 ? 0 : (i % 7) + 4 + (i % 19);
      const badge = stock === 0 ? "Out of Stock" : sale ? "Sale" : i % 5 === 0 ? "Best Seller" : i % 4 === 0 ? "New" : "Ready to Deliver";
      const id = `${plan.category}-${subcategory}-${nameRoot}-${i + 1}`.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      products.push({
        id,
        name: `${nameRoot} ${subcategory} ${i + 1}`,
        category: plan.category,
        audience: plan.audience,
        subcategory,
        collection,
        occasion,
        material,
        heel: plan.category === "Footwear" ? subcategory : "",
        price,
        sale,
        rating: Number((4.3 + ((i % 7) * 0.08)).toFixed(1)),
        reviews: 24 + ((i * 17) % 220),
        colors,
        sizes: plan.category === "Footwear" ? ["36", "37", "38", "39", "40", "41"] : plan.category === "Accessories" || plan.category === "Jewellery & Beauty" ? ["One Size"] : ["XS", "S", "M", "L", "XL"],
        stock,
        badge,
        images: [
          catalogImage(`${plan.query} ${subcategory} ${colors.join(" ")}`, index++),
          catalogImage(`${plan.query} detail ${material}`, index++),
          catalogImage(`${plan.query} premium studio`, index++)
        ],
        description: `A polished ${subcategory.toLowerCase()} designed for ${occasion.toLowerCase()} styling, finished in ${material.toLowerCase()} with a premium Velora look.`,
        care: plan.category === "Jewellery & Beauty" ? "Store away from heat and moisture. Keep sealed after use." : "Handle gently. Clean or wash according to fabric care and store in a cool dry place.",
        fit: plan.category === "Footwear" ? "True to size with a comfortable everyday fit." : plan.category === "Accessories" || plan.category === "Jewellery & Beauty" ? "One size, designed for easy gifting and styling." : "Regular South Asian fit with comfortable movement."
      });
    }
  });
  return products;
}

const generatedCatalog = buildGeneratedCatalog();
let products = prioritizeFeaturedDrop(mergeCatalogProducts(load("afree-products", generatedCatalog), generatedCatalog));
let cart = load("afree-cart", []);
let wishlist = new Set(load("afree-wishlist", []));
let recentlyViewed = load("afree-recent", []);
let currency = load("afree-currency", "PKR");
let selected = {};
let orderPlaced = load("afree-order", null);
let filterOpen = false;
let searchOpen = false;
let shopState = {
  audiences: [],
  categories: [],
  sizes: [],
  colors: [],
  materials: [],
  occasions: [],
  collections: [],
  heels: [],
  availability: "",
  discount: false,
  minPrice: 0,
  maxPrice: 25000,
  sort: "Newest",
  visible: 12
};

const icons = {
  search: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  heart: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
  cart: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.1 2.1h3l2.4 12.3a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6l1.4-7.4H6.1"/></svg>',
  user: '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
  x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  bag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>',
  instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
  facebook: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5h2.3V5.1A18 18 0 0 0 13 5c-3.2 0-5.4 1.9-5.4 5.3v3H4v3.8h3.6V22H12v-4.9h3.6l.6-3.8H12v-2.6c0-1.1.3-2.2 2-2.2Z"/></svg>',
  tiktok: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 3c.4 2.5 1.8 4.2 4.4 4.4v3.5a7.6 7.6 0 0 1-4.3-1.3v6.6c0 3.3-2.4 5.8-5.9 5.8A5.6 5.6 0 0 1 5 16.4c0-3.7 3.5-6.4 7.1-5.4v3.7c-1.7-.6-3.5.4-3.5 1.8 0 1.2.9 2 2.1 2 1.3 0 2.2-.8 2.2-2.5V3h3.7Z"/></svg>'
};

const veloraMark = `
  <svg class="velora-symbol" viewBox="0 0 64 64" aria-hidden="true">
    <path class="velora-scarf-shadow" d="M8 14 C15 2 28 8 33 24 C36 34 40 44 46 45 C52 45 54 31 59 20 C61 15 65 15 68 19 C70 22 68 28 65 34 C59 46 54 58 45 59 C34 60 29 44 25 32 C21 20 16 19 11 24 C8 27 5 22 8 14 Z" />
    <path class="velora-scarf" d="M7 13 C15 1 28 7 33 24 C36 34 40 43 46 44 C52 44 54 30 59 19 C61 14 66 15 69 20 C71 23 69 29 65 35 C60 45 54 57 45 58 C34 59 29 43 25 31 C21 19 16 18 11 23 C8 26 4 22 7 13 Z" />
    <path class="velora-scarf-highlight" d="M13 13 C22 9 28 18 32 30 C36 43 40 51 47 52" />
    <path class="velora-scarf-end" d="M55 32 C59 31 63 33 66 37 L62 47 C58 45 54 43 51 40 C52 37 53 34 55 32 Z" />
    <path class="velora-scarf-embroidery" d="M55 39 C57 36 59 36 61 39 C63 36 65 36 67 39" />
    <path class="velora-scarf-fringe" d="M53 42 L50 47 M57 44 L55 51 M61 45 L61 52 M65 44 L68 50" />
  </svg>
`;

function brandLogo(extraClass = "") {
  return `
    <span class="brand-v-crop ${extraClass}" aria-label="Velora V logo">
      <img src="assets/velora-v-mark.png" alt="Velora" />
    </span>
  `;
}

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function mergeBaseProducts(savedProducts) {
  const saved = Array.isArray(savedProducts) ? savedProducts : [];
  const baseIds = new Set(baseProducts.map((product) => product.id));
  const customProducts = saved.filter((product) => product && product.id && !baseIds.has(product.id));
  return [...baseProducts, ...customProducts];
}

function mergeCatalogProducts(savedProducts, catalogProducts) {
  const saved = Array.isArray(savedProducts) ? savedProducts : [];
  const catalogIds = new Set(catalogProducts.map((product) => product.id));
  const customProducts = saved.filter((product) => product && product.id && !catalogIds.has(product.id));
  return [...catalogProducts, ...customProducts];
}

function prioritizeFeaturedDrop(productList) {
  const priority = new Map(featuredEasternDropIds.map((id, index) => [id, index]));
  return [...productList].sort((a, b) => {
    const aRank = priority.has(a.id) ? priority.get(a.id) : Number.MAX_SAFE_INTEGER;
    const bRank = priority.has(b.id) ? priority.get(b.id) : Number.MAX_SAFE_INTEGER;
    return aRank - bRank;
  });
}

function featuredDropRank(product) {
  const index = featuredEasternDropIds.indexOf(product.id);
  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function save() {
  localStorage.setItem("afree-products", JSON.stringify(products));
  localStorage.setItem("afree-cart", JSON.stringify(cart));
  localStorage.setItem("afree-wishlist", JSON.stringify([...wishlist]));
  localStorage.setItem("afree-recent", JSON.stringify(recentlyViewed));
  localStorage.setItem("afree-currency", JSON.stringify(currency));
  localStorage.setItem("afree-order", JSON.stringify(orderPlaced));
}

function money(amount) {
  if (currency === "USD") return `$${Math.max(1, Math.round(amount / 280)).toLocaleString()}`;
  return `Rs. ${amount.toLocaleString()}`;
}

function effectivePrice(product) {
  return product.sale || product.price;
}

function discount(product) {
  return product.sale ? Math.round(((product.price - product.sale) / product.price) * 100) : 0;
}

function stockLabel(product) {
  if (product.stock <= 0) return "Out of stock";
  if (product.stock <= 8) return "Low stock";
  return "In stock";
}

function productById(id) {
  return products.find((product) => product.id === id) || products[0];
}

const homepagePhotoIds = [
  "photo-1529139574466-a303027c1d8b",
  "photo-1487412720507-e7ab37603c6f",
  "photo-1503342217505-b0a15ec3261c",
  "photo-1495385794356-15371f348c31",
  "photo-1515372039744-b8f02a3ae446",
  "photo-1539109136881-3be0616acf4b",
  "photo-1509631179647-0177331693ae",
  "photo-1512436991641-6745cdb1723f",
  "photo-1496747611176-843222e1e57c",
  "photo-1515886657613-9f3515b0c78f",
  "photo-1516762689617-e1cffcef479d",
  "photo-1539008835657-9e8e9680c956",
  "photo-1554412933-514a83d2f3c8",
  "photo-1524504388940-b1c1722653e1",
  "photo-1542291026-7eec264c27ff",
  "photo-1543163521-1bf539c55dd2",
  "photo-1549298916-b41d501d3772",
  "photo-1525966222134-fcfa99b8ae77",
  "photo-1552346154-21d32810aba3",
  "photo-1594223274512-ad4803739b7c",
  "photo-1584917865442-de89df76afd3",
  "photo-1523170335258-f5ed11844a49",
  "photo-1522312346375-d1a52e2b99b3",
  "photo-1515562141207-7a88fb7ce338",
  "photo-1522335789203-aabd1fc54bc9",
  "photo-1512496015851-a90fb38ba796"
];

const softLuxurySources = {
  trending: [
    "assets/velora-drop-ivory-embroidered.png",
    "assets/velora-eastern-lilac-bagh-lawn.png",
    "assets/velora-eastern-neelam-lawn.png",
    "assets/velora-drop-peach-lawn.png",
    "assets/velora-category-accessories.png",
    "assets/velora-category-shoes.png",
    "assets/velora-product-saira.png",
    "assets/velora-product-zoya.png"
  ],
  looks: [
    "assets/velora-front-campaign.png",
    "assets/velora-category-eastern.png",
    "assets/velora-category-western.png",
    "assets/velora-product-maira.png",
    "assets/velora-product-ayla.png",
    "assets/velora-product-lyra.png"
  ]
};

function imageSource(source) {
  if (!source) return "";
  return source.startsWith("assets/") || source.startsWith("http") ? source : img(source, 1600);
}

function curatedProduct(product, source, overrides = {}) {
  const photo = imageSource(source);
  return {
    ...product,
    ...overrides,
    images: [photo, ...(product.images || []).filter((item) => item !== photo)]
  };
}

function firstUnusedProduct(usedIds, predicate) {
  const product = products.find((item) => !usedIds.has(item.id) && predicate(item));
  if (product) usedIds.add(product.id);
  return product;
}

function curatedHomepage() {
  const usedIds = new Set();
  let photoIndex = 0;
  let trendingImageIndex = 0;
  let lookImageIndex = 0;
  const pick = (predicate, overrides = {}, source = "") => {
    const product = firstUnusedProduct(usedIds, predicate) || firstUnusedProduct(usedIds, () => true);
    return curatedProduct(product, source || homepagePhotoIds[photoIndex++], overrides);
  };
  const trendPick = (predicate, overrides = {}) => pick(predicate, overrides, softLuxurySources.trending[trendingImageIndex++]);
  const lookPick = (predicate, overrides = {}) => pick(predicate, overrides, softLuxurySources.looks[lookImageIndex++]);

  const trending = [
    trendPick((p) => p.category === "Formals", { name: "Ivory Embroidered Formal Suit", colors: ["Ivory", "Champagne"], badge: "Trending" }),
    trendPick((p) => p.category === "Eastern Wear" && p.subcategory.includes("3 Piece"), { name: "Lilac Lawn Statement Suit", colors: ["Lilac", "Ivory"], badge: "Best Seller" }),
    trendPick((p) => p.category === "Ready to Wear", { name: "Powder Blue Summer Pret Suit", colors: ["Powder Blue", "White"], badge: "Trending" }),
    trendPick((p) => p.category === "Unstitched", { name: "Peach Premium Lawn Collection", colors: ["Peach", "Cream"], badge: "Trending" }),
    trendPick((p) => p.category === "Accessories" && p.subcategory.includes("Handbags"), { name: "Champagne Structured Handbag", colors: ["Champagne", "Nude"], badge: "Best Seller" }),
    trendPick((p) => p.category === "Footwear" && p.subcategory !== "Sneakers", { name: "Nude Pearl Detail Sandals", colors: ["Nude", "Gold"], badge: "New" }),
    trendPick((p) => p.category === "Eastern Wear", { name: "Olive Silk Ready Set", colors: ["Olive", "Cream"], badge: "Trending" }),
    trendPick((p) => p.category === "Accessories", { name: "Ivory Silk Scarf Edit", colors: ["Ivory", "Nude"], badge: "Best Seller" })
  ];

  const arrivals = [
    pick((p) => p.category === "Ready to Wear" && p.badge === "New", { name: "Blush Pink Newly Launched Suit", colors: ["Blush", "Ivory"], badge: "New" }),
    pick((p) => p.category === "Eastern Wear" && p.badge === "New", { name: "Mint Embroidered Kurta Set", colors: ["Mint Green", "Cream"], badge: "New" }),
    pick((p) => p.category === "Unstitched" && p.badge === "New", { name: "Peach Printed Lawn Collection", colors: ["Peach", "White"], badge: "New" }),
    pick((p) => p.category === "Women" && p.badge === "New", { name: "Dusty Rose Casual Pret Set", colors: ["Dusty Rose", "Beige"], badge: "New" }),
    pick((p) => p.category === "Formals" && p.badge === "New", { name: "Ivory Chiffon Semi Formal", colors: ["Ivory", "Champagne"], badge: "New" }),
    pick((p) => p.category === "Western Wear" && p.badge === "New", { name: "Soft Grey Tailored Co-ord", colors: ["Soft Grey", "White"], badge: "New" }),
    pick((p) => p.category === "Accessories" && p.badge === "New", { name: "Champagne Mini Shoulder Bag", colors: ["Champagne", "Nude"], badge: "New" }),
    pick((p) => p.category === "Footwear" && p.badge === "New", { name: "Cream Minimal Block Heels", colors: ["Cream", "Gold"], badge: "New" })
  ];

  const best = [
    pick((p) => p.category === "Eastern Wear", { name: "Cream Floral Lawn Bestseller", colors: ["Cream", "Sage"], badge: "Best Seller" }),
    pick((p) => p.category === "Ready to Wear", { name: "Sky Blue Ready To Wear Suit", colors: ["Sky Blue", "Ivory"], badge: "Best Seller" }),
    pick((p) => p.category === "Footwear", { name: "Blush Embroidered Khussa", colors: ["Blush", "Gold"], badge: "Best Seller" }),
    pick((p) => p.category === "Accessories", { name: "Ivory Silk Scarf Edit", colors: ["Ivory", "Nude"], badge: "Best Seller" })
  ];

  const looks = [
    lookPick((p) => p.category === "Formals", { name: "Editorial Olive Formal Look", colors: ["Olive", "Champagne"], badge: "Look" }),
    lookPick((p) => p.category === "Eastern Wear", { name: "Sage Embroidered Lawn Look", colors: ["Sage", "Cream"], badge: "Look" }),
    lookPick((p) => p.category === "Western Wear", { name: "Minimal Beige Day Look", colors: ["Beige", "White"], badge: "Look" }),
    lookPick((p) => p.category === "Accessories", { name: "Mocha Workwear Handbag", colors: ["Mocha", "Gold"], badge: "Look" }),
    lookPick((p) => p.category === "Jewellery & Beauty", { name: "Pearl And Champagne Jewelry", colors: ["Champagne", "Pearl"], badge: "Look" }),
    lookPick((p) => p.category === "Footwear", { name: "Nude Occasion Heels", colors: ["Nude", "Gold"], badge: "Look" })
  ];

  return { trending, arrivals, best, looks };
}

function setRoute(route) {
  location.hash = route;
}

function parseRoute() {
  const raw = location.hash.replace(/^#/, "") || "home";
  const [path, query = ""] = raw.split("?");
  return { path, params: new URLSearchParams(query) };
}

function header(route) {
  const navItems = [
    ["Ready To Wear", "shop?category=Ready to Wear"],
    ["Unstitched", "shop?category=Unstitched"],
    ["Formals", "shop?category=Formals"],
    ["Footwear", "shop?category=Footwear"],
    ["Accessories", "shop?category=Accessories"],
    ["Sale", "shop?sale=true"]
  ];
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const currentCategory = route.params.get("category") || "";
  const currentCollection = route.params.get("collection") || "";
  const currentSale = route.params.get("sale") || "";
  const isNavActive = (link) => {
    if (!route.path.startsWith("shop")) return false;
    if (link.includes("sale=true")) return currentSale === "true";
    if (link.includes("collection=New")) return currentCollection === "New";
    if (!currentCategory) return false;
    return decodeURIComponent(link).includes(`category=${currentCategory}`);
  };
  return `
    <div class="utility-bar">
      <a href="#account">Sign In</a>
      <a href="#page/track">Tracking Info</a>
      <a href="#checkout">Gifting</a>
    </div>
    <header class="site-header">
      <div class="header-main">
        <nav class="primary-gender-nav" aria-label="Collection navigation">
          <a href="#shop?audience=Women" class="active">Women</a>
          <a href="#shop?category=Western Wear">Western</a>
          <a href="#shop?category=Jewellery%20%26%20Beauty">Jewelry & Beauty</a>
          <a href="#shop?audience=Teens">Teens</a>
        </nav>
        <a class="brand brand-center" href="#home" aria-label="Velora homepage">${brandLogo("header-v-only")}</a>
        <div class="header-actions text-actions">
          <button type="button" class="header-action" data-action="toggle-search">${icons.search}<span>Search</span></button>
          <a class="header-action" href="#wishlist">${icons.heart}<span>Wishlist</span><span class="text-badge">${wishlist.size}</span></a>
          <button type="button" class="header-action" data-action="open-cart">${icons.bag}<span>Bag</span><span class="text-badge">${cartCount}</span></button>
        </div>
      </div>
      <div class="secondary-nav-wrap">
        <div class="currency-country"><span class="pak-flag">PK</span><span>PAK</span></div>
        <nav class="nav" aria-label="Primary navigation">
          ${navItems.map(([label, link]) => `<a href="#${link}" class="${isNavActive(link) ? "active" : ""}">${label}</a>`).join("")}
        </nav>
        <select class="currency slim-currency" data-action="currency" aria-label="Currency">
          <option ${currency === "PKR" ? "selected" : ""}>PKR</option>
          <option ${currency === "USD" ? "selected" : ""}>USD</option>
        </select>
      </div>
      <div class="search-strip ${searchOpen || route.path === "search" ? "is-open" : ""}">
        <div class="search-wrap">
          <form class="search-box" data-search-form>
            ${icons.search}
            <input id="siteSearch" type="search" autocomplete="off" placeholder="Search Velora..." aria-label="Search products" />
          </form>
          <div class="suggestions" id="suggestions"></div>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <a class="brand footer-brand" href="#home">${brandLogo()}</a>
          <p>Premium ready-to-wear, stitched fashion, shoes, bags, jewelry, watches, scarves, and accessories for modern South Asian wardrobes.</p>
          <p>Cards, bank transfer, wallets, and cash on delivery accepted.</p>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#page/about">About Us</a>
          <a href="#page/contact">Contact</a>
          <a href="#page/faq">FAQs</a>
          <a href="#shop">Shop All</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="#page/track">Order Tracking</a>
          <a href="#page/exchange">Returns and Exchange</a>
          <a href="#page/size-guide">Size Guide</a>
          <a href="#wishlist">Wishlist</a>
        </div>
        <div>
          <h4>Policies</h4>
          <a href="#page/shipping">Shipping Policy</a>
          <a href="#page/returns">Return Policy</a>
          <a href="#page/privacy">Privacy Policy</a>
          <a href="#page/terms">Terms and Conditions</a>
        </div>
        <div>
          <h4>Connect</h4>
          <p>Gulberg, Lahore, Pakistan</p>
          <p>support@velora.pk</p>
          <p>+92 300 555 0198</p>
          <div class="social-row" aria-label="Social media links">
            <a class="social-icon" href="#home" title="Instagram">${icons.instagram}</a>
            <a class="social-icon" href="#home" title="TikTok">${icons.tiktok}</a>
            <a class="social-icon" href="#home" title="Facebook">${icons.facebook}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">VELORA | Wear Confidence. Secure shopping for modern Pakistani and global wardrobes.</div>
    </footer>
  `;
}

function appShell(content, route) {
  return `${header(route)}<main>${content}</main>${footer()}<button class="whatsapp" data-action="whatsapp">WhatsApp Support</button>${cartDrawer()}<div class="modal" id="modal"></div>`;
}

function homePage() {
  const home = curatedHomepage();
  return `
    <section class="hero">
      <div class="hero-content">
        <div class="hero-title-lockup">
          <span>Between</span>
          <h1>Tides</h1>
          <strong>Summer Collection</strong>
        </div>
        <p>Wear Confidence. Refined South Asian silhouettes for bright days, sea air, and effortless occasion dressing.</p>
        <div class="btn-row">
          <a class="btn primary" href="#shop?collection=New">${icons.bag}Shop New Arrivals</a>
          <a class="btn light" href="#shop?sale=true">Explore Sale</a>
        </div>
      </div>
    </section>
    ${categorySection()}
    ${productRail("Trending Now", "Fashion-forward statement pieces, viral silhouettes, and modern edits curated for the season.", home.trending)}
    ${productRail("New Arrivals", "Fresh pastel launches, new lawn drops, summer pret, and recently released occasion pieces.", home.arrivals)}
    ${collectionSection()}
    ${highlightSection("Eastern Collection Highlight", "Embroidered lawn, stitched suits, modest traditional silhouettes, and 3 piece outfits made for Pakistani festive calendars.", "Eastern Wear", "assets/velora-front-campaign.png")}
    ${highlightSection("Western Collection Highlight", "Clean dresses, trousers, workwear sets, and casual separates with easy everyday styling.", "Western Wear", "photo-1483985988355-763728e1935b")}
    ${productRail("Best Sellers", "Trusted favorites in soft tones, polished styling, and easy repeat-wear silhouettes.", home.best)}
    ${promoSection()}
    ${reviewsSection()}
    ${instagramSection(home.looks)}
    ${newsletterSection()}
  `;
}

function categorySection() {
  const cats = [
    ["Eastern Wear", "Kurtas, suits, stitched formals", "assets/velora-category-eastern.png"],
    ["Western Wear", "Dresses, tops, trousers", "assets/velora-category-western.png"],
    ["Footwear", "Khussas, heels, flats, sneakers", "assets/velora-category-shoes.png"],
    ["Accessories", "Bags, jewelry, watches, scarves", "assets/velora-category-accessories.png"]
  ];
  return `
    <section class="section">
      <div class="section-inner">
        <div class="section-title">
          <div><h2>Shop By Category</h2><p>Everything a modern wardrobe needs, arranged for quick browsing.</p></div>
          <a class="btn ghost" href="#shop">View All</a>
        </div>
        <div class="category-grid">
          ${cats.map(([title, copy, photo]) => `
            <a class="category-tile" href="#shop?category=${encodeURIComponent(title)}">
              <img src="${photo}" alt="${title}" loading="lazy" />
              <div class="tile-text"><h3>${title}</h3><p>${copy}</p><span>Shop now</span></div>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function productRail(title, copy, items) {
  return `
    <section class="section alt">
      <div class="section-inner">
        <div class="section-title">
          <div><h2>${title}</h2><p>${copy}</p></div>
          <a class="btn ghost" href="#shop">Shop All</a>
        </div>
        <div class="product-grid">${items.map(productCard).join("")}</div>
      </div>
    </section>
  `;
}

function collectionSection() {
  const collections = ["Eid Collection", "Wedding Wear", "Summer Edit", "Winter Edit", "Workwear", "Casual Wear", "Party Wear"];
  return `
    <section class="section">
      <div class="section-inner">
        <div class="section-title"><div><h2>Seasonal Collections</h2><p>Curated edits for every calendar moment.</p></div></div>
        <div class="collection-grid">
          ${collections.map((name, i) => `
            <a class="collection-card" href="#shop?collection=${encodeURIComponent(name)}">
              <h3>${name}</h3>
              <p class="muted">${["Festive elegance", "Formal polish", "Light breathable staples", "Layered textures", "Desk to dinner", "Everyday ease", "Evening impact"][i]}</p>
              <strong>${products.filter((p) => p.collection === name).length || 4} styles</strong>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function highlightSection(title, copy, category, photo) {
  const photoSrc = photo.startsWith("assets/") ? photo : img(photo, 1000);
  return `
    <section class="section green-band">
      <div class="section-inner promo">
        <div class="promo-copy">
          <h2>${title}</h2>
          <p>${copy}</p>
          <a class="btn primary" href="#shop?category=${encodeURIComponent(category)}">Shop ${category}</a>
        </div>
        <img src="${photoSrc}" alt="${title}" loading="lazy" />
      </div>
    </section>
  `;
}

function promoSection() {
  return `
    <section class="section">
      <div class="section-inner promo">
        <div class="promo-copy">
          <h2>Limited Time Offer</h2>
          <p>Use code VELORA10 for 10% off selected sale styles. Free gift wrap is available at checkout for Eid, wedding, and birthday orders.</p>
          <div class="btn-row"><a class="btn primary" href="#shop?sale=true">Shop Sale</a><a class="btn light" href="#checkout">Checkout Gifts</a></div>
        </div>
        <img src="${img("photo-1515886657613-9f3515b0c78f", 1100)}" alt="Velora sale fashion campaign" loading="lazy" />
      </div>
    </section>
  `;
}

function reviewsSection() {
  const reviews = [
    ["Ayesha R.", "The embroidery felt premium and the delivery updates were clear. My Eid outfit arrived exactly as shown.", "photo-1494790108377-be9c29b29330"],
    ["Maham K.", "Loved the khussas and tote. The website was easy to shop on mobile, which matters so much.", "photo-1534528741775-53994a69daeb"],
    ["Sana A.", "The stitched formal fit beautifully. I also appreciated the clear return and size information.", "photo-1544005313-94ddf0286df2"]
  ];
  return `
    <section class="section alt">
      <div class="section-inner">
        <div class="section-title"><div><h2>Customer Love</h2><p>Realistic review surfaces with ratings, order confidence, and social proof.</p></div></div>
        <div class="review-grid">
          ${reviews.map(([name, text, photo]) => `
            <article class="review">
              <img src="${img(photo, 220)}" alt="${name}" loading="lazy" />
              <p class="rating">★★★★★</p>
              <p>${text}</p>
              <strong>${name}</strong>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function instagramSection(picks = curatedHomepage().looks) {
  return `
    <section class="section">
      <div class="section-inner">
        <div class="section-title"><div><h2>Shop The Look</h2><p>Instagram-ready styling ideas for outfits, shoes, and accessories.</p></div><a class="btn ghost" href="#shop">Build a Look</a></div>
        <div class="product-grid">${picks.map(productCard).join("")}</div>
      </div>
    </section>
  `;
}

function newsletterSection() {
  return `
    <section class="section green-band">
      <div class="section-inner newsletter">
        <div>
          <h2 class="auth-title">First Access To New Drops</h2>
          <p class="muted">Get Eid edits, wedding wear launches, private sale alerts, and restock reminders.</p>
        </div>
        <form class="newsletter-form" data-action="newsletter">
          <input class="input" type="email" placeholder="Email address" required />
          <button class="btn primary" type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  `;
}

function productCard(product) {
  const wish = wishlist.has(product.id);
  const soldOut = product.stock <= 0;
  return `
    <article class="product-card">
      <a class="product-media" href="#product/${product.id}">
        ${imageTag(productImage(product), product.name, product)}
        <div class="product-badges">
          ${product.badge ? `<span class="label ${product.sale ? "sale" : ""}">${product.badge}</span>` : ""}
          ${product.sale ? `<span class="label sale">${discount(product)}% off</span>` : ""}
        </div>
        <span class="hover-cart ${soldOut ? "disabled" : ""}" data-action="add-cart" data-id="${product.id}">${soldOut ? "Out of Stock" : "Add to Cart"}</span>
      </a>
      <div class="card-actions">
        <button class="mini-btn ${wish ? "active" : ""}" data-action="wishlist" data-id="${product.id}" title="Save to wishlist">${icons.heart}</button>
        <button class="mini-btn" data-action="quick-view" data-id="${product.id}" title="Quick view">${icons.search}</button>
      </div>
      <div class="product-info">
        <a class="product-name" href="#product/${product.id}">${product.name}</a>
        <div class="meta">${product.subcategory} | ${product.occasion}</div>
        <div class="rating" aria-label="${product.rating} out of 5 stars"><span class="stars">★★★★★</span><span class="muted">${product.rating} (${product.reviews})</span></div>
        <div class="swatches">${product.colors.slice(0, 4).map((color) => `<span class="swatch" title="${color}" style="--swatch:${swatchMap[color] || "#ddd"}"></span>`).join("")}</div>
        <div class="price-row"><span>${money(effectivePrice(product))}</span>${product.sale ? `<span class="old-price">${money(product.price)}</span>` : ""}</div>
        <button class="btn block card-cart ${soldOut ? "ghost" : "green"}" data-action="add-cart" data-id="${product.id}" ${soldOut ? "disabled" : ""}>${soldOut ? "Out of Stock" : "Add to Cart"}</button>
      </div>
    </article>
  `;
}

function shopPage(route) {
  const audience = route.params.get("audience");
  const category = route.params.get("category");
  const collection = route.params.get("collection");
  const sale = route.params.get("sale");
  if (audience && !shopState.audiences.includes(audience)) shopState.audiences = [audience];
  if (category && !shopState.categories.includes(category)) shopState.categories = [category];
  if (collection && collection !== "New" && !shopState.collections.includes(collection)) shopState.collections = [collection];
  if (sale === "true") shopState.discount = true;
  const items = collection === "New" ? filteredProducts().filter((p) => p.badge === "New") : filteredProducts();
  const visibleItems = items.slice(0, shopState.visible);
  const heading = audience || category || collection || (sale ? "Sale" : "Shop");
  return `
    <section class="page-title"><h1>${heading}</h1></section>
    <section class="section">
      <div class="section-inner shop-layout">
        <div class="filter-backdrop ${filterOpen ? "is-open" : ""}" data-action="close-filters"></div>
        ${filtersPanel()}
        <div>
          <div class="shop-top">
            <button class="btn ghost filter-toggle" data-action="open-filters">Filter</button>
            <p class="muted">${items.length} styles found</p>
            <select class="select" style="max-width:220px" data-filter="sort">
              ${["Newest", "Price Low to High", "Price High to Low", "Best Selling", "Featured", "Top Rated"].map((x) => `<option ${shopState.sort === x ? "selected" : ""}>${x}</option>`).join("")}
            </select>
          </div>
          ${items.length ? `<div class="product-grid">${visibleItems.map(productCard).join("")}</div>` : emptyState("No matching styles", "Try removing a filter or searching for Eid, kurta, khussa, bag, workwear, or party wear.")}
          ${items.length > shopState.visible ? `<div class="load-more-wrap"><button class="btn green" data-action="load-more">Load More</button></div>` : ""}
        </div>
      </div>
    </section>
  `;
}

function unique(key) {
  return [...new Set(products.flatMap((p) => Array.isArray(p[key]) ? p[key] : [p[key]]).filter(Boolean))].sort();
}

function filtersPanel() {
  const groups = [
    ["Audience", "audiences", unique("audience")],
    ["Category", "categories", unique("category")],
    ["Size", "sizes", unique("sizes")],
    ["Color", "colors", unique("colors")],
    ["Fabric/material", "materials", unique("material")],
    ["Occasion", "occasions", unique("occasion")],
    ["Brand/collection", "collections", unique("collection")],
    ["Heel type", "heels", unique("heel")]
  ];
  return `
    <aside class="filters ${filterOpen ? "is-open" : ""}">
      <div class="filter-head"><h3>Filter</h3><button class="icon-btn" data-action="close-filters">${icons.x}</button></div>
      <div class="filter-group">
        <h4>Price</h4>
        <div class="filter-price-row">
          <label>Min Price<input class="input" type="number" min="0" max="60000" step="500" value="${shopState.minPrice}" data-filter="minPrice" /></label>
          <label>Max Price<input class="input" type="number" min="0" max="60000" step="500" value="${shopState.maxPrice}" data-filter="maxPrice" /></label>
        </div>
      </div>
      ${groups.map(([title, key, values]) => values.length ? `
        <div class="filter-group">
          <h4>${title}</h4>
          ${values.map((value) => `
            <label class="check-row">
              <input type="checkbox" data-filter-list="${key}" value="${value}" ${shopState[key].includes(value) ? "checked" : ""} />
              ${value}
            </label>
          `).join("")}
        </div>
      ` : "").join("")}
      <div class="filter-group">
        <h4>Availability</h4>
        ${["In stock", "Low stock", "Out of stock"].map((value) => `<label class="check-row"><input type="radio" name="availability" data-filter="availability" value="${value}" ${shopState.availability === value ? "checked" : ""} />${value}</label>`).join("")}
      </div>
      <div class="filter-group">
        <h4>Sort By</h4>
        ${["Newest", "Price Low to High", "Price High to Low", "Best Selling", "Featured"].map((value) => `<label class="check-row"><input type="radio" name="sort" data-filter="sortRadio" value="${value}" ${shopState.sort === value ? "checked" : ""} />${value}</label>`).join("")}
      </div>
      <div class="filter-group">
        <label class="check-row"><input type="checkbox" data-filter="discount" ${shopState.discount ? "checked" : ""} /> Discounted styles</label>
        <div class="filter-buttons">
          <button class="btn green block" data-action="apply-filters">Apply Filters</button>
          <button class="btn ghost block" data-action="clear-filters">Clear Filters</button>
        </div>
      </div>
    </aside>
  `;
}

function filteredProducts() {
  let items = [...products].filter((p) => effectivePrice(p) >= shopState.minPrice && effectivePrice(p) <= shopState.maxPrice);
  const listChecks = [
    ["audiences", (p) => p.audience],
    ["categories", (p) => p.category],
    ["sizes", (p) => p.sizes],
    ["colors", (p) => p.colors],
    ["materials", (p) => p.material],
    ["occasions", (p) => p.occasion],
    ["collections", (p) => p.collection],
    ["heels", (p) => p.heel]
  ];
  listChecks.forEach(([key, getter]) => {
    if (!shopState[key].length) return;
    items = items.filter((p) => {
      const value = getter(p);
      return Array.isArray(value) ? value.some((v) => shopState[key].includes(v)) : shopState[key].includes(value);
    });
  });
  if (shopState.availability) items = items.filter((p) => stockLabel(p) === shopState.availability);
  if (shopState.discount) items = items.filter((p) => p.sale);
  const sorts = {
    "Best Selling": (a, b) => b.reviews - a.reviews,
    "Price Low to High": (a, b) => effectivePrice(a) - effectivePrice(b),
    "Price High to Low": (a, b) => effectivePrice(b) - effectivePrice(a),
    "Top Rated": (a, b) => b.rating - a.rating,
    Featured: (a, b) => b.rating + b.reviews / 100 - (a.rating + a.reviews / 100),
    Newest: (a, b) => (b.badge === "New") - (a.badge === "New")
  };
  const selectedSort = sorts[shopState.sort] || sorts.Newest;
  return items.sort((a, b) => {
    const featuredOrder = featuredDropRank(a) - featuredDropRank(b);
    return featuredOrder || selectedSort(a, b);
  });
}

function productPage(id) {
  const product = productById(id);
  if (!recentlyViewed.includes(id)) {
    recentlyViewed = [id, ...recentlyViewed].slice(0, 6);
    save();
  }
  selected[product.id] = selected[product.id] || { size: product.sizes[0], color: product.colors[0], qty: 1, image: 0 };
  const state = selected[product.id];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const recent = recentlyViewed.filter((rid) => rid !== product.id).map(productById).slice(0, 4);
  return `
    <section class="section">
      <div class="section-inner detail-layout">
        <div>
          <div class="gallery">
            <div class="thumbs">${product.images.map((photo, i) => `<button data-action="select-image" data-id="${product.id}" data-index="${i}">${imageTag(photo, `${product.name} view ${i + 1}`, product)}</button>`).join("")}</div>
            <div class="main-image">${imageTag(productImage(product, state.image || 0), product.name, product)}</div>
          </div>
          <div class="info-stack">
            <div class="accordion"><strong>Description</strong><p>${product.description}</p></div>
            <div class="accordion"><strong>Fabric/material details</strong><p>${product.material}. Designed for ${product.occasion.toLowerCase()} dressing in the ${product.collection} edit.</p></div>
            <div class="accordion"><strong>Care instructions</strong><p>${product.care}</p></div>
            <div class="accordion"><strong>Delivery and return information</strong><p>Standard delivery in Pakistan takes 3 to 5 working days. International delivery is estimated at checkout. Returns and exchanges are accepted within 7 days for eligible unworn items.</p></div>
            <div class="accordion"><strong>Size and fit</strong><p>${product.fit} <a href="#page/size-guide"><strong>Open size guide</strong></a></p></div>
          </div>
        </div>
        <aside class="detail-panel">
          <p class="meta">${product.category} / ${product.subcategory}</p>
          <h1 class="detail-title">${product.name}</h1>
          <p class="rating">★★★★★ <span class="muted">${product.rating} rating | ${product.reviews} reviews</span></p>
          <div class="price-row detail-price"><span>${money(effectivePrice(product))}</span>${product.sale ? `<span class="old-price">${money(product.price)}</span><span class="label sale">${discount(product)}% off</span>` : ""}</div>
          <p><strong>${stockLabel(product)}</strong>${product.stock > 0 ? ` | ${product.stock} available` : ""}</p>
          <div class="selector"><strong>Size</strong><div class="chip-row">${product.sizes.map((size) => `<button class="chip ${state.size === size ? "active" : ""}" data-action="select-size" data-id="${product.id}" data-value="${size}">${size}</button>`).join("")}</div></div>
          <div class="selector"><strong>Color</strong><div class="chip-row">${product.colors.map((color) => `<button class="chip ${state.color === color ? "active" : ""}" data-action="select-color" data-id="${product.id}" data-value="${color}"><span class="swatch" style="--swatch:${swatchMap[color] || "#ddd"}"></span>${color}</button>`).join("")}</div></div>
          <div class="selector"><strong>Quantity</strong><div class="qty"><button data-action="detail-qty" data-id="${product.id}" data-delta="-1">-</button><span>${state.qty}</span><button data-action="detail-qty" data-id="${product.id}" data-delta="1">+</button></div></div>
          <div class="btn-row">
            <button class="btn green" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
            <button class="btn primary" data-action="buy-now" data-id="${product.id}">Buy Now</button>
            <button class="btn ghost" data-action="wishlist" data-id="${product.id}">${wishlist.has(product.id) ? "Saved" : "Wishlist"}</button>
          </div>
          <div class="info-stack">
            <div class="policy-box">${icons.truck}<strong> Free shipping over Rs. 15,000</strong><p class="muted">Cash on delivery, bank transfer, card, and wallet checkout supported.</p></div>
          </div>
        </aside>
      </div>
    </section>
    ${productReviews(product)}
    ${related.length ? productRail("Related Products", "Complete the look with pieces from the same category.", related) : ""}
    ${recent.length ? productRail("Recently Viewed", "Your latest browsing history stays close by.", recent) : ""}
  `;
}

function productReviews(product) {
  return `
    <section class="section alt">
      <div class="section-inner">
        <div class="section-title"><div><h2>Customer Reviews</h2><p>Photo reviews and practical fit feedback help shoppers buy confidently.</p></div></div>
        <div class="review-grid">
          <article class="review">${imageTag(productImage(product, 1), "Customer photo", product)}<p class="rating">★★★★★</p><p>The fabric and finish look premium in person. The size guide was accurate.</p><strong>Verified Buyer</strong></article>
          <article class="review">${imageTag(productImage(product, 2), "Customer photo", product)}<p class="rating">★★★★★</p><p>Easy to style and arrived on time. Packaging felt gift-ready.</p><strong>Velora Customer</strong></article>
          <article class="review">${imageTag(productImage(product, 0), "Customer photo", product)}<p class="rating">★★★★☆</p><p>Beautiful piece. I would size up if you prefer a looser fit.</p><strong>Lahore Shopper</strong></article>
        </div>
      </div>
    </section>
  `;
}

function searchPage(route) {
  const q = route.params.get("q") || "";
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const results = products.filter((p) => {
    const hay = [p.name, p.category, p.subcategory, p.collection, p.occasion, p.material, ...p.colors, ...p.sizes].join(" ").toLowerCase();
    return terms.every((term) => hay.includes(term));
  });
  return `
    <section class="page-title"><h1>Search Results</h1></section>
    <section class="section">
      <div class="section-inner">
        <div class="section-title"><div><h2>${q ? `"${q}"` : "Start Searching"}</h2><p>Search by product name, category, color, size, collection, fabric, and occasion.</p></div></div>
        ${results.length ? `<div class="product-grid">${results.map(productCard).join("")}</div>` : emptyState("No results yet", "Try Eastern Wear, size M, emerald, khussa, wedding wear, workwear, silk, or bags.")}
      </div>
    </section>
  `;
}

function wishlistPage() {
  const items = [...wishlist].map(productById).filter(Boolean);
  return `
    <section class="page-title"><h1>Wishlist</h1></section>
    <section class="section">
      <div class="section-inner">
        ${items.length ? `<div class="product-grid">${items.map((p) => productCard(p).replaceAll('data-action="add-cart"', 'data-action="move-cart"').replaceAll("Add to Cart", p.stock > 0 ? "Move to Cart" : "Out of Stock")).join("")}</div>` : emptyState("Your wishlist is waiting", "Save outfits, shoes, bags, jewelry, watches, scarves, and accessories while you browse.")}
      </div>
    </section>
  `;
}

function cartPage() {
  return `
    <section class="page-title"><h1>Shopping Cart</h1></section>
    <section class="section">
      <div class="section-inner cart-layout">
        <div>${cartItemsMarkup()}</div>
        ${summaryMarkup(true)}
      </div>
    </section>
  `;
}

function cartItemsMarkup() {
  if (!cart.length) return emptyState("Your cart is empty", "Continue shopping to add new arrivals, stitched outfits, shoes, and accessories.");
  return cart.map((item) => {
    const product = productById(item.id);
    return `
      <article class="cart-item">
        ${imageTag(productImage(product), product.name, product)}
        <div>
          <strong>${product.name}</strong>
          <p class="muted">Size ${item.size} | ${item.color}</p>
          <div class="qty"><button data-action="cart-qty" data-key="${item.key}" data-delta="-1">-</button><span>${item.qty}</span><button data-action="cart-qty" data-key="${item.key}" data-delta="1">+</button></div>
          <p>${money(effectivePrice(product))}</p>
        </div>
        <button class="btn ghost" data-action="remove-cart" data-key="${item.key}">Remove</button>
      </article>
    `;
  }).join("");
}

function totals() {
  const subtotal = cart.reduce((sum, item) => sum + effectivePrice(productById(item.id)) * item.qty, 0);
  const discountValue = subtotal >= 12000 ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal === 0 || subtotal >= 15000 ? 0 : 390;
  const total = subtotal - discountValue + shipping;
  return { subtotal, discountValue, shipping, total };
}

function summaryMarkup(showCheckout) {
  const t = totals();
  const progress = Math.min(100, Math.round((t.subtotal / 15000) * 100));
  return `
    <aside class="summary">
      <h3>Order Summary</h3>
      <div class="progress" style="--progress:${progress}%"><span></span></div>
      <p class="muted">${t.subtotal >= 15000 ? "You unlocked free shipping." : `${money(15000 - t.subtotal)} away from free shipping.`}</p>
      <form class="coupon-row" data-action="coupon"><input class="input" placeholder="Promo code VELORA10" /><button class="btn ghost">Apply</button></form>
      <div class="summary-line"><span>Subtotal</span><strong>${money(t.subtotal)}</strong></div>
      <div class="summary-line"><span>Discount</span><strong>${money(t.discountValue)}</strong></div>
      <div class="summary-line"><span>Shipping</span><strong>${t.shipping ? money(t.shipping) : "Free"}</strong></div>
      <div class="summary-line total"><span>Total</span><strong>${money(t.total)}</strong></div>
      ${showCheckout ? `<div class="btn-row"><a class="btn ghost" href="#shop">Continue Shopping</a><a class="btn green" href="#checkout">Proceed to Checkout</a></div>` : ""}
    </aside>
  `;
}

function checkoutPage() {
  if (orderPlaced) return confirmationPage();
  return `
    <section class="page-title"><h1>Checkout</h1></section>
    <section class="section">
      <div class="section-inner checkout-layout">
        <form class="panel" data-action="place-order">
          <div class="tabs"><button class="tab active" type="button">Guest Checkout</button><button class="tab" type="button">Account Checkout</button></div>
          <h3>Shipping Address</h3>
          <div class="form-grid">
            <input class="input" placeholder="First name" required />
            <input class="input" placeholder="Last name" required />
            <input class="input full" type="email" placeholder="Email address" required />
            <input class="input full" placeholder="Phone number" required />
            <input class="input full" placeholder="Street address" required />
            <input class="input" placeholder="City" required />
            <select class="select"><option>Punjab</option><option>Sindh</option><option>Khyber Pakhtunkhwa</option><option>Balochistan</option><option>Islamabad Capital Territory</option></select>
          </div>
          <label class="check-row"><input type="checkbox" checked /> Billing address is same as shipping</label>
          <h3>Delivery Method</h3>
          <label class="check-row"><input type="radio" name="delivery" checked /> Standard delivery, 3 to 5 working days</label>
          <label class="check-row"><input type="radio" name="delivery" /> Express delivery in major cities</label>
          <h3>Payment Method</h3>
          <label class="check-row"><input type="radio" name="payment" checked /> Cash on delivery</label>
          <label class="check-row"><input type="radio" name="payment" /> Credit/debit card</label>
          <label class="check-row"><input type="radio" name="payment" /> Bank transfer</label>
          <label class="check-row"><input type="radio" name="payment" /> Wallet/payment gateway</label>
          <label class="check-row"><input type="checkbox" /> Add gift wrapping</label>
          <button class="btn green block" type="submit">Place Order</button>
        </form>
        ${summaryMarkup(false)}
      </div>
    </section>
  `;
}

function confirmationPage() {
  return `
    <section class="page-title"><h1>Order Confirmed</h1></section>
    <section class="section">
      <div class="section-inner">
        <div class="empty-state">
          <h2>Thank you for shopping Velora.</h2>
          <p>Your order ${orderPlaced || "VEL-1027"} has been placed. You will receive tracking updates by email and SMS.</p>
          <div class="btn-row" style="justify-content:center"><a class="btn green" href="#page/track">Track Order</a><button class="btn ghost" data-action="new-order">Start New Order</button></div>
        </div>
      </div>
    </section>
  `;
}

function accountPage() {
  return `
    <section class="page-title"><h1>My Account</h1></section>
    <section class="section">
      <div class="section-inner account-grid">
        <div class="panel">
          <h2 class="auth-title">Sign In</h2>
          <form class="form-grid">
            <input class="input full" type="email" placeholder="Email address" />
            <input class="input full" type="password" placeholder="Password" />
            <button class="btn green full" type="button">Login</button>
            <a class="muted" href="#account">Forgot password?</a>
          </form>
        </div>
        <div class="panel">
          <h2 class="auth-title">Create Account</h2>
          <form class="form-grid">
            <input class="input" placeholder="First name" />
            <input class="input" placeholder="Last name" />
            <input class="input full" type="email" placeholder="Email address" />
            <input class="input full" type="password" placeholder="Password" />
            <button class="btn primary full" type="button">Sign Up</button>
          </form>
        </div>
        <div class="panel">
          <h2 class="auth-title">Dashboard</h2>
          <p><strong>Order history:</strong> VEL-1018 delivered, VEL-1021 in transit.</p>
          <p><strong>Order tracking:</strong> Live status and courier reference.</p>
          <p><strong>Saved addresses:</strong> Lahore home, Karachi office.</p>
          <p><strong>Returns:</strong> Request exchange for size or damaged delivery.</p>
          <p><strong>Wishlist:</strong> ${wishlist.size} saved styles.</p>
        </div>
      </div>
    </section>
  `;
}

function adminPage() {
  const stats = [
    ["Sales", money(842300)],
    ["Orders", "186"],
    ["Customers", "1,248"],
    ["Popular Product", "Noor 3 Piece"]
  ];
  return `
    <section class="page-title"><h1>Store Management</h1></section>
    <section class="section">
      <div class="section-inner">
        <div class="admin-grid">${stats.map(([k, v]) => `<div class="stat"><span class="muted">${k}</span><strong>${v}</strong></div>`).join("")}</div>
        <div class="panel" style="margin-top:18px">
          <h3>Add Product</h3>
          <form class="form-grid" data-action="admin-add">
            <input class="input" name="name" placeholder="Product name" required />
            <select class="select" name="category"><option>Eastern Wear</option><option>Western Wear</option><option>Ready to Wear</option><option>Stitched</option><option>Shoes</option><option>Accessories</option></select>
            <input class="input" name="price" type="number" placeholder="Price" required />
            <input class="input" name="stock" type="number" placeholder="Stock" required />
            <button class="btn green full">Add Sample Product</button>
          </form>
        </div>
        <div class="panel" style="margin-top:18px; overflow:auto">
          <h3>Products, Stock, Sizes, Colors, and Prices</h3>
          <table class="admin-table">
            <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Collections</th><th>Action</th></tr></thead>
            <tbody>${products.map((p) => `
              <tr>
                <td><strong>${p.name}</strong><br><span class="muted">${p.sizes.join(", ")} | ${p.colors.join(", ")}</span></td>
                <td>${p.category}</td>
                <td>${money(effectivePrice(p))}</td>
                <td>${stockLabel(p)}</td>
                <td>${p.collection}</td>
                <td><button class="btn ghost" data-action="admin-delete" data-id="${p.id}">Delete</button></td>
              </tr>
            `).join("")}</tbody>
          </table>
        </div>
        <div class="admin-grid" style="margin-top:18px">
          <div class="panel"><h3>Orders</h3><p>VEL-1026 paid by card</p><select class="select"><option>Processing</option><option>Shipped</option><option>Delivered</option></select></div>
          <div class="panel"><h3>Coupons and Discounts</h3><p>VELORA10 active. Wedding edit bundle planned.</p><button class="btn ghost">Create Coupon</button></div>
          <div class="panel"><h3>Homepage Banners</h3><p>New Season hero, Sale banner, Eastern highlight, Western highlight.</p><button class="btn ghost">Manage Banners</button></div>
          <div class="panel"><h3>Customers</h3><p>Segment VIP buyers, COD customers, abandoned carts, and newsletter signups.</p></div>
          <div class="panel"><h3>Analytics</h3><p>Best categories: Eastern Wear, Shoes, Accessories. Top search: Eid kurta.</p></div>
          <div class="panel"><h3>Abandoned Cart</h3><p>Reminder flow ready for email, SMS, or WhatsApp follow-up.</p></div>
        </div>
      </div>
    </section>
  `;
}

function infoPage(slug) {
  const pages = {
    about: ["About Velora", "Velora blends Pakistani craft, modern silhouettes, and premium everyday shopping into one easy fashion destination."],
    contact: ["Contact Us", "Use the form below or reach us at support@velora.pk, +92 300 555 0198, Gulberg Lahore. Social support is available on Instagram, TikTok, and Facebook."],
    faq: ["FAQ", "Find answers for size guides, delivery timelines, cash on delivery, returns, international shipping, and gift wrapping."],
    shipping: ["Shipping Policy", "Pakistan orders usually arrive in 3 to 5 working days. Free shipping applies above Rs. 15,000. International shipping is estimated at checkout."],
    returns: ["Return Policy", "Eligible unworn items can be returned or exchanged within 7 days. Final sale, jewelry, and customized stitched pieces may be excluded."],
    privacy: ["Privacy Policy", "Customer data is used for order processing, support, secure checkout, account access, abandoned cart reminders, and consent-based marketing."],
    terms: ["Terms and Conditions", "Purchases are subject to stock availability, payment confirmation, product care guidance, exchange windows, and checkout policies."],
    track: ["Order Tracking", "Enter your order number and phone number to view courier status and delivery updates."],
    exchange: ["Return/Exchange Request", "Submit order details, reason, photos if needed, and preferred replacement size or product."],
    "size-guide": ["Size Guide", "Clothing follows Pakistani ready-to-wear sizing from XS to XL. Shoes follow EU sizing 36 to 41 with khussas best sized up if between sizes."]
  };
  const [title, copy] = pages[slug] || pages.about;
  return `
    <section class="page-title"><h1>${title}</h1></section>
    <section class="section">
      <div class="section-inner">
        <div class="policy-box">
          <p>${copy}</p>
          <form class="form-grid" style="margin-top:18px">
            <input class="input" placeholder="Name" />
            <input class="input" placeholder="Email or phone" />
            <input class="input full" placeholder="Order number, if applicable" />
            <textarea class="textarea full" placeholder="How can we help?"></textarea>
            <button class="btn green full" type="button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

function emptyState(title, copy) {
  return `<div class="empty-state"><h2>${title}</h2><p class="muted">${copy}</p><a class="btn green" href="#shop">Continue Shopping</a></div>`;
}

function cartDrawer() {
  return `
    <div class="drawer" id="cartDrawer">
      <div class="drawer-panel">
        <div class="drawer-head"><h2>Cart</h2><button class="icon-btn" data-action="close-cart">${icons.x}</button></div>
        ${cartItemsMarkup()}
        ${summaryMarkup(true)}
      </div>
    </div>
  `;
}

function render() {
  const route = parseRoute();
  let content = "";
  if (route.path === "home") content = homePage();
  else if (route.path === "shop" || route.path === "collections") content = shopPage(route);
  else if (route.path.startsWith("product/")) content = productPage(route.path.split("/")[1]);
  else if (route.path === "search") content = searchPage(route);
  else if (route.path === "wishlist") content = wishlistPage();
  else if (route.path === "cart") content = cartPage();
  else if (route.path === "checkout") content = checkoutPage();
  else if (route.path === "account") content = accountPage();
  else if (route.path === "admin") content = adminPage();
  else if (route.path.startsWith("page/")) content = infoPage(route.path.split("/")[1]);
  else content = homePage();
  document.getElementById("app").innerHTML = appShell(content, route);
  window.scrollTo({ top: 0, behavior: "auto" });
}

function addToCart(id) {
  const product = productById(id);
  if (product.stock <= 0) return;
  const state = selected[id] || { size: product.sizes[0], color: product.colors[0], qty: 1 };
  const key = `${id}-${state.size}-${state.color}`;
  const existing = cart.find((item) => item.key === key);
  if (existing) existing.qty += state.qty || 1;
  else cart.push({ key, id, size: state.size, color: state.color, qty: state.qty || 1 });
  save();
}

function openQuickView(id) {
  const p = productById(id);
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div class="modal-box">
      <button class="icon-btn" style="float:right; margin:12px" data-action="close-modal">${icons.x}</button>
      <div class="detail-layout" style="padding:24px">
        ${imageTag(productImage(p), p.name, p, 'style="width:100%; aspect-ratio:4/5; object-fit:cover"')}
        <div>
          <p class="meta">${p.category} / ${p.collection}</p>
          <h2 class="detail-title">${p.name}</h2>
          <p>${p.description}</p>
          <p class="rating">★★★★★ ${p.rating} (${p.reviews})</p>
          <div class="price-row detail-price"><span>${money(effectivePrice(p))}</span>${p.sale ? `<span class="old-price">${money(p.price)}</span>` : ""}</div>
          <div class="btn-row"><button class="btn green" data-action="add-cart" data-id="${p.id}">Add to Cart</button><a class="btn ghost" href="#product/${p.id}">View Details</a></div>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("is-open");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const id = target.dataset.id;

  if (action === "wishlist") {
    event.preventDefault();
    wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
    save();
    render();
  }
  if (action === "add-cart") {
    event.preventDefault();
    addToCart(id);
    render();
    document.getElementById("cartDrawer")?.classList.add("is-open");
  }
  if (action === "move-cart") {
    event.preventDefault();
    addToCart(id);
    wishlist.delete(id);
    save();
    render();
    document.getElementById("cartDrawer")?.classList.add("is-open");
  }
  if (action === "buy-now") {
    event.preventDefault();
    addToCart(id);
    save();
    setRoute("checkout");
  }
  if (action === "open-cart") document.getElementById("cartDrawer")?.classList.add("is-open");
  if (action === "close-cart") document.getElementById("cartDrawer")?.classList.remove("is-open");
  if (action === "toggle-search") {
    searchOpen = !searchOpen;
    render();
    setTimeout(() => document.getElementById("siteSearch")?.focus(), 0);
  }
  if (action === "open-filters") {
    filterOpen = true;
    render();
  }
  if (action === "close-filters") {
    filterOpen = false;
    render();
  }
  if (action === "apply-filters") {
    filterOpen = false;
    render();
  }
  if (action === "load-more") {
    shopState.visible += 12;
    render();
  }
  if (action === "remove-cart") {
    cart = cart.filter((item) => item.key !== target.dataset.key);
    save();
    render();
  }
  if (action === "cart-qty") {
    const item = cart.find((row) => row.key === target.dataset.key);
    if (item) item.qty = Math.max(1, item.qty + Number(target.dataset.delta));
    save();
    render();
  }
  if (action === "select-size" || action === "select-color") {
    selected[id] = selected[id] || {};
    selected[id][action === "select-size" ? "size" : "color"] = target.dataset.value;
    render();
  }
  if (action === "detail-qty") {
    selected[id] = selected[id] || { qty: 1 };
    selected[id].qty = Math.max(1, (selected[id].qty || 1) + Number(target.dataset.delta));
    render();
  }
  if (action === "select-image") {
    selected[id] = selected[id] || {};
    selected[id].image = Number(target.dataset.index);
    render();
  }
  if (action === "quick-view") openQuickView(id);
  if (action === "close-modal") document.getElementById("modal")?.classList.remove("is-open");
  if (action === "clear-filters") {
    shopState = { audiences: [], categories: [], sizes: [], colors: [], materials: [], occasions: [], collections: [], heels: [], availability: "", discount: false, minPrice: 0, maxPrice: 25000, sort: "Newest", visible: 12 };
    filterOpen = false;
    render();
  }
  if (action === "new-order") {
    orderPlaced = null;
    cart = [];
    save();
    render();
  }
  if (action === "admin-delete") {
    products = products.filter((p) => p.id !== id);
    save();
    render();
  }
  if (action === "whatsapp") {
    alert("WhatsApp support: +92 300 555 0198");
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.matches("[data-search-form]")) {
    event.preventDefault();
    const value = form.querySelector("input").value.trim();
    setRoute(`search?q=${encodeURIComponent(value)}`);
  }
  if (form.matches('[data-action="place-order"]')) {
    event.preventDefault();
    orderPlaced = `VEL-${Math.floor(1000 + Math.random() * 9000)}`;
    cart = [];
    save();
    render();
  }
  if (form.matches('[data-action="admin-add"]')) {
    event.preventDefault();
    const data = new FormData(form);
    const id = data.get("name").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    products.unshift({
      ...baseProducts[0],
      id,
      name: data.get("name"),
      category: data.get("category"),
      subcategory: data.get("category"),
      collection: "New Arrivals",
      price: Number(data.get("price")),
      sale: null,
      stock: Number(data.get("stock")),
      badge: "New"
    });
    save();
    render();
  }
  if (form.matches('[data-action="newsletter"], [data-action="coupon"]')) {
    event.preventDefault();
    alert("Saved. This demo keeps the shopping flow moving.");
  }
});

document.addEventListener("input", (event) => {
  const input = event.target;
  if (input.id === "siteSearch") {
    const value = input.value.trim().toLowerCase();
    const box = document.getElementById("suggestions");
    if (!value) {
      box.classList.remove("is-open");
      box.innerHTML = "";
      return;
    }
    const matches = products.filter((p) => [p.name, p.category, p.audience, p.subcategory, p.collection, p.occasion, p.material, ...p.colors, ...p.sizes].join(" ").toLowerCase().includes(value)).slice(0, 7);
    box.innerHTML = matches.length ? matches.map((p) => `<button class="suggestion" data-action="go-search" data-query="${p.name}">${imageTag(productImage(p), "", p)}<span><strong>${p.name}</strong><br><span class="muted">${p.category} | ${money(effectivePrice(p))}</span></span></button>`).join("") : `<button class="suggestion" data-action="go-search" data-query="${value}">Search for "${value}"</button>`;
    box.classList.add("is-open");
  }
  if (input.dataset.filter === "maxPrice" || input.dataset.filter === "minPrice") {
    shopState[input.dataset.filter] = Number(input.value);
    shopState.visible = 12;
    render();
  }
});

document.addEventListener("change", (event) => {
  const input = event.target;
  if (input.dataset.action === "currency") {
    currency = input.value;
    save();
    render();
  }
  if (input.dataset.filterList) {
    const key = input.dataset.filterList;
    shopState[key] = input.checked ? [...shopState[key], input.value] : shopState[key].filter((x) => x !== input.value);
    shopState.visible = 12;
    render();
  }
  if (input.dataset.filter === "availability") {
    shopState.availability = input.value;
    shopState.visible = 12;
    render();
  }
  if (input.dataset.filter === "discount") {
    shopState.discount = input.checked;
    shopState.visible = 12;
    render();
  }
  if (input.dataset.filter === "sort") {
    shopState.sort = input.value;
    shopState.visible = 12;
    render();
  }
  if (input.dataset.filter === "sortRadio") {
    shopState.sort = input.value;
    shopState.visible = 12;
    render();
  }
});

document.addEventListener("click", (event) => {
  const suggestion = event.target.closest('[data-action="go-search"]');
  if (suggestion) setRoute(`search?q=${encodeURIComponent(suggestion.dataset.query)}`);
});

window.addEventListener("hashchange", render);
render();
