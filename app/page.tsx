"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

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
  { value: "3", label: "Markets (Barcelona, Lisbon & Greece)" },
  { value: "2", label: "Languages (English & Spanish)" },
];

const WHO_I_HELP = [
  {
    icon: "✈️",
    title: "Relocating to Europe",
    description:
      "You're moving to Europe and need to break into a new, unfamiliar job market. You have the experience — but your CV, LinkedIn, and approach aren't built for European recruiters yet.",
  },
  {
    icon: "🔄",
    title: "Repositioning Your Career",
    description:
      "You're already in Europe but feel stuck. You want to move up, change sector, or finally make the leap you've been putting off. You need a clear strategy, not generic advice.",
  },
  {
    icon: "📭",
    title: "Applying Without Results",
    description:
      "You have strong experience but your applications disappear into silence. No interviews, no replies. Something in your positioning or targeting is off — and we can find it.",
  },
];

const APPROACH = [
  {
    number: "01",
    title: "I work both sides of the table",
    description:
      "I recruit for European companies and coach candidates. I don't guess what recruiters look for — I know, because I am one. That insider view changes everything.",
  },
  {
    number: "02",
    title: "No templates, no generic scripts",
    description:
      "Every session starts with your specific situation, your industry, your background, your target market. The output is a strategy that fits you — not a formula.",
  },
  {
    number: "03",
    title: "I help you get unstuck",
    description:
      "Sometimes one small change — a sentence, a structure, a clearer story — completely transforms your chances. We find what is blocking you and fix it.",
  },
];

