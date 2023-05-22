export const code = {
  button: `
  interface Props {
    children: React.ReactNode;
    variant?: "outline" | "solid" | "icon";
    color?: "primary" | "secondary";
    link?: string;
    name?: string;
    download?: boolean;
  }
  
  export const Button: React.FC<Props> = ({
    children,
    variant = "solid",
    color = "primary",
    link,
    name = "button",
    download,
  }) => {
    const btnColor = {
      primary: {
        solid: text-black hover:text-white bg-yellow-400 hover:bg-yellow-600,
        outline: text-yellow-400 hover:text-yellow-400 border-2 border-yellow-400 hover:border-yellow-600,
        icon: text-yellow-400 hover:text-yellow-600 h-9 w-9 text-3xl,
      },
      secondary: {
        solid: "text-white bg-purple-600",
        outline: "",
        icon: "",
      },
    };
    const classes = {
      btnColor[color][variant]
    } flex justify-center items-center rounded-md transition-all {
      variant === "icon" ? "hover:text-4xl p-0" : "hover:scale-105 px-4 py-1"
    } font-medium;
    return (
      <>
        {link ? (
          <a href={link} className={classes} target="_blank" download={download}>
            {children}
          </a>
        ) : (
          <button className={classes} name={name}>
            {children}
          </button>
        )}
      </>
    );
  };
  
`,

  //Components Start
  footer: `  import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
  import { Button } from "./Button";
  import { siteTexts } from "../i18n/siteTexts";
  
  export const Footer: React.FC = () => {
    const getCurrentYear = () => {
      return new Date().getFullYear();
    };
  
    const { networks } = siteTexts;
  
    return (
      <footer className="flex items-center flex-col border-t border-yellow-400/5 bg-neutral-900/10">
        <div className="flex justify-between gap-4 py-8 px-20 w-full flex-col md:flex-row">
          <div className="flex flex-col justify-center items-center md:items-start">
            <span className="text-gray-300">Kevin Bredelis</span>
            <span className="text-yellow-400">Frontend developer</span>
          </div>
          <div className="flex gap-2 flex-col items-center md:items-start">
            <span className="font-medium text-gray-300">Contacto</span>
            <div className="flex gap-4">
              <Button variant="icon" link={networks.github}>
                <SiGithub />
              </Button>
              <Button variant="icon" link={networks.linkedin}>
                <SiLinkedin />
              </Button>
              <Button variant="icon" link={networks.whatsapp}>
                <SiWhatsapp />
              </Button>
              <Button variant="icon" link={networks.email}>
                <SiGmail />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-yellow-400/5 w-full gap-4 py-4 px-20 flex justify-center">
          © {getCurrentYear()} Kevin Bredelis
        </div>
      </footer>
    );
  };
  `,
  knowledge: `  import { useContext } from "react";
  import { GlobalContext } from "../context/GlobalContext";
  import { siteTexts } from "../i18n/siteTexts";
  import { SectionLayout } from "../layout/SectionLayout";
  import { technologies } from "../mocks/technologies";
  
  interface Props {
    knowledgeRef: React.MutableRefObject<null | HTMLDivElement>;
  }
  
  export const Knowledge: React.FC<Props> = ({ knowledgeRef }) => {
    const { language } = useContext(GlobalContext);
    const { knowledge } = siteTexts[language].components;
  
    return (
      <SectionLayout
        title={knowledge.title}
        reference={knowledgeRef}
        subtitle={knowledge.subtitle}
      >
        <div
          className="h-fit grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full gap-4 "
          style={{ perspective: "1500px" }}
        >
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="flex gap-4 h-fit transition-all"
            >
              <span className="flex flex-col gap-2 items-center">
                <img
                  src={technology.icon}
                  width={100}
                  height={100}
                  alt={{technology.name} icon
                  className={over:scale-95 transition-all hover:shadow-md rounded-3xl
                />
                <h3 className="text-white">{technology.name}</h3>
              </span>
            </div>
          ))}
        </div>
      </SectionLayout>
    );
  };
  `,
  language: `  import { GlobalContext } from "../context/GlobalContext";
  import { useContext } from "react";
  
  interface Props {
    onClick?: () => void;
  }
  
  export const Language: React.FC<Props> = ({ onClick = () => {} }) => {
    const { selectLanguage } = useContext(GlobalContext);
  
    const flagStyles = cursor-pointer hover:scale-105 transition-all;
  
    return (
      <div className="flex gap-2 items-center">
        <img
          src="/usa-flag.png"
          className={flagStyles}
          onClick={() => {
            selectLanguage("EN"), onClick();
          }}
          width={30}
        />
  
        <img
          src="/arg-flag.png"
          className={flagStyles}
          onClick={() => {
            selectLanguage("ES"), onClick();
          }}
          width={30}
        />
      </div>
    );
  };
  `,
  logo: `  export const Logo: React.FC = () => {
    return (
      <div className="cursor-pointer group flex  transition-all">
        <div className={text-white group-hover:text-yellow-400 flex}>
          <span className="group-hover:pr-2 transition-all">&lt;</span>
          <span className="w-0 group-hover:w-fit hidden group-hover:block">
            Ke
          </span>
        </div>
        <div
          className={group-hover:text-white transition-all text-yellow-400 flex}
        >
          <span className="w-0 group-hover:w-fit hidden group-hover:block">
            v
          </span>
          <span className="group-hover:pl-2 transition-all">/&gt;</span>
        </div>
      </div>
    );
  };
  `,
  menumobile: `  interface Props {
    children: React.ReactNode;
    mobile?: boolean;
    openMenu: boolean;
  }
  
  export const MenuMobile: React.FC<Props> = ({
    children,
    mobile = true,
    openMenu,
  }) => {
    return (
      <>
        {mobile ? (
          <div
            className={absolute bg-neutral-950/80 backdrop-filter backdrop-blur-lg border-0 top-[56px] {
              openMenu ? "h-[calc(100vh-56px)] py-20" : "h-0 invisible"
            } left-0 w-screen flex justify-center transition-all z-50}
          >
            {children}
          </div>
        ) : (
          <>{children}</>
        )}
      </>
    );
  };
  `,
  navbar: `  import { Divide as Hamburger } from "hamburger-react";
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
  
    const liStyles = cursor-pointer hover:text-yellow-400 flex items-center;
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
                className={{liStyles} {
                  isSelected === 1 ? "text-yellow-400" : ""
                }}
                onClick={() => navigateToRef(headerRef, 1)}
              >
                {navbar.home}
              </li>
              <li
                className={{liStyles} {
                  isSelected === 2 ? "text-yellow-400" : ""
                }}
                onClick={() => navigateToRef(knowledgeRef, 2)}
              >
                {navbar.knowledge}
              </li>
              <li
                className={{liStyles} {
                  isSelected === 3 ? "text-yellow-400" : ""
                }}
                onClick={() => navigateToRef(projectsRef, 3)}
              >
                {navbar.projects}
              </li>
              <li
                className={{liStyles} {
                  isSelected === 4 ? "text-yellow-400" : ""
                }}
                onClick={() => navigateToRef(curriculumRef, 4)}
              >
                {navbar.cv}
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
  `,
  projectcard: `  import { AiFillGithub } from "react-icons/ai";
  import { BiWorld } from "react-icons/bi";
  import { Project } from "../mocks/projects";
  
  interface Props {
    project: Project;
  }
  
  const techIcon: { [key: string]: string } = {
    react: "/icons/react.svg",
    typescript: "/icons/typescript.svg",
    javascript: "/icons/javascript.svg",
    html: "/icons/html.svg",
    css: "/icons/css.svg",
    sass: "/icons/sass.svg",
    tailwind: "/icons/tailwind.svg",
    node: "/icons/node.svg",
    express: "/icons/express.svg",
    mongodb: "/icons/mongodb.svg",
    postgresql: "/icons/postgresql.svg",
    nextjs: "/icons/nextjs.svg",
    redux: "/icons/redux.svg",
    vite: "/icons/vite.svg",
    php: "/icons/php.svg",
    mysql: "/icons/mysql.svg",
  };
  
  export const ProjectCard: React.FC<Props> = ({ project }) => {
    const { title, description, image, deploy, repository, technologie } =
      project;
  
    return (
      <div className="project-card w-80 flex flex-col gap-4 h-full">
        <div
          className={project-card__image bg-yellow-400 relative group w-80 h-[180px]}
        >
          <div
            className={absolute w-3 h-3 bg-yellow-400 top-0 left-0 z-0 group-hover:-rotate-45 origin-top-left transition-all}
          />
          <div
            className={absolute w-3 h-3 bg-yellow-400 bottom-0 right-0 z-0 group-hover:rotate-45 origin-bottom-right transition-all}
          />
          <div className="relative group-hover:translate-x-2 transition-all group-hover:-translate-y-2 before:origin-top-left before:rotate-45 z-10 w-full">
            <img src={image} alt={title} />
            <div
              className={absolute w-full text-white  h-full top-0 left-0 z-20 gap-2 group-hover:backdrop-blur-sm hidden group-hover:flex items-center justify-center bg-black/40}
            >
              {deploy.length > 0 && (
                <>
                  <a
                    href={deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={flex gap-1 items-center font-bold hover:text-yellow-400 transition-all hover:scale-110}
                  >
                    <BiWorld /> Deploy
                  </a>
                  |
                </>
              )}
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className={flex gap-1 items-center font-bold hover:text-yellow-400 transition-all hover:scale-110}
              >
                <AiFillGithub />
                Repo
              </a>
            </div>
          </div>
        </div>
  
        <div className="project-card__content w-full flex-col flex gap-2">
          <h3 className={text-yellow-400 font-semibold text-xl}>{title}</h3>
          <p>{description}</p>
          <div className="flex gap-2">
            <span className={text-yellow-400}>Stack</span>
            <div className="flex gap-4">
              {technologie.map((tech, index) => (
                <img
                  src={techIcon[tech]}
                  key={index}
                  alt={{tech} icon}
                  width={20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  `,
  projects: `  import { useContext } from "react";
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
  `,
  switch: `  interface Props {
    onClick: () => void;
  }
  
  export const Switch: React.FC<Props> = ({ onClick }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            onClick={() => onClick()}
          />
  
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
        </label>
        <span className="text-sm text-center font-medium text-gray-900 dark:text-gray-300">
          Efecto 3D
        </span>
      </div>
    );
  };
  `,
  title: `  interface Props {
    title: string;
    subtitle?: string;
  }
  
  export const Title: React.FC<Props> = ({ title, subtitle }) => {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <h2 className={text-yellow-400 text-3xl}>{title}</h2>
        {subtitle && <h3 className="text-medium text-center">{subtitle}</h3>}
      </div>
    );
  };
  `,
  vscode: `  import { useEffect, useState } from "react";
  import { BsChevronUp } from "react-icons/bs";
  import { DiJavascript1 } from "react-icons/di";
  import { HiOutlineInformationCircle } from "react-icons/hi";
  import { SiCss3, SiTypescript, SiVisualstudiocode } from "react-icons/si";
  import { VscFiles, VscJson } from "react-icons/vsc";
  import SyntaxHighlighter from "react-syntax-highlighter";
  import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
  import { code } from "../mocks/code";
  import { vscodeFolders } from "../mocks/files";
  import { getIcon } from "../utils/getIcon";
  import { useBreakpoint } from "../hooks/useBreakpoint";
  
  interface ShowFolders {
    src: boolean;
    components: boolean;
    styles: boolean;
    [key: string]: boolean;
  }
  
  export const Vscode: React.FC = () => {
    const [showFolders, setShowFolders] = useState<ShowFolders>({
      src: true,
      components: false,
      styles: false,
    });
  
    const [showFiles, setShowFiles] = useState(true);
    const [fileSelected, setFileSelected] = useState("readme");
    const [selectedFolder, setSelectedFolder] = useState("README.md");
    const breakpoint = useBreakpoint();
  
    const techIcons: { [key: string]: JSX.Element } = {
      js: <DiJavascript1 className="text-yellow-400" />,
      ts: <SiTypescript className="text-blue-400" />,
      tsx: <SiTypescript className="text-blue-400" />,
      css: <SiCss3 className="text-blue-400" />,
      json: <VscJson className="text-yellow-400" />,
      md: <HiOutlineInformationCircle className="text-blue-500" />,
      config: <DiJavascript1 className="text-yellow-400" />,
    };
  
    useEffect(() => {
      if (breakpoint.is.sm || breakpoint.is.md) {
        setShowFiles(false);
      } else {
        setShowFiles(true);
      }
    }, []);
  
    return (
      <div className="flex flex-col w-full max-w-[800px] ">
        <div className="w-full h-8 bg-[#1E2227] justify-between flex items-center px-2 rounded-t-lg">
          <div className="flex items-center gap-2">
            <SiVisualstudiocode className="text-blue-500" />
            <h2 className="text-gray-400 font-medium">Portfolio</h2>
          </div>
          <div>{selectedFolder}</div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF605C]" />
            <div className="w-2 h-2 rounded-full bg-[#FFBD44]" />
            <div className="w-2 h-2 rounded-full bg-[#00CA4E]" />
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="p-2 h-full bg-[#1E2227] text-xl text-gray-400 ">
              <VscFiles
                onClick={() => setShowFiles(!showFiles)}
                className={cursor-pointer hover:text-gray-200 {
                  showFiles ? "text-gray-200" : ""
                }}
              />
            </div>
  
            <div
              className={{
                showFiles ? "w-52 h-72 visible" : "w-0 hidden"
              } bg-[#23272E] transition-all md:h-[450px] overflow-auto scrollbar}
            >
              <div className="flex gap-2 h-fit items-center cursor-pointer hover:bg-gray-600/20 px-2 py-1 select-none">
                <span
                  className={{
                    showFolders["src"] ? "rotate-180" : "rotate-90"
                  } transition-all}
                >
                  <BsChevronUp />
                </span>
                src
              </div>
  
              {vscodeFolders.map((folder) => {
                return (
                  <div key={folder.id}>
                    {folder.type === "folder" && (
                      <>
                        <div
                          className="flex gap-2 h-fit items-center cursor-pointer hover:bg-gray-600/20 px-4 py-1 select-none"
                          onClick={() => {
                            setShowFolders({
                              ...showFolders,
                              [folder.name]: !showFolders[folder.name],
                            });
                          }}
                        >
                          <span
                            className={{
                              showFolders[folder.name]
                                ? "rotate-180"
                                : "rotate-90"
                            } transition-all}
                          >
                            <BsChevronUp />
                          </span>
  
                          <span>{folder.name}</span>
                        </div>
                      </>
                    )}
  
                    <ul className="">
                      {showFolders[folder.name] &&
                        folder.files.map((file) => {
                          const isSelected = fileSelected === file.name;
                          const icon = getIcon(file.file);
  
                          return (
                            <li
                              key={file.name}
                              className={cursor-pointer text-sm hover:bg-gray-600/20 {
                                folder.type === "file" ? "px-2 py-1" : "pl-6 py-1"
                              } select-none flex gap-2 items-center {
                                isSelected ? "bg-gray-600/20" : ""
                              } }
                              onClick={() => {
                                setFileSelected(file.name),
                                  setSelectedFolder(file.file);
                              }}
                            >
                              {techIcons[icon]}
                              {file.file}
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
  
          <SyntaxHighlighter
            language="typescript"
            style={atomOneDark}
            className="h-72 md:h-[450px] w-full overflow-auto scrollbar"
            showLineNumbers
          >
            {code[fileSelected as keyof typeof code]}
          </SyntaxHighlighter>
        </div>
        <div className="w-full h-4 bg-[#1E2227] justify-between flex items-center px-2 text-xs rounded-b-lg">
          <h2 className="text-gray-200"></h2>
        </div>
      </div>
    );
  };
  `,

  header: `import { Button } from "./Button";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Vscode } from "./Vscode";
  
export const Header: React.FC = () => {
    const textEffect = "hover:text-green-500 transition-all hover:text-7xl cursor-default";
    return (
        <div className="flex w-screen h-screen justify-center gap-10">
        <div className="flex justify-center items-center flex-col gap-5 flex-1">
            <div className="w-fit">
            <div className="text-5xl w-80 h-10 flex items-end justify-start gap-2">
                <div>
                <span className={textEffect}>Ke</span>
                <span className={textEffect}>vin </span>
                </div>
                <div>
                <span className={textEffect}>Bre</span>
                <span className={textEffect}>de</span>
                <span className={textEffect}>lis</span>
                </div>
            </div>

            <span className="text-green-400 text-xl w-full text-start">
                Frontend Developer
            </span>
            </div>

            <div className="flex gap-2">
            <Button variant="icon">
                <BsGithub />
            </Button>
            <Button variant="icon">
                <AiFillLinkedin />
            </Button>
            <Button link="https://www.google.com.ar" variant="outline">
                Descargar CV
            </Button>
            </div>
        </div>
        <div className="flex justify-center items-center flex-1">
            <Vscode />
        </div>
        </div>
    );
};
  `,
  readmeES: ` 🧙🏻‍♂️ Sobre mi
     Soy Kevin Bredelis, Frontend Developer.
     Tengo experiencia trabajando en equipo,
     actualmente me encuentro desarrollando
     aplicaciones web con React, Typescript, 
     tailwind y Nextjs. Me encuentro en 
     constante aprendizaje perfeccionando
     mis conocimientos.

🚀 Proyecto
    Portfolio desarrollado con Vite, React, 
    Typescript y Tailwind. 
    El código que se muestra, es el código
    original del proyecto. 


📫 Contacto
    bredeliskev@gmail.com
`,
  readmeEN: ` 🧙🏻‍♂️ About me 
    Im Kevin Bredelis, Frontend Developer.
    I have experience working in a team, 
    I am currently developing web applications
    with React, Typescript, tailwind and Nextjs.
    I am in constant learning, perfecting
    my knowledge.


🚀 Project
    Portfolio developed with Vite, React,
    Typescript and Tailwind.
    The code shown is the original code of the project.


📫 Contact
    bredeliskev@gmail.com
`,
  tailwind: `/** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily: {
        'sans': ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
        'roboto': ['Roboto', 'sans-serif'],
      }
      },
    plugins: [], 
  }`,
  packagejson: `{
    "name": "portfolio",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "@types/react-icons": "^3.0.0",
      "@types/react-syntax-highlighter": "^15.5.6",
      "hamburger-react": "^2.5.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-icons": "^4.8.0",
      "react-syntax-highlighter": "^15.5.0"
    },
    "devDependencies": {
      "@babel/core": "^7.21.8",
      "@babel/preset-react": "^7.18.6",
      "@types/babel__core": "^7.20.0",
      "@types/react": "^18.0.28",
      "@types/react-dom": "^18.0.11",
      "@typescript-eslint/eslint-plugin": "^5.57.1",
      "@typescript-eslint/parser": "^5.57.1",
      "@vitejs/plugin-react": "^4.0.0",
      "autoprefixer": "^10.4.14",
      "babel-loader": "^9.1.2",
      "eslint": "^8.38.0",
      "eslint-plugin-react-hooks": "^4.6.0",
      "eslint-plugin-react-refresh": "^0.3.4",
      "postcss": "^8.4.23",
      "tailwindcss": "^3.3.2",
      "typescript": "^5.0.2",
      "vite": "^4.3.2"
    }
  }
  
  `,
  indexcss: `  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  
  @layer {
      .scrollbar::-webkit-scrollbar {
          width: 12px;
      height: 12px;
  
      }
          
      .scrollbar::-webkit-scrollbar-track {
          background: #323232;
      }
  
  
      .scrollbar::-webkit-scrollbar-thumb {
          background-color: #606060;  
      }
  
      .scrollbar::-webkit-scrollbar-thumb:hover {
          background: #808080;
      }
  
      .scrollbar::-webkit-scrollbar-corner {
          background-color: #606060;
      }
  
  
      body::-webkit-scrollbar {
          width: 12px;
          height: 12px;
  
      }
  
      body::-webkit-scrollbar-track {
          background: #323232;
      }
  
  
      body::-webkit-scrollbar-thumb {
          background-color: #606060;  
      }
  
      body::-webkit-scrollbar-thumb:hover {
          background: #808080;
      }
  
      body::-webkit-scrollbar-corner {
          background-color: #606060;
      }
  }  
`,

  context: `import { createContext, useEffect, useState } from "react";

type Language = "ES" | "EN";

interface GlobalContextProps {
  language: "ES" | "EN";
  selectLanguage: (language: Language) => void;
}

const INITIAL_CONTEXT: GlobalContextProps = {
  language: "ES",
  selectLanguage: () => {},
};

export const GlobalContext = createContext<GlobalContextProps>(INITIAL_CONTEXT);

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState(INITIAL_CONTEXT.language);

  const selectLanguage = (language: Language) => {
    setLanguage(language);
  };

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0].toUpperCase();

    setLanguage(
      userLanguage === "ES" || userLanguage === "EN" ? userLanguage : "ES"
    );
  }, []);

  const value = {
    language,
    selectLanguage,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
`,
  sectionlayout: `import { Title } from "../components/Title";

interface Props {
  children: React.ReactNode;
  title: string;
  reference: React.MutableRefObject<null | HTMLDivElement>;
  subtitle?: string;
}

export const SectionLayout: React.FC<Props> = ({
  children,
  title,
  reference,
  subtitle,
}) => {
  return (
    <section
      className="min-h-screen flex justify-center py-24 flex-col items-center gap-10"
      ref={reference}
    >
      <Title title={title} subtitle={subtitle} />
      <div className="h-full">{children}</div>
    </section>
  );
};
`,
  layout: `import { Footer } from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-gray-300 bg-neutral-950 font-sans overflow-x-hidden">
      {children}
      <Footer />
    </div>
  );
};
`,

  appCode: `import { useRef } from "react";
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
`,

  main: `  import React from "react";
  import ReactDOM from "react-dom/client";
  import { App } from "./App.tsx";
  import "./index.css";
  import { GlobalProvider } from "./context/GlobalContext.tsx";
  
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <GlobalProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </GlobalProvider>
  );
  
`,
  useBreakpoint: `import { useMemo } from "react";
  import { useWindowSize } from "./useWindowSize";
  
  export function useBreakpoint() {
    const { width } = useWindowSize();
  
    const breakpoint = useMemo(() => {
      if (!width) return "sm";
      if (width <= 640) return "sm";
      if (width <= 768) return "md";
      if (width <= 1024) return "lg";
      if (width <= 1280) return "xl";
      return "2xl";
    }, [width]);
  
    return {
      is: {
        sm: breakpoint === "sm",
        md: breakpoint === "md",
        lg: breakpoint === "lg",
        xl: breakpoint === "xl",
        "2xl": breakpoint === "2xl",
      },
      breakpoint,
    };
  }
  `,
  useWindowSize: `import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
  `,
};
