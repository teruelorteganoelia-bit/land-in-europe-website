"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── City images ──────────────────────────────────────────────────────────────
const IMG = {
  barcelona: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
  lisbon:    "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1200&q=80",
  athens:    "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80",
};

const TICKER = [
  "CV rewritten → 3 interviews in 10 days",
  "Relocated from Brazil → Hired in Barcelona",
  "6 months of silence → First offer in 3 weeks",
  "Career pivot → New role in the Netherlands",
  "LinkedIn optimized → Recruiter reached out in 48 h",
  "Stuck for months → Finance Manager, Lisbon",
];

const COUNTRIES = [
  { flag:"🇮🇳", name:"India" },
  { flag:"🇦🇪", name:"UAE" },
  { flag:"🇺🇸", name:"United States" },
  { flag:"🇧🇷", name:"Brazil" },
  { flag:"🇦🇷", name:"Argentina" },
  { flag:"🇨🇴", name:"Colombia" },
  { flag:"🇵🇱", name:"Poland" },
  { flag:"🇷🇴", name:"Romania" },
  { flag:"🇳🇬", name:"Nigeria" },
  { flag:"🇵🇭", name:"Philippines" },
  { flag:"🇲🇽", name:"Mexico" },
  { flag:"🇻🇪", name:"Venezuela" },
  { flag:"🇵🇹", name:"Portugal" },
  { flag:"🇪🇸", name:"Spain" },
  { flag:"🇫🇷", name:"France" },
  { flag:"🇩🇪", name:"Germany" },
  { flag:"🇮🇹", name:"Italy" },
  { flag:"🇬🇧", name:"United Kingdom" },
];

const STATS = [
  { v: "50+", l: "Professionals coached" },
  { v: "15+", l: "Nationalities" },
  { v: "9",   l: "Languages placed" },
];

const LANGUAGES = ["German","Dutch","Danish","Spanish","Italian","Portuguese","French","Finnish","Norwegian"];

const SERVICE_COLORS = [
  { bg: "#F7F4EF", number: "#C9A84C" },
  { bg: "#1C1F26", number: "#C9A84C" },
  { bg: "#F0F4F8", number: "#3D5A80" },
  { bg: "#F8F5F0", number: "#7C6D5A" },
  { bg: "#111111", number: "#C9A84C" },
];

const SERVICES = [
  { n:"01", title:"Quick Diagnosis Session", tag:"30 minutes. Fast clarity.",
    body:"Your profile is almost there but something is not landing. In 30 minutes we identify exactly what needs fixing and you leave with a clear next step.",
    items:["CV or LinkedIn quick review","Pinpoint what is blocking you","One clear action to take immediately","Ideal if you are close but stuck"] },
  { n:"02", title:"Career Strategy Session", tag:"60 minutes. Concrete plan.",
    body:"We audit your positioning, identify what is blocking you, and build an action plan you can start using immediately. No fluff.",
    items:["CV and LinkedIn audit","Target market strategy","Personalized action plan","Written follow-up summary"] },
  { n:"03", title:"CV Rewrite", tag:"Built for the European market.",
    body:"Rewritten by someone who screens CVs daily. ATS-optimized, achievement-focused, adapted to the roles you are targeting.",
    items:["Full rewrite from scratch","ATS optimization","Achievement-led format","Editable Word version","One revision included"] },
  { n:"04", title:"LinkedIn Optimization", tag:"Get found before you apply.",
    body:"A profile that ranks higher in recruiter searches and makes the right people stop and reach out to you.",
    items:["Headline and summary rewrite","Experience optimization","Keyword strategy","Visibility recommendations"] },
  { n:"05", title:"Full Coaching Package", tag:"Start to offer, two weeks.", featured:true,
    body:"Complete support covering positioning, documents, targeting, and outreach. For professionals who want to move fast.",
    items:["Career strategy sessions","Full CV rewrite","LinkedIn optimization","Target company research","Application strategy","WhatsApp support throughout"] },
];

