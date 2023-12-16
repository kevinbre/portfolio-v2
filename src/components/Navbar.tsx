import { Divide as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { MenuMobile } from "./MenuMobile";
import { Language } from "./Language";
import { GlobalContext } from "../context/GlobalContext";
import { siteTexts } from "../i18n/siteTexts";
import { Logo } from "./Logo";

interface Props {
  headerRef: React.MutableRefObject<null | HTMLDivElement>;
  knowledgeRef: React.MutableRefObject<null | HTMLDivElement>;
  projectsRef: React.MutableRefObject<null | HTMLDivElement>;
  curriculumRef: React.MutableRefObject<null | HTMLDivElement>;
  footerRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Navbar: React.FC<Props> = ({
  headerRef,
  knowledgeRef,
  projectsRef,
  curriculumRef,
  footerRef,
}) => {
  const [isSelected, setIsSelected] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const breakpoint = useBreakpoint();
  const { language } = useContext(GlobalContext);

  const { navbar } = siteTexts[language].components;

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
        className="font-bold text-lg "
        onClick={() => navigateToRef(headerRef, 1)}
      >
        <Logo />
      </div>
      <div className="flex gap-4 items-center">
        <MenuMobile openMenu={openMenu} mobile={isMobile}>
          <ul className="flex gap-4 flex-col lg:flex-row">
            <li
              className={`${liStyles} ${
                isSelected === 1 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(headerRef, 1)}
            >
              {navbar.home}
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 2 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(knowledgeRef, 2)}
            >
              {navbar.knowledge}
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 3 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(projectsRef, 3)}
            >
              {navbar.projects}
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 4 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(curriculumRef, 4)}
            >
              {navbar.cv}
            </li>
            <li
              className={`${liStyles} ${
                isSelected === 5 ? "text-yellow-400" : ""
              }`}
              onClick={() => navigateToRef(footerRef, 5)}
            >
              {navbar.contact}
            </li>
            <li className="flex items-center justify-center">
              <Language onClick={() => setOpenMenu(false)} />
            </li>
          </ul>
        </MenuMobile>

        {isMobile && (
          <Hamburger
            onToggle={() => setOpenMenu(!openMenu)}
            toggled={openMenu}
          />
        )}
      </div>
    </nav>
  );
};
