import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  async rewrites() {
    const rules: { source: string; destination: string }[] = [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
      {
        source: "/admin/",
        destination: "/admin/index.html",
      },
    ];

    if (isDev) {
      rules.unshift({
        source: "/api/tina-graphql",
        destination: "http://localhost:4001/graphql",
      });
    }

    return rules;
  },
};

export default nextConfig;
