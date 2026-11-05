import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Recruiter Sweden | Hire Sales Professionals in Stockholm | Land in Europe",
  description:
    "Boutique recruiter for commercial profiles in Sweden. We place Account Executives, BDMs, Country Managers, and Sales Managers in Stockholm and across the Swedish market.",
  keywords:
    "commercial recruiter Sweden, hire sales manager Stockholm, BDM recruiter Sweden, account executive recruiter Stockholm, sales recruiter Sweden, hire commercial profiles Sweden, international recruiter Stockholm",
  alternates: { canonical: "https://landineuropecoaching.com/recruit/commercial-profiles-sweden" },
  openGraph: {
    title: "Commercial Recruiter Sweden | Land in Europe",
    description:
      "Boutique recruiter for commercial profiles in Sweden. BDMs, Account Executives, Country Managers in Stockholm and beyond.",
    url: "https://landineuropecoaching.com/recruit/commercial-profiles-sweden",
    type: "website",
    siteName: "Land in Europe",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Recruiting in Sweden",
  description:
    "Boutique recruiting for commercial profiles in Sweden: Business Development Managers, Account Executives, Country Managers, and Sales Managers based in Stockholm and across the Swedish market.",
  provider: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    url: "https://landineuropecoaching.com",
    jobTitle: "International Recruiter",
  },
  serviceType: "Executive Recruiting",
  areaServed: [
    { "@type": "Country", name: "Sweden" },
    { "@type": "AdministrativeArea", name: "Stockholm" },
    { "@type": "AdministrativeArea", name: "Gothenburg" },
  ],
  url: "https://landineuropecoaching.com/recruit/commercial-profiles-sweden",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
