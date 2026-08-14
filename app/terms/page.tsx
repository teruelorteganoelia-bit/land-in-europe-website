"use client";
import Link from "next/link";
import PageNav from "../components/PageNav";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <PageNav />

      <section className="pt-32 pb-16 px-6 bg-[#1C1F26]">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Legal</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-400">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray prose-lg">

          <div className="space-y-10 text-gray-600 text-base leading-relaxed">

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">1. Who we are</h2>
              <p>
                Land in Europe is a career coaching and international recruiting service operated by Noelia Teruel Ortega, based in Stockholm, Sweden. By using this website or purchasing any service, you agree to these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">2. Services offered</h2>
              <p>Land in Europe provides the following services:</p>
              <ul className="list-disc pl-5 mt-3 space-y-1">
                <li>CV rewrite for the European job market</li>
                <li>LinkedIn profile optimisation</li>
                <li>1:1 career coaching sessions</li>
                <li>Full coaching package (multiple sessions with ongoing support)</li>
                <li>Retained recruiting services for companies</li>
                <li>Digital guides and ebooks (sold via Gumroad)</li>
              </ul>
              <p className="mt-3">
                All services are delivered remotely via video call, email, or WhatsApp. Specific deliverables and timelines are agreed upon at the start of each engagement.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">3. Payments and booking</h2>
              <p>
                Coaching and CV services are booked directly via the contact form on this website or through WhatsApp. Payment details are communicated after initial contact. Digital products (ebooks) are sold through Gumroad and subject to Gumroad's own terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">4. Cancellation and refund policy</h2>
              <p>
                <strong className="text-[#1C1F26]">Coaching sessions:</strong> You may cancel or reschedule a session up to 24 hours before the scheduled time at no charge. Cancellations within 24 hours are non-refundable.
              </p>
              <p className="mt-3">
                <strong className="text-[#1C1F26]">Full coaching package:</strong> If you have not started any sessions, you are entitled to a full refund within 7 days of purchase. Once sessions have begun, refunds are not available for completed sessions. Unused sessions may be refunded on a pro-rata basis at our discretion.
              </p>
              <p className="mt-3">
                <strong className="text-[#1C1F26]">CV rewrite:</strong> Refunds are not available once the rewritten CV has been delivered. If you are not satisfied with the result, we offer one round of revisions at no additional cost.
              </p>
              <p className="mt-3">
                <strong className="text-[#1C1F26]">Digital products:</strong> Due to the nature of digital downloads, refunds are not available once the file has been accessed. If you experience a technical issue, contact us and we will resolve it.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">5. Offer guarantee</h2>
              <p>
                The Full Coaching Package includes an offer guarantee: if you do not receive a job offer after completing the package, we will continue working with you at no additional cost. This guarantee applies when you have actively applied to companies during the coaching period and followed the agreed strategy. It does not apply if you have not engaged with the process or have chosen not to apply.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">6. Confidentiality</h2>
              <p>
                All information shared during coaching sessions is treated as strictly confidential. We do not share your personal details, CV, or any information about your job search with third parties without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">7. Limitation of liability</h2>
              <p>
                Land in Europe provides career coaching and support services. We do not guarantee employment outcomes. Results depend on individual effort, market conditions, and other factors outside our control. Our liability is limited to the amount paid for the specific service in question.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">8. Intellectual property</h2>
              <p>
                All content on this website, including guides, frameworks, and written materials, is the intellectual property of Land in Europe. You may not reproduce, distribute, or resell any content without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">9. Governing law</h2>
              <p>
                These terms are governed by the laws of Sweden. Any disputes will be resolved under Swedish jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-bold text-[#1C1F26] mb-3">10. Contact</h2>
              <p>
                If you have any questions about these terms, you can reach us via the{" "}
                <Link href="/#contact" className="text-[#C9A84C] underline hover:text-[#b8953f]">contact form</Link>{" "}
                on this website.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer links */}
      <section className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto flex gap-6 text-sm text-gray-400">
          <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-gray-900 transition-colors">Back to home</Link>
        </div>
      </section>
    </main>
  );
}
