"use client";
import Link from "next/link";
import { useState } from "react";

const PROFILES = [
  { title: "Sales Engineer", detail: "Pre-sales technical support through the full sales cycle. Demos, POCs, RFP responses." },
  { title: "Technical Account Manager", detail: "Post-sale ownership of technical relationships. Renewals, expansions, escalations." },
  { title: "Solutions Consultant", detail: "Advisory pre-sales. Architecture, integration scoping, business case development." },
  { title: "Pre-Sales Specialist", detail: "Discovery, qualification, and technical validation before handoff to sales." },
  { title: "Sales Development Rep (Technical)", detail: "Outbound and inbound qualification for complex technical products." },
  { title: "Technical Sales Manager", detail: "Team leadership for technical sales functions across a region or product line." },
];

const MARKETS = ["Spain", "Sweden", "Germany", "Netherlands", "Switzerland", "Multiple markets"];

const WHY = [
  { n: "01", text: "We understand the technical side. We know the difference between a sales engineer who does demos and one who can architect solutions. We brief candidates on product complexity before they ever speak to your team." },
  { n: "02", text: "We know both sides of the table. We coach technical professionals every week. We know what makes them move and what makes them stay. That knowledge makes our shortlists more accurate." },
  { n: "03", text: "We cover the right markets. Technical sales talent is not evenly distributed across Europe. We know where the density is for each profile type and go there directly." },
];

export default function TechSalesEuropePage() {
  const [form, setForm] = useState({ name: "", company: "", role: "", market: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/hiring-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: form.role || "Technical sales profile" }),
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
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">Technical Sales Recruiting</p>
        <h1
          className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Hire technical sales<br />
          <em className="not-italic text-[#C9A84C]">talent across Europe.</em>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          We place Sales Engineers, Technical Account Managers, Solutions Consultants, and Pre-Sales specialists in Spain, Sweden, Germany, the Netherlands, and Switzerland.
        </p>
        <a href="#contact" className="inline-block bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors">
          Start a search
        </a>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* What makes this hard */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          Technical sales is one of the hardest searches to run. The profile sits at the intersection of deep product knowledge, commercial instinct, and communication skill. Most recruiters treat it as a sales search with a technical filter. That produces the wrong shortlist.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mt-6">
          We approach it differently. We start from the technical complexity of the product, the buyer persona, and the stage of the sales cycle the role owns, then build the search from there.
        </p>
      </section>

      {/* Profiles */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">Profiles we place</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {PROFILES.map((p) => (
            <div key={p.title} className="border border-white/8 px-6 py-5 hover:border-[#C9A84C]/20 transition-colors">
              <p className="text-white/85 text-sm font-medium mb-1.5">{p.title}</p>
              <p className="text-white/30 text-xs leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* Why us */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-12">Why Land in Europe</p>
        <div className="flex flex-col gap-10">
          {WHY.map((w) => (
            <div key={w.n} className="flex gap-8">
              <p className="text-[#C9A84C]/40 text-xs font-mono tracking-widest pt-1 w-8 shrink-0">{w.n}</p>
              <p className="text-white/55 text-sm leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Markets */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-white/8 p-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">Markets covered</p>
          <div className="flex flex-wrap gap-3">
            {["Spain", "Sweden", "Germany", "Netherlands", "Switzerland", "Belgium", "Luxembourg", "France"].map((m) => (
              <span key={m} className="text-xs border border-white/15 text-white/50 px-3 py-1.5 tracking-wide">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-16" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-8">Related reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-hire-multilingual-sales-professionals-in-europe", label: "How to hire multilingual sales professionals in Europe" },
            { href: "/blog/international-recruiter-for-tech-companies-in-spain", label: "International recruiter for tech companies in Spain" },
            { href: "/blog/how-to-hire-english-speaking-candidates-in-sweden", label: "How to hire English-speaking candidates in Sweden" },
            { href: "/for-companies", label: "Full recruiting service overview" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between gap-4 border border-white/8 px-5 py-4 hover:border-[#C9A84C]/30 transition-colors group"
            >
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
                <label className="text-white/30 text-xs tracking-wide">Profile type</label>
                <input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="e.g. Sales Engineer, Technical Account Manager" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Target market</label>
                <select value={form.market} onChange={(e) => setForm({ ...form, market: e.target.value })}
                  className="bg-[#0A0B0D] border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors appearance-none">
                  <option value="">Select a market</option>
                  {MARKETS.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Context (optional)</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3} className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Product complexity, language requirements, timeline..." />
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
