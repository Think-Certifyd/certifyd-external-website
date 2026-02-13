import Image from "next/image";
import { GRAPHIC_TILT } from "@/lib/constants";

export function QRScanGraphic() {
  return (
    <div className="relative group flex items-center justify-center">
      {/* Background glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-20 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,89,255,0.4), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Two overlapping phone mockups */}
      <div className="relative w-full max-w-sm mx-auto h-80 lg:h-96">
        {/* Back phone — QR code */}
        <div className={`absolute left-0 top-0 w-44 lg:w-52 h-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-navy-border shadow-2xl ${GRAPHIC_TILT.phoneBack}`}>
          <Image
            src="/app/scan-qr-mockup.png"
            alt="Certifyd QR code screen"
            fill
            className="object-cover object-top"
            sizes="208px"
          />
        </div>

        {/* Front phone — Verification result */}
        <div className={`absolute right-0 top-8 w-44 lg:w-52 h-72 lg:h-80 rounded-2xl overflow-hidden border-2 border-navy-border shadow-2xl ${GRAPHIC_TILT.phoneFront} z-10`}>
          <Image
            src="/app/hero-mockup-2.png"
            alt="Certifyd identity verification confirmed"
            fill
            className="object-cover object-top"
            sizes="208px"
          />
        </div>

        {/* Connecting indicator */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-10 h-10 rounded-full bg-certifyd-blue flex items-center justify-center shadow-lg shadow-certifyd-blue/30">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
