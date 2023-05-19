import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { MenuMobile } from "./MenuMobile";

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

  useEffect(() => {
    openMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [openMenu]);

  const liStyles = `cursor-pointer hover:text-yellow-400 flex items-center`;
  const isMobile = breakpoint.is.sm || breakpoint.is.md || breakpoint.is.lg;

  return (
    <nav
      className="flex justify-between px-6 h-14 items-center fixed w-full top-0 left-0 backdrop-filter backdrop-blur-lg z-20 bg-neutral-950/80"
      ref={headerRef}
    >
      <div
        className="font-bold text-lg cursor-pointer group flex"
        onClick={() => navigateToRef(headerRef, 1)}
      >
        <div
          className={`text-white group-hover:text-yellow-400 transition-all`}
        >
          <span className="group-hover:pr-2 transition-all">&lt;</span>Ke
        </div>
        <div
          className={`group-hover:text-white transition-all text-yellow-400`}
        >
          v<span className="group-hover:pl-2 transition-all">/&gt;</span>
        </div>
      </div>
      <div className="">
        {isMobile && (
          <Hamburger
            onToggle={() => setOpenMenu(!openMenu)}
            toggled={openMenu}
          />
        )}
        <MenuMobile openMenu={openMenu} mobile={isMobile}>
          <ul className="flex gap-4 flex-col lg:flex-row">
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
        </MenuMobile>
      </div>
    </nav>
  );
};
