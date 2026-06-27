import type { Metadata } from "next";
import Link from "next/link";
import ConchDivider from "../components/ConchDivider";
import GovernanceBlock from "../components/GovernanceBlock";
import ThreePillars from "../components/ThreePillars";

export const metadata: Metadata = {
  title: "Clinical Support — Heal Gurukuli",
  description:
    "Specialised, trauma-informed psychotherapy for adult gurukuli survivors. Book a free initial consultation with a UKCP-registered therapist.",
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

      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Clinical Support
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Begin Clinical Support
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic max-w-2xl">
            Specialised, trauma-informed clinical care designed specifically for
            adult survivors of ISKCON Gurukula abuse. You don&rsquo;t need to explain
            yourself here — we already understand the landscape.
          </p>
        </div>
      </section>

      {/* ─── PRELUDE ────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Why Support Structures Matter
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            Healing Rarely Happens in Isolation
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed">
            <p>
              Survivors of institutional abuse often carry their wounds in
              profound isolation — conditioned by years of silencing,
              community pressure, and the gaslighting of collective denial.
              Research consistently shows that recovery from complex trauma
              is significantly more effective when it occurs within a structured
              framework of support: individual therapy, peer community, and
              access to self-guided resources.
            </p>
            <p>
              Each element reinforces the others. Individual therapy provides the
              secure, personalised clinical container. Community groups break
              the isolation and offer the powerful medicine of shared
              recognition. Resources extend the healing into daily life.
              Together, these three pillars form a comprehensive support
              ecosystem that addresses the full complexity of institutional
              trauma recovery.
            </p>
            <p>
              The Heal Gurukuli Initiative has been designed with this
              integrated model at its core — because a single session a week
              is never the whole story. Recovery is a life lived differently,
              supported at every level.
            </p>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THREE PILLARS ──────────────────────────────────────────── */}
      <ThreePillars />

      <ConchDivider />

      {/* ─── ONE-TO-ONE PSYCHOTHERAPY ───────────────────────────────── */}
      <section id="booking" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Individual Therapy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-6">
            One-to-One Psychotherapy
          </h2>

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed mb-10">
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
              The first step is a free 30-minute initial consultation — a quiet,
              unhurried conversation to understand your situation and ensure
              this is the right therapeutic fit. There is no obligation to
              proceed, and no clinical assessment takes place in this session.
            </p>
          </div>

          <div className="bg-blue-soft border border-blue/15 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex-1">
              <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold mb-1">
                Free Initial Consultation
              </p>
              <p className="font-serif text-lg text-navy font-semibold">
                30-minute initial consultation
              </p>
              <p className="font-sans text-xs text-slate-mid mt-1">
                Confidential · No obligation · Encrypted platform
              </p>
            </div>
            <a
              href="#booking-portal"
              className="bg-navy text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150 whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
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

          <div className="space-y-5 font-sans text-sm md:text-base text-slate-mid leading-relaxed">
            <p>
              Beginning therapy is a significant step, and we understand that
              reaching out can itself feel like a barrier. We have designed this
              intake process to be as clear and low-pressure as possible.
            </p>
            <p>
              The initial 30-minute consultation is not a clinical assessment —
              it is a quiet conversation to ensure that you feel comfortable and
              that the sanctuary is the right environment for the work you wish
              to undertake. There is no pressure to disclose details of your
              experience at this stage.
            </p>
            <p>
              If you wish to continue, we will agree a structured treatment
              plan together — including session frequency, modality, and any
              relevant safeguarding considerations — before your first formal
              session begins. Everything proceeds at a pace that is right for you.
            </p>
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── THERAPIES OFFERED ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Clinical Modalities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            Therapies We Offer
          </h2>
          <p className="font-sans text-sm text-slate-mid mb-10 italic">
            Our clinicians draw on a range of evidence-based modalities — selected
            collaboratively with each client based on their needs and preferences.{" "}
            <Link href="/resources#understanding-therapy" className="text-blue hover:underline">
              Learn more about each approach →
            </Link>
          </p>

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

      {/* ─── THE 3 STEPS ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-8">
            Three Steps to Begin
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: "Step 1",
                title: "Book a Free Consultation",
                body: "Use the secure booking form below to schedule your free 30-minute initial consultation. No assessment, no pressure — just a conversation.",
              },
              {
                step: "Step 2",
                title: "Confidential Conversation",
                body: "Speak openly with Caitanya Lila about your background, your needs, and what you are hoping to work toward. Everything shared remains fully confidential.",
              },
              {
                step: "Step 3",
                title: "Begin the Work",
                body: "If the therapeutic fit is right, we agree a structured treatment plan together and begin sessions at a pace that feels safe and manageable for you.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-canvas-white border border-border rounded-xl p-6 flex flex-col gap-3">
                <p className="font-sans text-xs text-blue uppercase tracking-[0.3em]">{step}</p>
                <div className="w-6 h-px bg-blue/40" />
                <h3 className="font-serif text-lg text-navy font-semibold">{title}</h3>
                <p className="font-sans text-sm text-slate-mid leading-relaxed italic flex-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConchDivider />

      {/* ─── BOOKING PORTAL ─────────────────────────────────────────── */}
      <section id="booking-portal" className="py-16 md:py-20 px-6 bg-canvas-white border-y border-border">
        <div className="max-w-3xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            Secure Booking
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy font-semibold leading-tight mb-3">
            Book Your Initial Consultation
          </h2>
          <p className="font-sans text-sm text-slate-mid mb-8 italic">
            Caitanya Lila — 30-Minute Initial Consultation. Confidential and
            encrypted end-to-end.
          </p>

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
                [Embed Caitanya Lila 30-Min Initial Consultation — Acuity Scheduling Iframe]
              </span>
              The Acuity Scheduling iframe will be embedded in this container.
              All bookings are processed securely through Acuity&rsquo;s encrypted platform.
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

      {/* ─── MEET THE TEAM ──────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
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
            the gurukuli experience. All clinicians operate under regular
            professional supervision.
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

      {/* ─── GOVERNANCE ─────────────────────────────────────────────── */}
      <GovernanceBlock />

      <ConchDivider />

      {/* ─── SUPPORT LINES AROUND THE WORLD ────────────────────────── */}
      <section id="crisis" className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">

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

          <div className="space-y-3">
            {[
              {
                region: "United Kingdom",
                lines: [
                  { name: "Samaritans", detail: "Free, 24/7 emotional support", contact: "116 123", type: "phone" },
                  { name: "Shout Crisis Text Line", detail: "Text-based crisis support", contact: "Text SHOUT to 85258", type: "text" },
                  { name: "Mind Infoline", detail: "Mental health information & support", contact: "0300 123 3393", type: "phone" },
                ],
              },
              {
                region: "United States & Canada",
                lines: [
                  { name: "988 Suicide & Crisis Lifeline", detail: "Free, 24/7 crisis support", contact: "Call or text 988", type: "phone" },
                  { name: "Crisis Text Line", detail: "Text-based support", contact: "Text HOME to 741741", type: "text" },
                  { name: "RAINN", detail: "Sexual assault support", contact: "1-800-656-4673", type: "phone" },
                ],
              },
              {
                region: "Australia & New Zealand",
                lines: [
                  { name: "Lifeline Australia", detail: "24/7 crisis support", contact: "13 11 14", type: "phone" },
                  { name: "Beyond Blue", detail: "Anxiety, depression, mental health", contact: "1300 22 4636", type: "phone" },
                  { name: "Lifeline New Zealand", detail: "Crisis support", contact: "0800 543 354", type: "phone" },
                ],
              },
              {
                region: "Europe",
                lines: [
                  { name: "European Helpline Directory", detail: "Find a crisis line in your country", contact: "www.befrienders.org", type: "web" },
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
                  {lines.map(({ name, detail, contact, type }) => (
                    <div key={name} className="px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <p className="font-sans text-sm text-navy font-medium">{name}</p>
                        <p className="font-sans text-xs text-slate-mid italic">{detail}</p>
                      </div>
                      <span
                        className={`font-sans text-sm font-semibold shrink-0 ${
                          type === "web" ? "text-blue" : "text-navy"
                        }`}
                      >
                        {contact}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-canvas border border-border rounded-xl p-6">
            <p className="font-sans text-xs text-slate-light uppercase tracking-wider mb-2">
              Gurukuli-Specific Support
            </p>
            <p className="font-sans text-sm text-slate-mid leading-relaxed mb-4">
              For concerns specific to abuse within ISKCON institutions, you may
              also contact ISKCON Resolve — an independent resource for community
              members affected by institutional harm.
            </p>
            <Link
              href="/contact/crisis-support"
              className="inline-flex items-center gap-1.5 text-xs text-blue font-semibold hover:underline"
            >
              View all crisis resources →
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
