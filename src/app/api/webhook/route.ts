/**
 * POST /api/webhook
 * Stripe Webhook handler
 * 
 * Events handled:
 * - checkout.session.completed → deliver product
 * - payment_intent.payment_failed → log failure
 * - charge.refunded → revoke access
 * 
 * Setup:
 * 1. stripe listen --forward-to localhost:3000/api/webhook
 * 2. Add STRIPE_WEBHOOK_SECRET to .env.local
 */

import { NextRequest, NextResponse } from "next/server";
// import { stripe } from "@/lib/stripe/client";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  // TODO: Uncomment when Stripe is ready
  /*
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      await handlePurchaseComplete({
        customerEmail: session.customer_email || session.customer_details?.email || "",
        productId: session.metadata?.productId || "",
        stripeSessionId: session.id,
        stripePaymentIntentId: session.payment_intent as string,
        amount: session.amount_total || 0,
        currency: session.currency || "usd",
      });
      break;
    }

    case "charge.refunded": {
      const charge = event.data.object;
      await handleRefund(charge.payment_intent as string);
      break;
    }
  }
  */

  return NextResponse.json({ received: true });
}
