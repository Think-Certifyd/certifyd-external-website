export interface ForPage {
  slug: string;
  category:
    | "role"
    | "business"
    | "threat"
    | "safeguarding"
    | "scenario"
    | "compliance";
  parentIndustry: "recruitment" | "trades" | "care" | "workforce";

  // SEO
  title: string;
  metaTitle: string;
  metaDescription: string;

  // Hero
  badge: string;
  headline: string;
  subtitle: string;
  graphic:
    | "trades"
    | "workforce"
    | "care"
    | "recruitment"
    | "threat"
    | "safeguarding";

  // Search intent paragraph
  searchIntentParagraph: string;

  // Stats
  stats: { value: string; label: string }[];

  // Why it matters (markdown-style prose, rendered as paragraphs)
  whyItMatters: string[];

  // Problems
  problems: string[];

  // Steps
  steps: string[];

  // Testimonial (optional)
  testimonial?: { quote: string; attribution: string };

  // FAQ
  faqs: { question: string; answer: string }[];

  // Cross-links to other /for/ pages
  alsoRelevant: { label: string; slug: string }[];

  // Related content
  relatedSolutions: { label: string; href: string }[];
  relatedArticles: { label: string; href: string }[];
  relatedResources: {
    label: string;
    href: string;
    external: boolean;
  }[];

  // CTA
  ctaTitle: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

export const FOR_PAGES: ForPage[] = [
  {
    slug: "cleaners",
    category: "role",
    parentIndustry: "trades",
    title: "Certifyd for Cleaners",
    metaTitle: "Identity Verification for Cleaners",
    metaDescription:
      "Cleaners have your keys, know your routine, and enter your home unsupervised. Verify every cleaner at the door in 30 seconds with Certifyd.",
    badge: "Cleaners",
    headline: "They Have Your Keys. Do You Know Who They Are?",
    subtitle:
      "Cleaners enter your home weekly \u2014 often unsupervised, with full access to your property. Certifyd lets homeowners and cleaning companies verify every cleaner at the door in 30 seconds.",
    graphic: "trades",
    searchIntentParagraph:
      "Identity verification for cleaners confirms that the person entering your home is who they claim to be \u2014 linked to a verified identity, not just a business card. Certifyd provides two-way verification in 30 seconds via QR code scan, creating a timestamped record of every visit. For cleaning companies, it proves your staff are who you say they are. For homeowners, it\u2019s peace of mind every time someone walks through your door.",
    stats: [
      { value: "0", label: "regulations requiring cleaners to verify ID" },
      { value: "\u00a357M", label: "annual UK doorstep crime cost" },
      { value: "30s", label: "to verify with Certifyd" },
    ],
    whyItMatters: [
      "The UK cleaning industry is largely unregulated. There is no licensing requirement, no mandatory identity check, and no register of domestic cleaners. A person can set up a cleaning business tomorrow with nothing more than a Facebook page and a bucket.",
      "For the millions of UK households that use a regular cleaner, this means entrusting house keys, alarm codes, and unsupervised access to someone whose identity has never been formally verified. When cleaning companies send substitute staff \u2014 which happens frequently \u2014 the homeowner often has no idea who has just walked through their door.",
      "Platforms like Checkatrade and Trustatrader verify that a cleaning business exists. They cannot verify who actually arrives. That gap \u2014 between the business you booked and the person who turns up \u2014 is where risk lives.",
    ],
    problems: [
      "Cleaning companies send different staff with no notice \u2014 you don\u2019t know who\u2019s actually in your home.",
      "Self-employed cleaners found via Facebook groups or Nextdoor have zero identity verification.",
      "Cleaners hold house keys, alarm codes, and knowledge of your schedule and valuables.",
      "When something goes missing, there\u2019s no record of who was there and when.",
    ],
    steps: [
      "Cleaner arrives \u2014 both open Certifyd on their phone",
      "Homeowner scans the cleaner\u2019s QR code (or vice versa)",
      "Instant confirmation: verified identity linked to the cleaning company",
      "Timestamped, geolocated record created \u2014 proof of who was there and when",
    ],
    testimonial: {
      quote:
        "Platforms verify the business exists. They can\u2019t verify who actually shows up at the door. That\u2019s the gap.",
      attribution: "Sole trader, electrical contractor",
    },
    faqs: [
      {
        question: "Do I need to verify my cleaner\u2019s identity?",
        answer:
          "There is no legal requirement for homeowners to verify a cleaner\u2019s identity in the UK. However, you are giving someone unsupervised access to your home, keys, and personal belongings. Verification protects both parties \u2014 the homeowner knows who is in their home, and the cleaner has proof they were there if a dispute arises.",
      },
      {
        question: "What happens if my cleaning company sends someone else?",
        answer:
          "This happens frequently \u2014 staff sickness, scheduling changes, and holiday cover mean a different person may arrive. Without verification, you have no way to confirm that the substitute is actually from the company. Certifyd links each cleaner to their verified identity, so you know immediately whether the person at your door is who they claim to be.",
      },
      {
        question:
          "How do cleaning companies verify their staff with Certifyd?",
        answer:
          "Cleaning companies add their staff to Certifyd\u2019s platform. Each cleaner gets a verified profile linked to the company. When they arrive at a job, the homeowner scans their QR code and sees the cleaner\u2019s name, company, and verified status \u2014 all in under 30 seconds.",
      },
      {
        question:
          "Is there a legal requirement to check a cleaner\u2019s right to work?",
        answer:
          "Yes. If you employ a cleaner directly (rather than using a cleaning company), you are legally required to check their right to work in the UK. Failure to do so can result in civil penalties of up to \u00a360,000 per illegal worker under the Immigration, Asylum and Nationality Act 2006. The Fair Work Agency, launching April 2026, will enforce this more proactively.",
      },
    ],
    alsoRelevant: [
      { label: "Certifyd for Nannies & Au Pairs", slug: "nannies-au-pairs" },
      { label: "Certifyd for Builders", slug: "builders" },
      {
        label: "Certifyd for Protecting Elderly Parents",
        slug: "protecting-elderly-parents",
      },
    ],
    relatedSolutions: [
      { label: "Certify That Person", href: "/solutions/person/" },
      { label: "Certify That Business", href: "/solutions/business/" },
    ],
    relatedArticles: [
      {
        label: "Who\u2019s Really at Your Door?",
        href: "/blog/whos-really-at-your-door/",
      },
      {
        label: "The Doorstep Fraud Problem",
        href: "/blog/doorstep-fraud-problem/",
      },
      {
        label: "Trade Platforms\u2019 Blind Spot",
        href: "/blog/trade-platforms-blind-spot/",
      },
    ],
    relatedResources: [
      {
        label: "Citizens Advice \u2014 Hiring Domestic Help",
        href: "https://www.citizensadvice.org.uk/work/rights-at-work/basic-rights-and-contracts/domestic-workers/",
        external: true,
      },
      {
        label: "GOV.UK \u2014 Employing Someone to Work in Your Home",
        href: "https://www.gov.uk/employment-status/worker",
        external: true,
      },
    ],
    ctaTitle: "Bring verification to your cleaning business",
    ctaSecondaryLabel: "Read: Who\u2019s Really at Your Door?",
    ctaSecondaryHref: "/blog/whos-really-at-your-door/",
  },
];

export function getAllForPages(): ForPage[] {
  return FOR_PAGES;
}

export function getForPageBySlug(slug: string): ForPage | undefined {
  return FOR_PAGES.find((page) => page.slug === slug);
}

export function getAllForPageSlugs(): string[] {
  return FOR_PAGES.map((page) => page.slug);
}
