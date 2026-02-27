import type { Metadata } from "next";
import prompts from "@/data/all-prompts.json";
import Link from "next/link";

const CATEGORIES: Record<string, { name: string; desc: string }> = {
  writing: { name: "Writing", desc: "AI prompts for blog posts, essays, copywriting, and creative writing." },
  coding: { name: "Coding", desc: "AI prompts for debugging, code review, refactoring, and development." },
  marketing: { name: "Marketing", desc: "AI prompts for social media, ads, SEO, and growth strategies." },
  business: { name: "Business", desc: "AI prompts for strategy, analysis, planning, and operations." },
  education: { name: "Education", desc: "AI prompts for learning, teaching, tutoring, and study guides." },
  creative: { name: "Creative", desc: "AI prompts for brainstorming, storytelling, art, and design." },
  productivity: { name: "Productivity", desc: "AI prompts for task management, automation, and workflows." },
  translation: { name: "Translation", desc: "AI prompts for translation, localization, and multilingual content." },
};

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) return { title: "Not Found" };
  return {
    title: `${cat.name} AI Prompts`,
    description: cat.desc,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = CATEGORIES[category];
  if (!cat) return <div>Not Found</div>;

  const items = prompts.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link href="/prompts" className="text-blue-400 text-sm hover:underline mb-6 block">
          ← All Categories
        </Link>
        <h1 className="text-4xl font-bold mb-4">{cat.name} AI Prompts</h1>
        <p className="text-slate-400 mb-10">{cat.desc} {items.length} templates available.</p>

        <div className="space-y-4">
          {items.map((p, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-5">
              <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-3 line-clamp-2">{p.prompt}</p>
              <span className="text-xs text-slate-500">Works with ChatGPT, Claude, Gemini</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
