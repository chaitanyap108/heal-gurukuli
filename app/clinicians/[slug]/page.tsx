import type { Metadata } from "next";
import { notFound } from "next/navigation";
import client from "@/tina/__generated__/client";
import ClinicianClient from "./ClinicianClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const connection = await client.queries.cliniciansConnection();
  const edges = connection.data.cliniciansConnection.edges ?? [];

  return edges
    .map((edge) => edge?.node?._sys.filename)
    .filter((filename): filename is string => Boolean(filename))
    .map((filename) => ({ slug: filename }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const result = await client.queries.clinicians({
      relativePath: `${slug}.json`,
    });
    const clinician = result.data.clinicians;

    return {
      title: `${clinician.name} — Heal Gurukuli`,
      description: clinician.shortBio ?? undefined,
    };
  } catch {
    return { title: "Clinician — Heal Gurukuli" };
  }
}

export default async function ClinicianProfilePage({ params }: PageProps) {
  const { slug } = await params;

  let result;
  try {
    result = await client.queries.clinicians({
      relativePath: `${slug}.json`,
    });
  } catch {
    notFound();
  }

  if (!result.data.clinicians) {
    notFound();
  }

  return (
    <ClinicianClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
