# E-Commerce & Membership Architecture

## Payment Flow

```
User clicks "Buy Pro Pack"
  → POST /api/checkout { productId: "pro-pack" }
  → Stripe Checkout Session created
  → User redirected to Stripe payment page
  → Payment completed
  → Stripe sends webhook to POST /api/webhook
  → checkout.session.completed event
  → Save purchase record
  → Generate download link
  → Redirect to /success?session_id=xxx
```

## File Structure

```
src/lib/stripe/
├── types.ts      # StripeProduct, Purchase, CheckoutSession
├── client.ts     # Stripe SDK init + product catalog
└── store.ts      # Purchase records (MVP: memory, future: DB)

src/app/api/
├── checkout/route.ts   # Create Checkout session
├── webhook/route.ts    # Handle Stripe events
└── download/route.ts   # Secure file delivery (TODO)
```

## Webhook Events

| Event | Action |
|-------|--------|
| `checkout.session.completed` | Save purchase, generate download link |
| `payment_intent.payment_failed` | Log failure, notify admin |
| `charge.refunded` | Revoke access, update status |
| `customer.subscription.updated` | Update membership tier (future) |
| `customer.subscription.deleted` | Downgrade to free (future) |

## Environment Variables

```env
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Membership System (Future Expansion)

### Tier Structure
```
Free:     Browse 50 prompts, copy-paste
Starter:  All free prompts + download PDF
Pro:      500+ prompts, lifetime updates, priority support
Team:     Pro + shared workspace, 5 seats (future)
```

### Database Schema (Supabase/Postgres)
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT,
  tier TEXT DEFAULT 'free',  -- free | starter | pro | team
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Purchases
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  product_id TEXT NOT NULL,
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  amount INTEGER NOT NULL,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Downloads (track delivery)
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  purchase_id UUID REFERENCES purchases(id),
  token TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ,
  downloaded_at TIMESTAMPTZ
);
```

### Migration Path
```
Phase 1 (Now):     JSON + Gumroad/Stripe Checkout links
Phase 2:           Stripe API + in-memory store
Phase 3:           Supabase Auth + Postgres
Phase 4:           Full membership with subscription billing
```

### Auth Options (Phase 3+)
```
Recommended: Supabase Auth (free tier, magic link + OAuth)
Alternative: NextAuth.js + any DB
Alternative: Clerk (hosted, fastest setup)
```
