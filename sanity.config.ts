import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "u6sew76k",
  dataset: "production",
  title: "My Portfolio Website",

  apiVersion: "2023-12-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
