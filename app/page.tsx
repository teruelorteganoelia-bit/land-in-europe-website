"use client";
import { useState, useEffect } from "react";

// ── Palette ───────────────────────────────────────────────────────────────────
// cream: #FAFAF7  |  green: #1B3A2F  |  gold: #C9A84C  |  warm-card: #F4F1EB

// ── Data ──────────────────────────────────────────────────────────────────────
const TICKER_ITEMS = [
  "CV rewritten → 3 interview requests in 10 days",
  "Relocated from Brazil → Hired in Barcelona",
  "6 months of silence → First offer in 3 weeks",
  "Career pivot → New role in the Netherlands",
  "LinkedIn optimized → Recruiter reached out in 48 hours",
  "From stuck to hired → Finance Manager role in Lisbon",
];

const SERVICES = [
  {
    number: "01",
    title: "Career Strategy Session",
    tagline: "Get unstuck in 60 minutes",
    description: "We audit your positioning, identify exactly what is blocking you, and build a concrete action plan you can start using immediately. No fluff.",
    includes: ["CV and LinkedIn audit", "Target market strategy", "Personalized action plan", "Written follow-up summary"],
  },
  {
    number: "02",
    title: "CV Rewrite",
    tagline: "A CV that actually gets replies",
    description: "Rewritten for the European market by someone who screens CVs every day. ATS-optimized, achievement-focused, adapted to what you are targeting.",
    includes: ["Full rewrite from scratch", "ATS optimization", "Achievement-led format", "Editable Word version", "One revision round included"],
  },
  {
    number: "03",
    title: "LinkedIn Optimization",
    tagline: "Get found before you apply",
    description: "A profile that tells the right story, ranks higher in recruiter searches, and makes the right people stop and read.",
    includes: ["Headline and summary rewrite", "Experience section optimization", "Keyword strategy", "Visibility recommendations"],
  },
  {
    number: "04",
    title: "Full Coaching Package",
    tagline: "Complete support, start to offer",
    description: "Two weeks where we work on everything together. Your positioning, your documents, your targeting, your outreach. For people who want to move fast and do this properly.",
    includes: ["Career strategy session", "Full CV rewrite", "LinkedIn optimization", "Target company research", "Application and outreach strategy", "WhatsApp support throughout"],
    featured: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Valdrin Januzi",
    role: "International Professional",
    quote: "I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process.",
    featured: true,
  },
  {
    name: "Bartosz W.",
    role: "Senior Finance and Strategic Planning Manager",
    quote: "A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months and a clear path forward.",
  },
  {
    name: "Sandrine M.",
    role: "B2B Event Marketing Manager",
    quote: "She listened attentively and quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation and knew exactly how to fix it.",
  },
  {
    name: "Anita Jozsef",
    role: "Culinary Brand Strategist, Nordics",
    quote: "She completely transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out.",
  },
  {
    name: "Johnwalf Bringoli",
    role: "Senior Post Producer, AKQA",
    quote: "Her understanding of the European market is clear and well-informed. She gave me perspective I simply did not have before, and that changed everything.",
  },
];

