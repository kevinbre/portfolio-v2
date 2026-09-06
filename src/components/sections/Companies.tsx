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

export const Companies = () => {
  const { t } = useLocale();

  /* Duplicated once so the marquee can loop without a visible seam. */
  const track = [...companies, ...companies];

  return (
    <section className="border-y border-line py-14">
      <p className="mb-10 px-6 text-center text-sm text-faint">
        {t(texts.work.trustedBy)}
      </p>

      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[marquee_36s_linear_infinite] items-center gap-16 px-8 group-hover:[animation-play-state:paused] sm:gap-20">
          {track.map((company, i) => {
            const duplicate = i >= companies.length;
            const logo = <CompanyLogo company={company} />;
            return (
              <div
                key={`${company.id}-${i}`}
                aria-hidden={duplicate}
                className="flex shrink-0 items-center text-muted opacity-55 transition-opacity duration-300 hover:opacity-100"
              >
                {company.url ? (
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={duplicate ? -1 : 0}
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
      </div>
    </section>
  );
};
