import { useEffect, useRef, useState } from "react";
import { companies } from "../../data/companies";
import { useLocale } from "../../hooks/useLocale";
import { texts } from "../../i18n/texts";
import type { Company } from "../../data/types";

/** Logo with a text fallback, so a missing file never leaves a gap. */
const CompanyLogo = ({ company }: { company: Company }) => {
  const [failed, setFailed] = useState(false);

  if (!company.logo || failed) {
    return (
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap">
        {company.name}
      </span>
    );
  }
  return (
    <img
      src={company.logo}
      alt={company.name}
      loading="eager"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
      /* Dark logos are forced to flat white; the rest keep their own colour.
         brightness-0 crushes them to black first so invert lands on pure white. */
      className={`h-7 w-auto max-w-[190px] object-contain ${
        company.invert ? "brightness-0 invert contrast-200" : ""
      }`}
    />
  );
};

/** Copies laid end to end, enough to cover a wide screen twice over. */
const TRACK_COPIES = 4;
/** Pixels per second the row travels. */
const SPEED = 34;

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    data-track
    aria-hidden={ariaHidden}
    className="flex shrink-0 items-center gap-16 pr-16 sm:gap-20 sm:pr-20"
  >
    {companies.map((company) => {
      const logo = <CompanyLogo company={company} />;
      return (
        <div
          key={company.id}
          className="flex shrink-0 items-center text-muted opacity-55 transition-opacity duration-300 hover:opacity-100"
        >
          {company.url ? (
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={ariaHidden ? -1 : 0}
            >
              {logo}
            </a>
          ) : (
            logo
          )}
        </div>
      );
    })}
  </div>
);

export const Companies = () => {
  const { t } = useLocale();
  const rowRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  /**
   * The row is driven frame by frame rather than by a CSS animation.
   *
   * A keyframed animation has to end and start over, and that restart is
   * perceptible — the row reads as a clip that loops rather than a belt that
   * keeps turning. Here the offset only ever grows and is wrapped with a
   * modulo, so there is no beginning and no end to notice: when the offset
   * passes one copy's width it silently resets to the identical position.
   */
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let offset = 0;
    let last = performance.now();
    let frame = 0;

    /**
     * Width of one copy, measured to sub-pixel precision.
     *
     * offsetLeft and scrollWidth round to whole pixels. At 1440px the real
     * width is 1269.45, so wrapping at 1269 dropped 0.45px every lap; that
     * error piled up until the row visibly snapped, which looked exactly
     * like the animation restarting. getBoundingClientRect keeps the
     * fraction, and the leftover is carried over instead of discarded.
     */
    const copyWidth = () => {
      const tracks = row.querySelectorAll<HTMLElement>("[data-track]");
      if (tracks.length < 2) {
        return row.getBoundingClientRect().width / TRACK_COPIES;
      }
      return (
        tracks[1].getBoundingClientRect().left -
        tracks[0].getBoundingClientRect().left
      );
    };

    let width = copyWidth();

    /* Logos are lazy-decoded, so a copy can still be growing on first paint;
       remeasure once images settle, and whenever the layout changes. */
    const remeasure = () => {
      const next = copyWidth();
      if (next > 0) {
        width = next;
        /* Keep the current position inside the new range, or the row would
           jump the moment the viewport changed. */
        offset %= width;
      }
    };
    window.addEventListener("resize", remeasure);
    const observer = new ResizeObserver(remeasure);
    observer.observe(row);

    const tick = (now: number) => {
      /* A backgrounded tab stops firing frames; without this cap it would
         return with a huge elapsed time and lurch forward. */
      const elapsed = Math.min(now - last, 100);
      last = now;

      if (!pausedRef.current && width > 0) {
        offset = (offset + (SPEED * elapsed) / 1000) % width;
        row.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", remeasure);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="border-y border-line py-14">
      <p className="mb-10 px-6 text-center text-sm text-faint">
        {t(texts.work.trustedBy)}
      </p>

      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        /* Pausing on hover keeps a moving logo from sliding out from under
           the cursor between press and release. */
        onPointerEnter={() => (pausedRef.current = true)}
        onPointerLeave={() => (pausedRef.current = false)}
      >
        <div ref={rowRef} className="flex w-max will-change-transform">
          {Array.from({ length: TRACK_COPIES }, (_, i) => (
            <Track key={i} ariaHidden={i > 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
