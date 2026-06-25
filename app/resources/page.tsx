import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Therapeutic Resources & Self-Guided Support — Heal Gurukuli",
  description:
    "Accessible, trauma-informed tools, grounding techniques, and curated readings to support your self-guided healing journey.",
};

export default function ResourcesPage() {
  return (
    <div className="bg-canvas font-sans text-slate">
      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Self-Guided Support
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6.5xl text-navy font-semibold leading-tight mb-6">
            Therapeutic Resources & Self-Guided Support
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Healing is not confined to scheduled sessions; it is an ongoing, everyday practice.
            This resource hub is designed to offer accessible, trauma-informed tools to support
            your journey. Here, you will find grounded psychoeducation, practical nervous system
            regulation techniques, and curated external links to help you process deeply rooted
            pain and rebuild emotional sovereignty at your own pace.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ───────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sidebar Sticky Navigation */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <p className="font-sans text-xs text-slate-light uppercase tracking-[0.2em] font-semibold border-b border-border pb-3">
                  Categories
                </p>
                <nav className="flex flex-col gap-3 font-sans text-sm text-slate-mid">
                  <a
                    href="#institutional-trauma"
                    className="hover:text-navy hover:translate-x-1 transition-all duration-150"
                  >
                    1. Institutional Trauma
                  </a>
                  <a
                    href="#grounding-techniques"
                    className="hover:text-navy hover:translate-x-1 transition-all duration-150"
                  >
                    2. Grounding & Regulation
                  </a>
                  <a
                    href="#external-support"
                    className="hover:text-navy hover:translate-x-1 transition-all duration-150"
                  >
                    3. External Support & Reading
                  </a>
                </nav>
                <div className="bg-blue-soft border border-blue/10 rounded-xl p-5 mt-6">
                  <h4 className="font-serif text-sm text-navy font-semibold mb-2">Need Clinical Support?</h4>
                  <p className="font-sans text-xs text-slate-mid leading-relaxed mb-4 italic">
                    If you are looking for formal one-on-one therapy sessions, our clinical team is here.
                  </p>
                  <Link
                    href="/support"
                    className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline"
                  >
                    View Support Options
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </aside>

            {/* Resources List */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* Category 1 */}
              <section id="institutional-trauma" className="scroll-mt-24 space-y-6">
                <div>
                  <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-3">
                    Category 01
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold">
                    1. Understanding Institutional Trauma
                  </h2>
                  <div className="w-8 h-px bg-blue/30 mt-3 mb-4" />
                  <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                    Psychoeducational insights to help validate and conceptualize the unique challenges of escaping and healing from high-demand groups and systemic abuse.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Psychoeducation
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        The Dynamics of Institutional Betrayal
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        Understanding how trust within structured organizations can be weaponized, leading to profound systemic trauma and complex post-traumatic responses.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">5 min read</span>
                  </div>

                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Analysis
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        Deconstructing Spiritual Coercion
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        An examination of how spiritual authority is sometimes misused to bypass personal boundaries, stifle dissent, and invalidate authentic emotional experiences.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">7 min read</span>
                  </div>
                </div>
              </section>

              {/* Category 2 */}
              <section id="grounding-techniques" className="scroll-mt-24 space-y-6">
                <div>
                  <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-3">
                    Category 02
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold">
                    2. Grounding & Regulation Techniques
                  </h2>
                  <div className="w-8 h-px bg-blue/30 mt-3 mb-4" />
                  <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                    Practical somatic tools and exercises to help de-escalate acute nervous system activation, hyperarousal, and emotional flashbacks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Practice
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        Navigating Triggers with 5-4-3-2-1 Grounding
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        A sensory-anchoring guide that helps bring your consciousness back to the immediate physical space when memories or anxiety threaten to overwhelm you.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">Step-by-step exercise</span>
                  </div>

                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Somatic Tool
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        Vagus Nerve Stimulation & Breathwork
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        Simple breathing patterns (such as the physiological sigh) designed to activate the parasympathetic nervous system and communicate safety to the body.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">10 min somatic guide</span>
                  </div>
                </div>
              </section>

              {/* Category 3 */}
              <section id="external-support" className="scroll-mt-24 space-y-6">
                <div>
                  <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-3">
                    Category 03
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-navy font-semibold">
                    3. External Support & Recommended Reading
                  </h2>
                  <div className="w-8 h-px bg-blue/30 mt-3 mb-4" />
                  <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                    Curated resources and literature from trusted trauma researchers and independent survivor support networks.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Reading List
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        Essential Trauma Literature
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        Curated works on complex trauma (CPTSD), attachment, and nervous system recovery, including titles by Bessel van der Kolk and Pete Walker.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">Recommended books</span>
                  </div>

                  <div className="bg-canvas-white border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-blue-soft text-blue font-sans text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded mb-4">
                        Helplines
                      </span>
                      <h3 className="font-serif text-lg text-navy font-semibold mb-2">
                        Crisis Hotlines & Advocacy
                      </h3>
                      <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4 italic">
                        Independent external organisations and 24/7 helplines offering immediate support, advocacy, and crisis counsel around the globe.
                      </p>
                    </div>
                    <span className="text-xs text-slate-light font-medium mt-2">Emergency numbers</span>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
