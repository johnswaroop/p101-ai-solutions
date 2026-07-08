import { NavLink, Link } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/ventures", label: "Ventures" },
  { to: "/consulting", label: "Consulting" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-b border-border/60 sticky top-0 z-40 bg-background/85 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-sm font-medium tracking-tight" onClick={() => setOpen(false)}>
          P101<span className="text-foreground/40"> Limited</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive
                  ? "text-xs text-foreground"
                  : "text-xs text-foreground/60 hover:text-foreground transition-colors"
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="mailto:hudson@p101limited.com?subject=Discovery%20call"
            className="text-xs h-8 px-3 inline-flex items-center bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Book a call
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 -mr-2 text-foreground/80 hover:text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-base text-foreground"
                    : "text-base text-foreground/70 hover:text-foreground"
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="mailto:hudson@p101limited.com?subject=Discovery%20call"
              onClick={() => setOpen(false)}
              className="mt-2 h-11 px-5 inline-flex items-center justify-center bg-foreground text-background text-sm hover:opacity-90"
            >
              Book a discovery call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="text-sm font-medium mb-2">P101 Limited</div>
          <p className="text-foreground/55 leading-relaxed">
            Applied AI infrastructure, products and consulting. Registered in England &amp; Wales,
            company no. 17063831.
          </p>
        </div>
        <FooterCol
          title="Ventures"
          items={[
            { label: "DcernX", href: "https://dcernx.com" },
            { label: "Xylor", href: "/ventures#xylor" },
          ]}
        />
        <FooterCol
          title="Company"
          items={[
            { label: "About", href: "/about" },
            { label: "Consulting", href: "/consulting" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <FooterCol
          title="Offices"
          items={[
            { label: "Milton Keynes, UK", href: null },
            { label: "Sheridan, WY, USA", href: null },
            { label: "hudson@p101limited.com", href: "mailto:hudson@p101limited.com" },
          ]}
        />
      </div>
      <div className="border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 py-4 text-[11px] text-foreground/45 flex flex-wrap gap-3 justify-between">
          <div>© 2025–{year} P101 Limited. All rights reserved.</div>
          <div>Private inference · Open source first · GDPR by design</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string | null }[];
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-3">{title}</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it.label}>
            {it.href ? (
              <a
                href={it.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {it.label}
              </a>
            ) : (
              <span className="text-foreground/70">{it.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      {children}
      <SiteFooter />
    </div>
  );
}

export function EyebrowLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-3">
      {children}
    </div>
  );
}
