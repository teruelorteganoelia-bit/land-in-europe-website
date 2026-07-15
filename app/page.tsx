"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── City images ──────────────────────────────────────────────────────────────
const IMG = {
  barcelona: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  lisbon:    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  athens:    "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
};

const TICKER = [
  "CV rewritten · 3 interviews in 10 days",
  "Relocated from Brazil · Hired in Barcelona",
  "6 months of silence · First offer in 3 weeks",
  "Career pivot · New role in the Netherlands",
  "LinkedIn optimized · Recruiter reached out in 48 h",
  "Stuck for months · Finance Manager, Lisbon",
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
  { n:"01", title:"Quick Diagnosis Session", tag:"30 minutes.",
    body:"Something is not working but you are not sure what. In 30 minutes I tell you exactly where the problem is and what to fix first.",
    items:["CV or LinkedIn review","Identify what is blocking you","One clear next step","Good if you are close but stuck"],
    href:"/career-coaching" },
  { n:"02", title:"Career Strategy Session", tag:"60 minutes.",
    body:"We look at your full picture: where you are, where you want to go, and what is standing between you and getting there. You leave with a plan you can act on the same day.",
    items:["Full CV and LinkedIn audit","Target market and company strategy","Personalised action plan","Written summary after the session"],
    href:"/career-coaching" },
  { n:"03", title:"CV Rewrite", tag:"Built for European recruiters.",
    body:"I rewrite it from scratch. Not a light edit. A full rewrite by someone who screens CVs for European companies and knows in the first ten seconds whether something will land.",
    items:["Full rewrite from scratch","ATS-optimised","Achievement-led, not responsibility-led","Editable Word version","One revision included"],
    href:"/cv-rewrite" },
  { n:"04", title:"LinkedIn Optimization", tag:"Get found before you apply.",
    body:"Most international professionals have a LinkedIn profile. Very few have one that actually shows up in recruiter searches. I fix that.",
    items:["Headline and summary rewritten","Experience section optimised","Keyword strategy for your target market","Visibility recommendations"],
    href:"/linkedin-optimization" },
  { n:"05", title:"Full Coaching Package", tag:"Start to offer.", featured:true,
    body:"Everything. Five sessions, a full CV rewrite, LinkedIn optimisation, a personalised company map, and WhatsApp access throughout your search. And if you do not get an offer, I keep working with you until you do.",
    items:["5 themed coaching sessions","Full CV rewrite","LinkedIn optimisation","Personalised target company map","WhatsApp support throughout your search"],
    href:"#full-package" },
];

