"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STEPS = [
  {
    number: 1,
    title: "Open",
    description: "Both people have Certifyd on their phone.",
    image: null,
  },
  {
    number: 2,
    title: "Scan",
    description: "One shows their QR code, the other scans it.",
    image: "/app/scan-qr-mockup.png",
  },
  {
    number: 3,
    title: "Verified",
    description:
      "Both get instant confirmation of who they\u2019re talking to.",
    image: "/app/hero-mockup-2.png",
  },
  {
    number: 4,
    title: "Recorded",
    description: "An auditable, tamper-proof record is created.",
    image: null,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-dark">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="Simple by Design"
            title="Verified in Seconds"
            align="center"
            dark={true}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">
          {STEPS.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <div className="relative text-center">
                {index < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] border-t border-dashed border-navy-border"
                    aria-hidden="true"
                  />
                )}

                <div className="w-12 h-12 rounded-full border-2 border-certifyd-blue/40 text-certifyd-blue flex items-center justify-center font-heading font-bold text-lg mx-auto relative z-10 hover:bg-certifyd-blue hover:text-white transition-all duration-300">
                  {step.number}
                </div>

                <h3 className="font-heading text-lg font-semibold text-text-on-dark mt-4">
                  {step.title}
                </h3>

                <p className="text-text-on-dark-muted text-sm mt-2">
                  {step.description}
                </p>

                {/* App mockup images — desktop only */}
                {step.image && (
                  <div className="hidden lg:block mt-6">
                    <div className="relative mx-auto w-32 h-56 rounded-xl overflow-hidden border border-navy-border/50 shadow-lg shadow-certifyd-blue/5">
                      <Image
                        src={step.image}
                        alt={`${step.title} — Certifyd app screen`}
                        fill
                        className="object-cover object-top"
                        sizes="128px"
                      />
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <p className="text-text-on-dark-muted text-center mt-12 max-w-2xl mx-auto text-sm">
            Works everywhere &mdash; in person, on video calls, at your front
            door. One product. Every situation where identity matters.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
