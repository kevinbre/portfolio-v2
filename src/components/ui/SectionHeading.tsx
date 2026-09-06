import { Reveal } from "./Reveal";

/**
 * Shared section header: a monospace index marker plus title and subtitle,
 * so every section starts with the same rhythm.
 */
export const SectionHeading = ({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) => (
  <Reveal className="mb-12 flex flex-col gap-3">
    <span className="font-mono text-xs tracking-[0.2em] text-brand-bright">
      {index}
    </span>
    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
      {title}
    </h2>
    <p className="max-w-xl text-sm leading-relaxed text-muted">{subtitle}</p>
  </Reveal>
);
