"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// ─── Unsplash image URLs ──────────────────────────────────────────────────────
const IMG = {
  barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
  lisbon:    "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
  meeting:   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  cv:        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80",
  linkedin:  "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=900&q=80",
  europe:    "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1200&q=80",
};

const TICKER = [
  "CV rewritten → 3 interviews in 10 days",
  "Relocated from Brazil → Hired in Barcelona",
  "6 months of silence → First offer in 3 weeks",
  "Career pivot → New role in the Netherlands",
  "LinkedIn optimized → Recruiter reached out in 48 h",
  "Stuck for months → Finance Manager, Lisbon",
];

// ⚠️ NEEDS CONFIRMATION: are 50+, 15+, 9 the accurate figures you stand behind?
const STATS = [
  { v: "50+", l: "Professionals coached" },
  { v: "15+", l: "Nationalities" },
  { v: "9",   l: "Languages placed" },
];

const LANGUAGES = ["German","Dutch","Danish","Spanish","Italian","Portuguese","French","Finnish","Norwegian"];

const SERVICES = [
  { n:"00", title:"Quick Diagnosis Session", tag:"30 minutes. Fast clarity.",
    body:"Your profile is almost there but something is not landing. In 30 minutes we identify exactly what needs fixing and you leave with a clear next step.",
    items:["CV or LinkedIn quick review","Pinpoint what is blocking you","One clear action to take immediately","Ideal if you are close but stuck"],
    img: IMG.meeting },
  { n:"01", title:"Career Strategy Session", tag:"60 minutes. Concrete plan.",
    body:"We audit your positioning, identify what is blocking you, and build an action plan you can start using immediately. No fluff.",
    items:["CV and LinkedIn audit","Target market strategy","Personalized action plan","Written follow-up summary"],
    img: IMG.meeting },
  { n:"02", title:"CV Rewrite", tag:"Built for the European market.",
    body:"Rewritten by someone who screens CVs daily. ATS-optimized, achievement-focused, adapted to the roles you are targeting.",
    items:["Full rewrite from scratch","ATS optimization","Achievement-led format","Editable Word version","One revision included"],
    img: IMG.cv },
  { n:"03", title:"LinkedIn Optimization", tag:"Get found before you apply.",
    body:"A profile that ranks higher in recruiter searches and makes the right people stop and reach out to you.",
    items:["Headline and summary rewrite","Experience optimization","Keyword strategy","Visibility recommendations"],
    img: IMG.linkedin },
  { n:"04", title:"Full Coaching Package", tag:"Start to offer, two weeks.", featured:true,
    body:"Complete support covering positioning, documents, targeting, and outreach. For professionals who want to move fast.",
    items:["Career strategy session","Full CV rewrite","LinkedIn optimization","Target company research","Application strategy","WhatsApp support throughout"],
    img: IMG.europe },
];

// ⚠️ NEEDS CONTENT: add outcome data ("CV rewritten → 3 interviews in 10 days" style)
// once you have measurable results for each client. Current quotes are the exact words.
const TESTIMONIALS = [
  { name:"Valdrin Januzi", role:"Electrical Engineer, Energy Metering & Power Systems",
    quote:"I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process." },
  { name:"Bartosz W.", role:"Senior Finance and Strategic Planning Manager",
    quote:"A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months." },
  { name:"Sandrine M.", role:"B2B Event Marketing Manager",
    quote:"She quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation." },
  { name:"Anita Jozsef", role:"Culinary Brand Strategist, Nordics",
    quote:"She completely transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out." },
  { name:"Johnwalf Bringoli", role:"Senior Post Producer, AKQA",
    quote:"Her understanding of the European market is clear and well-informed. She gave me perspective I simply did not have before." },
];

