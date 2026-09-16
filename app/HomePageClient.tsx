"use client";

import Image from "next/image";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { HomeQuery, HomeQueryVariables } from "@/tina/__generated__/types";
import ClinicalImpact from "./components/ClinicalImpact";
import ConchDivider from "./components/ConchDivider";
import TestimonialCarousel from "./components/TestimonialCarousel";
import ThreePillars from "./components/ThreePillars";

interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    logo: string;
    logoAlt: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
  };
  missionTeaser: {
    eyebrow: string;
    heading: string;
    body: string;
    ctaText: string;
    ctaHref: string;
  };
}

interface HomePageClientProps {
  query: string;
  variables: HomeQueryVariables;
  data: HomeQuery;
}

export default function HomePageClient(props: HomePageClientProps) {
  const { data: tinaData } = useTina(props);
  const { hero, missionTeaser } = tinaData.home as HomeData;

  return (
    <div className="min-h-screen bg-canvas font-sans text-slate">

      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <div className="flex justify-center -mb-4 -mt-8">
            <Image
              src={hero.logo}
              alt={hero.logoAlt}
              width={1200}
              height={400}
              priority
              className="w-96 sm:w-[500px] md:w-[680px] lg:w-[800px] h-auto"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {hero.title}
          </h1>

          <div className="w-12 h-px bg-blue mx-auto mb-8" />

          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed max-w-xl mx-auto mb-10 italic">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={hero.primaryCta.href}
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              {hero.primaryCta.text}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              {hero.secondaryCta.text}
            </Link>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── MISSION TEASER ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {missionTeaser.eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-6 leading-tight">
            {missionTeaser.heading}
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl italic mb-6">
            {missionTeaser.body}
          </p>
          <Link
            href={missionTeaser.ctaHref}
            className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors"
          >
            {missionTeaser.ctaText}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THREE PILLARS OF CARE ──────────────────────────────────── */}
      <ThreePillars />

      <ConchDivider />

      {/* ─── CONTRIBUTION TEASER ────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-4xl mx-auto text-center">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Support the Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Fund the Clinical Sanctuary
          </h2>
          <p className="font-sans text-base text-slate-mid leading-relaxed max-w-2xl mx-auto mb-4">
            Every contribution goes directly to clinical session provision and
            sanctuary infrastructure — enabling survivors to access the
            specialised, trauma-informed care they deserve.
          </p>
          <p className="font-sans text-sm text-slate-mid italic mb-10 max-w-xl mx-auto">
            Sponsor a 50-minute therapy session from £45. Fund a community
            support group for £120. Or make an open contribution of any size.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contribute"
              className="bg-navy text-white font-sans font-medium px-8 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              View Contribution Tiers
            </Link>
            <Link
              href="/mission"
              className="font-sans text-sm text-slate-mid hover:text-navy transition-colors"
            >
              Learn how funds are used
            </Link>
          </div>

        </div>
      </section>

      <ConchDivider />

      {/* ─── CLINICAL IMPACT ────────────────────────────────────────── */}
      <ClinicalImpact />

      {/* ─── TESTIMONIALS ───────────────────────────────────────────── */}
      <TestimonialCarousel />

    </div>
  );
}
