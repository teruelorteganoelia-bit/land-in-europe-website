"use client";
import Link from "next/link";
import { useState } from "react";

const REGIONS = [
  { name: "Zurich and German-speaking Switzerland", detail: "The largest commercial hub. Financial services, life sciences, tech, and industrial. German and English required." },
  { name: "Geneva and Romandy", detail: "French-speaking Switzerland. International organisations, luxury, private banking, and trading. French and English required." },
  { name: "Basel", detail: "Pharma and life sciences concentration. Proximity to Germany and France makes cross-border profiles common." },
  { name: "Cross-border arrangements", detail: "Germany, France, and Austria-based candidates covering Switzerland. Common for companies where Swiss salary budgets are limited." },
];

const WHAT_WE_LOOK_FOR = [
  "Track record of closing in the Swiss market specifically, not just DACH in general",
  "German fluency at business level minimum. Native or near-native for most roles in German-speaking Switzerland",
  "French fluency for Romandy and international organisation roles",
  "Sector depth in the client's vertical. Swiss companies hire for specific industries",
  "Stability in past roles. Swiss employers scrutinise tenure more than most",
  "Network in the target market. Referenceability from Swiss clients or partners",
];

export default function BdmSwitzerlandPage() {
  const [form, setForm] = useState({ name: "", company: "", role: "", market: "Switzerland", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/hiring-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role: form.role || "BDM Switzerland" }),
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
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">BDM Recruiting Switzerland</p>
        <h1
          className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Hire a BDM<br />
          <em className="not-italic text-[#C9A84C]">who knows Switzerland.</em>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
          We place Business Development Managers across Zurich, Geneva, Basel and the broader Swiss market. German, French, and multilingual profiles for technology, industrial, financial services, and professional services companies.
        </p>
        <a href="#contact" className="inline-block bg-[#C9A84C] text-[#0A0B0D] text-sm font-semibold tracking-widest uppercase px-8 py-4 hover:bg-[#E8C96A] transition-colors">
          Start a search
        </a>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* Why Switzerland is hard */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-3xl">
          Switzerland has the highest commercial salaries in Europe, the most demanding language requirements, and a talent pool that does not advertise itself. The best BDMs in Zurich and Geneva are rarely on job boards. They are employed, comfortable, and not looking. Getting to them requires direct outreach into the right networks.
        </p>
        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mt-6">
          That is what we do. Direct sourcing, specific networks, and an approach calibrated to the Swiss market.
        </p>
      </section>

      {/* Regions */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">Regions we cover</p>
        <div className="flex flex-col gap-4">
          {REGIONS.map((r) => (
            <div key={r.name} className="border border-white/8 px-6 py-5 hover:border-[#C9A84C]/20 transition-colors">
              <p className="text-white/85 text-sm font-medium mb-1.5">{r.name}</p>
              <p className="text-white/35 text-xs leading-relaxed">{r.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" /></div>

      {/* What we look for */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-10">What we look for in a Swiss BDM</p>
        <ul className="flex flex-col gap-4">
          {WHAT_WE_LOOK_FOR.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#C9A84C]/60" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-white/55 text-sm leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Salary note */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="border border-[#C9A84C]/20 p-8">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-4">Salary context</p>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            A mid-seniority BDM in Zurich or Geneva typically earns between CHF 120,000 and CHF 160,000 total compensation including bonus. Senior profiles and those with cross-regional responsibility earn more. If the budget is calibrated to German or Dutch market rates, we can discuss whether a cross-border arrangement based in Germany, France, or Austria makes sense for your situation.
          </p>
        </div>
      </section>

      {/* Related reading */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent mb-16" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-8">Related reading</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: "/blog/how-to-hire-a-bdm-in-switzerland", label: "How to hire a BDM in Switzerland" },
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
                <label className="text-white/30 text-xs tracking-wide">Role and location</label>
                <input required value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20"
                  placeholder="e.g. Senior BDM, Zurich, German-speaking" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-white/30 text-xs tracking-wide">Context (optional)</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3} className="bg-transparent border border-white/15 text-white text-sm px-4 py-3 outline-none focus:border-[#C9A84C]/50 transition-colors placeholder:text-white/20 resize-none"
                  placeholder="Sector, language requirements, budget range, timeline..." />
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
