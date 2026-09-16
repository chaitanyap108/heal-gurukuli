"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { MissionQuery, MissionQueryVariables } from "@/tina/__generated__/types";
import ConchDivider from "../components/ConchDivider";
import GovernanceBlock from "../components/GovernanceBlock";
import TeamCarousel from "../components/TeamCarousel";
import ThreePillars from "../components/ThreePillars";
import { trustees } from "../data/trustees";

interface MissionData {
  hero: {
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  whyWeExist: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
}

interface MissionPageClientProps {
  query: string;
  variables: MissionQueryVariables;
  data: MissionQuery;
}

export default function MissionPageClient(props: MissionPageClientProps) {
  const { data: tinaData } = useTina(props);
  const { hero, whyWeExist } = tinaData.mission as MissionData;

  return (
    <div className="bg-canvas font-sans text-slate">

      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section id="why-we-exist" className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {whyWeExist.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            {whyWeExist.heading}
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed text-left sm:text-center">
            {whyWeExist.paragraphs.map((paragraph: string, index: number) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      <section id="clinical-framework" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Clinical Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            The Therapeutic Framework
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-6 text-left sm:text-center">
            <p>
              Our work draws from a pluralistic, integrative model applying
              Trauma-Focused CBT, EMDR, and somatic-aware relational approaches
              through the specific lens of the gurukuli experience — recognising
              the systemic, institutional nature of the harm and working with
              complex PTSD, betrayal trauma, and spiritual injury accordingly.
            </p>
          </div>
        </div>
      </section>

      <ThreePillars />

      <ConchDivider />

      <section id="team" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              The Clinicians
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
              Meet Our Team
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl mx-auto mb-4">
              Our clinical team is composed of UKCP and BACP-registered
              psychotherapists and clinical psychologists, each bringing deep
              specialist expertise in complex trauma, EMDR, somatic therapy, and
              the particular institutional dynamics of the gurukuli experience.
            </p>
            <p className="font-sans text-sm text-slate-mid leading-relaxed max-w-2xl mx-auto italic">
              Browse brief profiles below, then open a full profile for credentials and specialties.
            </p>
          </div>

          <TeamCarousel />
        </div>
      </section>

      <ConchDivider />

      <section id="founder" className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            The Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Caitanya Lila
          </h2>
          <h3 className="font-sans text-sm text-slate-mid uppercase tracking-[0.2em] mb-8">
            UKCP-Registered Psychotherapist · Founder
          </h3>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8 text-left sm:text-center">
            <p>
              Caitanya Lila is a UKCP-registered psychotherapist and the founder
              of the Heal Gurukuli Initiative. Born into the gurukuli system,
              she brings both lived experience and rigorous clinical training to
              this work — a combination that enables a rare quality of attunement
              with survivors who have often felt unseen and misunderstood by
              conventional therapeutic settings.
            </p>
            <p>
              Her clinical background spans more than a decade of practice in
              trauma, complex PTSD, and relational therapy. She trained in
              integrative psychotherapy and has pursued advanced specialist
              study in trauma-focused modalities, group facilitation, and the
              psychosocial dimensions of institutional abuse.
            </p>
            <p>
              Caitanya founded the Heal Gurukuli Initiative from a conviction
              that the gurukuli community deserves a clinical sanctuary built
              specifically for them — one that does not require survivors to
              translate their experience or educate their therapist. She brings
              to every aspect of this work an equal measure of professional
              discipline and personal dedication.
            </p>
          </div>

          <Link
            href="/clinicians/caitanya-lila"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            View full profile
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      <section id="board-of-trustees" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Governance
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
              Board of Trustees
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl mx-auto">
              Our Board of Trustees provides independent oversight of the
              Initiative’s mission, finances, and ethical standards —
              ensuring Heal Gurukuli remains accountable, transparent, and
              steadfastly oriented toward the survivors it serves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustees.map((trustee) => (
              <Link
                key={trustee.slug}
                href={`/trustees/${trustee.slug}`}
                className="group flex flex-col items-start gap-1 border border-navy/20 bg-canvas px-6 py-5 rounded-lg hover:border-navy/40 hover:bg-blue-soft active:scale-[0.99] transition-all duration-150"
              >
                <span className="font-serif text-lg text-navy font-semibold group-hover:text-navy-mid transition-colors">
                  {trustee.name}
                </span>
                <span className="font-sans text-xs text-slate-light uppercase tracking-[0.2em]">
                  {trustee.role}
                </span>
                <span className="font-sans text-xs text-blue mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  View profile →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      <GovernanceBlock />

      <ConchDivider />

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-6 italic">
            If you are a survivor seeking support, or wish to fund this work,
            we welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/support"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Start the Therapeutic Process
            </Link>
            <Link
              href="/contribute"
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              Support the Sanctuary
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
