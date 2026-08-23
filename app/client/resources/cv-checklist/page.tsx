import Link from "next/link";

const sections = [
  {
    title: "Format and structure",
    items: [
      { check: true, text: "One page if under 10 years of experience. Two pages maximum, ever." },
      { check: true, text: "PDF format only. Word documents lose formatting across different systems." },
      { check: true, text: "Clean font: Calibri, Garamond, or Georgia. No creative fonts. Recruiters scan fast." },
      { check: true, text: "Font size 10-11pt for body, 13-14pt for your name. No smaller than 10." },
      { check: true, text: "Margins between 1.5cm and 2.5cm. Tight margins look desperate to fill space." },
      { check: false, text: "No photo. In Sweden, Norway, Netherlands, and the UK this is standard and expected. In Germany and Switzerland a photo is still common — know your target country." },
      { check: false, text: "No date of birth, no nationality, no marital status. European data protection means companies prefer not to see this." },
      { check: false, text: "No objective statement at the top. Replace it with a 3-line professional summary that says what you do, your level, and what you are looking for." },
    ],
  },
  {
    title: "Contact information",
    items: [
      { check: true, text: "LinkedIn URL — customised, not the default one with random numbers. Go to your profile, edit public URL." },
      { check: true, text: "City and country only. No full address. Recruiters want to know if you are local or will need relocation." },
      { check: true, text: "Professional email. Firstname.lastname@gmail.com is fine. Nicknames or numbers look unprofessional." },
      { check: false, text: "No phone number if applying from abroad. It signals that you are not yet in the country and can create unnecessary friction before they even read your CV." },
    ],
  },
  {
    title: "Experience section",
    items: [
      { check: true, text: "Reverse chronological order. Most recent first, always." },
      { check: true, text: "Company name, your title, country, and dates (month and year) for every role." },
      { check: true, text: "3-5 bullet points per role. More than 5 and recruiters stop reading." },
      { check: true, text: "Start every bullet with an action verb: led, built, managed, increased, reduced, launched, negotiated." },
      { check: true, text: "At least one number per role. Percentages, team sizes, budgets, volume. Numbers stop the eye when scanning." },
      { check: false, text: "No duties. No 'responsible for managing'. Tell what you actually did and what it produced." },
      { check: false, text: "No 'worked closely with'. This says nothing. Who did you work with and what was the result?" },
      { check: false, text: "No acronyms without writing them out at least once. The recruiter may not work in your exact sector." },
    ],
  },
  {
    title: "Skills and languages",
    items: [
      { check: true, text: "List languages with honest levels: Native, Fluent (C1-C2), Professional (B2), Basic (A2-B1). Do not inflate." },
      { check: true, text: "Technical skills listed clearly: software, tools, platforms. Recruiters search by these." },
      { check: false, text: "No soft skills as a list. 'Team player', 'good communicator', 'proactive' mean nothing without evidence. Show it in your experience bullets instead." },
      { check: false, text: "No skill bars or ratings. 'Excel: 4 out of 5 stars' is meaningless and takes up space." },
    ],
  },
  {
    title: "ATS and keyword optimisation",
    items: [
      { check: true, text: "Read the job description carefully. The words they use are the words you should use. Not synonyms. Their exact words." },
      { check: true, text: "Mirror the job title somewhere in your CV if it is accurate for your level. Recruiters often search by title." },
      { check: true, text: "Include the sector keywords naturally: if the job says 'cross-functional collaboration', use that phrase somewhere." },
      { check: false, text: "No tables or text boxes. ATS systems often cannot read text inside them. Your keywords become invisible." },
      { check: false, text: "No images, icons, or graphics. Same reason. They disappear inside ATS and make your CV look empty." },
      { check: false, text: "No headers and footers with important information. Many ATS systems skip them entirely." },
    ],
  },
  {
    title: "Final check before sending",
    items: [
      { check: true, text: "Read it out loud. If it sounds like a template or a job description, rewrite it." },
      { check: true, text: "Have someone outside your industry read it. If they do not understand what you do after one read, it is not clear enough." },
      { check: true, text: "Open the PDF on a phone. Does it still read well at that size? Recruiters often review on mobile." },
      { check: false, text: "Do not send the same CV to every role. Change at minimum the professional summary and the order of your skills for each application." },
    ],
  },
];

export default function CVChecklistPage() {
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
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">CV Checklist</span>
          </div>
          <span className="text-white/15 text-[10px]">10 min read</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14 relative z-10">
        <div className="mb-12">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Resource</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            CV Checklist<br />for Europe.
          </h1>
          <p className="text-white/30 text-sm leading-relaxed max-w-lg">
            This is not generic CV advice. These are the specific things that determine whether a European recruiter reads your CV or moves on. Go through each section before you send anything.
          </p>
        </div>

        {/* Legend */}
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
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#C9A84C]/15 bg-[#C9A84C]/5 px-6 py-6">
          <p className="text-[#C9A84C] text-sm font-bold mb-1.5">Need a CV review?</p>
          <p className="text-white/30 text-xs leading-relaxed mb-4">If you want Noelia to review your CV directly and give specific feedback, reach out on WhatsApp.</p>
          <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#1fbe5a] transition-colors">
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between pt-8 border-t border-white/6">
          <Link href="/client/resources" className="text-white/20 text-xs hover:text-white/50 transition-colors flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to resources
          </Link>
          <Link href="/client/resources/linkedin-checklist" className="text-[#C9A84C]/60 text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-2">
            Next: LinkedIn Guide
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
