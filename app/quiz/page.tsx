"use client";

import { useState } from "react";
import Link from "next/link";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

const QUESTIONS = [
  {
    id: "time",
    question: "How long have you been looking for a job in Europe?",
    options: [
      { label: "Just starting, less than a month", value: "new" },
      { label: "1 to 3 months, not much traction yet", value: "early" },
      { label: "3 to 6 months and feeling stuck", value: "stuck" },
      { label: "More than 6 months", value: "long" },
    ],
  },
  {
    id: "challenge",
    question: "What is your biggest challenge right now?",
    options: [
      { label: "My CV is not getting responses", value: "cv" },
      { label: "Recruiters are not finding me on LinkedIn", value: "linkedin" },
      { label: "I do not know where to start or what my strategy should be", value: "strategy" },
      { label: "I am getting interviews but not converting them", value: "interviews" },
    ],
  },
  {
    id: "situation",
    question: "Where are you in your journey?",
    options: [
      { label: "I am outside Europe and planning my move", value: "outside" },
      { label: "I am already in Europe but struggling to break in", value: "inside" },
      { label: "I have a job but want something better", value: "upgrade" },
    ],
  },
  {
    id: "market",
    question: "Which European market are you targeting?",
    options: [
      { label: "Spain (Barcelona, Madrid, Valencia)", value: "spain" },
      { label: "Sweden (Stockholm, Gothenburg)", value: "sweden" },
      { label: "Central Europe (Germany, Switzerland, Luxembourg, Austria)", value: "central" },
      { label: "Netherlands, Belgium, or other EU countries", value: "other_eu" },
    ],
  },
  {
    id: "need",
    question: "What would help you most right now?",
    options: [
      { label: "A CV rewritten for the European market", value: "cv" },
      { label: "A LinkedIn profile that gets found by recruiters", value: "linkedin" },
      { label: "A clear strategy and action plan", value: "strategy" },
      { label: "Everything at once, I need full support", value: "all" },
    ],
  },
];

const MARKET_CONTEXT: Record<string, string> = {
  spain: "Spanish companies read CVs in a specific way. Local experience, language skills, and how you frame your seniority all matter more than most people expect. I recruit for companies there and I know what they look for.",
  sweden: "Sweden has a flat, competence-first hiring culture that catches out people from more hierarchical backgrounds. How you present your experience, not just what it is, changes everything here.",
  central: "Germany, Switzerland, and Luxembourg each have their own hiring norms, but one thing they share is a preference for precision and structured CVs. Generic applications rarely land.",
  other_eu: "The Netherlands, Belgium, and other EU markets are open to international talent, but each has its own recruiter expectations. Knowing how to position yourself for that specific market is the difference between silence and traction.",
};

type Result = {
  title: string;
  description: string;
  marketNote: string;
  service: string;
  href: string;
  cta: string;
};

function getResult(answers: Record<string, string>): Result {
  const challenge = answers["challenge"];
  const need = answers["need"];
  const time = answers["time"];
  const market = answers["market"] ?? "other_eu";

  const isLongSearch = time === "stuck" || time === "long";
  const needsAll = need === "all" || (isLongSearch && challenge === "strategy");

  const marketNote = MARKET_CONTEXT[market] ?? MARKET_CONTEXT["other_eu"];

  if (needsAll) {
    return {
      title: "You need a full strategy, not just one fix.",
      description:
        "You have been at this long enough to know that tweaking one thing is not enough. What you need is a complete repositioning: CV, LinkedIn, and a clear action plan built around the European market you are targeting. That is exactly what the Full Coaching Package covers, with a guarantee that we keep working until you get results.",
      marketNote,
      service: "Full Coaching Package",
      href: "/#contact",
      cta: "Tell me your situation",
    };
  }

  if (challenge === "cv" || need === "cv") {
    return {
      title: "Your CV is the bottleneck.",
      description:
        "If you are applying and hearing nothing, the problem is almost always the CV. European recruiters spend 8 seconds on a profile. If yours does not stop them in those 8 seconds, it goes in the bin. I rewrite CVs as a working European recruiter, not a template. The format, the language, and the positioning are built for the market you are entering.",
      marketNote,
      service: "CV Rewrite",
      href: "/cv-rewrite",
      cta: "Get your CV rewritten",
    };
  }

  if (challenge === "linkedin" || need === "linkedin") {
    return {
      title: "Recruiters are not finding you yet.",
      description:
        "Most international professionals have a LinkedIn profile. Very few have one that ranks in European recruiter searches. If you are not getting inbound messages, your profile is not optimized for how recruiters actually search. I know which keywords European hiring teams look for because I use them every day.",
      marketNote,
      service: "LinkedIn Optimization",
      href: "/linkedin-optimization",
      cta: "Optimize my LinkedIn",
    };
  }

  if (challenge === "strategy" || need === "strategy") {
    return {
      title: "You need a clear plan before anything else.",
      description:
        "Without a strategy, you are sending applications into a void and hoping something sticks. In a 60-minute session we audit your positioning, identify what is blocking you, and build an action plan you can start using immediately. You leave with clarity on what to do next and why.",
      marketNote,
      service: "Career Strategy Session",
      href: "/#contact",
      cta: "Book a strategy session",
    };
  }

  if (challenge === "interviews") {
    return {
      title: "You are close. The gap is in how you present yourself.",
      description:
        "Getting to interview is hard. Not converting them is a positioning problem, not a skills problem. A focused 60-minute session on your interview approach and how you are presenting your value to European companies can change the outcome of the next conversation you walk into.",
      marketNote,
      service: "Career Strategy Session",
      href: "/#contact",
      cta: "Book a strategy session",
    };
  }

  return {
    title: "You need a full strategy, not just one fix.",
    description:
      "Based on where you are, the most effective next step is a complete audit of your search: CV, LinkedIn, and strategy together. The Full Coaching Package covers all of it, with support throughout and a guarantee we keep working until you see results.",
    marketNote,
    service: "Full Coaching Package",
    href: "/#contact",
    cta: "Tell me your situation",
  };
}

