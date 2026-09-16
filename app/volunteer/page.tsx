import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import VolunteerPageClient from "./VolunteerPageClient";

export const metadata: Metadata = {
  title: "Volunteer with Us — Heal Gurukuli",
  description:
    "Explore volunteer opportunities, support our sanctuary, and learn about our safe intake and background verification process.",
};

export default async function VolunteerPage() {
  const result = await client.queries.volunteer({
    relativePath: "volunteer.json",
  });

  return (
    <VolunteerPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
