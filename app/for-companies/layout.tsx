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

export default function ForCompaniesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
