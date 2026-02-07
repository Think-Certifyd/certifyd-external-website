import { Button } from "@/components/ui/Button";

interface SolutionCTAProps {
  title: string;
  href?: string;
}

export function SolutionCTA({ title, href = "/contact/" }: SolutionCTAProps) {
  return (
    <section className="section-light">
      <div className="section-container">
        <div className="bg-white border border-warm-border rounded-sm p-12 text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light mb-6">
            {title}
          </h2>
          <Button variant="primary" size="lg" href={href}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
