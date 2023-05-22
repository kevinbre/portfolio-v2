import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { SectionLayout } from "../layout/SectionLayout";

import { siteTexts } from "../i18n/siteTexts";
import { ProjectCard } from "./ProjectCard";

interface Props {
  projectsRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Projects: React.FC<Props> = ({ projectsRef }) => {
  const { language } = useContext(GlobalContext);
  const { projects } = siteTexts[language].components;

  return (
    <SectionLayout
      title="Proyectos"
      reference={projectsRef}
      subtitle="Proyectos personales"
    >
      <div className="h-full grid xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        {projects.items.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </SectionLayout>
  );
};
