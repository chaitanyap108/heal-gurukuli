export interface Clinician {
  slug: string;
  name: string;
  title: string;
  image: string;
  credentials: string[];
  bio: string;
  shortBio: string;
  specialties: string[];
}

export const clinicians: Clinician[] = [
  {
    slug: "caitanya-lila",
    name: "Caitanya Lila",
    title: "UKCP-Registered Psychotherapist · Founder",
    image: "/caitanya_lila.jpg",
    credentials: ["UKCP Registered", "Integrative MSc", "10+ Years Practice"],
    shortBio:
      "Born within the gurukuli system, Caitanya combines lived understanding with rigorous clinical training in complex PTSD and trauma-focused modalities.",
    bio: "Born within the gurukuli system, Caitanya combines lived understanding with a decade of rigorous clinical training in complex PTSD, relational attachment, and trauma-focused modalities. She founded Heal Gurukuli to offer survivors a specialized clinical sanctuary built on trust, safety, and deep cultural attunement.",
    specialties: ["Complex Trauma (C-PTSD)", "Somatic Integration", "Relational Therapy"],
  },
  {
    slug: "liam-sterling",
    name: "Dr. Liam Sterling",
    title: "Clinical Psychologist & EMDR Specialist",
    image: "/liam_sterling.jpg",
    credentials: ["HCPC Registered", "DClinPsy", "EMDR Europe Accredited"],
    shortBio:
      "Liam specialises in evidence-based trauma reprocessing and leads our EMDR programme for historical trauma recovery.",
    bio: "Liam specializes in evidence-based trauma reprocessing and cognitive rehabilitation. He leads our EMDR (Eye Movement Desensitisation and Reprocessing) program, helping survivors process historical trauma and reclaim emotional stability. His approach is highly collaborative, structured, and compassionate.",
    specialties: ["EMDR Therapy", "Cognitive Behavioral Therapy (CBT)", "Nervous System Regulation"],
  },
  {
    slug: "sarah-jenkins",
    name: "Sarah Jenkins, MBACP",
    title: "Senior Trauma Therapist & Somatic Practitioner",
    image: "/sarah_jenkins.jpg",
    credentials: ["BACP Accredited", "Somatic Experiencing Practitioner", "Adolescent Specialist"],
    shortBio:
      "Sarah integrates body-oriented psychotherapy and attachment-based counselling to restore a felt sense of physical safety.",
    bio: "Sarah integrates body-oriented psychotherapy and attachment-based counseling. Recognizing that trauma is held deeply within the physical body, her sessions focus on grounding, somatic tracking, and restoring a feeling of physical safety. She has extensive experience supporting survivors of developmental abuse.",
    specialties: ["Somatic Experiencing", "Developmental Trauma", "Attachment Repair"],
  },
  {
    slug: "priya-patel",
    name: "Dr. Priya Patel, UKCP",
    title: "Relational Psychotherapist & Group Facilitator",
    image: "/priya_patel.jpg",
    credentials: ["UKCP Registered", "PhD in Psychotherapy", "Group Analysis Diploma"],
    shortBio:
      "Priya designs and facilitates group therapeutic programmes, helping survivors break isolation and rebuild community trust.",
    bio: "Priya specializes in the social and systemic dimensions of abuse. She designs and facilitates our group therapeutic programs, helping survivors break isolation and build collective resilience. Her relational approach focuses on interpersonal safety, boundaries, and rebuilding community trust.",
    specialties: ["Group Facilitation", "Systemic Trauma", "Interpersonal Relationships"],
  },
];

export function getClinicianBySlug(slug: string): Clinician | undefined {
  return clinicians.find((c) => c.slug === slug);
}
