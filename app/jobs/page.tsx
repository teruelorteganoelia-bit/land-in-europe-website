import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Open Roles in Europe | Land in Europe – Independent Recruiter",
  description:
    "Active job mandates placed by Noelia Teruel Ortega, independent European recruiter. Specialist roles in Switzerland, Sweden, and across Europe. Apply directly.",
  keywords:
    "jobs Europe recruiter, European jobs 2025, BDM Switzerland, technical sales Europe, broker Stockholm, multilingual jobs Europe",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Open Roles in Europe | Land in Europe",
    description:
      "Active mandates placed by an independent European recruiter. Apply directly — no agency middleman.",
    url: "/jobs",
  },
};

const ROLES = [
  {
    id: "bdm-fb-switzerland",
    tag: "Priority search",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    title: "Business Development Manager – Food & Beverage",
    company: "Swiss scale-up · Industrial microbiology & water quality",
    location: "Ecublens, Switzerland",
    remote: "Remote-friendly",
    contract: "Permanent",
    travel: "1–2 days/week (France, Netherlands, Belgium, UK)",
    about:
      "A growing Swiss company specializing in automated water quality monitoring for industrial applications. They operate across Western Europe and are expanding their Food & Beverage vertical aggressively.",
    role:
      "You will own the F&B territory end-to-end: identifying and converting new accounts while managing and growing existing strategic relationships. This is a full-cycle commercial role with real autonomy and a direct line to leadership.",
    requirements: [
      "5+ years in Business Development, Technical Sales, or Key Account Management",
      "Background in industrial water treatment or Food & Beverage manufacturing",
      "Proven track record of new business acquisition in B2B technical environments",
      "French + English mandatory · German is a strong plus",
      "Comfortable with regular travel across Western Europe",
    ],
    offer: [
      "Full remote option",
      "6 weeks annual leave",
      "20% variable bonus on top of base",
      "Health insurance contribution",
    ],
    markets: "France · Netherlands · Belgium · UK",
  },
  {
    id: "tsm-utilities-switzerland",
    tag: "Open search",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "Technical Sales Manager – Utilities & Industrial Water",
    company: "Swiss scale-up · Industrial microbiology & water quality",
    location: "Ecublens, Switzerland",
    remote: "Remote-friendly",
    contract: "Permanent",
    travel: "Regular travel across DACH, North Africa, and Western Europe",
    about:
      "Same company as the BDM F&B role, different vertical. This position focuses on utilities and industrial water customers — a technically complex and relationship-driven segment.",
    role:
      "You will manage and grow key accounts with utilities and industrial water clients while identifying new opportunities in the sector. The role requires deep technical credibility and strong multilingual communication.",
    requirements: [
      "7+ years in technical B2B sales or key account management",
      "Background in water treatment — this is non-negotiable",
      "German + French + English all mandatory (this is the key filter for this role)",
      "Ability to manage complex, long-cycle technical sales processes",
      "Experience covering DACH, North Africa, or Western European markets",
    ],
    offer: [
      "Full remote option",
      "6 weeks annual leave",
      "Variable bonus structure",
      "Health insurance contribution",
    ],
    markets: "DACH · North Africa · Western Europe",
  },
  {
    id: "broker-bonds-stockholm",
    tag: "Specialist search",
    tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    title: "Broker – Scandinavian Government Bonds",
    company: "Established interdealer broker · 30+ year franchise in Scandinavian rates",
    location: "Stockholm, Sweden",
    remote: "On-site",
    contract: "Permanent",
    travel: "None",
    about:
      "An established interdealer broker with over 30 years of presence in Scandinavian rates markets. A lean, experienced desk — 6 people, no management layers, flat reporting structure.",
    role:
      "You will operate as a broker on the Scandinavian government bond desk, working your existing client relationships and contributing to the team's flow. This is not a junior or trainee role — the desk needs someone who can hit the ground running with an established book.",
    requirements: [
      "Existing, established client book in Scandinavian government bonds — this is the key requirement",
      "2+ years in financial markets in a brokerage or broker-dealer environment",
      "Deep knowledge of Scandinavian rates markets",
      "English C2 mandatory",
      "Stockholm-based or willing to relocate",
    ],
    offer: [
      "Permanent contract",
      "6-person desk — no politics, no layers",
      "Direct reporting to senior management",
      "Competitive compensation structure",
    ],
    markets: "Scandinavian rates · Stockholm",
  },
];

function Arrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function JobsPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Open roles</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
              Active mandates I am{" "}
              <span className="text-[#C9A84C]">placing right now.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-6">
              I am an independent recruiter based in Stockholm. These are the roles I am actively filling. No agency layers — you apply directly through me, and I handle the full process with the hiring company.
            </p>
            <p className="text-gray-300 text-sm">
              {ROLES.length} open {ROLES.length === 1 ? "role" : "roles"} · Updated July 2025
            </p>
          </div>
        </section>

        {/* Role listings */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-6">
            {ROLES.map((role) => (
              <div key={role.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {/* Role header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${role.tagColor}`}>
                      {role.tag}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {role.contract}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {role.remote}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{role.title}</h2>
                  <p className="text-gray-400 text-sm mb-1">{role.company}</p>
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 4h12v9H2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
                      {role.markets}
                    </span>
                    {role.travel !== "None" && (
                      <span className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 12L6 4l2 4 3-2 3 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        Travel: {role.travel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Role body */}
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">About the company</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{role.about}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">The role</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{role.role}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">What they offer</p>
                      <ul className="space-y-2">
                        {role.offer.map((o, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span className="text-gray-500 text-sm">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-3">What you need</p>
                      <ul className="space-y-3">
                        {role.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check />
                            <span className="text-gray-500 text-sm leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-5 mt-4">
                      <p className="text-xs font-semibold text-gray-900 mb-1">How to apply</p>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        Send me a message with the role title, a short note on your background, and your CV. I review every application personally and reply within 48 hours.
                      </p>
                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-[#C9A84C] transition-colors"
                      >
                        Apply for this role <Arrow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Not a fit but interested */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Not the right role?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Send me your profile anyway.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              I work with companies on new mandates regularly. If your background is strong and you are open to roles in Europe, send me your CV and I will keep you in mind when the right role comes in.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors"
              >
                Send your profile <Arrow />
              </Link>
              <Link
                href="/career-coaching"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-semibold text-sm px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
              >
                Explore career coaching
              </Link>
            </div>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
