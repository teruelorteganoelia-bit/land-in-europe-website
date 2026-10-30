import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Client Results | Land in Europe",
  description:
    "International professionals who worked with Noelia share what changed in their job search after coaching. Real results from real people across Europe.",
  alternates: { canonical: "https://landineuropecoaching.com/testimonials" },
  openGraph: {
    title: "Client Results | Land in Europe",
    description:
      "International professionals who worked with Noelia share what changed in their job search after coaching.",
    url: "https://landineuropecoaching.com/testimonials",
    type: "website",
  },
};

type Testimonial = {
  name: string;
  role: string;
  from: string;
  market: string;
  quote: string;
  result: string;
  service: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Andrés M.",
    role: "Senior Software Engineer",
    from: "Colombia",
    market: "Netherlands",
    service: "Full Coaching Package",
    result: "Hired in Amsterdam in 5 weeks",
    quote:
      "I had been applying for months and getting nothing back. After the first session with Noelia I understood exactly why. My CV was built for a different market entirely. We rebuilt it from scratch and rewrote my LinkedIn headline. Within two weeks I was getting recruiter messages every day. I accepted an offer in Amsterdam five weeks later.",
  },
  {
    name: "Priya S.",
    role: "Financial Controller",
    from: "India",
    market: "Luxembourg",
    service: "CV Rewrite + LinkedIn Optimization",
    result: "First interview within 10 days",
    quote:
      "Noelia does not give you generic advice. She told me specifically what was wrong, why it was wrong, and exactly how to fix it. The CV she helped me rewrite felt completely different. It finally read like I was applying to a European finance role, not just describing my past jobs. I had my first interview in Luxembourg within ten days of updating my profile.",
  },
  {
    name: "Marco R.",
    role: "Business Development Manager",
    from: "Italy",
    market: "Sweden",
    service: "Career Strategy Session",
    result: "Clarity on targeting + offer in Stockholm",
    quote:
      "I was wasting time applying to everything. Noelia helped me understand which roles in Sweden actually matched my background and how to position myself for them. That clarity alone was worth it. I stopped applying broadly and started targeting specifically. I had an offer in Stockholm three months later.",
  },
  {
    name: "Fatima B.",
    role: "Marketing Manager",
    from: "Morocco",
    market: "Spain",
    service: "Full Coaching Package",
    result: "Hired in Barcelona after 6 weeks",
    quote:
      "Moving to Spain without a job lined up felt like a risk. Noelia walked me through every step: the CV format, how Spanish companies read LinkedIn, how to follow up without being annoying. She also helped me with my right to work situation which I had no idea how to handle. Six weeks after our first session I was starting a new role in Barcelona.",
  },
  {
    name: "Thomas K.",
    role: "Supply Chain Analyst",
    from: "United States",
    market: "Germany",
    service: "CV Rewrite",
    result: "3x more recruiter responses in 2 weeks",
    quote:
      "My American resume was completely wrong for the German market. I knew it but I did not know what right looked like. Noelia explained the specific conventions, rewrote the document, and also told me to add a professional photo which I never would have done on my own. The difference in recruiter responses was immediate. Three times more messages in the first two weeks.",
  },
  {
    name: "Yuki T.",
    role: "UX Designer",
    from: "Japan",
    market: "Netherlands",
    service: "LinkedIn Optimization",
    result: "Hired after being found by a recruiter",
    quote:
      "I was applying actively but nothing was coming back. Noelia looked at my LinkedIn and explained that my headline and About section were not using the keywords Dutch recruiters search for. After the optimization I stopped applying and started being found. The recruiter who placed me contacted me through LinkedIn three weeks after I made the changes.",
  },
];

const SERVICE_COLORS: Record<string, string> = {
  "Full Coaching Package": "bg-[#C9A84C]/10 text-[#a07a2e]",
  "CV Rewrite + LinkedIn Optimization": "bg-blue-50 text-blue-700",
  "CV Rewrite": "bg-blue-50 text-blue-700",
  "LinkedIn Optimization": "bg-sky-50 text-sky-700",
  "Career Strategy Session": "bg-purple-50 text-purple-700",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Client results</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Real people. Real moves.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              International professionals who worked with Noelia share what changed in their job search after coaching.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-10 px-6 bg-[#0A0B0D]">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { number: "6", label: "Countries served" },
              { number: "2–6", label: "Weeks to first offer" },
              { number: "3x", label: "More recruiter responses" },
              { number: "100%", label: "CV adapted to market" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-1">{stat.number}</p>
                <p className="text-white/40 text-xs leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col gap-4"
                >
                  {/* Service badge */}
                  <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${SERVICE_COLORS[t.service] ?? "bg-gray-100 text-gray-600"}`}>
                    {t.service}
                  </span>

                  {/* Result callout */}
                  <div className="bg-white rounded-xl border border-[#C9A84C]/20 px-4 py-3">
                    <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.12em] mb-0.5">Result</p>
                    <p className="text-sm font-semibold text-gray-900">{t.result}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                    <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#C9A84C] font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role} &middot; {t.from} → {t.market}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-5">Ready to start?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Not sure where your search is stuck?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
              Take the free 5-minute quiz and get a specific answer about what is holding back your European job search.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/quiz"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#b8953f] transition-colors"
              >
                Take the free quiz
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3.5 rounded-full border border-gray-200 hover:border-gray-400 transition-colors"
              >
                Work with Noelia
              </Link>
            </div>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
