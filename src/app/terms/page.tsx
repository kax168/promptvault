import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "LaerKai terms of service — rules and guidelines for using our website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">Last updated: February 27, 2026</p>

        <section className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using LaerKai (fromlaerkai.store), you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-2xl font-semibold text-white">2. Use of Content</h2>
          <p>
            All prompt templates provided on this website are for personal and commercial use.
            You may use them in your own projects, but you may not resell or redistribute
            the templates as a competing product.
          </p>

          <h2 className="text-2xl font-semibold text-white">3. Purchases</h2>
          <p>
            Digital products are sold through Gumroad. All sales are final. Refund requests
            are handled on a case-by-case basis within 30 days of purchase.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and prompt templates,
            is the property of LaerKai and is protected by applicable copyright laws.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Disclaimer</h2>
          <p>
            AI prompt results may vary depending on the model, version, and context. We do not
            guarantee specific outcomes from using our templates.
          </p>

          <h2 className="text-2xl font-semibold text-white">6. Changes</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the
            website constitutes acceptance of updated terms.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Contact</h2>
          <p>
            Questions about these terms? Visit our{" "}
            <a href="/contact" className="text-blue-400 hover:underline">contact page</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
