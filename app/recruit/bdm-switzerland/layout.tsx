import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BDM Recruiter Switzerland | Hire a Business Development Manager | Land in Europe",
  description:
    "Specialist recruiter for Business Development Managers in Switzerland. We place BDMs in Zurich, Geneva, Basel and across the Swiss market. German, French, and multilingual profiles.",
  keywords:
    "BDM recruiter Switzerland, hire business development manager Switzerland, BDM Zurich recruiter, recruit BDM Geneva, business development manager DACH, hire sales manager Switzerland, commercial recruiter Switzerland",
  alternates: { canonical: "https://landineuropecoaching.com/recruit/bdm-switzerland" },
  openGraph: {
    title: "BDM Recruiter Switzerland | Land in Europe",
    description:
      "Specialist recruiter for Business Development Managers in Switzerland. Zurich, Geneva, Basel and across the Swiss market.",
    url: "https://landineuropecoaching.com/recruit/bdm-switzerland",
    type: "website",
    siteName: "Land in Europe",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BDM Recruiting in Switzerland",
  description:
    "Specialist recruiting for Business Development Managers and commercial profiles in Switzerland, including Zurich, Geneva, Basel, and cross-border arrangements.",
  provider: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    url: "https://landineuropecoaching.com",
    jobTitle: "International Recruiter",
  },
  serviceType: "Executive Recruiting",
  areaServed: [
    { "@type": "Country", name: "Switzerland" },
    { "@type": "AdministrativeArea", name: "Zurich" },
    { "@type": "AdministrativeArea", name: "Geneva" },
    { "@type": "AdministrativeArea", name: "Basel" },
  ],
  url: "https://landineuropecoaching.com/recruit/bdm-switzerland",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
