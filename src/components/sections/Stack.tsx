import { Reveal } from "../ui/Reveal";
import { RevealGroup } from "../ui/RevealGroup";
import { SectionHeading } from "../ui/SectionHeading";
import { getTechIcon, techGroups } from "../../data/tech";
import { useLocale } from "../../hooks/useLocale";
import { texts } from "../../i18n/texts";

export const Stack = () => {
  const { t } = useLocale();

  return (
    <section id="stack" className="mx-auto max-w-6xl border-x border-t border-line px-6 py-20 sm:py-24">
      <SectionHeading
        index="02"
        title={t(texts.stack.title)}
        subtitle={t(texts.stack.subtitle)}
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
        {techGroups.map((group, i) => (
          <Reveal key={group.id} delay={i * 0.06} className="bg-abyss">
            <div className="h-full p-6 sm:p-7">
              <h3 className="mb-5 font-mono text-xs tracking-[0.16em] text-faint uppercase">
                {t(group.label)}
              </h3>
              <RevealGroup stagger={0.045} className="flex flex-wrap gap-2.5">
                {group.items.map((item, i) => {
                  const icon = getTechIcon(item.value);
                  return (
                    <div
                      key={item.value}
                      className="group flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-muted transition-colors hover:border-brand/50 hover:text-fg"
                    >
                      {icon && (
                        <img
                          src={icon}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          className="animate-float size-4 transition-transform duration-200 group-hover:scale-110"
                          style={{ animationDelay: `${(i * 0.4 + item.value.length * 0.12).toFixed(2)}s` }}
                        />
                      )}
                      {item.title}
                    </div>
                  );
                })}
              </RevealGroup>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
