import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import ImpactPageClient from "./ImpactPageClient";

export const metadata: Metadata = {
  title: "See the Impact — Heal Gurukuli",
  description:
    "Transparent clinical outcomes data showing the measurable healing impact of community donations on gurukuli survivors.",
};

export default async function ImpactPage() {
  const result = await client.queries.impact({
    relativePath: "impact.json",
  });

  return (
    <ImpactPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
