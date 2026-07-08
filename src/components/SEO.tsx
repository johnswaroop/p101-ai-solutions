import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type Meta = { name?: string; property?: string; content: string };

const SITE_URL = "https://p101limited.com";
const DEFAULT_OG = `${SITE_URL}/og-image.jpg`;

export function SEO({
  title,
  description,
  meta = [],
  jsonLd,
  image = DEFAULT_OG,
  children,
}: {
  title: string;
  description?: string;
  meta?: Meta[];
  jsonLd?: object;
  image?: string;
  children?: ReactNode;
}) {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {meta.map((m, i) =>
        m.property ? (
          <meta key={i} property={m.property} content={m.content} />
        ) : (
          <meta key={i} name={m.name} content={m.content} />
        ),
      )}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      {children}
    </Helmet>
  );
}
