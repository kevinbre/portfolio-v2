import { useLocale } from "../../hooks/useLocale";
import type { Locale } from "../../data/types";

const OPTIONS: Locale[] = ["ES", "EN"];

/** Two-state segmented toggle with a sliding indicator. */
export const LocaleSwitch = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex items-center rounded-full border border-line bg-surface p-0.5 font-mono text-[11px]"
    >
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-brand/25 ring-1 ring-brand/50 transition-transform duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(${locale === "ES" ? 0 : 100}%)` }}
      />
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`relative z-10 w-9 rounded-full py-1 transition-colors ${
            locale === option ? "text-fg" : "text-faint hover:text-muted"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
