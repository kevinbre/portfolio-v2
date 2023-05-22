import { AiFillGithub } from "react-icons/ai";
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
        className={`project-card__image bg-yellow-400 relative group w-80 h-[180px]`}
      >
        <div
          className={`absolute w-3 h-3 bg-yellow-400 top-0 left-0 z-0 group-hover:-rotate-45 origin-top-left transition-all`}
        />
        <div
          className={`absolute w-3 h-3 bg-yellow-400 bottom-0 right-0 z-0 group-hover:rotate-45 origin-bottom-right transition-all`}
        />
        <div className="relative group-hover:translate-x-2 transition-all group-hover:-translate-y-2 before:origin-top-left before:rotate-45 z-10 w-full">
          <img src={image} alt={title} />
          <div
            className={`absolute w-full text-white  h-full top-0 left-0 z-20 gap-2 group-hover:backdrop-blur-sm hidden group-hover:flex items-center justify-center bg-black/40`}
          >
            {deploy.length > 0 && (
              <>
                <a
                  href={deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-1 items-center font-bold hover:text-yellow-400 transition-all hover:scale-110`}
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
              className={`flex gap-1 items-center font-bold hover:text-yellow-400 transition-all hover:scale-110`}
            >
              <AiFillGithub />
              Repo
            </a>
          </div>
        </div>
      </div>

      <div className="project-card__content w-full flex-col flex gap-2">
        <h3 className={`text-yellow-400 font-semibold text-xl`}>{title}</h3>
        <p>{description}</p>
        <div className="flex gap-2">
          <span className={`text-yellow-400`}>Stack</span>
          <div className="flex gap-4">
            {technologie.map((tech, index) => (
              <img
                src={techIcon[tech]}
                key={index}
                alt={`${tech} icon`}
                width={20}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