const FAQS = [
  { q: "Is this for me if I am not based in Europe yet?", a: "Yes. Many of my clients are outside Europe and planning their move. The earlier you work on your positioning, the better your chances when you start applying." },
  { q: "What if I only need help with my CV?", a: "A standalone CV rewrite is one of the services I offer. You do not need to book a session first. Just reach out and describe your situation." },
  { q: "Do you work with all industries and roles?", a: "Yes. My clients come from finance, tech, marketing, operations, creative industries, and more. The positioning and targeting principles apply across fields." },
  { q: "How does a session actually work?", a: "We connect on Google Meet. You tell me your situation, I ask questions, and we build a clear picture of what is blocking you and what to do next. You leave with a concrete action plan." },
  { q: "How long does it take to see results?", a: "Most clients start getting interview requests within 2 to 4 weeks of implementing the changes. The Full Coaching Package is designed to get you moving in under two weeks." },
  { q: "Do you offer coaching in Spanish?", a: "Yes. I work in both English and Spanish. If you are more comfortable in Spanish, just reach out in Spanish and we continue from there." },
];

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#FAFAF7]/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        <a href="#" className="font-serif text-xl font-bold text-[#1B3A2F]">Land in Europe</a>
        <ul className="hidden md:flex items-center gap-8">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <li key={h}><a href={h} className="text-sm text-[#1B3A2F]/60 hover:text-[#1B3A2F] transition-colors font-medium">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-[#1B3A2F] text-[#FAFAF7] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#142E24] transition-colors">
          Get in touch
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-[#1B3A2F] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-[#1B3A2F] ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-[#1B3A2F] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#FAFAF7] border-t border-[#1B3A2F]/10 px-6 py-5 flex flex-col gap-4">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <a key={h} href={h} className="text-[#1B3A2F]/70 text-sm font-medium" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="bg-[#1B3A2F] text-[#FAFAF7] text-sm font-semibold px-6 py-3 rounded-full text-center mt-2" onClick={() => setOpen(false)}>Get in touch</a>
        </div>
      )}
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen bg-[#FAFAF7] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-[#1B3A2F]/8 border border-[#1B3A2F]/15 rounded-full px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-semibold text-[#1B3A2F] uppercase tracking-widest">International Career Coach in Europe</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-[5.5rem] font-bold text-[#1B3A2F] leading-[1.05] mb-8">
              You have the<br />
              experience.<br />
              <span className="italic text-[#C9A84C]">Let Europe<br />see it.</span>
            </h1>

            <p className="text-lg text-[#1B3A2F]/55 leading-relaxed mb-10 max-w-lg">
              I help international professionals position themselves, target the right companies,
              and land roles in Europe. As a working European recruiter, I know exactly what the
              other side of the table is looking for.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1B3A2F] text-[#FAFAF7] font-semibold px-8 py-4 rounded-full hover:bg-[#142E24] transition-colors text-base shadow-lg shadow-[#1B3A2F]/20">
                Tell me your situation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[#1B3A2F]/20 text-[#1B3A2F] font-semibold px-8 py-4 rounded-full hover:bg-[#1B3A2F]/5 transition-colors text-base">
                How I help
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 border-t border-[#1B3A2F]/10 pt-10">
              {[["50+","Professionals coached"],["15+","Nationalities"],["3","European markets"]].map(([v,l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl font-bold text-[#1B3A2F]">{v}</p>
                  <p className="text-xs text-[#1B3A2F]/45 mt-0.5 font-medium">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative hidden lg:block">
            {/* Background shape */}
            <div className="absolute inset-0 bg-[#1B3A2F]/6 rounded-[2.5rem] transform rotate-2" />
            <div className="absolute inset-0 bg-[#C9A84C]/10 rounded-[2.5rem] transform -rotate-1" />

            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-[#1B3A2F]/15">
              <img
                src="/noelia.jpg"
                alt="Noelia Teruel Ortega, Career Coach"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 5%" }}
              />
              {/* Subtle green overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2F]/40 via-transparent to-transparent" />

              {/* Name tag at bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#FAFAF7]/95 backdrop-blur-sm rounded-2xl px-5 py-4">
                  <p className="font-serif text-base font-bold text-[#1B3A2F]">Noelia Teruel Ortega</p>
                  <p className="text-xs text-[#1B3A2F]/55 mt-0.5">International Recruiter and Career Coach</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 top-12 bg-[#C9A84C] rounded-2xl px-5 py-4 shadow-xl max-w-[175px]">
              <p className="text-xs font-bold text-[#1B3A2F] uppercase tracking-wide mb-1">Coaching in</p>
              <p className="text-sm font-bold text-[#1B3A2F]">English and Spanish</p>
            </div>

            {/* Floating recruiter badge */}
            <div className="absolute -left-8 top-1/2 bg-white rounded-2xl px-5 py-4 shadow-xl max-w-[190px] border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Insider view</p>
              </div>
              <p className="text-sm font-semibold text-[#1B3A2F] leading-snug">I screen CVs for European companies every day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Results Ticker ─────────────────────────────────────────────────────────────
function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <section className="bg-[#1B3A2F] py-5 overflow-hidden border-y-0">
      <div className="ticker-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <span className="text-[#C9A84C] text-lg">✦</span>
            <span className="text-[#FAFAF7]/80 text-sm font-medium whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Pain Point ────────────────────────────────────────────────────────────────
function PainPoint() {
  return (
    <section className="py-28 px-6 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-5">Sound familiar?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2F] leading-tight mb-8">
              You have been applying for months. Nothing is working. Here is why.
            </h2>
            <div className="space-y-5 text-[#1B3A2F]/60 leading-relaxed">
              <p>European recruiters scan a CV in under 10 seconds. If your headline does not say the right thing, if your experience is listed but not framed as results, if your LinkedIn does not show up in searches — you are invisible. Not because you are not good enough. Because your positioning is not working for this market.</p>
              <p>Most international professionals apply to Europe the same way they applied back home. Different market, different rules, different expectations. Nobody tells you this. I do.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: "📄", title: "Your CV is not European-market ready", desc: "Format, structure and language expectations are different here. What worked at home will not work the same way." },
              { icon: "🔍", title: "Recruiters cannot find you on LinkedIn", desc: "Without the right keywords and positioning, you do not show up in searches. You are waiting for opportunities that are already going to someone else." },
              { icon: "🎯", title: "You are applying to the wrong companies", desc: "Targeting without strategy means sending applications into silence. The right 10 applications beat 100 random ones every time." },
            ].map((item, i) => (
              <div key={i} className="bg-[#F4F1EB] rounded-2xl p-6 flex gap-4 lift">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#1B3A2F] mb-1 text-sm">{item.title}</h3>
                  <p className="text-[#1B3A2F]/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Approach ──────────────────────────────────────────────────────────────────
function Approach() {
  return (
    <section id="approach" className="py-28 px-6 bg-[#1B3A2F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-5">Why this works</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#FAFAF7] leading-tight mb-8">
              I work both sides of the table
            </h2>
            <p className="text-[#FAFAF7]/55 leading-relaxed mb-6">
              I recruit for European companies every day. I see which CVs get opened and which get skipped. I know which LinkedIn profiles come up in searches and which ones never appear. I know what hiring managers in Barcelona, Lisbon, and Greece actually look for.
            </p>
            <p className="text-[#FAFAF7]/55 leading-relaxed mb-10">
              Most career coaches give you templates and theory. I give you insider knowledge from someone who is actively recruiting right now. That is the difference.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#1B3A2F] font-bold px-8 py-4 rounded-full hover:bg-[#DDB95E] transition-colors shadow-lg">
              Work with me
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "50+", l: "Professionals coached" },
              { n: "15+", l: "Nationalities represented" },
              { n: "3", l: "European markets" },
              { n: "2", l: "Languages (EN and ES)" },
            ].map((s, i) => (
              <div key={i} className={`rounded-3xl p-8 ${i === 0 ? "bg-[#C9A84C]" : "bg-[#FAFAF7]/8 border border-[#FAFAF7]/10"}`}>
                <p className={`font-serif text-5xl font-bold mb-2 ${i === 0 ? "text-[#1B3A2F]" : "text-[#FAFAF7]"}`}>{s.n}</p>
                <p className={`text-sm font-medium ${i === 0 ? "text-[#1B3A2F]/70" : "text-[#FAFAF7]/45"}`}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2F]">How I can help you</h2>
          <p className="mt-4 text-[#1B3A2F]/50 max-w-lg mx-auto">Every service is adapted to your specific situation, market, and target role. No generic scripts.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div key={s.number}
              className={`relative rounded-3xl p-9 flex flex-col lift ${
                s.featured ? "bg-[#1B3A2F] text-[#FAFAF7]" : "bg-[#F4F1EB] border border-[#1B3A2F]/8"
              }`}>
              {s.featured && (
                <span className="absolute top-7 right-7 bg-[#C9A84C] text-[#1B3A2F] text-xs font-bold px-3 py-1.5 rounded-full">
                  Most popular
                </span>
              )}

              <div className="flex items-start justify-between mb-6">
                <span className={`font-serif text-6xl font-bold select-none leading-none ${s.featured ? "text-[#FAFAF7]/10" : "text-[#1B3A2F]/8"}`}>
                  {s.number}
                </span>
                {s.featured && <div className="w-3 h-3 rounded-full bg-[#C9A84C] mt-2" />}
              </div>

              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-2">{s.tagline}</p>
              <h3 className={`font-serif text-2xl font-bold mb-4 ${s.featured ? "text-[#FAFAF7]" : "text-[#1B3A2F]"}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-7 flex-1 ${s.featured ? "text-[#FAFAF7]/55" : "text-[#1B3A2F]/55"}`}>{s.description}</p>

              <ul className="space-y-2.5 mb-8">
                {s.includes.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={s.featured ? "text-[#FAFAF7]/65" : "text-[#1B3A2F]/65"}>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors ${
                  s.featured
                    ? "bg-[#C9A84C] text-[#1B3A2F] hover:bg-[#DDB95E] shadow-lg shadow-[#C9A84C]/30"
                    : "bg-[#1B3A2F] text-[#FAFAF7] hover:bg-[#142E24]"
                }`}>
                Get started
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section className="py-28 px-6 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2F]">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {[
            { n:"1", title:"Reach out", body:"Send me a message describing where you are, what you are targeting, and what is not working. No long forms, no intake documents." },
            { n:"2", title:"We align and get started", body:"I recommend the service that fits your situation. Once confirmed, we schedule and begin. Everything moves quickly." },
            { n:"3", title:"You move forward", body:"You leave with clarity, stronger documents, and a concrete plan. Most clients see interview requests within 2 to 4 weeks." },
          ].map((s, i) => (
            <div key={i} className="relative">
              {i < 2 && <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[#1B3A2F]/10 z-0 -translate-y-0 translate-x-0" style={{width:"calc(100% - 2rem)", left:"calc(50% + 1.5rem)"}} />}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#1B3A2F] flex items-center justify-center mb-7 shadow-lg shadow-[#1B3A2F]/15">
                <span className="font-serif text-xl font-bold text-[#C9A84C]">{s.n}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1B3A2F] mb-3">{s.title}</h3>
              <p className="text-[#1B3A2F]/55 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#C9A84C]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#1B3A2F]/8 rounded-full blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#1B3A2F]/10 ring-1 ring-[#1B3A2F]/5">
              <img
                src="/noelia.jpg"
                alt="Noelia Teruel Ortega"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 5%" }}
              />
            </div>
            {/* Credential card */}
            <div className="absolute -bottom-6 -right-4 bg-[#1B3A2F] text-[#FAFAF7] rounded-2xl px-6 py-5 shadow-2xl max-w-[220px]">
              <p className="text-xs text-[#FAFAF7]/40 mb-1 font-medium uppercase tracking-wide">Education</p>
              <p className="text-sm font-semibold leading-snug">Master's in Human Resources, European University of Valencia</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-5">About me</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#1B3A2F] leading-tight mb-8">
              Hi, I'm<br />Noelia
            </h2>

            <div className="space-y-4 text-[#1B3A2F]/60 leading-relaxed">
              <p>I am an international recruiter and career coach. I work daily with European companies looking for talent, and with professionals trying to break into or move within this market.</p>
              <p>I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing. Strong backgrounds being overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.</p>
              <p>That felt like a problem I could fix. Because I see both sides of it every day.</p>
              <p>I coach in <strong className="text-[#1B3A2F] font-semibold">English and Spanish</strong>, and I work with people from all over the world. My focus markets are Barcelona, Lisbon, and Greece, with a specialization in multilingual talent.</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {["Active European recruiter","Multilingual talent specialist","English and Spanish coaching","Master's in Human Resources"].map(item => (
                <div key={item} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1B3A2F]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="text-[#C9A84C]" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#1B3A2F]/65">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-[#1B3A2F] text-[#FAFAF7] font-semibold px-8 py-4 rounded-full hover:bg-[#142E24] transition-colors shadow-lg shadow-[#1B3A2F]/20">
              Work with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#1B3A2F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#FAFAF7]">What clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* Featured large */}
          <div className="md:row-span-2 bg-[#C9A84C] rounded-3xl p-8 flex flex-col">
            <div className="font-serif text-5xl text-[#1B3A2F]/20 leading-none mb-4">"</div>
            <p className="font-serif text-xl font-semibold text-[#1B3A2F] leading-relaxed flex-1 mb-8">
              {TESTIMONIALS[0].quote}
            </p>
            <div className="border-t border-[#1B3A2F]/15 pt-6">
              <p className="font-bold text-[#1B3A2F]">{TESTIMONIALS[0].name}</p>
              <p className="text-[#1B3A2F]/60 text-sm mt-0.5">{TESTIMONIALS[0].role}</p>
            </div>
          </div>

          {/* Rest */}
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div key={i} className="bg-[#FAFAF7]/6 border border-[#FAFAF7]/8 rounded-3xl p-7 flex flex-col lift">
              <div className="font-serif text-4xl text-[#C9A84C]/40 leading-none mb-3">"</div>
              <p className="text-[#FAFAF7]/70 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="border-t border-[#FAFAF7]/10 pt-5">
                <p className="font-semibold text-[#FAFAF7] text-sm">{t.name}</p>
                <p className="text-[#FAFAF7]/35 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-28 px-6 bg-[#F4F1EB]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2F] mb-6">Common questions</h2>
          <p className="text-[#1B3A2F]/55 leading-relaxed">Still wondering if this is right for you? These are the questions I hear most often.</p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-[#1B3A2F] text-[#FAFAF7] font-semibold px-7 py-3.5 rounded-full hover:bg-[#142E24] transition-colors text-sm">
            Ask me directly
          </a>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-[#FAFAF7] border border-[#1B3A2F]/8 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#1B3A2F]/3 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-[#1B3A2F] text-sm">{f.q}</span>
                <div className={`w-7 h-7 rounded-full bg-[#1B3A2F] flex items-center justify-center flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="#FAFAF7" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-[#1B3A2F]/6 pt-4 text-[#1B3A2F]/60 text-sm leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ name:"", email:"", service:"", message:"" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqgdozn", {
        method:"POST",
        headers:{ "Content-Type":"application/json", Accept:"application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name:"", email:"", service:"", message:"" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2F] leading-tight mb-6">
              Tell me your situation
            </h2>
            <p className="text-[#1B3A2F]/55 leading-relaxed mb-10 max-w-md">
              Describe where you are in your search and what is not working. I will read it carefully and let you know exactly how I can help.
            </p>
            {[
              "I typically reply within 24 hours",
              "Sessions happen over Google Meet",
              "English and Spanish, your choice",
            ].map(item => (
              <div key={item} className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="text-[#C9A84C]" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-[#1B3A2F]/65 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#F4F1EB] rounded-3xl p-8 border border-[#1B3A2F]/6">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#1B3A2F] flex items-center justify-center mx-auto mb-5">
                  <svg className="text-[#C9A84C]" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1B3A2F] mb-2">Message received</h3>
                <p className="text-[#1B3A2F]/55 text-sm">I will be back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A2F]/50 mb-1.5">Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full bg-[#FAFAF7] border border-[#1B3A2F]/12 rounded-xl px-4 py-3 text-sm text-[#1B3A2F] placeholder:text-[#1B3A2F]/25 focus:outline-none focus:border-[#1B3A2F]/40 focus:ring-2 focus:ring-[#1B3A2F]/5 transition-all"/>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A2F]/50 mb-1.5">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com"
                      className="w-full bg-[#FAFAF7] border border-[#1B3A2F]/12 rounded-xl px-4 py-3 text-sm text-[#1B3A2F] placeholder:text-[#1B3A2F]/25 focus:outline-none focus:border-[#1B3A2F]/40 focus:ring-2 focus:ring-[#1B3A2F]/5 transition-all"/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B3A2F]/50 mb-1.5">What are you looking for?</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-[#FAFAF7] border border-[#1B3A2F]/12 rounded-xl px-4 py-3 text-sm text-[#1B3A2F] focus:outline-none focus:border-[#1B3A2F]/40 transition-all">
                    <option value="">Select a service (optional)</option>
                    <option value="session">Career Strategy Session</option>
                    <option value="cv">CV Rewrite</option>
                    <option value="linkedin">LinkedIn Optimization</option>
                    <option value="package">Full Coaching Package</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B3A2F]/50 mb-1.5">Tell me your situation *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Where are you in your job search? What is not working? What are you targeting?"
                    className="w-full bg-[#FAFAF7] border border-[#1B3A2F]/12 rounded-xl px-4 py-3 text-sm text-[#1B3A2F] placeholder:text-[#1B3A2F]/25 focus:outline-none focus:border-[#1B3A2F]/40 focus:ring-2 focus:ring-[#1B3A2F]/5 transition-all resize-none"/>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Email me at <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a></p>
                )}
                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-[#1B3A2F] text-[#FAFAF7] font-semibold py-4 rounded-xl hover:bg-[#142E24] transition-colors disabled:opacity-50 shadow-lg shadow-[#1B3A2F]/20">
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
                <p className="text-center text-xs text-[#1B3A2F]/35">
                  Or email: <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-[#1B3A2F]/60">teruelorteganoelia@gmail.com</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#1B3A2F] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#FAFAF7]/10">
          <div>
            <p className="font-serif text-xl font-bold text-[#FAFAF7] mb-1">Land in Europe</p>
            <p className="text-sm text-[#FAFAF7]/40">Career Coaching for International Professionals</p>
          </div>
          <div className="flex gap-8">
            {[["Services","#services"],["About","#about"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm text-[#FAFAF7]/40 hover:text-[#FAFAF7] transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAFAF7]/25">
          <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
          <p>Barcelona · Lisbon · Greece</p>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <PainPoint />
      <Approach />
      <Services />
      <HowItWorks />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
