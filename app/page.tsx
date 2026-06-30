"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Approach", href: "#approach" },
  { label: "Who I Help", href: "#who-i-help" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "50+", label: "Professionals coached" },
  { value: "15+", label: "Nationalities" },
  { value: "3", label: "Markets" },
  { value: "2", label: "Languages" },
];

const SERVICES = [
  {
    id: "session",
    number: "01",
    title: "Career Strategy Session",
    tagline: "Know exactly what to do next",
    description:
      "A focused 60-minute session where we audit your positioning, identify what is blocking you, and build a concrete action plan you can start using immediately.",
    includes: [
      "CV and LinkedIn audit",
      "Target market and company strategy",
      "Personalized action plan",
      "Follow-up summary after the session",
    ],
  },
  {
    id: "cv",
    number: "02",
    title: "CV Rewrite",
    tagline: "A CV that gets you interviews",
    description:
      "Your CV rewritten for the European market by someone who screens CVs every day. ATS-optimized, achievement-focused, adapted to the roles you are targeting.",
    includes: [
      "Full rewrite from scratch",
      "ATS optimization",
      "Achievement-led format",
      "Editable Word version for future updates",
      "One round of revisions included",
    ],
  },
  {
    id: "linkedin",
    number: "03",
    title: "LinkedIn Optimization",
    tagline: "Get found by the right recruiters",
    description:
      "A LinkedIn profile that tells the right story, ranks higher in recruiter searches, and positions you as the professional you actually are.",
    includes: [
      "Headline and summary rewrite",
      "Experience section optimization",
      "Keyword strategy for your industry",
      "Visibility and activity recommendations",
    ],
  },
  {
    id: "package",
    number: "04",
    title: "Full Coaching Package",
    tagline: "Complete support from start to offer",
    description:
      "Two weeks of hands-on support covering everything: your positioning, your documents, your targeting strategy, and your outreach. For professionals who want to move fast and do this properly.",
    includes: [
      "Career strategy session",
      "Full CV rewrite",
      "LinkedIn optimization",
      "Target company research",
      "Application strategy and outreach support",
      "WhatsApp support throughout the two weeks",
    ],
    featured: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Valdrin Januzi",
    role: "International Professional",
    quote:
      "Thank you very much for all your work and support. I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process.",
  },
  {
    name: "Anita Jozsef",
    role: "Culinary Brand Strategist, Nordics",
    quote:
      "I am very satisfied with the work Noelia did on my CV. She completely updated it and transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out.",
  },
  {
    name: "Johnwalf Bringoli",
    role: "Senior Post Producer, AKQA",
    quote:
      "Her understanding of the Spanish and broader European market is clear and well-informed. She gave me perspective I simply did not have before, and that perspective made a real difference in how I approached my search.",
  },
  {
    name: "Bartosz W.",
    role: "Senior Finance and Strategic Planning Manager",
    quote:
      "A very valuable and concrete session. The conversation was focused, honest, and straight to the point. I left with clarity I had been missing for months and a clear path forward.",
  },
  {
    name: "Sandrine M.",
    role: "B2B Event Marketing Manager",
    quote:
      "She listened attentively and quickly pinpointed exactly where improvements were needed. The session felt like talking to someone who genuinely understood my situation and knew exactly how to fix it.",
  },
];

