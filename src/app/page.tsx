"use client";
import { useState, useMemo } from "react";
import { prompts } from "@/data/prompts";
import { categories } from "@/data/types";
import PromptCard from "@/components/PromptCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showPricing, setShowPricing] = useState(false);

  const filtered = useMemo(() => {
    return prompts.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="font-bold text-xl text-brand-600">⚡ PromptVault</div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="text-sm text-gray-600 hover:text-brand-600"
            >
              Pricing
            </button>
            <a
              href="#"
              className="text-sm bg-brand-500 text-white px-4 py-1.5 rounded-lg hover:bg-brand-600"
            >
              Get Pro — $14.9/mo
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Prompt Templates<br />
            <span className="text-brand-500">That Actually Work</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            500+ curated prompts for writing, coding, marketing, and more.
            Copy, paste, and get better results from ChatGPT, Claude, and Gemini.
          </p>
          <input
            type="text"
            placeholder="🔍 Search prompts... (e.g. blog post, python, email)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xl px-5 py-3 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
      </section>

      {/* Pricing Modal */}
      {showPricing && (
        <section className="bg-white border-b py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Simple Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-6">
                <h3 className="font-bold text-lg">Free</h3>
                <p className="text-3xl font-bold mt-2">$0<span className="text-sm text-gray-400">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>✅ 50+ free prompt templates</li>
                  <li>✅ Basic search & categories</li>
                  <li>✅ Copy to clipboard</li>
                  <li>❌ Pro templates locked</li>
                  <li>❌ No custom collections</li>
                </ul>
              </div>
              <div className="border-2 border-brand-500 rounded-xl p-6 relative">
                <span className="absolute -top-3 left-4 bg-brand-500 text-white text-xs px-3 py-1 rounded-full">POPULAR</span>
                <h3 className="font-bold text-lg">Pro</h3>
                <p className="text-3xl font-bold mt-2">$14.9<span className="text-sm text-gray-400">/mo</span></p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>✅ All 500+ prompt templates</li>
                  <li>✅ Advanced search & filters</li>
                  <li>✅ Custom collections</li>
                  <li>✅ New prompts weekly</li>
                  <li>✅ Priority support</li>
                </ul>
                <a href="#" className="mt-4 block text-center bg-brand-500 text-white py-2 rounded-lg hover:bg-brand-600">
                  Start Pro Trial
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-brand-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-brand-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-4">{filtered.length} prompts found</p>

        {/* Prompt grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <PromptCard key={p.id} prompt={p} locked={p.isPro} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            No prompts found. Try a different search or category.
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2026 PromptVault. Built with ❤️ for the AI community.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-brand-500">Terms</a> · <a href="#" className="hover:text-brand-500">Privacy</a> · <a href="#" className="hover:text-brand-500">Contact</a>
          </p>
        </div>
      </footer>
    </div>
  );
}