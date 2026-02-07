"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

/* ── Mini mock UI previews ─────────────────────────────────── */

function QRPreview() {
  return (
    <div className="bg-navy rounded-md p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Certifyd Stamp
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] text-accent-success">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-success" />
          Active
        </span>
      </div>
      {/* CSS QR code pattern */}
      <div className="flex items-center justify-center py-3">
        <div className="grid grid-cols-7 gap-[3px] w-20 h-20">
          {[
            1,1,1,0,1,1,1,
            1,0,1,1,1,0,1,
            1,1,1,0,1,1,1,
            0,1,0,1,0,1,0,
            1,1,1,0,1,1,1,
            1,0,1,1,1,0,1,
            1,1,1,0,1,1,1,
          ].map((filled, i) => (
            <div
              key={i}
              className={filled ? "bg-certifyd-blue rounded-[1px]" : "bg-transparent"}
            />
          ))}
        </div>
      </div>
      <div className="text-center">
        <span className="font-heading text-[10px] text-text-on-dark-muted tracking-wider">
          Scan to Verify
        </span>
      </div>
    </div>
  );
}

function TeamRosterPreview() {
  const team = [
    { name: "Sarah J.", status: "verified" },
    { name: "David C.", status: "verified" },
    { name: "James W.", status: "pending" },
  ];
  return (
    <div className="bg-navy rounded-md p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Team Verification
        </span>
        <span className="text-[10px] text-certifyd-blue font-heading font-bold">
          2/3
        </span>
      </div>
      <div className="space-y-2">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between py-1.5 border-b border-navy-border/40 last:border-0"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-navy-lighter flex items-center justify-center">
                <span className="text-[8px] font-bold text-text-on-dark-muted">
                  {member.name[0]}
                </span>
              </div>
              <span className="text-xs text-text-on-dark">{member.name}</span>
            </div>
            {member.status === "verified" ? (
              <span className="text-[10px] text-accent-success font-medium flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Verified
              </span>
            ) : (
              <span className="text-[10px] text-accent-warning font-medium flex items-center gap-1">
                <svg className="w-3 h-3 animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Pending
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CompliancePreview() {
  return (
    <div className="bg-navy rounded-md p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider">
          Compliance
        </span>
        <span className="font-heading text-lg font-bold text-certifyd-blue">
          93%
        </span>
      </div>
      {/* Progress bar */}
      <div className="w-full h-2.5 bg-navy-lighter rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-certifyd-blue to-certifyd-blue-light rounded-full"
          style={{ width: "93%" }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-accent-success">28 Verified</span>
        <span className="text-[10px] text-accent-warning">2 Pending</span>
      </div>
      {/* Mini bar chart */}
      <div className="flex items-end gap-1 mt-3 h-8">
        {[60, 80, 45, 90, 70, 95, 85, 93].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm overflow-hidden"
            style={{ height: `${h}%` }}
          >
            <div className="w-full h-full rounded-sm bg-certifyd-blue/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Capabilities data ─────────────────────────────────────── */

const CAPABILITIES = [
  {
    title: "Certify That Person",
    description:
      "Two-way, real-time identity verification. QR code refreshes every 30 seconds. Works across any communication channel.",
    href: "/solutions/person/",
    preview: <QRPreview />,
  },
  {
    title: "Certify That Business",
    description:
      "Businesses create their profile, add team members, and build a verified workforce. Candidates and contractors verify to stand out.",
    href: "/solutions/business/",
    preview: <TeamRosterPreview />,
  },
  {
    title: "Audit-Ready Compliance",
    description:
      "See who\u2019s verified, who\u2019s pending, and your compliance score. One-click reports. Audit-ready when it matters.",
    href: "/solutions/compliance/",
    preview: <CompliancePreview />,
  },
];

/* ── Component ─────────────────────────────────────────────── */

export function WhatWeDo() {
  return (
    <section className="section-light">
      <div className="section-container py-20 lg:py-28">
        <ScrollReveal>
          <SectionHeader
            badge="What We Do"
            title="One Platform. Three Capabilities."
            align="center"
            dark={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {CAPABILITIES.map((cap, index) => (
            <ScrollReveal key={cap.title} delay={index * 120}>
              <Link
                href={cap.href}
                className="group block bg-white border border-warm-border rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 hover:border-certifyd-blue/30 transition-all duration-300"
              >
                <div className="p-6 pb-0">
                  {cap.preview}
                </div>
                <div className="p-6 pt-0 text-center">
                  <h3 className="font-heading text-xl font-semibold text-text-on-light mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-text-on-light-muted text-sm leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  <span className="inline-flex items-center text-certifyd-blue text-sm font-heading font-medium">
                    <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
                      Learn more
                    </span>
                    <svg
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
