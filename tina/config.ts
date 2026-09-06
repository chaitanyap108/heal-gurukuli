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
      {
        name: "home",
        label: "Home Page",
        path: "content/pages",
        match: { include: "home" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "image", name: "logo", label: "Logo" },
              { type: "string", name: "logoAlt", label: "Logo Alt Text" },
              {
                type: "object",
                name: "primaryCta",
                label: "Primary CTA",
                fields: [
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "href", label: "Href" },
                ],
              },
              {
                type: "object",
                name: "secondaryCta",
                label: "Secondary CTA",
                fields: [
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "href", label: "Href" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "missionTeaser",
            label: "Mission Teaser",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaHref", label: "CTA Href" },
            ],
          },
        ],
      },
      {
        name: "mission",
        label: "Mission Page",
        path: "content/pages",
        match: { include: "mission" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "whyWeExist",
            label: "Why We Exist",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
            ],
          },
        ],
      },
      {
        name: "shared",
        label: "Shared Components",
        path: "content/shared",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            name: "threePillars",
            label: "Three Pillars",
            type: "object",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              {
                name: "pillars",
                label: "Pillars",
                type: "object",
                list: true,
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                  { type: "string", name: "ctaText", label: "CTA Text" },
                  { type: "string", name: "ctaHref", label: "CTA Href" },
                ],
              },
            ],
          },
          {
            name: "testimonials",
            label: "Testimonials",
            type: "object",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "note", label: "Note" },
              {
                name: "quotes",
                label: "Quotes",
                type: "object",
                list: true,
                fields: [
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "attribution", label: "Attribution" },
                  { type: "string", name: "detail", label: "Detail" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
