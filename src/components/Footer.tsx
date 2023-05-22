import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Button } from "./Button";
import { siteTexts } from "../i18n/siteTexts";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

interface Props {
  reference: React.MutableRefObject<null | HTMLDivElement>;
}

export const Footer: React.FC<Props> = ({ reference }) => {
  const { language } = useContext(GlobalContext);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const { networks } = siteTexts;

  return (
    <footer
      className="flex items-center flex-col border-t border-yellow-400/5 bg-neutral-900/10"
      ref={reference}
    >
      <div className="flex justify-between gap-4 py-8 px-20 w-full flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center md:items-start">
          <span className="text-gray-300">Kevin Bredelis</span>
          <span className="text-yellow-400">Frontend developer</span>
        </div>
        <div className="flex gap-2 flex-col items-center md:items-start">
          <span className="font-medium text-gray-300">
            {language === "EN" ? "Contact" : "Contacto"}
          </span>
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
