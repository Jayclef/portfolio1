import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "u6sew76k",
  dataset: "production",
  // Add your token or leave it blank for public datasets
  token:
    "skVuO2lPhc0E41QMfL3qx3lsUCpG0vS1cw01Kr7TjHgykeFvN3XgJyIQXiCc0bpejrJLdqo6KghjxtvcHtR5rtj9nIjDIiCohwNl4sElorvrJK9rNtG8eqYIfPvoIXgyB58l80gRn1U41rI4Asgey8rxenV2ODkYPj9EalOqBk0CSMOI2X9j",
  useCdn: true, // Set this to true if you want to use the Content Delivery Network
});
