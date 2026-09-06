import trusteeOne from "@/content/trustees/trustee-one.json";
import trusteeTwo from "@/content/trustees/trustee-two.json";
import trusteeThree from "@/content/trustees/trustee-three.json";
import trusteeFour from "@/content/trustees/trustee-four.json";

export interface Trustee {
  slug: string;
  name: string;
  role: string;
  shortBio: string;
}

export const trustees: Trustee[] = [
  trusteeOne,
  trusteeTwo,
  trusteeThree,
  trusteeFour,
];

export function getTrusteeBySlug(slug: string): Trustee | undefined {
  return trustees.find((t) => t.slug === slug);
}
