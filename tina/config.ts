import { defineConfig } from "tinacms";

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const isLocal =
  process.env.NODE_ENV === "development" &&
  process.env.TINA_PUBLIC_IS_LOCAL === "true";

const localGraphqlProxy = "/api/tina-graphql";

export default defineConfig({
  branch,
  ...(isLocal
    ? {}
    : {
        clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID,
        token: process.env.TINA_TOKEN,
      }),
  ...(isLocal ? { contentApiUrlOverride: localGraphqlProxy } : {}),
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "clinicians",
        label: "Clinicians",
        path: "content/clinicians",
        format: "json",
        fields: [
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "title", label: "Title" },
          { type: "image", name: "image", label: "Profile Image" },
          { type: "string", name: "credentials", label: "Credentials", list: true },
          { type: "string", name: "shortBio", label: "Short Bio", ui: { component: "textarea" } },
          { type: "string", name: "bio", label: "Full Bio", ui: { component: "textarea" } },
          { type: "string", name: "specialties", label: "Specialties", list: true },
        ],
      },
      {
        name: "trustees",
        label: "Trustees",
        path: "content/trustees",
        format: "json",
        fields: [
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "name", label: "Name", required: true },
          { type: "string", name: "role", label: "Role" },
          { type: "string", name: "shortBio", label: "Short Bio", ui: { component: "textarea" } },
        ],
      },
    ],
  },
});
