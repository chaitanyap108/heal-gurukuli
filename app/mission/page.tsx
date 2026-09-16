import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import MissionPageClient from "./MissionPageClient";

export const metadata: Metadata = {
  title: "Our Mission — Heal Gurukuli",
  description:
    "The clinical framework underpinning Heal Gurukuli — bridging evidence-based psychological treatment with an understanding of unique cultural and systemic traumas.",
};

export default async function MissionPage() {
  const result = await client.queries.mission({
    relativePath: "mission.json",
  });

  return (
    <MissionPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
