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
 * How many copies of the list to render. The row must stay full even on
 * wide screens while one copy is sliding out, so this needs to cover more
 * than twice the widest viewport we care about.
 */
const TRACK_COPIES = 4;

/**
 * One full pass of the logo list. Two of these sit side by side and both
 * slide left by exactly their own width, so as the first exits the second
 * has already taken its place — the loop has no seam and cannot drift.
 */
const Track = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div
    aria-hidden={ariaHidden}
    className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-16 pr-16 sm:gap-20 sm:pr-20"
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

      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {/* Enough copies to span any viewport; only the first is announced. */}
        {Array.from({ length: TRACK_COPIES }, (_, i) => (
          <Track key={i} ariaHidden={i > 0} />
        ))}
      </div>
    </section>
  );
};
