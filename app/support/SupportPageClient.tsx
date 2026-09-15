"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { TherapyQuery, TherapyQueryVariables } from "@/tina/__generated__/types";
import ConchDivider from "../components/ConchDivider";
import GovernanceBlock from "../components/GovernanceBlock";
import TherapyIntakeForm from "../components/TherapyIntakeForm";

interface TherapyData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  stepsSection: { eyebrow: string; heading: string; steps: Array<{ stepNumber: string; title: string; description: string }> };
  intakeTeaser: { eyebrow: string; heading: string; subtitle: string; disclaimer: string };
  oneToOneTherapy: { eyebrow: string; heading: string; bodyParagraphs: string[] };
  consultationInfo: { eyebrow: string; heading: string; body: string; ctaLabel: string; ctaHref: string };
  modalitiesSection: { eyebrow: string; heading: string; subtitle: string; modalities: Array<{ title: string; description: string; linkText: string; linkHref: string }> };
  meetTheTeam: { eyebrow: string; heading: string; body: string; ctaLabel: string; ctaHref: string };
  complaints: { eyebrow: string; heading: string; body: string; pdfLabel: string; pdfHref: string };
  crisisTeaser: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    groups: Array<{ region: string; lines: Array<{ name: string; detail: string; contact: string }> }>;
    viewAllLabel: string;
    viewAllHref: string;
  };
  privacyTeaser: { text: string; ctaLabel: string; ctaHref: string };
}

interface SupportPageClientProps {
  query: string;
  variables: TherapyQueryVariables;
  data: TherapyQuery;
}

export default function SupportPageClient(props: SupportPageClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.therapy as TherapyData;

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

      {/* ─── 3-STEP PROCESS (replaces Three Pillars on this page) ───── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              {data.stepsSection.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight">
              {data.stepsSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.stepsSection.steps.map((step: { stepNumber: string; title: string; description: string }) => (
              <div key={step.stepNumber} className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
                <span className="font-sans text-xs text-slate-light tracking-[0.3em]">{step.stepNumber}</span>
                <div className="w-8 h-px bg-blue" />
                <h3 className="font-serif text-2xl text-navy font-semibold">{step.title}</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── INTAKE FORM ────────────────────────────────────────────── */}
      <section id="intake" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              {data.intakeTeaser.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-4">
              {data.intakeTeaser.heading}
            </h2>
            <p className="font-sans text-sm text-slate-mid italic max-w-xl mx-auto">
              {data.intakeTeaser.subtitle}
            </p>
          </div>
          <TherapyIntakeForm />
        </div>
      </section>

      <ConchDivider />

      {/* ─── ONE-TO-ONE PSYCHOTHERAPY ───────────────────────────────── */}
      <section id="therapy-overview" className="py-16 md:py-20 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.oneToOneTherapy.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            {data.oneToOneTherapy.heading}
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10 text-left sm:text-center">
            {data.oneToOneTherapy.bodyParagraphs.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-blue-soft border border-blue/15 rounded-xl p-6 text-left">
            <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold mb-1">
              {data.consultationInfo.eyebrow}
            </p>
            <p className="font-serif text-lg text-navy font-semibold mb-2">
              {data.consultationInfo.heading}
            </p>
            <p className="font-sans text-sm text-slate-mid leading-relaxed">
              {data.consultationInfo.body}
            </p>
            <a
              href={data.consultationInfo.ctaHref}
              className="inline-flex items-center gap-2 mt-5 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
            >
              {data.consultationInfo.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THERAPIES OFFERED ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              {data.modalitiesSection.eyebrow}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
              {data.modalitiesSection.heading}
            </h2>
            <p className="font-sans text-sm text-slate-mid italic">
              {data.modalitiesSection.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {data.modalitiesSection.modalities.map((modality: { title: string; description: string; linkText: string; linkHref: string }) => (
              <div
                key={modality.title}
                className="bg-canvas border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <h3 className="font-serif text-xl text-navy font-semibold">{modality.title}</h3>
                  <Link
                    href={modality.linkHref}
                    className="font-sans text-xs text-blue hover:underline shrink-0"
                  >
                    {modality.linkText}
                  </Link>
                </div>
                <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                  {modality.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── MEET THE TEAM ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.meetTheTeam.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            {data.meetTheTeam.heading}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl mx-auto mb-8 italic">
            {data.meetTheTeam.body}
          </p>
          <Link
            href={data.meetTheTeam.ctaHref}
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            {data.meetTheTeam.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      <GovernanceBlock />

      <ConchDivider />

      {/* ─── COMPLAINTS ──────────────────────────────────────────────── */}
      <section id="complaints" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.complaints.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            {data.complaints.heading}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8 max-w-2xl mx-auto">
            {data.complaints.body}
          </p>
          <a
            href={data.complaints.pdfHref}
            download
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            {data.complaints.pdfLabel}
          </a>
        </div>
      </section>

      {/* ─── CRISIS SUPPORT (kept for Resources nav deep-link) ─────── */}
      <section id="crisis" className="py-16 md:py-20 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.crisisTeaser.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            {data.crisisTeaser.heading}
          </h2>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            {data.crisisTeaser.subtitle}
          </p>

          <div className="space-y-3 text-left">
            {data.crisisTeaser.groups.map((group: { region: string; lines: Array<{ name: string; detail: string; contact: string }> }) => (
              <div key={group.region} className="bg-canvas-white border border-border rounded-xl overflow-hidden">
                <div className="px-6 py-3 bg-blue-soft border-b border-blue/10">
                  <p className="font-sans text-xs text-navy font-semibold uppercase tracking-[0.2em]">
                    {group.region}
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {group.lines.map((line: { name: string; detail: string; contact: string }) => (
                    <div key={line.name} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <p className="font-sans text-sm text-navy font-medium">{line.name}</p>
                        <p className="font-sans text-xs text-slate-mid italic">{line.detail}</p>
                      </div>
                      <span className="font-sans text-sm font-semibold text-navy shrink-0">{line.contact}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            href={data.crisisTeaser.viewAllHref}
            className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline mt-8"
          >
            {data.crisisTeaser.viewAllLabel}
          </Link>
        </div>
      </section>

      {/* ─── PRIVACY POLICY LINK ────────────────────────────────────── */}
      <section className="py-12 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-3">
            {data.privacyTeaser.text}
          </p>
          <Link
            href={data.privacyTeaser.ctaHref}
            className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors"
          >
            {data.privacyTeaser.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
