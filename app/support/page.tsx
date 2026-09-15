import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "Therapy — Heal Gurukuli",
  description:
    "Specialised, trauma-informed psychotherapy for adult gurukuli survivors. Complete the intake form to begin — the clinical team will reply to arrange next steps.",
};

export default async function SupportPage() {
  const result = await client.queries.therapy({
    relativePath: "therapy.json",
  });

  return (
    <SupportPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
