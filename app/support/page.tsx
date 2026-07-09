import type { Metadata } from "next";
import Link from "next/link";
import ConchDivider from "../components/ConchDivider";
import GovernanceBlock from "../components/GovernanceBlock";
import TherapyIntakeForm from "../components/TherapyIntakeForm";

export const metadata: Metadata = {
  title: "Therapy — Heal Gurukuli",
  description:
    "Specialised, trauma-informed psychotherapy for adult gurukuli survivors. Complete the intake form to begin — the clinical team will reply to arrange next steps.",
};

const therapies = [
  {
    name: "Integrative Psychotherapy",
    abbr: "Psychotherapy",
    desc: "A personalised, pluralistic approach that draws on multiple evidence-based modalities — tailored to the unique clinical presentation of each survivor. The therapeutic relationship itself is a central vehicle for healing.",
    anchor: "/resources#understanding-therapy",
  },
  {
    name: "EMDR",
    abbr: "Eye Movement Desensitisation & Reprocessing",
    desc: "A highly effective, NICE-recommended treatment for PTSD and complex trauma. EMDR processes distressing memories at a neurological level, reducing their emotional charge without requiring detailed verbal retelling.",
    anchor: "/resources#understanding-therapy",
  },
  {
    name: "Somatic Therapy",
    abbr: "Body-Oriented Psychotherapy",
    desc: "Recognising that trauma is stored in the body as much as the mind, somatic approaches use body awareness, breath, and movement to restore nervous system regulation and a felt sense of safety.",
    anchor: "/resources#understanding-therapy",
  },
  {
    name: "Trauma-Focused CBT",
    abbr: "TF-CBT",
    desc: "Cognitive Behavioural Therapy adapted specifically for trauma — targeting distorted beliefs, avoidance patterns, and emotional dysregulation that have developed as survival responses to institutional abuse.",
    anchor: "/resources#understanding-therapy",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-canvas font-sans text-slate">

      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Clinical Therapy
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Begin Therapy
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic max-w-2xl mx-auto">
            Specialised, trauma-informed clinical care designed specifically for
            adult survivors of ISKCON Gurukula abuse. You don&rsquo;t need to explain
            yourself here — we already understand the landscape.
          </p>
        </div>
      </section>

      {/* ─── 3-STEP PROCESS (replaces Three Pillars on this page) ───── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight">
              Three Steps to Begin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Fill out the intake form",
                body: "Share a brief overview of what brings you here. This helps us understand your needs and ensure the sanctuary is the right fit — without requiring a detailed trauma history at this stage.",
                href: "#intake",
                cta: "Go to Intake Form",
              },
              {
                step: "02",
                title: "We review and reply",
                body: "A member of the clinical team reviews your submission and responds within 1–2 business days to arrange a free initial consultation if appropriate.",
              },
              {
                step: "03",
                title: "Begin the work",
                body: "If the therapeutic fit is right, we agree a structured treatment plan together and begin sessions at a pace that feels safe and manageable for you.",
                href: "#therapy-overview",
                cta: "About Our Therapy",
              },
            ].map(({ step, title, body, href, cta }) => (
              <div key={step} className="bg-canvas-white border border-border rounded-xl p-8 flex flex-col gap-5">
                <span className="font-sans text-xs text-slate-light tracking-[0.3em]">{step}</span>
                <div className="w-8 h-px bg-blue" />
                <h3 className="font-serif text-2xl text-navy font-semibold">{title}</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed flex-1 italic">{body}</p>
                {href && cta ? (
                  <div>
                    <a
                      href={href}
                      className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors w-fit"
                    >
                      {cta}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── INTAKE FORM ────────────────────────────────────────────── */}
      <section id="intake" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Step 1
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-4">
              Therapy Intake Form
            </h2>
            <p className="font-sans text-sm text-slate-mid italic max-w-xl mx-auto">
              Complete this form to begin. After submission you will be guided to
              next steps while your request is reviewed.
            </p>
          </div>
          <TherapyIntakeForm />
        </div>
      </section>

      <ConchDivider />

      {/* ─── ONE-TO-ONE PSYCHOTHERAPY ───────────────────────────────── */}
      <section id="therapy-overview" className="py-16 md:py-20 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Individual Therapy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            One-to-One Psychotherapy
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10 text-left sm:text-center">
            <p>
              Our one-to-one psychotherapy service is the foundation of the
              clinical sanctuary. Each survivor receives a confidential, weekly
              50-minute session with a UKCP-registered therapist who has
              specialist knowledge of gurukuli institutional dynamics.
            </p>
            <p>
              Sessions are conducted online via a fully encrypted,
              GDPR-compliant platform — ensuring clinical-grade confidentiality
              regardless of your location. We work with survivors across the
              UK, Europe, North America, and beyond.
            </p>
            <p>
              After you submit the intake form, the clinical team reviews your
              request and replies to arrange a free 30-minute initial consultation
              if appropriate — a quiet conversation to ensure this is the right
              therapeutic fit. There is no self-serve booking calendar.
            </p>
          </div>

          <div className="bg-blue-soft border border-blue/15 rounded-xl p-6 text-left">
            <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold mb-1">
              How consultations are arranged
            </p>
            <p className="font-serif text-lg text-navy font-semibold mb-2">
              Intake first — then we get in touch
            </p>
            <p className="font-sans text-sm text-slate-mid leading-relaxed">
              Complete the intake form above. Once reviewed, we will contact you
              to schedule your free initial consultation. Typical reply time is
              1–2 business days.
            </p>
            <a
              href="#intake"
              className="inline-flex items-center gap-2 mt-5 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
            >
              Go to Intake Form
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THERAPIES OFFERED ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Clinical Modalities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
              Therapies We Offer
            </h2>
            <p className="font-sans text-sm text-slate-mid italic">
              Our clinicians draw on a range of evidence-based modalities.{" "}
              <Link href="/resources#understanding-therapy" className="text-blue hover:underline">
                Learn more about each approach →
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            {therapies.map(({ name, abbr, desc, anchor }) => (
              <div
                key={name}
                className="bg-canvas border border-border rounded-xl p-6 hover:border-blue/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <h3 className="font-serif text-xl text-navy font-semibold">{name}</h3>
                  <Link
                    href={anchor}
                    className="font-sans text-xs text-blue hover:underline shrink-0"
                  >
                    Understanding {abbr} →
                  </Link>
                </div>
                <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── MEET THE TEAM ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Our Clinicians
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Meet the Therapists
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed max-w-2xl mx-auto mb-8 italic">
            Our clinical team consists of UKCP and BACP-registered psychotherapists
            and clinical psychologists who bring specialist understanding of complex
            trauma, spiritual abuse, and the particular institutional dynamics of
            the gurukuli experience.
          </p>
          <Link
            href="/clinicians"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            View the Clinical Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <ConchDivider />

      <GovernanceBlock />

      <ConchDivider />

      {/* ─── COMPLAINTS ──────────────────────────────────────────────── */}
      <section id="complaints" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Accountability
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Complaints
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8 max-w-2xl mx-auto">
            If you have a concern about any aspect of our clinical or organisational
            practice, you are entitled to raise it. Our complaints process is designed
            to be clear, confidential, and fair — in line with UKCP and BACP professional
            standards.
          </p>
          <a
            href="/complaints-process.pdf"
            download
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download Complaints Process (PDF)
          </a>
        </div>
      </section>

      {/* ─── CRISIS SUPPORT (kept for Resources nav deep-link) ─────── */}
      <section id="crisis" className="py-16 md:py-20 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Immediate Help
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            Crisis Support Lines
          </h2>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            If you are in immediate distress, please reach out to one of the
            following services. All lines are free, confidential, and available
            around the clock.
          </p>

          <div className="space-y-3 text-left">
            {[
              {
                region: "United Kingdom",
                lines: [
                  { name: "Samaritans", detail: "Free, 24/7 emotional support", contact: "116 123" },
                  { name: "Shout Crisis Text Line", detail: "Text-based crisis support", contact: "Text SHOUT to 85258" },
                ],
              },
              {
                region: "United States & Canada",
                lines: [
                  { name: "988 Suicide & Crisis Lifeline", detail: "Free, 24/7 crisis support", contact: "Call or text 988" },
                  { name: "Crisis Text Line", detail: "Text-based support", contact: "Text HOME to 741741" },
                ],
              },
            ].map(({ region, lines }) => (
              <div key={region} className="bg-canvas-white border border-border rounded-xl overflow-hidden">
                <div className="px-6 py-3 bg-blue-soft border-b border-blue/10">
                  <p className="font-sans text-xs text-navy font-semibold uppercase tracking-[0.2em]">
                    {region}
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {lines.map(({ name, detail, contact }) => (
                    <div key={name} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <p className="font-sans text-sm text-navy font-medium">{name}</p>
                        <p className="font-sans text-xs text-slate-mid italic">{detail}</p>
                      </div>
                      <span className="font-sans text-sm font-semibold text-navy shrink-0">{contact}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/contact/crisis-support"
            className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline mt-8"
          >
            View all crisis resources →
          </Link>
        </div>
      </section>

      {/* ─── PRIVACY POLICY LINK ────────────────────────────────────── */}
      <section className="py-12 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-3">
            How we handle your information
          </p>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors"
          >
            Privacy Policy
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
