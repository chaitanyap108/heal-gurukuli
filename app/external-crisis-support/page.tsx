import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "External Crisis Support — Heal Gurukuli",
  description:
    "A global registry of crisis hotlines, mental health helplines, and support services for immediate assistance.",
};

interface SupportLine {
  name: string;
  number: string;
  availability: string;
  notes: string;
}

interface CountryGroup {
  country: string;
  lines: SupportLine[];
}

const crisisRegistry: CountryGroup[] = [
  {
    country: "United Kingdom",
    lines: [
      {
        name: "Samaritans",
        number: "116 123",
        availability: "24 hours, 7 days a week",
        notes: "Free, confidential emotional support for anyone in distress.",
      },
      {
        name: "Shout Crisis Text Line",
        number: "Text SHOUT to 85258",
        availability: "24 hours, 7 days a week",
        notes: "Free, confidential text support for immediate mental help.",
      },
      {
        name: "NHS Mental Health Services",
        number: "Call 111",
        availability: "24 hours, 7 days a week",
        notes: "Non-urgent support and guidance for clinical routing.",
      },
    ],
  },
  {
    country: "United States & Canada",
    lines: [
      {
        name: "988 Suicide & Crisis Lifeline",
        number: "Call or Text 988",
        availability: "24 hours, 7 days a week",
        notes: "Free, confidential support for individuals in suicidal crisis or emotional distress.",
      },
      {
        name: "Crisis Text Line",
        number: "Text HOME to 741741",
        availability: "24 hours, 7 days a week",
        notes: "Free connection to a crisis counselor via SMS.",
      },
      {
        name: "The Trevor Project (LGBTQ+)",
        number: "Call 1-866-488-7386 or Text START to 678-678",
        availability: "24 hours, 7 days a week",
        notes: "Specialized support for LGBTQ young people.",
      },
    ],
  },
  {
    country: "Australia",
    lines: [
      {
        name: "Lifeline",
        number: "Call 13 11 14",
        availability: "24 hours, 7 days a week",
        notes: "National charity providing all Australians access to crisis support.",
      },
      {
        name: "Beyond Blue",
        number: "Call 1300 22 4636",
        availability: "24 hours, 7 days a week",
        notes: "Support and information on anxiety, depression, and suicide prevention.",
      },
    ],
  },
  {
    country: "New Zealand",
    lines: [
      {
        name: "1737, Need to Talk?",
        number: "Call or Text 1737",
        availability: "24 hours, 7 days a week",
        notes: "Free, confidential service connecting you to a trained counselor.",
      },
      {
        name: "Lifeline Aotearoa",
        number: "Call 0800 543 354",
        availability: "24 hours, 7 days a week",
        notes: "Confidential support services delivered by qualified staff and volunteers.",
      },
    ],
  },
];

export default function ExternalCrisisSupportPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <span className="bg-rose-50 border border-rose-100 text-rose-600 font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 inline-block">
            Global Hotlines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            External Crisis Support
          </h1>
          <div className="w-12 h-px bg-rose-500 mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            A comprehensive list of free, confidential crisis hotlines and support services available in major countries. If you are in immediate danger of self-harm or require urgent medical assistance, please contact your local national first responders or visit your local hospital.
          </p>
        </div>
      </section>

      {/* ─── CRISIS REGISTRY ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-10">
            {crisisRegistry.map((group) => (
              <div key={group.country} className="bg-canvas-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-canvas-soft border-b border-border px-6 py-4">
                  <h2 className="font-serif text-xl text-navy font-semibold">{group.country}</h2>
                </div>
                <div className="divide-y divide-border">
                  {group.lines.map((line) => (
                    <div key={line.name} className="p-6 sm:flex sm:items-start gap-6">
                      <div className="sm:w-1/3 shrink-0 mb-3 sm:mb-0">
                        <h3 className="font-serif text-lg text-navy font-semibold mb-1">{line.name}</h3>
                        <span className="text-[10px] text-slate-light uppercase tracking-wider block">{line.availability}</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-xl text-blue font-bold tracking-wide mb-2">
                          {line.number}
                        </p>
                        <p className="font-sans text-sm text-slate-mid leading-relaxed italic">
                          {line.notes}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* International Search Notice */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-serif text-lg text-navy font-semibold mb-2">Other Countries &amp; Regions</h3>
            <p className="font-sans text-sm text-slate-mid leading-relaxed max-w-2xl mx-auto mb-6">
              If your country is not listed above, Befrienders Worldwide helps you search for local helpline numbers and support organizations in over 40 countries.
            </p>
            <a
              href="https://www.befrienders.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
            >
              Search Befrienders Worldwide
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Navigation link back to support */}
          <div className="text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 border border-border bg-canvas-white font-sans text-sm text-slate-mid font-semibold px-6 py-2.5 rounded-lg hover:bg-canvas-soft hover:text-navy active:scale-95 transition-all duration-150"
            >
              Back to Support Services
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
