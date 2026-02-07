interface WithWithoutProps {
  without: string[];
  with_certifyd: string[];
}

export function WithWithout({ without, with_certifyd }: WithWithoutProps) {
  return (
    <section className="section-dark">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without */}
          <div className="border border-navy-border rounded-sm p-6 lg:p-8">
            <h3 className="font-heading text-lg font-semibold text-accent-warning mb-6">
              Without Certifyd
            </h3>
            <ol className="space-y-4">
              {without.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-heading text-sm font-bold text-text-on-dark-muted mt-0.5">
                    {index + 1}.
                  </span>
                  <p className="text-text-on-dark-muted text-sm leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* With */}
          <div className="border border-certifyd-blue/30 rounded-sm p-6 lg:p-8">
            <h3 className="font-heading text-lg font-semibold text-accent-success mb-6">
              With Certifyd
            </h3>
            <ol className="space-y-4">
              {with_certifyd.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-heading text-sm font-bold text-text-on-dark mt-0.5">
                    {index + 1}.
                  </span>
                  <p className="text-text-on-dark text-sm leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
