import type { Metadata } from "next";
import { notFound } from "next/navigation";
import client from "@/tina/__generated__/client";
import TrusteeClient from "./TrusteeClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const connection = await client.queries.trusteesConnection();
  const edges = connection.data.trusteesConnection.edges ?? [];

  return edges
    .map((edge) => edge?.node?._sys.filename)
    .filter((filename): filename is string => Boolean(filename))
    .map((filename) => ({ slug: filename }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await client.queries.trustees({
      relativePath: `${slug}.json`,
    });
    const trustee = result.data.trustees;

    return {
      title: `${trustee.name} — Board of Trustees — Heal Gurukuli`,
      description: trustee.shortBio ?? undefined,
    };
  } catch {
    return { title: "Trustee — Heal Gurukuli" };
  }
}

export default async function TrusteeProfilePage({ params }: PageProps) {
  const { slug } = await params;

  let result;
  try {
    result = await client.queries.trustees({
      relativePath: `${slug}.json`,
    });
  } catch {
    notFound();
  }

  if (!result.data.trustees) {
    notFound();
  }

  return (
    <TrusteeClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
