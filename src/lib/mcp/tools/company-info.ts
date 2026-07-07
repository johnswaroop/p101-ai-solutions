import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_info",
  title: "Get company info",
  description:
    "Return an overview of P101 Limited: what the company does, its ventures (DcernX, Xylor), consulting practice, and office locations.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            name: "P101 Limited",
            summary:
              "P101 builds AI that runs in production and the custom software to scale it. Own infrastructure, open-source private inference, no lock-in.",
            focus: [
              "Agentic AI",
              "Generative AI",
              "Computer vision",
              "Predictive AI",
              "Custom software (POC to multi-tenant enterprise)",
            ],
            ventures: [
              {
                name: "DcernX",
                description:
                  "AI platform for private-market diligence and portfolio operations.",
              },
              {
                name: "Xylor",
                description:
                  "Private-inference stack that powers P101 products and client deployments.",
              },
            ],
            consulting:
              "Discovery → Prototype → Harden → Operate. Agentic, generative, computer vision and predictive AI, plus custom software from POC to enterprise.",
            offices: [
              { entity: "P101 LLC", city: "Sheridan", region: "WY", country: "USA" },
              { entity: "P101 Limited", city: "Milton Keynes", country: "UK" },
            ],
            contact: "hudson@p101limited.com",
          },
          null,
          2,
        ),
      },
    ],
  }),
});
