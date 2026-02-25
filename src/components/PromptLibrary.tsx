"use client";
import { useState } from "react";
import allPrompts from "@/data/all-prompts.json";

const categories = ["all", ...Array.from(new Set(allPrompts.map((p: any) => p.category)))];

export default function PromptLibrary() {
  const [cat, setCat] = useState("all");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = allPrompts.filter((p: any) => {
    const matchCat = cat === "all" || p.category === cat;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const shown = filtered.slice(0, 12);

  const copy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="library" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Prompt <span className="text-gradient">Library</span>
        </h2>
        <p className="text-slate-500 text-sm text-center mb-8">
          {allPrompts.length} prompts across {categories.length - 1} categories. Search, filter, copy.
        </p>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-amber-500/50"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  cat === c
                    ? "bg-amber-500 text-black"
                    : "bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-slate-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {shown.map((p: any) => (
            <div
              key={p.id}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors group"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-200">{p.title}</h3>
                <div className="flex gap-1.5">
                  {p.isPro && (
                    <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-400 rounded">
                      PRO
                    </span>
                  )}
                  <span className="px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-500 rounded">
                    {p.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-3">{p.description}</p>
              <button
                onClick={() => !p.isPro && copy(p.id, p.prompt)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                  p.isPro
                    ? "bg-slate-800 text-slate-600 cursor-not-allowed"
                    : copied === p.id
                    ? "bg-green-500/20 text-green-400"
                    : "bg-slate-800 text-slate-400 hover:bg-amber-500/20 hover:text-amber-400"
                }`}
              >
                {p.isPro ? "🔒 Pro Only" : copied === p.id ? "✓ Copied!" : "📋 Copy Prompt"}
              </button>
            </div>
          ))}
        </div>

        {filtered.length > 12 && (
          <p className="text-center text-slate-600 text-xs mt-6">
            Showing 12 of {filtered.length} prompts. Get the Pro Pack for full access.
          </p>
        )}
      </div>
    </section>
  );
}
