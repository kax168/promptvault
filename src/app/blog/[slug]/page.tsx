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
  "how-to-write-system-prompts-for-ai-agents": {
    title: "How to Write System Prompts for AI Agents: A Complete Guide",
    desc: "Learn how to craft effective system prompts for AI agents. Step-by-step techniques to build reliable, task-focused AI agents with clear instructions.",
    date: "2026-02-27",
    body: [
      "AI agents are everywhere in 2026 — from customer support bots to autonomous coding assistants. But the difference between a mediocre agent and a great one almost always comes down to one thing: the system prompt.",
      "A system prompt is the hidden instruction set that defines how an AI agent behaves. It is the DNA of your agent. Get it right, and your agent feels like a seasoned professional. Get it wrong, and you will spend weeks debugging bizarre behavior.",
      "In this guide, we will walk through the exact process of writing system prompts that produce consistent, reliable AI agents — whether you are building with GPT-4, Claude, Gemini, or any other foundation model.",
      "## Why System Prompts Matter More Than Ever",
      "As AI models become more capable, the system prompt becomes the primary lever for controlling behavior. Fine-tuning is expensive and slow. Prompt engineering is fast and iterative. A well-crafted system prompt can turn a general-purpose model into a domain expert in seconds.",
      "The rise of agentic AI — where models take actions, call tools, and make decisions autonomously — makes system prompts even more critical. A vague system prompt for a chatbot might produce awkward responses. A vague system prompt for an agent might produce costly mistakes.",
      "## The Anatomy of a Great System Prompt",
      "Every effective system prompt has five core components: Identity, Capabilities, Constraints, Output Format, and Examples. Let us break each one down.",
      "1. Identity — Tell the AI who it is. 'You are a senior financial analyst specializing in SaaS metrics' is far better than 'You are a helpful assistant.' Specificity drives quality.",
      "2. Capabilities — Define what the agent can and cannot do. List the tools it has access to, the data sources it can query, and the actions it can take. Ambiguity here leads to hallucinated capabilities.",
      "3. Constraints — Set boundaries. What topics should it avoid? What tone should it use? What is the maximum response length? Constraints prevent your agent from going off the rails.",
      "4. Output Format — Specify exactly how the agent should respond. JSON? Markdown? Bullet points? A conversational paragraph? The more explicit you are, the more consistent the output.",
      "5. Examples — Show, do not just tell. Include 1-3 examples of ideal input-output pairs. Few-shot examples are the single most effective technique for improving prompt reliability.",
      "## Step-by-Step: Writing Your First System Prompt",
      "Let us build a system prompt from scratch for a common use case: a customer support agent for an e-commerce store.",
      "Step 1: Start with a clear identity statement. 'You are a friendly, knowledgeable customer support agent for an online store that sells premium tech accessories.'",
      "Step 2: Define capabilities. 'You can look up order status, process returns, answer product questions, and escalate to a human agent when needed.'",
      "Step 3: Add constraints. 'Never make up product information. If you do not know the answer, say so and offer to connect the customer with a human. Keep responses under 150 words.'",
      "Step 4: Specify output format. 'Respond in a warm, conversational tone. Use short paragraphs. If listing steps, use numbered lists.'",
      "Step 5: Add examples. Include 2-3 sample conversations showing ideal behavior — one easy question, one tricky edge case, and one escalation scenario.",
      "## Advanced Techniques for Agent System Prompts",
      "Once you have the basics down, these advanced techniques will take your agents to the next level.",
      "Chain-of-Thought Prompting: Ask the agent to think step by step before answering. This dramatically improves accuracy for complex reasoning tasks. Add a line like 'Before responding, think through the problem step by step in a scratchpad section.'",
      "Persona Layering: Combine multiple roles for nuanced behavior. For example, 'You are a technical writer who also has deep expertise in cybersecurity. Write for a developer audience but explain jargon when it first appears.'",
      "Guardrails and Fallbacks: Build safety nets into your prompt. 'If the user asks about topics outside your expertise, respond with: I specialize in X, but I would recommend checking Y for that question.'",
      "Dynamic Context Injection: Design your system prompt with placeholders for runtime data. For example, include {user_name}, {account_tier}, or {recent_orders} that get filled in by your application before each API call.",
      "## Common Mistakes to Avoid",
      "After reviewing thousands of system prompts, here are the most common pitfalls we see.",
      "Being too vague: 'Be helpful' tells the AI nothing. 'Answer customer billing questions accurately and empathetically, using data from our knowledge base' tells it everything.",
      "Prompt bloat: Longer is not always better. A 5,000-word system prompt full of edge cases often performs worse than a focused 500-word prompt with clear principles. The AI gets confused by contradictory instructions.",
      "No iteration: The best system prompts are never written in one sitting. Test with real inputs, find failure modes, and refine. Treat prompt engineering like software development — version control your prompts and track what changed.",
      "Ignoring model differences: A prompt optimized for GPT-4 may not work well with Claude or Gemini. Each model has different strengths. Test across models if your application might switch providers.",
      "## Tools and Resources for System Prompt Engineering",
      "You do not have to start from scratch. There are excellent resources to accelerate your prompt engineering workflow.",
      "Prompt libraries like LaerKai (https://fromlaerkai.store) offer professionally crafted prompt templates that you can customize for your specific use case. Instead of spending hours writing prompts from scratch, start with a proven template and adapt it to your needs.",
      "Version control your prompts in Git alongside your code. Treat them as first-class artifacts. When something breaks, you want to know exactly what changed.",
      "Use evaluation frameworks to test your prompts systematically. Run the same 50 test inputs through your prompt after every change and track pass rates. This turns prompt engineering from guesswork into science.",
      "## The Future of System Prompts",
      "As AI agents become more autonomous, system prompts will evolve from static instructions to dynamic frameworks. We are already seeing prompts that adapt based on user behavior, context, and feedback loops.",
      "The developers who master system prompt engineering today will have a massive advantage as agentic AI becomes the default way we build software. It is not just a nice-to-have skill — it is becoming a core competency.",
      "Ready to level up your prompt game? Browse our curated collection of AI prompt templates at LaerKai (https://fromlaerkai.store) — from system prompts for agents to task-specific templates for writing, coding, marketing, and more. Start building better AI experiences today.",
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
