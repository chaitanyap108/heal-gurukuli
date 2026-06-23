import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Begin Your Healing Journey — Heal Gurukuli",
  description:
    "Book a confidential initial consultation with a UKCP-registered psychotherapist. Secure, trauma-informed care for adult gurukuli survivors.",
};

export default function SupportPage() {
  return (
    <div className="bg-canvas font-sans text-slate">

      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Clinical Appointments
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Begin Your Healing Journey
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic max-w-2xl">
            We offer a secure, confidential environment to process deeply rooted
            pain. The first step is to book a secure initial consultation —
            a 30-minute discovery call to understand your needs and ensure this
            is the right therapeutic fit.
          </p>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            The Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            What to Expect
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10">
            <p>
              Beginning therapy is a significant step. We have designed this
              intake process to be as clear and low-pressure as possible. The
              initial 30-minute discovery call is not a clinical assessment —
              it is a quiet conversation, conducted by Caitanya Lila, to ensure
              that you feel comfortable and that the sanctuary is the right
              environment for the work you wish to undertake.
            </p>
            <p>
              There is no obligation to proceed following the discovery call.
              If you wish to continue, we will agree a structured treatment
              plan together — including session frequency, modality, and any
              relevant safeguarding considerations — before your first formal
              session begins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: "Step 1",
                title: "Book Discovery Call",
                body: "Use the secure booking form below to schedule your free 30-minute initial consultation.",
              },
              {
                step: "Step 2",
                title: "Confidential Conversation",
                body: "Speak with Caitanya Lila about your background, needs, and what you are hoping to work toward.",
              },
              {
                step: "Step 3",
                title: "Begin the Work",
                body: "If the therapeutic fit is right, we agree a structured treatment plan and begin at a pace that is right for you.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-canvas-white border border-border rounded-xl p-6 flex flex-col gap-3">
                <p className="font-sans text-xs text-blue uppercase tracking-[0.3em]">{step}</p>
                <h3 className="font-serif text-lg text-navy font-semibold">{title}</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed italic">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── BOOKING INTERFACE ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Secure Booking
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            Book Your Discovery Call
          </h2>
          <p className="font-sans text-sm text-slate-mid mb-8 italic">
            Caitanya Lila — 30-Minute Initial Consultation. Confidential and
            encrypted end-to-end.
          </p>

          {/* Acuity booking container */}
          <div className="border-2 border-dashed border-border rounded-2xl bg-canvas min-h-[480px] flex flex-col items-center justify-center gap-5 p-10">
            <div className="w-10 h-10 rounded-full bg-blue-soft border border-blue/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
            </div>
            <p className="font-sans text-sm text-slate-mid text-center max-w-sm leading-relaxed">
              <span className="font-medium text-slate block mb-1">
                [Embed Caitanya Lila 30-Min Discovery Call Acuity Iframe Here]
              </span>
              The Acuity Scheduling iframe will be embedded in this container.
              All bookings are processed securely through Acuity Scheduling's
              encrypted platform.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-soft text-blue font-sans text-xs px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                SSL Encrypted
              </span>
              <span className="font-sans text-xs text-slate-light">·</span>
              <span className="font-sans text-xs text-slate-mid">UKCP Confidentiality Standards</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── THREE PILLARS (summary) ────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Areas of Support
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-8">
            What We Offer
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Individual Psychotherapy",
                body: "Weekly one-on-one sessions with a UKCP-registered therapist, structured around a co-created treatment plan using trauma-focused, evidence-based modalities.",
              },
              {
                num: "02",
                title: "Crisis Support Lines",
                body: "Between-session support for active clients during acute distress. Operated under strict clinical confidentiality and safeguarding protocols.",
              },
              {
                num: "03",
                title: "Facilitated Community Groups",
                body: "Clinically supervised peer groups providing a secure container for shared experience, mutual support, and collective resilience.",
              },
            ].map(({ num, title, body }) => (
              <div key={num} className="flex gap-6 bg-canvas-white border border-border rounded-xl p-6">
                <span className="font-sans text-xs text-slate-light tracking-[0.3em] pt-1 shrink-0">{num}</span>
                <div>
                  <h3 className="font-serif text-xl text-navy font-semibold mb-2">{title}</h3>
                  <p className="font-sans text-sm text-slate-mid leading-relaxed italic">{body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CRISIS LINE PARAMETERS ─────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Active Clients Only
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Crisis Support Line
          </h2>

          <div className="space-y-4 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-8">
            <p>
              The crisis support line is available exclusively to clients who
              are currently engaged in active treatment with the Heal Gurukuli
              Initiative. It is not an emergency service and is not available
              to the general public.
            </p>
          </div>

          <div className="bg-canvas border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border bg-canvas-white">
              <p className="font-sans text-xs text-slate-light uppercase tracking-[0.3em]">
                Operating Parameters
              </p>
            </div>
            <div className="divide-y divide-border">
              {[
                {
                  label: "Eligibility",
                  value:
                    "Active clients enrolled in individual psychotherapy or facilitated group work.",
                },
                {
                  label: "Availability",
                  value:
                    "Monday to Friday, 09:00–18:00 GMT. Response within 2 hours during operating hours.",
                },
                {
                  label: "Contact Method",
                  value:
                    "Secure encrypted messaging via the client portal. Details provided upon commencement of treatment.",
                },
                {
                  label: "Scope",
                  value:
                    "Acute distress, trauma activation, and safety planning. Does not replace scheduled sessions.",
                },
                {
                  label: "Confidentiality",
                  value:
                    "All crisis communications are held under the same strict UKCP confidentiality standards as clinical sessions.",
                },
                {
                  label: "Safeguarding",
                  value:
                    "Where there is immediate risk to life, the clinician will always follow mandated safeguarding protocols and may involve emergency services.",
                },
              ].map(({ label, value }) => (
                <div key={label} className="px-6 py-4 flex flex-col sm:flex-row sm:gap-8">
                  <p className="font-sans text-xs text-slate-light uppercase tracking-[0.2em] sm:w-36 shrink-0 mb-1 sm:mb-0 pt-0.5">
                    {label}
                  </p>
                  <p className="font-sans text-sm text-slate-mid leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-blue-soft border border-blue/15 rounded-xl px-6 py-4">
            <p className="font-sans text-xs text-blue uppercase tracking-[0.2em] mb-2">
              Emergency Services
            </p>
            <p className="font-sans text-sm text-slate-mid leading-relaxed">
              If you or someone else is in immediate danger, please contact{" "}
              <strong className="text-navy font-medium">999</strong> (UK
              emergency services) or the{" "}
              <strong className="text-navy font-medium">
                Samaritans on 116 123
              </strong>{" "}
              (free, 24 hours). The crisis line is not a substitute for
              emergency intervention.
            </p>
          </div>

        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-sm text-slate-mid mb-6 italic">
            Want to understand more about our clinical framework before booking?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/mission"
              className="border border-navy/30 text-navy font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-blue-soft active:scale-[0.98] transition-all duration-150"
            >
              Read Our Mission
            </Link>
            <Link
              href="/contribute"
              className="bg-navy text-white font-sans font-medium px-7 py-3.5 rounded-lg text-sm hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
            >
              Support the Sanctuary
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