type Step = "quiz" | "email" | "result";

export default function QuizPage() {
  const [step, setStep] = useState<Step>("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const question = QUESTIONS[current];
  const progress = (current / QUESTIONS.length) * 100;

  function handleSelect(value: string) {
    setSelected(value);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (current + 1 >= QUESTIONS.length) {
      setResult(getResult(newAnswers));
      setStep("email");
    } else {
      setCurrent(current + 1);
    }
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          answers,
          result: result?.service ?? "",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      setStep("result");
    } catch {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setName("");
    setEmail("");
    setError("");
    setResult(null);
    setStep("quiz");
  }

  function handleSkip() {
    setStep("result");
  }

  return (
    <>
      <PageNav />
      <main className="min-h-screen bg-white">
        <section className="pt-20 pb-32 px-6">
          <div className="max-w-2xl mx-auto">

            {/* ── QUIZ STEP ── */}
            {step === "quiz" && (
              <>
                <div className="mb-10 text-center">
                  <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-3">
                    Free Assessment
                  </p>
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    What is holding back your European job search?
                  </h1>
                  <p className="text-gray-400 text-sm mt-3">
                    5 questions. Less than 2 minutes. A clear answer at the end.
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Question {current + 1} of {QUESTIONS.length}</span>
                    <span>{Math.round(progress)}% complete</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#C9A84C] rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    {question.question}
                  </h2>
                  <div className="space-y-3">
                    {question.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-3 ${
                          selected === opt.value
                            ? "border-[#C9A84C] bg-[#C9A84C]/5 text-gray-900"
                            : "border-gray-200 text-gray-600 hover:border-gray-400 bg-white"
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex-shrink-0 transition-all ${
                          selected === opt.value
                            ? "border-[#C9A84C] bg-[#C9A84C]"
                            : "border-gray-300"
                        }`} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={!selected}
                  className="w-full bg-gray-900 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#C9A84C] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {current + 1 === QUESTIONS.length ? "See my result" : "Next question"}
                </button>
              </>
            )}

            {/* ── EMAIL STEP ── */}
            {step === "email" && (
              <>
                <div className="mb-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#C9A84C]" fill="none" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-2">
                    Your result is ready
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Where should I send it?
                  </h2>
                  <p className="text-gray-400 text-sm">
                    I will also send you a short note with the next step for your specific situation.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="First name"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      Your email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#C9A84C] transition-colors"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting || !name.trim() || !email.trim()}
                    className="w-full bg-[#C9A84C] text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-[#e8c96d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#C9A84C]/20"
                  >
                    {submitting ? "Sending..." : "Show me my result"}
                  </button>

                  <button
                    type="button"
                    onClick={handleSkip}
                    className="w-full text-gray-400 text-sm py-2 hover:text-gray-600 transition-colors"
                  >
                    Skip, just show me the result
                  </button>
                </form>

                <p className="text-center text-xs text-gray-300 mt-4">
                  No spam. I read every message personally.
                </p>
              </>
            )}

            {/* ── RESULT STEP ── */}
            {step === "result" && result && (
              <>
                <div className="text-center mb-8">
                  <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-3">
                    Your result
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {result.title}
                  </h2>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-7 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em]">Recommended</span>
                    <span className="text-xs font-semibold text-gray-900 bg-gray-200 px-2 py-0.5 rounded-full">
                      {result.service}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {result.description}
                  </p>
                </div>

                <div className="bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl px-6 py-5 mb-8">
                  <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.15em] mb-2">About your target market</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{result.marketNote}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-10">
                  <Link
                    href={result.href}
                    className="flex-1 inline-flex items-center justify-center bg-[#C9A84C] text-black font-bold text-sm px-8 py-4 rounded-full hover:bg-[#e8c96d] transition-colors shadow-lg shadow-[#C9A84C]/20"
                  >
                    {result.cta}
                  </Link>
                  <button
                    onClick={handleRestart}
                    className="flex-1 inline-flex items-center justify-center border border-gray-200 text-gray-500 font-semibold text-sm px-8 py-4 rounded-full hover:border-gray-400 transition-colors"
                  >
                    Retake the quiz
                  </button>
                </div>

                <div className="border-t border-gray-100 pt-8 text-center">
                  <p className="text-gray-400 text-sm mb-1">
                    Not sure this is exactly right?
                  </p>
                  <Link
                    href="/#contact"
                    className="text-sm font-semibold text-gray-900 hover:text-[#C9A84C] transition-colors"
                  >
                    Send me a message and I will tell you directly.
                  </Link>
                </div>
              </>
            )}

          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
