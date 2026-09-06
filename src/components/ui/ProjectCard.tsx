import { useState } from "react";
import { FiArrowUpRight, FiGithub, FiLock } from "react-icons/fi";
import { getTechIcon } from "../../data/tech";
import { useLocale } from "../../hooks/useLocale";
import { useTilt } from "../../hooks/useTilt";
import { texts } from "../../i18n/texts";
import type { Project } from "../../data/types";

/** Stand-in artwork for projects with no screenshot yet. */
const Placeholder = ({ title }: { title: string }) => (
  <div className="grid-bg flex h-full w-full items-center justify-center bg-abyss">
    <span className="font-mono text-3xl font-semibold text-line-strong select-none">
      {title.slice(0, 2).toUpperCase()}
    </span>
  </div>
);

export const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLocale();
  const [imageFailed, setImageFailed] = useState(false);
  const { tilt, onPointerMove, onPointerLeave } = useTilt();

  const { title, description, image, deploy, repository, stack, tag } = project;
  const showImage = image && !imageFailed;
  /* The whole card links to the best available destination. */
  const primaryHref = deploy || repository;

  return (
    <article
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      /* Perspective lives on the wrapper so the rotation below reads as
         depth rather than a flat skew. */
      style={{ perspective: "1000px" }}
      className="group relative h-full"
    >
      <div
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          /* Snappy while tracking the cursor, eased on the way back to rest. */
          transition: tilt.active
            ? "transform 90ms linear"
            : "transform 600ms cubic-bezier(0.16,1,0.3,1)",
        }}
        className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-abyss transition-colors duration-300 group-hover:border-brand/60 group-hover:shadow-[0_0_36px_-14px_var(--color-brand)]"
      >
        {/* Sheen following the cursor across the card. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(380px circle at ${tilt.mx}% ${tilt.my}%, rgba(168,85,247,0.13), transparent 70%)`,
          }}
        />

        <div
          className={`relative overflow-hidden border-b border-line ${
            project.featured ? "aspect-[2/1]" : "aspect-[16/10]"
          }`}
        >
          {showImage ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <Placeholder title={title} />
          )}

          {tag && (
            <span className="absolute top-3 left-3 rounded-full border border-line bg-void/80 px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur-sm">
              {t(tag)}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="flex items-center gap-1.5 text-base font-semibold">
            {primaryHref ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                /* Stretched link: the card is clickable, the icons stay on top. */
                className="after:absolute after:inset-0 after:content-['']"
              >
                {title}
              </a>
            ) : (
              title
            )}
            {primaryHref && (
              <FiArrowUpRight className="size-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-bright" />
            )}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {t(description)}
          </p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <ul className="flex flex-wrap items-center gap-2">
              {stack.map((tech) => {
                const icon = getTechIcon(tech.value);
                return (
                  <li key={tech.value} title={tech.title}>
                    {icon ? (
                      <img
                        src={icon}
                        alt={tech.title}
                        loading="lazy"
                        className="size-[18px] opacity-70 transition-opacity group-hover:opacity-100"
                      />
                    ) : (
                      <span className="font-mono text-[10px] text-faint">
                        {tech.title}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="relative z-30 flex shrink-0 items-center gap-3 text-faint">
              {repository && (
                <a
                  href={repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} — ${t(texts.projects.repo)}`}
                  className="transition-colors hover:text-fg"
                >
                  <FiGithub className="size-4" />
                </a>
              )}
              {project.privateRepo && !repository && (
                <span
                  title={t(texts.projects.privateRepo)}
                  className="flex items-center gap-1 font-mono text-[10px] whitespace-nowrap"
                >
                  <FiLock className="size-3" />
                  {/* Without a link the card looks inert, so name the reason. */}
                  {!primaryHref && t(texts.projects.privateLabel)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
