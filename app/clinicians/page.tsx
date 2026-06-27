import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Clinical Team — Heal Gurukuli",
  description:
    "Meet our BACP and UKCP-registered clinical therapists specializing in trauma-informed care and recovery for gurukuli survivors.",
};

interface Clinician {
  name: string;
  title: string;
  image: string;
  credentials: string[];
  bio: string;
  specialties: string[];
}

const clinicians: Clinician[] = [
  {
    name: "Caitanya Lila",
    title: "UKCP-Registered Psychotherapist · Founder",
    image: "/caitanya_lila.jpg",
    credentials: ["UKCP Registered", "Integrative MSc", "10+ Years Practice"],
    bio: "Born within the gurukuli system, Caitanya combines lived understanding with a decade of rigorous clinical training in complex PTSD, relational attachment, and trauma-focused modalities. She founded Heal Gurukuli to offer survivors a specialized clinical sanctuary built on trust, safety, and deep cultural attunement.",
    specialties: ["Complex Trauma (C-PTSD)", "Somatic Integration", "Relational Therapy"],
  },
  {
    name: "Dr. Liam Sterling",
    title: "Clinical Psychologist & EMDR Specialist",
    image: "/liam_sterling.jpg",
    credentials: ["HCPC Registered", "DClinPsy", "EMDR Europe Accredited"],
    bio: "Liam specializes in evidence-based trauma reprocessing and cognitive rehabilitation. He leads our EMDR (Eye Movement Desensitisation and Reprocessing) program, helping survivors process historical trauma and reclaim emotional stability. His approach is highly collaborative, structured, and compassionate.",
    specialties: ["EMDR Therapy", "Cognitive Behavioral Therapy (CBT)", "Nervous System Regulation"],
  },
  {
    name: "Sarah Jenkins, MBACP",
    title: "Senior Trauma Therapist & Somatic Practitioner",
    image: "/sarah_jenkins.jpg",
    credentials: ["BACP Accredited", "Somatic Experiencing Practitioner", "Adolescent Specialist"],
    bio: "Sarah integrates body-oriented psychotherapy and attachment-based counseling. Recognizing that trauma is held deeply within the physical body, her sessions focus on grounding, somatic tracking, and restoring a feeling of physical safety. She has extensive experience supporting survivors of developmental abuse.",
    specialties: ["Somatic Experiencing", "Developmental Trauma", "Attachment Repair"],
  },
  {
    name: "Dr. Priya Patel, UKCP",
    title: "Relational Psychotherapist & Group Facilitator",
    image: "/priya_patel.jpg",
    credentials: ["UKCP Registered", "PhD in Psychotherapy", "Group Analysis Diploma"],
    bio: "Priya specializes in the social and systemic dimensions of abuse. She designs and facilitates our group therapeutic programs, helping survivors break isolation and build collective resilience. Her relational approach focuses on interpersonal safety, boundaries, and rebuilding community trust.",
    specialties: ["Group Facilitation", "Systemic Trauma", "Interpersonal Relationships"],
  },
];

export default function CliniciansPage() {
  return (
    <div className="bg-canvas font-sans text-slate min-h-screen">
      {/* ─── PAGE HERO ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-canvas-white border-b border-border">
        <div className="max-w-3xl mx-auto">
          <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-5">
            Specialist Care
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy font-semibold leading-tight mb-6">
            Our Clinical Team
          </h1>
          <div className="w-12 h-px bg-blue mb-8" />
          <p className="font-sans text-base md:text-lg text-slate-mid leading-relaxed italic">
            Meet our dedicated team of licensed, registered practitioners. Each clinician brings extensive specialist experience in trauma-informed therapy, combined with a deep understanding of the unique institutional and cultural contexts surrounding gurukuli survivors.
          </p>
        </div>
      </section>

      {/* ─── TEAM GRID ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-20">
            {clinicians.map((clinician) => (
              <div 
                key={clinician.name} 
                className="bg-canvas-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full"
              >
                {/* Image Container with aspect ratio 3:2 */}
                <div className="relative w-full aspect-[3/2] shrink-0 bg-canvas overflow-hidden">
                  <Image
                    src={clinician.image}
                    alt={`Photo of ${clinician.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1 gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-navy font-semibold mb-1">
                      {clinician.name}
                    </h3>
                    <p className="font-sans text-xs text-blue uppercase tracking-wider font-semibold">
                      {clinician.title}
                    </p>
                  </div>

                  {/* Credentials / badging */}
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
                    <div className="flex flex-wrap gap-1.5">
                      {clinician.specialties.map((spec) => (
                        <span 
                          key={spec} 
                          className="bg-canvas border border-border text-slate-mid font-sans text-xs px-2.5 py-1 rounded-lg"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Governance Section */}
          <div className="bg-blue-soft border border-blue/15 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
            <p className="font-sans text-blue text-xs uppercase tracking-[0.35em] mb-4">
              Governance & Safety
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-6">
              Clinical Standards & Supervision
            </h2>
            <div className="space-y-4 font-sans text-sm text-slate-mid leading-relaxed mb-6">
              <p>
                All clinical work overseen by the Heal Gurukuli Initiative complies with the strict guidelines and ethical standards of the <strong className="text-navy font-medium">United Kingdom Council for Psychotherapy (UKCP)</strong> and the <strong className="text-navy font-medium">British Association for Counselling and Psychotherapy (BACP)</strong>.
              </p>
              <p>
                To maintain the highest levels of safety and efficacy, our clinicians receive regular clinical supervision from senior specialists in complex institutional abuse and cultic trauma. All records, treatment histories, and communication portals are stored under GDPR-compliant, clinically secure, and fully encrypted systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/support"
                className="bg-navy text-white font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-navy-mid active:scale-95 transition-all duration-150"
              >
                Access Support Services
              </Link>
              <Link
                href="/contact/get-in-touch"
                className="border border-navy/30 text-navy font-sans text-xs font-semibold px-6 py-3 rounded-lg hover:bg-white/40 active:scale-95 transition-all duration-150"
              >
                Contact the Clinical Lead
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
