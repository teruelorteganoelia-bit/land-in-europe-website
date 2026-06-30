"use client";
import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  {
    number: "01",
    title: "Career Strategy Session",
    description: "A focused 60-minute session to audit your positioning, identify what is blocking you, and build a concrete action plan.",
    includes: ["CV and LinkedIn audit", "Target market strategy", "Personalized action plan", "Follow-up summary"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "02",
    title: "CV Rewrite",
    description: "Your CV rewritten for the European market by someone who screens CVs every day. ATS-optimized and achievement-focused.",
    includes: ["Full rewrite from scratch", "ATS optimization", "Achievement-led format", "Editable Word version", "One revision round"],
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "LinkedIn Optimization",
    description: "A profile that tells the right story, ranks higher in recruiter searches, and positions you as you actually are.",
    includes: ["Headline and summary rewrite", "Experience optimization", "Keyword strategy", "Visibility recommendations"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "04",
    title: "Full Coaching Package",
    description: "Two weeks of complete support covering positioning, documents, targeting strategy, and outreach. For professionals who want to move fast.",
    includes: ["Career strategy session", "Full CV rewrite", "LinkedIn optimization", "Target company research", "Application strategy", "WhatsApp support throughout"],
    color: "from-indigo-500 to-cyan-500",
    featured: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Valdrin Januzi",
    role: "International Professional",
    quote: "I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process.",
    size: "large",
  },
  {
    name: "Bartosz W.",
    role: "Senior Finance and Strategic Planning Manager",
    quote: "A very valuable and concrete session. Focused, honest, and straight to the point. I left with clarity I had been missing for months.",
    size: "small",
  },
  {
    name: "Sandrine M.",
    role: "B2B Event Marketing Manager",
    quote: "She listened attentively and quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation.",
    size: "small",
  },
  {
    name: "Anita Jozsef",
    role: "Culinary Brand Strategist, Nordics",
    quote: "She completely updated my CV and transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out.",
    size: "medium",
  },
  {
    name: "Johnwalf Bringoli",
    role: "Senior Post Producer, AKQA",
    quote: "Her understanding of the Spanish and broader European market is clear and well-informed. She gave me perspective I simply did not have before.",
    size: "medium",
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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-gray-900">
          Land in Europe
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
          Get in touch
        </a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-gray-900 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-gray-900 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-gray-900 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(l => <a key={l.href} href={l.href} className="text-gray-600 text-sm font-medium" onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="#contact" className="bg-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-full text-center" onClick={() => setOpen(false)}>Get in touch</a>
        </div>
      )}
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Career Coaching for Internationals in Europe</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] mb-6">
              You have the<br />experience.<br />
              <span className="gradient-text">Let Europe see it.</span>
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
              I help international professionals position themselves, target the right companies,
              and land roles in Europe. Coached by someone who recruits for European companies every single day.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-500/30 text-base">
                Tell me your situation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-gray-300 transition-colors text-base shadow-sm">
                See services
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { n: "50+", l: "Professionals coached" },
                { n: "15+", l: "Nationalities" },
                { n: "3", l: "Markets" },
              ].map(s => (
                <div key={s.n}>
                  <p className="font-display text-2xl font-bold text-gray-900">{s.n}</p>
                  <p className="text-sm text-gray-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo */}
          <div className="relative hidden lg:flex justify-center">
            {/* Gradient blob behind photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-violet-200 to-cyan-200 rounded-[3rem] blur-3xl opacity-40 scale-110" />

            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img src="/noelia.jpg" alt="Noelia Teruel Ortega" className="w-full h-full object-cover object-top" />
              </div>

              {/* Floating card 1 */}
              <div className="absolute -left-12 bottom-20 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5 max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs font-semibold text-gray-500">Recruiter insight</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug">I know what gets CVs skipped. Because I review them daily.</p>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -right-8 top-16 bg-indigo-600 rounded-2xl p-4 shadow-xl max-w-[160px]">
                <p className="text-xs font-semibold text-indigo-200 mb-1">Coaching in</p>
                <p className="text-sm font-bold text-white">English and Spanish</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter bar */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-lg leading-snug">From a recruiter's desk</p>
            <p className="text-indigo-200 mt-1">Sometimes one small change, a sentence, a structure, a clearer story, completely transforms your chances. That is what I look for every session.</p>
          </div>
          <a href="#contact" className="flex-shrink-0 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors text-sm shadow-sm">
            Start now
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Who I Help ────────────────────────────────────────────────────────────────
function WhoIHelp() {
  const items = [
    { tag: "01", title: "Relocating to Europe", description: "You are moving to Europe and your CV, LinkedIn, and approach are not built for European recruiters yet. The experience is there. The visibility is not." },
    { tag: "02", title: "Repositioning Your Career", description: "You are already in Europe but feel stuck. You want to move up, change sector, or finally make the leap. You need a clear strategy, not generic advice." },
    { tag: "03", title: "Applying Without Results", description: "You have strong experience but your applications disappear into silence. Something in your positioning or targeting is off and together we can find it." },
  ];

  return (
    <section id="approach" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Who I help</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">Does any of this sound familiar?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 card-hover">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                <span className="text-xs font-bold text-indigo-600">{item.tag}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bento grid - Why different */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-3xl p-8 text-white">
            <p className="text-xs font-semibold text-indigo-200 uppercase tracking-widest mb-4">Why this is different</p>
            <h3 className="font-display text-3xl font-bold mb-4 leading-snug">I work both sides of the table</h3>
            <p className="text-indigo-100 leading-relaxed">I recruit for European companies and coach candidates. I do not guess what recruiters look for. I know, because I am one. That insider view changes everything about how we approach your search.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 card-hover flex-1">
              <p className="font-display text-3xl font-bold text-gray-900 mb-1">50+</p>
              <p className="text-sm text-gray-400">Professionals coached</p>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-gray-100 card-hover flex-1">
              <p className="font-display text-3xl font-bold text-gray-900 mb-1">15+</p>
              <p className="text-sm text-gray-400">Nationalities represented</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">How I can help you</h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">Each service is tailored to your situation. No templates, no packages you do not need.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => (
            <div key={s.number} className={`relative rounded-3xl p-8 border flex flex-col ${s.featured ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100 card-hover"}`}>
              {s.featured && (
                <span className="absolute top-6 right-6 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most popular</span>
              )}
              <div className="flex items-start justify-between mb-6">
                <span className={`font-display text-5xl font-bold select-none ${s.featured ? "text-white/10" : "text-gray-100"}`}>{s.number}</span>
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} opacity-80`} />
              </div>
              <h3 className={`font-display text-2xl font-bold mb-3 ${s.featured ? "text-white" : "text-gray-900"}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${s.featured ? "text-gray-400" : "text-gray-500"}`}>{s.description}</p>
              <ul className="space-y-2 mb-8">
                {s.includes.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${s.featured ? "text-indigo-400" : "text-indigo-500"}`} viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={s.featured ? "text-gray-400" : "text-gray-600"}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors ${s.featured ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/30" : "bg-gray-900 text-white hover:bg-gray-800"}`}>
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
  const steps = [
    { title: "Reach out", description: "Send me a message explaining where you are, what you are targeting, and what is not working." },
    { title: "We align", description: "I recommend the service that fits your situation best and we confirm the details." },
    { title: "You move forward", description: "You leave with clarity, better documents, and a concrete plan. Most clients see results within 2 to 4 weeks." },
  ];
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30">
                <span className="text-white font-bold text-sm">{i + 1}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
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
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 via-violet-100 to-cyan-100 rounded-[3rem] blur-2xl opacity-60" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src="/noelia.jpg"
                alt="Noelia Teruel Ortega"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 8%" }}
              />
            </div>
            <div className="absolute -right-6 bottom-16 bg-gray-900 text-white rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <p className="text-xs text-gray-400 mb-1">Education</p>
              <p className="text-sm font-semibold leading-snug">Master's in HR, European University of Valencia</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">About me</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              Hi, I'm<br />Noelia
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>I am an international recruiter and career coach. I work daily with European companies looking for talent, and with professionals trying to break into or move within this market.</p>
              <p>I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing. Strong backgrounds being overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.</p>
              <p>That felt like a problem I could fix, because I see both sides of it every day.</p>
              <p>I coach in <strong className="text-gray-900 font-semibold">English and Spanish</strong>, and I work with people from all over the world. My focus markets are Barcelona, Lisbon, and Greece.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Working European recruiter", "Multilingual talent specialist", "English and Spanish coaching", "Master's in Human Resources"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <svg className="text-indigo-500" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-500/30">
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
    <section id="testimonials" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">What clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Large featured */}
          <div className="md:row-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 flex flex-col text-white">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FCD34D"><path d="M8 1l1.8 4.1L14 5.6l-3 2.9.7 4.1L8 10.6l-3.7 2 .7-4.1-3-2.9 4.2-.5L8 1z"/></svg>)}
            </div>
            <p className="font-display text-xl font-semibold leading-relaxed flex-1 mb-8">
              "{TESTIMONIALS[0].quote}"
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="font-semibold text-white">{TESTIMONIALS[0].name}</p>
              <p className="text-indigo-200 text-sm mt-0.5">{TESTIMONIALS[0].role}</p>
            </div>
          </div>

          {/* Rest */}
          {TESTIMONIALS.slice(1).map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-7 border border-gray-100 card-hover flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <svg key={j} width="14" height="14" viewBox="0 0 16 16" fill="#818CF8"><path d="M8 1l1.8 4.1L14 5.6l-3 2.9.7 4.1L8 10.6l-3.7 2 .7-4.1-3-2.9 4.2-.5L8 1z"/></svg>)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
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
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">Common questions</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-100 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 text-sm">{f.q}</span>
                <div className={`w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center flex-shrink-0 transition-transform ${open === i ? "rotate-45" : ""}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqgdozn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", service: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tell me your situation
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              Describe where you are in your search and what is not working. I will read it and if I can help, I will let you know exactly how.
            </p>
            <div className="space-y-4">
              {[
                "I typically reply within 24 hours",
                "Sessions happen over Google Meet",
                "English and Spanish, your choice",
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <svg className="text-indigo-600" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="text-indigo-600" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message received</h3>
                <p className="text-gray-500 text-sm">I will be back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">What are you looking for?</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all">
                    <option value="">Select a service (optional)</option>
                    <option value="session">Career Strategy Session</option>
                    <option value="cv">CV Rewrite</option>
                    <option value="linkedin">LinkedIn Optimization</option>
                    <option value="package">Full Coaching Package</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Tell me your situation *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Where are you in your job search? What is not working? What are you targeting?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none" />
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-xs">Something went wrong. Email me at <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a></p>
                )}
                <button type="submit" disabled={status === "sending"}
                  className="w-full bg-indigo-600 text-white font-semibold py-4 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 shadow-lg shadow-indigo-500/25">
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
                <p className="text-center text-xs text-gray-400">
                  Or email directly: <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-gray-600">teruelorteganoelia@gmail.com</a>
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
    <footer className="bg-gray-900 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p className="font-display text-base font-bold text-white">Land in Europe</p>
        <p>Career Coaching for International Professionals</p>
        <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
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
      <WhoIHelp />
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
