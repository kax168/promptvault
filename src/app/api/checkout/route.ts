/**
 * POST /api/checkout
 * Creates a Stripe Checkout session
 * 
 * Request: { productId: string, email?: string }
 * Response: { url: string } (redirect to Stripe)
 * 
 * Uncomment when Stripe is configured.
 */

import { NextRequest, NextResponse } from "next/server";
// import { stripe } from "@/lib/stripe/client";
import { PRODUCTS } from "@/lib/stripe/client";

export async function POST(req: NextRequest) {
  const { productId, email } = await req.json();
  const product = PRODUCTS[productId];

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  if (!product.stripePriceId) {
    return NextResponse.json({ error: "Stripe not configured yet" }, { status: 503 });
  }

  // TODO: Uncomment when Stripe is ready
  /*
  const session = await stripe.checkout.sessions.create({
    mode: product.type === "recurring" ? "subscription" : "payment",
    line_items: [{ price: product.stripePriceId, quantity: 1 }],
    customer_email: email || undefined,
    success_url: `${req.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.nextUrl.origin}/#products`,
    metadata: { productId: product.id },
  });

  return NextResponse.json({ url: session.url });
  */

  return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
}
