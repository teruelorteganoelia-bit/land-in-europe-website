import Link from "next/link";

export default function PageNav() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-base font-bold text-gray-900 tracking-tight">
          Land in Europe
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/cv-rewrite" className="hover:text-gray-900 transition-colors">CV Rewrite</Link>
          <Link href="/linkedin-optimization" className="hover:text-gray-900 transition-colors">LinkedIn</Link>
          <Link href="/career-coaching" className="hover:text-gray-900 transition-colors">Coaching</Link>
          <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
        </nav>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C9A84C] transition-colors"
        >
          Get started
        </Link>
      </div>
    </header>
  );
}
