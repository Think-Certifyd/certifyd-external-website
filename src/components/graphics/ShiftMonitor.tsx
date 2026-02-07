const STAFF = [
  { name: "Sarah Johnson", role: "Night Care", time: "22:00", verified: true },
  { name: "Emma Williams", role: "Night Care", time: "22:05", verified: true },
  { name: "David Lee", role: "Support", time: "22:10", verified: true },
];

export function ShiftMonitor() {
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
            Tonight&apos;s Shift
          </span>
          <span className="text-[10px] text-certifyd-blue font-heading font-medium">
            Oakwood Care
          </span>
        </div>

        {/* Verification status */}
        <div className="px-5 pt-5 pb-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-accent-success/15 flex items-center justify-center">
              <svg className="w-4 h-4 text-accent-success" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-accent-success">
                On Shift: 3/3 Verified
              </div>
              <div className="text-[10px] text-text-on-dark-muted">
                All staff identity confirmed
              </div>
            </div>
          </div>
        </div>

        {/* Staff list */}
        <div className="px-5 pb-3">
          <div className="space-y-0">
            {STAFF.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between py-2.5 border-t border-navy-border/50"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-navy-lighter flex items-center justify-center">
                    <span className="text-[8px] font-bold text-text-on-dark-muted">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-text-on-dark font-medium">
                      {s.name}
                    </span>
                    <span className="text-[10px] text-text-on-dark-muted ml-2">
                      {s.role}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-accent-success" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-[10px] text-text-on-dark-muted">
                    {s.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family view badge */}
        <div className="px-5 py-3 border-t border-navy-border bg-navy-lighter/50">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-certifyd-blue" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
            <span className="text-[10px] text-certifyd-blue font-heading font-medium">
              Family View Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
