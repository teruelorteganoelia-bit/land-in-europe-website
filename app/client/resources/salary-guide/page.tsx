import Link from "next/link";

const sections = [
  {
    title: "The basic rule",
    body: "The person who names a number first is usually at a disadvantage. Your goal is to get as much information as possible before committing to a range. Everything in this guide is built around that principle.",
  },
  {
    title: "Before you apply: know your number",
    items: [
      "Research salary ranges before you apply, not after you get the offer. Use Glassdoor, LinkedIn Salary, levels.fyi (for tech), and local job boards that show salaries publicly.",
      "Factor in total compensation: base salary, bonus structure, pension contributions, equity, remote work flexibility, extra vacation days. In the Nordics, the total package often matters more than the base.",
      "Know the difference between gross and net in your target country. Tax rates in Sweden, Denmark, and the Netherlands are high. A €70,000 gross in Sweden takes home roughly €45,000. Factor this in.",
      "Talk to people who work in your target sector and country. LinkedIn outreach to people in similar roles asking about the market is legitimate and usually works. Most people are willing to share a range.",
    ],
  },
  {
    title: "When they ask first: the screening call",
    body: "This usually happens early, often before you have interviewed. The recruiter asks: 'What are your salary expectations?' This is normal. Here is how to handle it.",
    items: [
      "Give a range, not a single number. A range signals flexibility while anchoring the conversation. Make the bottom of your range a number you would actually accept.",
      "The format: 'Based on my research for this role and market, I am looking at [X to Y]. Does that work with what you have budgeted for this position?' Immediately turning it back gives you information.",
      "If they push back on the range: 'I want to be flexible and understand the full package first. Can you share the budget range for the role?' This is a fair ask and most recruiters will answer it.",
      "If they will not give a number: that is a signal. It either means the budget is lower than your range, or there is no clear budget. Neither is necessarily a dealbreaker, but it is worth noting.",
    ],
  },
  {
    title: "During the interview process",
    items: [
      "Do not raise salary again until you have an offer. You have more leverage with an offer in hand than at any earlier stage.",
      "If they ask again mid-process, give the same answer as before. Consistency signals confidence.",
      "Use the time before the offer to gather information: ask about the bonus structure, how it is calculated, and what the team's typical payout looks like. This is fair game.",
    ],
  },
  {
    title: "When you receive the offer",
    body: "You have an offer. This is your highest point of leverage. Most people accept or counter immediately. Neither is optimal.",
    items: [
      "Thank them and ask for time. 'Thank you, I am very interested. Can I have until [specific date — 2-3 days] to review the full package?' This is normal and expected. No company rescinds an offer because a candidate asked for time to think.",
      "Review the complete package in writing. Base, bonus, equity, start date, benefits, pension, remote policy. Make sure you understand every line before you respond.",
      "If you want to negotiate, do it once and do it clearly. Do not nibble. Make a single, specific counter with a reason: 'Based on my research and experience, I was expecting a base closer to [X]. Is there flexibility there?'",
      "Have a reason ready. The strongest reasons are: market data ('the market rate for this role in this city is X'), competing offers ('I have another offer at X, I would prefer to join you but need to close the gap'), or experience ('I am bringing [specific skill/experience] that was not in the original job description').",
      "If they say the base is fixed, ask about other parts: sign-on bonus, extra vacation, earlier review date, remote flexibility. There is almost always something that can move.",
    ],
  },
  {
    title: "Country-specific notes",
    items: [
      "Sweden: Salary is relatively transparent. Many roles have a union agreement (kollektivavtal) that sets a floor. Ask if this applies. Negotiating upward from the floor is expected and normal.",
      "Netherlands: Salary ranges are often published in job ads. If not, asking is completely normal. Total package including pension contribution (typically 15-25% of salary) matters a lot here.",
      "Germany: More formal than Scandinavia. Negotiating is expected but should be done professionally and based on market data, not personal need. Knowing the Tarifvertrag (collective agreement) for your sector helps.",
      "Denmark: The highest salaries in Europe for many roles, but also the highest taxes. Net salary is the number that matters. Pension contributions from the employer are often 12-17% of salary on top of the gross.",
      "UK: Negotiating is expected and common. Be direct. Companies post salary ranges more than they used to due to recent transparency pressure. Do your research on the Living Wage vs market rate for your sector.",
    ],
  },
  {
    title: "What not to say",
    items: [
      "Do not say 'I need X because my rent is Y.' Personal financial need is not a negotiation argument. The company is paying for the value you bring, not covering your expenses.",
      "Do not accept immediately. Even if the offer is exactly what you wanted, taking 24 hours to review it is professional and signals that you take decisions seriously.",
      "Do not negotiate by email if you can avoid it. A call is faster, warmer, and gives you more room to respond to their reaction in real time.",
      "Do not apologise for negotiating. 'I hope this is not too much to ask' weakens your position before you have even made the ask.",
    ],
  },
];

export default function SalaryGuidePage() {
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
            <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Salary Guide</span>
          </div>
          <span className="text-white/15 text-[10px]">12 min read</span>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-14 relative z-10">
        <div className="mb-12">
          <p className="text-[#C9A84C]/70 text-[10px] font-bold uppercase tracking-[0.35em] mb-5">Resource</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
            Salary Negotiation<br />in Europe.
          </h1>
          <p className="text-white/30 text-sm leading-relaxed max-w-lg">
            Most candidates leave money on the table. Not because they are bad at negotiating, but because they do not know the process. This guide walks you through every stage.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map(section => (
            <div key={section.title}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60" />
                <h2 className="text-white/25 text-[10px] font-bold uppercase tracking-[0.3em]">{section.title}</h2>
                <div className="flex-1 h-px bg-white/[0.04]" />
              </div>
              {section.body && (
                <p className="text-white/40 text-sm leading-relaxed mb-4 pl-4 border-l-2 border-[#C9A84C]/20">{section.body}</p>
              )}
              {section.items && section.items.length > 0 && (
                <div className="space-y-2">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl bg-white/[0.02] border border-white/5 px-4 py-3.5">
                      <div className="w-1 h-1 rounded-full bg-[#C9A84C]/50 flex-shrink-0 mt-2" />
                      <p className="text-white/55 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#C9A84C]/15 bg-[#C9A84C]/5 px-6 py-6">
          <p className="text-[#C9A84C] text-sm font-bold mb-1.5">Have an offer on the table?</p>
          <p className="text-white/30 text-xs leading-relaxed mb-4">Noelia can help you think through the negotiation before you respond. Message her on WhatsApp with the details.</p>
          <a href="https://wa.me/46769763498" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#1fbe5a] transition-colors">
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center justify-between pt-8 border-t border-white/6">
          <Link href="/client/resources/company-research" className="text-white/20 text-xs hover:text-white/50 transition-colors flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Company Research
          </Link>
          <Link href="/client/resources" className="text-[#C9A84C]/60 text-xs hover:text-[#C9A84C] transition-colors flex items-center gap-2">
            All resources
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
