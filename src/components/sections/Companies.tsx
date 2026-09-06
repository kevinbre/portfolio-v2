import { useState } from "react";
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
      loading="lazy"
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

/**
 * Copies of the list laid end to end. The row must stay full on a wide
 * screen while the first copy is still sliding out, so this covers more
 * than twice the widest viewport we care about.
 */
const TRACK_COPIES = 4;

const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
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

  return (
    <section className="border-y border-line py-14">
      <p className="mb-10 px-6 text-center text-sm text-faint">
        {t(texts.work.trustedBy)}
      </p>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {/*
          One moving element holding every copy, shifted by the width of a
          single copy (25% of four). When it snaps back, copy 2 is exactly
          where copy 1 was, so the restart is invisible — animating each
          track on its own made the last one visibly jump to the front.

          Hovering pauses the row: clicking a moving logo used to open a
          different one, because the element under the cursor changed
          between press and release.
        */}
        <div className="flex w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused]">
          {Array.from({ length: TRACK_COPIES }, (_, i) => (
            <Track key={i} ariaHidden={i > 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
