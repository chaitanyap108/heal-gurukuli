import { defineConfig } from "tinacms";
export default defineConfig({
  branch: "test-sync",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: { collections: [{ name: "post", label: "Posts", path: "content/posts", fields: [{ type: "string", name: "title", label: "Title" }] }] }
});
