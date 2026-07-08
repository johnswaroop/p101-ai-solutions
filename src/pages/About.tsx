import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";
import { SEO } from "@/components/SEO";

const TEAM = [
  {
    initial: "C",
    name: "Christian Kumar",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/christiankumar/",
  },
  {
    initial: "H",
    name: "Hudson Paul",
    role: "Chief Operating Officer",
    linkedin: "https://www.linkedin.com/in/hudsonpaul1/",
  },
  {
    initial: "J",
    name: "John Swaroop",
    role: "Chief Technology Officer",
    linkedin: "https://www.linkedin.com/in/john-swaroop-4389961b7/",
  },
  {
    initial: "L",
    name: "Luke Anglin",
    role: "Chief Revenue Officer",
    linkedin: "https://www.linkedin.com/in/lukeanglin/",
  },
  {
    initial: "R",
    name: "Reuel Philip",
    role: "Product Specialist",
    linkedin: "https://www.linkedin.com/in/reuel-philip/",
  },
  {
    initial: "+",
    name: "Others",
    role: "Technology · Design · Data · Security · DevOps · Growth",
    linkedin: null as string | null,
  },
];

const absoluteLinkedInUrl = (url: string) => `https://${url.trim().replace(/^https?:\/\//, "")}`;

export default function About() {
  return (
    <>
      <SEO
        title="About — P101 Limited"
        description="P101 Limited is a UK applied-AI company. We own DcernX and Xylor and run a consulting arm delivering resource-lean AI systems on our own private-inference stack."
        meta={[
          { property: "og:title", content: "About — P101 Limited" },
          {
            property: "og:description",
            content:
              "A UK applied-AI company building products and delivering client outcomes on our own private-inference stack.",
          },
        ]}
      />
      <Page>
        <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
          <EyebrowLabel>About P101</EyebrowLabel>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
            Products that operate. Infrastructure we own.
            <br />
            <span className="text-foreground/55">
              AI outcomes from proof of concept to enterprise.
            </span>
          </h1>
          <div className="mt-10 space-y-6 text-base text-foreground/75 leading-relaxed">
            <p>
              We build software that operates — not proofs of concept — and deliver it on our own
              private-inference infrastructure.
            </p>
            <p>
              We own two products.{" "}
              <a
                href="https://dcernx.com"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                DcernX
              </a>{" "}
              is the AI operating layer for private-market investors.{" "}
              <Link
                to="/ventures#xylor"
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground"
              >
                Xylor
              </Link>{" "}
              is the configurable embedded-AI platform underneath it — and behind every consulting
              engagement we run.
            </p>
            <p>
              Our consulting arm develops highly scalable, resource-lean AI outcomes and custom
              software solutions across agentic, generative, computer vision and primary predictive
              AI — from POC and MVP to multi-location, multi-tenant enterprise systems. We work with
              teams who need AI and software to be a system, not a slide.
            </p>
            <p>
              We take on select engagements, chosen for fit. We build with open-source models on
              infrastructure we control. Your data doesn't train someone else's product.
            </p>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
            <Fact k="Products" v="DcernX · Xylor" />
            <Fact
              k="Consulting"
              v="Agentic · Generative · CV · Predictive"
              sub="+ Custom software, POC → enterprise"
            />
            <Fact k="Stack" v="Private inference" sub="Open-source models · Own infrastructure" />
            <Fact k="Models" v="Open-source · Self-hosted" sub="Fine-tuned · No API lock-in" />
          </div>
        </section>

        {/* SECURITY & COMPLIANCE */}
        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <EyebrowLabel>Security &amp; compliance</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
              Your data stays yours. <span className="text-foreground/55">By architecture, not policy.</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
              {[
                { k: "Private inference", v: "Open-source models run on infrastructure we control. No prompts, embeddings or outputs sent to third-party model APIs." },
                { k: "GDPR by design", v: "UK-registered controller. Data-processing agreements available. Right-to-erasure and export supported end-to-end." },
                { k: "Data isolation", v: "Per-tenant boundaries, encrypted at rest and in transit. Least-privilege access with full audit trails." },
                { k: "On-prem &amp; edge ready", v: "Deploy the same stack into your VPC, your data centre, or at the edge — not just our cloud." },
                { k: "Evaluation &amp; observability", v: "Every model call is logged, evaluated and reviewable. Nothing ships without a measurable eval baseline." },
                { k: "Responsible AI", v: "Human review baked into agent workflows. Confidence, citations and provenance surfaced to end users." },
              ].map((item) => (
                <div key={item.k} className="bg-background p-6">
                  <div className="text-sm font-medium mb-2" dangerouslySetInnerHTML={{ __html: item.k }} />
                  <div className="text-xs text-foreground/65 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.v }} />
                </div>
              ))}
            </div>
          </div>
        </section>



        <section className="border-t border-border/40">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <EyebrowLabel>The team</EyebrowLabel>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
              Built by operators, not vendors.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/40">
              {TEAM.map((member) => (
                <div key={member.name} className="bg-background p-5">
                  <div className="h-10 w-10 border border-foreground/20 flex items-center justify-center text-sm font-light tracking-wider mb-4">
                    {member.initial}
                  </div>
                  {member.linkedin ? (
                    <a
                      href={absoluteLinkedInUrl(member.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:underline"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      {member.name}
                    </a>
                  ) : (
                    <span className="text-sm font-medium">{member.name}</span>
                  )}
                  <div className="text-[11px] text-foreground/50 mt-1">{member.role}</div>
                  {member.linkedin && (
                    <a
                      href={absoluteLinkedInUrl(member.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] text-foreground/60 hover:text-foreground"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <Linkedin className="h-3 w-3" /> LinkedIn
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/40">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-6">Want to talk?</h2>
            <Link
              to="/contact"
              className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
            >
              Get in touch <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>
      </Page>
    </>
  );
}

function Fact({ k, v, sub }: { k: string; v: string; sub?: string }) {
  return (
    <div className="bg-background p-6">
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-2">{k}</div>
      <div className="text-sm text-foreground/80">{v}</div>
      {sub && <div className="text-[11px] text-foreground/50 mt-1">{sub}</div>}
    </div>
  );
}
