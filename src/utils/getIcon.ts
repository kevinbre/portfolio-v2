import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";

export const getIcon = (fileName: string) => {
  const fileExtension = fileName.split(".")[1];

  const fileIcons: { [key: string]: JSX.Element } = {
    tsx: SiTypescript,
    css: MdCss,
    js: DiJavascript1,
    tailwind: SiTailwindcss,
  };

  return fileIcons[fileExtension];
};
