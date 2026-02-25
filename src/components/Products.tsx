"use client";
import products from "@/data/products.json";
import { ProductCard } from "@/components/ProductCard";
import { FadeIn, FadeInStagger, staggerItem } from "@/components/ui/Motion";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section id="products" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 text-center">
            The <span className="text-gradient">Products</span>
          </h2>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-2 gap-8">
          {products.products.map((p) => (
            <motion.div key={p.id} variants={staggerItem}>
              <ProductCard
                title={p.name}
                description={p.tagline}
                price={p.price}
                isFree={p.price === 0}
                link={p.ctaLink || p.stripeLink || p.gumroadLink || "#"}
                featured={p.featured}
                features={p.features}
              />
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
