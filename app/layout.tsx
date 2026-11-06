import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// #12 canonical + Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://landineuropecoaching.com"),
  title: "Career Coach for Foreigners in Europe | Get Hired in Europe | Land in Europe",
  description:
    "Career coach helping foreigners get hired in Europe. CV rewrite, LinkedIn optimization, and job search strategy by a recruiter based in Stockholm who works in the European market every day. Spain, Sweden, Germany, Netherlands, Switzerland.",
  keywords:
    "career coach for foreigners Europe, get hired in Europe as a foreigner, how to find a job in Europe, career coach expats Europe, CV rewrite Europe, LinkedIn optimization Europe, job search Europe foreigner, career coach Stockholm, jobbcoach Stockholm, karriärcoach Sverige, find job in Spain foreigner, find job in Sweden foreigner, find job in Germany foreigner, work permit Europe, international professional Europe, career coaching Spain Sweden Netherlands",
  verification: {
    google: "e0IPJruIt1Tat5gQl1WzujVZ3PzWFSOXdNRXPHNM348",
  },
  alternates: {
    canonical: "https://landineuropecoaching.com",
    languages: {
      "en": "https://landineuropecoaching.com",
      "sv": "https://landineuropecoaching.com",
      "x-default": "https://landineuropecoaching.com",
    },
  },
  openGraph: {
    title: "Career Coach for Foreigners in Europe | Get Hired in Europe | Land in Europe",
    description:
      "Career coach helping foreigners get hired in Europe. CV rewrite, LinkedIn optimization, and job search strategy by a recruiter based in Stockholm who works in the European market every day.",
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
    title: "Career Coach for Foreigners in Europe | Get Hired in Europe | Land in Europe",
    description:
      "Career coach helping foreigners get hired in Europe. CV rewrite, LinkedIn and job search strategy by a recruiter based in Stockholm.",
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
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Land in Europe",
  alternateName: "Jobbcoach Stockholm | Land in Europe",
  description:
    "Career coaching for foreigners looking for a job in Europe. CV rewrite, LinkedIn optimization, and job search strategy by a recruiter who works in the European market every day. Based in Stockholm, working with professionals relocating to Spain, Sweden, and the broader EU.",
  url: "https://landineuropecoaching.com",
  image: "https://landineuropecoaching.com/noelia-photo.png",
  logo: "https://landineuropecoaching.com/logo.png",
  telephone: "+46769763498",
  email: "noelia@landineuropecoaching.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockholm",
    addressRegion: "Stockholm",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.3293,
    longitude: 18.0686,
  },
  hasMap: "https://maps.google.com/?q=Stockholm,Sweden",
  priceRange: "€€",
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
    "Jobbcoach",
    "Karriärcoach",
    "CV Writing",
    "LinkedIn Optimization",
    "Job Search Strategy",
    "Executive Recruiting",
    "Multilingual Talent Placement",
  ],
  inLanguage: ["en", "es", "sv"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+46769763498",
    email: "noelia@landineuropecoaching.com",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish", "Swedish"],
  },
  sameAs: [
    "https://www.linkedin.com/in/noelia-teruel-ortega/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-SE" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
