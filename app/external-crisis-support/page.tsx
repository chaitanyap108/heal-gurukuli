import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import CrisisSupportClient from "./CrisisSupportClient";

export const metadata: Metadata = {
  title: "External Crisis Support — Heal Gurukuli",
  description:
    "A global registry of crisis hotlines, mental health helplines, and support services for immediate assistance.",
};

export default async function ExternalCrisisSupportPage() {
  const result = await client.queries.crisisSupport({
    relativePath: "crisis-support.json",
  });

  return (
    <CrisisSupportClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
