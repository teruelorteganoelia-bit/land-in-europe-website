"use client";
import { useState, useEffect } from "react";

// ─── palette ─────────────────────────────────────────────────────────────────
// white  #ffffff   |   ink   #0a0a0a   |   gold  #C9A84C
// warm   #F9F7F3   |   mist  #F3F3F1   |   border #E8E5E0

// ─── data ────────────────────────────────────────────────────────────────────
const TICKER = [
  "CV rewritten → 3 interviews in 10 days",
  "Relocated from Brazil → Hired in Barcelona",
  "6 months of silence → First offer in 3 weeks",
  "Career pivot → New role in the Netherlands",
  "LinkedIn optimized → Recruiter reached out in 48 h",
  "Stuck for months → Finance Manager role in Lisbon",
];

const LANGUAGES = ["German","Dutch","Danish","French","Spanish","Italian","Finnish"];

const SERVICES = [
  {
    n:"01", title:"Career Strategy Session", tag:"Get unstuck in 60 minutes",
    body:"We audit your positioning, identify what is blocking you, and build a concrete action plan you can start using the same day. No fluff, no homework for the sake of it.",
    items:["CV and LinkedIn audit","Target market strategy","Personalized action plan","Written follow-up summary"],
  },
  {
    n:"02", title:"CV Rewrite", tag:"A CV that actually gets replies",
    body:"Rewritten for the European market by someone who screens CVs daily. ATS-optimized, achievement-focused, adapted to the roles you are targeting.",
    items:["Full rewrite from scratch","ATS optimization","Achievement-led format","Editable Word version","One revision round"],
  },
  {
    n:"03", title:"LinkedIn Optimization", tag:"Get found before you apply",
    body:"A profile that tells the right story, ranks higher in recruiter searches, and makes the right people stop scrolling and reach out.",
    items:["Headline and summary rewrite","Experience optimization","Keyword strategy","Visibility recommendations"],
  },
  {
    n:"04", title:"Full Coaching Package", tag:"Complete support, start to offer", featured:true,
    body:"Two weeks where we work on everything together. Positioning, documents, targeting, outreach. For professionals who want to move fast and do this properly.",
    items:["Career strategy session","Full CV rewrite","LinkedIn optimization","Target company research","Application and outreach strategy","WhatsApp support throughout"],
  },
];

const TESTIMONIALS = [
  { name:"Valdrin Januzi", role:"International Professional", quote:"I reviewed the final CV and I am very happy with the result. My experience and technical background are represented accurately and professionally. I really appreciate your help throughout this process.", featured:true },
  { name:"Bartosz W.", role:"Senior Finance and Strategic Planning Manager", quote:"A very valuable and concrete session. Focused, honest, straight to the point. I left with clarity I had been missing for months." },
  { name:"Sandrine M.", role:"B2B Event Marketing Manager", quote:"She listened attentively and quickly pinpointed exactly where improvements were needed. It felt like talking to someone who genuinely understood my situation." },
  { name:"Anita Jozsef", role:"Culinary Brand Strategist, Nordics", quote:"She completely transformed how my experience reads to European recruiters. The result is something I am genuinely proud to send out." },
  { name:"Johnwalf Bringoli", role:"Senior Post Producer, AKQA", quote:"Her understanding of the European market is clear and well-informed. She gave me perspective I simply did not have before, and that changed everything." },
];

