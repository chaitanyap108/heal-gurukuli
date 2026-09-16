"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { PrivacyQuery, PrivacyQueryVariables } from "@/tina/__generated__/types";

interface PrivacySection {
  heading: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
}

interface PrivacyData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  sections: PrivacySection[];
  footerNote: string;
}

interface PrivacyClientProps {
  query: string;
  variables: PrivacyQueryVariables;
  data: PrivacyQuery;
}

export default function PrivacyClient(props: PrivacyClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.privacy as PrivacyData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8 font-sans text-sm md:text-base text-slate-mid leading-relaxed">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl text-navy font-semibold mb-3">{section.heading}</h2>
              <p>
                {section.body}
                {section.linkHref && section.linkLabel ? (
                  <>
                    {" "}
                    <Link href={section.linkHref} className="text-blue hover:underline">
                      {section.linkLabel}
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          ))}

          <p className="text-xs text-slate-light italic pt-4 border-t border-border">
            {data.footerNote}
          </p>
        </div>
      </section>
    </div>
  );
}
