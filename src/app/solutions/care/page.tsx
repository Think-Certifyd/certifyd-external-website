import type { Metadata } from "next";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { ProblemSection } from "@/components/solutions/ProblemSection";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";

export const metadata: Metadata = {
  title: "Care Homes & Vulnerable Populations",
  description:
    "Rotating agency staff. Vulnerable residents. Families left in the dark. Certifyd changes that.",
};

export default function CarePage() {
  const howItWorksSteps = [
    "Agency staff scan in with QR code on arrival \u2014 verified identity, time, and location",
    "Care home dashboard shows who\u2019s on shift, when they arrived, and compliance status",
    "Families can see who\u2019s looking after their parent \u2014 \"Sarah Johnson, Verified by Certifyd, Arrived 22:00\"",
    "Families can authorise visitors \u2014 friends and relatives verified and logged before entry",
    "CQC audit-ready records maintained for every shift",
  ];

  return (
    <>
      <SolutionHero
        title="Know Who&apos;s Looking After Your Family"
        subtitle="Rotating agency staff. Vulnerable residents. Families left in the dark."
      />

      <ProblemSection
        problems={[
          "Care homes rely on agency staff for nights and weekends \u2014 often different people every shift.",
          "Families have no idea who\u2019s looking after their elderly parent. They can\u2019t check. They can\u2019t verify.",
          "39% of adult safeguarding concerns in care settings involve staff or volunteers.",
          "1.5 million people work in adult social care in England \u2014 many rotating between multiple sites.",
          "A staff member can give a false name. Nobody checked. Nobody could.",
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

      <SolutionCTA title="Protect your residents" />
    </>
  );
}
