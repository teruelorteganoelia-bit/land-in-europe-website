"use client";
import Link from "next/link";
import PageNav from "../components/PageNav";

// ─── Data ──────────────────────────────────────────────────────────────────────

const CANDIDATE_SERVICES = [
  {
    id: "cv-rewrite",
    tag: "Most requested",
    title: "CV Rewrite",
    body: "Your CV rebuilt from scratch for the European market. Clean single-column format, achievement-led bullet points, professional summary written for your target role, and language levels that pass ATS filters. Delivered as a Word file you can edit.",
    includes: [
      "Full CV rewrite in European format",
      "Professional summary tailored to your target role",
      "Achievement-led bullet points with results",
      "Language and right-to-work section",
      "ATS-optimised structure",
    ],
    cta: "Get in touch",
    href: "/#contact",
  },
  {
    id: "linkedin",
    tag: "High impact",
    title: "LinkedIn Optimisation",
    body: "Your LinkedIn rebuilt so recruiters actually find you. Headline, About section, keywords, and open-to-work settings — all calibrated for how LinkedIn Recruiter searches work in 2026.",
    includes: [
      "Headline rewritten for recruiter search visibility",
      "About section written in your voice",
      "Keyword strategy for your target market",
      "Open-to-work settings explained",
      "Skills and endorsement audit",
    ],
    cta: "Get in touch",
    href: "/#contact",
  },
  {
    id: "session",
    tag: "Good starting point",
    title: "1:1 Coaching Session",
    body: "One focused hour. You bring your situation — where you are, what is not working, what you want — and we leave with a clear next step. Good if you are close but stuck, or if you want an honest read on what is blocking you.",
    includes: [
      "CV or LinkedIn review",
      "Identify exactly what is blocking you",
      "One clear action plan",
      "Written summary after the session",
    ],
    cta: "Book a session",
    href: "/#contact",
  },
  {
    id: "full-package",
    tag: "Best results",
    title: "Full Coaching Package",
    featured: true,
    body: "Everything. Five sessions, a full CV rewrite, LinkedIn optimisation, a personalised company map, and WhatsApp access throughout your search. And if you do not get an offer, I keep working with you until you do.",
    includes: [
      "5 themed coaching sessions",
      "Full CV rewrite",
      "LinkedIn optimisation",
      "Personalised target company map",
      "WhatsApp support throughout your search",
      "Offer guarantee — I keep working until you get one",
    ],
    cta: "Apply for the package",
    href: "/#contact",
  },
];

const COMPANY_SERVICES = [
  {
    id: "recruiting",
    title: "Retained Recruiting",
    body: "I work with a small number of companies on a retained basis. Each search gets my full focus — no parallel mandates, no CV spam. I place senior commercial profiles across Europe: Technical Sales Managers, BDMs, Regional Sales Directors, and specialist commercial roles in deep tech, semiconductors, water treatment, and financial services.",
    includes: [
      "Retained model — dedicated search, not contingency",
      "Senior commercial profiles across Europe",
      "Multilingual candidates (French, German, English, Swedish)",
      "Deep tech, semiconductors, water treatment, financial services",
      "Full process from briefing to offer",
    ],
    cta: "Start a conversation",
    href: "/#contact",
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function ServiceCard({ service, dark = false }: { service: typeof CANDIDATE_SERVICES[0] & { featured?: boolean }, dark?: boolean }) {
  const featured = service.featured;
  return (
    <div className={`relative rounded-2xl p-8 flex flex-col h-full transition-all
      ${featured
        ? "bg-[#C9A84C] text-[#1C1F26]"
        : dark
          ? "bg-white/5 border border-white/10 text-white"
          : "bg-white border border-gray-200 text-[#1C1F26]"
      }`}>

      {service.tag && (
        <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full w-fit
          ${featured ? "bg-[#1C1F26] text-[#C9A84C]" : dark ? "bg-white/10 text-[#C9A84C]" : "bg-[#F7F4EF] text-[#C9A84C]"}`}>
          {service.tag}
        </span>
      )}

      <h3 className={`font-serif text-2xl font-bold mb-3 ${featured ? "text-[#1C1F26]" : ""}`}>
        {service.title}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 ${featured ? "text-[#1C1F26]/80" : dark ? "text-gray-400" : "text-gray-500"}`}>
        {service.body}
      </p>

      <ul className="space-y-2 mb-8 flex-1">
        {service.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg className={`mt-0.5 flex-shrink-0 ${featured ? "text-[#1C1F26]" : "text-[#C9A84C]"}`}
              width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={featured ? "text-[#1C1F26]/90" : dark ? "text-gray-300" : "text-gray-600"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className={`inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3.5 rounded-full transition-colors
          ${featured
            ? "bg-[#1C1F26] text-white hover:bg-black"
            : dark
              ? "bg-[#C9A84C] text-[#1C1F26] hover:bg-[#b8953f]"
              : "bg-[#1C1F26] text-white hover:bg-[#C9A84C]"
          }`}>
        {service.cta}
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <PageNav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#1C1F26]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Services</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Pick where you need<br/>
            <span className="text-[#C9A84C] italic font-normal">help most</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
            Everything is built around your specific situation. Not a standard programme. Not a template. Your market, your profile, your next move.
          </p>
        </div>
      </section>

      {/* Candidates */}
      <section className="py-20 px-6 bg-[#0D0F12]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">For candidates</p>
            <h2 className="font-serif text-3xl font-bold text-white">
              Get hired in Europe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {CANDIDATE_SERVICES.map(s => (
              <ServiceCard key={s.id} service={s} dark />
            ))}
          </div>

          {/* Testimonial under Full Coaching Package */}
          <div className="mt-6 xl:ml-auto xl:w-1/4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A84C">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-4">
                "I was honestly impressed. After working with Noelia I started getting way more replies on LinkedIn and actual interview invitations. Things that just weren't happening before."
              </p>
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Joe L. — Full Coaching Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook */}
      <section className="py-20 px-6 bg-[#1C1F26] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 rounded-2xl bg-white/5 border border-white/10 p-10">
            <div className="flex-shrink-0 w-40 sm:w-48">
              <img
                src="/ThumbnailBook.jpeg"
                alt="How to Get Hired in Europe in the Age of AI"
                className="w-full rounded-xl shadow-2xl shadow-black/50"
              />
            </div>
            <div className="text-center lg:text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-white/10 text-[#C9A84C]">
                New guide — €27
              </span>
              <h2 className="font-serif text-3xl font-bold text-white mb-3">
                How to Get Hired in Europe<br/>
                <span className="text-[#C9A84C] italic font-normal">In the Age of AI</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg">
                10 chapters on how AI changed European hiring, what recruiters actually see when your application lands, and exactly what to do differently. Plus a 30-day job search plan and a CV audit checklist.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                <a
                  href="https://teruelnoelia.gumroad.com/l/hired-in-europe-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1C1F26] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#b8953f] transition-colors"
                >
                  Get the guide — €27
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="text-gray-500 text-sm">Instant download · PDF · 27 pages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 px-6 bg-[#0D0F12] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">For companies</p>
            <h2 className="font-serif text-3xl font-bold text-white">
              Find the right person, once
            </h2>
          </div>
          <div className="max-w-2xl">
            {COMPANY_SERVICES.map(s => (
              <ServiceCard key={s.id} service={s} dark />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1C1F26] border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Send me a message. Tell me where you are and what you are trying to do. I will tell you honestly what makes sense.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1C1F26] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#b8953f] transition-colors"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
