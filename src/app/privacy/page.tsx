import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "LaerKai privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Last updated: February 27, 2026</p>

        <section className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Usage data (pages visited, time spent, referral source)</li>
            <li>Device information (browser type, operating system)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Improve our website and user experience</li>
            <li>Analyze usage patterns and trends</li>
            <li>Display relevant advertisements via Google AdSense</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">3. Advertising</h2>
          <p>
            We use Google AdSense to display advertisements. Google may use cookies to serve ads
            based on your prior visits to this or other websites. You can opt out of personalized
            advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline"
              target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          </p>

          <h2 className="text-2xl font-semibold text-white">4. Cookies</h2>
          <p>
            This site uses cookies for analytics and advertising purposes. By continuing to use
            this site, you consent to our use of cookies. You can manage cookie preferences
            through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-white">5. Third-Party Services</h2>
          <p>We may use the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google AdSense (advertising)</li>
            <li>Google Analytics (usage analytics)</li>
            <li>Gumroad (payment processing)</li>
            <li>Vercel (hosting)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white">6. Data Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no method of
            transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-white">7. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us via
            our <a href="/contact" className="text-blue-400 hover:underline">contact page</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