const FAQS = [
  { q:"Is this for me if I am not in Europe yet?",
    a:"Yes. Many of my clients are outside Europe and planning their move. The earlier you work on your positioning, the better your chances when you start applying." },
  { q:"What if I only need help with my CV?",
    a:"A standalone CV rewrite is available without booking a session first. Just reach out and describe your situation." },
  { q:"Do you work with all industries?",
    a:"Yes. Finance, tech, marketing, operations, creative industries and more. The positioning and targeting principles apply across fields." },
  { q:"How does a session work?",
    a:"We connect on Google Meet. You tell me your situation, I ask questions, and we build a clear picture of what is blocking you. You leave with a concrete action plan." },
  { q:"How long until I see results?",
    a:"Most clients start getting interview requests within 2 to 4 weeks of implementing the changes. The Full Package is designed to get you moving in under two weeks." },
  { q:"Do you coach in Spanish?",
    a:"Yes. I work in both English and Spanish. Just reach out in whichever language feels natural." },
];

// ─── Arrow icon (reused) ──────────────────────────────────────────────────────
function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Navbar (#7 sticky CTA always visible on scroll) ─────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => { window.removeEventListener("scroll", fn); };
  }, []);

  const links = [
    ["Approach","#approach"],
    ["Services","#services"],
    ["Testimonials","#testimonials"],
    ["About","#about"],
    ["FAQ","#faq"],
  ] as const;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${sc ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-bold text-gray-900 tracking-tight flex-shrink-0">
          Land in Europe
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {links.map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">{l}</a>
          ))}
        </nav>
        {/* #7: sticky CTA always rendered, always visible */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
        >
          Get started <Arrow />
        </a>
        <button
          className="md:hidden p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="w-5 flex flex-col gap-[5px]" aria-hidden="true">
            <span className={`h-0.5 bg-gray-900 transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`}/>
            <span className={`h-0.5 bg-gray-900 transition-opacity ${open ? "opacity-0" : ""}`}/>
            <span className={`h-0.5 bg-gray-900 transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}/>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-5">
          {links.map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-gray-500" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a
            href="#contact"
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-1"
            onClick={() => setOpen(false)}
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero (#8 mobile-responsive, #9 next/image for local photo) ──────────────
function Hero() {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center px-6 pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Top label + photo */}
        <div className="flex items-center justify-between mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" aria-hidden="true"/>
            <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em]">
              Career Coach · International Recruiter
            </span>
          </div>
          {/* #9 next/image for local asset */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-gray-100 shadow-md flex-shrink-0 relative">
            <Image
              src="/noelia2.png"
              alt="Noelia Teruel Ortega, career coach and international recruiter"
              fill
              className="object-cover object-top"
              priority
              sizes="56px"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.8rem,9vw,8rem)] font-bold text-gray-900 leading-[1.02] mb-8 sm:mb-10">
          You have the<br/>
          experience.<br/>
          <span className="text-[#C9A84C]">Let Europe<br/>see it.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-end">
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
            I help international professionals position themselves, target the right companies, and land roles in Europe.
            As a working European recruiter, I know exactly what the other side of the table is looking for.
          </p>
          {/* #4 standardized: primary = "Tell me your situation", secondary = "See services" */}
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white font-bold px-7 py-4 rounded-full hover:bg-[#b8953f] transition-colors text-sm shadow-lg shadow-[#C9A84C]/30"
            >
              Tell me your situation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold px-7 py-4 rounded-full hover:border-gray-300 hover:text-gray-900 transition-colors text-sm"
            >
              See services
            </a>
          </div>
        </div>

        {/* Stats + city images (#8 mobile stack, #2 updated to 9 languages) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6 sm:gap-10 items-center border-t border-gray-100 pt-8 sm:pt-10">
            {STATS.map(({ v, l }) => (
              <div key={l}>
                <p className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{v}</p>
                <p className="text-xs text-gray-400 mt-0.5 font-medium">{l}</p>
              </div>
            ))}
          </div>
          {/* #9 next/image for Unsplash strips */}
          <div className="flex gap-3 items-end border-t border-gray-100 pt-8 sm:pt-10">
            <div className="flex-1 h-16 sm:h-20 rounded-xl overflow-hidden relative">
              <Image
                src={IMG.barcelona}
                alt="Barcelona city skyline, Spain"
                fill
                className="object-cover"
                sizes="(max-width:768px) 30vw, 200px"
              />
            </div>
            <div className="flex-1 h-16 sm:h-20 rounded-xl overflow-hidden relative">
              <Image
                src={IMG.lisbon}
                alt="Lisbon waterfront, Portugal"
                fill
                className="object-cover"
                sizes="(max-width:768px) 30vw, 200px"
              />
            </div>
            <div className="flex-1 h-16 sm:h-20 rounded-xl overflow-hidden relative">
              <Image
                src={IMG.europe}
                alt="European city at night"
                fill
                className="object-cover"
                sizes="(max-width:768px) 30vw, 200px"
              />
            </div>
            <div className="flex items-end pb-2 flex-shrink-0">
              <p className="text-[10px] text-gray-300 font-medium leading-relaxed text-right">
                Barcelona<br/>Lisbon<br/>Greece
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const all = [...TICKER, ...TICKER];
  return (
    <div className="bg-gray-900 py-4 overflow-hidden" aria-hidden="true">
      <div className="ticker-inner">
        {all.map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <span className="text-[#C9A84C] text-sm">✦</span>
            <span className="text-white/50 text-sm font-medium whitespace-nowrap">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Approach ─────────────────────────────────────────────────────────────────
function Approach() {
  return (
    <section id="approach" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-14 md:mb-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why this is different
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-base self-end">
            Most career coaches give you templates and theory. I give you insider knowledge from someone actively recruiting for European companies today. That is the difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { n:"01", t:"I work both sides",
              b:"I recruit for European companies and coach candidates. I know which CVs get opened and why, because I open them every single day." },
            { n:"02", t:"No templates",
              b:"Every session starts with your specific situation, your industry, your target market. The output fits you, not a formula someone else used." },
            { n:"03", t:"I find what is blocking you",
              b:"Sometimes one sentence, one structure change, one clearer story completely transforms your chances. That is what I look for." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white lift p-8">
              <p className="text-xs font-mono text-gray-200 mb-5">{c.n}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{c.t}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { emoji:"📄", title:"Your CV is not European-market ready",
              body:"Format, structure and language expectations here are different. What worked at home often does not work the same way in Spain, Portugal or Greece." },
            { emoji:"🔍", title:"Recruiters cannot find you on LinkedIn",
              body:"Without the right keywords and positioning you simply do not appear in searches. Opportunities go to other candidates while you wait." },
            { emoji:"🎯", title:"You are targeting the wrong companies",
              body:"Sending 100 applications without strategy means 100 silences. The right 10 targeted applications beat that every time." },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 lift">
              <span className="text-3xl mb-5 block" aria-hidden="true">{c.emoji}</span>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services (#4 standardized CTAs, #8 mobile grid, #9 next/image) ──────────
function Services() {
  return (
    <section id="services" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">How I can help</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-base">
            Every service is adapted to your specific situation and target market. No templates, no generic advice.
          </p>
        </div>

        {/* #8: single column on mobile, 2-col on md+ */}
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map(s => (
            <div
              key={s.n}
              className={`relative rounded-2xl overflow-hidden border flex flex-col lift ${
                s.featured ? "bg-gray-900 border-gray-900" : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* #9 next/image for service card images */}
              <div className="h-44 sm:h-48 overflow-hidden relative">
                <Image
                  src={s.img}
                  alt={`${s.title} — career coaching service`}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 ${s.featured ? "bg-gray-900/60" : "bg-white/20"}`} aria-hidden="true"/>
                {s.featured && (
                  <span className="absolute top-4 right-4 bg-[#C9A84C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Most popular
                  </span>
                )}
                <span className={`absolute bottom-4 left-4 text-xs font-mono ${s.featured ? "text-white/30" : "text-gray-400"}`} aria-hidden="true">
                  {s.n}
                </span>
              </div>

              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-2">{s.tag}</p>
                <h3 className={`text-xl font-bold mb-4 ${s.featured ? "text-white" : "text-gray-900"}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${s.featured ? "text-gray-400" : "text-gray-500"}`}>{s.body}</p>
                <ul className="space-y-2 mb-7" aria-label={`What's included in ${s.title}`}>
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className={s.featured ? "text-gray-400" : "text-gray-500"}>{item}</span>
                    </li>
                  ))}
                </ul>
                {/* #4 standardized: all service CTAs say "Get started" */}
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors ${
                    s.featured
                      ? "bg-[#C9A84C] text-white hover:bg-[#b8953f]"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Get started <Arrow />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section className="py-24 sm:py-28 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Process</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">How it works</h2>
          </div>
          <p className="text-white/40 leading-relaxed self-end">
            Simple. No long intake forms, no complicated onboarding. Just reach out and we start.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { n:"01", t:"Reach out",
              b:"Send me a message describing where you are, what you are targeting, and what is not working." },
            { n:"02", t:"We align",
              b:"I recommend the service that fits your situation. Once confirmed we schedule and get started immediately." },
            { n:"03", t:"You move forward",
              b:"You leave with clarity, stronger documents, and a concrete plan. Most clients see results within 2 to 4 weeks." },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-8 hover:bg-white/8 transition-colors">
              <p className="text-xs font-mono text-white/15 mb-8" aria-hidden="true">{s.n}</p>
              <h3 className="text-lg font-bold text-white mb-3">{s.t}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About (#3 credential integrated into copy, #4 CTA = "Get started") ──────
function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* #9 next/image for portrait */}
        <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/8 ring-1 ring-gray-100 relative">
            <Image
              src="/noelia2.png"
              alt="Noelia Teruel Ortega, career coach and international recruiter based in Europe"
              fill
              className="object-cover object-top"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="lg:pt-4">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">About</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Hi,<br/>I'm Noelia
          </h2>
          {/* #3 credential woven into paragraph copy instead of standalone label */}
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
            <p>
              I am an international recruiter and career coach with a Master's in Human Resources from the European University of Valencia.
              I work daily with European companies looking for talent, and with professionals trying to break into or move within this market.
            </p>
            <p>
              I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing.
              Strong backgrounds being overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.
            </p>
            <p>That felt like a problem I could fix. Because I see both sides of it every day.</p>
            <p>
              I coach in <strong className="text-gray-900 font-semibold">English and Spanish</strong>, and I work with professionals from all over the world.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              "Active European recruiter",
              "Multilingual talent specialist",
              "English and Spanish coaching",
              "9 languages placed across Europe",
            ].map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="text-[#C9A84C] text-sm" aria-hidden="true">✓</span>
                <span className="text-sm text-gray-500">{item}</span>
              </div>
            ))}
          </div>
          {/* #4 standardized CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-10 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm"
          >
            Get started <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials (#8 mobile: scroll on xs, grid on md) ──────────────────────
function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">What clients say</h2>
          </div>
          <p className="text-gray-400 leading-relaxed self-end">
            Professionals from across the world who repositioned themselves and started moving forward.
          </p>
        </div>

        {/* #8: horizontal scroll on mobile, 3-col grid on md+ */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col lift flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-start"
            >
              <div className="font-serif text-4xl text-[#C9A84C]/25 leading-none mb-3" aria-hidden="true">"</div>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Scroll hint visible on mobile only */}
        <p className="md:hidden text-xs text-gray-300 text-center mt-4">Swipe to see more</p>
      </div>
    </section>
  );
}

