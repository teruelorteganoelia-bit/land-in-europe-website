import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Land in Europe | Career Coaching for International Professionals",
  description:
    "I help international professionals position themselves, target the right companies, and land roles in Europe. Career coaching and CV writing by a working European recruiter.",
  keywords:
    "career coach Europe, CV writing Europe, LinkedIn optimization, career coaching internationals, job search Europe, expat career coach, Barcelona career coach",
  openGraph: {
    title: "Land in Europe | Career Coaching for International Professionals",
    description:
      "Career coaching by a working European recruiter. CV rewrites, LinkedIn optimization, and strategic job search support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
