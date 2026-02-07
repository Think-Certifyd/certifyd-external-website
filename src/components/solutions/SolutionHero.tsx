interface SolutionHeroProps {
  title: string;
  subtitle: string;
}

export function SolutionHero({ title, subtitle }: SolutionHeroProps) {
  return (
    <section className="section-dark bg-grid-pattern pt-32 pb-20">
      <div className="section-container text-center">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
