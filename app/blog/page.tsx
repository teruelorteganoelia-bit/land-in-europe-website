import type { Metadata } from "next";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Career Advice for International Professionals in Europe | Land in Europe",
  description:
    "Practical career advice for international professionals looking for jobs in Europe. CV tips, LinkedIn strategy, and job search guides for Spain, Portugal and Greece.",
  keywords:
    "career advice Europe, job search tips Europe, CV tips for expats, LinkedIn Europe, how to find a job in Spain, career blog international professionals",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Career Advice Blog | Land in Europe",
    description:
      "Practical career advice for international professionals targeting the European job market.",
    url: "/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Job Search": "bg-blue-50 text-blue-700",
  "CV Writing": "bg-amber-50 text-amber-700",
  "LinkedIn": "bg-sky-50 text-sky-700",
};

export default function BlogPage() {
  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-20 pb-16 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Resources</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 max-w-2xl">
              Career advice for the European job market.
            </h1>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              Written by a working European recruiter. Practical, honest, and based on what actually happens on the other side of your application.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col hover:border-[#C9A84C]/50 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-300">{post.readTime}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 group-hover:text-[#C9A84C] transition-colors">
                  Read article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.5 6h9M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Ready to take action?</p>
            <h2 className="font-serif text-3xl font-bold text-white mb-6">
              Reading is the first step. Let us work together.
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-10 py-4 rounded-full hover:bg-[#e8c96d] transition-colors"
            >
              Get started
            </Link>
          </div>
        </section>

      </main>
      <PageFooter />
    </>
  );
}
