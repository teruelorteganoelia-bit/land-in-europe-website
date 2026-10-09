import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire International Talent in Europe | Land in Europe",
  description: "Boutique recruiting for startups and scale-ups hiring across Spain, Sweden, and the EU. Full process managed, from sourcing to offer.",
};

export default function ForCompaniesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
