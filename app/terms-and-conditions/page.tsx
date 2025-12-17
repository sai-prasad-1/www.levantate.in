import type { Metadata } from "next";
import Section from "../components/ui/Section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Levantate Labs products, services, and website.",
};

export default function TermsPage() {
  return (
    <main>
      <Section fullWidth className="w-full min-h-screen flex items-center justify-center pt-32! sm:pt-40! pb-20!">
        <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-10! sm:mb-14! animate-fade-in-down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-agile font-medium text-[#38385B] mb-4!">
              Terms &amp; Conditions
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
                    By accessing or using the Levantate Labs website, products, or services (collectively, the &quot;Services&quot;),
                    you agree to be bound by these Terms &amp; Conditions. If you do not agree, you may not access or use our
                    Services. Please also review our{" "}
                    <Link href="/privacy-policy" className="text-[#38385B] font-medium underline underline-offset-2 hover:text-[#2A2A45] transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
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
                      Services
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    Levantate Labs provides consulting, design, and development services including (but not limited to)
                    blockchain development, AI solutions, web development, and UI/UX design. The scope of work for any
                    engagement is defined in a separate proposal, statement of work, or master services agreement.
                  </p>
                </section>

                {/* Section 2 */}
                <section className="animate-fade-in [animation-delay:200ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      2
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Intellectual Property
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    Unless otherwise agreed in writing, Levantate Labs retains all intellectual property rights to tools,
                    libraries, and frameworks used to deliver the Services. Project-specific deliverables may be assigned or
                    licensed to you as specified in the applicable agreement.
                  </p>
                </section>

                {/* Section 3 */}
                <section className="animate-fade-in [animation-delay:250ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      3
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Confidentiality
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    Both parties agree to keep confidential any non‑public information shared in the course of an engagement,
                    and to use such information only for purposes of performing their obligations under the relevant
                    agreement.
                  </p>
                </section>

                {/* Section 4 */}
                <section className="animate-fade-in [animation-delay:300ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      4
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Limitation of Liability
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    To the maximum extent permitted by law, Levantate Labs will not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
                    or indirectly, arising from your use of the Services. Our total liability for any claim will not exceed
                    the amounts paid by you for the Services giving rise to the claim.
                  </p>
                </section>

                {/* Section 5 */}
                <section className="animate-fade-in [animation-delay:350ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      5
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Third‑Party Services
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    Our Services may integrate with or rely on third‑party platforms, APIs, or infrastructure. We are not
                    responsible for the availability, security, or performance of any third‑party services, or for changes
                    made by such third parties that may impact your project.
                  </p>
                </section>

                {/* Section 6 */}
                <section className="animate-fade-in [animation-delay:400ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      6
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Governing Law
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    These Terms &amp; Conditions are governed by and construed in accordance with the laws applicable in your
                    primary engagement jurisdiction, without regard to its conflict of law provisions, unless otherwise
                    specified in a signed agreement.
                  </p>
                </section>

                {/* Section 7 */}
                <section className="animate-fade-in [animation-delay:450ms] mb-4!">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      7
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Changes to These Terms
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    We may update these Terms &amp; Conditions from time to time. When we do, we will revise the &quot;Last
                    updated&quot; date at the top of this page. Your continued use of the Services after any changes become
                    effective constitutes your acceptance of the updated terms.
                  </p>
                </section>

                {/* Section 8 - Contact */}
                <section className="animate-fade-in [animation-delay:500ms]">
                  <div className="flex items-center gap-3 mb-4!">
                    <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EAEAF2] border border-[#C3C3D6] rounded-lg flex items-center justify-center text-sm sm:text-base font-onest font-semibold text-[#38385B]">
                      8
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-onest font-semibold text-[#38385B]">
                      Contact
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base font-onest text-[#5A5A7A] leading-relaxed pl-11! sm:pl-13!">
                    If you have any questions about these Terms &amp; Conditions, please contact us at{" "}
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
