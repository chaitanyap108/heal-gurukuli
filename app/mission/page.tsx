import type { Metadata } from "next";
import Link from "next/link";
import ConchDivider from "../components/ConchDivider";
import GovernanceBlock from "../components/GovernanceBlock";
import ThreePillars from "../components/ThreePillars";

export const metadata: Metadata = {
  title: "Our Mission — Heal Gurukuli",
  description:
    "The clinical framework underpinning Heal Gurukuli — bridging evidence-based psychological treatment with an understanding of unique cultural and systemic traumas.",
};

export default function MissionPage() {
  return (
    <div className="bg-canvas font-sans text-slate">

      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            The Clinical Framework
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Our Mission
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Bridging evidence-based psychological treatment with a deep
            understanding of the unique cultural and systemic traumas endured by
            gurukuli survivors — so that every person can access the dignified,
            specialised care they deserve.
          </p>
        </div>
      </section>

      {/* ─── WHY WE EXIST — TO SERVE GURUKULIS ─────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Why We Exist
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            To Serve Gurukulis
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed">
            <p>
              For decades, adult survivors of gurukuli institutions have lived
              with the compounding weight of complex trauma — trauma that is
              rarely addressed by mainstream mental health services, which lack
              the cultural fluency and specialist training necessary to hold this
              work with integrity.
            </p>
            <p>
              Heal Gurukuli was founded in direct response to this gap. Our
              mandate is unambiguous: to provide specialised, trauma-informed
              psychotherapy that is rooted in established clinical evidence,
              culturally attuned, and delivered within a framework of
              unwavering ethical accountability.
            </p>
            <p>
              Gurukuli survivors carry a layered burden that is distinct from
              general childhood trauma. The intersection of spiritual betrayal,
              cultural isolation, institutional silencing, and complex family
              enmeshment creates a particular clinical profile that demands
              specialist understanding — not a generic therapeutic approach
              adapted on the fly.
            </p>
            <p>
              We operate from a position that survivors are not defined by their
              trauma. Our work is oriented toward agency, integration, and the
              recovery of each individual&rsquo;s innate capacity for wellbeing. The
              therapeutic relationship is not a transaction — it is a secure
              container built on trust, consistency, and clinical rigour.
            </p>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THE THERAPEUTIC FRAMEWORK ──────────────────────────────── */}
      <section id="clinical-framework" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Clinical Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            The Therapeutic Framework
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-6">
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

      {/* ─── THREE PILLARS ──────────────────────────────────────────── */}
      <ThreePillars />

      <ConchDivider />

      {/* ─── MEET OUR TEAM ──────────────────────────────────────────── */}
      <section id="team" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            The Clinicians
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Meet Our Team
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8">
            Our clinical team is composed of UKCP and BACP-registered
            psychotherapists and clinical psychologists, each bringing deep
            specialist expertise in complex trauma, EMDR, somatic therapy, and
            the particular institutional dynamics of the gurukuli experience.
            All practitioners operate under regular clinical supervision and are
            fully compliant with UK professional registration requirements.
          </p>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10 italic">
            Every member of the clinical team has been selected not only for
            their professional credentials, but for their capacity to hold this
            work with the cultural sensitivity and relational warmth it demands.
          </p>

          <Link
            href="/clinicians"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            Meet the Full Clinical Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THE FOUNDER ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            The Founder
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Caitanya Lila
          </h2>
          <h3 className="font-sans text-sm text-slate-mid uppercase tracking-[0.2em] mb-8">
            UKCP-Registered Psychotherapist · Founder
          </h3>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8">
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
            href="/clinicians"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            Meet the full clinical team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      {/* ─── GOVERNANCE ─────────────────────────────────────────────── */}
      <GovernanceBlock />

      <ConchDivider />

      {/* ─── CTA ────────────────────────────────────────────────────── */}
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
