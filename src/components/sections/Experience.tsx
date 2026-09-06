import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { experience } from "../../data/experience";
import { getTechIcon } from "../../data/tech";
import { useLocale } from "../../hooks/useLocale";
import { texts } from "../../i18n/texts";
import type { Locale } from "../../data/types";

const MONTHS: Record<Locale, string[]> = {
  ES: ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],
  EN: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
};

/** "2022-11" → "nov 2022". */
const formatDate = (value: string, locale: Locale) => {
  const [year, month] = value.split("-");
  return `${MONTHS[locale][Number(month) - 1]} ${year}`;
};

export const Experience = () => {
  const { locale, t } = useLocale();

  return (
    <section id="work" className="mx-auto max-w-6xl border-x border-t border-line px-6 py-20 sm:py-24">
      <SectionHeading
        index="03"
        title={t(texts.work.title)}
        subtitle={t(texts.work.subtitle)}
      />

      <ol className="relative">
        {/* The spine of the timeline. */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-line"
        />

        {experience.map((job, i) => (
          <li key={job.id} className="relative pb-12 pl-8 last:pb-0">
            <Reveal delay={i * 0.09}>
              <span
                aria-hidden
                className={`absolute top-1.5 left-0 size-[15px] rounded-full border-2 ${
                  job.end
                    ? "border-line-strong bg-void"
                    : "border-brand-bright bg-brand/30 shadow-[0_0_14px_var(--color-brand)]"
                }`}
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="font-mono text-xs text-faint">
                  {formatDate(job.start, locale)} —{" "}
                  {job.end ? formatDate(job.end, locale) : t(texts.work.present)}
                </span>
              </div>

              <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand-bright">
                {t(job.position)}
                <span className="text-faint">·</span>
                <span className="font-mono text-xs text-faint">
                  {t(job.location)}
                </span>
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {t(job.description)}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {job.stack.map((tech) => {
                  const icon = getTechIcon(tech);
                  return icon ? (
                    <img
                      key={tech}
                      src={icon}
                      alt={tech}
                      title={tech}
                      loading="lazy"
                      className="size-4 opacity-60 transition-opacity hover:opacity-100"
                    />
                  ) : null;
                })}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
};