const SERVICES = [
  {
    id: "session",
    title: "Career Strategy Session",
    tagline: "Know exactly what to do next",
    description:
      "A focused 60-minute session where we audit your current positioning, identify what's blocking you, and build a concrete action plan you can start using immediately. No fluff, no homework for the sake of it.",
    includes: [
      "CV and LinkedIn audit",
      "Target market and company strategy",
      "Personalized action plan",
      "Follow-up summary after the session",
    ],
  },
  {
    id: "cv",
    title: "CV Rewrite",
    tagline: "A CV that gets you interviews",
    description:
      "Your CV rewritten for the European market by someone who screens CVs every day. ATS-optimized, achievement-focused, and adapted to the roles and sectors you're targeting.",
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
    title: "LinkedIn Optimization",
    tagline: "Get found by the right recruiters",
    description:
      "A LinkedIn profile that tells the right story, ranks higher in recruiter searches, and positions you as the professional you actually are — not a watered-down version of your CV.",
    includes: [
      "Headline and summary rewrite",
      "Experience section optimization",
      "Keyword strategy for your industry",
      "Visibility and activity recommendations",
    ],
  },
  {
    id: "package",
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
      "Thank you very much for all your work and support. I have reviewed the final CV and I am very happy with the result. I feel that my experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process.",
  },
  {
    name: "Anita Jozsef",
    role: "Culinary Brand Strategist | Nordics",
    quote:
      "I am very satisfied with the work Noelia did on my CV. She completely updated it and transformed how my experience reads to European recruiters. The result is something I'm genuinely proud to send out.",
  },
  {
    name: "Johnwalf Bringoli",
    role: "Senior Post Producer | AKQA",
    quote:
      "Her understanding of the Spanish and broader European market is clear and well-informed. She gave me perspective I simply didn't have before — and that perspective made a real difference in how I approached my search.",
  },
  {
    name: "Bartosz W.",
    role: "Senior Finance & Strategic Planning Manager",
    quote:
      "A very valuable and concrete session. The conversation was focused, honest, and straight to the point. I left with clarity I had been missing for months and a clear path forward.",
  },
  {
    name: "Sandrine M.",
    role: "B2B Event Marketing Manager",
    quote:
      "She listened attentively and quickly pinpointed exactly where improvements were needed. The session felt like talking to someone who genuinely understood my situation — and who knew exactly how to fix it.",
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
    a: "It depends on your situation, but most clients start getting interview requests within 2–4 weeks of implementing the changes. The Full Coaching Package is designed to get you moving in under two weeks.",
  },
  {
    q: "Do you offer coaching in Spanish?",
    a: "Yes. I work in both English and Spanish. If you are more comfortable in Spanish, just reach out in Spanish and we continue from there.",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-cream-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-semibold text-navy-900 tracking-tight">
          Land in Europe
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm text-navy-900/70 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-navy-900 text-cream-50 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-navy-950 transition-colors"
        >
          Get in touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-navy-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-navy-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-navy-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cream-200 bg-cream-50 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy-900/70 hover:text-navy-900 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block bg-navy-900 text-cream-50 text-sm font-medium px-5 py-2.5 rounded-full text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-xs font-medium text-gold-600 uppercase tracking-widest">
            Career Coaching for International Professionals
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 leading-[1.1] mb-6">
          You have the experience.{" "}
          <em className="not-italic text-gold-500">Let's make Europe see it.</em>
        </h1>

        <p className="text-lg md:text-xl text-navy-900/60 leading-relaxed mb-10 max-w-2xl">
          I help international professionals position themselves, target the right companies, and land
          roles in Europe — coached by someone who recruits for European companies every single day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-navy-900 text-cream-50 font-medium px-8 py-4 rounded-full hover:bg-navy-950 transition-colors text-base"
          >
            Tell me your situation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 border border-navy-900/20 text-navy-900 font-medium px-8 py-4 rounded-full hover:border-navy-900/50 transition-colors text-base"
          >
            See how I can help
          </a>
        </div>

        {/* Recruiter badge */}
        <div className="mt-12 flex items-start gap-3 bg-cream-100 border border-cream-200 rounded-2xl p-4 max-w-md">
          <div className="mt-0.5 flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" fill="#D4A853" />
            </svg>
          </div>
          <p className="text-sm text-navy-900/70 leading-relaxed">
            <strong className="text-navy-900 font-medium">From a recruiter's desk:</strong> Sometimes one
            tiny change — a sentence, a structure, a clearer story — completely transforms your chances.
          </p>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className="border-y border-cream-200 bg-navy-900 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.value}>
            <div className="font-serif text-4xl font-bold text-gold-500 mb-1">{stat.value}</div>
            <div className="text-sm text-cream-200/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoIHelp() {
  return (
    <section id="who-i-help" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">Who I help</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 max-w-xl">
            Does any of this sound familiar?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {WHO_I_HELP.map((item) => (
            <div
              key={item.title}
              className="bg-cream-100 border border-cream-200 rounded-3xl p-8 hover:border-gold-500/40 hover:shadow-sm transition-all"
            >
              <span className="text-3xl mb-5 block">{item.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-navy-900/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-gold-500 uppercase tracking-widest mb-3">My approach</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 max-w-xl">
            Why this is different
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {APPROACH.map((item) => (
            <div key={item.number} className="relative">
              <div className="font-serif text-7xl font-bold text-gold-500/20 leading-none mb-4 select-none">
                {item.number}
              </div>
              <h3 className="font-serif text-xl font-semibold text-cream-50 mb-3">{item.title}</h3>
              <p className="text-cream-200/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 max-w-xl">
            How I can help you
          </h2>
          <p className="mt-4 text-navy-900/60 max-w-lg">
            Each service is tailored to your situation. No templates, no generic packages you don't need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-8 border transition-all hover:shadow-md ${
                service.featured
                  ? "bg-navy-900 border-navy-900 text-cream-50"
                  : "bg-cream-100 border-cream-200 hover:border-gold-500/40"
              }`}
            >
              {service.featured && (
                <div className="absolute top-6 right-6 bg-gold-500 text-navy-900 text-xs font-semibold px-3 py-1 rounded-full">
                  Most popular
                </div>
              )}

              <p
                className={`text-xs font-medium uppercase tracking-widest mb-3 ${
                  service.featured ? "text-gold-400" : "text-gold-600"
                }`}
              >
                {service.tagline}
              </p>
              <h3
                className={`font-serif text-2xl font-semibold mb-3 ${
                  service.featured ? "text-cream-50" : "text-navy-900"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.featured ? "text-cream-200/70" : "text-navy-900/60"
                }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`mt-0.5 flex-shrink-0 w-4 h-4 ${service.featured ? "text-gold-400" : "text-gold-500"}`}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={service.featured ? "text-cream-200/80" : "text-navy-900/70"}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-colors ${
                  service.featured
                    ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                    : "bg-navy-900 text-cream-50 hover:bg-navy-950"
                }`}
              >
                Get in touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Reach out and describe your situation",
      description:
        "Send me a message explaining where you are in your search, what you're targeting, and what's not working. No forms to fill, no intake questionnaires.",
    },
    {
      step: "2",
      title: "We align on the right service",
      description:
        "Based on your situation, I'll recommend the service that makes most sense. I send you the details and once confirmed, we schedule your session or get started.",
    },
    {
      step: "3",
      title: "We work together and you move forward",
      description:
        "Whether it's one session or two weeks of support, you leave with clarity, better documents, and a concrete plan. Most clients start seeing results within 2–4 weeks.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-cream-100 border-y border-cream-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 max-w-xl">
            How it works
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-cream-200" />

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.step} className="relative">
                <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-6 relative z-10">
                  <span className="font-serif text-xl font-bold text-gold-500">{step.step}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-navy-900/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">About me</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Hi, I'm Noelia
            </h2>
            <div className="space-y-4 text-navy-900/70 leading-relaxed">
              <p>
                I'm an international recruiter and career coach. I work daily with European companies looking
                for talent, and with professionals trying to break into or move within this market.
              </p>
              <p>
                I built the coaching side because I kept meeting people whose experience was real but whose
                positioning wasn't landing. Strong backgrounds being overlooked because of a CV structure,
                a missing keyword, or a LinkedIn profile that didn't tell the right story.
              </p>
              <p>
                That felt like a problem I could fix — because I see both sides of it every day.
              </p>
              <p>
                I coach in <strong className="text-navy-900 font-medium">English and Spanish</strong>, and I
                work with people from all over the world. My focus markets are Barcelona, Lisbon, and Greece,
                with a specialization in multilingual talent across German, Dutch, Danish, Spanish, Italian,
                Portuguese, French, Finnish, and Norwegian-speaking roles.
              </p>
            </div>

            {/* Credential */}
            <div className="mt-8 inline-flex items-center gap-3 bg-cream-100 border border-cream-200 rounded-2xl px-5 py-3">
              <svg className="text-gold-500 flex-shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2l2 5.5h5.5l-4.5 3.5 1.5 5.5L10 13.5 5.5 16.5 7 11 2.5 7.5H8L10 2z" fill="currentColor" />
              </svg>
              <p className="text-sm text-navy-900/70">
                <strong className="text-navy-900 font-medium">Master's in Human Resources</strong>
                {" "}— European University of Valencia
              </p>
            </div>
          </div>

          {/* Visual block */}
          <div className="relative">
            {/* Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-xl">
                <img
                  src="/noelia.png"
                  alt="Noelia Teruel Ortega — Career Coach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-navy-900 rounded-3xl p-10 text-cream-50">
              <p className="font-serif text-2xl font-semibold leading-snug mb-6 text-cream-50">
                "Most coaches advise. I know exactly what recruiters skip past — and why. Because I am one."
              </p>
              <div className="border-t border-cream-200/20 pt-6 space-y-3 text-sm text-cream-200/60">
                <div className="flex items-center gap-2">
                  <span className="text-gold-400">✓</span> Working recruiter for European companies
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-400">✓</span> Multilingual talent specialist
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-400">✓</span> Coaching in English & Spanish
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-400">✓</span> Master's in Human Resources
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-navy-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-medium text-gold-500 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 max-w-xl">
            What clients say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`bg-navy-950/50 border border-cream-200/10 rounded-3xl p-7 flex flex-col ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="text-gold-500" width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1l1.5 3.2L12 4.8l-2.5 2.5.5 3.7L7 9.2 4 11l.5-3.7L2 4.8l3.5-.6L7 1z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-cream-200/80 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>

              <div>
                <p className="font-medium text-cream-50 text-sm">{t.name}</p>
                <p className="text-cream-200/50 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-cream-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-cream-50 hover:bg-cream-100 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-navy-900 text-sm">{faq.q}</span>
                <svg
                  className={`flex-shrink-0 text-gold-500 transition-transform ${open === i ? "rotate-45" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5 pt-3 bg-cream-50 text-navy-900/60 text-sm leading-relaxed border-t border-cream-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="py-24 px-6 bg-cream-100 border-t border-cream-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-medium text-gold-600 uppercase tracking-widest mb-3">Get in touch</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Tell me your situation
            </h2>
            <p className="text-navy-900/60 leading-relaxed mb-8">
              Describe where you are in your search and what's not working. I'll read it, and if I can help,
              I'll let you know how and what the next step looks like. No commitment required.
            </p>

            <div className="space-y-4 text-sm text-navy-900/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="text-gold-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 3h12v8a1 1 0 01-1 1H2a1 1 0 01-1-1V3zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span>I typically reply within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="text-gold-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm0 3v4l3 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <span>Sessions happen over Google Meet</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-navy-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="text-gold-400" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" fill="currentColor" />
                  </svg>
                </div>
                <span>English and Spanish — your choice</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-navy-900 rounded-3xl p-10 text-center">
                <div className="w-14 h-14 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-gold-500" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-cream-50 mb-2">Message received</h3>
                <p className="text-cream-200/60 text-sm">I'll be back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-navy-900/60 mb-1.5">Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-navy-900/60 mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-navy-900/60 mb-1.5">
                    What are you looking for?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors"
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
                  <label className="block text-xs font-medium text-navy-900/60 mb-1.5">
                    Tell me your situation *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Where are you in your job search? What's not working? What are you targeting?"
                    className="w-full bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs">
                    Something went wrong. Please email me directly at{" "}
                    <a href="mailto:teruelorteganoelia@gmail.com" className="underline">
                      teruelorteganoelia@gmail.com
                    </a>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-navy-900 text-cream-50 font-medium py-4 rounded-xl hover:bg-navy-950 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                <p className="text-center text-xs text-navy-900/40">
                  Or email directly:{" "}
                  <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-navy-900/60">
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

function Footer() {
  return (
    <footer className="bg-navy-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream-200/40">
        <p className="font-serif text-base font-semibold text-cream-200/60">Land in Europe</p>
        <p>Career Coaching for International Professionals</p>
        <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
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
