"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { ImpactQuery, ImpactQueryVariables } from "@/tina/__generated__/types";
import ClinicalImpact from "../components/ClinicalImpact";
import ConchDivider from "../components/ConchDivider";
import TestimonialCarousel from "../components/TestimonialCarousel";

interface ImpactData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  metricsSection: {
    eyebrow: string;
    heading: string;
    stats: Array<{ value: string; label: string; subtext: string; source: string }>;
  };
  outcomesSection: { eyebrow: string; heading: string; description: string };
  documentary: { eyebrow: string; heading: string; description: string; statusBadge: string };
}

interface ImpactPageClientProps {
  query: string;
  variables: ImpactQueryVariables;
  data: ImpactQuery;
}

export default function ImpactPageClient(props: ImpactPageClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.impact as ImpactData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">

      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── KEY STATS ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-3">
              {data.metricsSection.eyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">
              {data.metricsSection.heading}
            </h2>
            <p className="font-sans text-xs text-slate-mid italic">
              All figures compiled from anonymised, aggregated clinical data with full participant consent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.metricsSection.stats.map((stat, index: number) => (
              <div
                key={index}
                className="bg-canvas-white border border-border rounded-xl p-6 flex flex-col gap-2 hover:border-blue/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="font-serif text-4xl text-navy font-semibold leading-none">
                  {stat.value}
                </span>
                <p className="font-sans text-sm text-slate font-medium leading-snug">{stat.label}</p>
                <p className="font-sans text-xs text-slate-mid italic">{stat.subtext}</p>
                <p className="font-sans text-[10px] text-slate-light uppercase tracking-wider mt-1 border-t border-border pt-2">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── CLINICAL IMPACT CHARTS ─────────────────────────────────── */}
      <ClinicalImpact
        eyebrow={data.outcomesSection.eyebrow}
        heading={data.outcomesSection.heading}
        subtitle="Standardised symptom metrics before and after clinical care"
        body={data.outcomesSection.description}
        className="border-t-0"
      />

      <ConchDivider />

      {/* ─── TESTIMONIALS ───────────────────────────────────────────── */}
      <TestimonialCarousel
        eyebrow="Survivor Voices"
        heading="Healing, in Their Own Words"
        subtitle="Extended anonymous testimonials — shared with full consent. Longer written accounts coming as the programme grows."
      />

      <ConchDivider />

      {/* ─── WRITTEN TESTIMONIALS (LONG-FORM PLACEHOLDER) ──────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas">
        <div className="max-w-4xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Written Accounts
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-3">
            Detailed Written Testimonials
          </h2>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            In-depth personal accounts of the healing journey. Collected with
            full informed consent and reviewed for safeguarding before publication.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((n: number) => (
              <div
                key={n}
                className="bg-canvas-white border border-dashed border-border rounded-xl p-8 flex flex-col gap-4 items-center justify-center text-center min-h-[220px]"
              >
                <div className="w-10 h-10 rounded-full bg-blue-soft border border-blue/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm text-slate-mid font-medium mb-1">
                    Written Account #{n}
                  </p>
                  <p className="font-sans text-xs text-slate-light italic">
                    Testimonial placeholder — to be filled as accounts are gathered and consented.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-blue-soft text-blue font-sans text-[10px] px-3 py-1 rounded-full">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── VIDEO DOCUMENTARY PLACEHOLDER ─────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-4xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.documentary.eyebrow}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-3">
            {data.documentary.heading}
          </h2>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            {data.documentary.description}
          </p>

          {/* Primary video placeholder */}
          <div className="bg-canvas border border-dashed border-border rounded-2xl aspect-video flex flex-col items-center justify-center gap-5 mb-6 p-8">
            <div className="w-16 h-16 rounded-full bg-blue-soft border border-blue/15 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-sans text-sm text-slate-mid font-medium mb-1">
                Documentary Film — Coming Soon
              </p>
              <p className="font-sans text-xs text-slate-light italic max-w-sm">
                [Video embed placeholder — survivor documentary series to be produced and inserted here]
              </p>
            </div>
            <span className="inline-flex items-center gap-2 bg-blue-soft border border-blue/15 text-blue font-sans text-xs px-4 py-2 rounded-full">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
              </svg>
              {data.documentary.statusBadge}
            </span>
          </div>

          {/* Short-form video grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Survivor Short #1", "Survivor Short #2", "Survivor Short #3"].map((title: string) => (
              <div
                key={title}
                className="bg-canvas border border-dashed border-border rounded-xl aspect-video flex flex-col items-center justify-center gap-2 p-4"
              >
                <svg className="w-6 h-6 text-slate-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <p className="font-sans text-[10px] text-slate-light text-center italic">{title} — Placeholder</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-canvas border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid italic mb-6">
            Every contribution you make is reflected in data like this.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contribute"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Support the Sanctuary
            </Link>
            <Link
              href="/support"
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              Access Clinical Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
