"use client";
import Link from "next/link";

export default function RolesPage() {
  return (
    <main className="bg-[#0A0B0D] text-white min-h-screen flex flex-col items-center justify-center px-6 font-['Inter',system-ui,sans-serif]">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C9A84C] mb-6">
        Land in Europe
      </p>
      <h1
        className="text-4xl md:text-5xl font-light text-center mb-6 leading-snug"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
      >
        Good talent is always<br />
        <em className="not-italic text-[#C9A84C]">worth a conversation.</em>
      </h1>
      <p className="text-white/40 text-base text-center max-w-md mb-10 leading-relaxed">
        Send me your profile and I will keep you in mind for upcoming opportunities across Europe.
      </p>
      <a
        href="mailto:noelia@landineuropecoaching.com"
        className="inline-block border border-[#C9A84C]/50 text-[#C9A84C] text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#C9A84C]/10 transition-colors"
      >
        Get in touch
      </a>
      <Link href="/" className="mt-8 text-white/20 text-xs hover:text-white/40 transition-colors">
        Back to home
      </Link>
    </main>
  );
}
