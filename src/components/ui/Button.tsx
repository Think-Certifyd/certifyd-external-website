import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<string, string> = {
  primary: "bg-certifyd-blue text-white hover:bg-certifyd-blue-light",
  secondary: "border border-current bg-transparent hover:bg-white/10",
  ghost: "hover:underline",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
