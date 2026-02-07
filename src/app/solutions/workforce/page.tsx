import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Temporary Workers & Workforce Compliance",
  description:
    "5.5 million UK SMEs face the same fines as FTSE 250 companies. Most have no HR department.",
};

export default function WorkforcePage() {
  const howItWorksSteps = [
    "Business creates their Certifyd profile",
    "Invites employees and contractors to verify their identity and right-to-work status",
    "Dashboard shows real-time compliance: \u2705 28/30 verified, \u26a0\ufe0f 2 pending, Compliance score: 93%",
    "Fair Work Agency arrives \u2014 \"Here\u2019s our compliance dashboard. Every employee verified. Full audit trail.\"",
  ];

  return (
    <>
      <SolutionHero
        title="Audit-Ready in One Click"
        subtitle="5.5 million UK SMEs face the same fines as FTSE 250 companies. Most have no HR department."
      />

      <ProblemSection
        problems={[
          "1.1 million agency and temporary workers in the UK at any given time.",
          "\"Dave couldn\u2019t make it \u2014 I\u2019m covering.\" A stranger gets a lanyard and building access. Nobody checks.",
          "Most businesses spend nothing verifying that agency workers match the paperwork.",
          "SMEs can\u2019t afford background check agencies at \u00a350\u2013200+ per check.",
          "But they still face up to \u00a360,000 in fines per illegal worker \u2014 the same as FTSE 250 companies.",
        ]}
      />

      {/* How It Works */}
      <section className="section-dark">
        <div className="section-container">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-dark mb-10">
            How It Works
          </h2>
          <div className="space-y-6">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-certifyd-blue flex items-center justify-center shrink-0">
                  <span className="font-heading text-sm font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <p className="text-text-on-dark text-base leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Callout */}
      <section className="section-light">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <blockquote className="border-l-4 border-certifyd-blue pl-6 py-4">
              <p className="text-text-on-light text-lg leading-relaxed font-medium">
                Compliance without HR headcount. Certifyd gives small businesses
                the same audit readiness as enterprises &mdash; at a fraction of
                the cost of background check agencies.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <SolutionCTA title="Get compliance without HR headcount" />
    </>
  );
}
