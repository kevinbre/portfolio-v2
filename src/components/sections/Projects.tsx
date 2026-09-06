import { RevealGroup } from "../ui/RevealGroup";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { publishedProjects } from "../../data/projects";
import { useLocale } from "../../hooks/useLocale";
import { texts } from "../../i18n/texts";

export const Projects = () => {
  const { t } = useLocale();

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-x border-t border-line px-6 py-20 sm:py-24"
    >
      <SectionHeading
        index="04"
        title={t(texts.projects.title)}
        subtitle={t(texts.projects.subtitle)}
      />

      {publishedProjects.length === 0 ? (
        <p className="text-sm text-faint">{t(texts.projects.empty)}</p>
      ) : (
        /* Featured cards span two columns; grid-flow-dense backfills the row. */
        <div className="grid grid-flow-dense gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {publishedProjects.map((project, i) => (
            <RevealGroup
              key={project.id}
              delay={(i % 3) * 0.08}
              className={`h-full ${project.featured ? "sm:col-span-2" : ""}`}
              childClassName="h-full"
            >
              <ProjectCard project={project} />
            </RevealGroup>
          ))}
        </div>
      )}
    </section>
  );
};
