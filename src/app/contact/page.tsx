import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with LaerKai — questions, feedback, and partnership inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <section className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            We&apos;d love to hear from you! Whether you have a question about our prompt
            templates, need help choosing the right pack, or want to collaborate — reach out.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p>hello@fromlaerkai.store</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">X / Twitter</h3>
              <p><a href="https://x.com/FromLaerKai" className="text-blue-400 hover:underline"
                target="_blank" rel="noopener noreferrer">@FromLaerKai</a></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Response Time</h3>
              <p>We typically respond within 24-48 hours.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
