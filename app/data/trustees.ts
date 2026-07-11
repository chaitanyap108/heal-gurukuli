export interface Trustee {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
}

export const trustees: Trustee[] = [
  {
    slug: "trustee-one",
    name: "Trustee One",
    role: "Chair of the Board",
    shortBio:
      "Placeholder profile. Full biography, governance experience, and statement of purpose will appear here.",
  },
  {
    slug: "trustee-two",
    name: "Trustee Two",
    role: "Trustee",
    shortBio:
      "Placeholder profile. Full biography, governance experience, and statement of purpose will appear here.",
  },
  {
    slug: "trustee-three",
    name: "Trustee Three",
    role: "Trustee",
    shortBio:
      "Placeholder profile. Full biography, governance experience, and statement of purpose will appear here.",
  },
  {
    slug: "trustee-four",
    name: "Trustee Four",
    role: "Trustee",
    shortBio:
      "Placeholder profile. Full biography, governance experience, and statement of purpose will appear here.",
  },
];

export function getTrusteeBySlug(slug: string): Trustee | undefined {
  return trustees.find((t) => t.slug === slug);
}
