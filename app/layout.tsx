import type { Metadata } from "next";
import "./globals.css";

// #12 canonical + Open Graph
export const metadata: Metadata = {
  metadataBase: new URL("https://land-in-europe-website.vercel.app"),
  title: "Land in Europe | Career Coaching for International Professionals",
  description:
    "Career coaching by a working European recruiter. CV rewrites, LinkedIn optimization, and strategic job search support for international professionals in Spain, Portugal and Greece.",
  keywords:
    "career coach Europe, CV writing Europe, LinkedIn optimization, career coaching internationals, job search Europe, expat career coach, Barcelona career coach, career coach Spain, career coach Portugal",
  alternates: {
    canonical: "https://land-in-europe-website.vercel.app",
  },
  openGraph: {
    title: "Land in Europe | Career Coaching for International Professionals",
    description:
      "Career coaching by a working European recruiter. CV rewrites, LinkedIn optimization, and strategic job search support.",
    type: "website",
    url: "https://land-in-europe-website.vercel.app",
    siteName: "Land in Europe",
    locale: "en_US",
    images: [
      {
        url: "/noelia2.png",
        width: 800,
        height: 1000,
        alt: "Noelia Teruel Ortega — career coach and international recruiter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Land in Europe | Career Coaching for International Professionals",
    description:
      "Career coaching by a working European recruiter. CV rewrites, LinkedIn optimization, and strategic job search support.",
    images: ["/noelia2.png"],
  },
  // #13 favicon
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
    "Career coaching and CV writing for international professionals looking for roles in Europe. Services include CV rewrite, LinkedIn optimization, career strategy sessions, and full coaching packages.",
  url: "https://land-in-europe-website.vercel.app",
  image: "https://land-in-europe-website.vercel.app/noelia2.png",
  founder: {
    "@type": "Person",
    name: "Noelia Teruel Ortega",
    jobTitle: "Career Coach and International Recruiter",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "European University of Valencia",
    },
  },
  areaServed: [
    { "@type": "City", name: "Barcelona" },
    { "@type": "City", name: "Lisbon" },
    { "@type": "City", name: "Athens" },
  ],
  serviceType: [
    "Career Coaching",
    "CV Writing",
    "LinkedIn Optimization",
    "Job Search Strategy",
  ],
  inLanguage: ["en", "es"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "teruelorteganoelia@gmail.com",
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
