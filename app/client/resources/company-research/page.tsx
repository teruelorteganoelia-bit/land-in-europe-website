import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Understand what they actually do",
    items: [
      "Read the company website but skip the marketing language. Look at the Products or Services section. What do they sell and to whom?",
      "Find their latest annual report or investor page if they are public. The CEO letter at the start usually explains exactly where the company is going.",
      "Look for recent news: funding rounds, acquisitions, new market entries, layoffs. These tell you whether the company is growing, consolidating, or struggling.",
      "Check their LinkedIn company page. How many employees? Growing or shrinking? How long do employees tend to stay? (Go to People tab, filter by 'Past employees' and look at tenure.)",
    ],
  },
  {
    num: "02",
    title: "Understand the team and culture",
    items: [
      "Find the hiring manager or department head on LinkedIn before the interview. Read their background. What problems have they solved? What do they care about?",
      "Look at the profiles of people already in the role you are applying for. What is their background? What does the typical person in this team look like?",
      "Check Glassdoor for reviews. Ignore the extremes (people only write when they love it or hate it). Look for patterns across multiple reviews: what do people consistently mention?",
      "Look at how long people stay in the specific team or function you are joining. High turnover in one team with low turnover elsewhere is a signal worth noting.",
    ],
  },
  {
    num: "03",
    title: "Understand why this role exists",
    items: [
      "Is this a new role or a replacement? If it is a replacement, try to find out why the person left. LinkedIn can help: search for former employees in similar titles.",
      "How long has this role been posted? A role open for more than 3 months either has very specific requirements, a difficult hiring process, or internal problems. It is not a red flag on its own, but worth asking about.",
      "Where does this role sit in the organisation? Who does it report to? Is that person new? Are they growing the team or maintaining it?",
    ],
  },
  {
    num: "04",
    title: "Understand the market they operate in",
    items: [
      "Who are their main competitors? A simple Google search: '[company] competitors' or '[company] vs'. Knowing this shows strategic awareness.",
      "What are the current challenges in their industry? Trade publications, LinkedIn articles from industry leaders, sector-specific news. Even 30 minutes of reading will put you ahead of 90% of candidates.",
      "What is happening in their specific geography? A company expanding into a new market has different needs than one defending its home market.",
    ],
  },
  {
    num: "05",
    title: "Prepare three intelligent questions",
    intro: "Questions are not just for getting information. They signal how you think. A good question shows you have done the work.",
    items: [
      "One about the team: 'How has the team evolved over the past year, and where do you see it going?' This shows you think about context, not just the role.",
      "One about the challenge: 'What is the main thing this person will need to solve in the first six months?' This shows you are results-oriented.",
      "One about the company direction: 'I saw you recently [expanded into / launched / announced]. How does that affect this team?' This shows you have done your research and are thinking strategically.",
    ],
  },
  {
    num: "06",
    title: "Use research in your outreach message",
    intro: "When you reach out to a recruiter or hiring manager after applying, the research you do here is what separates your message from everyone else's.",
    items: [
      "Reference something specific about the company: a recent announcement, a product, a direction. Not to flatter them — to show you understand what they are building.",
      "Connect it to your experience: 'I saw you are expanding into the Nordics. I have spent three years building partnerships in Scandinavia.'",
      "Keep it short. The goal of outreach is a conversation, not an essay. Two or three sentences that show you understand them is enough.",
    ],
  },
];

export default function CompanyResearchPage() {
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
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Company Research</span>
          </div>
          <span className="text-white/15 text-[10px]">8 min read</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14 relative z-10">
        <div className="mb-12">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Resource</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Company Research<br />Framework.
          </h1>
          <p className="text-white/30 text-sm leading-relaxed max-w-lg">
            Most candidates research a company enough to answer "why do you want to work here?" This is not that. This is how to research a company so well that the interviewer wonders if you already work there.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map(step => (
            <div key={step.num} className="relative pl-14">
              <div className="absolute left-0 top-0 font-serif text-4xl font-bold text-[#C9A84C]/15 leading-none select-none">{step.num}</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60" />
                <h2 className="text-white font-bold text-base">{step.title}</h2>
              </div>
              {step.intro && (
                <p className="text-white/35 text-sm leading-relaxed mb-3 italic">{step.intro}</p>
              )}
              <div className="space-y-2">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <div className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0 mt-2" />
                    <p className="text-white/50 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/6 bg-white/[0.02] px-6 py-5">
          <p className="text-white/40 text-xs leading-relaxed">
            <span className="text-white/60 font-semibold">The rule of 45 minutes.</span> Spend 45 minutes researching a company before applying or interviewing. Most candidates spend 10. That gap is visible the moment they open their mouth, and it is the gap you can close without any additional experience or qualifications.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between pt-8 border-t border-white/6">
          <Link href="/client/resources/linkedin-checklist" className="text-white/20 text-xs hover:text-white/50 transition-colors flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            LinkedIn Guide
          </Link>
          <Link href="/client/resources/salary-guide" className="text-[#C9A84C]/60 text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-2">
            Next: Salary Guide
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
