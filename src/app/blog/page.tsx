import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI tips, prompt engineering guides, and tutorials from LaerKai.",
};

const posts = [
  {
    slug: "ai-content-automation-workflows-2026",
    title: "AI Content Automation Workflows in 2026: Build Systems That Scale",
    excerpt: "Learn how to build production-ready AI content automation workflows in 2026. From ideation to publishing, discover the exact systems that save 25+ hours per week while maintaining quality.",
    date: "2026-03-08",
  },
  {
    slug: "few-shot-prompting-ai-agents-production-2026",
    title: "Few-Shot Prompting for AI Agents: Production Best Practices 2026",
    excerpt: "Master few-shot prompting strategies for production AI agents. Learn example selection, dynamic retrieval, optimal quantities, and testing frameworks that improve reliability by 40%.",
    date: "2026-03-08",
  },
  {
    slug: "ai-agents-marketing-automation-2026",
    title: "AI Agents for Marketing Automation in 2026: The Complete Implementation Guide",
    excerpt: "Discover how AI agents are transforming marketing automation in 2026. Learn implementation strategies, real-world use cases, and how to deploy autonomous marketing agents that drive results.",
    date: "2026-03-07",
  },
  {
    slug: "context-engineering-vs-prompt-engineering-2026",
    title: "Context Engineering vs Prompt Engineering in 2026: What Changed and Why It Matters",
    excerpt: "The AI industry has shifted from prompt engineering to context engineering. Learn what changed, why it matters, and how to adapt your workflow for production AI systems in 2026.",
    date: "2026-03-07",
  },
  {
    slug: "ai-writing-assistants-long-form-2026",
    title: "AI Writing Assistants for Long-Form Content in 2026: Complete Comparison Guide",
    excerpt: "Compare the best AI writing assistants for long-form content in 2026. From novels to technical documentation, discover which tools deliver quality, consistency, and speed.",
    date: "2026-03-06",
  },
  {
    slug: "chain-of-symbol-prompting-spatial-reasoning",
    title: "Chain-of-Symbol Prompting for Spatial Reasoning Tasks: A 2026 Guide",
    excerpt: "Discover how Chain-of-Symbol (CoS) prompting outperforms traditional Chain-of-Thought for spatial reasoning, planning, and grid-based AI tasks.",
    date: "2026-03-06",
  },
  {
    slug: "ai-workflow-automation-content-creators-2026",
    title: "AI Workflow Automation for Content Creators in 2026: The Complete Guide",
    excerpt: "Discover how content creators are using AI workflow automation to 10x their output in 2026. From ideation to publishing, learn the exact systems that save 20+ hours per week.",
    date: "2026-03-05",
  },
  {
    slug: "chain-of-symbol-prompting-2026",
    title: "Chain-of-Symbol Prompting: The 2026 Breakthrough That Beats Chain-of-Thought",
    excerpt: "Discover Chain-of-Symbol (CoS) prompting - the revolutionary 2026 technique that outperforms traditional Chain-of-Thought for spatial reasoning and planning tasks.",
    date: "2026-03-05",
  },
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
  {
    slug: "ai-content-optimization-guide",
    title: "AI Content Optimization: How to Rank Higher with AI-Generated Content in 2026",
    excerpt: "Master AI content optimization for SEO. Learn proven strategies to make AI-generated content rank on Google while maintaining quality and authenticity.",
    date: "2026-03-04",
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
