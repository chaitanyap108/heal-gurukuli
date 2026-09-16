import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata: Metadata = {
  title: "Therapeutic Resources & Self-Guided Support — Heal Gurukuli",
  description:
    "Accessible, trauma-informed tools, grounding techniques, and curated readings to support your self-guided healing journey.",
};

export default async function ResourcesPage() {
  const result = await client.queries.resources({
    relativePath: "resources.json",
  });

  return (
    <ResourcesPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
