import Link from "next/link";

const sections = [
  {
    title: "Why LinkedIn is different from your CV",
    intro: "LinkedIn Recruiter is a search engine. Recruiters type keywords and filter by location, title, industry, and language. They do not browse profiles the way you browse a website. Your goal is to appear in those searches, then convert the click into a message.",
    items: [],
  },
  {
    title: "Profile photo",
    items: [
      { check: true, text: "Professional headshot. Clean background, good lighting, face visible. You do not need a photographer — a well-lit phone photo in front of a plain wall works." },
      { check: true, text: "Dress for the industry you are targeting. Tech is more casual. Finance and consulting are more formal. Match their culture." },
      { check: false, text: "No holiday photos, no group shots cropped to just you, no photos from more than 5 years ago if you look significantly different." },
      { check: false, text: "No filters. It looks like you are hiding something." },
    ],
  },
  {
    title: "Headline",
    intro: "The headline is the most important field for search. It appears next to your name in every search result. Most people write their job title. That is the minimum. You can do better.",
    items: [
      { check: true, text: "Include your current or target title: 'Product Manager', 'Financial Controller', 'Supply Chain Analyst'." },
      { check: true, text: "Add your sector or specialisation: 'Product Manager | B2B SaaS' or 'Financial Controller | Manufacturing'." },
      { check: true, text: "Add the geography you are targeting if you are relocating: 'Open to roles in Sweden and the Netherlands'." },
      { check: true, text: "220 characters maximum. Use all of them. Every word is a potential keyword." },
      { check: false, text: "No 'seeking new opportunities' or 'open to work' in the headline. Use the green Open to Work banner instead — it signals the same thing without wasting headline space." },
      { check: false, text: "No buzzwords: 'passionate', 'dynamic', 'results-driven', 'self-starter'. They add no value and fill space that keywords could occupy." },
    ],
  },
  {
    title: "About section",
    intro: "This is where you write as a human, not as a CV. Three short paragraphs is the right length. Most people skip this section. Do not skip it.",
    items: [
      { check: true, text: "First paragraph: who you are, what you do, how many years, in what context. One sentence is enough." },
      { check: true, text: "Second paragraph: what makes you different. One specific result, one specific type of problem you solve well." },
      { check: true, text: "Third paragraph: what you are looking for. Be specific about role type, sector, geography. This makes it easy for a recruiter to know immediately whether to reach out." },
      { check: true, text: "End with your email address. Recruiters sometimes view profiles without InMail credits. Make it easy to contact you directly." },
      { check: false, text: "No third-person writing. 'John is a skilled professional who...' reads as awkward. Write in first person." },
      { check: false, text: "No copy-paste from your CV. LinkedIn reads differently. It can be warmer and more direct." },
    ],
  },
  {
    title: "Experience section",
    items: [
      { check: true, text: "Every role should have a description. Blank roles look like you have something to hide and do not show up for keyword searches inside experience." },
      { check: true, text: "Use the same keywords from your target job descriptions here. Especially in the first two lines of each role." },
      { check: true, text: "Quantify at least one achievement per role. Numbers make descriptions scannable." },
      { check: true, text: "Add media to key roles: a presentation, a published article, a portfolio piece, a company link. It adds credibility and makes your profile stand out visually." },
      { check: false, text: "Do not list every task from your CV. LinkedIn is not your CV. Choose the 2-3 most relevant things for the roles you are targeting." },
    ],
  },
  {
    title: "Skills section",
    items: [
      { check: true, text: "Add up to 50 skills. Prioritise the ones that appear in the job descriptions you are targeting." },
      { check: true, text: "Pin your top 3 skills. These appear prominently on your profile. Choose the three most relevant to your target role." },
      { check: true, text: "Ask former colleagues for endorsements on your top skills. Even 3-5 endorsements signal legitimacy." },
      { check: false, text: "Do not list generic skills like 'Microsoft Office' or 'teamwork' as your top skills. Reserve prominent slots for sector-specific and technical skills." },
    ],
  },
  {
    title: "Open to Work settings",
    items: [
      { check: true, text: "Use the Open to Work feature. Set it to 'Recruiters only' so it is not visible on your public profile. This keeps your search private from your current employer." },
      { check: true, text: "Be specific in your preferences: job titles (add at least 3 variations), locations (include 'remote' if relevant), job types (full-time, contract), start date." },
      { check: true, text: "Update your preferences every 4-6 weeks. LinkedIn surfaces more active profiles to recruiters." },
      { check: false, text: "Do not select too broad a range of job titles. If you are a Financial Analyst, do not also list CEO. It signals a lack of focus and makes you appear unfocused to recruiters." },
    ],
  },
  {
    title: "Activity and visibility",
    items: [
      { check: true, text: "Log in at least once a week. LinkedIn shows profile activity to recruiters. An active profile ranks higher." },
      { check: true, text: "Comment on posts from people in your target industry. Thoughtful comments on 2-3 posts per week increase your visibility significantly." },
      { check: true, text: "Follow companies you want to work for. This signals intent and sometimes triggers recruiter outreach." },
      { check: false, text: "Do not post anything you would not want a hiring manager to see. Your activity is visible to everyone in your network by default." },
    ],
  },
];

