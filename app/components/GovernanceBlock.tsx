import Link from "next/link";

interface GovernanceBlockProps {
  /**
   * "section"  → full-width section with bg-canvas-white, UKCP registration card
   *              (used on the Mission page)
   * "card"     → rounded card with bg-blue-soft, two CTA buttons
   *              (used on the Clinicians page)
   */
  variant?: "section" | "card";
  className?: string;
}

const UKCPLink = () => (
  <a
    href="https://www.psychotherapy.org.uk/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-navy font-medium underline decoration-navy/30 hover:decoration-navy transition-all"
  >
    United Kingdom Council for Psychotherapy (UKCP)
  </a>
);

const BACPLink = () => (
  <a
    href="https://www.bacp.co.uk/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-navy font-medium underline decoration-navy/30 hover:decoration-navy transition-all"
  >
    British Association for Counselling and Psychotherapy (BACP)
  </a>
);

export default function GovernanceBlock({
  variant = "section",
  className = "",
}: GovernanceBlockProps) {
  if (variant === "card") {
    return (
      <div
        className={`bg-blue-soft border border-blue/15 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto ${className}`}
      >
        <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
          Governance &amp; Safety
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-6">
          Clinical Standards &amp; Supervision
        </h2>
        <div className="space-y-4 font-sans text-sm text-slate-mid leading-relaxed mb-6">
          <p>
            All clinical work overseen by the Heal Gurukuli Initiative complies
            with the strict guidelines and ethical standards of the{" "}
            <UKCPLink />{" "}
            and the{" "}
            <BACPLink />.
          </p>
          <p>
            To maintain the highest levels of safety and efficacy, our
            clinicians receive regular clinical supervision from senior
            specialists in complex institutional abuse and cultic trauma. All
            records, treatment histories, and communication portals are stored
            under GDPR-compliant, clinically secure, and fully encrypted
            systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/support"
            className="bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
          >
            Access Support Services
          </Link>
          <Link
            href="/contact/get-in-touch"
            className="border border-navy/30 text-navy font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-white/40 active:scale-95 transition-all duration-150"
          >
            Contact the Clinical Lead
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section
      className={`py-16 md:py-20 px-6 bg-canvas-white border-t border-border ${className}`}
    >
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
            <UKCPLink />. Every practitioner operating within the Initiative is a
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
            <a
              href="https://www.psychotherapy.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif text-lg text-navy font-semibold hover:underline"
            >
              United Kingdom Council for Psychotherapy
            </a>
            <p className="font-sans text-xs text-slate-mid mt-1">
              UKCP Registration confirmed
            </p>
          </div>
          <div className="w-px bg-border hidden sm:block self-stretch" />
          <div className="flex-1">
            <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-2">
              Ethical Standard
            </p>
            <p className="font-serif text-lg text-navy font-semibold">
              UKCP Code of Ethics
            </p>
            <p className="font-sans text-xs text-slate-mid mt-1">
              Full professional conduct compliance
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
