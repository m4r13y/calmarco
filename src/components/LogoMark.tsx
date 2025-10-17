import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  title?: string;
};

/**
 * LogoMark — simple geometric "M" mark that inherits currentColor.
 * Use className like "h-8 w-8 text-primary" to style.
 */
export function LogoMark({ className, title = "Marley Senior Services" }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("inline-block", className)}
    >
      {title ? <title>{title}</title> : null}
      {/* Subtle rounded container stroke for balance */}
      <rect x="4" y="4" width="56" height="56" rx="14" ry="14" fill="none" stroke="currentColor" opacity="0.2" />
      {/* Stylized M */}
      <path
        d="M16 46 L24 18 L32 34 L40 18 L48 46"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default LogoMark;
