import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Button } from "./Button";
import { Vscode } from "./Vscode";

interface Props {
  headerRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Header: React.FC<Props> = ({ headerRef }) => {
  const textEffect = `transition-all hover:text-7xl cursor-default hover:text-yellow-400 `;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 h-screen justify-center"
      ref={headerRef}
    >
      <div className="flex justify-center items-center flex-col gap-5">
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

          <span className={`text-yellow-400 text-xl w-full text-start`}>
            Frontend Developer
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="icon"
            link="https://www.linkedin.com/in/kevin-bredelis-14a475178/"
          >
            <BsGithub />
          </Button>
          <Button variant="icon" link="https://github.com/kevinbre">
            <AiFillLinkedin />
          </Button>
          <Button link="https://www.google.com.ar" variant="outline">
            Descargar CV
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center md:justify-start px-4 ">
        <Vscode />
      </div>
    </div>
  );
};
