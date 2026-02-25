/**
 * Purchase & Membership Store
 * 
 * Current: JSON file (MVP)
 * Future: PostgreSQL/Supabase/PlanetScale
 * 
 * Migration path:
 * 1. JSON file → SQLite (better-sqlite3)
 * 2. SQLite → Supabase (Postgres + Auth)
 * 3. Supabase → full membership system
 */

import type { Purchase } from "./types";

// In-memory store for MVP; replace with DB
let purchases: Purchase[] = [];

export async function savePurchase(p: Omit<Purchase, "id" | "createdAt" | "status">) {
  const purchase: Purchase = {
    ...p,
    id: `pur_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    status: "completed",
    createdAt: new Date().toISOString(),
  };
  purchases.push(purchase);
  return purchase;
}

export async function getPurchasesByEmail(email: string) {
  return purchases.filter((p) => p.customerEmail === email);
}

export async function handlePurchaseComplete(data: {
  customerEmail: string;
  productId: string;
  stripeSessionId: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: string;
}) {
  const purchase = await savePurchase({
    ...data,
    downloadUrl: generateDownloadUrl(data.productId),
  });
  // TODO: Send confirmation email
  // await sendEmail(data.customerEmail, purchase);
  return purchase;
}

export async function handleRefund(paymentIntentId: string) {
  const purchase = purchases.find((p) => p.stripePaymentIntentId === paymentIntentId);
  if (purchase) purchase.status = "refunded";
}

function generateDownloadUrl(productId: string): string {
  const token = Math.random().toString(36).slice(2, 15);
  return `/api/download?product=${productId}&token=${token}`;
}
