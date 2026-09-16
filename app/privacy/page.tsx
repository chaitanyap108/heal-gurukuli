import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy — Heal Gurukuli",
  description:
    "How Heal Gurukuli collects, stores, and protects personal and clinical information under GDPR and professional ethical standards.",
};

export default async function PrivacyPage() {
  const result = await client.queries.privacy({
    relativePath: "privacy.json",
  });

  return (
    <PrivacyClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
