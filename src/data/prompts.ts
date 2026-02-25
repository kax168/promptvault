import { Prompt } from "./types";

export const prompts: Prompt[] = [
  {
    id: "blog-post-writer",
    title: "Blog Post Writer",
    description: "Generate a well-structured blog post on any topic with SEO optimization",
    category: "writing",
    tags: ["blog", "SEO", "content"],
    model: "Any",
    isPro: false,
    prompt: `Write a comprehensive blog post about [TOPIC]. Include:\n- An attention-grabbing headline\n- Introduction with a hook\n- 3-5 main sections with subheadings\n- Practical examples and actionable tips\n- A conclusion with a call-to-action\n- SEO-friendly structure with keywords naturally integrated\n\nTone: [casual/professional/authoritative]\nWord count: [800-1500]\nTarget audience: [describe audience]`
  },
  {
    id: "email-copywriter",
    title: "Cold Email Copywriter",
    description: "Write high-converting cold emails that get replies",
    category: "marketing",
    tags: ["email", "sales", "outreach"],
    model: "Any",
    isPro: false,
    prompt: `Write a cold email for [PRODUCT/SERVICE] targeting [AUDIENCE].\n\nRequirements:\n- Subject line (under 50 chars, curiosity-driven)\n- Opening line that's personalized and relevant\n- 2-3 sentences explaining the value proposition\n- Social proof or specific result\n- Clear, low-friction CTA\n- Keep under 150 words total\n\nTone: conversational, not salesy`
  },
  {
    id: "code-reviewer",
    title: "Senior Code Reviewer",
    description: "Get expert-level code review feedback on any codebase",
    category: "coding",
    tags: ["code review", "best practices", "debugging"],
    model: "Claude/GPT-4",
    isPro: false,
    prompt: `Act as a senior software engineer doing a code review. Analyze this code:\n\n[PASTE CODE]\n\nProvide feedback on:\n1. Bugs or potential issues\n2. Performance concerns\n3. Security vulnerabilities\n4. Code style and readability\n5. Suggested improvements with code examples\n\nBe specific and constructive. Prioritize issues by severity.`
  },
  {
    id: "landing-page-copy",
    title: "Landing Page Copywriter",
    description: "Create high-converting landing page copy with headlines and CTAs",
    category: "marketing",
    tags: ["landing page", "conversion", "copywriting"],
    model: "Any",
    isPro: false,
    prompt: `Write landing page copy for [PRODUCT/SERVICE].\n\nInclude:\n- Hero headline (under 10 words, benefit-driven)\n- Subheadline (1 sentence expanding on the headline)\n- 3 feature sections with icons suggestions\n- Social proof section\n- FAQ section (5 questions)\n- CTA button text and surrounding copy\n\nTarget audience: [AUDIENCE]\nKey benefit: [MAIN BENEFIT]\nTone: confident, clear, no jargon`
  },
  {
    id: "python-debugger",
    title: "Python Bug Fixer",
    description: "Debug Python code with detailed explanations and fixes",
    category: "coding",
    tags: ["python", "debugging", "fix"],
    model: "Claude/GPT-4",
    isPro: false,
    prompt: `I have a Python bug. Here's my code:\n\n[PASTE CODE]\n\nError message:\n[PASTE ERROR]\n\nPlease:\n1. Explain what's causing the error\n2. Provide the fixed code\n3. Explain why the fix works\n4. Suggest how to prevent similar bugs`
  },
  {
    id: "business-plan",
    title: "Lean Business Plan Generator",
    description: "Generate a one-page lean business plan for any startup idea",
    category: "business",
    tags: ["startup", "business plan", "strategy"],
    model: "Any",
    isPro: true,
    prompt: `Create a lean business plan for: [BUSINESS IDEA]\n\nInclude:\n1. Problem Statement (2-3 sentences)\n2. Solution (how your product solves it)\n3. Target Market (size, demographics)\n4. Revenue Model (how you make money)\n5. Key Metrics (3-5 KPIs to track)\n6. Unfair Advantage (what's hard to copy)\n7. Channels (how you reach customers)\n8. Cost Structure (main expenses)\n9. 90-Day Action Plan (first 3 milestones)\n\nKeep each section concise. Use bullet points.`
  },
  {
    id: "tweet-thread",
    title: "Viral Tweet Thread Creator",
    description: "Create engaging Twitter/X threads that get shares and followers",
    category: "marketing",
    tags: ["twitter", "social media", "viral"],
    model: "Any",
    isPro: true,
    prompt: `Write a 10-tweet thread about [TOPIC].\n\nRules:\n- Tweet 1: Hook that stops the scroll (use a bold claim or surprising stat)\n- Tweets 2-9: One key insight per tweet, use line breaks\n- Tweet 10: Summary + CTA to follow\n- Each tweet under 280 chars\n- Use relevant emojis sparingly\n- Include 1-2 tweets with actionable tips\n- No hashtags in the thread (add 3 in a reply)\n\nTone: [authoritative/casual/storytelling]`
  },
  {
    id: "study-notes",
    title: "Smart Study Notes Generator",
    description: "Transform any material into effective study notes with mnemonics",
    category: "education",
    tags: ["study", "notes", "learning"],
    model: "Any",
    isPro: false,
    prompt: `Transform this material into effective study notes:\n\n[PASTE CONTENT]\n\nFormat:\n1. Key Concepts (bullet points, simple language)\n2. Important Definitions (term: definition)\n3. Relationships & Connections (how concepts link)\n4. Memory Aids (mnemonics, analogies)\n5. Practice Questions (5 questions with answers)\n6. One-Paragraph Summary\n\nMake it easy to review before an exam.`
  },
  {
    id: "api-docs",
    title: "API Documentation Writer",
    description: "Generate clean REST API documentation from code or descriptions",
    category: "coding",
    tags: ["API", "documentation", "REST"],
    model: "Claude/GPT-4",
    isPro: true,
    prompt: `Write REST API documentation for:\n\n[DESCRIBE ENDPOINTS OR PASTE CODE]\n\nFor each endpoint include:\n- Method & URL\n- Description\n- Headers (with auth)\n- Request body (JSON example)\n- Response (success + error examples)\n- Status codes\n- Rate limits if applicable\n\nFormat as clean markdown. Include a quick-start example using curl.`
  },
  {
    id: "product-description",
    title: "E-commerce Product Description",
    description: "Write compelling product descriptions that convert browsers to buyers",
    category: "business",
    tags: ["ecommerce", "product", "sales"],
    model: "Any",
    isPro: false,
    prompt: `Write a product description for [PRODUCT NAME].\n\nDetails: [KEY FEATURES]\nPrice point: [PRICE]\nTarget buyer: [AUDIENCE]\n\nInclude:\n- Headline (benefit-focused, under 10 words)\n- 2-3 sentence hook paragraph\n- 5 bullet points (feature → benefit format)\n- Sensory/emotional language\n- Urgency element\n- Keep under 200 words total`
  },
  {
    id: "story-writer",
    title: "Short Story Generator",
    description: "Create engaging short stories with vivid characters and plot twists",
    category: "creative",
    tags: ["fiction", "story", "creative writing"],
    model: "Claude/GPT-4",
    isPro: true,
    prompt: `Write a short story (800-1200 words).\n\nGenre: [GENRE]\nSetting: [TIME/PLACE]\nMain character: [BRIEF DESCRIPTION]\nConflict: [CENTRAL PROBLEM]\n\nRequirements:\n- Strong opening line that hooks the reader\n- Show, don't tell\n- Include dialogue\n- Build tension toward a climax\n- Ending with a twist or emotional payoff\n- Vivid sensory details`
  },
  {
    id: "translator-pro",
    title: "Context-Aware Translator",
    description: "Translate text while preserving tone, idioms, and cultural nuances",
    category: "translation",
    tags: ["translate", "localization", "language"],
    model: "Claude/GPT-4",
    isPro: false,
    prompt: `Translate the following from [SOURCE LANGUAGE] to [TARGET LANGUAGE]:\n\n[TEXT]\n\nGuidelines:\n- Preserve the original tone and style\n- Adapt idioms to equivalent expressions in the target language\n- Keep technical terms accurate\n- Note any cultural references that may need adaptation\n- If ambiguous, provide 2 options with explanations\n\nAfter translation, briefly note any localization considerations.`
  },
  {
    id: "weekly-planner",
    title: "AI Weekly Planner",
    description: "Plan your week with time-blocked schedule and priority management",
    category: "productivity",
    tags: ["planning", "schedule", "time management"],
    model: "Any",
    isPro: false,
    prompt: `Help me plan my week. Here's what I need to accomplish:\n\nTasks: [LIST YOUR TASKS]\nFixed commitments: [MEETINGS, APPOINTMENTS]\nWork hours: [e.g., 9am-6pm]\nPriorities: [TOP 3 GOALS THIS WEEK]\n\nCreate a time-blocked schedule Mon-Fri that:\n- Groups similar tasks together\n- Puts deep work in the morning\n- Includes breaks and buffer time\n- Flags tasks that can be delegated or deferred\n- Estimates time for each task`
  },
];
