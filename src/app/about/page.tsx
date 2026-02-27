import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about LaerKai — who we are, our mission, and why we build AI prompt templates.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">About LaerKai</h1>

        <section className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            LaerKai started as a personal experiment: after months of using ChatGPT, Claude, and Gemini daily,
            we noticed that the same prompt patterns kept producing dramatically better results. So we started
            collecting them.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Our Mission</h2>
          <p>
            We believe AI is only as good as the prompts you give it. Our mission is to make prompt engineering
            accessible to everyone — from complete beginners to power users — by providing battle-tested,
            ready-to-use templates that actually work.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>200+ curated prompt templates across 8 categories</li>
            <li>Templates for ChatGPT, Claude, Gemini, and other major AI models</li>
            <li>Categories: Writing, Coding, Marketing, Business, Education, Creative, Productivity, Translation</li>
            <li>Free Starter Pack with 30 essential prompts</li>
            <li>Pro Pack with 200+ advanced templates for $9.90</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10">Why Trust Us?</h2>
          <p>
            Every prompt in our library has been personally tested across multiple AI models. We don&apos;t just
            collect prompts — we refine them until they consistently produce high-quality outputs. Our templates
            are updated regularly to keep up with the latest model capabilities.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10">Contact</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you.
            Reach out via our <a href="/contact" className="text-blue-400 hover:underline">contact page</a> or
            find us on <a href="https://x.com/FromLaerKai" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">X/Twitter</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
