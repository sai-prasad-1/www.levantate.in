import type { Metadata } from "next";
import Section from "../components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy describing how Levantate Labs collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center pt-32! sm:pt-40! pb-20!">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10! sm:mb-14! animate-fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-agile font-medium text-[#38385B] mb-4!">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base font-onest text-[#5A5A7A]">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>
          </div>

          {/* Main Card */}
          <div className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! md:p-4! rounded-2xl sm:rounded-3xl animate-fade-in-up">
            <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-8! md:p-10!">
              <div className="space-y-8 sm:space-y-10">
                {/* Intro */}
                <section className="animate-fade-in [animation-delay:100ms] mb-4!">
                  <p className="text-sm sm:text-base md:text-lg font-onest text-[#5A5A7A] leading-relaxed">
              Levantate Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                    our website or engage with our services. It should be read together with our{" "}
                    <Link href="/cookies" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-[#2A2A45] transition-colors">
                      Cookie Policy
                    </Link>.
            </p>
          </section>

                {/* Section 1 */}
                <section className="animate-fade-in [animation-delay:150ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      1
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Information We Collect
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mb-4!">
                    We may collect the following types of information:
                  </p>
                  <div className="pl-11! sm:pl-13! space-y-3!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Contact information</span>
                        <span className="font-onest text-[#5A5A7A]"> – such as your name, email address, company name, and phone number when you submit a form or contact us.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Project information</span>
                        <span className="font-onest text-[#5A5A7A]"> – that you share when discussing potential or ongoing engagements.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Usage data</span>
                        <span className="font-onest text-[#5A5A7A]"> – such as pages visited, time spent, referrers, and general analytics data collected via cookies or similar technologies.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Technical data</span>
                        <span className="font-onest text-[#5A5A7A]"> – such as IP address, browser type, and device information, where permitted by applicable law.</span>
                      </div>
                    </div>
                  </div>
          </section>

                {/* Section 2 */}
                <section className="animate-fade-in [animation-delay:200ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      2
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      How We Use Your Information
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mb-4!">
                    We use the information we collect to:
                  </p>
                  <div className="pl-11! sm:pl-13! space-y-3!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">Respond to your inquiries and communicate about potential or ongoing projects.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">Provide, operate, and improve our website, products, and services.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">Understand how our site is used and improve user experience and performance.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">Send you relevant updates, where permitted and with the option to opt out.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">Comply with legal obligations and protect our rights and interests.</span>
                    </div>
                  </div>
          </section>

                {/* Section 3 */}
                <section className="animate-fade-in [animation-delay:250ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      3
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      How We Share Information
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mb-4!">
              We do not sell your personal data. We may share your information with:
            </p>
                  <div className="pl-11! sm:pl-13! space-y-3!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Service providers</span>
                        <span className="font-onest text-[#5A5A7A]"> – who help us operate our business (e.g., hosting, analytics, email delivery), under appropriate confidentiality and data protection terms.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Legal or regulatory authorities</span>
                        <span className="font-onest text-[#5A5A7A]"> – when required to comply with applicable law, regulation, or legal process.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Business transfers</span>
                        <span className="font-onest text-[#5A5A7A]"> – in connection with a merger, acquisition, or sale of assets, where permitted by law.</span>
                      </div>
                    </div>
                  </div>
          </section>

                {/* Section 4 */}
                <section className="animate-fade-in [animation-delay:300ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      4
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Data Retention
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this Policy,
              unless a longer retention period is required or permitted by law (for example, for tax, accounting, or
              legal reasons).
            </p>
          </section>

                {/* Section 5 */}
                <section className="animate-fade-in [animation-delay:350ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      5
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Your Rights
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mb-4!">
              Depending on your jurisdiction, you may have certain rights regarding your personal data, such as:
            </p>
                  <div className="pl-11! sm:pl-13! space-y-3! mb-4!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">The right to access, correct, or delete your personal information.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">The right to object to or restrict certain processing.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">The right to data portability.</span>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <span className="font-onest text-[#5A5A7A]">The right to withdraw consent where processing is based on consent.</span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              To exercise these rights, please contact us at{" "}
                    <a href="mailto:contact@levantate.in" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-[#2A2A45] transition-colors">
                contact@levantate.in
                    </a>. We may need to verify your identity before processing your request.
            </p>
          </section>

                {/* Section 6 */}
                <section className="animate-fade-in [animation-delay:400ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      6
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      International Transfers
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              If we transfer your personal data across borders, we will take appropriate measures to ensure an adequate
              level of protection in accordance with applicable data protection laws.
            </p>
          </section>

                {/* Section 7 */}
                <section className="animate-fade-in [animation-delay:450ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      7
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Data Security
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              We implement reasonable technical and organizational measures to protect your personal data from
              unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or
              electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

                {/* Section 8 */}
                <section className="animate-fade-in [animation-delay:500ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      8
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Changes to This Policy
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last updated&quot;
              date above. Your continued use of our website or services after changes become effective constitutes your
              acceptance of the updated Policy.
            </p>
          </section>

                {/* Section 9 - Contact */}
                <section className="animate-fade-in [animation-delay:550ms]">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      9
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Contact Us
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at{" "}
                    <a 
                      href="mailto:contact@levantate.in" 
                      className="text-[#38385B] font-medium underline underline-offset-2 hover:text-[#2A2A45] transition-colors"
                    >
                contact@levantate.in
                    </a>.
            </p>
          </section>
        </div>
      </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
