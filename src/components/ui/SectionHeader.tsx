import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  dark = true,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={clsx(isCenter ? "text-center mx-auto" : "text-left")}>
      {badge && (
        <span
          className={clsx(
            "inline-block px-3 py-1 text-xs font-medium rounded-full mb-4",
            dark
              ? "bg-certifyd-blue/15 text-certifyd-blue"
              : "bg-certifyd-blue/10 text-certifyd-blue"
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={clsx(
          "font-heading text-3xl lg:text-4xl font-bold",
          dark ? "text-text-on-dark" : "text-text-on-light"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "text-lg mt-4 max-w-2xl",
            isCenter && "mx-auto",
            dark ? "text-text-on-dark-muted" : "text-text-on-light-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
