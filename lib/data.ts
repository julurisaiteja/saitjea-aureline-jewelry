export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  rating: number;
  reviewCount: number;
  badge: string | null;
  related: string[];
  faq: [string, string][];
  specs: Record<string, string>;
  variants: string[];
  [key: string]: unknown;
};

export const brand = {
  "slug": "aureline-jewelry",
  "name": "Aureline",
  "tagline": "Light caught in gold.",
  "niche": "Jewelry boutique",
  "description": "A refined jewelry boutique for everyday gold, heirloom stones, and quiet luxury pieces.",
  "cta": "Explore the collection",
  "checkoutNote": "Complimentary gift wrap and insured shipping.",
  "heroImage": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2400&q=80",
  "heroVideo": "https://videos.pexels.com/video-files/6663451/6663451-uhd_2560_1440_25fps.mp4",
  "categories": [
    "Rings",
    "Necklaces",
    "Earrings",
    "Bracelets",
    "Sets"
  ],
  "isBooking": false,
  "offer": {
    "code": "GLOW10",
    "label": "Complimentary resizing + 10% on everyday gold",
    "ends": "This week only"
  },
  "loyalty": "Aureline Atelier Club — private trunk shows & polish service",
  "stats": [
    [
      "18k",
      "gold vermeil options"
    ],
    [
      "2k+",
      "custom engravings"
    ],
    [
      "4.8",
      "client rating"
    ],
    [
      "Life",
      "warranty on clasps"
    ]
  ],
  "marquee": [
    "Hand-set stones ·",
    "Recycled gold ·",
    "Try-on lounge ·",
    "Gift wrap ·",
    "Resize once free ·"
  ],
  "reviews": [
    [
      "Elena V.",
      5,
      "The Solstice Band is my daily piece — weight feels right."
    ],
    [
      "Chris M.",
      5,
      "Craft video sold me. Dew Pendant arrived in beautiful wrap."
    ],
    [
      "Aisha K.",
      5,
      "Try-on tool matched my skin tone better than I expected."
    ]
  ],
  "ai": [
    [
      "Yellow or rose gold for warm skin?",
      "Warm undertones love yellow & rose. Start with Solstice Band in yellow; River Band in rose for stack contrast."
    ],
    [
      "Is vermeil good for daily wear?",
      "Our vermeil is thick 18k over sterling — fine for daily if you avoid chlorine. Solid 14k for heavy rotation."
    ],
    [
      "Can I engrave a signet?",
      "Yes — Aureline Signet includes one engraving. Upload initials at checkout."
    ],
    [
      "Return policy?",
      "30 days unworn with box. Free resize once within 60 days (code GLOW10)."
    ]
  ],
  "blog": [
    [
      "How we set a pavé halo",
      "Craft"
    ],
    [
      "Stacking rings without scratching",
      "Wear"
    ],
    [
      "Caring for pearls",
      "Guides"
    ]
  ],
  "stores": [
    "Madison Atelier",
    "Appointments only — West Village"
  ],
  "nicheKind": "jewelry"
} as const;

