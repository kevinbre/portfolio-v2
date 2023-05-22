import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Button } from "./Button";
import { Vscode } from "./Vscode";
import { siteTexts } from "../i18n/siteTexts";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import { cvTexts } from "../i18n/cvTexts";

interface Props {
  headerRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Header: React.FC<Props> = ({ headerRef }) => {
  const { language } = useContext(GlobalContext);
  const { header } = siteTexts[language].components;
  const { downloadLink } = cvTexts[language].cv;
  const { networks } = siteTexts;

  const textEffect = `transition-all hover:text-5xl md:hover:text-6xl cursor-default hover:text-yellow-400 `;
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 h-screen justify-center gap-16"
      ref={headerRef}
    >
      <div className="flex justify-end lg:justify-center items-center flex-col gap-5">
        <div className="w-fit">
          <div className="text-4xl w-[265px] md:text-5xl md:w-[350px] h-10 flex items-end justify-start gap-2">
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

          <span className={`text-yellow-400 text-xl w-full text-start`}>
            Frontend Developer
          </span>
        </div>

        <div className="flex gap-2">
          <Button variant="icon" link={networks.github}>
            <BsGithub />
          </Button>
          <Button variant="icon" link={networks.linkedin}>
            <AiFillLinkedin />
          </Button>
          <Button link={downloadLink} variant="outline" download={true}>
            {header.downloadCV}
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-start lg:items-center lg:justify-start px-6 md:pr-10">
        <Vscode />
      </div>
    </div>
  );
};
