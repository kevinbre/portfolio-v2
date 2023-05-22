import { BiLocationPlus, BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import {
  SiAdobe,
  SiBitbucket,
  SiDocker,
  SiFigma,
  SiGit,
  SiGitlab,
  SiGmail,
  SiJira,
  SiLinear,
  SiLinkedin,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
} from "react-icons/si";

import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { cvTexts } from "../../i18n/cvTexts";

export const Cv: React.FC = () => {
  const { language } = useContext(GlobalContext);
  const {
    contact,
    degree,
    experience,
    knowledge,
    languages,
    profile,
    tecnologies,
  } = cvTexts[language];

  const contactLiStyle = "flex items-center gap-2";

  return (
    <div className="w-full h-full bg-white flex">
      <div className="relative h-full bg-slate-800 w-[35%] flex py-12 flex-col gap-5 px-4 overflow-clip">
        <div className="z-10">
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -right-16 top-0 w-32 h-32"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -left-16 -top-16 w-32 h-32"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -left-16 top-48 w-32 h-32"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -right-16 top-96 w-32 h-32"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -right-0 bottom-32 w-20 h-20"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -right-8 -bottom-20 w-32 h-32"
          />
          <img
            src="/dotted-circle.png"
            alt="dotte"
            className="absolute opacity-40 -left-20 -bottom-20 w-32 h-32"
          />
        </div>
        <div className="relative z-20 flex flex-col gap-4">
          <div className="flex justify-center">
            <img
              src="/profile-picture.jpg"
              className="w-32 h-32 rounded-full "
            />
          </div>
          <span>
            <h2 className="text-3xl font-bold text-yellow-400 ">
              KEVIN BREDELIS
            </h2>
            <h3>Frontend Developer</h3>
          </span>

          <span className="flex flex-col items-start">
            <h2 className="text-yellow-400 font-bold text-lg">
              {contact.title}
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li className={contactLiStyle}>
                <BiWorld /> kevinbre.dev
              </li>
              <li className={contactLiStyle}>
                <SiLinkedin /> Kevin Bredelis
              </li>
              <li className={contactLiStyle}>
                <BsGithub />
                kevinbre
              </li>
              <li className={contactLiStyle}>
                <SiGmail /> bredeliskev@gmail.com
              </li>
              <li className={contactLiStyle}>
                <SiWhatsapp /> +549 3415462966
              </li>
              <li className={contactLiStyle}>
                <BiLocationPlus /> Rosario, Argentina
              </li>
            </ul>
          </span>
          <span className="flex flex-col items-start">
            <h2 className="text-yellow-400 font-bold text-lg">
              {tecnologies.title}
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li className={contactLiStyle}>
                <SiReact />
                React
              </li>
              <li className={contactLiStyle}>
                <SiNextdotjs /> Next.js
              </li>

              <li className={contactLiStyle}>
                <SiTailwindcss /> TailwindCSS
              </li>
              <li className={contactLiStyle}>
                <SiTypescript /> Typescript
              </li>
              <li className={contactLiStyle}>
                <DiJavascript1 /> Javascript
              </li>
              <li className={contactLiStyle}>
                <SiSvelte /> Svelte
              </li>
            </ul>
          </span>
          <span className="flex flex-col items-start">
            <h2 className="text-yellow-400 font-bold text-lg">
              {languages.title}
            </h2>
            <ul className="text-sm flex flex-col gap-1">
              <li className={contactLiStyle}>{languages.items.spanish}</li>
              <li className={contactLiStyle}>{languages.items.english}</li>
              <li className={contactLiStyle}>{languages.items.portuguese}</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="w-[65%] h-full flex px-4 py-12 flex-col gap-4 text-xs text-neutral-800 font-roboto">
        <span className="flex flex-col gap-2">
          <h2 className="text-yellow-500 font-bold text-2xl uppercase">
            {profile.title}
          </h2>
          <p className="text-xs text-neutral-800">
            {profile.items.description}
          </p>
        </span>
        <span className="flex flex-col gap-2">
          <h2 className="text-yellow-500 font-bold text-2xl uppercase">
            {degree.title}
          </h2>
          <div className="flex flex-col">
            <span className="font-bold uppercase text-sm">
              {degree.items.title}
            </span>
            <span className="">{degree.items.colege}</span>
            <span>{degree.items.end}</span>
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <h2 className="text-yellow-500 font-bold text-2xl uppercase">
            {experience.title}
          </h2>
          <div className="flex flex-col gap-4">
            {experience.items.map((exp) => (
              <div key={exp.id} className="flex flex-col">
                <span className="font-bold">{exp.position}</span>

                <span className="font-bold text-xs">
                  <strong className="uppercase">{exp.company}</strong> /{" "}
                  <strong className="italic text-xs">{exp.duration}</strong>
                </span>
                <span className="text-xs italic">{exp.description}</span>
              </div>
            ))}
          </div>
        </span>
        <span className="flex flex-col gap-2">
          <h2 className="text-yellow-500 font-bold text-2xl uppercase">
            {knowledge.title}
          </h2>
          <div className="flex gap-5 font-semibold">
            <ul>
              <li className={contactLiStyle}>
                <SiJira className="text-blue-400" /> Jira
              </li>
              <li className={contactLiStyle}>
                <SiBitbucket className="text-blue-600" /> Bitbucket
              </li>
              <li className={contactLiStyle}>
                <SiGit className="text-red-500" /> GIT
              </li>
              <li className={contactLiStyle}>
                <SiGitlab className="text-orange-400" /> Gitlab
              </li>
              <li className={contactLiStyle}>
                <SiLinear className="text-[#5E6AD2]" /> Linear
              </li>
            </ul>
            <ul>
              <li className={contactLiStyle}>
                <SiFigma className="text-purple-600" /> Figma
              </li>
              <li className={contactLiStyle}>
                <SiSass className="text-pink-500" /> SASS
              </li>
              <li className={contactLiStyle}>
                <SiVercel /> Vercel
              </li>
              <li className={contactLiStyle}>
                <SiAdobe className="text-red-500" /> Adobe
              </li>
              <li className={contactLiStyle}>
                <SiDocker className="text-blue-400" /> Docker
              </li>
            </ul>
          </div>
        </span>
      </div>
    </div>
  );
};
