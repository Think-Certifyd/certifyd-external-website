import { COMPANY } from "@/lib/constants";

export function Vision() {
  return (
    <section className="section-light">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-6">
            Our Vision
          </span>
          <blockquote className="text-xl lg:text-2xl font-heading font-light text-text-on-light leading-relaxed italic">
            &ldquo;To create a secure, trusted Digital ID environment where
            consumers, employees, businesses and governments can trust that their
            Digital ID is protected and that they are actually communicating with
            the person they think they are.&rdquo;
          </blockquote>
        </div>

        <div className="mt-16 pt-12 border-t border-warm-border text-center">
          <h3 className="font-heading text-lg font-semibold text-text-on-light mb-2">
            {COMPANY.name} Ltd
          </h3>
          <p className="text-text-on-light-muted text-sm">{COMPANY.address}</p>
        </div>
      </div>
    </section>
  );
}
