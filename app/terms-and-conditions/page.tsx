import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Levantate Labs products, services, and website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#EAEAF1] mt-48 pb-16 px-4 w-screen flex items-center justify-center ">
      <div className="w-2/3 mx-auto bg-white rounded-3xl shadow-lg border border-[#E2E4F5] p-7">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Terms &amp; Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-sm md:text-base leading-relaxed text-gray-700 mx-7">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Levantate Labs website, products, or services (collectively, the &quot;Services&quot;),
              you agree to be bound by these Terms &amp; Conditions. If you do not agree, you may not access or use our
              Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Services</h2>
            <p>
              Levantate Labs provides consulting, design, and development services including (but not limited to)
              blockchain development, AI solutions, web development, and UI/UX design. The scope of work for any
              engagement is defined in a separate proposal, statement of work, or master services agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>
              Unless otherwise agreed in writing, Levantate Labs retains all intellectual property rights to tools,
              libraries, and frameworks used to deliver the Services. Project-specific deliverables may be assigned or
              licensed to you as specified in the applicable agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential any non‑public information shared in the course of an engagement,
              and to use such information only for purposes of performing their obligations under the relevant
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Levantate Labs will not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly
              or indirectly, arising from your use of the Services. Our total liability for any claim will not exceed
              the amounts paid by you for the Services giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Third‑Party Services</h2>
            <p>
              Our Services may integrate with or rely on third‑party platforms, APIs, or infrastructure. We are not
              responsible for the availability, security, or performance of any third‑party services, or for changes
              made by such third parties that may impact your project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws applicable in your
              primary engagement jurisdiction, without regard to its conflict of law provisions, unless otherwise
              specified in a signed agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Changes to These Terms</h2>
            <p>
              We may update these Terms &amp; Conditions from time to time. When we do, we will revise the &quot;Last
              updated&quot; date at the top of this page. Your continued use of the Services after any changes become
              effective constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Contact</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please contact us at{" "}
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


