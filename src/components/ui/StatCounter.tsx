"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface StatCounterProps {
  value: string;
  label: string;
  dark?: boolean;
}

function parseValue(value: string) {
  const match = value.match(/^([^0-9]*)([0-9][0-9,.]*)(.*)$/);
  if (!match) {
    return { prefix: "", number: 0, suffix: "", hasCommas: false, decimalPlaces: 0 };
  }
  const prefix = match[1];
  const numericStr = match[2].replace(/,/g, "");
  const number = parseFloat(numericStr);
  const suffix = match[3];
  const hasCommas = match[2].includes(",");
  const decimalPlaces = numericStr.includes(".")
    ? numericStr.split(".")[1].length
    : 0;

  return { prefix, number, suffix, hasCommas, decimalPlaces };
}

function formatNumber(num: number, hasCommas: boolean, decimalPlaces: number) {
  let formatted =
    decimalPlaces > 0 ? num.toFixed(decimalPlaces) : Math.floor(num).toString();

  if (hasCommas) {
    const parts = formatted.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formatted = parts.join(".");
  }

  return formatted;
}

export function StatCounter({ value, label, dark = true }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  const { prefix, number, suffix, hasCommas, decimalPlaces } =
    parseValue(value);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const duration = 1500;
            const startTime = performance.now();

            function animate(currentTime: number) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const currentValue = eased * number;

              setDisplayValue(formatNumber(currentValue, hasCommas, decimalPlaces));

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            }

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, number, hasCommas, decimalPlaces]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={clsx(
          "font-heading text-4xl lg:text-5xl font-bold",
          dark ? "text-white" : "text-certifyd-blue"
        )}
      >
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <p
        className={clsx(
          "text-sm mt-2",
          dark ? "text-text-on-dark-muted" : "text-text-on-light-muted"
        )}
      >
        {label}
      </p>
    </div>
  );
}
