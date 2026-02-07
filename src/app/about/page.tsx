import type { Metadata } from "next";
import Link from "next/link";
import { TeamCards } from "@/components/about/TeamCards";
import { Vision } from "@/components/about/Vision";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by people who understand what's at stake. Meet the team behind Certifyd.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark bg-grid-pattern pt-32 pb-20">
        <div className="section-container text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold max-w-3xl mx-auto">
            Built by people who understand what&apos;s at stake.
          </h1>
          <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto mt-6">
            A team with deep experience building mission-critical infrastructure
            for the world&apos;s largest institutions — now solving the identity
            trust problem for every business.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="section-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-certifyd-blue/10 text-certifyd-blue mb-4">
              The Team
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-on-light">
              Institutional DNA. Startup Speed.
            </h2>
          </div>
          <TeamCards />
        </div>
      </section>

      {/* Vision */}
      <Vision />

      {/* Careers CTA */}
      <section className="section-dark">
        <div className="section-container text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            We&apos;re hiring
          </h2>
          <p className="text-text-on-dark-muted text-lg max-w-xl mx-auto mb-8">
            We&apos;re building the identity layer for businesses. If that
            sounds interesting, we&apos;d like to hear from you.
          </p>
          <Link
            href="/careers/"
            className="inline-block bg-certifyd-blue text-white px-8 py-3 rounded-sm font-medium hover:bg-certifyd-blue-light transition-colors"
          >
            View Opportunities
          </Link>
        </div>
      </section>
    </>
  );
}
