"use client";
import Link from "next/link";
import { useState } from "react";

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
    body: "We operate across Spain, Sweden, Germany, the Netherlands, Switzerland, Luxembourg, Belgium, and France. We understand how hiring works in each market and what candidates actually expect.",
  },
  {
    title: "Boutique means you are not one of fifty",
    body: "We take a limited number of mandates at a time. Your role gets real attention, not a slot in a pipeline.",
  },
];

const PROFILES = [
  { label: "Business Development Managers", markets: "Germany, Switzerland, France, Benelux" },
  { label: "Technical Sales Managers", markets: "Spain, Sweden, Switzerland" },
  { label: "Account Executives", markets: "Spain, Netherlands, Sweden" },
  { label: "Country Managers", markets: "Spain, Sweden, Germany" },
  { label: "Sales Engineers", markets: "Germany, Netherlands, Switzerland" },
  { label: "Marketing Managers (multilingual)", markets: "Spain, Netherlands, Belgium" },
  { label: "Customer Success Managers", markets: "Spain, Sweden, Netherlands" },
  { label: "Finance and Operations profiles", markets: "Luxembourg, Switzerland, Sweden" },
];

const MARKETS = ["Spain", "Sweden", "Germany", "Netherlands", "Switzerland", "Luxembourg", "Belgium", "France", "Multiple markets"];

export default function ForCompaniesPage() {
  const [form, setForm] = useState({ name: "", company: "", role: "", market: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/hiring-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

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

      {/* Profiles we place */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-20" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">
          Profiles we place
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROFILES.map((p) => (
            <div key={p.label} className="border border-white/8 px-6 py-5 hover:border-[#C9A84C]/20 transition-colors">
              <p className="text-white/85 text-sm font-medium mb-1">{p.label}</p>
              <p className="text-white/30 text-xs tracking-wide">{p.markets}</p>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-sm mt-8 leading-relaxed max-w-2xl">
          Primarily commercial and technical profiles for technology companies, industrial B2B businesses, and financial services firms operating in Europe. Most of our mandates require candidates with multilingual capabilities and cross-border experience.
        </p>
      </section>

      {/* FAQ for SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-20" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-12">
          Common questions
        </p>
        <div className="flex flex-col gap-10">
          {[
            {
              q: "How long does it take to fill a role?",
              a: "For most commercial and technical profiles, we deliver a shortlist within two to three weeks of the briefing call. The full process from briefing to accepted offer typically takes four to eight weeks depending on seniority and market. We move faster than most agencies because we work on a limited number of mandates at a time.",
            },
            {
              q: "Which markets do you recruit in?",
              a: "We recruit across Spain, Sweden, Germany, the Netherlands, Switzerland, Luxembourg, Belgium, and France. We understand how hiring works in each of these markets: local salary expectations, candidate behaviour, language requirements, and what makes professionals actually move. We do not operate as a generalist agency across every country in Europe.",
            },
            {
              q: "What types of roles do you fill?",
              a: "Primarily commercial, technical sales, and operations profiles: Business Development Managers, Technical Sales Managers, Account Executives, Country Managers, Sales Engineers, and Customer Success Managers. Most of our mandates require multilingual candidates with European market experience.",
            },
            {
              q: "Do you work with companies outside Spain and Sweden?",
              a: "Yes. We work with companies based anywhere who need to hire in European markets. A German company hiring a Country Manager for Spain, a Dutch scale-up building a sales team in Stockholm, a Swiss industrial firm looking for a BDM in France. If the role is in one of our markets, we can help regardless of where the company is headquartered.",
            },
            {
              q: "How is this different from using a large recruitment agency?",
              a: "A boutique service means your mandate gets personal attention. You work directly with the recruiter running your search, not an account manager who passes the brief down. We take a limited number of mandates at a time, which means we are actively working your role rather than adding it to a large pipeline. We also have a direct connection to international candidates through our coaching practice, which gives us access to profiles that are not visible on job boards.",
            },
          ].map((item) => (
            <div key={item.q}>
              <h3
                className="text-lg font-light text-white/85 mb-3 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {item.q}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section className="max-w-4xl mx-auto px-6 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-20" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">Start a search</p>
            <h2
              className="text-4xl md:text-5xl font-light mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Tell us about the role.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              We will come back to you within 24 hours with an honest view of whether we can help and what the search would look like. No commitment, no pitch.
            </p>
          </div>

          {status === "sent" ? (
            <div className="border border-[#C9A84C]/30 p-10 flex flex-col gap-3">
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">Received</p>
              <p className="text-white/80 text-sm leading-relaxed">Thank you. I will come back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/30 text-xs tracking-wide">Your name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/30 text-xs tracking-wide">Company</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                    placeholder="Company name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Role to fill</label>
                <input
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="e.g. Business Development Manager"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Target market</label>
                <select
                  value={form.market}
                  onChange={(e) => setForm({ ...form, market: e.target.value })}
                  className="bg-[#0A0B0D] border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none"
                >
                  <option value="">Select a market</option>
                  {MARKETS.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Anything else (optional)</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Timeline, seniority level, language requirements..."
                />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-xs">Something went wrong. Please email noelia@landineuropecoaching.com directly.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors disabled:opacity-50 mt-2"
              >
                {status === "sending" ? "Sending..." : "Send inquiry"}
              </button>
            </form>
          )}
        </div>
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
