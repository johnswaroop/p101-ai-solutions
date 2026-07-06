import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — P101 Limited" },
      {
        name: "description",
        content:
          "P101 Limited is a UK applied-AI company. We own DcernX and Xylor and run a consulting arm delivering resource-lean AI systems on our own private-inference stack.",
      },
      { property: "og:title", content: "About — P101 Limited" },
      {
        property: "og:description",
        content:
          "A UK applied-AI company building products and delivering client outcomes on our own private-inference stack.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Page>
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <EyebrowLabel>About P101</EyebrowLabel>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
          A small UK company doing serious AI work.
        </h1>
        <div className="mt-10 space-y-6 text-base text-foreground/75 leading-relaxed">
          <p>
            P101 Limited is an applied-AI company registered in England &amp; Wales (company no. 17063831) and based in London. We build software that operates — not proofs of concept — and we deliver it on our own private-inference infrastructure.
          </p>
          <p>
            We own two products.{" "}
            <a
              href="https://dcernx.com"
              className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
            >
              DcernX
            </a>{" "}
            is the AI operating layer for private-market investors. <Link to="/ventures" hash="xylor" className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground">Xylor</Link> is the configurable embedded-AI platform underneath it — and behind every consulting engagement we run.
          </p>
          <p>
            Our consulting arm develops highly scalable, resource-lean AI outcomes across agentic, generative, computer vision and primary predictive AI. We work with teams who need AI to be a system, not a slide.
          </p>
          <p>
            We take a small number of engagements at a time, chosen for fit. We build with open-source models on infrastructure we control. Your data doesn't train someone else's product.
          </p>
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-px bg-border/40">
          <Fact k="Founded" v="2025" />
          <Fact k="Registered" v="England & Wales · Co. no. 17063831" />
          <Fact k="Based" v="London, United Kingdom" />
          <Fact k="Products" v="DcernX · Xylor" />
          <Fact k="Consulting" v="Agentic · Generative · CV · Predictive" />
          <Fact k="Stack" v="Private inference · Open-source models · Own infrastructure" />
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">
            Want to talk?
          </h2>
          <Link
            to="/contact"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </Page>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-background p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-2">
        {k}
      </div>
      <div className="text-sm text-foreground/80">{v}</div>
    </div>
  );
}
