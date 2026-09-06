import { toast } from "sonner";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { Button } from "../ui/Button";
import { Terminal } from "../ui/Terminal";
import { useLocale } from "../../hooks/useLocale";
import { links, texts } from "../../i18n/texts";

/**
 * The hero animates in with CSS rather than JS, so the content is painted
 * and readable even if scripts are slow, blocked, or the page is prerendered.
 * `.rise` is defined in index.css and honours prefers-reduced-motion.
 */
export const Hero = () => {
  const { locale, t } = useLocale();

  const terminalLines = [
    { prompt: "❯", text: "whoami", className: "text-fg" },
    { text: "kevin bredelis — software engineer", className: "text-muted" },
    { prompt: "❯", text: "cat stack.json", className: "text-fg" },
    {
      text: '["react", "typescript", "next.js", "nx"]',
      className: "text-brand-bright",
    },
    { prompt: "❯", text: "status --hiring", className: "text-fg" },
    { text: t(texts.hero.status), className: "text-term" },
  ];

  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 pt-32 pb-24 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:pt-40 lg:pb-28">
        <div className="flex flex-col">
          <p className="rise mb-6 flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-faint uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-term opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-term" />
            </span>
            {t(texts.hero.role)}
          </p>

          {/* Vite's headline treatment: solid white, tight, very large. */}
          <h1 className="rise rise-1 text-[2.75rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Kevin
            <br />
            Bredelis
          </h1>

          <p className="rise rise-2 mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t(texts.hero.tagline)}
          </p>

          <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projects">
              {t(texts.hero.viewWork)}
              <FiArrowDown className="size-4" />
            </Button>
            <Button
              href={links.cv[locale]}
              download
              variant="secondary"
              onClick={() => toast.success(t(texts.hero.downloaded))}
            >
              <FiDownload className="size-4" />
              {t(texts.hero.downloadCV)}
            </Button>
          </div>

          <div className="rise rise-4 mt-8 flex items-center gap-5 text-faint">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-fg"
            >
              <FiGithub className="size-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-fg"
            >
              <FiLinkedin className="size-5" />
            </a>
            <span className="h-4 w-px bg-line" />
            <span className="font-mono text-xs">{t(texts.hero.location)}</span>
          </div>
        </div>

        <div className="rise rise-3">
          <Terminal lines={terminalLines} />
        </div>
      </div>
    </section>
  );
};
