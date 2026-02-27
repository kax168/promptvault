import type { Metadata } from "next";
import prompts from "@/data/all-prompts.json";
import Link from "next/link";

const CATEGORIES = [
  { slug: "writing", name: "Writing", desc: "AI prompts for blog posts, essays, copywriting, and creative writing." },
  { slug: "coding", name: "Coding", desc: "AI prompts for debugging, code review, refactoring, and development." },
  { slug: "marketing", name: "Marketing", desc: "AI prompts for social media, ads, SEO, and growth strategies." },
  { slug: "business", name: "Business", desc: "AI prompts for strategy, analysis, planning, and operations." },
  { slug: "education", name: "Education", desc: "AI prompts for learning, teaching, tutoring, and study guides." },
  { slug: "creative", name: "Creative", desc: "AI prompts for brainstorming, storytelling, art, and design." },
  { slug: "productivity", name: "Productivity", desc: "AI prompts for task management, automation, and workflows." },
  { slug: "translation", name: "Translation", desc: "AI prompts for translation, localization, and multilingual content." },
];

export const metadata: Metadata = {
  title: "AI Prompt Templates Library",
  description: "Browse 200+ free AI prompt templates for ChatGPT, Claude & Gemini across 8 categories.",
};

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">AI Prompt Templates Library</h1>
        <p className="text-slate-400 mb-12">
          Browse 200+ battle-tested prompt templates across 8 categories.
          Each prompt works with ChatGPT, Claude, and Gemini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat) => {
            const count = prompts.filter((p) => p.category === cat.slug).length;
            return (
              <Link key={cat.slug} href={`/prompts/${cat.slug}`}
                className="block bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition">
                <h2 className="text-xl font-semibold text-white mb-2">{cat.name}</h2>
                <p className="text-slate-400 text-sm mb-3">{cat.desc}</p>
                <span className="text-blue-400 text-sm">{count} prompts →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
