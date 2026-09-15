import type { Metadata } from "next";
import Link from "next/link";
import crisisData from "@/content/pages/crisis-support.json";

export const metadata: Metadata = {
  title: "External Crisis Support — Heal Gurukuli",
  description:
    "A global registry of crisis hotlines, mental health helplines, and support services for immediate assistance.",
};

interface SupportLine {
  name: string;
  number: string;
  availability: string;
  notes: string;
}

interface CountryGroup {
  country: string;
  lines: SupportLine[];
}

interface CrisisData {
  hero: { badge: string; heading: string; subtitle: string };
  registry: CountryGroup[];
  international: { heading: string; body: string; ctaLabel: string; ctaHref: string };
  backLink: { label: string; href: string };
}

const data = crisisData as CrisisData;

export default function ExternalCrisisSupportPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <span className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 inline-block">
            {data.hero.badge}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-rose-500 mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── CRISIS REGISTRY ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-10">
            {data.registry.map((group) => (
              <div key={group.country} className="bg-canvas-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-canvas-soft border-b border-border px-6 py-4">
                  <h2 className="font-serif text-xl text-navy font-semibold">{group.country}</h2>
                </div>
                <div className="divide-y divide-border">
                  {group.lines.map((line) => (
                    <div key={line.name} className="p-6 sm:flex sm:items-start gap-6">
                      <div className="sm:w-1/3 shrink-0 mb-3 sm:mb-0">
                        <h3 className="font-serif text-lg text-navy font-semibold mb-1">{line.name}</h3>
                        <span className="text-[10px] text-slate-light uppercase tracking-wider block">{line.availability}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-xl text-blue font-bold tracking-wide mb-2">
                          {line.number}
                        </p>
                        <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                          {line.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* International Search Notice */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-lg text-navy font-semibold mb-2">{data.international.heading}</h3>
            <p className="font-sans text-sm text-slate-mid leading-relaxed max-w-2xl mx-auto mb-6">
              {data.international.body}
            </p>
            <a
              href={data.international.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
            >
              {data.international.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Navigation link back to support */}
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
