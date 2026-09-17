"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { ContributeQuery, ContributeQueryVariables } from "@/tina/__generated__/types";
import ClinicalImpact from "../components/ClinicalImpact";
import TestimonialCarousel from "../components/TestimonialCarousel";

interface ContributeData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  fundraisingGoal: { targetAmount: number; raisedAmount: number; bannerText: string };
  tiersSection: { eyebrow: string; heading: string; subtitle: string; tiers: Array<{ name: string; amount: number; badge: string; features: string[]; ctaLabel: string; ctaHref: string }> };
  transparencyNote: { heading: string; text: string };
}

interface ContributePageClientProps {
  query: string;
  variables: ContributeQueryVariables;
  data: ContributeQuery;
  testimonials: { query: string; variables: any; data: any };
}

const GOFUNDME_URL = "https://gofund.me/c49acb57b";

export default function ContributePageClient(props: ContributePageClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.contribute as ContributeData;

  const FUNDRAISING_RAISED = data.fundraisingGoal.raisedAmount;
  const FUNDRAISING_GOAL = data.fundraisingGoal.targetAmount;
  const FUNDRAISING_PCT = Math.min(100, Math.round((FUNDRAISING_RAISED / FUNDRAISING_GOAL) * 100));

  return (
    <div className="bg-canvas font-sans text-slate">

      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic max-w-2xl mx-auto">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── FUNDRAISING PROGRESS ───────────────────────────────────── */}
      <section className="py-10 px-6 bg-canvas border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-navy font-semibold mb-4">
            {data.fundraisingGoal.bannerText}
          </p>
          <div className="w-full h-3 bg-border rounded-full overflow-hidden mb-3">
            <div
              className="h-full bg-navy rounded-full transition-all duration-700 ease-out"
              style={{ width: `${FUNDRAISING_PCT}%` }}
              role="progressbar"
              aria-valuenow={FUNDRAISING_RAISED}
              aria-valuemin={0}
              aria-valuemax={FUNDRAISING_GOAL}
              aria-label={`£${FUNDRAISING_RAISED.toLocaleString()} raised of £${FUNDRAISING_GOAL.toLocaleString()} goal`}
            />
          </div>
          <p className="font-sans text-sm text-slate-mid">
            <span className="font-semibold text-navy">£{FUNDRAISING_RAISED.toLocaleString()}</span>
            {" "}raised of £{FUNDRAISING_GOAL.toLocaleString()} · {FUNDRAISING_PCT}%
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 text-center">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              {data.tiersSection.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
              {data.tiersSection.heading}
            </h2>
            <p className="font-sans text-sm text-slate-mid">
              {data.tiersSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {data.tiersSection.tiers.map((tier: { name: string; amount: number; badge: string; features: string[]; ctaLabel: string; ctaHref: string }, index: number) => (
              <div key={index} className={`border ${tier.badge ? "border-2 border-navy" : "border-border"} rounded-xl p-8 flex flex-col bg-canvas ${tier.badge ? "relative" : ""}`}>
                {tier.badge && (
                  <div className="absolute top-4 right-4 bg-blue text-white font-sans text-xs px-2.5 py-1 rounded tracking-wide">
                    {tier.badge}
                  </div>
                )}
                <div className="mb-6">
                  <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                    {tier.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-4xl text-navy font-semibold">£{tier.amount}</span>
                  </div>
                  <p className="font-sans text-sm text-slate-mid mt-1 font-medium">
                    {tier.name === "Custom" ? "Any Amount" : tier.name === "Tier One" ? "Sponsor a Session" : "Sponsor a Course of Therapy"}
                  </p>
                </div>
                <div className="w-full h-px bg-border mb-6" />
                <ul className="space-y-3 text-sm text-slate-mid font-sans mb-8 flex-1">
                  {tier.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-2.5">
                      <span className="text-blue mt-0.5 text-xs shrink-0">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-navy text-navy font-sans font-medium text-center py-3 rounded-lg text-sm hover:bg-navy hover:text-white active:scale-[0.98] transition-all duration-150"
                >
                  {tier.ctaLabel}
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Transparency
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            {data.transparencyNote.heading}
          </h2>

          <div className="space-y-4 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8 text-left sm:text-center">
            <p>
              {data.transparencyNote.text}
            </p>
          </div>

          <div className="space-y-3 text-left">
            {[
              {
                label: "Clinical Sessions",
                desc: "UKCP-registered therapist time, session materials, and secure session notes platform.",
                weight: "Primary",
              },
              {
                label: "Group Facilitation",
                desc: "Venue (physical or secure virtual), group workbooks, facilitation support, and participant materials.",
                weight: "Primary",
              },
              {
                label: "Sanctuary Operations",
                desc: "Secure client portal, administration, clinical supervision, and CPD to maintain UKCP registration standards.",
                weight: "Secondary",
              },
            ].map((item: { label: string; desc: string; weight: string }) => (
              <div key={item.label} className="flex items-start gap-5 bg-canvas border border-border rounded-xl px-6 py-4">
                <div className="shrink-0 mt-1">
                  <span
                    className={`inline-block font-sans text-xs px-2 py-0.5 rounded tracking-wide ${
                      item.weight === "Primary"
                        ? "bg-blue-soft text-blue"
                        : "bg-canvas-white text-slate-light border border-border"
                    }`}
                  >
                    {item.weight}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-navy font-medium mb-0.5">{item.label}</p>
                  <p className="font-sans text-sm text-slate-mid leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <ClinicalImpact />

      <TestimonialCarousel
        eyebrow="What Donors Make Possible"
        heading="Healing, in Their Own Words"
        subtitle="Anonymous accounts from survivors whose care was funded by community donations."
      />

      {/* ─── FINANCIALS ─────────────────────────────────────────────── */}
      <section id="financials" className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Accountability
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Financials
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8 max-w-2xl mx-auto">
            We are committed to transparent stewardship of every donation. Summary
            financial reports and fund-allocation breakdowns will be published here
            as the initiative grows. Until then, all contributions are processed
            through our public fundraising campaign with clear campaign goals.
          </p>
          <div className="bg-canvas border border-border rounded-xl p-6 text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-border pb-4">
              <span className="font-sans text-sm text-navy font-medium">Current campaign goal</span>
              <span className="font-sans text-sm text-slate-mid">£{FUNDRAISING_GOAL.toLocaleString()}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-border pb-4">
              <span className="font-sans text-sm text-navy font-medium">Raised to date</span>
              <span className="font-sans text-sm text-slate-mid">£{FUNDRAISING_RAISED.toLocaleString()}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <span className="font-sans text-sm text-navy font-medium">Primary use of funds</span>
              <span className="font-sans text-sm text-slate-mid">Clinical sessions &amp; sanctuary operations</span>
            </div>
          </div>
          <a
            href={GOFUNDME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-navy text-white font-sans text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            View fundraising campaign
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-canvas border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-6 italic">
            Are you a survivor seeking clinical support rather than a donor?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/support"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Start the Therapeutic Process
            </Link>
            <Link
              href="/mission"
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              Read Our Mission
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
