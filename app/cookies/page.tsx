import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy explaining how Levantate Labs uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#EAEAF1] pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-[#E2E4F5] p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
          <section>
            <p>
              This Cookie Policy explains how Levantate Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses
              cookies and similar technologies on our website. It should be read together with our{" "}
              <a href="/privacy" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used
              to make websites work, improve performance, and provide reporting information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Essential cookies</strong> – Required for the website to function properly (e.g., session
                management, security).
              </li>
              <li>
                <strong>Analytics cookies</strong> – Help us understand how visitors use our site so we can improve
                performance and user experience (for example, via privacy‑friendly analytics tools or third‑party
                providers).
              </li>
              <li>
                <strong>Preference cookies</strong> – Remember your preferences, such as language or saved settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Third‑Party Cookies</h2>
            <p>
              We may allow trusted third‑party service providers (for example, analytics or embedded content providers)
              to place cookies on your device. These third parties are responsible for their own cookie and privacy
              practices, which we encourage you to review.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. How You Can Control Cookies</h2>
            <p className="mb-2">You have several options for managing cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Browser settings</strong> – Most browsers allow you to refuse or delete cookies. The method
                varies by browser, so refer to your browser&apos;s help documentation for details.
              </li>
              <li>
                <strong>Opt‑out tools</strong> – Some analytics providers offer opt‑out mechanisms for their cookies or
                tracking technologies.
              </li>
              <li>
                <strong>Consent banners</strong> – Where required by law, we may provide a consent banner or settings
                panel to manage non‑essential cookies.
              </li>
            </ul>
            <p className="mt-2">
              Please note that disabling certain cookies may affect the functionality and performance of our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, law, or our
              practices. When we do, we will update the &quot;Last updated&quot; date above. We encourage you to review
              this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Contact</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:contact@levantate.in" className="text-blue-600 underline">
                contact@levantate.in
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}


