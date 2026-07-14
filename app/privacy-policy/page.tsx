import type { Metadata } from "next";
import PageNav from "../components/PageNav";
import PageFooter from "../components/PageFooter";

export const metadata: Metadata = {
  title: "Privacy Policy | Land in Europe",
  description: "How Land in Europe collects, uses, and protects your personal data in accordance with GDPR.",
  alternates: { canonical: "/privacy-policy" },
};

const SECTIONS = [
  {
    title: "Who is responsible for your data",
    body: "The data controller is Noelia Teruel Ortega, operating under the brand Land in Europe, based in Stockholm, Sweden. You can contact her at noelia@landineuropecoaching.com with any questions about how your data is handled.",
  },
  {
    title: "What data we collect and why",
    body: "When you fill in the contact form on this website, we collect your name, email address, and the message you send. This information is used only to respond to your enquiry. When you submit your email address to receive the European Job Search Checklist, we collect your email address to send you the requested resource. We do not use it for marketing without your explicit consent.",
  },
  {
    title: "Legal basis for processing",
    body: "We process your data on the basis of your consent, given when you submit a form on this website. You can withdraw your consent at any time by contacting us at noelia@landineuropecoaching.com.",
  },
  {
    title: "Who we share your data with",
    body: "Your form submissions are processed by Formspree (formspree.io), a third-party service that handles form data on our behalf. Formspree is GDPR-compliant and does not use your data for any purpose other than delivering it to us. We do not sell, rent, or share your personal data with any other third parties.",
  },
  {
    title: "How long we keep your data",
    body: "We keep your contact details and messages for as long as necessary to respond to your enquiry and for up to 12 months afterwards in case of follow-up. If you have asked to receive a resource by email, we keep your email address until you ask us to remove it.",
  },
  {
    title: "Cookies",
    body: "This website does not currently use tracking cookies or advertising cookies. We may use basic analytics in the future, in which case this policy will be updated and your consent will be requested.",
  },
  {
    title: "Your rights under GDPR",
    body: "If you are based in the European Union or European Economic Area, you have the right to access the personal data we hold about you, request that we correct or delete it, withdraw your consent at any time, and lodge a complaint with your local data protection authority. To exercise any of these rights, contact us at noelia@landineuropecoaching.com. We will respond within 30 days.",
  },
  {
    title: "Changes to this policy",
    body: "We may update this privacy policy from time to time. The current version will always be available at landineuropecoaching.com/privacy-policy. Last updated: July 2026.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageNav />
      <main>
        <section className="pt-20 pb-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold text-[#C9A84C] uppercase tracking-[0.2em] mb-4">Legal</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm mb-14">
              This policy explains what personal data Land in Europe collects, how it is used, and your rights under GDPR.
            </p>
            <div className="space-y-10">
              {SECTIONS.map((s, i) => (
                <div key={i}>
                  <h2 className="font-semibold text-gray-900 text-base mb-3">{s.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 pt-8 border-t border-gray-100">
              <p className="text-gray-400 text-sm">Questions about this policy? Email <a href="mailto:noelia@landineuropecoaching.com" className="text-gray-900 underline underline-offset-2">noelia@landineuropecoaching.com</a></p>
            </div>
          </div>
        </section>
      </main>
      <PageFooter />
    </>
  );
}
