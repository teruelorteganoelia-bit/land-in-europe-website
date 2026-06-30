"use client";
import { useState, useEffect } from "react";

// ─── palette ─────────────────────────────────────────────────────────────────
// bg      #080808    surface  #111111    border  rgba(240,237,232,0.08)
// text    #f0ede8    muted    #6b6b6b    gold    #C9A84C

const GOLD = "#C9A84C";

const TICKER = [
  "CV rewritten → 3 interviews in 10 days",
  "Relocated from Brazil → Hired in Barcelona",
  "6 months of silence → First offer in 3 weeks",
  "Career pivot → New role in the Netherlands",
  "LinkedIn optimized → Recruiter reached out in 48 h",
  "Stuck for months → Finance Manager, Lisbon",
];

const LANGUAGES = ["German","Dutch","Danish","Spanish","Italian","Portuguese","French","Finnish","Norwegian"];

const SERVICES = [
  { n:"01", title:"Career Strategy Session", tag:"60 minutes. Concrete plan.",
    body:"We audit your positioning, identify what is blocking you, and build an action plan you can start using immediately.",
    items:["CV and LinkedIn audit","Target market strategy","Personalized action plan","Written follow-up summary"] },
  { n:"02", title:"CV Rewrite", tag:"Built for the European market.",
    body:"Rewritten by someone who screens CVs daily. ATS-optimized, achievement-focused, adapted to the roles you are targeting.",
    items:["Full rewrite from scratch","ATS optimization","Achievement-led format","Editable Word version","One revision included"] },
  { n:"03", title:"LinkedIn Optimization", tag:"Get found before you apply.",
    body:"A profile that ranks higher in recruiter searches and makes the right people stop and reach out to you.",
    items:["Headline and summary rewrite","Experience optimization","Keyword strategy","Visibility recommendations"] },
  { n:"04", title:"Full Coaching Package", tag:"Start to offer, two weeks.", featured:true,
    body:"Complete support covering positioning, documents, targeting, and outreach. For professionals who want to move fast.",
    items:["Career strategy session","Full CV rewrite","LinkedIn optimization","Target company research","Application strategy","WhatsApp support throughout"] },
];

const TESTIMONIALS = [
  { name:"Valdrin Januzi", role:"International Professional",
    quote:"I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help.", featured:true },
  { name:"Bartosz W.", role:"Senior Finance and Strategic Planning Manager",
    quote:"A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months." },
  { name:"Sandrine M.", role:"B2B Event Marketing Manager",
    quote:"She quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation and knew exactly how to fix it." },
  { name:"Anita Jozsef", role:"Culinary Brand Strategist, Nordics",
    quote:"She completely transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out." },
  { name:"Johnwalf Bringoli", role:"Senior Post Producer, AKQA",
    quote:"Her understanding of the European market is clear and well-informed. She gave me perspective I simply did not have before." },
];

