"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { VolunteerQuery, VolunteerQueryVariables } from "@/tina/__generated__/types";

interface Role {
  title: string;
  description: string;
  requirementText: string;
}

interface Way {
  title: string;
  description: string;
  badgeText: string;
}

interface Highlight {
  title: string;
  description: string;
}

interface VolunteerData {
  hero: { eyebrow: string; heading: string; subtitle: string };
  rolesSection: {
    eyebrow: string;
    heading: string;
    description: string;
    roles: Role[];
  };
  safeguarding: { heading: string; description: string };
  otherWaysSection: {
    eyebrow: string;
    heading: string;
    ways: Way[];
  };
  cpdPlacement: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    highlights: Highlight[];
    ctaText: string;
    ctaHref: string;
  };
}

interface VolunteerPageClientProps {
  query: string;
  variables: VolunteerQueryVariables;
  data: VolunteerQuery;
}

export default function VolunteerPageClient(props: VolunteerPageClientProps) {
  const { data: tinaData } = useTina(props);
  const data = tinaData.volunteer as VolunteerData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            {data.hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            {data.hero.heading}
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            {data.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── VOLUNTEER ROLES & APPLICATION ─────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Roles list */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-navy font-semibold mb-4">{data.rolesSection.heading}</h2>
                <p className="font-sans text-sm text-slate-mid leading-relaxed mb-6">
                  {data.rolesSection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {data.rolesSection.roles.map((role: Role, index: number) => (
                  <div key={index} className="bg-canvas-white border border-border rounded-xl p-6 flex flex-col gap-3 shadow-sm hover:border-blue/20 transition-all">
                    <h3 className="font-serif text-lg text-navy font-semibold">{role.title}</h3>
                    <p className="font-sans text-xs text-slate-mid leading-relaxed flex-1 italic">{role.description}</p>
                    <div className="border-t border-border pt-3 mt-1 flex justify-between items-center text-[10px]">
                      <span className="text-slate-light uppercase tracking-wider">Requirement</span>
                      <span className="text-blue font-semibold">{role.requirementText}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Safeguarding Alert */}
              <div className="bg-blue-soft border border-blue/15 rounded-xl p-6">
                <h4 className="font-serif text-base text-navy font-semibold mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {data.safeguarding.heading}
                </h4>
                <p className="font-sans text-xs text-slate-mid leading-relaxed">
                  {data.safeguarding.description}
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-canvas-white border border-border rounded-xl p-6 shadow-sm sticky top-28 space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-navy font-semibold mb-1">Apply to Volunteer</h3>
                  <p className="font-sans text-xs text-slate-mid italic">Submit a brief interest application.</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="vol-name" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="vol-name"
                      required
                      placeholder="Your name"
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="vol-email" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="vol-email"
                      required
                      placeholder="your.email@example.com"
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="vol-role" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Role of Interest
                    </label>
                    <select
                      id="vol-role"
                      required
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs text-slate-mid focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all"
                    >
                      <option value="">Select a role...</option>
                      {data.rolesSection.roles.map((role: Role, index: number) => (
                        <option key={index} value={role.title.toLowerCase().replace(/\s+/g, "-")}>{role.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="vol-interest" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Why are you interested?
                    </label>
                    <textarea
                      id="vol-interest"
                      required
                      rows={4}
                      placeholder="Share a short note about your interest, skills, or background."
                      className="block w-full px-3 py-2.5 border border-border rounded-lg bg-canvas text-xs focus:outline-none focus:ring-1 focus:ring-blue focus:border-blue transition-all resize-y"
                    />
                  </div>

                  <div>
                    <label htmlFor="vol-cv" className="block font-sans text-[10px] text-slate-mid uppercase tracking-wider font-semibold mb-1">
                      Attach CV (PDF)
                    </label>
                    <input
                      type="file"
                      id="vol-cv"
                      name="cv"
                      accept="application/pdf,.pdf"
                      className="block w-full text-xs text-slate-mid file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:bg-blue-soft file:text-blue file:font-semibold file:text-[10px] hover:file:bg-blue-pale transition-all"
                    />
                    <p className="font-sans text-[10px] text-slate-light mt-1">
                      PDF format only. Max recommended size 5 MB.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-sans text-xs font-semibold py-2.5 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact/get-in-touch"
              className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas hover:text-navy active:scale-95 transition-all duration-150"
            >
              Back to General Contact
            </Link>
          </div>

        </div>
      </section>

      {/* ─── ADDITIONAL WAYS TO HELP ────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-4xl mx-auto">

          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
            {data.otherWaysSection.eyebrow}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-3">
            {data.otherWaysSection.heading}
          </h2>
          <p className="font-sans text-sm text-slate-mid italic mb-10">
            Beyond our formal volunteer roles, there are meaningful ways to
            contribute your time, creativity, and presence to the mission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {data.otherWaysSection.ways.map((way: Way, index: number) => (
              <div key={index} className="bg-canvas border border-border rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-soft border border-blue/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-navy font-semibold">{way.title}</h3>
                <p className="font-sans text-xs text-slate-mid leading-relaxed italic flex-1">
                  {way.description}
                </p>
                <div className="border-t border-border pt-3">
                  <span className="font-sans text-[10px] text-blue font-semibold uppercase tracking-wider">
                    {way.badgeText}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ─── UKCP CPD / CAREER DEVELOPMENT NOTE ────────────────────── */}
      <section className="py-16 md:py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-8 md:p-10">

            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              {data.cpdPlacement.eyebrow}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-6">
              {data.cpdPlacement.heading}
            </h2>

            <div className="space-y-4 font-sans text-sm text-slate-mid leading-relaxed mb-8">
              {data.cpdPlacement.paragraphs.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {data.cpdPlacement.highlights.map((highlight: Highlight, index: number) => (
                <div key={index} className="bg-canvas-white/60 border border-blue/10 rounded-xl p-4">
                  <p className="font-sans text-xs text-navy font-semibold mb-1">{highlight.title}</p>
                  <p className="font-sans text-xs text-slate-mid leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs text-slate-mid italic mb-6">
              If you are a student or trainee interested in a supervised placement,
              please mention this in your application and we will discuss available
              options with you directly.
            </p>

            <Link
              href={data.cpdPlacement.ctaHref}
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
            >
              {data.cpdPlacement.ctaText}
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
