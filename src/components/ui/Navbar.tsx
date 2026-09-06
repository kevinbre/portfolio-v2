import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { LocaleSwitch } from "./LocaleSwitch";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useLocale } from "../../hooks/useLocale";
import { links, texts } from "../../i18n/texts";
import { EASE_OUT_EXPO } from "../../lib/motion";

const SECTIONS = [
  { id: "about", label: texts.nav.about },
  { id: "stack", label: texts.nav.stack },
  { id: "work", label: texts.nav.work },
  { id: "projects", label: texts.nav.projects },
  { id: "contact", label: texts.nav.contact },
];

const SECTION_IDS = ["home", ...SECTIONS.map((s) => s.id)];

export const Navbar = () => {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock the page behind the mobile sheet. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-void/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold"
        >
          <span className="text-brand-bright transition-transform duration-200 group-hover:rotate-12">
            ◆
          </span>
          kevin
          <span className="text-faint">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                  active === section.id
                    ? "text-fg"
                    : "text-faint hover:text-muted"
                }`}
              >
                {t(section.label)}
                {active === section.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-px h-px bg-brand-bright"
                    transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 text-faint sm:flex">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-fg"
            >
              <FiGithub className="size-[17px]" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-fg"
            >
              <FiLinkedin className="size-[17px]" />
            </a>
          </div>

          <LocaleSwitch />

          {/* Hand-rolled burger: the old dependency didn't support React 19. */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t(texts.common.close) : t(texts.common.menu)}
            className="flex size-9 flex-col items-center justify-center gap-[5px] rounded-lg border border-line md:hidden"
          >
            <span
              className={`block h-px w-4 bg-fg transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-fg transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
            className="border-b border-line bg-void/95 backdrop-blur-xl md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-line/60 py-3 text-sm last:border-0 ${
                      active === section.id ? "text-brand-bright" : "text-muted"
                    }`}
                  >
                    {t(section.label)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
