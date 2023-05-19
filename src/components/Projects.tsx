import { SectionLayout } from "../layout/SectionLayout";
import { projects } from "../mocks/projects";
import { ProjectCard } from "./ProjectCard";

interface Props {
  projectsRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Projects: React.FC<Props> = ({ projectsRef }) => {
  return (
    <SectionLayout
      title="Proyectos"
      reference={projectsRef}
      subtitle="Proyectos personales"
    >
      <div className="h-full grid xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        {projects.reverse().map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </SectionLayout>
  );
};
