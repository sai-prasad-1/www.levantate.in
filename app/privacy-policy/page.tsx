import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy describing how Levantate Labs collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#EAEAF1] pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-[#E2E4F5] p-6 sm:p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700">
          <section>
            <p>
              Levantate Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Contact information</strong> such as your name, email address, company name, and phone number
                when you submit a form or contact us.
              </li>
              <li>
                <strong>Project information</strong> that you share when discussing potential or ongoing engagements.
              </li>
              <li>
                <strong>Usage data</strong> such as pages visited, time spent, referrers, and general analytics data
                collected via cookies or similar technologies.
              </li>
              <li>
                <strong>Technical data</strong> such as IP address, browser type, and device information, where
                permitted by applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to your inquiries and communicate about potential or ongoing projects.</li>
              <li>Provide, operate, and improve our website, products, and services.</li>
              <li>Understand how our site is used and improve user experience and performance.</li>
              <li>Send you relevant updates, where permitted and with the option to opt out.</li>
              <li>Comply with legal obligations and protect our rights and interests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. How We Share Information</h2>
            <p className="mb-2">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Service providers</strong> who help us operate our business (e.g., hosting, analytics, email
                delivery), under appropriate confidentiality and data protection terms.
              </li>
              <li>
                <strong>Legal or regulatory authorities</strong> when required to comply with applicable law, regulation,
                or legal process.
              </li>
              <li>
                <strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets, where
                permitted by law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy,
              unless a longer retention period is required or permitted by law (for example, for tax, accounting, or
              legal reasons).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
            <p className="mb-2">
              Depending on your jurisdiction, you may have certain rights regarding your personal data, such as:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>The right to access, correct, or delete your personal information.</li>
              <li>The right to object to or restrict certain processing.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent where processing is based on consent.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:contact@levantate.in" className="text-blue-600 underline">
                contact@levantate.in
              </a>
              . We may need to verify your identity before processing your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. International Transfers</h2>
            <p>
              If we transfer your personal data across borders, we will take appropriate measures to ensure an adequate
              level of protection in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal data from
              unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot;
              date above. Your continued use of our website or services after changes become effective constitutes your
              acceptance of the updated Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at{" "}
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