const TESTIMONIALS = [
  { name:"Valdrin Januzi", role:"Electrical Engineer, Energy Metering & Power Systems",
    result:"CV rewritten · applications sent within the week",
    quote:"I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process." },
  { name:"Bartosz W.", role:"Senior Finance and Strategic Planning Manager",
    result:"Strategy session · clear action plan in 60 minutes",
    quote:"A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months." },
  { name:"Sandrine M.", role:"B2B Event Marketing Manager",
    result:"LinkedIn optimized · recruiter outreach within days",
    quote:"She quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation." },
  { name:"Anita Jozsef", role:"Culinary Brand Strategist, Nordics",
    result:"Full package · first interview within 3 weeks",
    quote:"She completely transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out." },
  { name:"Johnwalf Bringoli", role:"Senior Post Producer, AKQA",
    result:"Career strategy · target market identified, pipeline built",
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

// ─── Scroll progress bar + floating CTA ──────────────────────────────────────
function ScrollEffects() {
  useEffect(() => {
    const bar = document.getElementById("scroll-bar");
    const cta = document.getElementById("float-cta");
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (bar) bar.style.width = `${Math.min(pct, 100)}%`;
      if (cta) {
        if (window.scrollY > window.innerHeight * 0.6) cta.classList.add("show");
        else cta.classList.remove("show");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="scroll-bar" aria-hidden="true"/>
      <div id="float-cta">
        <a href="#contact" className="flex items-center gap-2 bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-[#C9A84C] transition-colors duration-300">
          Get started
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </>
  );
}

// ─── Animated stat counter ────────────────────────────────────────────────────
function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numStr = value.replace(/\D/g, "");
    const suffix = value.replace(/\d/g, "");
    const target = parseInt(numStr, 10);
    if (isNaN(target)) { setDisplay(value); return; }

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.unobserve(el);
      const duration = 1000;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.floor(eased * target) + suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref}>
      <p className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">{display}</p>
      <p className="text-xs text-gray-400 mt-0.5 font-medium">{label}</p>
    </div>
  );
}

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
// Safe: only adds `visible` — never removes opacity from non-reveal elements
function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── Arrow ────────────────────────────────────────────────────────────────────
function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Check ────────────────────────────────────────────────────────────────────
function Check({ light = false }: { light?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${light ? "text-[#C9A84C]" : "text-[#C9A84C]"}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${sc ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-bold text-gray-900 tracking-tight flex-shrink-0">Land in Europe</a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0">
          Get started <Arrow />
        </a>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          <div className="w-5 flex flex-col gap-[5px]">
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
          <a href="#contact" className="bg-gray-900 text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-1" onClick={() => setOpen(false)}>Get started</a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const leftRef = useReveal();
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-0 lg:gap-16 items-center py-16 lg:py-24">

        {/* LEFT */}
        <div ref={leftRef} className="reveal flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" aria-hidden="true"/>
            <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em]">Career Coach · International Recruiter</span>
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,6.5rem)] font-bold text-gray-900 leading-[1.02] mb-8">
            You have the<br/>experience.<br/>
            <span className="text-[#C9A84C]">Let Europe<br/>see it.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mb-8">
            I help international professionals position themselves, target the right companies, and land roles in Europe.
            As a working European recruiter, I know exactly what the other side of the table is looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white font-bold px-7 py-4 rounded-full hover:bg-[#b8953f] transition-colors text-sm shadow-lg shadow-[#C9A84C]/30">
              Tell me your situation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold px-7 py-4 rounded-full hover:border-gray-300 hover:text-gray-900 transition-colors text-sm">
              See services
            </a>
          </div>
          <div className="flex gap-8 sm:gap-10 items-center border-t border-gray-100 pt-8 mt-12">
            {STATS.map(({ v, l }) => (
              <StatCounter key={l} value={v} label={l} />
            ))}
          </div>
        </div>

        {/* RIGHT: portrait — desktop */}
        <div className="hidden lg:flex flex-col items-end gap-4">
          <div className="w-full max-w-sm xl:max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-gray-100 relative aspect-[3/4]">
            <Image src="/noelia2.png" alt="Noelia Teruel Ortega, career coach and international recruiter based in Sweden" fill className="object-cover object-top" priority sizes="(max-width:1280px) 40vw, 420px"/>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent"/>
          </div>
          <div className="flex gap-2.5 w-full max-w-sm xl:max-w-md">
            {[
              { src: IMG.barcelona, alt: "Barcelona, Spain" },
              { src: IMG.lisbon,    alt: "Lisbon, Portugal" },
              { src: IMG.athens,    alt: "Athens, Greece" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex-1 h-14 rounded-xl overflow-hidden relative">
                <Image src={src} alt={alt} fill className="object-cover" sizes="120px"/>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-300 font-medium text-right tracking-wide">Recruiting for Barcelona · Lisbon · Athens</p>
        </div>

        {/* RIGHT: portrait — mobile */}
        <div className="lg:hidden mt-10 flex flex-col items-center gap-4">
          <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100 relative">
            <Image src="/noelia2.png" alt="Noelia Teruel Ortega, career coach" fill className="object-cover object-top" priority sizes="192px"/>
          </div>
          <div className="flex gap-2">
            {[IMG.barcelona, IMG.lisbon, IMG.athens].map((src, i) => (
              <div key={i} className="w-20 h-12 rounded-lg overflow-hidden relative">
                <Image src={src} alt="" fill className="object-cover" sizes="80px"/>
              </div>
            ))}
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
          <div key={i} className="flex items-center gap-6 px-8 flex-shrink-0">
            <span className="text-white/20 text-xs">|</span>
            <span className="text-white/50 text-sm font-medium whitespace-nowrap">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Country strip ────────────────────────────────────────────────────────────
function CountryStrip() {
  const all = [...COUNTRIES, ...COUNTRIES];
  return (
    <div className="bg-white border-t border-b border-gray-100 py-5 overflow-hidden">
      <p className="text-center text-[10px] font-semibold text-gray-300 uppercase tracking-[0.3em] mb-4">
        Professionals I have worked with from
      </p>
      <div className="ticker-inner" style={{ animationDuration: "40s" }}>
        {all.map((c, i) => (
          <div key={i} className="flex items-center gap-2.5 px-7 flex-shrink-0">
            <span className="text-2xl leading-none">{c.flag}</span>
            <span className="text-sm font-medium text-gray-400 whitespace-nowrap">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Approach ─────────────────────────────────────────────────────────────────
function Approach() {
  const headRef  = useReveal();
  const cardsRef = useReveal();
  const painRef  = useReveal();
  return (
    <section id="approach" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-14 md:mb-20">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why this is <span className="text-[#C9A84C]">different</span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-base self-end">
            Most career coaches give you templates and theory. I give you insider knowledge from someone actively recruiting for European companies today. That is the difference.
          </p>
        </div>

        {/* reveal-group: children stagger automatically */}
        <div ref={cardsRef} className="reveal-group grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { n:"01", t:"I work both sides", b:"I recruit for European companies and coach candidates. I know which CVs get opened and why, because I open them every single day." },
            { n:"02", t:"No templates", b:"Every session starts with your specific situation, your industry, your target market. The output fits you, not a formula someone else used." },
            { n:"03", t:"I find what is blocking you", b:"Sometimes one sentence, one structure change, one clearer story completely transforms your chances. That is what I look for." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white lift p-8">
              <p className="text-xs font-mono text-gray-200 mb-5">{c.n}</p>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{c.t}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>

        <div ref={painRef} className="reveal-group mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { icon:"📄", title:"Your CV is not European-market ready", body:"Format, structure and language expectations here are different. What worked at home often does not work the same way in Spain, Portugal or Greece." },
            { icon:"🔍", title:"Recruiters cannot find you on LinkedIn", body:"Without the right keywords and positioning you simply do not appear in searches. Opportunities go to other candidates while you wait." },
            { icon:"🎯", title:"You are targeting the wrong companies", body:"Sending 100 applications without strategy means 100 silences. The right 10 targeted applications beat that every time." },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 lift">
              <span className="text-3xl mb-5 block">{c.icon}</span>
              <h3 className="font-semibold text-gray-900 text-sm mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const headRef = useReveal();
  const gridRef = useReveal();
  return (
    <section id="services" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              How I can <span className="text-[#C9A84C]">help</span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-base">Every service is adapted to your specific situation and target market. No templates, no generic advice.</p>
        </div>

        <div ref={gridRef} className="reveal-group grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, idx) => {
            const isDark = s.featured;
            return (
              <div
                key={s.n}
                className={`rounded-2xl border flex flex-col lift p-8 sm:p-10 relative overflow-hidden ${
                  isDark
                    ? "bg-gray-900 border-gray-900 text-white"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Large watermark number — purely decorative */}
                <span
                  className="absolute -right-4 -top-4 font-serif font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: "clamp(7rem,14vw,11rem)", color: isDark ? "#C9A84C" : "#F0EBE0", opacity: isDark ? 0.12 : 1 }}
                  aria-hidden="true"
                >{s.n}</span>

                {s.featured && (
                  <span className="absolute top-5 right-5 bg-[#C9A84C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Most popular
                  </span>
                )}

                <div className="relative z-10 flex flex-col flex-1">
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${isDark ? "text-[#C9A84C]" : "text-[#C9A84C]"}`}>{s.tag}</p>
                  <h3 className={`font-serif text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed mb-7 flex-1 ${isDark ? "text-white/50" : "text-gray-500"}`}>{s.body}</p>
                  <ul className="space-y-2.5 mb-8">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check />
                        <span className={isDark ? "text-white/60" : "text-gray-500"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {s.featured && <p className="text-[11px] text-white/30 mb-4">Limited to 8 clients per month.</p>}
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors self-start ${
                      isDark ? "bg-[#C9A84C] text-white hover:bg-[#b8953f]" : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    Get started <Arrow />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const headRef  = useReveal();
  const cardsRef = useReveal();
  return (
    <section className="py-24 sm:py-28 px-6 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Process</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              How it <span className="text-[#C9A84C]">works</span>
            </h2>
          </div>
          <p className="text-white/40 leading-relaxed self-end">Simple. No long intake forms, no complicated onboarding. Just reach out and we start.</p>
        </div>
        <div ref={cardsRef} className="reveal-group grid sm:grid-cols-3 gap-5">
          {[
            { n:"01", t:"Reach out", b:"Send me a message describing where you are, what you are targeting, and what is not working." },
            { n:"02", t:"We align", b:"I recommend the service that fits your situation. Once confirmed we schedule and get started immediately." },
            { n:"03", t:"You move forward", b:"You leave with clarity, stronger documents, and a concrete plan. Most clients see results within 2 to 4 weeks." },
          ].map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/8 rounded-2xl p-8 hover:bg-white/8 transition-colors relative overflow-hidden">
              <p className="font-serif text-7xl font-bold text-[#C9A84C]/20 leading-none mb-6 select-none" aria-hidden="true">{s.n}</p>
              <h3 className="text-lg font-bold text-white mb-3">{s.t}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const imgRef  = useReveal();
  const textRef = useReveal();
  return (
    <section id="about" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div ref={imgRef} className="reveal relative max-w-sm mx-auto lg:mx-0 w-full">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/8 ring-1 ring-gray-100 relative">
            <Image src="/noelia2.png" alt="Noelia Teruel Ortega, career coach and international recruiter based in Stockholm, Sweden" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 50vw"/>
          </div>
          <div className="absolute -bottom-4 left-4 right-4 max-w-[calc(24rem-2rem)] bg-gray-900 text-white rounded-xl px-5 py-4 shadow-xl">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Based in</p>
            <p className="text-sm font-semibold">Stockholm, Sweden</p>
          </div>
        </div>

        <div ref={textRef} className="reveal lg:pt-4 mt-8 lg:mt-0">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">About</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            Hi,<br/>I'm <span className="text-[#C9A84C]">Noelia</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
            <p>I am an international recruiter and career coach with a Master's in Human Resources from the European University of Valencia. I am based in Stockholm, Sweden, and work daily with companies in Spain, Portugal and Greece looking for multilingual talent.</p>
            <p>I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing. Strong backgrounds being overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.</p>
            <p>That felt like a problem I could fix. Because I see both sides of it every day.</p>
            <p>I coach in <strong className="text-gray-900 font-semibold">English and Spanish</strong>, and I work with professionals from all over the world.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Active European recruiter","Multilingual talent specialist","English and Spanish coaching","9 languages placed across Europe"].map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <Check />
                <span className="text-sm text-gray-500">{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm">
            Get started <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials carousel ────────────────────────────────────────────────────
function Testimonials() {
  const headRef = useReveal();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  // Desktop: show 3 cards, centered on `active`
  const visible = [0, 1, 2].map(offset => (active + offset) % total);

  return (
    <section id="testimonials" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div ref={headRef} className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-end mb-14 md:mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What clients <span className="text-[#C9A84C]">say</span>
            </h2>
          </div>
          <p className="text-gray-400 leading-relaxed self-end">
            Professionals from across the world who repositioned themselves and started moving forward.
          </p>
        </div>

        {/* Desktop carousel — 3 cards, auto-advances */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-5 mb-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {visible.map((tIdx, pos) => {
            const t = TESTIMONIALS[tIdx];
            const isCenter = pos === 0;
            return (
              <div
                key={tIdx}
                onClick={() => setActive(tIdx)}
                className={`bg-white rounded-2xl p-7 flex flex-col cursor-pointer transition-all duration-500 ${
                  isCenter
                    ? "border-2 border-[#C9A84C] shadow-lg shadow-[#C9A84C]/10 scale-[1.02]"
                    : "border border-gray-200 opacity-70 hover:opacity-90"
                }`}
              >
                <div className="w-8 h-px bg-[#C9A84C] mb-5"/>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
                <p className="text-[11px] font-semibold text-[#C9A84C] mb-5 tracking-wide">{t.result}</p>
                <div className="border-t border-gray-100 pt-5">
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-6 h-2 bg-[#C9A84C]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile: horizontal scroll (unchanged) */}
        <div className="flex md:hidden gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col flex-shrink-0 w-[85vw] snap-start">
              <div className="w-8 h-px bg-[#C9A84C] mb-5"/>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">{t.quote}</p>
              <p className="text-[11px] font-semibold text-[#C9A84C] mb-5 tracking-wide">{t.result}</p>
              <div className="border-t border-gray-100 pt-5">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="md:hidden text-xs text-gray-300 text-center mt-4">Swipe to see more</p>
      </div>
    </section>
  );
}

// ─── For Companies ────────────────────────────────────────────────────────────
function ForCompanies() {
  const ref = useReveal();
  return (
    <section className="py-24 sm:py-28 px-6 bg-[#1C1F26] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10"/>
          <span className="text-xs font-semibold text-white/30 uppercase tracking-[0.3em] whitespace-nowrap">Separate service · Cross Border Talents</span>
          <div className="h-px flex-1 bg-white/10"/>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">For companies hiring</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              I recruit multilingual talent <span className="text-[#C9A84C]">across Europe</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-5 text-sm">
              Through <strong className="text-white font-semibold">Cross Border Talents</strong>, I work with companies in Barcelona, Lisbon, and Greece placing customer support and multilingual professionals. I am based in Sweden and operate remotely across these markets.
            </p>
            <p className="text-white/50 leading-relaxed mb-10 text-sm">
              This is entirely separate from career coaching. Whether you are a company looking for multilingual talent or a candidate open to new roles, reach out and I will let you know how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-colors">
                Get started as a company <Arrow />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm font-semibold px-6 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-colors">
                Get started as a candidate
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 h-48 relative">
              <Image src={IMG.athens} alt="European cities where Cross Border Talents places multilingual professionals" fill className="object-cover opacity-60" sizes="(max-width:1024px) 100vw, 50vw"/>
            </div>
            <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">Currently placing native and fluent speakers of</p>
            <div className="grid grid-cols-3 gap-2.5">
              {LANGUAGES.map(l => (
                <div key={l} className="border border-white/10 rounded-xl px-4 py-3 flex items-center gap-2 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/8 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0"/>
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

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();
  return (
    <section id="faq" className="py-24 sm:py-28 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Common <span className="text-[#C9A84C]">questions</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">Still not sure? These are the questions I get most. If yours is not here, just ask me directly.</p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-7 bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Ask me directly <Arrow />
          </a>
        </div>
        <div ref={ref} className="reveal space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isOpen
                    ? "border-[#C9A84C]/50 shadow-md shadow-[#C9A84C]/8 bg-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm transition-colors duration-200 ${isOpen ? "text-[#C9A84C]" : "text-gray-900"}`}>
                    {f.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${isOpen ? "bg-[#C9A84C] rotate-45" : "bg-gray-900"}`}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-5 pt-3 border-t border-[#C9A84C]/20 text-gray-600 text-sm leading-relaxed">{f.a}</div>
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
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ name:"", email:"", service:"", message:"" });
  const ref = useReveal();

  const ch = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/maqgdozn", {
        method:"POST", headers:{"Content-Type":"application/json",Accept:"application/json"},
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (r.ok) { setStatus("sent"); setForm({ name:"", email:"", service:"", message:"" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inp = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C9A84C]/60 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all";

  return (
    <section id="contact" className="py-24 sm:py-28 px-6 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        <div ref={ref} className="reveal">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Get in touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Tell me your <span className="text-[#C9A84C]">situation</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">Describe where you are in your search and what is not working. I will read it carefully and let you know exactly how I can help.</p>
          {["I typically reply within 24 hours","Sessions happen over Google Meet","English and Spanish, your choice"].map(item => (
            <div key={item} className="flex items-center gap-3 mb-4">
              <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0"><Check /></div>
              <span className="text-sm text-gray-500">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-7 sm:p-8 border border-gray-200">
          {status === "sent" ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-5"><Check /></div>
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
                <textarea id="message" required name="message" value={form.message} onChange={ch} rows={5} placeholder="Where are you in your job search? What is not working? What are you targeting?" className={`${inp} resize-none`}/>
              </div>
              {status === "error" && (
                <p className="text-red-500 text-xs">Something went wrong. Email me at <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a></p>
              )}
              <button type="submit" disabled={status === "sending"} className="w-full bg-[#C9A84C] text-white font-bold py-4 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/25">
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p className="text-center text-xs text-gray-300">Or email: <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-gray-500">teruelorteganoelia@gmail.com</a></p>
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
            <p className="text-xs text-white/20 mt-1">Based in Stockholm, Sweden · Recruiting for Spain, Portugal and Greece</p>
          </div>
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {[["Services","#services"],["About","#about"],["Testimonials","#testimonials"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm text-white/30 hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/15">
          <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
          <p>Stockholm, Sweden</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <ScrollEffects/>
      <Navbar/>
      <Hero/>
      <Ticker/>
      <CountryStrip/>
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
