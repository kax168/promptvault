import { getAllPosts } from "@/lib/journal";
import { JournalCard } from "@/components/JournalCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — PromptVault",
  description: "Follow the PromptVault journey. Milestones, lessons, and building in public.",
};

export default function JournalPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">
          The <span className="text-gradient">Journal</span>
        </h1>
        <p className="text-slate-500 text-sm text-center mb-10">
          Every milestone documented. Every lesson shared.
        </p>
        <div className="space-y-4">
          {posts.map((post, i) => (
            <JournalCard key={post.id} post={post} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/" className="text-xs text-slate-600 hover:text-amber-400 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
