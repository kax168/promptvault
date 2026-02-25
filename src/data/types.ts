// ============================================
// Site Configuration
// ============================================
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  avatar: string;
  stats: SiteStats;
  goal: Goal;
  social: SocialLinks;
}

export interface SiteStats {
  prompts: number;
  categories: number;
  downloads: number;
  countries: number;
}

export interface Goal {
  label: string;
  current: number;
  target: number;
}

export interface SocialLinks {
  twitter: string | null;
  reddit: string | null;
  github: string | null;
  gumroad: string | null;
}

// ============================================
// Products
// ============================================
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;            // cents (990 = $9.90), Stripe-compatible
  priceLabel: string;
  originalPrice?: number;   // cents, for strikethrough
  features: string[];
  cta: string;
  ctaLink: string | null;
  stripeLink: string | null;  // Stripe Checkout URL
  gumroadLink: string | null;
  featured: boolean;
}

export interface ProductsData {
  products: Product[];
}

// ============================================
// Journal / Build Log
// ============================================
export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;          // markdown or plain text
  date: string;             // ISO date: "2026-02-25"
  tags: string[];
  type: "milestone" | "progress" | "origin" | "lesson" | "update";
  image: string | null;     // cover image URL
  author: string;
}

export interface JournalData {
  posts: JournalPost[];
  _meta: {
    source: "local-json" | "contentful" | "sanity" | "notion";
    cms_ready: boolean;
    note?: string;
  };
}

// ============================================
// Prompts
// ============================================
export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  prompt: string;
  model: "Any" | "Claude/GPT-4" | string;
  isPro: boolean;
}

// ============================================
// Timeline (homepage preview)
// ============================================
export interface TimelineEvent {
  date: string;
  tag: string;
  title: string;
  description: string;
  type: string;
}