const FAQS = [
  { q:"Is this for me if I am not in Europe yet?", a:"Yes. Many of my clients are outside Europe and planning their move. The earlier you work on positioning, the better your chances when you start applying." },
  { q:"What if I only need help with my CV?", a:"A standalone CV rewrite is available without booking a session first. Just reach out and describe your situation." },
  { q:"Do you work with all industries?", a:"Yes. Finance, tech, marketing, operations, creative industries and more. The positioning and targeting principles apply across fields." },
  { q:"How does a session work?", a:"We connect on Google Meet. You tell me your situation, I ask questions, and we build a clear picture of what is blocking you. You leave with a concrete action plan." },
  { q:"How long until I see results?", a:"Most clients start getting interview requests within 2 to 4 weeks of implementing the changes. The Full Package is designed to get you moving in under two weeks." },
  { q:"Do you coach in Spanish?", a:"Yes. I work in both English and Spanish. Just reach out in whichever language feels natural." },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${sc ? "bg-[#080808]/95 backdrop-blur-xl border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base font-bold text-[#f0ede8] tracking-tight">Land in Europe</a>
        <nav className="hidden md:flex items-center gap-8">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-[#f0ede8]/40 hover:text-[#f0ede8] transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
          Get in touch
        </a>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-px bg-[#f0ede8] transition-all ${open?"rotate-45 translate-y-[6px]":""}`}/>
            <span className={`h-px bg-[#f0ede8] ${open?"opacity-0":""}`}/>
            <span className={`h-px bg-[#f0ede8] transition-all ${open?"-rotate-45 -translate-y-[6px]":""}`}/>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-5 flex flex-col gap-5">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-[#f0ede8]/50" onClick={()=>setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="border border-[#C9A84C]/50 text-[#C9A84C] text-sm font-semibold px-5 py-3 rounded-full text-center mt-1" onClick={()=>setOpen(false)}>Get in touch</a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16 pb-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto w-full">

        {/* Top row: label + photo */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em]">Career Coach · International Recruiter</span>
          </div>
          {/* Photo — small, elegant, top right */}
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-1 ring-white/10 flex-shrink-0">
            <img src="/noelia2.png" alt="Noelia" className="w-full h-full object-cover object-top"/>
          </div>
        </div>

        {/* Big headline */}
        <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] font-bold text-[#f0ede8] leading-[1.02] mb-8">
          You have the<br/>
          experience.<br/>
          <span style={{color:GOLD}}>Let Europe<br/>see it.</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-end mt-10">
          <p className="text-lg text-[#f0ede8]/40 leading-relaxed max-w-lg">
            I help international professionals position themselves, target the right companies, and land roles in Europe.
            As a working European recruiter, I know exactly what the other side of the table is looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#080808] font-bold px-7 py-3.5 rounded-full hover:bg-[#DDB95E] transition-colors text-sm">
              Tell me your situation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 border border-white/10 text-[#f0ede8]/70 font-semibold px-7 py-3.5 rounded-full hover:border-white/20 hover:text-[#f0ede8] transition-colors text-sm">
              See services
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-8 border-t border-white/8 grid grid-cols-3 md:grid-cols-3 gap-8">
          {[["50+","Professionals coached"],["15+","Nationalities"],["3","European markets"]].map(([v,l]) => (
            <div key={l}>
              <p className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8]">{v}</p>
              <p className="text-xs text-[#f0ede8]/30 mt-1 font-medium">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const all = [...TICKER,...TICKER];
  return (
    <div className="border-y border-white/6 py-4 overflow-hidden bg-[#0d0d0d]">
      <div className="ticker-inner">
        {all.map((t,i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <span className="text-[#C9A84C] text-sm">✦</span>
            <span className="text-[#f0ede8]/35 text-sm font-medium whitespace-nowrap">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Approach ─────────────────────────────────────────────────────────────────
function Approach() {
  return (
    <section id="approach" className="py-28 px-6 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Approach</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">Why this is different</h2>
          </div>
          <p className="text-[#f0ede8]/40 leading-relaxed self-end text-base max-w-xl">
            Most career coaches give you templates and theory. I give you insider knowledge from someone who is actively recruiting for European companies right now. That is the difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {[
            { n:"01", t:"I work both sides", b:"I recruit for European companies and coach candidates. I know which CVs get opened and why because I open them every day." },
            { n:"02", t:"No templates", b:"Every session starts with your specific situation, your industry, your market. The output fits you, not a formula someone else used." },
            { n:"03", t:"I find what is blocking you", b:"Sometimes one sentence, one structure change, one clearer story completely transforms your chances. That is what I look for." },
          ].map((c,i) => (
            <div key={i} className="bg-[#080808] p-8 md:p-10 hover:bg-[#0f0f0f] transition-colors">
              <p className="text-xs font-mono text-[#f0ede8]/15 mb-8">{c.n}</p>
              <h3 className="text-lg font-semibold text-[#f0ede8] mb-3">{c.t}</h3>
              <p className="text-sm text-[#f0ede8]/40 leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Services</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">How I can help</h2>
          </div>
          <p className="text-[#f0ede8]/40 leading-relaxed self-end text-base max-w-xl">Every service is adapted to your specific situation and target market. No generic scripts, no templates.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map(s => (
            <div key={s.n} className={`relative rounded-2xl p-8 flex flex-col card-border ${s.featured?"bg-[#C9A84C]/8":"bg-[#111111]"}`}>
              {s.featured && (
                <span className="absolute top-6 right-6 border border-[#C9A84C]/40 text-[#C9A84C] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs font-mono text-[#f0ede8]/15">{s.n}</span>
              </div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-2">{s.tag}</p>
              <h3 className="text-xl font-bold text-[#f0ede8] mb-4">{s.title}</h3>
              <p className="text-sm text-[#f0ede8]/40 leading-relaxed mb-7 flex-1">{s.body}</p>
              <ul className="space-y-2 mb-8">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7l3 3L11.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[#f0ede8]/50">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-colors ${s.featured?"bg-[#C9A84C] text-[#080808] hover:bg-[#DDB95E]":"border border-white/10 text-[#f0ede8] hover:border-white/20"}`}>
                Get started
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
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
    <section className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Process</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">How it works</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { n:"01", t:"Reach out", b:"Send me a message describing where you are, what you are targeting, and what is not working. No long forms." },
            { n:"02", t:"We align", b:"I recommend the service that fits your situation. Once confirmed we schedule and start immediately." },
            { n:"03", t:"You move forward", b:"You leave with clarity, stronger documents, and a concrete plan. Most clients see results within 2 to 4 weeks." },
          ].map((s,i) => (
            <div key={i} className="bg-[#111111] rounded-2xl p-8 card-border">
              <p className="text-xs font-mono text-[#f0ede8]/15 mb-8">{s.n}</p>
              <h3 className="text-lg font-semibold text-[#f0ede8] mb-3">{s.t}</h3>
              <p className="text-sm text-[#f0ede8]/40 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Photo — contained, elegant */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-white/8 max-w-sm">
              <img src="/noelia2.png" alt="Noelia Teruel Ortega" className="w-full h-full object-cover object-top"/>
            </div>
            <div className="absolute bottom-6 left-6 right-6 max-w-[calc(24rem-3rem)] bg-[#0d0d0d]/95 backdrop-blur-sm border border-white/8 rounded-xl px-5 py-4">
              <p className="text-xs text-[#f0ede8]/30 uppercase tracking-widest mb-1">Education</p>
              <p className="text-sm font-semibold text-[#f0ede8] leading-snug">Master's in Human Resources, European University of Valencia</p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:pt-4">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">About</p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#f0ede8] leading-tight mb-8">
              Hi,<br/>I'm Noelia
            </h2>
            <div className="space-y-4 text-[#f0ede8]/45 leading-relaxed text-sm">
              <p>I am an international recruiter and career coach. I work daily with European companies looking for talent, and with professionals trying to break into or move within this market.</p>
              <p>I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing. Strong backgrounds overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.</p>
              <p>That felt like a problem I could fix. Because I see both sides of it every day.</p>
              <p>I coach in <strong className="text-[#f0ede8] font-semibold">English and Spanish</strong>, and I work with people from all over the world.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3">
              {["Active European recruiter","Multilingual talent specialist","English and Spanish coaching","Master's in Human Resources"].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="text-[#C9A84C] text-xs">✓</span>
                  <span className="text-sm text-[#f0ede8]/45">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-[#C9A84C] text-[#080808] font-bold px-7 py-3.5 rounded-full hover:bg-[#DDB95E] transition-colors text-sm">
              Work with me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-16">
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight">What clients say</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Featured */}
          <div className="md:row-span-2 bg-[#C9A84C]/10 border border-[#C9A84C]/15 rounded-2xl p-8 flex flex-col">
            <div className="font-serif text-6xl text-[#C9A84C]/20 leading-none mb-4">"</div>
            <p className="font-serif text-xl font-semibold text-[#f0ede8] leading-relaxed flex-1 mb-8">{TESTIMONIALS[0].quote}</p>
            <div className="border-t border-white/8 pt-6">
              <p className="font-bold text-[#f0ede8] text-sm">{TESTIMONIALS[0].name}</p>
              <p className="text-[#f0ede8]/35 text-xs mt-0.5">{TESTIMONIALS[0].role}</p>
            </div>
          </div>
          {TESTIMONIALS.slice(1).map((t,i) => (
            <div key={i} className="bg-[#111111] rounded-2xl p-7 flex flex-col card-border">
              <div className="font-serif text-4xl text-[#C9A84C]/20 leading-none mb-3">"</div>
              <p className="text-[#f0ede8]/50 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="border-t border-white/6 pt-5">
                <p className="font-semibold text-[#f0ede8] text-sm">{t.name}</p>
                <p className="text-[#f0ede8]/25 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── For Companies & Candidates ───────────────────────────────────────────────
function ForCompanies() {
  return (
    <section className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Also hiring?</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight mb-6">
              I recruit multilingual talent across Europe
            </h2>
            <p className="text-[#f0ede8]/40 leading-relaxed mb-8 text-sm">
              Through <strong className="text-[#f0ede8]/70 font-semibold">Cross Border Talents</strong>, I work with companies in Barcelona, Lisbon, and Greece placing customer support and multilingual professionals. This is a separate service from coaching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
                I am a hiring company
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/10 text-[#f0ede8]/60 text-sm font-semibold px-6 py-3 rounded-full hover:border-white/20 hover:text-[#f0ede8] transition-colors">
                I am a candidate
              </a>
            </div>
          </div>

          {/* Right: languages grid */}
          <div>
            <p className="text-xs font-semibold text-[#f0ede8]/25 uppercase tracking-[0.2em] mb-5">Currently placing native and fluent speakers of</p>
            <div className="grid grid-cols-3 gap-3">
              {LANGUAGES.map(l => (
                <div key={l} className="bg-[#111111] border border-white/6 rounded-xl px-4 py-3.5 flex items-center gap-2.5 hover:border-[#C9A84C]/25 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0"/>
                  <span className="text-sm font-medium text-[#f0ede8]/65">{l}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#f0ede8]/20 mt-6 leading-relaxed">
              Tell me your language and location if you are a candidate, or your open roles if you are a company. I will let you know if I can help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight mb-5">Common questions</h2>
          <p className="text-[#f0ede8]/35 text-sm leading-relaxed">Still not sure? These are the questions I get most. If yours is not here, just ask me directly.</p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-7 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
            Ask me directly
          </a>
        </div>
        <div className="space-y-2">
          {FAQS.map((f,i) => (
            <div key={i} className="bg-[#111111] rounded-xl overflow-hidden card-border">
              <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/2 transition-colors" onClick={()=>setOpen(open===i?null:i)}>
                <span className="font-medium text-[#f0ede8] text-sm">{f.q}</span>
                <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${open===i?"rotate-45":""}`}>
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M4.5 1.5v6M1.5 4.5h6" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round"/></svg>
                </div>
              </button>
              {open===i && <div className="px-6 pb-5 pt-1 border-t border-white/5 text-[#f0ede8]/40 text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({name:"",email:"",service:"",message:""});
  const ch = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => setForm({...form,[e.target.name]:e.target.value});
  const sub = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/maqgdozn",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({...form,_replyto:form.email})});
      if(r.ok){setStatus("sent");setForm({name:"",email:"",service:"",message:""});}else setStatus("error");
    }catch{setStatus("error");}
  };
  const inp = "w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3 text-sm text-[#f0ede8] placeholder:text-[#f0ede8]/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all";
  return (
    <section id="contact" className="py-28 px-6 bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Get in touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#f0ede8] leading-tight mb-6">Tell me your situation</h2>
          <p className="text-[#f0ede8]/40 text-sm leading-relaxed mb-10 max-w-md">Describe where you are in your search and what is not working. I will read it and let you know exactly how I can help.</p>
          {["I typically reply within 24 hours","Sessions happen over Google Meet","English and Spanish, your choice"].map(item => (
            <div key={item} className="flex items-center gap-3 mb-4">
              <span className="text-[#C9A84C] text-xs">→</span>
              <span className="text-[#f0ede8]/40 text-sm">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#111111] rounded-2xl p-8 border border-white/6">
          {status==="sent"?(
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full border border-[#C9A84C]/30 flex items-center justify-center mx-auto mb-5">
                <svg className="text-[#C9A84C]" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 10.5l4 4L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#f0ede8] mb-2">Message received</h3>
              <p className="text-[#f0ede8]/35 text-sm">I will be back to you within 24 hours.</p>
            </div>
          ):(
            <form onSubmit={sub} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-[10px] font-semibold text-[#f0ede8]/25 uppercase tracking-widest mb-1.5">Name *</label><input required name="name" value={form.name} onChange={ch} placeholder="Your name" className={inp}/></div>
                <div><label className="block text-[10px] font-semibold text-[#f0ede8]/25 uppercase tracking-widest mb-1.5">Email *</label><input required type="email" name="email" value={form.email} onChange={ch} placeholder="you@email.com" className={inp}/></div>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#f0ede8]/25 uppercase tracking-widest mb-1.5">Service</label>
                <select name="service" value={form.service} onChange={ch} className={inp}>
                  <option value="">Select a service (optional)</option>
                  <option value="session">Career Strategy Session</option>
                  <option value="cv">CV Rewrite</option>
                  <option value="linkedin">LinkedIn Optimization</option>
                  <option value="package">Full Coaching Package</option>
                  <option value="company">I am a hiring company</option>
                  <option value="candidate">I am a multilingual candidate</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#f0ede8]/25 uppercase tracking-widest mb-1.5">Tell me your situation *</label>
                <textarea required name="message" value={form.message} onChange={ch} rows={5} placeholder="Where are you in your job search? What is not working? What are you targeting?" className={inp+" resize-none"}/>
              </div>
              {status==="error"&&<p className="text-red-400 text-xs">Something went wrong. Email me at <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a></p>}
              <button type="submit" disabled={status==="sending"} className="w-full bg-[#C9A84C] text-[#080808] font-bold py-3.5 rounded-xl hover:bg-[#DDB95E] transition-colors disabled:opacity-50 text-sm">
                {status==="sending"?"Sending...":"Send message"}
              </button>
              <p className="text-center text-xs text-[#f0ede8]/20">Or email: <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-[#f0ede8]/40">teruelorteganoelia@gmail.com</a></p>
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
    <footer className="bg-[#080808] border-t border-white/5 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div>
            <p className="text-base font-bold text-[#f0ede8] mb-1">Land in Europe</p>
            <p className="text-xs text-[#f0ede8]/25">Career Coaching for International Professionals</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {[["Services","#services"],["About","#about"],["Testimonials","#testimonials"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm text-[#f0ede8]/25 hover:text-[#f0ede8] transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#f0ede8]/15">
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
