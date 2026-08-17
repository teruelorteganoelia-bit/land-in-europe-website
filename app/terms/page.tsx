"use client";
import PageNav from "../components/PageNav";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <PageNav />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Terms & Conditions</p>
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-3 leading-tight">
            How this works
          </h1>
          <p className="text-gray-400 text-sm mb-12">Last updated: August 2026</p>

          <div className="space-y-10 text-gray-600 text-base leading-relaxed">

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Who this is</h2>
              <p>Land in Europe is a career coaching and recruiting service run by Noelia Teruel Ortega, based in Stockholm, Sweden. When you book a session or purchase a service, you are working directly with me.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Payments</h2>
              <p>All payments are final. Once a session is booked or a service is purchased, I do not offer refunds. This applies to individual sessions, CV rewrites, LinkedIn optimisation, and the full coaching package.</p>
              <p className="mt-3">The reason is simple: as soon as you book, I set aside that time and start preparing. That cannot be undone. If something genuinely unexpected comes up on your end, reach out and we can look at rescheduling or carrying the credit forward. That is at my discretion, not an automatic right.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Cancellations and rescheduling</h2>
              <p>If you need to reschedule a session, I ask for at least 24 hours notice. Sessions cancelled with less than 24 hours notice are considered used. Sessions cancelled with more than 24 hours notice can be rescheduled once.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">The Full Package guarantee</h2>
              <p>The guarantee on the full coaching package means I keep working with you at no extra cost until you receive a European job offer. It is not a money-back guarantee. It means more sessions, more support, more time, for as long as it takes.</p>
              <p className="mt-3">The guarantee applies when you have completed all five sessions, implemented the agreed changes to your CV and LinkedIn, and are actively applying. It does not apply if sessions are left unused or if the agreed work has not been done.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Results</h2>
              <p>Coaching improves your positioning, your documents, and your strategy. I cannot guarantee a specific outcome or timeline because hiring decisions are made by companies, not by me. What I can guarantee is that the work we do together is honest, specific, and built around your actual situation.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Your materials</h2>
              <p>Everything I produce for you, your CV, your LinkedIn rewrite, your action plan, is yours to use. It is not yours to resell, share publicly, or pass off as someone else's work. The frameworks, templates, and methods I use remain mine.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Confidentiality</h2>
              <p>Everything you share with me stays between us. I do not share your information with third parties. If I ever use a client story as an example (in a blog post or on LinkedIn), it is anonymised and only with the person's knowledge.</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-900 text-lg mb-3">Questions</h2>
              <p>If something is unclear or you have a specific situation not covered here, just message me. I would rather have a conversation than leave you guessing.</p>
              <p className="mt-2">
                <a href="mailto:noelia@landineuropecoaching.com" className="text-[#C9A84C] font-medium hover:underline">noelia@landineuropecoaching.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
