"use client";

import Image from "next/image";
import Link from "next/link";
import { tinaField, useTina } from "tinacms/dist/react";
import type { CliniciansQuery, CliniciansQueryVariables } from "@/tina/__generated__/types";
import GovernanceBlock from "../../components/GovernanceBlock";

interface ClinicianData {
  slug: string;
  name: string;
  title: string;
  image: string;
  credentials: string[];
  shortBio: string;
  bio: string;
  specialties: string[];
}

interface ClinicianClientProps {
  query: string;
  variables: CliniciansQueryVariables;
  data: CliniciansQuery;
}

export default function ClinicianClient(props: ClinicianClientProps) {
  const { data: tinaData } = useTina(props);
  const clinicianDoc = tinaData.clinicians;
  const clinician = clinicianDoc as ClinicianData;

  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/clinicians"
            className="inline-flex items-center gap-1.5 font-sans text-xs text-slate-mid hover:text-navy mb-8 transition-colors"
          >
            ← Back to Clinical Team
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div
              data-tina-field={tinaField(clinicianDoc, "image")}
              className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-border bg-canvas"
            >
              <Image
                src={clinician.image}
                alt={`Photo of ${clinician.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="text-center md:text-left">
              <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
                Clinical Team
              </p>
              <h1
                data-tina-field={tinaField(clinicianDoc, "name")}
                className="font-serif text-3xl sm:text-4xl md:text-5xl text-navy font-semibold leading-tight mb-3"
              >
                {clinician.name}
              </h1>
              <p
                data-tina-field={tinaField(clinicianDoc, "title")}
                className="font-sans text-sm text-blue uppercase tracking-wider font-semibold mb-6"
              >
                {clinician.title}
              </p>
              <div className="w-12 h-px bg-blue mb-6 mx-auto md:mx-0" />

              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start mb-6">
                {clinician.credentials.map((cred, index) => (
                  <span
                    key={`${cred}-${index}`}
                    data-tina-field={tinaField(clinicianDoc, "credentials", index)}
                    className="bg-blue-soft border border-blue/10 text-blue font-sans text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h2 className="font-serif text-2xl text-navy font-semibold mb-6">About</h2>
          <p
            data-tina-field={tinaField(clinicianDoc, "bio")}
            className="font-sans text-sm md:text-base text-slate-mid leading-relaxed italic mb-10"
          >
            {clinician.bio}
          </p>

          <h3 className="font-sans text-xs text-slate-light uppercase tracking-[0.3em] mb-3">
            Specialties
          </h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
            {clinician.specialties.map((spec, index) => (
              <span
                key={`${spec}-${index}`}
                data-tina-field={tinaField(clinicianDoc, "specialties", index)}
                className="bg-canvas-white border border-border text-slate-mid font-sans text-xs px-3 py-1.5 rounded-lg"
              >
                {spec}
              </span>
            ))}
          </div>

          <Link
            href="/support#intake"
            className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-[0.98] transition-all duration-150"
          >
            Begin Therapy Intake
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-canvas-white border-t border-border">
        <div className="max-w-4xl mx-auto">
          <GovernanceBlock variant="card" />
        </div>
      </section>
    </div>
  );
}