const FAQS = [
  {
    q: "Is this for me if I am not based in Europe yet?",
    a: "Yes. Many of my clients are outside Europe and planning their move. The earlier you work on your positioning, the better your chances when you start applying.",
  },
  {
    q: "What if I only need help with my CV?",
    a: "A standalone CV rewrite is one of the services I offer. You do not need to book a session first. Just reach out and describe your situation.",
  },
  {
    q: "Do you work with all industries and roles?",
    a: "Yes. My clients come from finance, tech, marketing, operations, creative industries, and more. The positioning and targeting principles apply across fields.",
  },
  {
    q: "How does a session actually work?",
    a: "We connect on Google Meet. You tell me your situation, I ask questions, and we build a clear picture of what is blocking you and what to do next. You leave with a concrete action plan.",
  },
  {
    q: "How long does it take to see results?",
    a: "It depends on your situation, but most clients start getting interview requests within 2 to 4 weeks of implementing the changes. The Full Coaching Package is designed to get you moving in under two weeks.",
  },
  {
    q: "Do you offer coaching in Spanish?",
    a: "Yes. I work in both English and Spanish. If you are more comfortable in Spanish, just reach out in Spanish and we continue from there.",
  },
];

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-semibold text-white tracking-tight">
          Land in Europe
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#C9A84C] text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E2BD6A] transition-colors"
        >
          Get in touch
        </a>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0F0F0F] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-white/60 hover:text-white text-sm" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="inline-block bg-[#C9A84C] text-[#0F0F0F] text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2" onClick={() => setMenuOpen(false)}>
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] flex flex-col justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto w-full py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-[#C9A84C]/30 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="text-xs font-medium text-[#C9A84C] uppercase tracking-widest">
                Career Coaching for International Professionals
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-8">
              You have the<br />
              experience.<br />
              <span className="text-[#C9A84C]">Let Europe see it.</span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
              I help international professionals position themselves, target the right companies,
              and land roles in Europe. Coached by someone who recruits for European companies every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0F0F0F] font-semibold px-8 py-4 rounded-full hover:bg-[#E2BD6A] transition-colors"
              >
                Tell me your situation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/10 text-white font-medium px-8 py-4 rounded-full hover:border-white/30 transition-colors"
              >
                See services
              </a>
            </div>
          </div>

          {/* Right: photo + floating card */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-[#1A1A1A]">
              <img
                src="/noelia.png"
                alt="Noelia Teruel Ortega"
                className="w-full h-full object-cover object-top scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-10 bottom-16 bg-white rounded-2xl p-5 shadow-2xl max-w-[200px]">
              <p className="font-serif text-3xl font-bold text-[#0F0F0F]">50+</p>
              <p className="text-sm text-gray-500 mt-1">Professionals coached across 15+ nationalities</p>
            </div>

            {/* Floating quote */}
            <div className="absolute -right-6 top-12 bg-[#C9A84C] rounded-2xl p-5 shadow-2xl max-w-[220px]">
              <p className="text-sm font-medium text-[#0F0F0F] leading-snug">
                "I know what recruiters skip past. Because I am one."
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.value}>
              <p className="font-serif text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-sm text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Who I Help ────────────────────────────────────────────────────────────────
function WhoIHelp() {
  const items = [
    {
      tag: "Scenario 01",
      title: "Relocating to Europe",
      description:
        "You are moving to Europe and need to break into a new, unfamiliar job market. You have the experience but your CV, LinkedIn, and approach are not built for European recruiters yet.",
    },
    {
      tag: "Scenario 02",
      title: "Repositioning Your Career",
      description:
        "You are already in Europe but feel stuck. You want to move up, change sector, or finally make the leap you have been putting off. You need a clear strategy, not generic advice.",
    },
    {
      tag: "Scenario 03",
      title: "Applying Without Results",
      description:
        "You have strong experience but your applications disappear into silence. No interviews, no replies. Something in your positioning or targeting is off and we can find it.",
    },
  ];

  return (
    <section id="who-i-help" className="bg-[#F7F5F0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Who I help</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0F0F0F] leading-tight">
              Does any of this<br />sound familiar?
            </h2>
          </div>
          <p className="text-lg text-[#0F0F0F]/50 leading-relaxed max-w-md self-end">
            Most of my clients arrive with real experience and a positioning problem. The experience is there. The visibility is not.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-[#E8E4DC] hover:shadow-lg transition-shadow group">
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-6">{item.tag}</p>
              <h3 className="font-serif text-2xl font-bold text-[#0F0F0F] mb-4 leading-snug">{item.title}</h3>
              <p className="text-[#0F0F0F]/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Approach ──────────────────────────────────────────────────────────────────
function Approach() {
  const items = [
    {
      title: "I work both sides of the table",
      description:
        "I recruit for European companies and coach candidates. I do not guess what recruiters look for. I know, because I am one. That insider view changes everything.",
    },
    {
      title: "No templates, no generic scripts",
      description:
        "Every session starts with your specific situation, your industry, your background, your target market. The output is a strategy that fits you, not a formula.",
    },
    {
      title: "I help you get unstuck, fast",
      description:
        "Sometimes one small change, a sentence, a structure, a clearer story, completely transforms your chances. We find what is blocking you and fix it.",
    },
  ];

  return (
    <section id="approach" className="bg-[#0F0F0F] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">My approach</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Why this is different
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className="bg-[#0F0F0F] p-10 hover:bg-[#161616] transition-colors">
              <p className="font-serif text-6xl font-bold text-white/10 mb-6 select-none">0{i + 1}</p>
              <h3 className="font-serif text-xl font-semibold text-white mb-4 leading-snug">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="bg-[#F7F5F0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Services</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0F0F0F] leading-tight">
              How I can<br />help you
            </h2>
          </div>
          <p className="text-lg text-[#0F0F0F]/50 leading-relaxed max-w-md self-end">
            Each service is tailored to your situation. No templates, no packages you do not need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-10 flex flex-col ${
                service.featured
                  ? "bg-[#0F0F0F] text-white"
                  : "bg-white border border-[#E8E4DC] text-[#0F0F0F]"
              }`}
            >
              {service.featured && (
                <span className="absolute top-8 right-8 bg-[#C9A84C] text-[#0F0F0F] text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <div className="flex items-start justify-between mb-8">
                <span className={`font-serif text-5xl font-bold select-none ${service.featured ? "text-white/10" : "text-[#0F0F0F]/10"}`}>
                  {service.number}
                </span>
              </div>

              <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${service.featured ? "text-[#C9A84C]" : "text-[#C9A84C]"}`}>
                {service.tagline}
              </p>
              <h3 className={`font-serif text-2xl font-bold mb-4 ${service.featured ? "text-white" : "text-[#0F0F0F]"}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 flex-1 ${service.featured ? "text-white/50" : "text-[#0F0F0F]/55"}`}>
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-10">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-[#C9A84C] flex-shrink-0">✓</span>
                    <span className={service.featured ? "text-white/60" : "text-[#0F0F0F]/60"}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-colors ${
                  service.featured
                    ? "bg-[#C9A84C] text-[#0F0F0F] hover:bg-[#E2BD6A]"
                    : "bg-[#0F0F0F] text-white hover:bg-[#1A1A1A]"
                }`}
              >
                Get in touch
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
    {
      title: "Reach out",
      description:
        "Send me a message explaining where you are in your search, what you are targeting, and what is not working.",
    },
    {
      title: "We align",
      description:
        "Based on your situation, I recommend the service that makes the most sense and we get started.",
    },
    {
      title: "You move forward",
      description:
        "You leave with clarity, better documents, and a concrete plan. Most clients start seeing results within 2 to 4 weeks.",
    },
  ];

  return (
    <section className="bg-[#0F0F0F] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Process</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 rounded-full border border-[#C9A84C]/40 flex items-center justify-center mb-8">
                <span className="font-serif text-lg font-bold text-[#C9A84C]">{i + 1}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
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
    <section id="about" className="bg-[#F7F5F0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-[#E8E4DC]">
              <img
                src="/noelia.png"
                alt="Noelia Teruel Ortega"
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            {/* Credential tag */}
            <div className="absolute -right-4 bottom-12 bg-[#0F0F0F] rounded-2xl px-5 py-4 shadow-2xl max-w-[220px]">
              <p className="text-xs text-white/40 mb-1">Education</p>
              <p className="text-sm font-medium text-white leading-snug">
                Master's in Human Resources, European University of Valencia
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">About me</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0F0F0F] leading-tight mb-8">
              Hi, I'm Noelia
            </h2>

            <div className="space-y-5 text-[#0F0F0F]/60 leading-relaxed text-base">
              <p>
                I am an international recruiter and career coach. I work daily with European companies
                looking for talent, and with professionals trying to break into or move within this market.
              </p>
              <p>
                I built the coaching side because I kept meeting people whose experience was real but
                whose positioning was not landing. Strong backgrounds being overlooked because of a CV
                structure, a missing keyword, or a LinkedIn profile that did not tell the right story.
              </p>
              <p>
                That felt like a problem I could fix, because I see both sides of it every day.
              </p>
              <p>
                I coach in <strong className="text-[#0F0F0F] font-semibold">English and Spanish</strong>, and
                I work with people from all over the world. My focus markets are Barcelona, Lisbon, and
                Greece, with a specialization in multilingual talent.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                "Working recruiter for European companies",
                "Multilingual talent specialist",
                "Coaching in English and Spanish",
                "Master's in Human Resources",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 text-[#C9A84C] flex-shrink-0 text-sm">✓</span>
                  <span className="text-sm text-[#0F0F0F]/60">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-10 bg-[#0F0F0F] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors"
            >
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
    <section id="testimonials" className="bg-[#0F0F0F] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight">
              What clients say
            </h2>
          </div>
          <p className="text-lg text-white/40 leading-relaxed max-w-md self-end">
            Professionals from across the world who repositioned themselves and started moving forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-[#161616] border border-white/5 rounded-3xl p-8 flex flex-col ${
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              <div className="flex-1">
                <p className={`font-serif text-white leading-relaxed mb-6 ${i === 0 ? "text-xl" : "text-base"}`}>
                  "{t.quote}"
                </p>
              </div>
              <div className="border-t border-white/5 pt-6">
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-white/30 text-xs mt-0.5">{t.role}</p>
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
    <section id="faq" className="bg-[#F7F5F0] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0F0F0F] leading-tight">
              Common questions
            </h2>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E8E4DC] rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-[#F7F5F0] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-[#0F0F0F] text-sm">{faq.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#0F0F0F]/20 flex items-center justify-center transition-transform ${open === i ? "rotate-45" : ""}`}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-7 pb-5 text-[#0F0F0F]/55 text-sm leading-relaxed border-t border-[#E8E4DC]">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0F0F0F] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Get in touch</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
              Tell me your<br />situation
            </h2>
            <p className="text-white/40 leading-relaxed mb-12 max-w-md">
              Describe where you are in your search and what is not working. I will read it carefully,
              and if I can help, I will let you know exactly how.
            </p>

            <div className="space-y-6">
              {[
                { icon: "→", text: "I typically reply within 24 hours" },
                { icon: "→", text: "Sessions happen over Google Meet" },
                { icon: "→", text: "English and Spanish, your choice" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <span className="text-[#C9A84C] font-bold">{item.icon}</span>
                  <span className="text-white/50 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-[#161616] border border-white/5 rounded-3xl p-12 text-center">
                <div className="w-14 h-14 rounded-full border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
                  <svg className="text-[#C9A84C]" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">Message received</h3>
                <p className="text-white/40 text-sm">I will be back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/30 mb-2">Name *</label>
                    <input
                      required name="name" value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/30 mb-2">Email *</label>
                    <input
                      required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/30 mb-2">What are you looking for?</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C9A84C]/50 transition-colors"
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="session">Career Strategy Session</option>
                    <option value="cv">CV Rewrite</option>
                    <option value="linkedin">LinkedIn Optimization</option>
                    <option value="package">Full Coaching Package</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/30 mb-2">Tell me your situation *</label>
                  <textarea
                    required name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Where are you in your job search? What is not working? What are you targeting?"
                    className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">
                    Something went wrong. Email me directly at{" "}
                    <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a>
                  </p>
                )}

                <button
                  type="submit" disabled={status === "sending"}
                  className="w-full bg-[#C9A84C] text-[#0F0F0F] font-semibold py-4 rounded-xl hover:bg-[#E2BD6A] transition-colors disabled:opacity-50 text-sm"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <p className="text-center text-xs text-white/20">
                  Or email directly:{" "}
                  <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-white/40">
                    teruelorteganoelia@gmail.com
                  </a>
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
    <footer className="bg-[#0F0F0F] border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/20">
        <p className="font-serif text-base font-semibold text-white/60">Land in Europe</p>
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
