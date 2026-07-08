import { NavLink, Link } from "react-router-dom";
import type { ReactNode } from "react";

export function SiteNav() {
  const links = [
    { to: "/ventures", label: "Ventures" },
    { to: "/consulting", label: "Consulting" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="border-b border-border/60">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-sm font-medium tracking-tight">
          P101<span className="text-foreground/40">.limited</span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((l) => (
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
            href="mailto:hudson@p101limited.com"
            className="hidden sm:inline-flex text-xs h-8 px-3 items-center border border-foreground/20 hover:border-foreground/60 transition-colors"
          >
            Work with us
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="text-sm font-medium mb-2">P101 Limited</div>
          <p className="text-foreground/55 leading-relaxed">
            Applied AI infrastructure, products and consulting. Registered in
            England &amp; Wales, company no. 17063831.
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
        <div className="max-w-5xl mx-auto px-6 py-4 text-[11px] text-foreground/45 flex justify-between">
          <div>© {new Date().getFullYear()} P101 Limited. All rights reserved.</div>
          <div>Private inference · Open source first</div>
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
      <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50 mb-3">
        {title}
      </div>
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
