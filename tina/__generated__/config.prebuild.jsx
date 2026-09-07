// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";
var localGraphqlProxy = "/api/tina-graphql";
var config_default = defineConfig({
  branch,
  ...isLocal ? {} : {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || process.env.TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN
  },
  ...isLocal ? { contentApiUrlOverride: localGraphqlProxy } : {},
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
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
          { type: "string", name: "specialties", label: "Specialties", list: true }
        ]
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
          { type: "string", name: "shortBio", label: "Short Bio", ui: { component: "textarea" } }
        ]
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
                  { type: "string", name: "href", label: "Href" }
                ]
              },
              {
                type: "object",
                name: "secondaryCta",
                label: "Secondary CTA",
                fields: [
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "href", label: "Href" }
                ]
              }
            ]
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
              { type: "string", name: "ctaHref", label: "CTA Href" }
            ]
          }
        ]
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "whyWeExist",
            label: "Why We Exist",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } }
            ]
          }
        ]
      },
      {
        name: "therapy",
        label: "Therapy Page",
        path: "content/pages",
        match: { include: "therapy" },
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "stepsSection",
            label: "Steps Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "stepNumber", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "intakeTeaser",
            label: "Intake Teaser",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "string", name: "disclaimer", label: "Disclaimer", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "oneToOneTherapy",
            label: "One-to-One Therapy",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "bodyParagraphs", label: "Body Paragraphs", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "modalitiesSection",
            label: "Modalities Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "modalities",
                label: "Modalities",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "linkText", label: "Link Text" },
                  { type: "string", name: "linkHref", label: "Link Href" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "complaints",
            label: "Complaints",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "pdfLabel", label: "PDF Label" },
              { type: "string", name: "pdfHref", label: "PDF Href" }
            ]
          }
        ]
      },
      {
        name: "contribute",
        label: "Contribute Page",
        path: "content/pages",
        match: { include: "contribute" },
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "fundraisingGoal",
            label: "Fundraising Goal",
            fields: [
              { type: "number", name: "targetAmount", label: "Target Amount" },
              { type: "number", name: "raisedAmount", label: "Raised Amount" },
              { type: "string", name: "bannerText", label: "Banner Text", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "tiersSection",
            label: "Tiers Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "tiers",
                label: "Tiers",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "number", name: "amount", label: "Amount" },
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "features", label: "Features", list: true, ui: { component: "textarea" } },
                  { type: "string", name: "ctaLabel", label: "CTA Label" },
                  { type: "string", name: "ctaHref", label: "CTA Href" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "transparencyNote",
            label: "Transparency Note",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "text", label: "Text", ui: { component: "textarea" } }
            ]
          }
        ]
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
                  { type: "string", name: "ctaHref", label: "CTA Href" }
                ]
              }
            ]
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
                  { type: "string", name: "detail", label: "Detail" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "impact",
        label: "Impact Page",
        path: "content/pages",
        match: { include: "impact" },
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "metricsSection",
            label: "Metrics Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "subtext", label: "Subtext" },
                  { type: "string", name: "source", label: "Source" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "outcomesSection",
            label: "Outcomes Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "documentary",
            label: "Documentary",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "statusBadge", label: "Status Badge" }
            ]
          }
        ]
      },
      {
        name: "resources",
        label: "Resources Page",
        path: "content/pages",
        match: { include: "resources" },
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "categories",
            label: "Categories",
            list: true,
            fields: [
              { type: "string", name: "id", label: "ID" },
              { type: "string", name: "number", label: "Number" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "guides",
                label: "Guides",
                list: true,
                fields: [
                  { type: "string", name: "tag", label: "Tag" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "readTimeOrType", label: "Read Time or Type" },
                  { type: "string", name: "href", label: "Href" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "volunteer",
        label: "Volunteer Page",
        path: "content/pages",
        match: { include: "volunteer" },
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
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "rolesSection",
            label: "Roles Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "roles",
                label: "Roles",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "requirementText", label: "Requirement Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "safeguarding",
            label: "Safeguarding",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "otherWaysSection",
            label: "Other Ways Section",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "ways",
                label: "Ways",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "badgeText", label: "Badge Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "cpdPlacement",
            label: "CPD Placement",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "paragraphs", label: "Paragraphs", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "highlights",
                label: "Highlights",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "ctaText", label: "CTA Text" },
              { type: "string", name: "ctaHref", label: "CTA Href" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
