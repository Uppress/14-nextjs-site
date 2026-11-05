import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-moss text-ink hover:bg-[#c9e75a]"
      : "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.04]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="text-base">↗</span>
    </Link>
  );
}
