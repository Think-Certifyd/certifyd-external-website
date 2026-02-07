"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatCounter } from "@/components/ui/StatCounter";

const METRICS = [
  { value: "30", suffix: "s", label: "Verification time" },
  { value: "<60", suffix: "s", label: "Right-to-work check" },
  { value: "100", suffix: "%", label: "Audit trail coverage" },
  { value: "24/7", suffix: "", label: "Continuous monitoring" },
];

export function MetricsBar() {
  return (
    <section className="relative overflow-hidden border-y border-navy-border bg-navy">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,89,255,0.04) 0%, transparent 50%, rgba(0,89,255,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-14 lg:py-16">
        {/* Live badge */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            <span className="font-heading text-xs font-semibold uppercase tracking-wider text-accent-success">
              Real-Time Metrics
            </span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {METRICS.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 100}>
              {metric.value === "24/7" ? (
                <div className="text-center">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue">
                    24/7
                  </div>
                  <p className="text-sm mt-2 text-text-on-dark-muted">
                    {metric.label}
                  </p>
                </div>
              ) : metric.value === "<60" ? (
                <div className="text-center">
                  <div className="font-heading text-4xl lg:text-5xl font-bold text-certifyd-blue">
                    &lt;60s
                  </div>
                  <p className="text-sm mt-2 text-text-on-dark-muted">
                    {metric.label}
                  </p>
                </div>
              ) : (
                <StatCounter
                  value={`${metric.value}${metric.suffix}`}
                  label={metric.label}
                  dark={true}
                />
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
