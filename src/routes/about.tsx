import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin } from "lucide-react";
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
            Our consulting arm develops highly scalable, resource-lean AI outcomes and custom software solutions across agentic, generative, computer vision and primary predictive AI — from POC and MVP to multi-location, multi-tenant enterprise systems. We work with teams who need AI and software to be a system, not a slide.
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
          <Fact k="Consulting" v="Agentic · Generative · CV · Predictive · Custom solutions" />
          <Fact k="Stack" v="Private inference · Open-source models · Own infrastructure" />
        </div>
      </section>

      <section className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <EyebrowLabel>The team</EyebrowLabel>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight max-w-3xl mb-10">
            Built by operators, not vendors.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-border/40">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-background p-5">
                <div className="h-10 w-10 border border-foreground/20 flex items-center justify-center text-sm font-light tracking-wider mb-4">
                  {member.initial}
                </div>
                <a
                  href={absoluteLinkedInUrl(member.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  {member.name}
                </a>
                <div className="text-[11px] text-foreground/50 mt-1">{member.role}</div>
                <a
                  href={absoluteLinkedInUrl(member.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-foreground/60 hover:text-foreground"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-3 w-3" /> LinkedIn
                </a>
              </div>
            ))}
          </div>
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
];

const absoluteLinkedInUrl = (url: string) => {
  const cleanedUrl = url.trim().replace(/^https?:\/\//, "");
  return `https://${cleanedUrl}`;
};

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
