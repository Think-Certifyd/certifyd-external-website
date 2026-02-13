import { GRAPHIC_TILT } from "@/lib/constants";

const TEAM = [
  { name: "Sarah Johnson", role: "Operations Manager", status: "verified" as const },
  { name: "David Chen", role: "Site Engineer", status: "verified" as const },
  { name: "Emma Williams", role: "Senior Developer", status: "verified" as const },
  { name: "James Wilson", role: "Contractor", status: "pending" as const },
  { name: "Maria Garcia", role: "Agency Staff", status: "verified" as const },
];

export function TeamVerification() {
  const verifiedCount = TEAM.filter((m) => m.status === "verified").length;

  return (
    <div className="relative group">
      <div
        className="absolute -inset-4 rounded-lg opacity-30 blur-2xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.3), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className={`relative bg-navy-light border border-navy-border rounded-lg overflow-hidden ${GRAPHIC_TILT.right} shadow-2xl`}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy-border">
          <span className="font-heading text-xs font-semibold text-text-on-dark-muted uppercase tracking-wider">
            Your Verified Workforce
          </span>
          <span className="font-heading text-xs font-bold text-certifyd-blue">
            {verifiedCount}/{TEAM.length} Verified
          </span>
        </div>

        {/* Team compliance bar */}
        <div className="px-5 pt-4 pb-2">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-text-on-dark-muted">Team Compliance</span>
            <span className="font-heading text-sm font-bold text-certifyd-blue">
              {Math.round((verifiedCount / TEAM.length) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 bg-navy-lighter rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-certifyd-blue to-certifyd-blue-light rounded-full"
              style={{ width: `${(verifiedCount / TEAM.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Team list */}
        <div className="px-5 pb-2">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex items-center justify-between py-2.5 border-t border-navy-border/50"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-navy-lighter flex items-center justify-center">
                  <span className="text-[9px] font-bold text-text-on-dark-muted">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-text-on-dark font-medium">
                    {member.name}
                  </span>
                  <span className="text-[10px] text-text-on-dark-muted ml-2">
                    {member.role}
                  </span>
                </div>
              </div>
              {member.status === "verified" ? (
                <svg className="w-4 h-4 text-accent-success shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-accent-warning shrink-0 animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Invite row */}
        <div className="px-5 py-3 border-t border-navy-border bg-navy-lighter/50 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border border-dashed border-certifyd-blue/40 flex items-center justify-center">
            <svg className="w-3 h-3 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <span className="text-[10px] text-certifyd-blue font-heading font-medium">
            Invite team member
          </span>
        </div>
      </div>
    </div>
  );
}
