import client from "@/tina/__generated__/client";
import HomePageClient from "./HomePageClient";

export default async function Home() {
  const result = await client.queries.home({
    relativePath: "home.json",
  });

  return (
    <HomePageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
