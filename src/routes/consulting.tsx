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
    title: "Predictive AI",
    body: "Classical and modern ML for scoring, forecasting, propensity and anomaly detection — the unglamorous models that quietly move the P&L.",
    examples: ["Risk scoring", "Demand forecasting", "Anomaly detection"],
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
          We deliver AI outcomes and custom software for teams that need working systems, not slideware — from proof of concept and MVP through to multi-location, multi-tenant enterprise deployments. Everything ships end-to-end on our own infrastructure and open-source private inference — the same stack that runs DcernX.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:hudson@p101limited.com?subject=Consulting%20discovery%20call"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Book a discovery call <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#how-we-engage"
            className="h-11 px-6 inline-flex items-center text-sm border border-foreground/20 hover:border-foreground/60 transition-colors"
          >
            How we engage
          </a>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <EyebrowLabel>What we build</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
            Four AI disciplines.{" "}
            <span className="text-foreground/55">One delivery team.</span>
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

          {/* Custom solutions — the wrapper around the AI */}
          <div className="mt-px bg-border/40">
            <div className="bg-background p-8 md:p-10 grid md:grid-cols-5 gap-8 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="h-5 w-5 text-foreground/60" />
                  <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                    And the software around it
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-light tracking-tight">
                  Custom solutions.{" "}
                  <span className="text-foreground/55">POC to enterprise.</span>
                </div>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                  A model on its own isn't a product. We build the systems the models live inside — from proof of concept and MVP through to multi-location, multi-tenant enterprise platforms that are self-scaling, resource-lean and secure by design.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Enterprise platforms", "Multi-tenant SaaS", "Workflow systems", "Edge & on-prem", "Integrations & APIs"].map((e) => (
                    <span
                      key={e}
                      className="text-[11px] px-2 py-1 border border-border/60 text-foreground/70"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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

      {/* WHO WE WORK WITH */}
      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <EyebrowLabel>Who we work with</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
            Operators with a real problem.{" "}
            <span className="text-foreground/55">Not experiments in search of a use case.</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
            {[
              { k: "Scale-ups & mid-market", v: "Teams past product-market fit that need AI or a platform to unlock the next order of magnitude." },
              { k: "Enterprises with constraints", v: "Regulated, data-sensitive, or on-prem environments where private inference isn't optional." },
              { k: "Funds & investors", v: "Private-market teams standardising diligence and portfolio operations — often via DcernX." },
              { k: "Founders with a workflow-heavy product", v: "AI-native products that would take 18 months to build from scratch — and 3 on Xylor." },
              { k: "Operations & back-office leaders", v: "Real automation of high-volume, judgement-heavy work with auditability the compliance team accepts." },
              { k: "Not a fit", v: "Chatbot experiments, AI-for-AI's-sake, and anyone allergic to evidence and evaluation." },
            ].map((s) => (
              <div key={s.k} className="bg-background p-6">
                <div className="text-sm font-medium mb-2">{s.k}</div>
                <div className="text-xs text-foreground/65 leading-relaxed">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section id="how-we-engage" className="border-t border-border/40 scroll-mt-16">
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
            We run a small number of engagements at a time — chosen for fit, not for logo count. A 30-minute call is enough to tell if we're right for each other.
          </p>
          <a
            href="mailto:hudson@p101limited.com?subject=Consulting%20discovery%20call"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Book a discovery call <ArrowRight className="h-3.5 w-3.5" />
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
