import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-base font-bold text-white mb-1">Land in Europe</p>
          <p className="text-xs text-white/30">Career Coaching for International Professionals</p>
          <p className="text-xs text-white/20 mt-1">Based in Stockholm, Sweden</p>
        </div>
        <nav className="flex flex-wrap gap-5">
          {[
            ["CV Rewrite", "/cv-rewrite"],
            ["LinkedIn", "/linkedin-optimization"],
            ["Coaching", "/career-coaching"],
            ["Blog", "/blog"],
            ["Contact", "/#contact"],
          ].map(([l, h]) => (
            <Link key={h} href={h} className="text-sm text-white/30 hover:text-white transition-colors">
              {l}
            </Link>
          ))}
        </nav>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/8 text-xs text-white/15">
        <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
      </div>
    </footer>
  );
}
