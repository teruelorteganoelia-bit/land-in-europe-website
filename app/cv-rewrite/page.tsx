import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "CV Rewrite for the European Job Market | Land in Europe",
  description:
    "Professional CV rewriting service for international professionals targeting jobs in Europe. Written by a working European recruiter who screens CVs daily. ATS-optimised and achievement-led.",
  keywords:
    "CV rewrite Europe, CV writing for expats, European CV format, ATS CV Europe, CV writing Spain, CV writing Portugal, CV writing Greece, international CV Europe",
  alternates: { canonical: "/cv-rewrite" },
  openGraph: {
    title: "CV Rewrite for the European Job Market | Land in Europe",
    description:
      "Your CV rewritten by a recruiter who screens applications for European companies every day.",
    url: "/cv-rewrite",
  },
};

const WHAT_YOU_GET = [
  "Full CV rewritten from scratch . Not just edited",
  "ATS-optimised so automated filters do not reject you before a human reads it",
  "Achievement-led format that European hiring managers respond to",
  "Adapted to the specific countries and roles you are targeting",
  "Editable Word version so you can update it yourself",
  "One revision round included",
];

const WHO_ITS_FOR = [
  "You are applying in Europe from outside and getting no replies",
  "Your current CV was written for a different market and is not landing",
  "You have strong experience but it is not coming across clearly",
  "You want a professional to do it properly, not just give you a template",
];

const STEPS = [
  {
    n: "01",
    title: "Tell me your situation",
    body: "Fill in the contact form with your background, the roles you are targeting, and the countries you want to work in.",
  },
  {
    n: "02",
    title: "I rewrite your CV",
    body: "As a working European recruiter, I know exactly what makes a CV stop the scroll. I rewrite it around your results, not your responsibilities.",
  },
  {
    n: "03",
    title: "You receive the final version",
    body: "You get your new CV in an editable Word format within 5 business days. One revision round is included.",
  },
];

const FAQS = [
  {
    q: "How is a European CV different from an American or British one?",
    a: "Length, format, section order, level of detail — all of it is different. In Spain, Portugal and Greece, hiring managers want a clean two-page document with a short summary at the top, achievements with numbers, and clear language skills. No objective statements, no full addresses, no 'references available upon request.' I adapt your CV to the specific countries you are targeting.",
  },
  {
    q: "What if I am applying to multiple countries?",
    a: "I account for that in the rewrite. The core document is built to work across markets, and I note where you may want to adjust specific sections depending on the country.",
  },
  {
    q: "Do you rewrite CVs for all industries?",
    a: "Yes. Finance, tech, marketing, operations, creative, sales. I have placed professionals across all of these sectors through Cross Border Talents and the same principles apply.",
  },
  {
    q: "How long does it take?",
    a: "You receive the rewritten CV within 5 business days. If you need it sooner, send me a message and I will tell you what is possible.",
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CVRewritePage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">CV Rewrite Service</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
              A CV that works in the{" "}
              <span className="text-[#C9A84C]">European market.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
              Rewritten by a recruiter who screens CVs for European companies every day. Not a template. Not AI. A real rewrite built around your results and the market you are entering.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors"
              >
                Get your CV rewritten
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

        {/* Recruiter credential bar */}
        <section className="py-10 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <p className="text-sm font-semibold text-gray-900 text-center sm:text-left">
              Written by someone who sits on both sides of the table
            </p>
            <div className="h-px flex-1 bg-gray-200 hidden sm:block" />
            <p className="text-sm text-gray-400 text-center sm:text-right max-w-md">
              I recruit multilingual professionals for European companies through Cross Border Talents. I know exactly what makes a recruiter stop on a CV, and what makes them skip it.
            </p>
          </div>
        </section>

        {/* What you get */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">What is included</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                Everything you need to start getting replies.
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
              Three steps to a CV that lands.
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
              "I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process."
            </p>
            <p className="font-semibold text-gray-900 text-sm">Valdrin Januzi</p>
            <p className="text-gray-400 text-xs mt-1">Electrical Engineer, Energy Metering and Power Systems</p>
            <p className="text-[#C9A84C] text-xs font-semibold mt-2 tracking-wide">CV rewritten · applications sent within the week</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">FAQ</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Common questions about CV rewriting.
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
              Stop sending a CV that is not landing.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Reach out with your background and the roles you are targeting. I will tell you exactly what needs to change.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20"
            >
              Get your CV rewritten
            </Link>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
