import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Recruiter for Startups in Spain and Sweden | Land in Europe",
  description: "Boutique recruiting service for startups and scale-ups hiring in Spain, Sweden, and the EU. We find and close the right people. Full process from sourcing to offer, managed by a recruiter who knows both sides of the table.",
};

export default function ForCompaniesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
