import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Recruiter for Companies in Europe | Land in Europe",
  description:
    "Boutique recruiting service for companies hiring multilingual sales, tech, and commercial profiles across Europe. Spain, Sweden, Germany, Netherlands, Switzerland, Luxembourg and Belgium. Full process from sourcing to offer.",
  keywords:
    "international recruiter Europe, recruiter multilingual sales Europe, hire BDM Europe, tech recruiter Spain, international recruiter Stockholm, hire sales professionals Europe, multilingual talent Europe, recruiter startups Europe, hire commercial profiles Europe, recruiter Germany Netherlands Switzerland, boutique recruiter Europe",
  alternates: { canonical: "https://landineuropecoaching.com/for-companies" },
  openGraph: {
    title: "International Recruiter for Companies in Europe | Land in Europe",
    description:
      "Boutique recruiting for companies hiring multilingual sales, tech, and commercial profiles across Europe. Spain, Sweden, Germany, Netherlands, Switzerland and more.",
    url: "https://landineuropecoaching.com/for-companies",
    type: "website",
    siteName: "Land in Europe",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "International Recruiting for European Companies",
  description:
    "Boutique recruiting service for companies hiring multilingual sales, tech, and commercial profiles across Europe. Full process from sourcing to offer.",
  provider: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    url: "https://landineuropecoaching.com",
    jobTitle: "International Recruiter and Career Coach",
  },
  serviceType: "Executive Recruiting",
  areaServed: [
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "Belgium" },
    { "@type": "Country", name: "France" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Startups, scale-ups, and technology companies hiring in Europe",
  },
  url: "https://landineuropecoaching.com/for-companies",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to fill a role?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most commercial and technical profiles, we deliver a shortlist within two to three weeks of the briefing call. The full process from briefing to accepted offer typically takes four to eight weeks depending on seniority and market.",
      },
    },
    {
      "@type": "Question",
      name: "Which markets do you recruit in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recruit across Spain, Sweden, Germany, the Netherlands, Switzerland, Luxembourg, Belgium, and France. We understand local salary expectations, candidate behaviour, language requirements, and what makes professionals actually move in each market.",
      },
    },
    {
      "@type": "Question",
      name: "What types of roles do you fill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Primarily commercial, technical sales, and operations profiles: Business Development Managers, Technical Sales Managers, Account Executives, Country Managers, Sales Engineers, and Customer Success Managers. Most mandates require multilingual candidates with European market experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside Spain and Sweden?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with companies based anywhere who need to hire in European markets, regardless of where the company is headquartered. If the role is in one of our markets, we can help.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from using a large recruitment agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A boutique service means your mandate gets personal attention. You work directly with the recruiter running your search. We take a limited number of mandates at a time and have direct access to international candidates through our coaching practice, reaching profiles not visible on job boards.",
      },
    },
  ],
};

export default function ForCompaniesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
