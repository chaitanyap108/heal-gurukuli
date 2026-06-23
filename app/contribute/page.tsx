import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support the Sanctuary — Heal Gurukuli",
  description:
    "Fund trauma-informed clinical care for adult gurukuli survivors. Sponsor a therapy session, fund a community group, or make an open contribution.",
};

export default function ContributePage() {
  return (
    <div className="bg-canvas font-sans text-slate">

      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Donation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Support the Sanctuary
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic max-w-2xl">
            Every contribution goes directly to clinical session provision and
            sanctuary infrastructure — enabling survivors to access the
            specialised, trauma-informed care they deserve.
          </p>
        </div>
      </section>

      {/* ─── CONTRIBUTION TIERS ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Choose Your Level of Support
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
              Contribution Tiers
            </h2>
            <p className="font-sans text-sm text-slate-mid">
              All funds go directly to clinical session provision and sanctuary
              infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ── Tier One ── */}
            <div className="border border-border rounded-xl p-8 flex flex-col bg-canvas">
              <div className="mb-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                  Tier One
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-navy font-semibold">£45</span>
                </div>
                <p className="font-sans text-sm text-slate-mid mt-1 font-medium">
                  Sponsor a Session
                </p>
              </div>
              <div className="w-full h-px bg-border mb-6" />
              <ul className="space-y-3 text-sm text-slate-mid font-sans mb-8 flex-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue mt-0.5 text-xs shrink-0">—</span>
                  One 50-minute clinical therapy session
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue mt-0.5 text-xs shrink-0">—</span>
                  UKCP-registered therapist
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue mt-0.5 text-xs shrink-0">—</span>
                  Monthly donor update
                </li>
              </ul>
              <a
                href="#"
                className="block w-full border border-navy text-navy font-sans font-medium text-center py-3 rounded-lg text-sm hover:bg-navy hover:text-white active:scale-[0.98] transition-all duration-150"
              >
                Select Tier One
              </a>
            </div>

            {/* ── Tier Two (Recommended) ── */}
            <div className="border-2 border-navy rounded-xl p-8 flex flex-col bg-navy relative">
              <div className="absolute top-4 right-4 bg-blue text-white font-sans text-xs px-2.5 py-1 rounded tracking-wide">
                Recommended
              </div>
              <div className="mb-6">
                <p className="font-sans text-xs text-blue-pale/70 uppercase tracking-[0.3em] mb-3">
                  Tier Two
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-white font-semibold">£120</span>
                </div>
                <p className="font-sans text-sm text-blue-pale/80 mt-1 font-medium">
                  Fund a Support Group
                </p>
              </div>
              <div className="w-full h-px bg-white/10 mb-6" />
              <ul className="space-y-3 text-sm text-blue-pale/80 font-sans mb-8 flex-1">
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-mid mt-0.5 text-xs shrink-0">—</span>
                  One facilitated group session
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-mid mt-0.5 text-xs shrink-0">—</span>
                  Group workbooks and materials
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-mid mt-0.5 text-xs shrink-0">—</span>
                  Covers up to 8 participants
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-mid mt-0.5 text-xs shrink-0">—</span>
                  Monthly impact summary
                </li>
              </ul>
              <a
                href="#"
                className="block w-full bg-white text-navy font-sans font-medium text-center py-3 rounded-lg text-sm hover:bg-blue-pale active:scale-[0.98] transition-all duration-150"
              >
                Select Tier Two
              </a>
            </div>

            {/* ── Custom ── */}
            <div className="border border-border rounded-xl p-8 flex flex-col bg-canvas">
              <div className="mb-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
                  Custom
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl text-navy font-semibold">Open</span>
                </div>
                <p className="font-sans text-sm text-slate-mid mt-1 font-medium">
                  Any Amount
                </p>
              </div>
              <div className="w-full h-px bg-border mb-6" />
              <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6 flex-1">
                Make a one-off or recurring contribution of any size. All
                donations are directed to clinical provision and sanctuary
                infrastructure.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="custom-amount"
                  className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] block mb-2"
                >
                  Amount (£)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-mid font-serif text-base pointer-events-none">
                    £
                  </span>
                  <input
                    id="custom-amount"
                    type="number"
                    placeholder="e.g. 50"
                    min="1"
                    className="w-full border border-border rounded-lg pl-7 pr-4 py-2.5 bg-canvas-white font-sans text-slate text-sm placeholder:text-slate-light focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue/50 transition-all"
                  />
                </div>
              </div>
              <a
                href="#"
                className="block w-full border border-navy text-navy font-sans font-medium text-center py-3 rounded-lg text-sm hover:bg-navy hover:text-white active:scale-[0.98] transition-all duration-150"
              >
                Donate
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ─── FUND ALLOCATION ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Transparency
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            How Funds Are Used
          </h2>

          <div className="space-y-4 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8">
            <p>
              The Heal Gurukuli Initiative operates with complete financial
              transparency. Every contribution is applied directly to clinical
              work and the infrastructure that sustains it.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                label: "Clinical Sessions",
                desc: "UKCP-registered therapist time, session materials, and secure session notes platform.",
                weight: "Primary",
              },
              {
                label: "Group Facilitation",
                desc: "Venue (physical or secure virtual), group workbooks, facilitation support, and participant materials.",
                weight: "Primary",
              },
              {
                label: "Crisis Infrastructure",
                desc: "Secure encrypted messaging platform, out-of-hours clinician availability, and safeguarding support.",
                weight: "Secondary",
              },
              {
                label: "Sanctuary Operations",
                desc: "Secure client portal, administration, clinical supervision, and CPD to maintain UKCP registration standards.",
                weight: "Secondary",
              },
            ].map(({ label, desc, weight }) => (
              <div key={label} className="flex items-start gap-5 bg-canvas border border-border rounded-xl px-6 py-4">
                <div className="shrink-0 mt-1">
                  <span
                    className={`inline-block font-sans text-xs px-2 py-0.5 rounded tracking-wide ${
                      weight === "Primary"
                        ? "bg-blue-soft text-blue"
                        : "bg-canvas-white text-slate-light border border-border"
                    }`}
                  >
                    {weight}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm text-navy font-medium mb-0.5">{label}</p>
                  <p className="font-sans text-sm text-slate-mid leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-6 italic">
            Are you a survivor seeking clinical support rather than a donor?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/support"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Begin Your Healing Journey
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

    </div>
  );
}
