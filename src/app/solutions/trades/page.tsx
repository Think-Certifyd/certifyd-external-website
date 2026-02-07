import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Trades & Physical Access",
  description:
    "Zero regulation for tradespeople entering your home in the UK. Certifyd changes that.",
};

export default function TradesPage() {
  const howItWorksSteps = [
    "Tradesperson arrives \u2014 both open the app",
    "Homeowner scans the tradesperson\u2019s QR code",
    "Instant confirmation: \"John Smith \u2014 Verified by Certifyd. Smith Electrical Ltd. Certified since March 2026.\"",
    "Record created: who arrived, when, where",
    "Auditable trail if anything goes wrong",
  ];

  const alsoWorksFor = [
    "Charity collectors",
    "Utility engineers",
    "Meter readers",
    "Delivery drivers",
    "Anyone at your door claiming to be someone",
  ];

  const beneficiaries = [
    {
      title: "Platforms",
      description:
        "Checkatrade, MyBuilder \u2014 know which tradespeople actually deliver.",
    },
    {
      title: "Trade companies",
      description: "\"We\u2019re reputable \u2014 this proves it.\"",
    },
    {
      title: "Homeowners",
      description: "Know who\u2019s in your house.",
    },
    {
      title: "Tradespeople",
      description:
        "\"I do good work \u2014 I don\u2019t mind being known.\"",
    },
  ];

  return (
    <>
      <SolutionHero
        title="Know Who&apos;s at Your Door"
        subtitle="Zero regulation for tradespeople entering your home in the UK. Certifyd changes that."
      />

      <ProblemSection
        problems={[
          "Tradespeople know where you live, what\u2019s in your home, when you\u2019re out.",
          "You know nothing about them. They can send someone else. No one checks.",
          "Trade platforms verify the business \u2014 but can\u2019t verify who actually shows up.",
          "Zero regulation for tradespeople entering private homes in the UK.",
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

      {/* Also works for */}
      <section className="section-light">
        <div className="section-container">
          <h2 className="font-heading text-2xl font-bold text-text-on-light mb-6 text-center">
            Also works for
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {alsoWorksFor.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-warm-gray border border-warm-border rounded-sm text-text-on-light-muted text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="section-light">
        <div className="section-container">
          <h2 className="font-heading text-2xl font-bold text-text-on-light mb-8 text-center">
            Who benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {beneficiaries.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-warm-border rounded-sm p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-text-on-light mb-2">
                  {item.title}
                </h3>
                <p className="text-text-on-light-muted text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionCTA title="Bring verification to your platform" />
    </>
  );
}
