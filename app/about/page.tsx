import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "About Noelia Teruel Ortega | Career Coach for International Professionals in Europe",
  description:
    "Noelia Teruel Ortega is a career coach and international recruiter based in Stockholm. She helps international professionals get hired in Europe with CV rewrites, LinkedIn optimization, and 1:1 coaching.",
  keywords:
    "career coach Europe, career coach for expats, career coach internationals, career coach Stockholm, international recruiter Europe, job search coach Europe",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Noelia | Career Coach for International Professionals in Europe",
    description:
      "Recruiter and career coach based in Stockholm. Helping international professionals get hired in Europe.",
    url: "/about",
  },
};

const CREDENTIALS = [
  "Independent International Recruiter specializing in multilingual talent",
  "HR and recruitment background since 2023",
  "Degree in Economics, University of Valencia",
  "Master's in Human Resources, European University of Valencia",
  "Based in Stockholm, working across European markets",
  "Coached 50+ professionals from 15+ nationalities",
  "Works in English and Spanish",
];

const FAQS = [
  {
    q: "Do you only work with people targeting Spain, Portugal and Greece?",
    a: "No. The coaching and document work applies across Europe. I have worked with clients targeting the Netherlands, Germany, Sweden, France, Spain, Portugal and more.",
  },
  {
    q: "Do I need to be based in Europe already?",
    a: "No. Many clients are outside Europe and preparing their move. The earlier you work on your CV and LinkedIn, the better your chances when you start applying. Distance is not a barrier.",
  },
  {
    q: "Can we work together in Spanish?",
    a: "Yes. English and Spanish, whichever feels more natural. Just message me in the language you prefer.",
  },
  {
    q: "What if I only need one thing, like a CV rewrite?",
    a: "Every service is available on its own. You do not need to commit to a full package to work with me. Tell me what you need and we go from there.",
  },
];

function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">About</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                Hi, I am <span className="text-[#C9A84C]">Noelia.</span>
              </h1>
              <div className="space-y-5 text-gray-400 leading-relaxed text-base">
                <p>I am a career coach and international recruiter based in Stockholm, Sweden.</p>
                <p>I have a degree in Economics from the University of Valencia and a Master's in Human Resources from the European University of Valencia. I started working in HR and recruitment in 2023 and since then I have worked inside hiring processes, screened candidates, and learned exactly how companies in Europe decide who gets called and who gets skipped.</p>
                <p>The coaching was not planned. I wrote something honest on LinkedIn about how hiring really works in Europe and the messages did not stop coming. People from everywhere, all stuck, all asking the same questions.</p>
                <p>I started answering because I could help. Not with theory. With what I actually see every day working inside recruitment. One conversation at a time.</p>
                <p>Helping people land in Europe is genuinely what makes me happy. That is not something I say because it sounds good. It is just true.</p>
              </div>
              <div className="flex items-center gap-4 mt-10 flex-wrap">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors text-sm"
                >
                  Work with me <Arrow />
                </Link>
                <a
                  href="https://www.linkedin.com/in/noelia-teruel-ortega/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="relative max-w-sm mx-auto lg:mx-0 w-full">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/8 ring-1 ring-gray-100 relative">
                <Image
                  src="/noelia-photo.png"
                  alt="Noelia Teruel Ortega, career coach and international recruiter based in Stockholm, Sweden"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width:1024px) 100vw, 480px"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 bg-gray-900 text-white rounded-xl px-5 py-4 shadow-xl">
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-0.5">Based in</p>
                <p className="text-sm font-semibold">Stockholm, Sweden</p>
              </div>
            </div>
          </div>
        </section>

        {/* My background */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Background</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                Why I can help you.
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>I have a degree in Economics from the University of Valencia and a Master's in Human Resources from the European University of Valencia. My career started in administrative and recruitment roles in Valencia, where I learned how hiring actually works from the inside.</p>
                <p>I have worked as an international recruiter placing multilingual professionals in companies across Europe. I searched for candidates, reviewed profiles, and learned exactly what makes a hiring manager stop and pay attention.</p>
                <p>That recruiter perspective is exactly what I bring to every coaching session. I am not teaching theory. I am telling you what I actually see.</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Credentials</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
                In brief.
              </h2>
              <ul className="space-y-4">
                {CREDENTIALS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why this matters for you */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">Why it matters</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight mb-12">
              What this means for you.
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { n:"01", t:"I know how recruiters think", b:"Because I am one. I know what they search for, what they skip, and what makes them pick up the phone." },
                { n:"02", t:"No generic advice", b:"Your background, your target country, your industry. The work we do together is built around your specific situation." },
                { n:"03", t:"I have worked with 50+ professionals", b:"From 15+ nationalities. I have seen what works and what does not across very different profiles and markets." },
              ].map((c) => (
                <div key={c.n} className="bg-gray-50 rounded-2xl border border-gray-100 p-7 relative overflow-hidden">
                  <span className="font-serif font-bold text-5xl text-gray-100 absolute top-4 right-5 select-none leading-none">{c.n}</span>
                  <p className="text-[#C9A84C] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">{c.n}</p>
                  <p className="text-gray-900 font-semibold text-sm mb-2">{c.t}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Viral post */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">How it started</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                One post changed everything.
              </h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>I wrote a post on LinkedIn about what I was seeing from the recruiter side. No strategy behind it. I just wanted to be honest about what actually happens when a CV lands on a desk.</p>
                <p>I did not expect what came next. Messages from people all over the world. Professionals with real experience, strong backgrounds, years of results. All saying the same thing. They had been applying for months and nobody was replying.</p>
                <p>I started answering every single one. And somewhere in those conversations I realised this was what I wanted to do. Not because I saw a business opportunity. Because I could actually help. And that felt like something worth doing.</p>
                <p>Every message I answer now, I think about that moment. It has not changed.</p>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="text-center">
                  <p className="font-serif font-bold text-3xl text-gray-900">215+</p>
                  <p className="text-xs text-gray-400 mt-1">Likes</p>
                </div>
                <div className="w-px h-10 bg-gray-200"/>
                <div className="text-center">
                  <p className="font-serif font-bold text-3xl text-gray-900">27</p>
                  <p className="text-xs text-gray-400 mt-1">Comments</p>
                </div>
                <div className="w-px h-10 bg-gray-200"/>
                <div className="text-center">
                  <p className="font-serif font-bold text-3xl text-gray-900">3</p>
                  <p className="text-xs text-gray-400 mt-1">Reposts</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-gray-100">
                <Image
                  src="/firstpostviral.png"
                  alt="The LinkedIn post that started Land in Europe Coaching"
                  width={500}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-8 h-px bg-[#C9A84C] mb-6 mx-auto" />
            <p className="text-gray-500 text-base leading-relaxed mb-6 italic">
              "Her understanding of the Spanish and broader European market is clear and well-informed. The session was structured, practical, and grounded in real insight rather than generic advice."
            </p>
            <p className="font-semibold text-gray-900 text-sm">Johnwalf Bringoli</p>
            <p className="text-gray-400 text-xs mt-1">Senior Post Producer, AKQA</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4 text-center">Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Good to know.
            </h2>
            <div className="space-y-5">
              {FAQS.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
                  <p className="font-semibold text-gray-900 text-sm mb-3">{f.q}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Ready to get started?
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              Tell me where you are in your search and what has not been working. I read every message and I answer every one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20"
              >
                Get in touch
              </Link>
              <Link
                href="/career-coaching"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 text-sm font-semibold px-8 py-4 rounded-full hover:border-white/40 hover:text-white transition-colors"
              >
                See all services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
