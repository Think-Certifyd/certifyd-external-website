import Image from "next/image";
import { TEAM } from "@/lib/constants";

export function TeamCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {TEAM.map((member) => (
        <div
          key={member.name}
          className="bg-white border border-warm-border rounded-sm p-8 text-center"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-warm-gray flex items-center justify-center mb-6 overflow-hidden">
            {member.photo ? (
              <Image
                src={member.photo}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="font-heading text-2xl font-bold text-text-on-light-muted">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            )}
          </div>

          <h3 className="font-heading text-lg font-semibold text-text-on-light">
            {member.name}
          </h3>
          <p className="text-certifyd-blue text-sm font-medium mt-1">
            {member.title}
          </p>
          <p className="text-text-on-light-muted text-sm leading-relaxed mt-4">
            {member.description}
          </p>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-on-light-muted hover:text-certifyd-blue transition-colors mt-4 text-sm"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
