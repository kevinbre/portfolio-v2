import { useRef } from "react";
import { Header } from "./components/Header";
import { Knowledge } from "./components/Knowledge";
import { Projects } from "./components/Projects";
import { MainLayout } from "./layout/MainLayout";
import { Navbar } from "./components/Navbar";
import { Curriculum } from "./components/Curriculum";

export const App = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);

  return (
    <MainLayout>
      <Navbar
        headerRef={headerRef}
        knowledgeRef={knowledgeRef}
        projectsRef={projectsRef}
        curriculumRef={curriculumRef}
      />
      <Header headerRef={headerRef} />
      <Knowledge knowledgeRef={knowledgeRef} />
      <Projects projectsRef={projectsRef} />
      <Curriculum curriculumRef={curriculumRef} />
    </MainLayout>
  );
};
