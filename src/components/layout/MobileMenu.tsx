"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[calc(100vw-3rem)] bg-navy shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5">
            <img
              src="/logos/certifyd-logo-white.svg"
              alt={COMPANY.name}
              className="h-7 w-auto"
              style={{ width: "100px" }}
            />
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm p-2 text-text-on-dark-muted transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-sm px-3 py-3 text-base font-medium transition-colors ${
                      isActive(item.href) && !item.children
                        ? "text-white bg-navy-light"
                        : "text-text-on-dark-muted hover:text-white hover:bg-navy-light"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-navy-border pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className={`block rounded-sm px-3 py-2 text-sm transition-colors ${
                              isActive(child.href)
                                ? "text-white bg-navy-light"
                                : "text-text-on-dark-muted hover:text-white hover:bg-navy-light"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="border-t border-navy-border px-6 py-6">
            <Link
              href="/contact/"
              onClick={onClose}
              className="block w-full rounded-sm bg-certifyd-blue px-5 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-certifyd-blue-light"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