export const products: Product[] = [
  {
    "id": "aureline-jewelry-1",
    "name": "Solstice Band",
    "category": "Rings",
    "price": 420,
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "14k yellow gold with brushed edges.",
    "rating": 4.4,
    "reviewCount": 18,
    "badge": "Bestseller",
    "related": [
      "aureline-jewelry-2",
      "aureline-jewelry-3",
      "aureline-jewelry-5"
    ],
    "faq": [
      [
        "What's included?",
        "14k yellow gold with brushed edges. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "14k yellow gold",
      "Stone": "Diamond",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-2",
    "name": "Pearl Drop Earrings",
    "category": "Earrings",
    "price": 280,
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "South sea pearls on knife-edge posts.",
    "rating": 4.5,
    "reviewCount": 29,
    "badge": "Bestseller",
    "related": [
      "aureline-jewelry-3",
      "aureline-jewelry-4",
      "aureline-jewelry-6"
    ],
    "faq": [
      [
        "What's included?",
        "South sea pearls on knife-edge posts. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "18k vermeil",
      "Stone": "Pearl",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-3",
    "name": "Lumen Chain",
    "category": "Necklaces",
    "price": 510,
    "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Paperclip chain in 18k gold vermeil.",
    "rating": 4.6,
    "reviewCount": 40,
    "badge": null,
    "related": [
      "aureline-jewelry-4",
      "aureline-jewelry-5",
      "aureline-jewelry-7"
    ],
    "faq": [
      [
        "What's included?",
        "Paperclip chain in 18k gold vermeil. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Rose gold",
      "Stone": "Onyx",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-4",
    "name": "Horizon Bracelet",
    "category": "Bracelets",
    "price": 360,
    "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Cuff with subtle diamond dusting.",
    "rating": 4.7,
    "reviewCount": 51,
    "badge": "Limited",
    "related": [
      "aureline-jewelry-5",
      "aureline-jewelry-6",
      "aureline-jewelry-8"
    ],
    "faq": [
      [
        "What's included?",
        "Cuff with subtle diamond dusting. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Sterling",
      "Stone": "None — solid",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-5",
    "name": "Eclipse Ring",
    "category": "Rings",
    "price": 890,
    "image": "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Black onyx center, pavé halo.",
    "rating": 4.8,
    "reviewCount": 62,
    "badge": null,
    "related": [
      "aureline-jewelry-6",
      "aureline-jewelry-7",
      "aureline-jewelry-9"
    ],
    "faq": [
      [
        "What's included?",
        "Black onyx center, pavé halo. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "14k yellow gold",
      "Stone": "Diamond",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-6",
    "name": "Dew Pendant",
    "category": "Necklaces",
    "price": 640,
    "image": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Teardrop diamond on a fine cable.",
    "rating": 4.9,
    "reviewCount": 73,
    "badge": "New",
    "related": [
      "aureline-jewelry-7",
      "aureline-jewelry-8",
      "aureline-jewelry-10"
    ],
    "faq": [
      [
        "What's included?",
        "Teardrop diamond on a fine cable. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "18k vermeil",
      "Stone": "Pearl",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-7",
    "name": "Twin Hoops",
    "category": "Earrings",
    "price": 190,
    "image": "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Medium gold hoops, hinged clasp.",
    "rating": 4.4,
    "reviewCount": 84,
    "badge": null,
    "related": [
      "aureline-jewelry-8",
      "aureline-jewelry-9",
      "aureline-jewelry-11"
    ],
    "faq": [
      [
        "What's included?",
        "Medium gold hoops, hinged clasp. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Rose gold",
      "Stone": "Onyx",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-8",
    "name": "Heirloom Set",
    "category": "Sets",
    "price": 1280,
    "image": "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Necklace + earrings in matching motif.",
    "rating": 4.5,
    "reviewCount": 95,
    "badge": null,
    "related": [
      "aureline-jewelry-9",
      "aureline-jewelry-10",
      "aureline-jewelry-12"
    ],
    "faq": [
      [
        "What's included?",
        "Necklace + earrings in matching motif. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Sterling",
      "Stone": "None — solid",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-9",
    "name": "River Band",
    "category": "Rings",
    "price": 320,
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Organic wave texture in rose gold.",
    "rating": 4.6,
    "reviewCount": 106,
    "badge": null,
    "related": [
      "aureline-jewelry-10",
      "aureline-jewelry-11",
      "aureline-jewelry-1"
    ],
    "faq": [
      [
        "What's included?",
        "Organic wave texture in rose gold. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "14k yellow gold",
      "Stone": "Diamond",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-10",
    "name": "Starlight Studs",
    "category": "Earrings",
    "price": 450,
    "image": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Round brilliant studs, screw backs.",
    "rating": 4.7,
    "reviewCount": 117,
    "badge": null,
    "related": [
      "aureline-jewelry-11",
      "aureline-jewelry-12",
      "aureline-jewelry-2"
    ],
    "faq": [
      [
        "What's included?",
        "Round brilliant studs, screw backs. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "18k vermeil",
      "Stone": "Pearl",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-11",
    "name": "Silk Rope Bracelet",
    "category": "Bracelets",
    "price": 210,
    "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Braided silk with gold endcaps.",
    "rating": 4.8,
    "reviewCount": 128,
    "badge": null,
    "related": [
      "aureline-jewelry-12",
      "aureline-jewelry-1",
      "aureline-jewelry-3"
    ],
    "faq": [
      [
        "What's included?",
        "Braided silk with gold endcaps. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Rose gold",
      "Stone": "Onyx",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  },
  {
    "id": "aureline-jewelry-12",
    "name": "Aureline Signet",
    "category": "Rings",
    "price": 560,
    "image": "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603561591411-07134df866a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80"
    ],
    "description": "Oval signet ready for engraving.",
    "rating": 4.9,
    "reviewCount": 139,
    "badge": null,
    "related": [
      "aureline-jewelry-1",
      "aureline-jewelry-2",
      "aureline-jewelry-4"
    ],
    "faq": [
      [
        "What's included?",
        "Oval signet ready for engraving. Ships with care guide."
      ],
      [
        "Returns?",
        "Complimentary gift wrap and insured shipping."
      ],
      [
        "Need help choosing?",
        "Ask the on-site assistant — niche answers, no pressure."
      ]
    ],
    "specs": {
      "Metal": "Sterling",
      "Stone": "None — solid",
      "Size": "Resizable / one size",
      "Finish": "High polish"
    },
    "variants": [
      "Yellow gold",
      "Rose gold",
      "White"
    ]
  }
] as Product[];

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(p: Product) {
  return p.related.map(getProduct).filter(Boolean) as Product[];
}
