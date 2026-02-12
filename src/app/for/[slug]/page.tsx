import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllForPageSlugs, getForPageBySlug } from "@/lib/for-pages";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionSteps } from "@/components/solutions/SolutionSteps";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { RelatedContent } from "@/components/solutions/RelatedContent";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";
import {
  BreadcrumbSchema,
  ServiceSchema,
  FAQSchema,
  HowToSchema,
} from "@/components/seo/JsonLd";

/* Graphics — mapped by category */
import { DoorVerification } from "@/components/graphics/DoorVerification";
import { WorkforceCompliance } from "@/components/graphics/WorkforceCompliance";
import { ShiftMonitor } from "@/components/graphics/ShiftMonitor";
import { RecruitmentScreening } from "@/components/graphics/RecruitmentScreening";
import { ComplianceDash } from "@/components/graphics/ComplianceDash";

const GRAPHIC_MAP: Record<string, React.ComponentType> = {
  trades: DoorVerification,
  workforce: WorkforceCompliance,
  care: ShiftMonitor,
  recruitment: RecruitmentScreening,
  threat: ComplianceDash, // placeholder until ThreatShield is built
  safeguarding: DoorVerification, // placeholder until HomeShield is built
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllForPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getForPageBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/for/${slug}/` },
    openGraph: {
      title: `${page.metaTitle} | Certifyd`,
      description: page.metaDescription,
      url: `https://www.certifyd.io/for/${slug}/`,
    },
  };
}

export default async function ForPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getForPageBySlug(slug);
  if (!page) notFound();

  const Graphic = GRAPHIC_MAP[page.graphic] ?? DoorVerification;

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: page.title, href: `/for/${slug}/` },
        ]}
      />
      <ServiceSchema
        name={page.title}
        description={page.metaDescription}
        slug={slug}
      />
      <FAQSchema faqs={page.faqs} />
      <HowToSchema
        name={`How to verify identity — ${page.title}`}
        steps={page.steps}
      />

      {/* Hero */}
      <SolutionHero
        badge={page.badge}
        title={page.headline}
        subtitle={page.subtitle}
      >
        <Graphic />
      </SolutionHero>

      {/* Search Intent Paragraph + Stats */}
      <section className="section-light">
        <div className="section-container">
          <ScrollReveal>
            <p className="text-lg text-text-on-light leading-relaxed max-w-3xl">
              {page.searchIntentParagraph}
            </p>
          </ScrollReveal>

          {page.stats.length > 0 && (
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-10 border-t border-warm-border">
                {page.stats.map((stat) => (
                  <StatCounter
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    dark={false}
                  />
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-warm-white border-t border-warm-border">
        <div className="section-container py-16 lg:py-20">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-text-on-light-muted" />
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                  Why This Matters
                </span>
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light leading-tight">
                The reality of{" "}
                <span className="text-certifyd-blue">
                  {page.badge.toLowerCase()}
                </span>{" "}
                in the UK.
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl space-y-6">
            {page.whyItMatters.map((paragraph, index) => (
              <ScrollReveal key={index} delay={index * 80}>
                <p className="text-text-on-light leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <ProblemSection problems={page.problems} />

      {/* How It Works */}
      <SolutionSteps steps={page.steps} />

      {/* Testimonial */}
      {page.testimonial && (
        <section className="section-light border-t border-warm-border">
          <div className="section-container py-16 lg:py-20">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto text-center">
                <svg
                  className="w-10 h-10 text-certifyd-blue/20 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-heading text-xl lg:text-2xl font-medium text-text-on-light leading-relaxed mb-4">
                  &ldquo;{page.testimonial.quote}&rdquo;
                </blockquote>
                <cite className="text-sm text-text-on-light-muted not-italic">
                  — {page.testimonial.attribution}
                </cite>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="bg-warm-white border-t border-warm-border">
          <div className="section-container py-16 lg:py-20">
            <ScrollReveal>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-certifyd-blue" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider text-certifyd-blue">
                    FAQ
                  </span>
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light leading-tight">
                  Common questions.
                </h2>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl space-y-8">
              {page.faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 80}>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-text-on-light mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-on-light-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Also Relevant */}
      {page.alsoRelevant.length > 0 && (
        <section className="section-light border-t border-warm-border">
          <div className="section-container py-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-text-on-light-muted" />
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-text-on-light-muted">
                Also Relevant
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {page.alsoRelevant.map((link) => (
                <Link
                  key={link.slug}
                  href={`/for/${link.slug}/`}
                  className="px-4 py-2 bg-white border border-warm-border rounded-sm text-text-on-light text-sm font-heading hover:border-certifyd-blue hover:text-certifyd-blue transition-colors"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Content */}
      <RelatedContent
        solutions={page.relatedSolutions}
        articles={page.relatedArticles}
        resources={page.relatedResources}
      />

      {/* CTA */}
      <SolutionCTA
        title={page.ctaTitle}
        secondaryLabel={page.ctaSecondaryLabel}
        secondaryHref={page.ctaSecondaryHref}
      />
    </>
  );
}
