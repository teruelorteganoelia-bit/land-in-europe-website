import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Sales Recruiter Europe | Land in Europe",
  description:
    "Boutique recruiter specialising in technical sales profiles across Europe. We place Sales Engineers, Technical Account Managers, and Solutions Consultants in Spain, Sweden, Germany, the Netherlands, and Switzerland.",
  keywords:
    "technical sales recruiter Europe, hire sales engineer Europe, technical account manager recruiter, solutions consultant recruiter Europe, SaaS sales recruiter Europe, pre-sales recruiter, tech sales hiring Europe",
  alternates: { canonical: "https://landineuropecoaching.com/recruit/tech-sales-europe" },
  openGraph: {
    title: "Technical Sales Recruiter Europe | Land in Europe",
    description:
      "Boutique recruiter for technical sales profiles across Europe. Sales Engineers, Technical AMs, Solutions Consultants.",
    url: "https://landineuropecoaching.com/recruit/tech-sales-europe",
    type: "website",
    siteName: "Land in Europe",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical Sales Recruiting in Europe",
  description:
    "Boutique recruiting service for technical sales profiles across Europe: Sales Engineers, Technical Account Managers, Solutions Consultants, and Pre-Sales specialists.",
  provider: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    url: "https://landineuropecoaching.com",
    jobTitle: "International Recruiter",
  },
  serviceType: "Technical Sales Recruiting",
  areaServed: [
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Switzerland" },
  ],
  url: "https://landineuropecoaching.com/recruit/tech-sales-europe",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
