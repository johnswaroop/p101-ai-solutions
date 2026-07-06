import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";

export const Route = createFileRoute("/ventures")({
  head: () => ({
    meta: [
      { title: "Ventures — DcernX & Xylor | P101 Limited" },
      {
        name: "description",
        content:
          "P101's two products: DcernX, the AI operating layer for private capital, and Xylor, our configurable embedded-AI platform for line-of-business applications.",
      },
      { property: "og:title", content: "Ventures — DcernX & Xylor | P101 Limited" },
      {
        property: "og:description",
        content: "DcernX and Xylor — two products from P101 Limited.",
      },
    ],
  }),
  component: VenturesPage,
});

function VenturesPage() {
  return (
    <Page>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <EyebrowLabel>Ventures</EyebrowLabel>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05] max-w-4xl">
          Two products, built on the same private-inference stack.
        </h1>
        <p className="mt-6 text-base text-foreground/70 max-w-2xl leading-relaxed">
          P101 ships operating software, not demos. DcernX is our vertical product for private-market investors. Xylor is the horizontal platform underneath it — and behind every client engagement we run.
        </p>
      </section>

      {/* DCERNX */}
      <section id="dcernx" className="border-t border-border/40 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <EyebrowLabel>Product 01</EyebrowLabel>
            <div className="text-5xl font-light tracking-tight mb-4">DcernX</div>
            <div className="text-sm text-foreground/60 mb-6">
              Investor operating layer
            </div>
            <a
              href="https://dcernx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-5 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
            >
              Visit dcernx.com <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="text-base text-foreground/75 leading-relaxed mb-6">
              AI due diligence, deal flow management and IC-ready memos for VCs, family offices, PE, accelerators, venture studios, angels and startup programs. Structured intake, sixteen specialist agents, ~1,500 checkpoints per deal — a defensible record of every decision.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "IC-ready brief in ~12 minutes from deck to memo",
                "12 research tracks per deal, every claim cited",
                "Portfolio memory that stays searchable across years",
                "Runs on P101's private inference — data never trains third-party models",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-foreground/80">
                  <Check className="h-4 w-4 text-foreground/50 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* XYLOR */}
      <section id="xylor" className="border-t border-border/40 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <EyebrowLabel>Product 02</EyebrowLabel>
            <div className="text-5xl font-light tracking-tight mb-4">Xylor</div>
            <div className="text-sm text-foreground/60 mb-6">
              Configurable embedded-AI platform
            </div>
            <a
              href="mailto:hudson@p101limited.com?subject=Xylor%20enquiry"
              className="h-10 px-5 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
            >
              Request access <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="text-base text-foreground/75 leading-relaxed mb-6">
              Xylor is P101's technology and embedded-AI platform: a highly configurable substrate for building business applications with agents, retrieval, workflows, forms, review queues and audit trails as first-class primitives. It's what DcernX is built on — and what our consulting team ships client outcomes on.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Configurable schema, forms, workflows and review gates",
                "Native agents, retrieval and evaluation — not bolted on",
                "Deploys against private-inference open-source models",
                "One platform for internal tools, customer products and back-office automation",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-foreground/80">
                  <Check className="h-4 w-4 text-foreground/50 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <EyebrowLabel>Build with us</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
            Have a product idea Xylor could carry?
          </h2>
          <p className="text-sm text-foreground/65 max-w-xl mx-auto mb-8">
            Most of our client engagements ship on Xylor. If you have a workflow-heavy, AI-native product to build, we'd rather start there than from scratch.
          </p>
          <a
            href="mailto:hudson@p101limited.com"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Talk to Hudson <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </Page>
  );
}
