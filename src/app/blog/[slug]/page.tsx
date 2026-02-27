import type { Metadata } from "next";
import Link from "next/link";

const POSTS: Record<string, {
  title: string; desc: string; date: string; body: string[]
}> = {
  "what-is-prompt-engineering": {
    title: "What Is Prompt Engineering? A Beginner's Guide",
    desc: "Learn the fundamentals of prompt engineering and how to get better results from AI.",
    date: "2026-02-27",
    body: [
      "Prompt engineering is the practice of crafting effective instructions for AI models.",
      "Think of it like learning to ask the right questions.",
      "The key principles are: be specific, provide context, use examples, and iterate.",
      "A good prompt has three parts: role (who the AI should be), task (what to do), and format (how to output).",
      "For example: 'You are a senior copywriter. Write 5 email subject lines for a SaaS product launch. Keep them under 50 characters.'",
      "Common mistakes include being too vague, not providing context, and expecting perfection on the first try.",
      "Start with our free Starter Pack of 30 prompts to see these principles in action.",
    ],
  },
  "chatgpt-vs-claude-vs-gemini": {
    title: "ChatGPT vs Claude vs Gemini: Which AI Is Best for You?",
    desc: "A detailed comparison of the three major AI assistants.",
    date: "2026-02-27",
    body: [
      "Choosing the right AI assistant depends on your specific needs. Here is how the big three compare.",
      "ChatGPT (OpenAI): Best for general-purpose tasks, creative writing, and coding. GPT-4o is fast and capable.",
      "Claude (Anthropic): Excels at long-form analysis, nuanced reasoning, and following complex instructions.",
      "Gemini (Google): Strong at research, multimodal tasks, and integration with Google services.",
      "For coding: ChatGPT and Claude are neck-and-neck. Claude handles larger codebases better.",
      "For writing: Claude produces more natural prose. ChatGPT is more creative and playful.",
      "For research: Gemini wins with real-time web access and Google integration.",
      "Our recommendation: use 2-3 models for different tasks. Our prompt templates work across all three.",
    ],
  },
  "10-prompts-every-developer-needs": {
    title: "10 AI Prompts Every Developer Needs in 2026",
    desc: "Essential AI prompts to supercharge your development workflow.",
    date: "2026-02-27",
    body: [
      "AI is transforming how developers work. Here are 10 prompts that will save you hours every week.",
      "1. Code Review: 'Review this code for bugs, security issues, and performance. Suggest improvements with explanations.'",
      "2. Debugging: 'I am getting this error [paste error]. Here is my code [paste code]. Explain the root cause and fix.'",
      "3. Documentation: 'Write JSDoc comments for all functions in this file. Include parameter types and return values.'",
      "4. Refactoring: 'Refactor this function to be more readable and maintainable. Explain each change.'",
      "5. Testing: 'Write unit tests for this function using Jest. Cover edge cases and error scenarios.'",
      "6. Architecture: 'I am building [describe app]. Suggest a clean architecture with folder structure and key patterns.'",
      "7. API Design: 'Design a RESTful API for [feature]. Include endpoints, methods, request/response schemas.'",
      "8. Performance: 'Analyze this code for performance bottlenecks. Suggest optimizations with benchmarks.'",
      "9. Security: 'Audit this code for security vulnerabilities. Check for injection, XSS, CSRF, and auth issues.'",
      "10. Learning: 'Explain [concept] like I am a mid-level developer. Include a practical example I can run.'",
      "Want all 200+ prompts organized by category? Check out our Pro Pack.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Not Found" };
  return { title: post.title, description: post.desc };
}

export default async function BlogPost(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return <div>Not Found</div>;

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-blue-400 text-sm hover:underline mb-6 block">
          ← Back to Blog
        </Link>
        <time className="text-xs text-slate-500">{post.date}</time>
        <h1 className="text-4xl font-bold mt-2 mb-8">{post.title}</h1>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
