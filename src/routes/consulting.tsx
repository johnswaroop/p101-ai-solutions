import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Layers, Eye, LineChart, Code2 } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";

export const Route = createFileRoute("/consulting")({
  head: () => ({
    meta: [
      { title: "AI Consulting — P101 Limited" },
      {
        name: "description",
        content:
          "P101's consulting arm delivers agentic, generative, computer vision and predictive AI systems, plus custom software from POC to enterprise — highly scalable, resource-lean and secure, on our own infrastructure and open-source private inference models.",
      },
      { property: "og:title", content: "AI Consulting — P101 Limited" },
      {
        property: "og:description",
        content:
          "Agentic, generative, computer vision and predictive AI — plus custom solutions from MVP to multi-tenant enterprise — delivered on our own private-inference stack.",
      },
    ],
  }),
  component: ConsultingPage,
});

const DISCIPLINES = [
  {
    icon: Sparkles,
    title: "Agentic AI",
    body: "Multi-agent systems that plan, research, use tools and produce reviewable outputs — with orchestration, evaluation and guardrails we've hardened on our own products.",
    examples: ["Analyst workflows", "Back-office automation", "Research pipelines"],
  },
  {
    icon: Layers,
    title: "Generative AI",
    body: "Retrieval-augmented applications with citations, evaluation harnesses and human-in-the-loop review. Not chatbots — production systems.",
    examples: ["Domain copilots", "Document generation", "Knowledge assistants"],
  },
  {
    icon: Eye,
    title: "Computer vision",
    body: "Detection, OCR, scene understanding and visual QA deployed on modest hardware — including at the edge where cloud latency isn't an option.",
    examples: ["Quality inspection", "Document capture", "Physical-world monitoring"],
  },
  {
    icon: LineChart,
    title: "Primary predictive AI",
    body: "Classical and modern ML for scoring, forecasting, propensity and anomaly detection. The unglamorous models that quietly move the P&L.",
    examples: ["Risk scoring", "Demand forecasting", "Anomaly detection"],
  },
  {
    icon: Code2,
    title: "Custom solutions",
    body: "From POC and MVP to multi-location, multi-tenant enterprise systems — self-scaling, resource-lean and secure by design. We build the platform, not just the model.",
    examples: ["Enterprise platforms", "Multi-tenant SaaS", "Workflow systems"],
  },
];

const ENGAGEMENT = [
  {
    n: "01",
    t: "Discovery",
    d: "One or two working sessions to frame the problem, the data, the constraints and what 'shipped' actually looks like.",
  },
  {
    n: "02",
    t: "Prototype",
    d: "A working system on Xylor and our private-inference stack within weeks — not a slide deck, not a POC that dies in a demo.",
  },
  {
    n: "03",
    t: "Harden",
    d: "Evaluation, observability, cost and latency tuning, human-review workflows, audit trails. The parts most vendors skip.",
  },
  {
    n: "04",
    t: "Operate",
    d: "Deploy on your infrastructure or ours. Retained support, retraining and iteration as the problem evolves.",
  },
];

function ConsultingPage() {
  return (
    <Page>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16">
        <EyebrowLabel>Consulting</EyebrowLabel>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05] max-w-4xl">
          AI systems that hold up in production —{" "}
          <span className="text-foreground/55">not just in the demo.</span>
        </h1>
        <p className="mt-6 text-base text-foreground/70 max-w-2xl leading-relaxed">
  P101's consulting arm develops highly scalable, resource-lean AI outcomes and custom software solutions for teams that need systems that actually operate. From POC and MVP to multi-location, multi-tenant enterprise deployments — self-scaling, resource-lean and secure. We deliver end-to-end on our own infrastructure stack and open-source private inference models — the same stack that runs DcernX.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:hudson@p101limited.com?subject=Consulting%20enquiry"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <EyebrowLabel>What we build</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
            Four disciplines. One delivery team.
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-border/40">
            {DISCIPLINES.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-background p-7">
                  <Icon className="h-5 w-5 text-foreground/60 mb-4" />
                  <div className="text-lg font-medium mb-2">{d.title}</div>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">{d.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.examples.map((e) => (
                      <span
                        key={e}
                        className="text-[11px] px-2 py-1 border border-border/60 text-foreground/70"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-px bg-border/40">
          <Stat
            k="Resource-lean"
            v="We tune for smaller models and honest inference costs — not the biggest bill in the room."
          />
          <Stat
            k="Private by default"
            v="Open-source models on our own infrastructure. Your data never trains a third-party product."
          />
          <Stat
            k="Product DNA"
            v="We run our own software. The same rigour that ships DcernX shows up on your engagement."
          />
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <EyebrowLabel>How we engage</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
            Four phases. No slide-ware.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
            {ENGAGEMENT.map((s) => (
              <div key={s.n} className="bg-background p-6">
                <div className="text-[10px] text-foreground/40 tabular-nums mb-2">{s.n}</div>
                <div className="text-sm font-medium mb-1">{s.t}</div>
                <div className="text-xs text-foreground/60 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/40">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <EyebrowLabel>Engage P101</EyebrowLabel>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Bring us the problem.
          </h2>
          <p className="text-sm text-foreground/65 max-w-xl mx-auto mb-10">
            We take on a small number of client engagements at a time — chosen for fit, not for logo count.
          </p>
          <a
            href="mailto:hudson@p101limited.com?subject=Consulting%20enquiry"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Email hudson@p101limited.com <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </Page>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-background p-6">
      <div className="text-sm font-medium mb-2">{k}</div>
      <div className="text-xs text-foreground/65 leading-relaxed">{v}</div>
    </div>
  );
}
