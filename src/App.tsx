import { useRef } from "react";
import { Toaster } from "sonner";
import { Curriculum } from "./components/Curriculum";
import { Header } from "./components/Header";
import { Knowledge } from "./components/Knowledge";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { MainLayout } from "./layout/MainLayout";

export const App = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <MainLayout footerRef={footerRef}>
        <Navbar
          headerRef={headerRef}
          knowledgeRef={knowledgeRef}
          projectsRef={projectsRef}
          curriculumRef={curriculumRef}
          footerRef={footerRef}
        />
        <Header headerRef={headerRef} />
        <Knowledge knowledgeRef={knowledgeRef} />
        <Projects projectsRef={projectsRef} />
        <Curriculum curriculumRef={curriculumRef} />
      <Toaster richColors position="top-center"/>
      </MainLayout>
    </>
  );
};
