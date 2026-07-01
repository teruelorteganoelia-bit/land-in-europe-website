import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "LinkedIn Optimization for International Professionals in Europe | Land in Europe",
  description:
    "Get found by European recruiters before you even apply. LinkedIn profile optimization by a working European recruiter, including headline, summary, keywords, and visibility strategy.",
  keywords:
    "LinkedIn optimization Europe, LinkedIn profile for expats, LinkedIn international job search, LinkedIn for jobs in Spain, LinkedIn profile Europe, get found by European recruiters",
  alternates: { canonical: "/linkedin-optimization" },
  openGraph: {
    title: "LinkedIn Optimization for International Professionals | Land in Europe",
    description:
      "A LinkedIn profile that ranks higher in European recruiter searches, making the right people reach out to you.",
    url: "/linkedin-optimization",
  },
};

const WHAT_YOU_GET = [
  "Headline rewritten to rank in recruiter searches for your target roles",
  "About section that tells your story and converts profile visitors",
  "Experience section optimized with achievements, not just responsibilities",
  "Keyword strategy so European recruiters find you when they search",
  "Visibility recommendations: what to post, how often, and why",
  "Written summary of all changes so you understand what was done and why",
];

const WHO_ITS_FOR = [
  "You have been applying and getting silence because your profile is not being found",
  "Recruiters are not reaching out to you even though you have strong experience",
  "You are relocating to Europe and need your profile to reflect that",
  "You want someone who actually recruits in Europe to tell you what works",
];

const STEPS = [
  {
    n: "01",
    title: "Share your profile and goals",
    body: "Tell me your target roles, countries, and industries. I review your current profile as a recruiter would.",
  },
  {
    n: "02",
    title: "I rewrite your profile",
    body: "Headline, summary, experience, keywords. Everything is rewritten to rank higher and convert better when recruiters land on your page.",
  },
  {
    n: "03",
    title: "You implement the changes",
    body: "You receive a clear document with all the new copy ready to paste in. I also include what to do next to increase your visibility.",
  },
];

const FAQS = [
  {
    q: "How does LinkedIn work differently for the European market?",
    a: "European recruiters use LinkedIn's search filters heavily. They search by keyword, location, language, and job title. If your profile is not using the right terms, you are invisible. I know which keywords and formats European recruiters in Spain, Portugal and Greece actually search for.",
  },
  {
    q: "Will this help me even if I am not based in Europe yet?",
    a: "Yes. Many of my clients optimise their profiles before they relocate. A profile that signals your intent to work in Europe and uses European market keywords will start attracting the right attention before you arrive.",
  },
  {
    q: "How quickly will I start seeing results?",
    a: "Most clients start receiving recruiter messages within 2 to 4 weeks of implementing the changes. The speed depends on your sector and how actively you engage on the platform.",
  },
  {
    q: "Should I combine this with a CV rewrite?",
    a: "If you are job searching actively, yes. Your CV and LinkedIn should tell the same story. I offer both as part of the Full Coaching Package, or separately if you only need one.",
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LinkedInPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">LinkedIn Optimization</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
              Get found by European recruiters{" "}
              <span className="text-[#C9A84C]">before you even apply.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
              Most international professionals have a LinkedIn profile. Very few have one that ranks in European recruiter searches. There is a difference. It is fixable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors"
              >
                Optimize my LinkedIn
              </Link>
              <Link
                href="/career-coaching"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold text-sm px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
              >
                See full coaching package
              </Link>
            </div>
          </div>
        </section>

        {/* Stat bar */}
        <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "8 sec", label: "Average time a recruiter spends on a LinkedIn profile" },
              { stat: "300+", label: "Applications a recruiter reviews per open position" },
              { stat: "48 h", label: "Typical time to first recruiter message after optimization" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-serif text-3xl font-bold text-gray-900 mb-1">{s.stat}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you get + who it's for */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">What is included</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                A profile that works while you sleep.
              </h2>
              <ul className="space-y-4">
                {WHAT_YOU_GET.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Who this is for</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                This is for you if…
              </h2>
              <ul className="space-y-4">
                {WHO_ITS_FOR.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">How it works</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
              From invisible to in demand.
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {STEPS.map((s) => (
                <div key={s.n} className="bg-white rounded-2xl border border-gray-200 p-7 relative overflow-hidden">
                  <span className="font-serif font-bold text-5xl text-gray-100 absolute top-4 right-5 select-none leading-none">{s.n}</span>
                  <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Step {s.n}</p>
                  <p className="text-gray-900 font-semibold text-base mb-2">{s.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-px bg-[#C9A84C] mb-6 mx-auto" />
            <p className="text-gray-500 text-base leading-relaxed mb-6 italic">
              "She quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation."
            </p>
            <p className="font-semibold text-gray-900 text-sm">Sandrine M.</p>
            <p className="text-gray-400 text-xs mt-1">B2B Event Marketing Manager</p>
            <p className="text-[#C9A84C] text-xs font-semibold mt-2 tracking-wide">LinkedIn optimized · recruiter outreach within days</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Common questions about LinkedIn optimization.
            </h2>
            <div className="space-y-6">
              {FAQS.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-7">
                  <p className="font-semibold text-gray-900 text-sm mb-3">{f.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Ready to start?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              European recruiters are searching right now.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Let them find you. Reach out and tell me your target roles and countries.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20"
            >
              Optimize my LinkedIn
            </Link>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
