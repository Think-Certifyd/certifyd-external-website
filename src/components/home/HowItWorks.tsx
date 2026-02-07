import { SectionHeader } from "@/components/ui/SectionHeader";

const STEPS = [
  {
    number: 1,
    title: "Open",
    description: "Both people have Certifyd on their phone.",
  },
  {
    number: 2,
    title: "Scan",
    description: "One shows their QR code, the other scans it.",
  },
  {
    number: 3,
    title: "Verified",
    description:
      "Both get instant confirmation of who they\u2019re talking to.",
  },
  {
    number: 4,
    title: "Recorded",
    description: "An auditable, tamper-proof record is created.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-dark">
      <div className="section-container py-20 lg:py-28">
        <SectionHeader
          badge="Simple by Design"
          title="Verified in Seconds"
          align="center"
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connecting line between steps (desktop only) */}
              {index < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] border-t border-dashed border-navy-border"
                  aria-hidden="true"
                />
              )}

              {/* Number badge */}
              <div className="w-12 h-12 rounded-full bg-certifyd-blue text-white flex items-center justify-center font-heading font-bold text-lg mx-auto relative z-10">
                {step.number}
              </div>

              <h3 className="font-heading text-lg font-semibold text-text-on-dark mt-4">
                {step.title}
              </h3>

              <p className="text-text-on-dark-muted text-sm mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-text-on-dark-muted text-center mt-12 max-w-2xl mx-auto">
          Works everywhere &mdash; in person, on video calls, at your front
          door. One product. Every situation where identity matters.
        </p>
      </div>
    </section>
  );
}
