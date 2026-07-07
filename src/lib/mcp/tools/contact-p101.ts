import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_contact_details",
  title: "Get P101 contact details",
  description:
    "Return P101's contact email and office addresses (USA and UK), plus a mailto link for booking a discovery call.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            email: "hudson@p101limited.com",
            bookDiscoveryCall:
              "mailto:hudson@p101limited.com?subject=Consulting%20discovery%20call",
            offices: [
              {
                entity: "P101 LLC",
                city: "Sheridan",
                region: "WY",
                country: "USA",
              },
              {
                entity: "P101 Limited",
                city: "Milton Keynes",
                country: "UK",
              },
            ],
          },
          null,
          2,
        ),
      },
    ],
  }),
});
