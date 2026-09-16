"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { MediaQuery, MediaQueryVariables } from "@/tina/__generated__/types";

interface MediaData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  pressOffice: {
    heading: string;
    body: string;
    note: string;
    emailLabel: string;
    email: string;
    responseNote: string;
  };
  guidelines: {
    heading: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
  pressKit: { heading: string; description: string; ctaLabel: string };
  backLink: { label: string; href: string };
}

interface MediaClientProps {
  query: string;
  variables: MediaQueryVariables;
  data: MediaQuery;
}

export default function MediaClient(props: MediaClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.media as MediaData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
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

      {/* ─── MEDIA CONTENT ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Media Contact info */}
          <div className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="font-serif text-2xl text-navy font-semibold">{data.pressOffice.heading}</h2>
              <p className="font-sans text-sm text-slate-mid leading-relaxed">
                {data.pressOffice.body}
              </p>
              <p className="font-sans text-xs text-slate-mid italic">
                {data.pressOffice.note}
              </p>
            </div>
            
            <div className="bg-canvas-soft border border-border rounded-xl p-5 flex flex-col justify-between">
              <div>
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider font-semibold mb-1">{data.pressOffice.emailLabel}</p>
                <p className="font-sans text-sm text-navy font-bold hover:underline mb-2">
                  {data.pressOffice.email}
                </p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-sans text-[10px] text-slate-light leading-snug">
                  {data.pressOffice.responseNote}
                </p>
              </div>
            </div>
          </div>

          {/* Ethical Reporting Guidelines */}
          <div className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-navy font-semibold">{data.guidelines.heading}</h2>
            <p className="font-sans text-sm text-slate-mid leading-relaxed">
              {data.guidelines.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.guidelines.items.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="font-serif text-base text-navy font-semibold">{item.title}</h4>
                  <p className="font-sans text-xs text-slate-mid leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Press Kit Downloads */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-lg text-navy font-semibold">{data.pressKit.heading}</h3>
              <p className="font-sans text-xs text-slate-mid">
                {data.pressKit.description}
              </p>
            </div>
            <button
              type="button"
              className="bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 shrink-0 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {data.pressKit.ctaLabel}
            </button>
          </div>

          {/* Back link */}
          <div className="text-center">
            <Link
              href={data.backLink.href}
              className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas-soft hover:text-navy active:scale-95 transition-all duration-150"
            >
              {data.backLink.label}
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
