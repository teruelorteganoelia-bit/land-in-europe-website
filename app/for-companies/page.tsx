"use client";
import Link from "next/link";

const STEPS = [
  {
    n: "01",
    title: "Briefing call",
    body: "We spend 45 minutes understanding the role, the team, and the culture. Not just the job description. The real brief.",
  },
  {
    n: "02",
    title: "Targeted search",
    body: "No job boards, no spray and pray. We go directly to the right people across our European network and approach them personally.",
  },
  {
    n: "03",
    title: "Curated shortlist",
    body: "You meet 3 to 5 candidates who are genuinely interested and genuinely qualified. Your time stays where it belongs.",
  },
  {
    n: "04",
    title: "Offer and close",
    body: "We manage the process through to acceptance. We know how candidates think, so we know how to keep them.",
  },
];

const WHY = [
  {
    title: "We know both sides of the table",
    body: "We coach candidates every day. We know why they say no. We know what makes them move. Most recruiters don't have that.",
  },
  {
    title: "European markets, not just job portals",
    body: "We operate in Spain, Sweden, and across the EU. We understand how hiring works in each market and what candidates actually expect.",
  },
  {
    title: "Boutique means you are not one of fifty",
    body: "We take a limited number of mandates at a time. Your role gets real attention, not a slot in a pipeline.",
  },
];

export default function ForCompaniesPage() {
  return (
    <main className="bg-[#0A0B0D] text-white min-h-screen font-['Inter',system-ui,sans-serif]">

      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-sm font-semibold tracking-widest text-[#C9A84C] uppercase">
          Land in Europe
        </Link>
        <Link
          href="mailto:noelia@landineuropecoaching.com"
          className="text-sm border border-[#C9A84C]/40 text-[#C9A84C] px-4 py-2 rounded hover:bg-[#C9A84C]/10 transition-colors"
        >
          Get in touch
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">
          For Companies
        </p>
        <h1
          className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          The right hire<br />
          <em className="not-italic text-[#C9A84C]">changes everything.</em>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          We help startups and scale-ups across Europe hire international talent. Full process, from finding the right person to closing the offer.
        </p>
        <a
          href="mailto:noelia@landineuropecoaching.com"
          className="inline-block bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors"
        >
          Start the conversation
        </a>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          Hiring internationally is slow. Job boards attract the wrong people. Generalist agencies don't know your market. And by the time you find someone good, they've already accepted another offer.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mt-6">
          That is the gap we fill. A boutique service that moves at startup speed, with the depth of someone who understands both the European market and the international talent pool.
        </p>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-12 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-12">
          How it works
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {STEPS.map((s) => (
            <div key={s.n} className="border border-white/8 p-8 hover:border-[#C9A84C]/30 transition-colors">
              <p className="text-[#C9A84C]/50 text-xs font-mono tracking-widest mb-4">{s.n}</p>
              <h3
                className="text-2xl font-light mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      </div>

      {/* Why us */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-12">
          Why Land in Europe
        </p>
        <div className="flex flex-col gap-10">
          {WHY.map((w) => (
            <div key={w.title} className="flex flex-col md:flex-row md:gap-16">
              <h3
                className="text-xl md:text-2xl font-light text-white/90 md:w-72 shrink-0 mb-2 md:mb-0 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {w.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed md:pt-1">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border border-white/8 p-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">
            Where we operate
          </p>
          <div className="flex flex-wrap gap-3">
            {["Spain", "Sweden", "Netherlands", "Germany", "France", "Portugal", "Belgium", "Luxembourg", "Switzerland"].map((m) => (
              <span key={m} className="text-xs border border-white/15 text-white/50 px-3 py-1.5 tracking-wide">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <h2
          className="text-4xl md:text-5xl font-light mb-6"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Ready to hire differently?
        </h2>
        <p className="text-white/50 text-base mb-10 max-w-lg mx-auto">
          Tell us about the role. We will tell you honestly whether we can help. No commitment, no pitch.
        </p>
        <a
          href="mailto:noelia@landineuropecoaching.com"
          className="inline-block bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-10 py-4 hover:bg-[#E8C96A] transition-colors"
        >
          Get in touch
        </a>
        <p className="text-white/20 text-xs mt-6 tracking-wide">landineuropecoaching.com</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 px-6 py-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">Home</Link>
          <Link href="/roles" className="text-white/30 text-xs hover:text-white/60 transition-colors">Open roles</Link>
          <Link href="/privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
