import { defineMcp } from "@lovable.dev/mcp-js";
import companyInfoTool from "./tools/company-info";
import listServicesTool from "./tools/list-services";
import contactTool from "./tools/contact-p101";

export default defineMcp({
  name: "p101-mcp",
  title: "P101 Limited MCP",
  version: "0.1.0",
  instructions:
    "Tools for exploring P101 Limited — an AI product and consulting company. Use `get_company_info` for an overview, `list_services` to inspect consulting disciplines and custom-software capabilities, and `get_contact_details` for offices and booking a discovery call.",
  tools: [companyInfoTool, listServicesTool, contactTool],
});
