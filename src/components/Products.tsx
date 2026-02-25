import products from "@/data/products.json";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function Products() {
  return (
    <section id="products" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          The <span className="text-gradient">Products</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.products.map((p) => (
            <Card
              key={p.id}
              className={p.featured ? "border-amber-500/30 glow-gold relative" : "relative"}
            >
              {p.featured && (
                <div className="absolute -top-3 right-4 px-2 py-0.5 bg-amber-500 text-black text-xs font-bold rounded">
                  BEST VALUE
                </div>
              )}
              <div className="p-6">
                <div className="text-sm text-amber-500 font-medium mb-2">{p.priceLabel}</div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.tagline}</p>
                <ul className="text-xs text-slate-500 space-y-1 mb-6">
                  {p.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
                {/* Stripe placeholder: replace ctaLink with stripeLink when ready */}
                <a href={p.ctaLink || p.stripeLink || p.gumroadLink || "#"}>
                  <Button
                    variant={p.featured ? "gold" : "outline"}
                    className="w-full"
                  >
                    {p.cta}
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
