const APPLICANTS = [
  { name: "Maria Garcia", status: "full", label: "Full Rights" },
  { name: "Amir Patel", status: "warning", label: "Graduate Visa" },
  { name: "Sophie Turner", status: "full", label: "Full Rights" },
  { name: "Kenji Tanaka", status: "warning", label: "Needs Sponsorship" },
];

export function RecruitmentScreening() {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative bg-navy-light border border-navy-border rounded-lg overflow-hidden rotate-1 group-hover:rotate-0 transition-transform duration-500 ease-out shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Applicant Screening
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-accent-success font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            Live
          </span>
        </div>

        {/* Applicant rows */}
        <div className="p-5 space-y-0">
          {APPLICANTS.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between py-3 border-b border-navy-border/50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-navy-lighter flex items-center justify-center">
                  <span className="text-[10px] font-bold text-text-on-dark-muted">
                    {a.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <span className="text-sm text-text-on-dark font-medium">
                  {a.name}
                </span>
              </div>
              <span
                className={`text-[10px] font-heading font-semibold px-2.5 py-1 rounded-full ${
                  a.status === "full"
                    ? "bg-accent-success/15 text-accent-success"
                    : "bg-accent-warning/15 text-accent-warning"
                }`}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>

        {/* Stats footer */}
        <div className="px-5 py-3 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <span className="text-[10px] text-text-on-dark-muted">
            Pre-screened: <span className="font-heading font-bold text-certifyd-blue">127</span>
          </span>
          <span className="text-[10px] text-text-on-dark-muted">
            Flagged: <span className="font-heading font-bold text-accent-warning">12</span>
          </span>
        </div>
      </div>
    </div>
  );
}
