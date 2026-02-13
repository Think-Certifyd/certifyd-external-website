import { GRAPHIC_TILT } from "@/lib/constants";

export function ComplianceDash() {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative bg-navy-light border border-navy-border rounded-lg overflow-hidden ${GRAPHIC_TILT.left} shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Compliance Dashboard
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-accent-success font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse" />
            Live
          </span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 p-5">
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-certifyd-blue">28</div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">Verified</div>
          </div>
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-accent-warning">2</div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">Pending</div>
          </div>
          <div className="bg-navy-lighter rounded-md p-3 text-center">
            <div className="font-heading text-2xl font-bold text-accent-success">93%</div>
            <div className="text-[10px] text-text-on-dark-muted uppercase tracking-wider mt-0.5">Score</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-5 pb-4">
          <div className="w-full h-2 bg-navy-lighter rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-certifyd-blue to-certifyd-blue-light rounded-full"
              style={{ width: "93%" }}
            />
          </div>
        </div>

        {/* Weekly trend chart */}
        <div className="px-5 pb-4">
          <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-2">
            Weekly Trend
          </div>
          <div className="flex items-end gap-1.5 h-12">
            {[75, 82, 78, 88, 85, 91, 93].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm bg-certifyd-blue/60"
                  style={{ height: `${(h / 100) * 48}px` }}
                />
                <span className="text-[8px] text-text-on-dark-muted">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Generate report button */}
        <div className="px-5 pb-4">
          <div className="bg-certifyd-blue/10 border border-certifyd-blue/20 rounded-md px-4 py-2.5 flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span className="text-xs text-certifyd-blue font-heading font-medium">
              Generate Audit Report
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2.5 border-t border-navy-border bg-navy-lighter/50 flex items-center justify-between">
          <span className="text-[10px] text-text-on-dark-muted">
            Last updated: <span className="text-text-on-dark">Just now</span>
          </span>
          <span className="text-[10px] text-accent-success font-medium">
            Audit-ready
          </span>
        </div>
      </div>
    </div>
  );
}
