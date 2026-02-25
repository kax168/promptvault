// ============================================
// Stripe Integration Types
// ============================================

export interface StripeProduct {
  id: string;                    // internal product id
  stripeProductId: string;       // prod_xxx
  stripePriceId: string;         // price_xxx
  name: string;
  price: number;                 // cents
  type: "one_time" | "recurring";
  interval?: "month" | "year";   // for subscriptions
}

export interface CheckoutSession {
  productId: string;
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
  metadata?: Record<string, string>;
}

export interface Purchase {
  id: string;
  customerEmail: string;
  productId: string;
  stripeSessionId: string;
  stripePaymentIntentId: string;
  amount: number;                // cents
  currency: string;
  status: "pending" | "completed" | "refunded" | "failed";
  createdAt: string;             // ISO timestamp
  downloadUrl?: string;
}
