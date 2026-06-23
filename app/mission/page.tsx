import type { Metadata } from "next";
import Link from "next/link";

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

      {/* ─── CLINICAL MANDATE ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto prose-like">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Why We Exist
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            The Clinical Mandate
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
              We operate from a position that survivors are not defined by their
              trauma. Our work is oriented toward agency, integration, and the
              recovery of each individual's innate capacity for wellbeing. The
              therapeutic relationship is not a transaction — it is a secure
              container built on trust, consistency, and clinical rigour.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE FRAMEWORK ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Clinical Approach
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            The Therapeutic Framework
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10">
            <p>
              Our work draws from a pluralistic, integrative model that holds
              several evidence-based approaches in coherent relationship with
              one another. These include, but are not limited to, Trauma-Focused
              Cognitive Behavioural Therapy (TF-CBT), Eye Movement
              Desensitisation and Reprocessing (EMDR), and relational,
              somatic-aware approaches informed by attachment theory and
              polyvagal science.
            </p>
            <p>
              Crucially, this clinical framework is applied through the lens of
              the gurukuli experience. This means a sustained recognition that
              the abuse inflicted within institutional settings was systemic —
              not merely interpersonal. Survivors have often had their reality
              denied, their grief invalidated, and their complaints suppressed by
              the very communities meant to protect them.
            </p>
            <p>
              Our clinicians are trained to work with complex post-traumatic
              stress, betrayal trauma, spiritual injury, and the profound
              identity disruption that can emerge when one's formative community
              is simultaneously the site of harm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Individual Psychotherapy",
                body:
                  "One-on-one sessions with a UKCP-registered therapist, structured around a personal treatment plan developed collaboratively with the client.",
              },
              {
                num: "02",
                title: "Facilitated Group Work",
                body:
                  "Clinically supervised peer groups that provide a secure environment for shared experience, mutual support, and collective nervous system regulation.",
              },
              {
                num: "03",
                title: "Crisis Intervention",
                body:
                  "Dedicated support lines for active clients during periods of acute distress, operated under strict clinical confidentiality and safeguarding protocols.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="bg-canvas border border-border rounded-xl p-6 flex flex-col gap-4">
                <span className="font-sans text-xs text-slate-light tracking-[0.3em]">{num}</span>
                <div className="w-6 h-px bg-blue" />
                <h3 className="font-serif text-lg text-navy font-semibold">{title}</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed italic flex-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER ────────────────────────────────────────────────── */}
      <section id="team" className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            The Clinician
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Caitanya Lila
          </h2>
          <h3 className="font-sans text-sm text-slate-mid uppercase tracking-[0.2em] mb-8">
            UKCP-Registered Psychotherapist · Founder
          </h3>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10">
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

        </div>
      </section>

      {/* ─── ETHICS & CONFIDENTIALITY ───────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Governance
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Clinical Ethics &amp; Confidentiality
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10">
            <p>
              All clinical work undertaken by the Heal Gurukuli Initiative is
              conducted in strict accordance with the ethical framework and
              professional conduct standards set by the{" "}
              <strong className="text-navy font-medium">
                United Kingdom Council for Psychotherapy (UKCP)
              </strong>
              . Every practitioner operating within the Initiative is a
              registered member of the UKCP and is bound by its Code of Ethics
              and Professional Practice.
            </p>
            <p>
              Confidentiality is not a procedural formality here — it is a
              clinical and ethical cornerstone. Survivors are entitled to know
              that what they share within a therapeutic relationship is held with
              absolute discretion. The only exceptions are the mandated
              safeguarding disclosures required by law, each of which would be
              discussed transparently with the client wherever safe to do so.
            </p>
            <p>
              All clinical records are securely maintained, encrypted, and
              accessible only to the treating clinician. No data is shared with
              third parties, funders, or community organisations without
              explicit, informed written consent.
            </p>
          </div>

          <div className="bg-canvas border border-border rounded-xl p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-2">
                Registered Body
              </p>
              <p className="font-serif text-lg text-navy font-semibold">United Kingdom Council for Psychotherapy</p>
              <p className="font-sans text-xs text-slate-mid mt-1">UKCP Registration confirmed</p>
            </div>
            <div className="w-px bg-border hidden sm:block self-stretch" />
            <div className="flex-1">
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-2">
                Ethical Standard
              </p>
              <p className="font-serif text-lg text-navy font-semibold">UKCP Code of Ethics</p>
              <p className="font-sans text-xs text-slate-mid mt-1">Full professional conduct compliance</p>
            </div>
          </div>

        </div>
      </section>

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
              Begin Your Healing Journey
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