const FAQS = [
  { q:"Is this for me if I am not based in Europe yet?", a:"Yes. Many of my clients are outside Europe and planning their move. The earlier you work on your positioning, the better your chances when you start applying." },
  { q:"What if I only need help with my CV?", a:"A standalone CV rewrite is one of the services I offer. You do not need to book a session first. Just reach out and describe your situation." },
  { q:"Do you work with all industries and roles?", a:"Yes. My clients come from finance, tech, marketing, operations, creative industries, and more. The positioning and targeting principles apply across fields." },
  { q:"How does a session work?", a:"We connect on Google Meet. You tell me your situation, I ask questions, and we build a clear picture of what is blocking you and what to do next. You leave with a concrete action plan." },
  { q:"How long until I see results?", a:"Most clients start getting interview requests within 2 to 4 weeks of implementing the changes. The Full Coaching Package is designed to get you moving in under two weeks." },
  { q:"Do you offer coaching in Spanish?", a:"Yes. I work in both English and Spanish. If you are more comfortable in Spanish, just reach out in Spanish and we continue from there." },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  useEffect(() => {
    const h = () => setUp(window.scrollY > 24);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${up ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#E8E5E0]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-serif text-xl font-bold text-[#0a0a0a] tracking-tight">Land in Europe</a>
        <nav className="hidden md:flex items-center gap-8">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 bg-[#0a0a0a] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#1a1a1a] transition-colors">
          Get in touch
        </a>
        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-0.5 bg-[#0a0a0a] transition-all ${open?"rotate-45 translate-y-[7px]":""}`}/>
            <span className={`h-0.5 bg-[#0a0a0a] ${open?"opacity-0":""}`}/>
            <span className={`h-0.5 bg-[#0a0a0a] transition-all ${open?"-rotate-45 -translate-y-[7px]":""}`}/>
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-[#E8E5E0] px-6 py-5 flex flex-col gap-5">
          {[["Approach","#approach"],["Services","#services"],["Testimonials","#testimonials"],["About","#about"],["FAQ","#faq"]].map(([l,h]) => (
            <a key={h} href={h} className="text-sm font-medium text-[#0a0a0a]/60" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contact" className="bg-[#0a0a0a] text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-1" onClick={() => setOpen(false)}>Get in touch</a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white pt-28 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center">

        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 border border-[#C9A84C]/40 bg-[#C9A84C]/6 rounded-full px-4 py-1.5 text-xs font-semibold text-[#9A7A28] uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            Career Coaching for International Professionals
          </span>

          <h1 className="font-serif text-5xl md:text-6xl xl:text-[4.75rem] font-bold leading-[1.06] text-[#0a0a0a] mb-8">
            You have the<br/>
            experience.<br/>
            <em className="not-italic text-[#C9A84C]">Let Europe<br/>see it.</em>
          </h1>

          <p className="text-lg text-[#0a0a0a]/50 leading-relaxed mb-10 max-w-xl">
            I help international professionals position themselves, target the right companies, and land roles in Europe.
            As a working European recruiter, I know exactly what the other side of the table is looking for.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <a href="#contact" className="gold-btn inline-flex items-center gap-2 px-8 py-4 text-sm">
              Tell me your situation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-[#E8E5E0] text-[#0a0a0a] font-semibold px-8 py-4 rounded-full hover:bg-[#F9F7F3] transition-colors text-sm">
              See how I help
            </a>
          </div>

          <div className="flex gap-10 pt-8 border-t border-[#E8E5E0]">
            {[["50+","Professionals coached"],["15+","Nationalities"],["3","European markets"]].map(([v,l]) => (
              <div key={l}>
                <p className="font-serif text-3xl font-bold text-[#0a0a0a]">{v}</p>
                <p className="text-xs font-medium text-[#0a0a0a]/40 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo stack */}
        <div className="relative hidden lg:block">
          {/* Background decoration */}
          <div className="absolute -top-8 -right-8 w-80 h-80 rounded-full bg-[#C9A84C]/8 blur-3xl" />

          <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl shadow-black/10 ring-1 ring-black/5">
            <img src="/noelia2.png" alt="Noelia Teruel Ortega" className="w-full h-full object-cover object-top"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"/>
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3.5">
              <p className="font-serif text-sm font-bold text-[#0a0a0a]">Noelia Teruel Ortega</p>
              <p className="text-xs text-[#0a0a0a]/50 mt-0.5">International Recruiter and Career Coach</p>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-12 top-16 bg-white rounded-2xl p-4 shadow-xl ring-1 ring-black/5 max-w-[185px]">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"/>
              <span className="text-[10px] font-semibold text-[#0a0a0a]/40 uppercase tracking-wide">Live recruiter</span>
            </div>
            <p className="text-xs font-semibold text-[#0a0a0a] leading-snug">I screen CVs for European companies every single day</p>
          </div>

          <div className="absolute -right-8 top-1/2 bg-[#0a0a0a] rounded-2xl p-4 shadow-xl max-w-[160px]">
            <p className="text-[10px] font-semibold text-white/40 uppercase tracking-wide mb-1">Coaching in</p>
            <p className="text-sm font-bold text-white">English<br/>and Spanish</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────
function Ticker() {
  const all = [...TICKER,...TICKER];
  return (
    <div className="bg-[#0a0a0a] py-4 overflow-hidden">
      <div className="ticker-inner">
        {all.map((t,i) => (
          <div key={i} className="flex items-center gap-3 px-8 flex-shrink-0">
            <span className="text-[#C9A84C]">✦</span>
            <span className="text-white/60 text-sm font-medium whitespace-nowrap">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Pain ─────────────────────────────────────────────────────────────────────
function Pain() {
  return (
    <section className="py-28 px-6 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-5">Sound familiar?</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-8">
            You have been applying for months.<br/>
            <span className="text-[#0a0a0a]/35">Nothing is working.</span>
          </h2>
          <p className="text-[#0a0a0a]/55 leading-relaxed mb-5">European recruiters scan a CV in under 10 seconds. If your headline does not land immediately, if your experience is listed but not framed as results, if your LinkedIn does not appear in searches — you are invisible. Not because you are not good enough. Because your positioning is not working for this market.</p>
          <p className="text-[#0a0a0a]/55 leading-relaxed">Most international professionals apply to Europe the same way they applied back home. Different market, different rules, different expectations. Nobody tells you this until it is too late. I do.</p>
        </div>
        <div className="space-y-4">
          {[
            { emoji:"📄", title:"Your CV is not European-market ready", body:"Format, structure and language expectations here are different. What worked at home will often not work the same way in Barcelona, Lisbon or Amsterdam." },
            { emoji:"🔍", title:"Recruiters cannot find you on LinkedIn", body:"Without the right keywords and positioning you simply do not appear in searches. Opportunities go to other candidates while you wait." },
            { emoji:"🎯", title:"You are targeting the wrong companies", body:"Sending 100 applications without strategy means 100 silences. The right 10 targeted applications beat that every single time." },
          ].map((c,i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex gap-4 border border-[#E8E5E0] lift">
              <span className="text-2xl flex-shrink-0">{c.emoji}</span>
              <div>
                <h3 className="font-semibold text-[#0a0a0a] text-sm mb-1">{c.title}</h3>
                <p className="text-sm text-[#0a0a0a]/50 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dual Role ────────────────────────────────────────────────────────────────
function DualRole() {
  return (
    <section id="approach" className="py-28 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">My unique advantage</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            I work both sides of the table. Every single day.
          </h2>
          <p className="mt-5 text-white/45 max-w-xl mx-auto leading-relaxed">
            Two roles. One insight no other career coach can give you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Card 1 - Career Coach */}
          <div className="bg-[#C9A84C] rounded-3xl p-10">
            <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-3 py-1.5 text-xs font-bold text-[#0a0a0a] uppercase tracking-widest mb-8">
              Land in Europe
            </div>
            <h3 className="font-serif text-3xl font-bold text-[#0a0a0a] mb-4 leading-snug">Career Coach for International Professionals</h3>
            <p className="text-[#0a0a0a]/65 leading-relaxed mb-8">I help professionals from all over the world position themselves and land roles across Europe. CV rewrites, LinkedIn optimization, career strategy, and full coaching packages — all designed specifically for the European job market.</p>
            <ul className="space-y-2.5">
              {["Professionals relocating to Europe","Candidates stuck in their search","People applying without getting interviews","English and Spanish coaching"].map(i => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-medium text-[#0a0a0a]/75">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3L11.5 4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {i}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 - Recruiter */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-bold text-white/60 uppercase tracking-widest mb-8">
              Cross Border Talents
            </div>
            <h3 className="font-serif text-3xl font-bold text-white mb-4 leading-snug">International Recruiter for European Companies</h3>
            <p className="text-white/45 leading-relaxed mb-8">I recruit multilingual talent for companies in Spain, Greece, and Portugal. Every week I review dozens of CVs, conduct interviews, and work directly with hiring managers. This is where my coaching insight comes from.</p>
            <div className="mb-6">
              <p className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Profiles I recruit for</p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map(l => (
                  <span key={l} className="bg-white/8 border border-white/10 text-white/60 text-xs font-semibold px-3 py-1.5 rounded-full">{l} speakers</span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/8">
              <span className="text-[#C9A84C] flex-shrink-0 text-lg">💡</span>
              <p className="text-xs text-white/45 leading-relaxed">This is a separate service for companies. If you are a professional looking for career coaching, Land in Europe is for you.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-white/4 border border-white/8 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="font-semibold text-white text-sm mb-1">Why this matters for your job search</p>
            <p className="text-white/40 text-sm leading-relaxed">Because I recruit daily, I know which CVs get opened, which LinkedIn profiles appear in searches, and what hiring managers in Spain, Greece and Portugal actually discuss in debrief calls. I bring all of that into every coaching session.</p>
          </div>
          <a href="#contact" className="gold-btn flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm">
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Services</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a]">How I can help you</h2>
          <p className="mt-4 text-[#0a0a0a]/45 max-w-md mx-auto">Every service is adapted to your situation, market, and target role. No templates, no generic advice.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map(s => (
            <div key={s.n} className={`relative rounded-3xl p-9 flex flex-col border lift ${s.featured ? "bg-[#0a0a0a] border-[#0a0a0a]" : "bg-[#F9F7F3] border-[#E8E5E0]"}`}>
              {s.featured && <span className="absolute top-7 right-7 gold-btn text-xs px-3 py-1.5">Most popular</span>}
              <div className="flex items-start justify-between mb-6">
                <span className={`font-serif text-6xl font-bold select-none leading-none ${s.featured?"text-white/8":"text-[#0a0a0a]/6"}`}>{s.n}</span>
              </div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-2">{s.tag}</p>
              <h3 className={`font-serif text-2xl font-bold mb-4 ${s.featured?"text-white":"text-[#0a0a0a]"}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed mb-7 flex-1 ${s.featured?"text-white/45":"text-[#0a0a0a]/50"}`}>{s.body}</p>
              <ul className="space-y-2.5 mb-8">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={s.featured?"text-white/55":"text-[#0a0a0a]/60"}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-full transition-colors ${s.featured?"gold-btn":"bg-[#0a0a0a] text-white hover:bg-[#1a1a1a]"}`}>
                Get started
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
    <section className="py-28 px-6 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Process</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a]">How it works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n:"1", t:"Reach out", b:"Send me a message describing where you are, what you are targeting, and what is not working. No long forms, no intake documents." },
            { n:"2", t:"We align and begin", b:"I recommend the service that fits your situation. Once confirmed we schedule and start. Everything moves quickly." },
            { n:"3", t:"You move forward", b:"You leave with clarity, stronger documents, and a concrete plan. Most clients see interview requests within 2 to 4 weeks." },
          ].map((s,i) => (
            <div key={i} className="relative">
              <div className="w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center mb-7 shadow-lg">
                <span className="font-serif text-xl font-bold text-[#C9A84C]">{s.n}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a0a0a] mb-3">{s.t}</h3>
              <p className="text-[#0a0a0a]/50 text-sm leading-relaxed">{s.b}</p>
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
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="absolute -inset-6 bg-[#C9A84C]/6 rounded-[3rem] blur-2xl"/>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/8 ring-1 ring-black/5">
            <img src="/noelia2.png" alt="Noelia Teruel Ortega" className="w-full h-full object-cover object-top"/>
          </div>
          <div className="absolute -bottom-6 -right-4 bg-[#0a0a0a] text-white rounded-2xl px-6 py-5 shadow-2xl max-w-[220px]">
            <p className="text-[10px] text-white/35 uppercase tracking-widest font-medium mb-1">Education</p>
            <p className="text-sm font-semibold leading-snug">Master's in Human Resources, European University of Valencia</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-5">About me</p>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-[#0a0a0a] leading-tight mb-8">Hi,<br/>I'm Noelia</h2>
          <div className="space-y-4 text-[#0a0a0a]/55 leading-relaxed text-[15px]">
            <p>I am an international recruiter and career coach. I work daily with European companies looking for talent, and with professionals trying to break into or move within this market.</p>
            <p>I built the coaching side because I kept meeting people whose experience was real but whose positioning was not landing. Strong backgrounds being overlooked because of a CV structure, a missing keyword, or a LinkedIn profile that did not tell the right story.</p>
            <p>That felt like a problem I could fix. Because I see both sides of it every day.</p>
            <p>I coach in <strong className="text-[#0a0a0a] font-semibold">English and Spanish</strong>, and I work with people from all over the world. My focus markets are Barcelona, Lisbon, and Greece.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {["Active European recruiter","Multilingual talent specialist","English and Spanish coaching","Master's in Human Resources"].map(item => (
              <div key={item} className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="text-[#C9A84C]" width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2L7.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="text-sm text-[#0a0a0a]/60">{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 mt-10 bg-[#0a0a0a] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#1a1a1a] transition-colors shadow-lg">
            Work with me
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-6 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a]">What clients say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {/* Featured */}
          <div className="md:row-span-2 bg-[#0a0a0a] rounded-3xl p-8 flex flex-col">
            <div className="font-serif text-5xl text-[#C9A84C]/25 leading-none mb-4">"</div>
            <p className="font-serif text-xl font-semibold text-white leading-relaxed flex-1 mb-8">{TESTIMONIALS[0].quote}</p>
            <div className="border-t border-white/10 pt-6">
              <p className="font-bold text-white text-sm">{TESTIMONIALS[0].name}</p>
              <p className="text-white/35 text-xs mt-0.5">{TESTIMONIALS[0].role}</p>
            </div>
          </div>
          {TESTIMONIALS.slice(1).map((t,i) => (
            <div key={i} className="bg-white border border-[#E8E5E0] rounded-3xl p-7 flex flex-col lift">
              <div className="font-serif text-4xl text-[#C9A84C]/25 leading-none mb-3">"</div>
              <p className="text-[#0a0a0a]/65 text-sm leading-relaxed flex-1 mb-6">{t.quote}</p>
              <div className="border-t border-[#E8E5E0] pt-5">
                <p className="font-semibold text-[#0a0a0a] text-sm">{t.name}</p>
                <p className="text-[#0a0a0a]/35 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  return (
    <section id="faq" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-5">Common questions</h2>
          <p className="text-[#0a0a0a]/50 leading-relaxed text-sm">Still not sure? These are the questions I get most often. If yours is not here, just ask me directly.</p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-8 bg-[#0a0a0a] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors text-sm">Ask me directly</a>
        </div>
        <div className="space-y-2.5">
          {FAQS.map((f,i) => (
            <div key={i} className="border border-[#E8E5E0] rounded-2xl overflow-hidden bg-[#F9F7F3]">
              <button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#F3F1ED] transition-colors" onClick={() => setOpen(open===i?null:i)}>
                <span className="font-semibold text-[#0a0a0a] text-sm">{f.q}</span>
                <div className={`w-7 h-7 rounded-full bg-[#0a0a0a] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${open===i?"rotate-45":""}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </button>
              {open===i && <div className="px-6 pb-5 pt-4 border-t border-[#E8E5E0] text-[#0a0a0a]/55 text-sm leading-relaxed">{f.a}</div>}
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
    } catch{setStatus("error");}
  };
  const inp = "w-full bg-white border border-[#E8E5E0] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#0a0a0a]/25 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-2 focus:ring-[#C9A84C]/10 transition-all";
  return (
    <section id="contact" className="py-28 px-6 bg-[#F9F7F3]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Get in touch</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight mb-6">Tell me your situation</h2>
          <p className="text-[#0a0a0a]/50 leading-relaxed mb-10 max-w-md text-sm">Describe where you are in your search and what is not working. I will read it carefully and let you know exactly how I can help.</p>
          {["I typically reply within 24 hours","Sessions happen over Google Meet","English and Spanish, your choice"].map(item => (
            <div key={item} className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 rounded-full bg-[#C9A84C]/12 flex items-center justify-center flex-shrink-0">
                <svg className="text-[#C9A84C]" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-sm text-[#0a0a0a]/60">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-3xl p-8 border border-[#E8E5E0] shadow-sm">
          {status==="sent" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] flex items-center justify-center mx-auto mb-5">
                <svg className="text-[#C9A84C]" width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11.5l4 4L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0a0a0a] mb-2">Message received</h3>
              <p className="text-[#0a0a0a]/45 text-sm">I will be back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={sub} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-xs font-semibold text-[#0a0a0a]/40 mb-1.5">Name *</label><input required name="name" value={form.name} onChange={ch} placeholder="Your name" className={inp}/></div>
                <div><label className="block text-xs font-semibold text-[#0a0a0a]/40 mb-1.5">Email *</label><input required type="email" name="email" value={form.email} onChange={ch} placeholder="you@email.com" className={inp}/></div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0a0a0a]/40 mb-1.5">What are you looking for?</label>
                <select name="service" value={form.service} onChange={ch} className={inp}>
                  <option value="">Select a service (optional)</option>
                  <option value="session">Career Strategy Session</option>
                  <option value="cv">CV Rewrite</option>
                  <option value="linkedin">LinkedIn Optimization</option>
                  <option value="package">Full Coaching Package</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0a0a0a]/40 mb-1.5">Tell me your situation *</label>
                <textarea required name="message" value={form.message} onChange={ch} rows={5} placeholder="Where are you in your job search? What is not working? What are you targeting?" className={inp+" resize-none"}/>
              </div>
              {status==="error" && <p className="text-red-500 text-xs">Something went wrong. Email me at <a href="mailto:teruelorteganoelia@gmail.com" className="underline">teruelorteganoelia@gmail.com</a></p>}
              <button type="submit" disabled={status==="sending"} className="w-full gold-btn py-4 rounded-xl text-sm disabled:opacity-50">
                {status==="sending"?"Sending...":"Send message"}
              </button>
              <p className="text-center text-xs text-[#0a0a0a]/30">Or email: <a href="mailto:teruelorteganoelia@gmail.com" className="underline hover:text-[#0a0a0a]/50">teruelorteganoelia@gmail.com</a></p>
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
    <footer className="bg-[#0a0a0a] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/8">
          <div>
            <p className="font-serif text-xl font-bold text-white mb-1">Land in Europe</p>
            <p className="text-sm text-white/35">Career Coaching for International Professionals</p>
          </div>
          <div className="flex flex-wrap gap-8">
            {[["Services","#services"],["About","#about"],["Testimonials","#testimonials"],["FAQ","#faq"],["Contact","#contact"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm text-white/35 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/20">
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
      <Pain/>
      <DualRole/>
      <Services/>
      <HowItWorks/>
      <About/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </main>
  );
}
