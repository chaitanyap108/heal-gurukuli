import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import MediaClient from "./MediaClient";

export const metadata: Metadata = {
  title: "Media & Press Inquiries — Heal Gurukuli",
  description:
    "Press contacts and resources for ethical reporting on gurukuli institutional abuse and trauma recovery.",
};

export default async function MediaPage() {
  const result = await client.queries.media({
    relativePath: "media.json",
  });

  return (
    <MediaClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
