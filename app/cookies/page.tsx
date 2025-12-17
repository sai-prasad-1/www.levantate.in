import type { Metadata } from "next";
import Section from "../components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy explaining how Levantate Labs uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center pt-32! sm:pt-40! pb-20!">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div
            className="text-center mb-10! sm:mb-14! animate-fade-in-down"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-agile font-medium text-[#38385B] mb-4!">
              Cookie Policy
            </h1>
            <p className="text-sm sm:text-base font-onest text-[#5A5A7A]">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Main Card */}
          <div
            className="bg-[#D8D8E6] border-[1.79px] border-[#C2C2D6] p-2! sm:p-3! md:p-4! rounded-2xl sm:rounded-3xl animate-fade-in-up"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-5! sm:p-8! md:p-10!">
              <div className="space-y-8 sm:space-y-10">
                {/* Intro */}
                <section className="animate-fade-in [animation-delay:100ms] mb-4!">
                  <p className="text-sm sm:text-base md:text-lg font-onest text-[#5A5A7A] leading-relaxed">
                    This Cookie Policy explains how Levantate Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses
                    cookies and similar technologies on our website. It should be read together with our{" "}
                    <Link href="/privacy-policy" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-[#2A2A45] transition-colors">
                      Privacy Policy
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
                      What Are Cookies?
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    Cookies are small text files that are stored on your device when you visit a website. They are widely used
                    to make websites work, improve performance, and provide reporting information.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="animate-fade-in [animation-delay:200ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      2
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Types of Cookies We Use
                    </h2>
                  </div>
                  <div className="pl-11! sm:pl-13! space-y-3!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Essential cookies</span>
                        <span className="font-onest text-[#5A5A7A]"> – Required for the website to function properly (e.g., session management, security).</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Analytics cookies</span>
                        <span className="font-onest text-[#5A5A7A]"> – Help us understand how visitors use our site so we can improve performance and user experience.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Preference cookies</span>
                        <span className="font-onest text-[#5A5A7A]"> – Remember your preferences, such as language or saved settings.</span>
                      </div>
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
                      Third‑Party Cookies
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    We may allow trusted third‑party service providers (for example, analytics or embedded content providers)
                    to place cookies on your device. These third parties are responsible for their own cookie and privacy
                    practices, which we encourage you to review.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="animate-fade-in [animation-delay:300ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      4
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      How You Can Control Cookies
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mb-4!">
                    You have several options for managing cookies:
                  </p>
                  <div className="pl-11! sm:pl-13! space-y-3!">
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Browser settings</span>
                        <span className="font-onest text-[#5A5A7A]"> – Most browsers allow you to refuse or delete cookies. Refer to your browser&apos;s help documentation for details.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Opt‑out tools</span>
                        <span className="font-onest text-[#5A5A7A]"> – Some analytics providers offer opt‑out mechanisms for their cookies or tracking technologies.</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-[#F8F8FB] rounded-xl p-4! border border-[#E2E4F5]">
                      <div className="w-2 h-2 rounded-full bg-[#38385B] mt-2! shrink-0" />
                      <div>
                        <span className="font-onest font-semibold text-[#38385B]">Consent banners</span>
                        <span className="font-onest text-[#5A5A7A]"> – Where required by law, we may provide a consent banner or settings panel to manage non‑essential cookies.</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13! mt-4! italic">
                    Please note that disabling certain cookies may affect the functionality and performance of our website.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="animate-fade-in [animation-delay:350ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      5
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Updates to This Cookie Policy
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    We may update this Cookie Policy from time to time to reflect changes in technology, law, or our
                    practices. When we do, we will update the &quot;Last updated&quot; date above. We encourage you to review
                    this page periodically.
                  </p>
                </section>

                {/* Section 6 - Contact */}
                <section className="animate-fade-in [animation-delay:400ms]">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      6
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Contact
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    If you have any questions about our use of cookies, please contact us at{" "}
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
