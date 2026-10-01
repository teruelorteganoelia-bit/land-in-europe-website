import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://landineuropecoaching.com"),
  title: "Jobs in Europe | Recruiting across Europe · Switzerland, France, Spain & more",
  description:
    "I recruit for companies across Europe, Switzerland, France, Luxembourg, Spain and beyond. If you want to know whether your profile fits something I am currently working on, reach out and I will take a look.",
  keywords:
    "BDM jobs Switzerland, technical sales jobs Europe, semiconductor sales jobs, jobs in Switzerland for English speakers, business development manager Switzerland, water treatment sales jobs Europe, broker Stockholm, Scandinavian government bonds, RFID sales jobs, jobs Europe 2026, multilingual jobs Europe, independent recruiter Europe, finance jobs Switzerland, sales jobs Luxembourg, jobs France English speakers",
  alternates: { canonical: "https://landineuropecoaching.com/jobs" },
  openGraph: {
    title: "Jobs in Europe | Recruiting in Switzerland, France & Luxembourg",
    description:
      "I recruit for companies across Switzerland, France and Luxembourg. Reach out and I will evaluate your fit against what I am currently working on.",
    url: "https://landineuropecoaching.com/jobs",
    type: "website",
  },
};

export default function JobsPage() {
  return (
    <>
      <PageNav />
      <main className="bg-[#0A0B0D] min-h-screen">

        {/* Hero */}
        <section className="pt-28 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-6">Recruiting</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              I place candidates across{" "}
              <span className="text-[#C9A84C] italic font-normal">Europe.</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Switzerland, France, Luxembourg, Spain and beyond. I do not publish a job board. The mandates I work on are confidential and move fast. If you want to know whether your profile fits something I am currently filling, reach out and I will tell you honestly.
            </p>
          </div>
        </section>

        {/* What I look for */}
        <section className="py-16 px-6 bg-[#1C1F26]">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-10 text-center">What I typically place</p>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  area: "Finance",
                  detail: "Accounts receivable, credit control, financial analysis, treasury. Mostly Switzerland and Luxembourg.",
                },
                {
                  area: "Commercial",
                  detail: "Business development, technical sales, key account management. Cross-border and multilingual roles.",
                },
                {
                  area: "Specialist",
                  detail: "Niche profiles in life sciences, industrial, and regulated sectors where language and market knowledge matter.",
                },
              ].map((c) => (
                <div key={c.area} className="bg-white/5 border border-white/8 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-sm mb-3">{c.area}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mb-6 leading-tight">
              Send me your profile.<br/>
              <span className="text-[#C9A84C] italic font-normal">I will evaluate your fit.</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-10">
              Tell me what you are looking for and where you are based. I will check it against what I am working on and give you an honest answer. No pitch, no generic job alerts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:noelia@landineuropecoaching.com?subject=Profile – open to opportunities in Europe"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0B0D] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#E8C96A] transition-colors shadow-lg shadow-[#C9A84C]/20"
              >
                Send your CV
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Link
                href="/cv-feedback"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-semibold text-sm px-8 py-4 rounded-full hover:border-white/30 hover:text-white transition-colors"
              >
                Get free CV feedback first
              </Link>
            </div>
            <p className="text-white/25 text-xs mt-8">noelia@landineuropecoaching.com</p>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