const TESTIMONIALS = [
  { name:"Sara De Wever", role:"CFA Level I Candidate · €10M+ Portfolio Experience · Fluent in 5 languages",
    result:"CV positioning session · biggest takeaway on how to present her experience",
    quote:"I really appreciated Noelia's guidance on how to position myself and my CV more effectively. The comprehensive document she shared afterwards, summarising all her tips and discussion points, was incredibly helpful. The recording has been great to revisit whenever needed." },
  { name:"Maria Beatriz Torquato Rego", role:"Privacy Lawyer · GDPR · LL.M. Maastricht University · DPO",
    result:"Strategy session · clearer job search approach from day one",
    quote:"The session helped me approach my job search much more strategically. Practical advice, clear direction, and a great experience overall." },
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
  { q:"I am not in Europe yet. Can you still help?",
    a:"Yes, and honestly the earlier the better. Most of my clients start working on their positioning before they arrive. By the time you land, your CV and LinkedIn are already built for the market." },
  { q:"What if I just need my CV fixed?",
    a:"That is a standalone service. You do not need to book a full session first. Just reach out and tell me what you are targeting." },
  { q:"Do you work with all industries?",
    a:"Yes. Finance, tech, marketing, operations, creative, sales. The fundamentals of how European recruiters read CVs and search LinkedIn apply across all of them." },
  { q:"What actually happens in a session?",
    a:"We meet on Google Meet. You walk me through your situation, I ask questions, and we work out exactly what is blocking you. You leave with a written action plan, not just a list of things to think about." },
  { q:"How long before I start getting replies?",
    a:"Most clients start hearing back within two to four weeks of making the changes. Some faster. It depends on your sector and how active the market is for your profile." },
  { q:"Do you work in Spanish?",
    a:"Yes. English and Spanish, whichever feels more comfortable. Just message me in whatever language you prefer." },
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
      <a
        href="https://wa.me/46769763498"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
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
// Safe: only adds `visible` never removes opacity from non-reveal elements
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

// ─── Announcement bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <a href="#contact" className="block bg-[#C9A84C] hover:bg-[#b8953f] transition-colors z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3 text-white">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" aria-hidden="true"/>
        <p className="text-xs font-semibold text-center">
          Limited availability: 3 coaching spots open this month. Message me to book yours.
        </p>
        <span className="text-white/70 text-xs flex-shrink-0">→</span>
      </div>
    </a>
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
  const links = [["Services","#services"],["Package","#full-package"],["CV Rewrite","/cv-rewrite"],["LinkedIn","/linkedin-optimization"],["About","/about"],["Blog","/blog"]] as const;
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
            I help international professionals get hired in Europe. I work in recruitment. I know what happens when your application lands on a desk. And I know exactly why most of them get skipped.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white font-bold px-7 py-4 rounded-full hover:bg-[#b8953f] transition-colors text-sm shadow-lg shadow-[#C9A84C]/30">
              Get your free diagnosis
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

        {/* RIGHT: portrait desktop */}
        <div className="hidden lg:flex flex-col items-end gap-4">
          <div className="w-full max-w-sm xl:max-w-md rounded-3xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-gray-100 relative aspect-[3/4]">
            <Image src="/noelianew.png" alt="Noelia Teruel Ortega, career coach and international recruiter based in Sweden" fill className="object-cover object-top" priority sizes="(max-width:1280px) 40vw, 420px"/>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent"/>
          </div>
          <div className="flex gap-2.5 w-full max-w-sm xl:max-w-md">
            {[
              { src: IMG.barcelona, alt: "Switzerland" },
              { src: IMG.lisbon,    alt: "France" },
              { src: IMG.athens,    alt: "Sweden" },
            ].map(({ src, alt }) => (
              <div key={alt} className="flex-1 h-14 rounded-xl overflow-hidden relative">
                <Image src={src} alt={alt} fill className="object-cover" sizes="120px"/>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-300 font-medium text-right tracking-wide">Recruiting across Switzerland · France · Sweden · Luxembourg · UK</p>
        </div>

        {/* RIGHT: portrait mobile */}
        <div className="lg:hidden mt-10 flex flex-col items-center gap-4">
          <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-100 relative">
            <Image src="/noelianew.png" alt="Noelia Teruel Ortega, career coach" fill className="object-cover object-top" priority sizes="192px"/>
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
            Most career coaches have never hired anyone. I recruit for European companies every week. That changes what I can tell you.
          </p>
        </div>

        {/* reveal-group: children stagger automatically */}
        <div ref={cardsRef} className="reveal-group grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { n:"01", t:"I work both sides", b:"I recruit for European companies and coach candidates at the same time. I know which CVs get opened and why because I open them every day." },
            { n:"02", t:"No templates", b:"Your situation is specific. Your industry, your background, your target country. I work from that, not from a formula built for someone else." },
            { n:"03", t:"I find what is actually blocking you", b:"Usually it is one thing. One sentence on a CV. One missing keyword. One story that is not landing. That is what I look for first." },
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
            { icon:"📄", title:"Your CV was built for a different market", body:"What worked at home often does not land the same way here. European recruiters read CVs differently, and the format matters more than most people think." },
            { icon:"🔍", title:"Recruiters are not finding you on LinkedIn", body:"If your profile does not have the right keywords, you are invisible in searches. The jobs go to people who did not even apply." },
            { icon:"🎯", title:"You are applying everywhere and hearing nothing", body:"Volume is not the answer. Ten well-targeted applications to the right companies will always beat a hundred sent into the void." },
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
          <p className="text-gray-400 leading-relaxed text-base">Pick where you need help most. Everything is built around your situation, not a standard package.</p>
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
                {/* Large watermark number purely decorative */}
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
                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href="#contact"
                      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-colors ${
                        isDark ? "bg-[#C9A84C] text-white hover:bg-[#b8953f]" : "bg-gray-900 text-white hover:bg-gray-800"
                      }`}
                    >
                      Get started <Arrow />
                    </a>
                    <a
                      href={s.href}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        isDark ? "text-white/40 hover:text-white" : "text-gray-400 hover:text-gray-900"
                      }`}
                    >
                      Learn more <Arrow />
                    </a>
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
          <p className="text-white/40 leading-relaxed self-end">No intake forms. No complicated process. Tell me where you are and we figure out the rest together.</p>
        </div>
        <div ref={cardsRef} className="reveal-group grid sm:grid-cols-3 gap-5">
          {[
            { n:"01", t:"Tell me your situation", b:"Send a message with where you are, what you are targeting, and what has not been working. The more specific, the better." },
            { n:"02", t:"We pick what makes sense", b:"I tell you which service fits your situation best. Once you confirm, we schedule and start. No waiting around." },
            { n:"03", t:"You start moving", b:"Clearer positioning, stronger documents, a real plan. Most clients get their first interview requests within two to four weeks." },
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
            <Image src="/noelianew.png" alt="Noelia Teruel Ortega, career coach and international recruiter based in Stockholm, Sweden" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 50vw"/>
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
            <p>I am a recruiter and career coach based in Stockholm. I have a Master's in Human Resources from the European University of Valencia, and I have worked inside recruitment placing multilingual professionals for companies across Europe.</p>
            <p>The coaching started because I kept seeing the same thing. People with strong backgrounds, real experience, years of results not getting replies. Not because they were unqualified. Because their CV was built for a different market, or their LinkedIn was invisible to European recruiters, or no one had told them how the hiring process here actually works.</p>
            <p>I could see the problem clearly because I sit on the other side of it every day. So I started fixing it.</p>
            <p>I work in <strong className="text-gray-900 font-semibold">English and Spanish</strong> with professionals from all over the world.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["Active European recruiter","Multilingual talent specialist","English and Spanish coaching","Works with professionals from 15+ nationalities"].map(item => (
              <div key={item} className="flex items-center gap-2.5">
                <Check />
                <span className="text-sm text-gray-500">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors text-sm">
              Get started <Arrow />
            </a>
            <a href="https://www.linkedin.com/in/noelia-teruel-ortega/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              Follow on LinkedIn
            </a>
          </div>
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
            In their words, not mine.
          </p>
        </div>

        {/* Desktop carousel 3 cards, auto-advances */}
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

// ─── Irresistible Offer ───────────────────────────────────────────────────────
const OFFER_SESSIONS = [
  { n:"01", title:"Clarity & Diagnosis",
    desc:"We map exactly where you stand. What European recruiters see when they find your profile right now, and what needs to change first." },
  { n:"02", title:"Your European Positioning",
    desc:"Repositioning your experience for this market. Your story, your pitch, your differentiator, made to resonate with European hiring managers." },
  { n:"03", title:"LinkedIn & Visibility",
    desc:"Full profile rewrite plus a proactive outreach strategy. Get found before you apply." },
  { n:"04", title:"Your Personal Target Map",
    desc:"A curated map of companies actively hiring your profile by country and language. Personalised to you: your industry, your languages, your target market." },
  { n:"05", title:"Applications & Momentum",
    desc:"Cover letters, follow-up strategy, and how to turn a first interview into an offer. We keep your pipeline moving until you land." },
];

const OFFER_STACK = [
  { label:"5 Themed Coaching Sessions (€99 each)",    value:"€495" },
  { label:"Full CV Rewrite",               value:"€179" },
  { label:"LinkedIn Profile Optimization", value:"€149" },
  { label:"European Job Market Guide (ebook)", value:"€97" },
  { label:"Your Personal Target Company Map",  value:"€97" },
  { label:"WhatsApp access throughout your entire job search", value:"Priceless" },
  { label:'"Work With You Until You Win" Guarantee', value:"Priceless" },
];

function IrresistibleOffer() {
  const headRef   = useReveal();
  const sessRef   = useReveal();
  const stackRef  = useReveal();
  const guarRef   = useReveal();

  return (
    <section id="full-package" className="py-24 sm:py-32 px-6 bg-[#0D0F12] border-t border-white/5">
      <div className="max-w-5xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] px-5 py-2 rounded-full">
            ✦ Most popular · Full Coaching Package
          </span>
        </div>

        {/* Headline */}
        <div ref={headRef} className="reveal text-center mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-bold text-white leading-tight mb-6">
            Land your first European job offer.{" "}
            <span className="text-[#C9A84C]">Or I keep working with you until you do.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            Five sessions, a full CV rewrite, LinkedIn, a company map, and WhatsApp access for your entire search. Built by someone who recruits for European companies and knows exactly what gets people hired.
          </p>
        </div>

        {/* 5 Sessions */}
        <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5 text-center">The 5 Coaching Sessions</p>
        <div ref={sessRef} className="reveal-group grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {OFFER_SESSIONS.map((s, i) => (
            <div key={i} className={`rounded-2xl border border-white/10 bg-white/[0.04] p-6 relative overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <span className="font-serif font-bold text-5xl text-white/20 absolute top-4 right-5 select-none leading-none">{s.n}</span>
              <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Session {s.n}</p>
              <p className="text-white font-semibold text-base mb-2 leading-snug">{s.title}</p>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Value stack */}
        <div ref={stackRef} className="reveal bg-[#1A1D24] rounded-3xl border border-white/10 overflow-hidden">
          <div className="px-8 py-7 border-b border-white/8 text-center">
            <p className="text-white font-semibold text-lg">Everything You Get</p>
          </div>
          <div className="px-8 py-8 space-y-5">
            {OFFER_STACK.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <svg className="w-4 h-4 flex-shrink-0 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/70 text-sm flex-1">{item.label}</span>
                <span className="flex-1 border-t border-dashed border-white/10"/>
                <span className={`text-sm font-semibold flex-shrink-0 ${item.value === "Priceless" ? "text-[#C9A84C]" : "text-white/40 line-through"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="px-8 py-6 bg-white/[0.03] border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white/25 text-xs mb-0.5">Total standalone value</p>
              <p className="text-white/35 text-2xl font-bold line-through">€1,017+</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20">
              Apply for a spot <Arrow/>
            </a>
          </div>
        </div>

        {/* Guarantee */}
        <div ref={guarRef} className="reveal mt-8 rounded-3xl border border-[#C9A84C]/25 bg-gradient-to-br from-[#C9A84C]/8 to-transparent p-8 sm:p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/35 flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-[#C9A84C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
            </svg>
          </div>
          <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">The Guarantee</p>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
            Work With You Until You Win
          </h3>
          <p className="text-white/50 leading-relaxed max-w-2xl mx-auto mb-3 text-sm">
            If you complete the programme and do not receive a European job offer,{" "}
            <strong className="text-white font-semibold">I keep working with you at no extra cost.</strong> More sessions, more coaching, more support, until you do.
          </p>
          <p className="text-white/25 text-sm">
            I am a working recruiter. I know exactly what it takes to get hired here. That is why I can make this promise.
          </p>
        </div>

        {/* WhatsApp */}
        <div className="mt-5 flex items-start gap-4 bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-5">
          <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">💬</span>
          <div>
            <p className="text-white font-semibold text-sm mb-1">WhatsApp access throughout your entire job search</p>
            <p className="text-white/35 text-sm leading-relaxed">
              Not just during sessions. Send me your draft cover letter at 11pm. Ask me if a company is worth targeting. I am in your corner until you land.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-14 text-center">
          <a href="#contact" className="inline-flex items-center gap-2.5 bg-[#C9A84C] text-black font-bold text-base px-10 py-5 rounded-full hover:bg-[#e8c96d] transition-colors shadow-xl shadow-[#C9A84C]/20">
            Apply for a spot <Arrow/>
          </a>
          <p className="text-white/20 text-xs mt-4">Limited to 8 clients per month · 100% personalised</p>
        </div>

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
          <span className="text-xs font-semibold text-white/30 uppercase tracking-[0.3em] whitespace-nowrap">Separate service · Multilingual Recruiting</span>
          <div className="h-px flex-1 bg-white/10"/>
        </div>

        <div ref={ref} className="reveal grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">For companies hiring</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              I recruit multilingual talent <span className="text-[#C9A84C]">across Europe</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-5 text-sm">
              I work independently with companies across Europe placing multilingual professionals in customer support and sales roles. I am based in Sweden and operate remotely across these markets.
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
              <Image src={IMG.athens} alt="European cities where Noelia places multilingual professionals" fill className="object-cover opacity-60" sizes="(max-width:1024px) 100vw, 50vw"/>
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
          <p className="text-gray-400 text-sm leading-relaxed">These come up a lot. If your situation is more specific, just message me directly I actually reply.</p>
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
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">Most people spend months applying and wondering what is wrong. One conversation is usually enough to figure it out. Tell me where you are and what has not been working.</p>
          {["I reply within 24 hours","Sessions on Google Meet","English or Spanish, your call"].map(item => (
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
                <p className="text-red-500 text-xs">Something went wrong. Email me at <a href="mailto:noelia@landineuropecoaching.com" className="underline">noelia@landineuropecoaching.com</a></p>
              )}
              <button type="submit" disabled={status === "sending"} className="w-full bg-[#C9A84C] text-white font-bold py-4 rounded-xl hover:bg-[#b8953f] transition-colors disabled:opacity-50 text-sm shadow-lg shadow-[#C9A84C]/25">
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              <p className="text-center text-xs text-gray-300">Or email: <a href="mailto:noelia@landineuropecoaching.com" className="underline hover:text-gray-500">noelia@landineuropecoaching.com</a></p>
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
          <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved. · <a href="/privacy-policy" className="hover:text-white/40 transition-colors">Privacy Policy</a></p>
          <div className="flex items-center gap-5">
            <p>Stockholm, Sweden</p>
            <a href="https://www.linkedin.com/in/noelia-teruel-ortega/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white/30 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Email capture ────────────────────────────────────────────────────────────
function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  const ref = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/maqgdozn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "Free guide request", message: "Send me the European job search checklist." }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 sm:py-24 px-6 bg-[#F7F4EF] border-t border-gray-200">
      <div ref={ref} className="reveal max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Free resource</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          The European Job Search Checklist
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg mx-auto">
          What recruiters actually check before they call you. 12 things most international applicants miss. I send it straight to your inbox.
        </p>
        {status === "done" ? (
          <div className="space-y-4">
            <p className="text-gray-900 font-semibold text-lg">Here it is. Click below to download.</p>
            <a
              href="/european-job-search-checklist.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-[#b8953f] transition-colors shadow-lg shadow-[#C9A84C]/20"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M3.5 6l3.5 3.5L10.5 6M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Download the checklist
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 bg-white"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-7 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-[#C9A84C] transition-colors disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send it to me"}
            </button>
          </form>
        )}
        {status === "error" && <p className="text-red-500 text-sm mt-3">Something went wrong. Try again or message me directly.</p>}
        <p className="text-gray-400 text-xs mt-4">No spam. One email, the checklist, that is it.</p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <AnnouncementBar/>
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
      <IrresistibleOffer/>
      <ForCompanies/>
      <FAQ/>
      <Contact/>
      <EmailCapture/>
      <Footer/>
    </main>
  );
}
