import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Holding Back Your European Job Search? | Free Assessment | Land in Europe",
  description:
    "5 questions. Find out exactly what is blocking your international job search in Europe and which service will move you forward. Free assessment by a recruiter who works in the European market.",
  alternates: { canonical: "/quiz" },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
