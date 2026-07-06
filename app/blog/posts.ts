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
      "What the Spanish job market actually looks like from the inside. I recruit multilingual professionals for companies in Barcelona every week. Here is what works and what does not.",
    date: "2026-06-15",
    readTime: "7 min read",
    category: "Job Search",
    content: [
      { type: "p", text: "I recruit multilingual professionals for companies in Barcelona and across Spain every week. I know what lands and what gets skipped. This is not general advice. It is what I see in my inbox on a Tuesday morning." },
      { type: "h2", text: "How the Spanish job market actually works" },
      { type: "p", text: "Spain has two job markets running at the same time. The visible one, with ads on LinkedIn and Infojobs, and the one where most positions get filled before anyone posts anything. Personal connections, recruiter databases, internal referrals. If you are only applying to ads, you are looking at maybe 30% of what is actually available." },
      { type: "p", text: "Spanish companies also hire slowly. A process that takes two weeks in the UK can take eight in Spain. That silence in week three is not a rejection. It is Tuesday." },
      { type: "h2", text: "What Spanish recruiters look for on your CV" },
      { type: "p", text: "Spanish CVs have their own conventions and most international applicants do not know them." },
      { type: "ul", items: [
        "One or two pages. Clean layout, no heavy design.",
        "A professional summary at the top that says what you do and what you want.",
        "Results with numbers, not a list of things your job description said you were responsible for.",
        "Language skills with honest levels: B2, C1, native.",
        "Education after experience if you have more than three years of work history.",
      ]},
      { type: "p", text: "Spanish recruiters read fast. If your profile and the role do not connect in the first ten seconds, your application does not move. That is not harsh, that is just the reality when there are 200 CVs in a folder." },
      { type: "h2", text: "Do you need Spanish to work in Spain?" },
      { type: "p", text: "Depends entirely on the company and role. Tech companies and multinationals in Barcelona often run entirely in English. Customer-facing roles, SMEs, and anything in the public sector will want Spanish." },
      { type: "p", text: "Even basic Spanish helps. Not because it is required, but because it tells a recruiter you are planning to stay, not just passing through." },
      { type: "h2", text: "The mistakes I see most often" },
      { type: "ul", items: [
        "Sending the CV they used at home without changing anything. What reads well in the US or Brazil does not automatically read well in Spain.",
        "Applying on job boards and waiting. The most effective searches I see combine applications with direct outreach and a properly optimized LinkedIn profile.",
        "Underestimating the timeline. Most international professionals take three to six months to land a role in Spain. Starting with the right tools from day one matters.",
      ]},
      { type: "tip", text: "If you are applying from outside Spain, add one line somewhere in your profile or application that clarifies your right to work status and when you can start or relocate. Recruiters will not assume. Make it easy for them." },
      { type: "h2", text: "Where to actually look" },
      { type: "ul", items: [
        "LinkedIn: the most active platform for professional roles in Barcelona and Madrid.",
        "Infojobs: Spain's main local job board, most relevant for roles that require Spanish.",
        "Company career pages: many Spanish companies post roles only on their own websites.",
        "Recruitment agencies: a good recruiter in Spain can give you access to roles that never get advertised anywhere.",
      ]},
      { type: "h2", text: "What the candidates who land fast have in common" },
      { type: "p", text: "They know exactly which roles they are going for. They have adapted their documents to the local market. And they are not just applying and waiting. They are visible, they are reaching out, and they have a LinkedIn profile that shows up when a recruiter searches." },
      { type: "p", text: "Get those two things right before you start and you are already ahead of most people in the pile." },
    ],
  },
  {
    slug: "european-cv-vs-american-cv",
    title: "European CV vs American Resume: Key Differences Explained",
    description:
      "I review CVs for European companies every day. Here is exactly what changes when you move from an American resume to the European market, and what to remove before you send anything.",
    date: "2026-06-22",
    readTime: "6 min read",
    category: "CV Writing",
    content: [
      { type: "p", text: "Every week I receive CVs from professionals who have adapted a document built for the US or Canadian market and sent it to a company in Spain or Portugal. It looks fine to them. It reads wrong to the recruiter on the other side." },
      { type: "p", text: "I review CVs for European companies every day. Here is what actually needs to change." },
      { type: "h2", text: "Length" },
      { type: "p", text: "In the US, one page is almost always expected. In Europe, two pages is the norm for anyone with more than five years of experience. One page works for junior profiles. Three pages is almost never right unless you are in academia." },
      { type: "p", text: "Every line should be there for a reason. Two pages of substance beats one page of filler." },
      { type: "h2", text: "Format and design" },
      { type: "p", text: "European CVs are cleaner. Columns, icons, heavy graphics, unusual fonts most hiring managers in Spain, Portugal and Greece do not expect these and some find them distracting." },
      { type: "p", text: "ATS filters are also more common in European companies now. A heavily designed CV can fail the automated screen before a human ever opens it. Simple formatting is not boring. It is strategic." },
      { type: "h2", text: "Personal information" },
      { type: "ul", items: [
        "Name and professional email: always.",
        "LinkedIn URL: yes, if your profile is in good shape.",
        "City and country, or your target city if you are relocating.",
        "Phone number with country code.",
        "Date of birth and nationality: not required anywhere in Europe. Leave them out.",
        "Photo: not required in Spain, Portugal or Greece. Personal preference.",
      ]},
      { type: "h2", text: "The professional summary" },
      { type: "p", text: "American resumes often open with an objective statement about what the candidate is looking for. European CVs work better with a short professional summary: who you are, what you do, what you bring. Three to four lines, written for the role you are applying to." },
      { type: "tip", text: "A generic summary is one of the fastest ways to lose a recruiter in the first ten seconds. Write it for the specific role. Rewrite it every time you apply somewhere different." },
      { type: "h2", text: "Achievements, not responsibilities" },
      { type: "p", text: "This is where most CVs fall short, no matter which market they were written for. Listing what your job description said is not the same as showing what you did." },
      { type: "p", text: "European recruiters want numbers. Not 'Managed a sales team' 'Managed a team of eight and grew revenue by 34% in 18 months.' The specificity is what makes it land." },
      { type: "h2", text: "Language skills" },
      { type: "p", text: "Far more important here than on an American resume. List every language you actually speak with an honest level: native, fluent, professional working proficiency, or a CEFR level if you have a certificate." },
      { type: "p", text: "In Barcelona, Lisbon or Athens, a strong language section can be the thing that gets you the call over someone equally qualified." },
      { type: "h2", text: "What to cut before you send" },
      { type: "ul", items: [
        "The objective statement.",
        "References available upon request assumed in Europe, takes up space.",
        "GPA or university grades unless you graduated in the last two years.",
        "Extracurricular activities from university unless you are a recent graduate.",
        "Full street addresses or zip codes.",
      ]},
    ],
  },
  {
    slug: "what-european-recruiters-look-for-on-linkedin",
    title: "What European Recruiters Actually Look for on LinkedIn",
    description:
      "I use LinkedIn to find candidates for European companies every week. Here is exactly what I look at, in what order, and what makes me reach out or move on.",
    date: "2026-06-29",
    readTime: "5 min read",
    category: "LinkedIn",
    content: [
      { type: "p", text: "I use LinkedIn to find candidates for European companies every week. I am going to tell you exactly what I look at, in what order, and what makes me reach out or move on." },
      { type: "p", text: "Most LinkedIn advice is written by people who have never hired anyone. This is from the other side of the screen." },
      { type: "h2", text: "How I actually search" },
      { type: "p", text: "I use LinkedIn Recruiter with filters. Job title, location, language, keywords. Your profile has to contain the right words in the right places just to show up in results." },
      { type: "p", text: "If your headline says 'Open to opportunities' or 'Experienced professional', you are not appearing in my search. LinkedIn treats your headline as one of the most important keyword fields on your profile. Use it to say what you actually do." },
      { type: "h2", text: "The first five seconds" },
      { type: "p", text: "When I open a profile from a search result, I make a first decision fast. I check three things:" },
      { type: "ul", items: [
        "Your headline: does it match what I am looking for?",
        "Your location or open to work status: are you available in the market I am recruiting for?",
        "Your current or most recent role: is there a clear connection to what I am filling?",
      ]},
      { type: "p", text: "If any of those are unclear or do not match, I move on. Not because you are not qualified. Because I have 200 more profiles to review and I need clarity fast." },
      { type: "h2", text: "What makes me reach out" },
      { type: "ul", items: [
        "A headline with specific keywords that match the role.",
        "An About section that reads like a person wrote it, not a list of skills.",
        "Experience that shows what you achieved, not just where you worked.",
        "Language skills clearly listed. This matters a lot in Barcelona, Lisbon and Athens.",
        "Some activity on the platform. People who post or engage are easier to approach.",
      ]},
      { type: "tip", text: "Turn on Open to Work in private mode visible to recruiters but not your employer. That flag gets filtered in LinkedIn Recruiter searches. It immediately increases how often you show up." },
      { type: "h2", text: "The About section" },
      { type: "p", text: "Most About sections are empty or a copy-paste of the CV summary. Neither works." },
      { type: "p", text: "This is the one place on LinkedIn where you can write like a person. Use it to explain what you do, what kind of work you are good at, and what you are looking for. First person. Three to five short paragraphs. Done." },
      { type: "h2", text: "Keywords that matter in European recruiter searches" },
      { type: "ul", items: [
        "Exact job titles: 'Customer Success Manager', 'Financial Controller', 'Digital Marketing Specialist'.",
        "Language skills written out: 'native German speaker', 'fluent French', 'C1 Dutch'.",
        "Tools and platforms specific to your field.",
        "The cities or countries you are targeting.",
        "Certifications or qualifications relevant to your sector.",
      ]},
      { type: "h2", text: "The thing almost no one does" },
      { type: "p", text: "Set your location to your target city, not where you currently live. If you want to work in Barcelona, your profile should say Barcelona or your About section should mention you are relocating. Recruiters filter by location. A profile showing a city on another continent will not show up in a search for candidates in Europe." },
    ],
  },
  {
    slug: "mistakes-internationals-make-applying-in-europe",
    title: "The 7 Biggest Mistakes Internationals Make When Applying for Jobs in Europe",
    description:
      "I recruit for European companies and coach international professionals. These are the mistakes I see every week. They are specific, they are fixable, and most people do not know they are making them.",
    date: "2026-07-01",
    readTime: "8 min read",
    category: "Job Search",
    content: [
      { type: "p", text: "I recruit for European companies and coach international professionals. The same mistakes come up constantly. Not because people are not qualified. Because they are using an approach that does not work in this market." },
      { type: "p", text: "Here are the seven I see most often." },
      { type: "h2", text: "1. Sending the same documents they used at home" },
      { type: "p", text: "A CV built for the US, India or Brazil will not land the same way in Europe. The format is different. The length is different. The section order is different. The level of detail expected is different. European recruiters notice immediately when a document has not been adapted." },
      { type: "p", text: "Research the CV conventions for your target country, or get it rewritten by someone who actually works in that market." },
      { type: "h2", text: "2. Applying only through job boards and waiting" },
      { type: "p", text: "Job boards show a fraction of what is available. In many European markets, a large share of roles get filled through recruiter searches or personal referrals before anything ever gets posted. Applying on LinkedIn and waiting is a passive strategy in a market that rewards being visible and proactive." },
      { type: "p", text: "Combine applications with direct outreach. Make sure your LinkedIn profile shows up when a recruiter searches for someone like you." },
      { type: "h2", text: "3. Not being clear about the right to work" },
      { type: "p", text: "EU citizenship or the right to work in Europe is often the first filter a recruiter applies. If your application does not make your status clear, some will skip you rather than chase clarification." },
      { type: "p", text: "Add one line to your CV summary or cover letter. If you have EU citizenship, an EU partner visa, or a work permit, say so explicitly. Do not make the recruiter wonder." },
      { type: "h2", text: "4. A LinkedIn profile built for the wrong market" },
      { type: "p", text: "Your LinkedIn profile is how European recruiters find you passively. If it is not using the right keywords, showing the right location, and giving a clear picture of what you do, you are invisible in recruiter searches no matter how strong your background is." },
      { type: "p", text: "Treat your LinkedIn as seriously as your CV. Rewrite your headline with specific keywords. Update your location to your target city. Turn on Open to Work for recruiters." },
      { type: "h2", text: "5. Misjudging where their experience sits in the European market" },
      { type: "p", text: "This goes both ways. Someone with ten years of experience sometimes applies for roles two levels below where they should be targeting. Others apply for senior roles without realising their title does not carry the same seniority in European markets." },
      { type: "tip", text: "Check salary benchmarks and job title conventions for your target country before you start applying. A 'Senior Manager' in one market might be called a 'Director' in another and come with different expectations." },
      { type: "h2", text: "6. Giving up before the process has had time to work" },
      { type: "p", text: "European hiring is slower than most international candidates expect. A process that takes two weeks in the US can take eight in Spain or Portugal. Three weeks of silence is not a rejection. It is often just a Tuesday." },
      { type: "p", text: "Follow up professionally after two weeks with no response. Keep multiple applications active in parallel. Do not read silence as a no." },
      { type: "h2", text: "7. Not finding out why they are not getting replies" },
      { type: "p", text: "When the applications are going out and nothing is coming back, most people assume the market is hard or they need to apply more. Often the issue is something specific: a CV format that does not read right for this market, a LinkedIn profile that is not showing up in searches, a positioning that is not clear." },
      { type: "p", text: "Get a real review from someone who works in the European market. One conversation can explain months of silence." },
    ],
  },
  {
    slug: "will-ai-replace-your-job-in-europe",
    title: "Will AI Replace Your Job in Europe? What International Professionals Need to Know",
    description:
      "Everyone is asking this question. Here is an honest answer from someone working inside European recruitment right now: what is actually changing, what is not, and what you should be doing about it.",
    date: "2026-07-04",
    readTime: "6 min read",
    category: "Job Search",
    content: [
      { type: "p", text: "This is the question I get more than any other right now. From candidates in my inbox, from professionals in sessions, from people who have been applying for months and are starting to wonder if the whole process has changed underneath them." },
      { type: "p", text: "I work in recruitment. I see what companies are actually doing. Not what they are announcing in press releases. What they are doing when they need to hire someone. Here is what is real and what is noise." },
      { type: "h2", text: "What AI is actually changing in hiring" },
      { type: "p", text: "ATS systems (the automated filters that screen CVs before a human sees them) have been around for years. AI is making them smarter. Some companies now use tools that scan for keyword matches, score candidates automatically, and flag profiles that do not fit a pattern." },
      { type: "p", text: "This means a CV that was written for a different market, or without the right terminology for the role, gets filtered out faster than before. Not because a recruiter decided you were not right. Because a system never passed you through." },
      { type: "p", text: "That part is real and it is already happening." },
      { type: "h2", text: "What AI is not replacing" },
      { type: "p", text: "The decision to hire someone is still made by a person. A hiring manager still has to meet you, read your presence in an interview, and decide if they want to work with you. AI is changing who gets seen. It is not changing who gets hired." },
      { type: "p", text: "It is also not replacing the things that make international candidates valuable in the first place. Language skills, cultural fluency, the ability to work across different contexts. These are specifically what AI cannot replicate and specifically what European companies are hiring for." },
      { type: "h2", text: "Which roles are actually at risk" },
      { type: "p", text: "Repetitive tasks. Data entry, basic content writing, template-heavy work, rule-based administrative processes. These are genuinely at risk and it would be dishonest to say otherwise." },
      { type: "p", text: "Roles that involve judgment, relationship-building, cultural navigation, complex communication, or working with ambiguity are far more resilient. This is not reassuring talk. It is what the hiring data actually shows." },
      { type: "h2", text: "What this means for your job search right now" },
      { type: "p", text: "If your CV is not written for the European market and optimized for ATS filters, you are more invisible than ever. The bar for getting through the automated screen has gone up, not down." },
      { type: "p", text: "If your LinkedIn profile does not use the exact keywords European recruiters search for, you are not appearing in searches at all. Not because you are unqualified. Because the system does not know you exist." },
      { type: "tip", text: "AI screening systems look for keyword matches between your profile and the job description. Read the job posting carefully and make sure the language in your CV mirrors the language in the role not synonyms, the exact terms they used." },
      { type: "h2", text: "The honest answer" },
      { type: "p", text: "AI is not going to replace your job in the next year if you are a skilled professional with real experience and the ability to work across cultures. But it is changing how you get found, how your application gets filtered, and how quickly the wrong document gets discarded." },
      { type: "p", text: "The professionals I see getting hired fast are not the ones ignoring these changes. They are the ones who understood the new rules and adapted their positioning accordingly. That is the part you can control." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
