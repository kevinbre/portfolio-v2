import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useLocale } from "../../hooks/useLocale";
import { texts } from "../../i18n/texts";

const stats = [
  { value: "8+", label: { ES: "Años de experiencia", EN: "Years of experience" } },
  { value: "6", label: { ES: "Empresas", EN: "Companies" } },
  {
    value: "Lic.",
    label: { ES: "en Sistemas", EN: "in Systems" },
  },
];

export const About = () => {
  const { t } = useLocale();

  return (
    <section id="about" className="mx-auto max-w-6xl border-x border-line px-6 py-20 sm:py-24">
      <SectionHeading
        index="01"
        title={t(texts.about.title)}
        subtitle={t(texts.about.subtitle)}
      />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            {t(texts.about.body)}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-abyss px-5 py-6">
                <dt className="font-mono text-2xl font-semibold text-brand-bright">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-faint">{t(stat.label)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};
