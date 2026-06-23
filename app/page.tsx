import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-slate">

      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">

          <div className="flex justify-center mb-10">
            <Image
              src="/heal-gurukuli-logo-transparent.png"
              alt="Heal Gurukuli — Clinical Sanctuary Initiative"
              width={447}
              height={559}
              priority
              className="w-56 sm:w-64 md:w-72 h-auto"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Heal Gurukuli Initiative
          </h1>

          <div className="w-12 h-px bg-blue mx-auto mb-8" />

          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed max-w-xl mx-auto mb-10 italic">
            A dedicated clinical sanctuary providing specialised, trauma-informed
            care for adult survivors of historic institutional abuse — led by a
            UKCP-registered psychotherapist, and grounded in the belief that
            every survivor deserves a dignified path toward healing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contribute"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Support the Initiative
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

      {/* ─── MISSION TEASER ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            About the Initiative
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold mb-6 leading-tight">
            Clinical Sanctuary for Survivors
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl italic mb-6">
            Heal Gurukuli is a dedicated clinical sanctuary providing
            specialised, trauma-informed care for adult survivors of historic
            institutional abuse. Led by a UKCP-registered psychotherapist, our
            framework bridges evidence-based psychological treatment with a deep
            understanding of unique cultural and systemic traumas. We offer a
            safe, confidential space where survivors can reclaim their agency
            and begin the profound work of healing.
          </p>
          <Link
            href="/mission"
            className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors"
          >
            Read the Full Clinical Framework
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ─── THREE PILLARS OF CARE ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Core Areas of Support
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight">
              Three Pillars of Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* 01 */}
            <div className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
              <span className="font-sans text-xs text-slate-light tracking-[0.3em]">01</span>
              <div className="w-8 h-px bg-blue" />
              <h3 className="font-serif text-2xl text-navy font-semibold">
                Professional Psychotherapy
              </h3>
              <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
                We provide secure, confidential one-on-one psychotherapy
                tailored to the complex needs of survivors. Utilising
                evidence-based, trauma-focused modalities, our UKCP-registered
                clinicians offer a structured and compassionate environment to
                process deeply rooted pain and rebuild emotional sovereignty.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
              <span className="font-sans text-xs text-slate-light tracking-[0.3em]">02</span>
              <div className="w-8 h-px bg-blue" />
              <h3 className="font-serif text-2xl text-navy font-semibold">
                Crisis Support Lines
              </h3>
              <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
                Healing is not confined to scheduled sessions. Our dedicated
                crisis support line provides immediate, compassionate
                intervention during moments of acute distress. Operated under
                strict clinical confidentiality standards, it serves as a vital
                safety net for survivors navigating overwhelming triggers.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
              <span className="font-sans text-xs text-slate-light tracking-[0.3em]">03</span>
              <div className="w-8 h-px bg-blue" />
              <h3 className="font-serif text-2xl text-navy font-semibold">
                Community Groups
              </h3>
              <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
                Isolation is one of the deepest wounds of institutional trauma.
                Our facilitated community groups offer a secure, professionally
                guided container for survivors to connect, share experiences,
                and break the silence together. These sessions are carefully
                structured to foster mutual support, nervous system regulation,
                and collective resilience.
              </p>
            </div>

          </div>

          <div className="text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Learn More About Support
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </section>

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

    </div>
  );
}
