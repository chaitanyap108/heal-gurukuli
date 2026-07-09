import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GovernanceBlock from "../components/GovernanceBlock";
import { clinicians } from "../data/clinicians";

export const metadata: Metadata = {
  title: "Our Clinical Team — Heal Gurukuli",
  description:
    "Meet our BACP and UKCP-registered clinical therapists specializing in trauma-informed care and recovery for gurukuli survivors.",
};

export default function CliniciansPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Specialist Care
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Our Clinical Team
          </h1>
          <div className="w-12 h-px bg-blue mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Meet our dedicated team of licensed, registered practitioners. Each clinician brings extensive specialist experience in trauma-informed therapy, combined with a deep understanding of the unique institutional and cultural contexts surrounding gurukuli survivors.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-20">
            {clinicians.map((clinician) => (
              <div
                key={clinician.slug}
                className="bg-canvas-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[3/2] shrink-0 bg-canvas overflow-hidden">
                  <Image
                    src={clinician.image}
                    alt={`Photo of ${clinician.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-navy font-semibold mb-1">
                      {clinician.name}
                    </h3>
                    <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold">
                      {clinician.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {clinician.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="bg-blue-soft border border-blue/10 text-blue font-sans text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-px bg-border" />

                  <p className="font-sans text-sm text-slate-mid leading-relaxed italic flex-1">
                    {clinician.bio}
                  </p>

                  <div className="w-full border-t border-border pt-4 mt-2">
                    <p className="font-sans text-[10px] text-slate-light uppercase tracking-wider mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {clinician.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="bg-canvas border border-border text-slate-mid font-sans text-xs px-2.5 py-1 rounded-lg"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/clinicians/${clinician.slug}`}
                      className="inline-flex items-center gap-2 font-sans text-sm text-navy font-medium border border-navy/30 px-5 py-2.5 rounded-lg hover:bg-blue-soft transition-colors"
                    >
                      View Full Profile
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <GovernanceBlock variant="card" />
        </div>
      </section>
    </div>
  );
}
