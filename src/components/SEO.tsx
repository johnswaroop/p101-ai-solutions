import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

type Meta = { name?: string; property?: string; content: string };

export function SEO({
  title,
  description,
  meta = [],
  jsonLd,
  children,
}: {
  title: string;
  description?: string;
  meta?: Meta[];
  jsonLd?: object;
  children?: ReactNode;
}) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {meta.map((m, i) =>
        m.property ? (
          <meta key={i} property={m.property} content={m.content} />
        ) : (
          <meta key={i} name={m.name} content={m.content} />
        ),
      )}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {children}
    </Helmet>
  );
}
