import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Building2 } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — P101 Limited" },
      {
        name: "description",
        content:
          "Get in touch with P101 Limited about consulting engagements, DcernX, Xylor or partnerships.",
      },
      { property: "og:title", content: "Contact — P101 Limited" },
      {
        property: "og:description",
        content: "Talk to P101 Limited about consulting, DcernX, Xylor or partnerships.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Page>
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <EyebrowLabel>Contact</EyebrowLabel>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
          Start a conversation.
        </h1>
        <p className="mt-6 text-base text-foreground/70 leading-relaxed max-w-xl">
          The fastest way to reach P101 is a direct email. Tell us what you're trying to solve, who it's for and any constraints we should know about. We reply personally.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-border/40 border border-border/40">
          <ContactCard
            icon={Mail}
            label="Consulting, press & partnerships"
            value="hudson@p101limited.com"
            sub="We reply personally, usually within one working day."
            href="mailto:hudson@p101limited.com"
          />
          <ContactCard
            icon={Building2}
            label="Products"
            value="DcernX · Xylor"
            sub="dcernx.com"
            href="https://dcernx.com"
          />
          <ContactCard icon={MapPin} label="Registered office" value="London, United Kingdom" sub="Company no. 17063831" />
          <ContactCard
            icon={Mail}
            label="Careers & collaborations"
            value="Introduce yourself"
            sub="Send a short note and a link — CV, GitHub, portfolio."
            href="mailto:hudson@p101limited.com?subject=Introduction"
          />
        </div>

        <div className="mt-10">
          <a
            href="mailto:hudson@p101limited.com"
            className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
          >
            Email hudson@p101limited.com <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </Page>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const inner = (
    <div className="bg-background p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="h-3.5 w-3.5 text-foreground/50" />
        <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50">
          {label}
        </div>
      </div>
      <div className="text-sm text-foreground/85">{value}</div>
      {sub && <div className="text-xs text-foreground/50 mt-1">{sub}</div>}
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block hover:bg-foreground/[0.03] transition-colors">
      {inner}
    </a>
  ) : (
    inner
  );
}
