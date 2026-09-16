import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import ContributePageClient from "./ContributePageClient";

export const metadata: Metadata = {
  title: "Support the Sanctuary — Heal Gurukuli",
  description:
    "Fund trauma-informed clinical care for adult gurukuli survivors. Sponsor a therapy session, sponsor a full course of therapy, or make an open contribution.",
};

export default async function ContributePage() {
  const result = await client.queries.contribute({
    relativePath: "contribute.json",
  });
  const testimonials = await client.queries.shared({
    relativePath: "testimonials.json",
  });

  return (
    <ContributePageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
      testimonials={{
        query: testimonials.query,
        variables: testimonials.variables,
        data: testimonials.data,
      }}
    />
  );
}
