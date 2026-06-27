import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media & Press Inquiries — Heal Gurukuli",
  description:
    "Press contacts and resources for ethical reporting on gurukuli institutional abuse and trauma recovery.",
};

export default function MediaPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Press Relations
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Media &amp; Press
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            For journalists, researchers, and documentarians looking to cover the Heal Gurukuli Initiative, our therapeutic methods, or the history of institutional abuse within gurukulas.
          </p>
        </div>
      </section>

      {/* ─── MEDIA CONTENT ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Media Contact info */}
          <div className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="font-serif text-2xl text-navy font-semibold">Press Office &amp; Spokesperson</h2>
              <p className="font-sans text-sm text-slate-mid leading-relaxed">
                We accommodate interview requests and statements regarding clinical support, safeguarding, and recovery frameworks. To coordinate interviews with our founder Caitanya Lila or external clinical advisors, please submit an inquiry.
              </p>
              <p className="font-sans text-xs text-slate-mid italic">
                Note: We will never disclose patient identities, clinical data, or active treatment details under any circumstance.
              </p>
            </div>
            
            <div className="bg-canvas-soft border border-border rounded-xl p-5 flex flex-col justify-between">
              <div>
                <p className="font-sans text-xs text-slate-light uppercase tracking-wider font-semibold mb-1">Direct Press Email</p>
                <p className="font-sans text-sm text-navy font-bold hover:underline mb-2">
                  press@healgurukuli.org
                </p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-sans text-[10px] text-slate-light leading-snug">
                  Response within 4 hours for urgent breaking news.
                </p>
              </div>
            </div>
          </div>

          {/* Ethical Reporting Guidelines */}
          <div className="bg-canvas-white border border-border rounded-2xl p-6 md:p-10 shadow-sm space-y-6">
            <h2 className="font-serif text-2xl text-navy font-semibold">Ethical Reporting Guidelines</h2>
            <p className="font-sans text-sm text-slate-mid leading-relaxed">
              Reporting on institutional child abuse and complex PTSD requires extreme sensitivity. When covering these topics, we urge journalists to follow these guidelines:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-serif text-base text-navy font-semibold">1. Protect Anonymity</h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  Many adult survivors reside in close-knit communities where exposure would cause social or professional disruption. Always verify consent before disclosing names, locations, or family ties.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-base text-navy font-semibold">2. Avoid Sensationalism</h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  Focus on systemic institutional failure, clinical recovery frameworks, and therapeutic resources rather than detailed descriptions of abuse that may act as trauma triggers.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-base text-navy font-semibold">3. Frame Around Agency</h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  Represent survivors as active agents in their own recovery, rather than passive victims. Highlight clinical progress and community initiatives.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-base text-navy font-semibold">4. Provide Help Resources</h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  Always close your articles or broadcasts with details for national support helplines (such as Samaritans, child protection lines, or our resource page link).
                </p>
              </div>
            </div>
          </div>

          {/* Press Kit Downloads */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-lg text-navy font-semibold">Heal Gurukuli Press Kit</h3>
              <p className="font-sans text-xs text-slate-mid">
                Includes high-res logos, approved clinician photos, and our clinical charter sheet (PDF).
              </p>
            </div>
            <button
              type="button"
              className="bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 shrink-0 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Press Kit
            </button>
          </div>

          {/* Back link */}
          <div className="text-center">
            <Link
              href="/contact/get-in-touch"
              className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas-soft hover:text-navy active:scale-95 transition-all duration-150"
            >
              Back to General Contact
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
