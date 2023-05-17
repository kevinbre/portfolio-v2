import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ColorSelector } from "./ColorSelector";

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

  const { siteColor } = useContext(GlobalContext);

  const navigateToRef = (
    ref: React.MutableRefObject<null | HTMLDivElement>,
    selected: number
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

    setIsSelected(selected);
  };

  const liStyles = `cursor-pointer hover:text-${siteColor}-400 flex items-center`;

  return (
    <nav
      className="flex justify-between px-6 h-14 items-center sticky top-0 left-0 backdrop-filter backdrop-blur-lg"
      ref={headerRef}
    >
      <div
        className="font-bold text-lg cursor-pointer group"
        onClick={() => navigateToRef(headerRef, 1)}
      >
        <span
          className={`text-white group-hover:text-${siteColor}-400 transition-all`}
        >
          &lt; Ke
        </span>
        <span
          className={`group-hover:text-white transition-all text-${siteColor}-400`}
        >
          v /&gt;
        </span>
      </div>

      <ul className="flex gap-4">
        <li
          className={`${liStyles} ${
            isSelected === 1 ? `text-${siteColor}-400` : ""
          }`}
          onClick={() => navigateToRef(headerRef, 1)}
        >
          Inicio
        </li>
        <li
          className={`${liStyles} ${
            isSelected === 2 ? `text-${siteColor}-400` : ""
          }`}
          onClick={() => navigateToRef(knowledgeRef, 2)}
        >
          Conocimientos
        </li>
        <li
          className={`${liStyles} ${
            isSelected === 3 ? `text-${siteColor}-400` : ""
          }`}
          onClick={() => navigateToRef(projectsRef, 3)}
        >
          Proyectos
        </li>
        <li
          className={`${liStyles} ${
            isSelected === 4 ? `text-${siteColor}-400` : ""
          }`}
          onClick={() => navigateToRef(curriculumRef, 4)}
        >
          Curriculum
        </li>
        <li className="flex gap-4 items-center">
          <ColorSelector />
        </li>
      </ul>
    </nav>
  );
};
