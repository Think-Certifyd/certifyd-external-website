interface ProblemSectionProps {
  problems: string[];
}

export function ProblemSection({ problems }: ProblemSectionProps) {
  return (
    <section className="section-light">
      <div className="section-container">
        <h2 className="font-heading text-2xl lg:text-3xl font-bold text-text-on-light mb-8">
          The Problem
        </h2>
        <div className="space-y-4 max-w-3xl">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-warning mt-2 shrink-0" />
              <p className="text-text-on-light-muted text-base leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
