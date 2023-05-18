import { useState } from "react";
import { Burguer } from "./Burguer";
import { Divide as Hamburger } from "hamburger-react";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props {
  headerRef: React.MutableRefObject<null | HTMLDivElement>;
  knowledgeRef: React.MutableRefObject<null | HTMLDivElement>;
  projectsRef: React.MutableRefObject<null | HTMLDivElement>;
  curriculumRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Navbar: React.FC<Props> = ({
  headerRef,
  knowledgeRef,
  projectsRef,
  curriculumRef,
}) => {
  const [isSelected, setIsSelected] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const breakpoint = useBreakpoint();

  const navigateToRef = (
    ref: React.MutableRefObject<null | HTMLDivElement>,
    selected: number
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    setIsSelected(selected);
    setOpenMenu(false);
  };

  const liStyles = `cursor-pointer hover:text-yellow-400 flex items-center`;
  const isMobile = breakpoint.is.sm || breakpoint.is.md;

  return (
    <nav
      className="flex justify-between px-6 h-14 items-center sticky top-0 left-0 backdrop-filter backdrop-blur-lg z-20 bg-neutral-950/80"
      ref={headerRef}
    >
      <div
        className="font-bold text-lg cursor-pointer group"
        onClick={() => navigateToRef(headerRef, 1)}
      >
        <span
          className={`text-white group-hover:text-yellow-400 transition-all`}
        >
          &lt; Ke
        </span>
        <span
          className={`group-hover:text-white transition-all text-yellow-400`}
        >
          v /&gt;
        </span>
      </div>
      <div className="">
        {isMobile && (
          <Hamburger
            onToggle={() => setOpenMenu(!openMenu)}
            toggled={openMenu}
          />
        )}
        <Burguer openMenu={openMenu} mobile={isMobile}>
          <ul className="flex gap-4 flex-col md:flex-row">
            <li
              className={`${liStyles} ${
                isSelected === 1 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(headerRef, 1)}
            >
              Inicio
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 2 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(knowledgeRef, 2)}
            >
              Conocimientos
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 3 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(projectsRef, 3)}
            >
              Proyectos
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 4 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(curriculumRef, 4)}
            >
              Curriculum
            </li>
          </ul>
        </Burguer>
      </div>
    </nav>
  );
};
