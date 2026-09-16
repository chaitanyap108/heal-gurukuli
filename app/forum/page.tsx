import type { Metadata } from "next";
import client from "@/tina/__generated__/client";
import ForumClient from "./ForumClient";

export const metadata: Metadata = {
  title: "Community Forum — Heal Gurukuli",
  description:
    "A secure, confidential, and peer-guided therapeutic discussion forum for adult gurukuli survivors.",
};

export default async function ForumPage() {
  const result = await client.queries.forum({
    relativePath: "forum.json",
  });

  return (
    <ForumClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
