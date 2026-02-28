import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI tips, prompt engineering guides, and tutorials from LaerKai.",
};

const posts = [
  {
    slug: "what-is-prompt-engineering",
    title: "What Is Prompt Engineering? A Beginner's Guide",
    excerpt: "Learn the fundamentals of prompt engineering and how to get better results from AI models like ChatGPT, Claude, and Gemini.",
    date: "2026-02-27",
  },
  {
    slug: "chatgpt-vs-claude-vs-gemini",
    title: "ChatGPT vs Claude vs Gemini: Which AI Is Best for You?",
    excerpt: "A detailed comparison of the three major AI assistants — strengths, weaknesses, and best use cases for each.",
    date: "2026-02-27",
  },
  {
    slug: "how-to-write-system-prompts-for-ai-agents",
    title: "How to Write System Prompts for AI Agents: A Complete Guide",
    excerpt: "Learn how to craft effective system prompts for AI agents. Step-by-step techniques to build reliable, task-focused AI agents with clear instructions.",
    date: "2026-02-27",
  },
  {
    slug: "prompt-chaining-for-ai-agents",
    title: "Prompt Chaining for AI Agents: How to Build Reliable Multi-Step Workflows",
    excerpt: "Learn how prompt chaining breaks complex AI tasks into reliable, modular steps. A practical guide to building smarter AI agent workflows in 2026.",
    date: "2026-02-27",
  },
  {
    slug: "best-ai-prompts-for-small-business",
    title: "Best AI Prompts for Small Business: 15 Ready-to-Use Templates",
    excerpt: "Discover 15 proven AI prompts for small business owners. From marketing emails to financial planning — copy-paste templates that save hours every week.",
    date: "2026-02-28",
  },
  {
    slug: "10-prompts-every-developer-needs",
    title: "10 AI Prompts Every Developer Needs in 2026",
    excerpt: "From code review to debugging to documentation — these prompts will supercharge your development workflow.",
    date: "2026-02-27",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-slate-400 mb-12">
          Tips, guides, and tutorials on AI prompt engineering.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="block bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition">
              <time className="text-xs text-slate-500">{post.date}</time>
              <h2 className="text-xl font-semibold text-white mt-1 mb-2">{post.title}</h2>
              <p className="text-slate-400 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
