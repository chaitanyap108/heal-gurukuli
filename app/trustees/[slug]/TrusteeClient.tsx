"use client";

import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import type { TrusteesQuery, TrusteesQueryVariables } from "@/tina/__generated__/types";

interface TrusteeData {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
}

interface TrusteeClientProps {
  query: string;
  variables: TrusteesQueryVariables;
  data: TrusteesQuery;
}

export default function TrusteeClient(props: TrusteeClientProps) {
  const { data: tinaData } = useTina(props);
  const trusteeDoc = tinaData.trustees;
  const trustee = trusteeDoc as TrusteeData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/mission#board-of-trustees"
            className="inline-flex items-center gap-1.5 font-sans text-xs text-slate-mid hover:text-navy mb-8 transition-colors"
          >
            ← Back to Board of Trustees
          </Link>

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Board of Trustees
          </p>
          <h1
            data-tina-field={tinaField(trusteeDoc, "name")}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-semibold leading-tight mb-3"
          >
            {trustee.name}
          </h1>
          <p
            data-tina-field={tinaField(trusteeDoc, "role")}
            className="font-sans text-sm text-blue uppercase tracking-wider font-semibold mb-6"
          >
            {trustee.role}
          </p>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p
            data-tina-field={tinaField(trusteeDoc, "shortBio")}
            className="font-sans text-sm md:text-base text-slate-mid leading-relaxed italic"
          >
            {trustee.shortBio}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="font-serif text-2xl text-navy font-semibold mb-6">About</h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-4">
            This is a placeholder profile page. A full biography, photograph,
            governance background, and statement of purpose for {trustee.name}{" "}
            will be published here.
          </p>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed">
            Trustees provide independent oversight of the Heal Gurukuli
            Initiative&rsquo;s mission, finances, and ethical standards —
            ensuring the sanctuary remains accountable to the community it
            serves.
          </p>
        </div>
      </section>
    </div>
  );
}
