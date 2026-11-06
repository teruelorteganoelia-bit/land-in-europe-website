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
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white/20 uppercase tracking-[0.15em] mb-1">For candidates</p>
            {[
              ["CV Rewrite", "/cv-rewrite"],
              ["LinkedIn", "/linkedin-optimization"],
              ["Coaching", "/career-coaching"],
              ["Blog", "/blog"],
              ["Contact", "/#contact"],
            ].map(([l, h]) => (
              <Link key={h} href={h} className="text-sm text-white/30 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white/20 uppercase tracking-[0.15em] mb-1">For companies</p>
            {[
              ["Recruiting overview", "/for-companies"],
              ["Technical sales — Europe", "/recruit/tech-sales-europe"],
              ["BDM — Switzerland", "/recruit/bdm-switzerland"],
              ["Commercial profiles — Sweden", "/recruit/commercial-profiles-sweden"],
            ].map(([l, h]) => (
              <Link key={h} href={h} className="text-sm text-white/30 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-white/20 uppercase tracking-[0.15em] mb-1">Legal</p>
            <Link href="/privacidad" className="text-sm text-white/30 hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/8 text-xs text-white/15">
        <p>© {new Date().getFullYear()} Noelia Teruel Ortega. All rights reserved.</p>
      </div>
    </footer>
  );
}
