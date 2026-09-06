import caitanyaLila from "@/content/clinicians/caitanya-lila.json";
import liamSterling from "@/content/clinicians/liam-sterling.json";
import sarahJenkins from "@/content/clinicians/sarah-jenkins.json";
import priyaPatel from "@/content/clinicians/priya-patel.json";

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
  caitanyaLila,
  liamSterling,
  sarahJenkins,
  priyaPatel,
];

export function getClinicianBySlug(slug: string): Clinician | undefined {
  return clinicians.find((c) => c.slug === slug);
}
