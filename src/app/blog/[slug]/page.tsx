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
  "prompt-chaining-for-ai-agents": {
    title: "Prompt Chaining for AI Agents: How to Build Reliable Multi-Step Workflows",
    desc: "Learn how prompt chaining breaks complex AI tasks into reliable, modular steps. A practical guide to building smarter AI agent workflows in 2026.",
    date: "2026-02-27",
    body: [
      "If you have ever asked an AI to do something complex — like research a topic, summarize the findings, and then draft an email based on those findings — you have probably noticed that quality drops fast when you cram everything into a single prompt. The AI tries to juggle too many instructions at once, and the result is mediocre at best.",
      "That is exactly the problem prompt chaining solves. Instead of one massive prompt, you break a complex task into a sequence of smaller, focused prompts — where the output of one becomes the input of the next. It is the single most effective technique for building reliable AI agent workflows in 2026.",
      "## What Is Prompt Chaining?",
      "Prompt chaining is the practice of decomposing a complex task into a series of subtasks, each handled by its own prompt. Think of it like an assembly line: each station does one thing well, and the final product is better than anything a single station could produce alone.",
      "Here is a simple example. Say you want an AI agent to write a blog post. Instead of one prompt that says 'write a blog post about X,' you chain three prompts together:",
      "Prompt 1: 'Research the top 5 trending subtopics within X. Output a bullet list.' Prompt 2: 'Given these subtopics [output from Prompt 1], create a detailed outline with headers and key points.' Prompt 3: 'Using this outline [output from Prompt 2], write a 1,200-word blog post with an engaging introduction and clear conclusion.'",
      "Each prompt is simple, focused, and easy to debug. If the outline is bad, you fix Prompt 2 — you do not have to untangle a 500-word mega-prompt to find the issue.",
      "## Why Prompt Chaining Matters for AI Agents",
      "AI agents — autonomous systems that take actions, call tools, and make decisions — are the defining trend of 2026. But here is the dirty secret: most agent failures are not model failures. They are prompt failures. The agent was given too much to do in a single step, and it lost the plot.",
      "Prompt chaining fixes this by giving agents a clear execution path. Instead of 'figure it out,' you give the agent a playbook: step 1, then step 2, then step 3. Each step has a defined input, a defined output, and a clear success criteria.",
      "The benefits are immediate. First, reliability goes up dramatically. A chain of five simple prompts will outperform one complex prompt almost every time. Second, debugging becomes trivial — you can inspect the output at each step and pinpoint exactly where things went wrong. Third, you can mix and match models. Use a fast, cheap model for data extraction and a powerful model for the final synthesis.",
      "## 5 Prompt Chaining Patterns Every Builder Should Know",
      "Not all chains are linear. Here are the five most useful patterns for building AI agent workflows.",
      "### 1. Sequential Chain",
      "The simplest pattern: A → B → C. Each prompt feeds into the next. Use this for straightforward multi-step tasks like research → outline → draft, or extract → transform → load. Most workflows start here.",
      "### 2. Conditional Chain",
      "Add branching logic based on the output of a previous step. For example: classify a customer inquiry first, then route to different prompts depending on whether it is a billing question, a technical issue, or a feature request. This is how you build agents that handle diverse inputs gracefully.",
      "### 3. Parallel Chain",
      "Run multiple prompts simultaneously and merge the results. For instance, when analyzing a competitor, you might run three prompts in parallel — one for pricing analysis, one for feature comparison, one for sentiment from reviews — then combine them into a single report. This saves time and produces richer output.",
      "### 4. Validation Chain",
      "Add a verification step after a generation step. Prompt 1 generates content. Prompt 2 checks it against specific criteria — factual accuracy, tone, format compliance, or brand guidelines. If it fails, loop back. This pattern is essential for production-grade agents where quality cannot slip.",
      "### 5. Recursive Chain",
      "The output of a prompt determines whether to continue or stop. This is powerful for tasks with unknown depth — like crawling a website until you find the right information, or refining a draft until it meets a quality threshold. Set a maximum iteration count to avoid infinite loops.",
      "## A Real-World Example: Building a Content Research Agent",
      "Let us walk through a practical prompt chain for a content research agent — the kind of workflow that saves marketers hours every week.",
      "Step 1 — Topic Discovery: 'Given the niche [input], identify 10 trending subtopics with high search potential. For each, estimate search intent (informational, transactional, navigational). Output as JSON.'",
      "Step 2 — Keyword Expansion: 'For the top 3 subtopics from this list [Step 1 output], generate 5 long-tail keyword variations each. Focus on question-based queries that indicate high purchase intent.'",
      "Step 3 — Competitive Analysis: 'For each keyword [Step 2 output], analyze the top 3 ranking articles. Identify content gaps — what are they missing? What questions do they leave unanswered? Output a gap analysis table.'",
      "Step 4 — Content Brief: 'Using the gap analysis [Step 3 output], create a detailed content brief: target keyword, suggested title, H2/H3 structure, key points to cover, unique angle, and recommended word count.'",
      "Each step is independently testable. If your keyword expansion is weak, you tweak Step 2 without touching anything else. If the competitive analysis misses key competitors, you adjust Step 3. This modularity is what makes prompt chaining so powerful for production workflows.",
      "## Best Practices for Prompt Chaining",
      "After building dozens of chained workflows, here are the lessons that matter most.",
      "Keep each prompt focused on a single task. The moment a prompt tries to do two things, you lose the benefits of chaining. If you find yourself writing 'and also,' split it into two prompts.",
      "Define clear input and output formats. Use structured formats like JSON or markdown between steps. This makes it easy to parse outputs programmatically and reduces errors when passing data between prompts. Vague outputs create vague inputs for the next step.",
      "Add error handling at each step. What happens if a step returns unexpected output? Build validation checks between steps — even a simple 'does this output contain the expected fields?' can prevent cascading failures down the chain.",
      "Log everything. Save the input and output of every step. When something goes wrong in production (and it will), these logs are your lifeline. You will be able to replay the exact chain that failed and fix the specific prompt that caused the issue.",
      "Start simple, then add complexity. Begin with a 2-3 step chain. Get it working reliably. Then add branching, validation, or parallel steps as needed. Over-engineering a chain from day one is the fastest way to create something unmaintainable.",
      "## Tools for Building Prompt Chains",
      "You do not need a framework to start chaining prompts. A simple Python script with API calls works fine for prototyping. But as your chains grow more complex, dedicated tools help.",
      "LangChain and LlamaIndex offer built-in chaining abstractions. For simpler needs, prompt template libraries like LaerKai (https://fromlaerkai.store) provide pre-built prompt sequences that you can customize — saving you the trial-and-error of writing each step from scratch.",
      "The key is to version control your prompts. Store each prompt in your chain as a separate file or config entry. When you update one step, you can track exactly what changed and roll back if needed. Treat prompts like code — because in 2026, they are code.",
      "## Prompt Chaining vs. Single Mega-Prompts",
      "You might wonder: why not just write a really detailed single prompt? After all, models like GPT-4 and Claude can handle long, complex instructions. The answer comes down to reliability and maintainability.",
      "A single 2,000-word prompt might work 70% of the time. A chain of five 200-word prompts will work 95% of the time — because each step is simple enough that the model rarely gets confused. And when it does fail, you know exactly which step broke.",
      "Think of it like functions in programming. You could write one 500-line function that does everything. But any experienced developer will tell you to break it into smaller functions — each with a single responsibility. Prompt chaining applies the same principle to AI workflows.",
      "## Getting Started Today",
      "Prompt chaining is not a future concept — it is the standard approach for anyone building serious AI workflows right now. Whether you are automating content creation, building customer support agents, or streamlining data analysis pipelines, chaining will make your AI more reliable, more debuggable, and more maintainable.",
      "Start with a task you currently handle with a single complex prompt. Break it into 2-3 steps. Test each step independently. Then connect them. You will be amazed at how much better the results are.",
      "Need ready-made prompt chains to jumpstart your workflow? Browse our curated collection of AI prompt templates at LaerKai (https://fromlaerkai.store) — including multi-step prompt sequences for content creation, coding, marketing, and business analysis. Each template is designed to chain seamlessly, so you can build reliable AI workflows from day one.",
    ],
  },
  "best-ai-prompts-for-small-business": {
    title: "Best AI Prompts for Small Business: 15 Ready-to-Use Templates",
    desc: "Discover 15 proven AI prompts for small business owners. From marketing emails to financial planning — copy-paste templates that save hours every week.",
    date: "2026-02-28",
    body: [
      "Running a small business means wearing every hat — marketing, sales, customer support, finance, operations. You are the CEO and the intern. That is exactly why AI prompts for small business have become the ultimate productivity hack in 2026. The right prompt turns ChatGPT, Claude, or Gemini into a specialist on demand, handling tasks that used to eat hours of your week.",
      "But here is the problem: most prompt guides are written for developers or enterprise teams. They assume you have time to learn prompt engineering theory. You do not. You need prompts that work right now, for real business tasks, with zero learning curve.",
      "That is what this guide delivers. Fifteen battle-tested AI prompts for small business owners — organized by the tasks you actually do every day. Copy them. Paste them. Watch your to-do list shrink.",
      "## Marketing and Content Prompts",
      "### 1. Social Media Post Generator",
      "Prompt: 'You are a social media strategist for a small [industry] business. Write 5 engaging social media posts for [platform]. Each post should be under [character limit], include a call to action, and match a [casual/professional] tone. Our product is [describe product]. Our target audience is [describe audience].'",
      "This single prompt replaces hours of staring at a blank screen. The key is filling in the brackets with your specifics — the more detail you give, the better the output.",
      "### 2. Email Marketing Campaign",
      "Prompt: 'Write a 3-email welcome sequence for new subscribers to my [type of business]. Email 1: warm welcome and brand story (send day 0). Email 2: top 3 tips related to [your niche] (send day 3). Email 3: soft pitch for [your product or service] with a limited-time offer (send day 7). Keep each email under 200 words. Tone: friendly and helpful, not salesy.'",
      "Email marketing still delivers the highest ROI for small businesses. This prompt gives you a complete automated sequence in minutes instead of days.",
      "### 3. Blog Post Outline",
      "Prompt: 'Create a detailed blog post outline for the topic: [your topic]. Target keyword: [keyword]. Include an engaging H1 title, 5-7 H2 sections, 2-3 bullet points under each H2, a compelling introduction hook, and a conclusion with a call to action. The audience is [describe reader]. Aim for 1,200 words when fully written.'",
      "## Sales and Customer Service Prompts",
      "### 4. Sales Follow-Up Email",
      "Prompt: 'Write a friendly follow-up email to a potential customer who [attended a demo / downloaded a resource / visited our booth]. Reference [specific interaction]. Keep it under 150 words. Include one clear next step. Tone: helpful, not pushy. My business is [describe business].'",
      "Following up is where most small businesses drop the ball. This prompt makes it effortless to send personalized follow-ups that actually convert.",
      "### 5. Customer FAQ Generator",
      "Prompt: 'Based on this description of my business: [paste business description], generate the 10 most likely customer questions and write clear, concise answers for each. Format as Q&A. Keep answers under 3 sentences. Include one answer that naturally mentions our [specific product or feature].'",
      "### 6. Review Response Templates",
      "Prompt: 'Write 3 response templates for online reviews of my [type of business]: one for a 5-star review (grateful, personal), one for a 3-star review (acknowledge feedback, offer improvement), and one for a 1-star review (empathetic, solution-oriented, invite offline conversation). Keep each under 100 words.'",
      "Responding to reviews builds trust and improves local SEO. These templates let you reply in seconds while still sounding genuine and thoughtful.",
      "## Operations and Planning Prompts",
      "### 7. Weekly Task Prioritizer",
      "Prompt: 'I run a small [type of business] with [number] employees. Here are my tasks for this week: [list tasks]. Prioritize them using the Eisenhower Matrix (urgent/important). For each task, suggest whether I should do it myself, delegate it, schedule it, or drop it. Be ruthless — I only have 40 hours.'",
      "### 8. Standard Operating Procedure Writer",
      "Prompt: 'Write a step-by-step standard operating procedure (SOP) for [specific task, e.g., processing a customer return]. Include: purpose, scope, required tools or access, numbered steps, common mistakes to avoid, and an estimated time per step. Write it so a new employee could follow it on day one.'",
      "SOPs are the backbone of a scalable business. Most owners know they need them but never find time to write them. This prompt does it in two minutes.",
      "### 9. Meeting Agenda and Summary",
      "Prompt: 'I have a 30-minute meeting about [topic] with [who]. Create a focused agenda with time allocations. After the meeting, I will paste my notes — then summarize the key decisions, action items with owners, and deadlines in a clean format I can share with the team.'",
      "## Finance and Strategy Prompts",
      "### 10. Cash Flow Scenario Planner",
      "Prompt: 'I run a [type of business] with monthly revenue of approximately [amount] and fixed costs of [amount]. Model three scenarios for the next 6 months: optimistic (20% growth), baseline (flat), and pessimistic (15% decline). For each scenario, show monthly cash flow and flag when I would need additional funding. Keep it simple — I am not a finance person.'",
      "### 11. Pricing Strategy Analyzer",
      "Prompt: 'I sell [product/service] at [current price]. My costs are [list costs]. My competitors charge [competitor prices]. Analyze whether I should raise, lower, or keep my price. Consider value perception, margin impact, and market positioning. Give me a specific recommendation with reasoning.'",
      "### 12. Competitor Analysis Brief",
      "Prompt: 'Analyze my top 3 competitors in the [industry] space: [list competitors]. For each, identify their strengths, weaknesses, pricing model, and unique selling proposition. Then tell me: what gap exists in the market that my business ([describe your business]) could fill? Be specific and actionable.'",
      "## Hiring and Team Prompts",
      "### 13. Job Description Writer",
      "Prompt: 'Write a job description for a [role] at my small [type of business]. Include: a compelling opening paragraph about the company, 5-7 key responsibilities, required qualifications vs nice-to-haves, salary range context for [location], and a closing that sells the opportunity. Avoid corporate jargon — we are a small team and want someone who thrives in that environment.'",
      "### 14. Interview Question Generator",
      "Prompt: 'Generate 10 interview questions for a [role] at a small business. Mix behavioral questions (past experience), situational questions (hypothetical scenarios), and role-specific technical questions. For each question, include what a great answer looks like in 1-2 sentences. Avoid generic questions like tell me about yourself.'",
      "### 15. Onboarding Checklist Creator",
      "Prompt: 'Create a 30-day onboarding checklist for a new [role] at my [type of business]. Break it into Week 1 (orientation and setup), Week 2 (training and shadowing), Week 3 (guided independent work), and Week 4 (full responsibilities with check-ins). Include specific tasks, who they should meet, and what success looks like at the end of 30 days.'",
      "## How to Get the Most Out of These Prompts",
      "These prompts are templates, not scripts. The magic is in customization. Here are three rules that will dramatically improve your results.",
      "First, be specific about your business. Do not say 'I run a business.' Say 'I run a 5-person digital marketing agency in Austin that specializes in local restaurants.' The more context you give, the more relevant the output.",
      "Second, iterate. Your first result will be good. Your third will be great. After the AI responds, say 'Make it more concise' or 'Add more specific examples' or 'Adjust the tone to be warmer.' Treat it like a conversation, not a one-shot request.",
      "Third, save what works. When you find a prompt that nails it for your business, save it somewhere you can find it again. Build your own prompt library over time. Or skip the trial-and-error entirely — our curated prompt collections at LaerKai (https://fromlaerkai.store) are designed specifically for business use cases, so you can start with proven templates and customize from there.",
      "## The Bottom Line",
      "AI is not going to replace small business owners. But small business owners who use AI will outpace those who do not. These 15 prompts cover the tasks that eat most of your time — marketing, sales, operations, finance, and hiring. Each one is ready to copy, paste, and customize in under a minute.",
      "Want even more? Browse our full collection of 200+ business-ready AI prompt templates at LaerKai (https://fromlaerkai.store). From marketing campaigns to financial modeling to team management — every template is tested, optimized, and ready to use with ChatGPT, Claude, Gemini, or any AI model. Stop writing prompts from scratch. Start running your business smarter.",
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
