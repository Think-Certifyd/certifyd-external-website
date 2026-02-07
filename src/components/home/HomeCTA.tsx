import Link from "next/link";
import { Button } from "@/components/ui/Button";

const SOLUTIONS = [
  { label: "Recruitment", href: "/solutions/recruitment/" },
  { label: "Trades", href: "/solutions/trades/" },
  { label: "Care Homes", href: "/solutions/care/" },
  { label: "Workforce", href: "/solutions/workforce/" },
];

export function HomeCTA() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Subtle blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,89,255,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 py-20 lg:py-28 text-center">
        <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-dark">
          Find out how Certifyd works for your industry
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {SOLUTIONS.map((solution) => (
            <Link
              key={solution.label}
              href={solution.href}
              className="border border-navy-border bg-navy-light px-6 py-3 rounded-sm text-sm font-medium text-text-on-dark hover:border-certifyd-blue hover:text-certifyd-blue transition-colors"
            >
              {solution.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <span className="text-text-on-dark-muted text-sm">Or</span>
          <Button variant="primary" size="lg" href="/contact/">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
