import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Career Coaching for International Professionals in Europe | Land in Europe",
  description:
    "Career coaching by a working European recruiter. Strategy sessions, CV rewrites, LinkedIn optimization, and full job search support for internationals targeting Spain, Portugal and Greece.",
  keywords:
    "career coaching Europe, career coach for expats, career coaching internationals, career coach Spain, career coach Portugal, career coach Greece, job search coaching Europe, expat career coach",
  alternates: { canonical: "/career-coaching" },
  openGraph: {
    title: "Career Coaching for International Professionals in Europe | Land in Europe",
    description:
      "Career coaching by a working European recruiter. Strategy, CV, LinkedIn and full job search support for international professionals.",
    url: "/career-coaching",
  },
};

const SERVICES = [
  {
    n: "01",
    title: "Quick Diagnosis Session",
    duration: "30 minutes",
    desc: "Your profile is almost there but something is not landing. In 30 minutes we identify exactly what needs fixing and you leave with one clear next step.",
    href: "/#contact",
  },
  {
    n: "02",
    title: "Career Strategy Session",
    duration: "60 minutes",
    desc: "We audit your positioning, identify what is blocking you, and build an action plan you can start using immediately. You leave with clarity.",
    href: "/#contact",
  },
  {
    n: "03",
    title: "CV Rewrite",
    duration: "Delivered in 5 business days",
    desc: "Full CV rewrite by a recruiter who screens CVs for European companies daily. ATS-optimised, achievement-led, adapted to your target market.",
    href: "/cv-rewrite",
  },
  {
    n: "04",
    title: "LinkedIn Optimization",
    duration: "Delivered within the week",
    desc: "Headline, summary, experience, keywords: everything rewritten so European recruiters find you before you even apply.",
    href: "/linkedin-optimization",
  },
  {
    n: "05",
    title: "Full Coaching Package",
    duration: "Start to offer",
    desc: "Five themed sessions, full CV rewrite, LinkedIn optimization, your personal target company map, and WhatsApp support throughout your search. Guaranteed.",
    href: "/#full-package",
    featured: true,
  },
];

const FAQS = [
  {
    q: "What makes this different from other career coaches?",
    a: "I recruit for European companies through Cross Border Talents. I am not guessing what European recruiters want. I am one. I see both sides of the process every week, which means the advice I give is grounded in what actually happens when your application lands on a recruiter's desk.",
  },
  {
    q: "I am not in Europe yet. Can you still help me?",
    a: "Yes. Many of my clients are outside Europe and planning their move. The earlier you work on your positioning and documents, the better your chances when you start applying. Distance is not a barrier.",
  },
  {
    q: "Which countries do you specialize in?",
    a: "Spain, Portugal and Greece are the markets I recruit for and know best. That said, the coaching principles and document work apply across Europe, and I adapt my advice to wherever you are targeting.",
  },
  {
    q: "What is the guarantee on the Full Package?",
    a: "If you complete the Full Coaching Package and do not receive a European job offer, I keep working with you at no extra cost: more sessions, more coaching, more support, until you do.",
  },
  {
    q: "Do you work in Spanish?",
    a: "Yes. I work in both English and Spanish. Just reach out in whichever feels natural.",
  },
];

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CareerCoachingPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Career Coaching</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
              Career coaching by someone who{" "}
              <span className="text-[#C9A84C]">recruits for European companies.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
              I coach international professionals and I recruit multilingual talent for companies in Spain, Portugal and Greece. I know exactly what happens on the other side of your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors"
              >
                Get started
              </Link>
              <Link
                href="/#full-package"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold text-sm px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
              >
                See the Full Package
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">Services</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-14">
              Choose where to start.
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {SERVICES.map((s) => (
                <div
                  key={s.n}
                  className={`rounded-2xl border p-7 relative overflow-hidden ${
                    s.featured
                      ? "border-[#C9A84C]/50 bg-gray-900 sm:col-span-2"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <span className={`font-serif font-bold text-5xl absolute top-4 right-5 select-none leading-none ${s.featured ? "text-white/10" : "text-gray-100"}`}>{s.n}</span>
                  <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.18em] mb-1">{s.duration}</p>
                  <p className={`font-semibold text-lg mb-3 ${s.featured ? "text-white" : "text-gray-900"}`}>{s.title}</p>
                  <p className={`text-sm leading-relaxed mb-5 ${s.featured ? "text-white/50" : "text-gray-400"}`}>{s.desc}</p>
                  <Link
                    href={s.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${
                      s.featured
                        ? "text-[#C9A84C] hover:text-[#e8c96d]"
                        : "text-gray-900 hover:text-[#C9A84C]"
                    } transition-colors`}
                  >
                    {s.featured ? "See full package details" : "Get started"} <Arrow />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credential section */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Why work with me</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                I know what European recruiters actually read.
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Through Cross Border Talents I place multilingual professionals in companies across Barcelona, Lisbon and Athens. I screen CVs, I shortlist candidates, and I know exactly what makes a hiring manager stop and pay attention.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                That recruiter perspective is what I bring to every coaching session. Not generic advice. Insider knowledge from someone actively working in these markets.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { v: "50+", l: "Professionals coached" },
                  { v: "15+", l: "Nationalities" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif text-3xl font-bold text-gray-900">{s.v}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Working recruiter in Spain, Portugal and Greece",
                "Coached professionals from 15+ nationalities",
                "Works with professionals from 15+ nationalities",
                "Based in Stockholm, operating across European markets",
                "Works in English and Spanish",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                  <svg className="w-4 h-4 flex-shrink-0 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-px bg-[#C9A84C] mb-6 mx-auto" />
            <p className="text-gray-500 text-base leading-relaxed mb-6 italic">
              "A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months."
            </p>
            <p className="font-semibold text-gray-900 text-sm">Bartosz W.</p>
            <p className="text-gray-400 text-xs mt-1">Senior Finance and Strategic Planning Manager</p>
            <p className="text-[#C9A84C] text-xs font-semibold mt-2 tracking-wide">Strategy session · clear action plan in 60 minutes</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Common questions.
            </h2>
            <div className="space-y-6">
              {FAQS.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
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
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Ready?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Tell me your situation.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              I read every message and I answer every one. Reach out and let me know where you are in your search.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20"
            >
              Get started
            </Link>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
