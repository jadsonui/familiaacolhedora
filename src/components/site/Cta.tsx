import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold tracking-tight transition-all duration-200 min-h-12 focus-visible:outline-3 active:scale-[0.98]";

const variants = {
  green:
    "bg-primary text-primary-foreground shadow-soft hover:bg-primary-deep hover:shadow-lift",
  red: "bg-destructive text-destructive-foreground shadow-soft hover:brightness-110 hover:shadow-lift",
  outline:
    "border-2 border-primary text-primary-deep bg-background hover:bg-primary-soft",
  white:
    "bg-background text-primary-deep shadow-soft hover:shadow-lift hover:bg-primary-soft",
} as const;

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  className?: string;
};

export function Cta({ href, children, variant = "green", external, className = "" }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {external && (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="ml-2 h-4 w-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      )}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
