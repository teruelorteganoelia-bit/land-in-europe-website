import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free European Job Search Checklist | Land in Europe",
  description:
    "25 things to check before your next job application in Europe. CV format, LinkedIn optimization, application strategy, and interview prep. Free, sent to your inbox.",
  alternates: { canonical: "https://landineuropecoaching.com/checklist" },
  openGraph: {
    title: "Free European Job Search Checklist",
    description:
      "25 things international professionals miss when applying for jobs in Europe. Free checklist sent to your inbox.",
    url: "https://landineuropecoaching.com/checklist",
    type: "website",
  },
};

export default function ChecklistLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
