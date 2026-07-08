import { useState } from "react";
import { ArrowRight, Mail, MapPin, Building2, Send } from "lucide-react";
import { Page, EyebrowLabel } from "@/components/SiteChrome";
import { SEO } from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — P101 Limited"
        description="Get in touch with P101 Limited about consulting engagements, DcernX, Xylor or partnerships. UK and USA offices. We reply personally."
        meta={[
          { property: "og:title", content: "Contact — P101 Limited" },
          {
            property: "og:description",
            content: "Talk to P101 Limited about consulting, DcernX, Xylor or partnerships.",
          },
        ]}
      />
      <Page>
        <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <EyebrowLabel>Contact</EyebrowLabel>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
              Start a<br />
              conversation.
            </h1>
            <p className="mt-6 text-sm text-foreground/70 leading-relaxed max-w-md">
              Tell us what you're trying to solve, who it's for and any constraints we should know
              about. We reply personally — usually within one working day.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <ContactLine
                icon={Mail}
                label="hudson@p101limited.com"
                href="mailto:hudson@p101limited.com"
              />
              <ContactLine icon={Building2} label="dcernx.com" href="https://dcernx.com" />
              <ContactLine icon={MapPin} label="Milton Keynes, UK — P101 Limited" />
              <ContactLine icon={MapPin} label="Sheridan, WY, USA — P101 LLC" />
            </div>
          </div>

          <div className="md:col-span-3">
            <InquiryForm />
          </div>
        </section>
      </Page>
    </>
  );
}

function ContactLine({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 text-foreground/75 hover:text-foreground transition-colors">
      <Icon className="h-3.5 w-3.5 text-foreground/50" />
      <span>{label}</span>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

const INTENTS = [
  "Consulting engagement",
  "DcernX enquiry",
  "Xylor walkthrough",
  "Partnership",
  "Careers",
  "Press",
] as const;

function InquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState<(typeof INTENTS)[number]>("Consulting engagement");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[${intent}] ${name}${company ? ` — ${company}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      `Intent: ${intent}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hudson@p101limited.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="border border-border/60 bg-background p-6 md:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Your name" required>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none text-sm placeholder:text-foreground/30"
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </Field>
        <Field label="Work email" required>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none text-sm placeholder:text-foreground/30"
            placeholder="jane@company.com"
            autoComplete="email"
          />
        </Field>
      </div>
      <Field label="Company">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full h-10 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none text-sm placeholder:text-foreground/30"
          placeholder="Company or fund"
          autoComplete="organization"
        />
      </Field>
      <Field label="What's this about?" required>
        <div className="flex flex-wrap gap-2 pt-1">
          {INTENTS.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIntent(i)}
              className={
                intent === i
                  ? "text-[11px] px-3 py-1.5 border border-foreground bg-foreground text-background transition-colors"
                  : "text-[11px] px-3 py-1.5 border border-border/60 text-foreground/70 hover:border-foreground/60 transition-colors"
              }
            >
              {i}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Tell us more" required>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full bg-transparent border-b border-foreground/20 focus:border-foreground outline-none text-sm placeholder:text-foreground/30 py-2 resize-none"
          placeholder="The problem, the audience, constraints, timeline…"
        />
      </Field>

      <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] text-foreground/50">
          Opens your email client — nothing sent from your browser.
        </div>
        <button
          type="submit"
          className="h-11 px-6 inline-flex items-center gap-2 bg-foreground text-background text-sm hover:opacity-90"
        >
          {sent ? "Reopen email" : "Send inquiry"}{" "}
          {sent ? <ArrowRight className="h-3.5 w-3.5" /> : <Send className="h-3.5 w-3.5" />}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-1">
        {label}
        {required && <span className="text-foreground/40"> *</span>}
      </div>
      {children}
    </label>
  );
}