export default function LinkedInChecklistPage() {
  return (
    <main className="min-h-screen bg-[#0A0B0D]">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#C9A84C]/3 rounded-full blur-[120px] pointer-events-none z-0" />

      <header className="sticky top-0 z-20 border-b border-white/[0.05] bg-[#0A0B0D]/90 backdrop-blur-2xl">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/client/resources" className="text-white/20 hover:text-white/60 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </Link>
            <div className="w-px h-4 bg-white/10" />
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">LinkedIn Guide</span>
          </div>
          <span className="text-white/15 text-[10px]">15 min read</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14 relative z-10">
        <div className="mb-12">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Resource</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            LinkedIn<br />Optimisation.
          </h1>
          <p className="text-white/30 text-sm leading-relaxed max-w-lg">
            Most candidates treat LinkedIn as an online CV. That is a mistake. This guide explains how recruiters actually use the platform and what to do about it.
          </p>
        </div>

        <div className="flex items-center gap-6 mb-10 pb-6 border-b border-white/6">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
              <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 4.5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-white/30 text-xs">Do this</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded border border-red-500/40 flex items-center justify-center flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2L2 6" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <span className="text-white/30 text-xs">Avoid this</span>
          </div>
        </div>

        <div className="space-y-10">
          {sections.map(section => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60" />
                <h2 className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em]">{section.title}</h2>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>
              {section.intro && (
                <p className="text-white/40 text-sm leading-relaxed mb-4 pl-1 border-l-2 border-[#C9A84C]/20 ml-0 pl-4">{section.intro}</p>
              )}
              {section.items.length > 0 && (
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <div key={i} className={`flex items-start gap-4 rounded-xl px-4 py-3.5 border ${item.check ? "bg-white/[0.02] border-white/5" : "bg-red-500/[0.03] border-red-500/8"}`}>
                      <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${item.check ? "bg-[#C9A84C]" : "border border-red-500/40"}`}>
                        {item.check ? (
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 4.5l2.5 2.5 4.5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        ) : (
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 2l4 4M6 2L2 6" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        )}
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#C9A84C]/15 bg-[#C9A84C]/5 px-6 py-6">
          <p className="text-[#C9A84C] text-sm font-bold mb-1.5">Want Noelia to review your LinkedIn?</p>
          <p className="text-white/30 text-xs leading-relaxed mb-4">Send her your profile link on WhatsApp and she will tell you exactly what to change.</p>
          <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#1fbe5a] transition-colors">
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between pt-8 border-t border-white/6">
          <Link href="/client/resources/cv-checklist" className="text-white/20 text-xs hover:text-white/50 transition-colors flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            CV Checklist
          </Link>
          <Link href="/client/resources/company-research" className="text-[#C9A84C]/60 text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-2">
            Next: Company Research
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
