import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const DISCIPLINES = [
  {
    id: "agentic",
    title: "Agentic AI",
    description:
      "Multi-agent systems that plan, research, use tools and produce reviewable outputs with orchestration, evaluation and guardrails.",
    examples: ["Analyst workflows", "Back-office automation", "Research pipelines"],
  },
  {
    id: "generative",
    title: "Generative AI",
    description:
      "Retrieval-augmented applications with citations, evaluation harnesses and human-in-the-loop review.",
    examples: ["Domain copilots", "Document generation", "Knowledge assistants"],
  },
  {
    id: "vision",
    title: "Computer vision",
    description:
      "Detection, OCR, scene understanding and visual QA deployed on modest hardware, including at the edge.",
    examples: ["Quality inspection", "Document capture", "Physical-world monitoring"],
  },
  {
    id: "predictive",
    title: "Predictive AI",
    description:
      "Classical and modern ML for scoring, forecasting, propensity and anomaly detection.",
    examples: ["Risk scoring", "Demand forecasting", "Anomaly detection"],
  },
  {
    id: "custom-software",
    title: "Custom software",
    description:
      "Custom solutions from POC and MVP through to multi-location, multi-tenant enterprise platforms.",
    examples: [
      "Enterprise platforms",
      "Multi-tenant SaaS",
      "Workflow systems",
      "Edge & on-prem",
      "Integrations & APIs",
    ],
  },
];

export default defineTool({
  name: "list_services",
  title: "List P101 services",
  description:
    "List P101's consulting disciplines and custom-software capabilities. Optionally filter by discipline id.",
  inputSchema: {
    discipline: z
      .enum(["agentic", "generative", "vision", "predictive", "custom-software"])
      .optional()
      .describe("Optional discipline id to filter by."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ discipline }) => {
    const items = discipline
      ? DISCIPLINES.filter((d) => d.id === discipline)
      : DISCIPLINES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
    };
  },
});
