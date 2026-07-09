import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intake Received — Heal Gurukuli",
  description:
    "Your therapy intake submission is under review. Meanwhile, explore our Resources page for immediate support.",
};

export default function TherapyWelcomePage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 rounded-full bg-blue-soft border border-blue/20 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-7 h-7 text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Submission Received
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-semibold leading-tight mb-6">
            Welcome
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />

          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed mb-4">
            Your submission is under review. In the meantime, please refer to our
            Resources page for immediate support.
          </p>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            A member of the clinical team will be in touch within 1–2 business days.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/resources"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Go to Resources
            </Link>
            <Link
              href="/support"
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              Back to Therapy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
