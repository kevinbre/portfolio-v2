import { toast } from "sonner";
import { FiCopy, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../../hooks/useLocale";
import { links, texts } from "../../i18n/texts";

const socials = [
  { href: links.github, label: "GitHub", Icon: FiGithub },
  { href: links.linkedin, label: "LinkedIn", Icon: FiLinkedin },
  { href: links.whatsapp, label: "WhatsApp", Icon: SiWhatsapp },
];

export const Contact = () => {
  const { t } = useLocale();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      toast.success(t(texts.contact.copied));
    } catch {
      /* Clipboard can be blocked (insecure context, denied permission). */
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl border-x border-line px-6 py-20 sm:py-24">
        <Reveal className="flex flex-col items-center text-center">
          <span className="font-mono text-xs tracking-[0.2em] text-brand-bright">
            05
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            {t(texts.contact.title)}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            {t(texts.contact.subtitle)}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={`mailto:${links.email}`}>
              <FiMail className="size-4" />
              {t(texts.contact.cta)}
            </Button>
            <Button variant="secondary" onClick={copyEmail}>
              <FiCopy className="size-4" />
              <span className="font-mono text-xs">{links.email}</span>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-faint">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-fg"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-faint sm:flex-row">
          <span>
            © {new Date().getFullYear()} Kevin Bredelis.{" "}
            {t(texts.contact.rights)}
          </span>
          <span className="font-mono">
            {t(texts.contact.builtWith)} React · TypeScript · Vite
          </span>
        </div>
      </footer>
    </section>
  );
};
