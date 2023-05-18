import { SiGithub, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { Button } from "./Button";

export const Footer: React.FC = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

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
            <Button
              variant="icon"
              link="
            https://www.linkedin.com/in/kevin-bredelis-14a475178/"
            >
              <SiGithub />
            </Button>
            <Button variant="icon" link="">
              <SiLinkedin />
            </Button>
            <Button variant="icon">
              <SiWhatsapp />
            </Button>
            <Button variant="icon">
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
