import type { Metadata } from "next";
import "./globals.css";

// #12 canonical + Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://landineuropecoaching.com"),
  title: "Land in Europe | Career Coaching & Executive Recruiting for Europe",
  description:
    "Get hired in Europe faster. Career coaching and CV rewrites by a working European recruiter. LinkedIn optimization, job search strategy, and multilingual executive recruiting across Switzerland, France, Sweden, and the UK.",
  keywords:
    "career coach Europe, CV writing Europe, LinkedIn optimization, international recruiter Europe, job search Europe, expat career coach, executive recruiter Switzerland, recruiter France, recruiter Sweden, career coaching internationals, multilingual recruiter, career coach Stockholm",
  alternates: {
    canonical: "https://landineuropecoaching.com",
  },
  openGraph: {
    title: "Land in Europe | Career Coaching & Executive Recruiting for Europe",
    description:
      "Get hired in Europe faster. Career coaching and executive recruiting by a working European recruiter based in Stockholm.",
    type: "website",
    url: "https://landineuropecoaching.com",
    siteName: "Land in Europe",
    locale: "en_US",
    images: [
      {
        url: "/noelia-photo.png",
        width: 800,
        height: 1000,
        alt: "Noelia Teruel Ortega, career coach and international recruiter based in Stockholm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land in Europe | Career Coaching & Executive Recruiting",
    description:
      "Get hired in Europe faster. Career coaching and executive recruiting by a working European recruiter based in Stockholm.",
    images: ["/noelia-photo.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

// #10 Schema.org structured data
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Land in Europe",
  description:
    "Career coaching, CV rewriting, and executive recruiting for international professionals in Europe. Specialising in multilingual placements across Switzerland, France, Sweden, Luxembourg, and the UK.",
  url: "https://landineuropecoaching.com",
  image: "https://landineuropecoaching.com/noelia-photo.png",
  founder: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    jobTitle: "Career Coach and International Recruiter",
    worksFor: { "@type": "Organization", name: "Land in Europe" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "European University of Valencia",
    },
  },
  areaServed: [
    { "@type": "Country", name: "Switzerland" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Luxembourg" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Portugal" },
  ],
  serviceType: [
    "Career Coaching",
    "CV Writing",
    "LinkedIn Optimization",
    "Job Search Strategy",
    "Executive Recruiting",
    "Multilingual Talent Placement",
  ],
  inLanguage: ["en", "es"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "noelia@landineuropecoaching.com",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
