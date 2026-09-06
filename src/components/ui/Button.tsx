import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none " +
  "text-sm px-6 h-11 whitespace-nowrap";

/* vite.dev's primary is an outlined button that glows violet — not a fill. */
const variants: Record<Variant, string> = {
  primary:
    "glow-outline text-fg bg-brand/10 hover:bg-brand/20 " +
    "hover:shadow-[0_0_34px_-2px_var(--color-brand-bright)]",
  secondary:
    "text-fg bg-surface border border-line hover:border-line-strong hover:bg-raised",
  ghost: "text-muted hover:text-fg hover:bg-surface",
};

interface Props extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  download?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = "primary",
  href,
  download,
  className = "",
  ...rest
}: Props) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (!href) {
    return (
      <button className={classes} {...(rest as ComponentPropsWithoutRef<"button">)}>
        {children}
      </button>
    );
  }

  /* Downloads stay same-tab; outbound links open in a new one. */
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={classes}
      {...(download ? { download: "" } : {})}
      {...(external && !download
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {children}
    </a>
  );
};
