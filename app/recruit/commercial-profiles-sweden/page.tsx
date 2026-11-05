"use client";
import Link from "next/link";
import { useState } from "react";

const PROFILES = [
  { title: "Business Development Manager", detail: "New market entry, enterprise pipeline building, strategic partnerships. English strong base; Swedish an advantage." },
  { title: "Account Executive", detail: "Mid-market and enterprise closing. SaaS, fintech, and B2B services. High English proficiency standard across the market." },
  { title: "Country Manager", detail: "P&L ownership for Sweden or the Nordics. Requires deep market knowledge and existing network." },
  { title: "Sales Manager", detail: "Team leadership for SDR, AE, or field sales teams. Stockholm-based with regional scope." },
  { title: "Customer Success Manager", detail: "Retention, expansion, and strategic account health. Strong English; Swedish appreciated." },
  { title: "Sales Development Representative", detail: "Outbound prospecting and pipeline qualification. High English base; Swedish for local market coverage." },
];

const WHAT_WORKS = [
  "Candidates who have sold into Northern European markets before. The pace and communication style transfer well.",
  "English fluency at native or near-native level. Swedish is an advantage but rarely a hard requirement for international companies.",
  "Experience with flat organisational structures and consensus-driven decisions.",
  "Track record in the right sector. Swedish companies hire with more precision than most markets.",
  "Stability. Two to three years per role is the minimum most Swedish employers expect.",
];

export default function CommercialProfilesSwedenPage() {
  const [form, setForm] = useState({ name: "", company: "", role: "", market: "Sweden", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/hiring-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: form.role || "Commercial profile Sweden" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-[#0A0B0D] text-white min-h-screen font-['Inter',system-ui,sans-serif]">

      <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <Link href="/" className="text-sm font-semibold tracking-widest text-[#C9A84C] uppercase">
          Land in Europe
        </Link>
        <Link href="/for-companies" className="text-sm text-white/40 hover:text-white/70 transition-colors">
          For companies
        </Link>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">Commercial Recruiting Sweden</p>
        <h1
          className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Hire commercial talent<br />
          <em className="not-italic text-[#C9A84C]">in Sweden.</em>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          We place BDMs, Account Executives, Country Managers, and Sales Managers in Stockholm and across the Swedish market. Based in Stockholm ourselves, we know what works here.
        </p>
        <a href="#contact" className="inline-block bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors">
          Start a search
        </a>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* Local advantage */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          Recruiting in Sweden from outside Sweden does not work. The talent pool is specific, the culture has real quirks that affect who performs and who does not, and the best candidates are not responding to generic outreach from agencies that have never placed a role here.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mt-6">
          We are based in Stockholm. We recruit here every week and we coach candidates who are actively looking to enter the Swedish market. That gives us a view of the available pool that a remote search simply cannot replicate.
        </p>
      </section>

      {/* Profiles */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">Profiles we place</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROFILES.map((p) => (
            <div key={p.title} className="border border-white/8 px-6 py-5 hover:border-[#C9A84C]/20 transition-colors">
              <p className="text-white/85 text-sm font-medium mb-1.5">{p.title}</p>
              <p className="text-white/35 text-xs leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* What works */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">What actually works in Swedish commercial hiring</p>
        <ul className="flex flex-col gap-4">
          {WHAT_WORKS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#C9A84C]/60" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-white/55 text-sm leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Swedish culture note */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-[#C9A84C]/20 p-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-4">On Swedish work culture</p>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            Swedish commercial culture rewards patience, collaboration, and long-term relationship building. Candidates who come from high-pressure, short-cycle sales environments sometimes struggle with the pace of Swedish decision-making. We brief every candidate we present on what to expect, which means your shortlist arrives culturally prepared, not just technically qualified.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-16" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-8">Related reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-hire-english-speaking-candidates-in-sweden", label: "How to hire English-speaking candidates in Sweden" },
            { href: "/blog/how-to-hire-multilingual-sales-professionals-in-europe", label: "How to hire multilingual sales professionals in Europe" },
            { href: "/recruit/tech-sales-europe", label: "Technical sales recruiting across Europe" },
            { href: "/for-companies", label: "Full recruiting service overview" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="flex items-center justify-between gap-4 border border-white/8 px-5 py-4 hover:border-[#C9A84C]/30 transition-colors group">
              <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors leading-snug">{l.label}</span>
              <svg className="w-4 h-4 shrink-0 text-white/20 group-hover:text-[#C9A84C] transition-colors" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-32">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-20" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">Start a search</p>
            <h2 className="text-4xl font-light mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Tell us about the role.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              We will come back to you within 24 hours with an honest view of whether we can help and what the search would look like.
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
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                    placeholder="Name" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-white/30 text-xs tracking-wide">Company</label>
                  <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                    placeholder="Company name" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Role to fill</label>
                <input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="e.g. BDM, Stockholm, English-speaking" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Context (optional)</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3} className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Sector, language requirements, seniority, timeline..." />
              </div>
              {status === "error" && <p className="text-red-400 text-xs">Something went wrong. Email noelia@landineuropecoaching.com directly.</p>}
              <button type="submit" disabled={status === "sending"}
                className="bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors disabled:opacity-50 mt-2">
                {status === "sending" ? "Sending..." : "Send inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-white/8 px-6 py-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs">© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/for-companies" className="text-white/30 text-xs hover:text-white/60 transition-colors">For companies</Link>
          <Link href="/blog" className="text-white/30 text-xs hover:text-white/60 transition-colors">Blog</Link>
          <Link href="/privacidad" className="text-white/30 text-xs hover:text-white/60 transition-colors">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}
