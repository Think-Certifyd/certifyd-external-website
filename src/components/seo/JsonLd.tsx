import { COMPANY, TEAM } from "@/lib/constants";

const BASE_URL = "https://www.certifyd.io";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: BASE_URL,
    logo: `${BASE_URL}/logos/Blue Certifyd Icon.png`,
    description: COMPANY.tagline,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aldwych House, 71-91 Aldwych",
      addressLocality: "London",
      addressCountry: "GB",
      postalCode: "WC2B 4HN",
    },
    sameAs: [COMPANY.linkedin],
    founder: TEAM.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      sameAs: member.linkedin,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: BASE_URL,
    description:
      "Affordable identity verification for UK businesses. Pre-screen right-to-work, verify tradespeople, and stay audit-ready.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BlogPostSchemaProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}

export function BlogPostSchema({
  title,
  description,
  slug,
  date,
  author,
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}/`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logos/Blue Certifyd Icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}/`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  slug: string;
}

export function ServiceSchema({ name, description, slug }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}/for/${slug}/`,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToSchemaProps {
  name: string;
  steps: string[];
}

export function HowToSchema({ name, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; href: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
