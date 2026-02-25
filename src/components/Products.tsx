export default function Products() {
  return (
    <section id="products" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          The <span className="text-gradient">Products</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Starter Pack */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="text-sm text-amber-500 font-medium mb-2">FREE</div>
            <h3 className="text-xl font-bold mb-2">Starter Pack</h3>
            <p className="text-slate-400 text-sm mb-4">
              30 curated prompts across 8 categories. The essentials to get you started.
            </p>
            <ul className="text-xs text-slate-500 space-y-1 mb-6">
              <li>✓ 30 tested prompts</li>
              <li>✓ 8 categories</li>
              <li>✓ Works with ChatGPT, Claude, Gemini</li>
              <li>✓ Copy-paste ready</li>
            </ul>
            <a
              href="#library"
              className="block text-center px-4 py-2.5 border border-slate-700 text-slate-300 rounded-lg hover:border-amber-500/50 transition-colors text-sm"
            >
              Browse Free →
            </a>
          </div>

          {/* Pro Pack */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-amber-500/30 glow-gold hover:border-amber-500/50 transition-colors relative">
            <div className="absolute -top-3 right-4 px-2 py-0.5 bg-amber-500 text-black text-xs font-bold rounded">
              BEST VALUE
            </div>
            <div className="text-sm text-amber-500 font-medium mb-2">$9.90</div>
            <h3 className="text-xl font-bold mb-2">Pro Pack</h3>
            <p className="text-slate-400 text-sm mb-4">
              500+ premium prompts with advanced techniques and regular updates.
            </p>
            <ul className="text-xs text-slate-500 space-y-1 mb-6">
              <li>✓ 500+ premium prompts</li>
              <li>✓ Advanced chain-of-thought templates</li>
              <li>✓ Regular updates</li>
              <li>✓ Lifetime access</li>
            </ul>
            <a
              href="https://fromearendel.gumroad.com"
              className="block text-center px-4 py-2.5 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition-colors text-sm"
            >
              Get Pro Pack →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
