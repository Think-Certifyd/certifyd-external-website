import { GRAPHIC_TILT } from "@/lib/constants";

const ACTIVITY = [
  { name: "Mark Thompson", type: "Identity Verified", time: "Today", status: "verified" as const },
  { name: "Lisa Chen", type: "RTW Check", time: "Today", status: "verified" as const },
  { name: "Agency Worker", type: "Identity", time: "Just now", status: "pending" as const },
];

export function WorkforceCompliance() {
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
            Workforce Compliance
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
        <div className="px-5 pb-3">
          <div className="w-full h-2 bg-navy-lighter rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-certifyd-blue to-certifyd-blue-light rounded-full"
              style={{ width: "93%" }}
            />
          </div>
        </div>

        {/* Activity feed */}
        <div className="px-5 pb-2">
          <div className="text-[10px] font-semibold text-text-on-dark-muted uppercase tracking-wider mb-2">
            Recent Activity
          </div>
          {ACTIVITY.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between py-2 border-t border-navy-border/50"
            >
              <div className="flex items-center gap-2">
                {a.status === "verified" ? (
                  <svg className="w-3.5 h-3.5 text-accent-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-accent-warning shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                )}
                <span className="text-xs text-text-on-dark font-medium">{a.name}</span>
                <span className="text-[10px] text-text-on-dark-muted">{a.type}</span>
              </div>
              <span className="text-[10px] text-text-on-dark-muted">{a.time}</span>
            </div>
          ))}
        </div>

        {/* Audit ready badge */}
        <div className="px-5 py-3 border-t border-navy-border bg-navy-lighter/50">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
            </svg>
            <span className="text-[10px] text-certifyd-blue font-heading font-medium">
              One-Click Audit Report Ready
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
