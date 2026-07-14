import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageNav from "../../components/PageNav";
import PageFooter from "../../components/PageFooter";
import { POSTS, getPost, type Section } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Land in Europe`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
    },
  };
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return <h2 key={i} className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-12 mb-4">{s.text}</h2>;
    case "h3":
      return <h3 key={i} className="font-serif text-xl font-bold text-gray-900 mt-8 mb-3">{s.text}</h3>;
    case "p":
      return <p key={i} className="text-gray-600 leading-relaxed mb-4">{s.text}</p>;
    case "ul":
      return (
        <ul key={i} className="space-y-3 mb-6">
          {s.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#C9A84C]" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div key={i} className="bg-[#C9A84C]/8 border border-[#C9A84C]/25 rounded-2xl px-6 py-5 my-6">
          <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-2">Tip</p>
          <p className="text-gray-700 text-sm leading-relaxed">{s.text}</p>
        </div>
      );
    default:
      return null;
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  "Job Search": "bg-blue-50 text-blue-700",
  "CV Writing": "bg-amber-50 text-amber-700",
  "LinkedIn": "bg-sky-50 text-sky-700",
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageNav />
      <main>

        {/* Hero */}
        <section className="pt-16 pb-12 px-6 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.5 6H1.5M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All articles
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${CATEGORY_COLORS[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-300">{post.readTime}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">{post.description}</p>
            <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
              <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 flex items-center justify-center flex-shrink-0">
                <span className="text-[#C9A84C] font-bold text-sm">N</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Noelia Teruel Ortega</p>
                <p className="text-xs text-gray-400">Career Coach and European Recruiter</p>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>
        </section>

        {/* Author CTA */}
        <section className="py-14 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 sm:p-10">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-3">About the author</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
              Noelia Teruel Ortega
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Career coach and international recruiter based in Stockholm. I help international professionals get hired in Europe through CV rewrites, LinkedIn optimization, and 1:1 coaching.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black font-bold text-sm px-8 py-3.5 rounded-full hover:bg-[#e8c96d] transition-colors"
            >
              Work with me
            </Link>
          </div>
        </section>

        {/* Related articles */}
        {related.length > 0 && (
          <section className="py-14 px-6 bg-white border-t border-gray-100">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-8">Keep reading</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="bg-gray-50 rounded-2xl border border-gray-200 p-6 hover:border-[#C9A84C]/50 transition-colors group"
                  >
                    <p className="font-serif text-base font-bold text-gray-900 mb-2 group-hover:text-[#C9A84C] transition-colors leading-snug">{p.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <PageFooter />
    </>
  );
}
