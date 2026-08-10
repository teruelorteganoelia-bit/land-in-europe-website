import type { Metadata } from "next";
import "./globals.css";

// #12 canonical + Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://landineuropecoaching.com"),
  title: "Land in Europe | Career Coaching & Executive Recruiting for Europe",
  description:
    "Jobbcoach och karriärcoach i Stockholm. Career coaching and CV rewrites by a working European recruiter. LinkedIn optimization, job search strategy, and multilingual executive recruiting across Switzerland, France, Sweden, and the UK.",
  keywords:
    "career coach Europe, jobbcoach Stockholm, karriärcoach Sverige, jobbcoach, karriärvägledning, CV writing Europe, LinkedIn optimization, international recruiter Europe, job search Europe, expat career coach, executive recruiter Switzerland, recruiter France, recruiter Sweden, career coaching internationals, multilingual recruiter, career coach Stockholm, jobbsökning Europa",
  alternates: {
    canonical: "https://landineuropecoaching.com",
    languages: {
      "en": "https://landineuropecoaching.com",
      "sv": "https://landineuropecoaching.com",
      "x-default": "https://landineuropecoaching.com",
    },
  },
  openGraph: {
    title: "Land in Europe | Career Coaching & Executive Recruiting for Europe",
    description:
      "Jobbcoach & karriärcoach i Stockholm. Career coaching and executive recruiting by a working European recruiter based in Stockholm, Sweden.",
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
      "Jobbcoach i Stockholm. Career coaching and executive recruiting by a working European recruiter based in Stockholm.",
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
    "Jobbcoach och karriärcoach i Stockholm. Career coaching, CV rewriting, and executive recruiting for international professionals in Europe. Specialising in multilingual placements across Switzerland, France, Sweden, Luxembourg, and the UK.",
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
      <body>{children}</body>
    </html>
  );
}
