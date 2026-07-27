import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Open Roles in Europe | Land in Europe – Independent Recruiter",
  description:
    "Active job mandates placed by Noelia Teruel Ortega, independent European recruiter. Specialist roles in Switzerland, Sweden, and across Europe. Apply directly.",
  keywords:
    "jobs Europe recruiter, European jobs 2025, BDM Switzerland, technical sales Europe, broker Stockholm, semiconductor sales Switzerland, multilingual jobs Europe",
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
    company: "Swiss scale-up · Industrial microbiology & automated water quality monitoring",
    location: "Ecublens, Switzerland",
    remote: "Remote-friendly",
    contract: "Permanent (CDI) · Full-time",
    travel: "~1–2 days/week across France, Netherlands, Belgium, UK",
    about:
      "A multi-award-winning Swiss scale-up pioneering the digitalisation of industrial microbiology. The company develops automated platforms for real-time microbial water quality monitoring, serving Food & Beverage, water utilities, pharmaceutical and cosmetics industries across Western Europe and beyond. Scale-up culture — high autonomy, science-driven, mission-focused.",
    role:
      "Senior commercial role with full ownership of the F&B territory. You combine new business acquisition with strategic account management — hunting new logos while developing long-term partnerships with key clients. You translate complex technical solutions into commercial success and own regional growth targets end to end.",
    requirements: [
      "5+ years in Business Development, Technical Sales, or Key Account Management",
      "Background in industrial water treatment or F&B manufacturing — required",
      "Proven track record of new customer acquisition (hunter mindset with documented new logo wins)",
      "Solid understanding of monitoring instrumentation used in F&B industrial environments",
      "French B1/B2 + English C1 — both mandatory · German is a strong asset",
    ],
    offer: [
      "Full remote option with flexible scheduling",
      "6 weeks total annual leave",
      "20% variable bonus (individual + corporate targets)",
      "Company contributions to private health insurance",
      "High-autonomy, international scope, no corporate layers",
    ],
    note: "Candidates can be based in Switzerland (EU/EFTA passport required), Germany, UK, or France (portage salarial or frontier permit for Ain/Haute-Savoie/Savoie/Isère).",
  },
  {
    id: "tsm-water-switzerland",
    tag: "Open search",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "Technical Sales Manager – Utilities & Industrial Water",
    company: "Swiss scale-up · Industrial microbiology & automated water quality monitoring",
    location: "Ecublens, Switzerland",
    remote: "Remote-friendly",
    contract: "Permanent (CDI) · Full-time",
    travel: "~1–2 days/week or 1 week/month (Western Europe, DACH, North Africa)",
    about:
      "Same Swiss scale-up as the BDM F&B role, different vertical. This position covers utilities and industrial water — a technically complex, relationship-driven segment requiring deep water treatment expertise and multilingual fluency across three languages.",
    role:
      "Senior commercial role combining key account management with new business development. You act as a trusted technical advisor to utility and industrial water clients, managing the full sales cycle and ensuring long-term client value. You also gather market intelligence to inform the product roadmap.",
    requirements: [
      "Master's degree minimum — engineering, life sciences, chemistry, or equivalent",
      "7+ years in technical B2B sales or key account management",
      "Solid background in water treatment: drinking water, wastewater, and/or industrial water systems",
      "Experience with analytical instrumentation or sensor-based water quality technologies",
      "German B1/B2 + French B1/B2 + English C1 — all three mandatory (this is the key filter)",
    ],
    offer: [
      "Full remote option with flexible scheduling",
      "6 weeks total annual leave",
      "20% variable bonus (individual + corporate targets)",
      "Company contributions to private health insurance",
      "International scope, mission-driven team",
    ],
    note: "Same work authorisation requirements as BDM F&B above.",
  },
  {
    id: "bdm-electronic-modules",
    tag: "Open search",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "Senior Business Development Manager – Electronic Modules",
    company: "Swiss semiconductor company · Ultra-low-power ICs & wireless connectivity",
    location: "Neuchâtel region, Switzerland",
    remote: "On-site",
    contract: "Permanent · Full-time · No part-time",
    travel: "10–20% travel for customer visits and trade fairs",
    about:
      "A prominent player in the semiconductor industry specialising in ultra-low-power integrated circuits and wireless connectivity modules (RFID, Bluetooth Low Energy). Backed by a prestigious global industrial group, the company serves industrial, logistics, healthcare and IoT markets worldwide with ~450 employees and international sites in the US, Thailand and Czech Republic.",
    role:
      "Drive market expansion for innovative electronic modules (Bluetooth Low Energy, ultra-low-power applications) across the DACH region. You develop and execute the BD strategy, identify and win new business in target verticals — Logistics, Warehousing, Avionics, Healthcare, Hospitality, Large Enterprise — and build relationships with OEMs, system integrators, distributors and strategic partners.",
    requirements: [
      "10+ years in technical B2B sales / business development in electronic components, modules or IoT solutions",
      "Understanding of wireless technologies — Bluetooth Low Energy experience preferred",
      "Proven track record navigating the DACH commercial landscape",
      "Experience drafting and managing complex commercial agreements",
      "English C1 (daily use) + German B1/B2 (daily use) — both mandatory · French is a plus",
    ],
    offer: [
      "Established company with global industrial group backing",
      "International client base and product scope",
      "High-autonomy individual contributor role",
      "Direct reporting to BU / Sales leadership",
    ],
    note: "100% on-site at the Neuchâtel region HQ. No remote option. EU/EFTA passport required for Swiss work permit.",
  },
  {
    id: "sales-bdm-semiconductor",
    tag: "Open search",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "Sales & Business Development Manager – Semiconductor (RFID / BLE / NFC)",
    company: "Swiss semiconductor manufacturer · Ultra-low-power ICs · World leader in RFID",
    location: "Marin-Epagnier, Neuchâtel, Switzerland",
    remote: "On-site only",
    contract: "Permanent (CDI) · Full-time · 13 months",
    travel: "10–20% for customer engagement and business development",
    about:
      "A Swiss semiconductor company founded in 1975, world leader in RFID (LF, HF, UHF), NFC, Bluetooth Low Energy SoCs, mixed signal ASICs, smart card ICs and power management circuits. Production in Switzerland and Asia, design centres in Prague and Colorado Springs. Serves consumer electronics, automotive, industrial, access control, logistics and IoT markets. ISO 9001 certified.",
    role:
      "Senior field sales and BD role covering a defined territory. You grow revenue across the full product portfolio — RFID, NFC ICs, BLE SoCs, custom ASICs — managing existing accounts and developing new ones. You identify and qualify new customers and market segments (greenfield), manage channels and distributors, lead commercial negotiations, and provide technical and commercial support from design phase through mass production.",
    requirements: [
      "10+ years selling technology in the electronics or semiconductor industry",
      "Background with ASICs, mixed signal ICs, BLE, Sensors, NFC, RFID, or wireless connectivity — required",
      "BSEE (Bachelor of Science in Electrical Engineering) or equivalent technical education — required",
      "Greenfield business development experience — identification, qualification, design-in",
      "German B2/C1 (daily, customer-facing) + English C1 (daily, internal) — both mandatory · French B1/B2 strong plus",
    ],
    offer: [
      "World-leading franchise in RFID and ultra-low-power ICs",
      "Individual contributor role with high autonomy",
      "Reporting to Sales Director",
      "International client base across DACH and Europe",
    ],
    note: "100% on-site at Marin-Epagnier HQ. No remote or hybrid. Complete application required: CV + work certificates + reference letters + diplomas. EU/EFTA passport required.",
  },
  {
    id: "support-technique-vente",
    tag: "Open search",
    tagColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    title: "Technical Sales Support Manager – Precision Metallurgy",
    company: "Swiss family company · Precision alloy rolling · ~200 years of expertise",
    location: "Le Locle, Neuchâtel, Switzerland",
    remote: "On-site only",
    contract: "Permanent (CDI) · Cadre status · New position",
    travel: "Minimal",
    about:
      "A Swiss family-owned SME (~40 employees) with nearly 200 years of expertise in precision alloy rolling. A recognised partner to the watchmaking industry and high-tech sectors (medical, aerospace, transport), producing high-value metal strips and thin foils including proprietary powder metallurgy alloys. ISO 9001 certified, strong social values, agile structure.",
    role:
      "A pivotal role bridging commercial, technical and operational teams. You provide technical support to sales (contract review, complex offers, feasibility analysis), coordinate with the workshop to define manufacturing processes, manage regulatory compliance (REACH, RoHS, conflict minerals / CMRT/EMRT), and identify development opportunities through new materials or processes. Direct reporting to the CEO.",
    requirements: [
      "Engineering degree (HES/ETS) — or equivalent — in mechanics or materials science",
      "Minimum 3 years of experience with microtechnical manufacturing processes",
      "Expertise in mechanics and materials science — required",
      "ERP and Excel proficiency — required",
      "Knowledge of regulatory compliance: REACH, RoHS, conflict minerals",
      "French fluent + English fluent — both mandatory · German is a major asset",
    ],
    offer: [
      "Nearly 200-year-old family company — stable, long-term position",
      "Watchmaking industry collective agreement (CCT) conditions",
      "Company contribution to health insurance",
      "Proprietary alloys and R&D involvement",
      "Pivotal role with direct access to CEO, high autonomy",
    ],
    note: "100% on-site in Le Locle. EU/EFTA passport required and prior experience in Switzerland preferred. No work permit procedures will be initiated.",
  },
  {
    id: "broker-bonds-stockholm",
    tag: "Specialist search",
    tagColor: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    title: "Broker – Scandinavian Government Bonds",
    company: "Continental-European interdealer broker · Dominant Scandinavian rates franchise · 30+ years",
    location: "Stockholm, Sweden",
    remote: "On-site trading desk",
    contract: "Permanent (CDI) · Full-time",
    travel: "None",
    about:
      "A leading Continental-European interdealer broker specialised in OTC interest-rate derivatives and fixed income. Founded in the 1980s, headquartered in Switzerland, with branch offices across the Nordics. A recognised, dominant franchise in Scandinavian rates. Small multinational house (~20–50 specialists) with a long-standing family culture built on excellence in execution.",
    role:
      "Join an established Scandinavian government bond desk and grow client relationships within a recognised franchise. You manage and grow client relationships in the Swedish government bond market, support daily order flow, pricing and execution, identify new opportunities, and collaborate with colleagues across the firm's offices.",
    requirements: [
      "Existing, established client book in Scandinavian government bonds — this is the essential requirement",
      "Government bond / rates broking experience in financial markets",
      "Brokerage or broker-dealer background",
      "Strong knowledge of the Scandinavian markets",
      "English C2 — mandatory · French B1/B2 useful · Additional European language a plus",
    ],
    offer: [
      "Dominant Scandinavian-rates franchise — market leader position",
      "Established flow with room to grow the seat",
      "6-person desk — no politics, no management layers",
      "Direct reporting to Head of IRS Desk",
      "Multinational team and international client base",
    ],
    note: "Must already hold the right to work in Sweden. No sponsorship or work permit procedures available.",
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

function LocationIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.5 4.5 8.5 4.5 8.5s4.5-5 4.5-8.5c0-2.5-2-4.5-4.5-4.5z" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
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
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-4">
              I am an independent recruiter based in Stockholm. These are the roles I am actively filling across Switzerland, Sweden and Europe. Apply directly through me — I handle the full process with the hiring company.
            </p>
            <p className="text-gray-300 text-sm">
              {ROLES.length} open roles · Updated July 2025
            </p>
          </div>
        </section>

        {/* Role listings */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-8">
            {ROLES.map((role) => (
              <div key={role.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

                {/* Header */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex flex-wrap items-start gap-2 mb-4">
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
                  <p className="text-gray-400 text-sm mb-3">{role.company}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <LocationIcon />
                      {role.location}
                    </span>
                    {role.travel !== "None" && (
                      <span className="flex items-center gap-1.5 text-gray-300">
                        Travel: {role.travel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 grid md:grid-cols-2 gap-10">
                  <div className="space-y-7">
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

                  <div className="space-y-7">
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

                    {role.note && (
                      <div className="bg-amber-50 border border-amber-100 rounded-xl px-5 py-4">
                        <p className="text-xs font-semibold text-amber-700 mb-1">Work authorisation</p>
                        <p className="text-amber-700/70 text-xs leading-relaxed">{role.note}</p>
                      </div>
                    )}

                    <div className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                      <p className="text-xs font-semibold text-gray-900 mb-1">How to apply</p>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4">
                        Send your CV and a short note about your background to{" "}
                        <span className="text-gray-700 font-medium">noelia@landineuropecoaching.com</span>{" "}
                        with the role title in the subject line. I review every application personally and reply within 48 hours.
                      </p>
                      <a
                        href={`mailto:noelia@landineuropecoaching.com?subject=Application – ${role.title}`}
                        className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-[#C9A84C] transition-colors"
                      >
                        Send your CV <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Not a fit */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Not the right role?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Send me your profile anyway.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-3 max-w-xl mx-auto">
              I work with companies on new mandates regularly. If your background is strong and you are open to specialist roles in Europe, send me your CV and I will keep you in mind when the right opportunity comes in.
            </p>
            <p className="text-gray-300 text-sm mb-8">
              <span className="font-medium text-gray-500">noelia@landineuropecoaching.com</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:noelia@landineuropecoaching.com?subject=Spontaneous application – open to opportunities in Europe"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors"
              >
                Send your CV <Arrow />
              </a>
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
