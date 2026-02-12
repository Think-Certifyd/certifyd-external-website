import Link from "next/link";

interface RelatedLink {
  label: string;
  href: string;
  external?: boolean;
}

interface RelatedContentProps {
  solutions?: RelatedLink[];
  articles?: RelatedLink[];
  resources?: RelatedLink[];
}

export function RelatedContent({
  solutions,
  articles,
  resources,
}: RelatedContentProps) {
  return (
    <section className="section-light border-t border-warm-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {solutions && solutions.length > 0 && (
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                Related Solutions
              </h3>
              <ul className="space-y-3">
                {solutions.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                    >
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {articles && articles.length > 0 && (
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                Related Reading
              </h3>
              <ul className="space-y-3">
                {articles.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                    >
                      {link.label} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {resources && resources.length > 0 && (
            <div>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted mb-4">
                External Resources
              </h3>
              <ul className="space-y-3">
                {resources.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-on-light hover:text-certifyd-blue transition-colors"
                    >
                      {link.label}{" "}
                      <span className="text-text-on-light-muted text-xs">
                        &#8599;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
