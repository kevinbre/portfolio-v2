/**
 * Page background. vite.dev keeps this restrained: a flat near-black field,
 * one violet bloom behind the hero, and a faint grid that fades out.
 */
export const Backdrop = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="grid-bg absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_0%,black_10%,transparent_65%)]" />
    <div className="absolute -top-56 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[140px]" />
    <div className="absolute top-[60%] -right-52 h-[420px] w-[480px] rounded-full bg-brand-dim/12 blur-[130px]" />
  </div>
);
