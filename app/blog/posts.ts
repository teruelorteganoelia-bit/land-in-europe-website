export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: Section[];
};

export type Section = {
  type: "h2" | "h3" | "p" | "ul" | "tip";
  text?: string;
  items?: string[];
};

export const POSTS: Post[] = [
  {
    slug: "how-to-find-a-job-in-spain-as-a-foreigner",
    title: "How to Find a Job in Spain as a Foreigner in 2026",
    description:
      "A practical guide to the Spanish job market for international professionals. What Spanish recruiters look for, where to find jobs, and the mistakes most foreigners make.",
    date: "2026-06-15",
    readTime: "7 min read",
    category: "Job Search",
    content: [
      { type: "p", text: "Spain is one of the most popular destinations for international professionals in Europe. Barcelona, Madrid, Valencia and Malaga attract thousands of expats every year. But getting hired here as a foreigner is a different process from what most people expect." },
      { type: "p", text: "I recruit multilingual professionals for companies in Barcelona and across Spain every week. Here is what I actually see working, and what does not." },
      { type: "h2", text: "The Spanish job market: what you need to know first" },
      { type: "p", text: "Spain has a dual job market. There is a formal market of large companies and multinationals, and an informal market where most positions are filled through personal connections before they are ever advertised. If you are applying only through job boards, you are competing for a fraction of the available roles." },
      { type: "p", text: "Spanish companies also tend to hire slowly. A process that takes two weeks in the UK or the US can take six to ten weeks in Spain. This is normal and not a sign that you have been rejected." },
      { type: "h2", text: "What Spanish recruiters look for on your CV" },
      { type: "p", text: "Spanish CVs follow different conventions from American or British ones. Here is what matters:" },
      { type: "ul", items: [
        "A clean, simple one or two page format. No photos are required unless specifically requested.",
        "A professional summary at the top that clearly states what you do and what you are looking for.",
        "Achievements listed with numbers where possible, not just responsibilities.",
        "Language skills clearly stated with level (B2, C1, native, etc.).",
        "Education section placed after experience for professionals with more than three years of work history.",
      ]},
      { type: "p", text: "One thing that surprises many international applicants: Spanish recruiters read CVs very quickly. If your profile and your target role do not match clearly within the first ten seconds, your application will not move forward regardless of your actual experience." },
      { type: "h2", text: "Do you need to speak Spanish to work in Spain?" },
      { type: "p", text: "It depends on the role and the company. Large multinationals and tech companies in Barcelona often operate entirely in English. Customer-facing roles, public sector positions, and most SMEs will require Spanish." },
      { type: "p", text: "That said, even basic Spanish makes a significant difference. It shows commitment to integrating into the market, which recruiters notice." },
      { type: "h2", text: "The three most common mistakes foreigners make" },
      { type: "ul", items: [
        "Sending the same CV they used at home without adapting it. What works in the US, India or Brazil does not automatically translate to the Spanish market.",
        "Applying only through LinkedIn and Infojobs and waiting. The most effective job searches in Spain combine applications with direct outreach and networking.",
        "Underestimating how long it will take. Most international professionals who land roles in Spain take three to six months. Starting early matters.",
      ]},
      { type: "tip", text: "If you are applying from outside Spain, include a line in your cover letter or profile that clarifies your situation: whether you already have the right to work in the EU, when you plan to relocate, or whether you are open to relocation support." },
      { type: "h2", text: "Where to find jobs in Spain as a foreigner" },
      { type: "ul", items: [
        "LinkedIn: the most active platform for professional roles, especially in Barcelona and Madrid.",
        "Infojobs: Spain's largest local job board, most useful for roles that require Spanish.",
        "Glassdoor Spain: useful for company research and salary benchmarking.",
        "Company career pages directly: many roles in Spain are only posted on company websites.",
        "Recruitment agencies: working with a recruiter who knows the Spanish market gives you access to roles that are never advertised.",
      ]},
      { type: "h2", text: "How to stand out as an international candidate" },
      { type: "p", text: "The candidates I see land roles in Spain quickly share a few things in common. They are clear about why they want to work in Spain specifically, not just in Europe generally. They have a profile that is adapted to the local market. And they are proactive rather than passive." },
      { type: "p", text: "If you are serious about finding a job in Spain, treat your LinkedIn profile and CV as the first impression a Spanish recruiter will have of you. Get them right before you start applying." },
    ],
  },
  {
    slug: "european-cv-vs-american-cv",
    title: "European CV vs American Resume: Key Differences Explained",
    description:
      "What changes when you move from an American resume or British CV to the European market. A recruiter explains the format, length, content, and cultural differences.",
    date: "2026-06-22",
    readTime: "6 min read",
    category: "CV Writing",
    content: [
      { type: "p", text: "One of the most common mistakes international professionals make when applying in Europe is sending the same document they used in their home market. It looks professional to them. It looks wrong to a European recruiter." },
      { type: "p", text: "I review CVs for European companies every day. Here is exactly what is different, and what you need to change." },
      { type: "h2", text: "Length: how long should a European CV be?" },
      { type: "p", text: "In the US, a one-page resume is almost always expected. In Europe, two pages is the standard for most professionals with more than five years of experience. One page can work for junior profiles. Three pages is rarely appropriate unless you are in academia or have extensive publications." },
      { type: "p", text: "The key is that every line should earn its place. Two pages of substance is better than one page of padding." },
      { type: "h2", text: "Format and design" },
      { type: "p", text: "European CVs tend to be cleaner and more structured than American resumes. Columns, heavy graphics, and unusual fonts are generally avoided. A simple, well-spaced layout with clear section headings is what most hiring managers in Spain, Portugal and Greece prefer." },
      { type: "p", text: "ATS systems (the automated filters companies use to screen applications) are also more widely used in Europe now. A heavily designed CV can fail these filters before a human ever reads it." },
      { type: "h2", text: "Personal information: what to include and what to leave out" },
      { type: "ul", items: [
        "Name and professional email: always include.",
        "LinkedIn URL: include if your profile is optimized.",
        "Location: include your city and country, or the city you are targeting if you are relocating.",
        "Phone number: include with country code.",
        "Date of birth and nationality: not required in most European countries and best left out to avoid unconscious bias.",
        "Photo: not required in Spain, Portugal or Greece. It is optional and a matter of personal preference.",
      ]},
      { type: "h2", text: "The professional summary" },
      { type: "p", text: "American resumes often start with an objective statement that describes what the candidate is looking for. European CVs work better with a professional summary: three to four lines that describe who you are, what you do, and what value you bring." },
      { type: "tip", text: "Write your summary for the specific role you are applying to. A generic summary is one of the fastest ways to lose a recruiter's attention in the first ten seconds." },
      { type: "h2", text: "Experience: achievements vs responsibilities" },
      { type: "p", text: "This is where most CVs fall short, regardless of which market they are written for. Listing what your job was is not the same as showing what you achieved in it." },
      { type: "p", text: "European recruiters respond to quantified achievements. Instead of 'Managed a sales team', write 'Managed a team of eight and grew revenue by 34% in 18 months'. The specificity is what makes it credible." },
      { type: "h2", text: "Language skills" },
      { type: "p", text: "Language skills are far more important on a European CV than on an American resume. List every language you speak with an honest level: native, fluent, professional working proficiency, or a CEFR level (A1 through C2) if you have a certificate." },
      { type: "p", text: "In multilingual markets like Barcelona, Lisbon or Athens, a strong language section can be the deciding factor between two otherwise equal candidates." },
      { type: "h2", text: "What to remove from your American resume before using it in Europe" },
      { type: "ul", items: [
        "The objective statement at the top.",
        "References available upon request (assumed in Europe).",
        "GPA or university grades unless you graduated in the last two years.",
        "Extracurricular activities from university unless you are a recent graduate.",
        "Full addresses or zip codes.",
      ]},
    ],
  },
  {
    slug: "what-european-recruiters-look-for-on-linkedin",
    title: "What European Recruiters Actually Look for on LinkedIn",
    description:
      "A working European recruiter explains exactly how they search LinkedIn, what makes a profile rank higher, and what makes them stop and reach out.",
    date: "2026-06-29",
    readTime: "5 min read",
    category: "LinkedIn",
    content: [
      { type: "p", text: "I use LinkedIn to find candidates for European companies every week. I am going to tell you exactly what I look at, in what order, and what makes me reach out or move on." },
      { type: "p", text: "Most LinkedIn advice is written by people who have never hired anyone. This is written from the other side of the screen." },
      { type: "h2", text: "How European recruiters actually search LinkedIn" },
      { type: "p", text: "When I am looking for candidates, I use LinkedIn Recruiter with filters. I search by job title, location, language, and keywords. Your profile needs to contain the right words in the right places for it to appear in these searches at all." },
      { type: "p", text: "If your headline says 'Open to opportunities' or 'Experienced professional', you are invisible. LinkedIn's algorithm treats your headline as one of the most important keyword fields. Use it to describe what you actually do." },
      { type: "h2", text: "The five seconds that decide everything" },
      { type: "p", text: "When I open a profile from a search result, I make a first decision in about five seconds. I look at three things:" },
      { type: "ul", items: [
        "Your headline: does it match what I am looking for?",
        "Your location or open to work status: are you available in the market I am recruiting for?",
        "Your current or most recent role: is there a logical connection to the position I am filling?",
      ]},
      { type: "p", text: "If all three are unclear or mismatched, I move to the next profile. Not because you are not qualified, but because I have 200 more profiles to review and clarity wins." },
      { type: "h2", text: "What makes a European recruiter reach out" },
      { type: "p", text: "Beyond the first five seconds, what makes me stop and send a message is a combination of things:" },
      { type: "ul", items: [
        "A headline with specific keywords matching the role I am filling.",
        "An About section that tells a story, not just a list of skills.",
        "Experience entries that show what you achieved, not just where you worked.",
        "Language skills clearly listed, especially in multilingual markets like Barcelona, Lisbon or Athens.",
        "Activity on the platform: people who post or engage regularly are easier to approach.",
      ]},
      { type: "tip", text: "Turn on Open to Work in the private mode (visible to recruiters only, not your employer). This flag is filtered in LinkedIn Recruiter searches and immediately increases your visibility." },
      { type: "h2", text: "The About section: most people get this wrong" },
      { type: "p", text: "Most About sections are either empty or a copy of the CV summary. Neither works well." },
      { type: "p", text: "The About section is your one chance to write in a human voice. Use it to explain what you do, what kind of work you do best, and what you are looking for. Write it in the first person. Keep it to three to five short paragraphs." },
      { type: "h2", text: "Keywords that European recruiters in Spain, Portugal and Greece search for" },
      { type: "p", text: "Without giving away your specific sector, here are the types of keywords that matter in these markets:" },
      { type: "ul", items: [
        "Job titles in their exact form: 'Customer Success Manager', 'Financial Controller', 'Digital Marketing Specialist'.",
        "Language skills: 'native German speaker', 'fluent French', 'C1 Dutch'.",
        "Tools and platforms specific to your field.",
        "The names of the cities or countries you want to work in.",
        "Industry-specific certifications or qualifications.",
      ]},
      { type: "h2", text: "One thing that almost no one does but should" },
      { type: "p", text: "Add your target location to your profile even if you are not there yet. If you want to work in Barcelona, set your location to Barcelona or add a line in your About section stating you are relocating. Recruiters filter by location. If your profile shows a city in another continent, you will not appear in searches for European roles." },
    ],
  },
  {
    slug: "mistakes-internationals-make-applying-in-europe",
    title: "The 7 Biggest Mistakes Internationals Make When Applying for Jobs in Europe",
    description:
      "A European recruiter shares the most common mistakes international professionals make when job searching in Europe, and exactly how to fix them.",
    date: "2026-07-01",
    readTime: "8 min read",
    category: "Job Search",
    content: [
      { type: "p", text: "After coaching international professionals and recruiting for European companies, I see the same patterns repeated constantly. The candidates who struggle are not struggling because they lack experience or qualifications. They are struggling because they are using the wrong approach for this market." },
      { type: "p", text: "Here are the seven mistakes I see most often, and what to do instead." },
      { type: "h2", text: "1. Sending the same documents they used at home" },
      { type: "p", text: "A CV written for the US market, the Indian market, or the Brazilian market will not land the same way in Europe. The format, length, level of detail, and even the section order are different. European recruiters notice immediately when a document has not been adapted." },
      { type: "p", text: "Fix it: research the CV conventions for the specific country you are targeting, or work with someone who knows the local market." },
      { type: "h2", text: "2. Applying only through job boards and waiting" },
      { type: "p", text: "Job boards show you a fraction of available roles. In many European markets, a significant portion of positions are filled through direct referrals or recruiter searches before they are ever advertised. If your strategy is to apply on LinkedIn and wait, you are already at a disadvantage." },
      { type: "p", text: "Fix it: combine applications with direct outreach to recruiters and hiring managers, and make sure your LinkedIn profile is optimized so recruiters find you." },
      { type: "h2", text: "3. Not addressing the right to work" },
      { type: "p", text: "EU citizenship or the right to work in Europe is a filter that many recruiters apply before anything else. If your application does not make your status clear, some recruiters will skip your profile to avoid uncertainty." },
      { type: "p", text: "Fix it: include a short line in your CV summary or cover letter clarifying your situation. If you have EU citizenship, an EU partner visa, or a work permit, say so explicitly." },
      { type: "h2", text: "4. A LinkedIn profile that is not adapted to the European market" },
      { type: "p", text: "Your LinkedIn profile is how European recruiters find you. If it is not optimized with the right keywords, the right location, and a clear headline, you are invisible in recruiter searches regardless of how strong your background is." },
      { type: "p", text: "Fix it: treat your LinkedIn profile as seriously as your CV. Rewrite your headline with specific keywords, update your location to your target market, and turn on Open to Work for recruiters." },
      { type: "h2", text: "5. Applying for roles they are overqualified or underqualified for" },
      { type: "p", text: "International professionals often misjudge where their experience sits in the European market. This goes both ways. Someone with ten years of experience in their home country sometimes does not realise their seniority level may not transfer directly. Others with strong international experience undersell themselves by applying for junior roles." },
      { type: "tip", text: "Research salary benchmarks and job title conventions in your target country before you start applying. What is called a 'Senior Manager' in one market might be a 'Director' in another." },
      { type: "h2", text: "6. Giving up too early" },
      { type: "p", text: "The European hiring process is slower than most international candidates expect. A process that would take two weeks in the US can take six to ten weeks in Spain or Portugal. Months of silence do not necessarily mean rejection. They often mean the hiring process is moving at its own pace." },
      { type: "p", text: "Fix it: follow up professionally after two weeks with no response. Keep your pipeline active with multiple applications running in parallel. Do not interpret silence as a no." },
      { type: "h2", text: "7. Not getting feedback on why they are not getting replies" },
      { type: "p", text: "Most people who are not getting interview requests assume the market is difficult or that they need to apply more. Often the issue is something specific and fixable: a CV format that is not landing, a LinkedIn profile that is not being found, or a positioning that is unclear." },
      { type: "p", text: "Fix it: get a professional review of your documents and profile from someone who actually works in the European market. One session with the right person can change the outcome of months of searching." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
