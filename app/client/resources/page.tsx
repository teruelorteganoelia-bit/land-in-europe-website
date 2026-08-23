import Link from "next/link";

const resources = [
  {
    href: "/client/resources/cv-checklist",
    tag: "Essential",
    title: "CV Checklist for Europe",
    desc: "What European recruiters actually look for. 27 points that determine whether your CV gets read or skipped.",
    time: "10 min read",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    href: "/client/resources/linkedin-checklist",
    tag: "High impact",
    title: "LinkedIn Optimisation Guide",
    desc: "How LinkedIn Recruiter actually searches. Every field that affects whether you appear, and what to write in each one.",
    time: "15 min read",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "/client/resources/company-research",
    tag: "Strategic",
    title: "Company Research Framework",
    desc: "How to research a company before applying or interviewing. The questions to answer, where to find the answers, and how to use them.",
    time: "8 min read",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    href: "/client/resources/salary-guide",
    tag: "Money",
    title: "Salary Negotiation in Europe",
    desc: "When to bring up salary, what to say, what not to say, and how to negotiate without losing the offer. Country-specific notes included.",
    time: "12 min read",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#C9A84C]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <header className="sticky top-0 z-20 border-b border-white/[0.05] bg-[#0A0B0D]/90 backdrop-blur-2xl">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/client/dashboard" className="text-white/20 hover:text-white/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Resources</span>
          </div>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-5 h-5 rounded-full border border-[#C9A84C]/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            </div>
          </Link>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14 relative z-10">
        <div className="mb-12">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Client resources</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Everything you need<br />to move faster.
          </h1>
          <p className="text-white/25 text-sm leading-relaxed max-w-md">
            Guides written from the recruiter side. Not generic advice. What actually determines the outcome at each stage of your search.
          </p>
        </div>

        <div className="space-y-3">
          {resources.map(r => (
            <Link key={r.href} href={r.href}
              className="group flex items-start gap-5 rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-5 hover:border-[#C9A84C]/20 hover:bg-[#C9A84C]/4 transition-all">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 text-white/30 group-hover:text-[#C9A84C]/70 group-hover:border-[#C9A84C]/20 transition-all">
                {r.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[#C9A84C]/60 text-[9px] font-bold uppercase tracking-[0.25em]">{r.tag}</span>
                  <span className="text-white/10 text-[9px]">·</span>
                  <span className="text-white/20 text-[10px]">{r.time}</span>
                </div>
                <p className="text-white font-bold text-base mb-1.5 group-hover:text-white transition-colors">{r.title}</p>
                <p className="text-white/30 text-xs leading-relaxed">{r.desc}</p>
              </div>
              <div className="text-white/15 group-hover:text-[#C9A84C]/50 transition-colors flex-shrink-0 mt-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-white/6 px-6 py-5 text-center">
          <p className="text-white/20 text-xs leading-relaxed">More guides added regularly. If there is something specific you need, ask Noelia on WhatsApp.</p>
        </div>
      </div>
    </main>
  );
}