// ─── For Companies (#6 visually distinct from coaching sections) ──────────────
function ForCompanies() {
  return (
    // #6: dark charcoal bg + left border accent to visually separate from coaching flow
    <section className="py-24 sm:py-28 px-6 bg-[#1C1F26] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Clear audience label so visitors know this is a separate service */}
        <div className="mb-12 md:mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" aria-hidden="true"/>
          <span className="text-xs font-semibold text-white/30 uppercase tracking-[0.3em] whitespace-nowrap">
            Separate service · Cross Border Talents
          </span>
          <div className="h-px flex-1 bg-white/10" aria-hidden="true"/>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">For companies hiring</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              I recruit multilingual talent across Europe
            </h2>
            <p className="text-white/50 leading-relaxed mb-5 text-sm">
              Through <strong className="text-white font-semibold">Cross Border Talents</strong>, I work with companies in Barcelona, Lisbon, and Greece placing customer support and multilingual professionals.
            </p>
            <p className="text-white/50 leading-relaxed mb-10 text-sm">
              This is entirely separate from career coaching. Whether you are a company looking for multilingual talent or a candidate open to new roles — reach out and I will let you know how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                Get started as a company <Arrow />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm font-semibold px-6 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors"
              >
                Get started as a candidate
              </a>
            </div>
          </div>

          <div>
            {/* #9 next/image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 h-48 relative">
              <Image
                src={IMG.europe}
                alt="European cities where Cross Border Talents places multilingual professionals"
                fill
                className="object-cover opacity-70"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Currently placing native and fluent speakers of
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {LANGUAGES.map(l => (
                <div
                  key={l}
                  className="border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/8 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" aria-hidden="true"/>
                  <span className="text-sm font-medium text-white/60">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ (#5 accordion verified working, answers always render when open) ─────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Common questions
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Still not sure? These are the questions I get most. If yours is not here, just ask me directly.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-7 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Ask me directly <Arrow />
          </a>
        </div>

        <div className="space-y-2" role="list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden" role="listitem">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-semibold text-gray-900 text-sm">{f.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                {/* #5: answer always in DOM, shown/hidden via CSS for reliability */}
                <div
                  id={`faq-answer-${i}`}
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-6 pb-5 pt-3 border-t border-gray-100 text-gray-500 text-sm leading-relaxed">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name:"", email:"", service:"", message:"" });

  const ch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sub = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/maqgdozn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (r.ok) {
        setStatus("sent");
        setForm({ name:"", email:"", service:"", message:"" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inp = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C9A84C]/60 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all";

  return (
    <section id="contact" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div>
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Get in touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tell me your situation
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            Describe where you are in your search and what is not working. I will read it carefully and let you know exactly how I can help.
          </p>
          {[
            "I typically reply within 24 hours",
            "Sessions happen over Google Meet",
            "English and Spanish, your choice",
          ].map(item => (
            <div key={item} className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                <svg className="text-[#C9A84C]" width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
                  <path d="M1.5 4.5l2 2L7.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm text-gray-500">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-200">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-5">
                <svg className="text-[#C9A84C]" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l4 4L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Message received</h3>
              <p className="text-gray-400 text-sm">I will be back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={sub} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5" htmlFor="name">Name *</label>
                  <input id="name" required name="name" value={form.name} onChange={ch} placeholder="Your name" className={inp} autoComplete="name"/>
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5" htmlFor="email">Email *</label>
                  <input id="email" required type="email" name="email" value={form.email} onChange={ch} placeholder="you@email.com" className={inp} autoComplete="email"/>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5" htmlFor="service">What are you looking for?</label>
                <select id="service" name="service" value={form.service} onChange={ch} className={inp}>
                  <option value="">Select (optional)</option>
                  <option value="quick">Quick Diagnosis Session (30 min)</option>
                  <option value="session">Career Strategy Session (60 min)</option>
                  <option value="cv">CV Rewrite</option>
                  <option value="linkedin">LinkedIn Optimization</option>
                  <option value="package">Full Coaching Package</option>
                  <option value="company">I am a hiring company</option>
                  <option value="candidate">I am a multilingual candidate</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5" htmlFor="message">Tell me your situation *</label>
                <textarea
                  id="message"
                  required
                  name="message"
                  value={form.message}
                  onChange={ch}
                  rows={5}
                  placeholder="Where are you in your job search? What is not working? What are you targeting?"
                  className={`${inp} resize-none`}
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-xs" role="alert">
                  Something went wrong. Email me at{" "}
                  <a href="mailto:teruelorteganoelia@gmail.com" className="underline">
                    teruelorteganoelia@gmail.com
                  </a>
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#C9A84C] text-white font-bold py-4 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/25"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p className="text-center text-xs text-gray-300">
                Or email:{" "}
                <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-gray-500">
                  teruelorteganoelia@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-gray-900 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/8">
          <div>
            <p className="text-base font-bold text-white mb-1">Land in Europe</p>
            <p className="text-xs text-white/30">Career Coaching for International Professionals</p>
          </div>
          <nav className="flex flex-wrap gap-6 md:gap-8" aria-label="Footer navigation">
            {[["Services","#services"],["About","#about"],["Testimonials","#testimonials"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm text-white/30 hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/15">
          <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
          <p>Barcelona · Lisbon · Athens</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Ticker/>
      <Approach/>
      <Services/>
      <HowItWorks/>
      <About/>
      <Testimonials/>
      <ForCompanies/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </main>
  );
}
