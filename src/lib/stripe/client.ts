/**
 * Stripe Client — placeholder for future integration
 * 
 * Setup:
 * 1. npm install stripe
 * 2. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET to .env.local
 * 3. Uncomment the code below
 * 
 * Payment Flow:
 *   User clicks "Buy" → POST /api/checkout → Stripe Checkout → Webhook → Deliver
 */

// import Stripe from "stripe";
// export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-12-18.acacia" });

import type { StripeProduct } from "./types";

// Product catalog — map internal IDs to Stripe price IDs
export const PRODUCTS: Record<string, StripeProduct> = {
  "starter-pack": {
    id: "starter-pack",
    stripeProductId: "",   // TODO: fill after creating in Stripe Dashboard
    stripePriceId: "",
    name: "Starter Pack",
    price: 0,
    type: "one_time",
  },
  "pro-pack": {
    id: "pro-pack",
    stripeProductId: "",   // TODO: fill after creating in Stripe Dashboard
    stripePriceId: "",
    name: "Pro Pack",
    price: 990,
    type: "one_time",
  },
};
