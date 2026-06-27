import Link from "next/link";

export default function ThreePillars() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 01 — Professional Psychotherapy */}
          <div className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
            <span className="font-sans text-xs text-slate-light tracking-[0.3em]">01</span>
            <div className="w-8 h-px bg-blue" />
            <h3 className="font-serif text-2xl text-navy font-semibold">
              Professional Psychotherapy
            </h3>
            <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
              We provide secure, confidential one-on-one psychotherapy
              tailored to the complex needs of survivors. Utilising
              evidence-based, trauma-focused modalities, our{" "}
              <Link href="/#faq-credentials" className="text-blue hover:underline">
                BACP or UKCP-registered
              </Link>{" "}
              clinicians offer a structured and compassionate environment to
              process deeply rooted pain and rebuild emotional sovereignty.
            </p>
            <div>
              <Link
                href="/support#booking"
                className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors w-fit"
              >
                Book a Session
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* 02 — Therapeutic Resources */}
          <div className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
            <span className="font-sans text-xs text-slate-light tracking-[0.3em]">02</span>
            <div className="w-8 h-px bg-blue" />
            <h3 className="font-serif text-2xl text-navy font-semibold">
              Therapeutic Resources
            </h3>
            <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">
              Healing is not confined to scheduled sessions. We offer a curated
              selection of self-guided tools, grounding exercises, and educational
              materials designed to support your nervous system and promote recovery
              outside of clinical hours.
            </p>
            <div>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors w-fit"
              >
                Explore Resources
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* 03 — Community Groups */}
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
              and break the silence together. These forums are available to
              foster mutual support, resource sharing and ultimately collective resilience.
            </p>
            <div>
              <Link
                href="/forum"
                className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors w-fit"
              >
                Visit the Forum
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
