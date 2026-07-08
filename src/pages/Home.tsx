import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Eye,
  LineChart,
  Code2,
} from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";
import { SEO } from "@/components/SEO";

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Agentic systems",
    body: "Multi-agent workflows that plan, research, act and produce reviewable outputs — grounded in your data, not a generic model.",
  },
  {
    icon: Layers,
    title: "Generative AI",
    body: "Retrieval-augmented, tool-using generative applications tuned to a domain — with citations, evaluation and human review baked in.",
  },
  {
    icon: Eye,
    title: "Computer vision",
    body: "Detection, OCR, scene understanding and visual QA — deployed on modest hardware where the work actually happens.",
  },
  {
    icon: LineChart,
    title: "Predictive AI",
    body: "Scoring, forecasting and anomaly detection — the unglamorous models that quietly move the P&L.",
  },
  {
    icon: Code2,
    title: "Custom solutions",
    body: "From POC and MVP to multi-location, multi-tenant enterprise systems — self-scaling, resource-lean and secure by design.",
  },
];

const PRINCIPLES = [
  {
    n: "01",
    t: "Resource-lean by design",
    d: "We optimise for smaller models, cheaper inference and honest latency — not the biggest API bill in the room.",
  },
  {
    n: "02",
    t: "Private inference, always",
    d: "Open-source models on our own controlled infrastructure. Your data doesn't train someone else's product.",
  },
  {
    n: "03",
    t: "Evidence over vibes",
    d: "Every output is sourced, timestamped and reviewable. If it can't be audited, it doesn't ship.",
  },
  {
    n: "04",
    t: "Products, not decks",
    d: "We build things that operate — DcernX and Xylor are proof — and bring the same rigour to client engagements.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="P101 Limited — Applied AI, private-inference infrastructure and custom software"
        description="P101 Limited builds production AI on our own private-inference stack. Parent of DcernX and Xylor, with a consulting arm delivering agentic, generative, computer vision and predictive AI — plus custom software from POC to multi-tenant enterprise."
        meta={[
          {
            property: "og:title",
            content: "P101 Limited — Applied AI, infrastructure and custom software",
          },
          {
            property: "og:description",
            content:
              "Products, private-inference infrastructure and consulting from the UK and USA. Parent of DcernX and Xylor.",
          },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "P101 Limited",
          url: "https://p101limited.com",
          email: "hudson@p101limited.com",
          foundingDate: "2025",
          address: [
            { "@type": "PostalAddress", addressLocality: "Milton Keynes", addressCountry: "GB" },
            {
              "@type": "PostalAddress",
              addressLocality: "Sheridan",
              addressRegion: "WY",
              addressCountry: "US",
            },
          ],
          identifier: "17063831",
          description:
            "Applied AI company building on private-inference infrastructure. Parent of DcernX and Xylor with a consulting arm delivering agentic, generative, computer vision and predictive AI, plus custom software from POC to enterprise.",
          brand: [
            { "@type": "Brand", name: "DcernX", url: "https://dcernx.com" },
            { "@type": "Brand", name: "Xylor" },
          ],
        }}
      />
      <Page>
        {/* HERO with depth */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 78% 20%, hsl(var(--foreground) / 0.06) 0%, transparent 60%), radial-gradient(45% 40% at 10% 80%, hsl(var(--foreground) / 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-5xl mx-auto px-6 pt-24 pb-20">
            <EyebrowLabel>Applied AI · Infrastructure · Products · Consulting</EyebrowLabel>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.02] max-w-4xl">
              Serious AI, built lean.
              <br />
              <span className="text-foreground/55">On our stack. On your terms.</span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-foreground/70 max-w-2xl leading-relaxed">
              We build AI that runs in production — and the custom software to scale it. Own
              infrastructure, open-source private inference, no lock-in. From first POC to
              multi-tenant enterprise. Through{" "}
              <a
                href="https://dcernx.com"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                DcernX
              </a>{" "}
              and{" "}
              <Link
                to="/ventures#xylor"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                Xylor
              </Link>
              , plus our consulting practice, we deliver agentic, generative, computer vision and
              predictive AI that actually ships.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/consulting"
                className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90 transition-opacity"
              >
                See consulting <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/ventures"
                className="h-11 px-6 inline-flex items-center text-sm border border-foreground/20 hover:border-foreground/60 transition-colors"
              >
                See our ventures
              </Link>
            </div>
          </div>
        </section>

        {/* PROOF BAR — concrete numbers */}
        <section className="border-t border-border/40 bg-foreground/[0.015]">
          <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
            <Metric v="~12 min" k="Deck to IC-ready memo (DcernX)" />
            <Metric v="1,500+" k="Checkpoints reviewed per deal" />
            <Metric v="2" k="Offices — UK & USA" />
            <Metric v="0" k="Third parties trained on your data" />
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.22em] text-foreground/50">
            <div>Private inference</div>
            <div className="h-1 w-1 rounded-full bg-foreground/25" />
            <div>Open-source models</div>
            <div className="h-1 w-1 rounded-full bg-foreground/25" />
            <div>Own infrastructure</div>
            <div className="h-1 w-1 rounded-full bg-foreground/25" />
            <div>Evidence-first outputs</div>
            <div className="h-1 w-1 rounded-full bg-foreground/25" />
            <div>GDPR by design</div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <EyebrowLabel>Ventures</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
              Two products. One operating philosophy.
            </h2>
            <div className="grid md:grid-cols-2 gap-px bg-border/40">
              <VentureCard
                tag="Investor operating layer"
                name="DcernX"
                body="AI due diligence, deal flow and IC-ready memos for VCs, family offices, PE, accelerators and angels. Twenty analyst hours in twelve minutes — fully evidenced."
                href="https://dcernx.com"
                external
              />
              <VentureCard
                tag="Embedded AI platform"
                name="Xylor"
                body="A highly configurable technology and embedded-AI platform for building line-of-business applications — the substrate underneath DcernX and every consulting engagement we run."
                href="/ventures#xylor"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <EyebrowLabel>Consulting capabilities</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-4">
              Four AI disciplines.{" "}
              <span className="text-foreground/55">Plus the software around them.</span>
            </h2>
            <p className="text-sm text-foreground/65 max-w-2xl mb-10">
              Highly scalable, resource-lean outcomes delivered end-to-end — from problem framing to
              production, on our own infrastructure stack.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
              {CAPABILITIES.slice(0, 4).map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="bg-background p-6">
                    <Icon className="h-4 w-4 text-foreground/60 mb-4" />
                    <div className="text-sm font-medium mb-2">{c.title}</div>
                    <div className="text-xs text-foreground/65 leading-relaxed">{c.body}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-px bg-border/40">
              <div className="bg-background p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center gap-3 md:min-w-[220px]">
                  <Code2 className="h-4 w-4 text-foreground/60" />
                  <div className="text-sm font-medium">Custom solutions</div>
                </div>
                <div className="text-xs text-foreground/65 leading-relaxed flex-1">
                  {CAPABILITIES[4].body} From proof of concept and MVP through to multi-tenant
                  enterprise deployments — the systems the models live inside.
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/consulting"
                className="text-xs text-foreground/70 hover:text-foreground inline-flex items-center gap-1 border-b border-foreground/20 hover:border-foreground pb-0.5"
              >
                How we engage <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <EyebrowLabel>Operating principles</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
              How we build, in four sentences.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
              {PRINCIPLES.map((p) => (
                <div key={p.n} className="bg-background p-6">
                  <div className="text-[10px] text-foreground/40 tabular-nums mb-2">{p.n}</div>
                  <div className="text-sm font-medium mb-1">{p.t}</div>
                  <div className="text-xs text-foreground/60 leading-relaxed">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
            <div>
              <EyebrowLabel>Our stack</EyebrowLabel>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                We own the infrastructure the models run on.
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed">
                P101 operates a private inference stack built around open-source foundation models,
                vector and graph stores, orchestration and observability. Everything we deliver —
                DcernX, Xylor and every consulting outcome — runs on it. That's how we keep costs
                honest, latency low, and your data yours.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-border/40 self-start">
              <StackItem icon={Cpu} label="Private inference" />
              <StackItem icon={ShieldCheck} label="Controlled environment" />
              <StackItem icon={Layers} label="Open-source models" />
              <StackItem icon={Sparkles} label="Agent orchestration" />
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <EyebrowLabel>Work with P101</EyebrowLabel>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Have a problem worth solving?
            </h2>
            <p className="text-sm text-foreground/65 max-w-xl mx-auto mb-10">
              Whether it's a product to build, a workflow to automate or an AI system that actually
              needs to hold up in production — start a conversation.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90 transition-opacity"
              >
                Get in touch <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/about"
                className="h-11 px-6 inline-flex items-center text-sm border border-foreground/20 hover:border-foreground/60 transition-colors"
              >
                About P101
              </Link>
            </div>
          </div>
        </section>
      </Page>
    </>
  );
}

function VentureCard({
  tag,
  name,
  body,
  href,
  external,
}: {
  tag: string;
  name: string;
  body: string;
  href: string;
  external?: boolean;
}) {
  const inner = (
    <div className="bg-background p-8 group h-full hover:bg-foreground/[0.03] transition-colors">
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-4">{tag}</div>
      <div className="text-3xl font-light tracking-tight mb-4">{name}</div>
      <p className="text-sm text-foreground/70 leading-relaxed mb-6">{body}</p>
      <div className="inline-flex items-center gap-1 text-xs text-foreground/60 group-hover:text-foreground transition-colors">
        {external ? "Visit site" : "Learn more"} <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link to={href}>{inner}</Link>
  );
}

function StackItem({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="bg-background p-5 flex items-center gap-3">
      <Icon className="h-4 w-4 text-foreground/60" />
      <div className="text-xs">{label}</div>
    </div>
  );
}

function Metric({ v, k }: { v: string; k: string }) {
  return (
    <div className="bg-background p-5">
      <div className="text-2xl md:text-3xl font-light tracking-tight tabular-nums">{v}</div>
      <div className="text-[11px] text-foreground/55 mt-1 leading-relaxed">{k}</div>
    </div>
  );
}
