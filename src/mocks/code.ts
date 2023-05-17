export const code = {
  buttonCode: `
interface Props {
    children: React.ReactNode;
    variant?: "outline" | "solid" | "icon";
    color?: "primary" | "secondary";
    link?: string;
}

export const Button: React.FC<Props> = ({
    children,
    variant = "solid",
    color = "primary",
    link,
}) => {
    const classes = {btnColor[color][variant]} flex justify-center i
        tems-center rounded-md transition-all 
        {variant === "icon" ? "hover:text-4xl p-0" : "hover:scale-105 px-4 py-1"}
    return (
    <>
        {link ? (
        <a href={link} className={classes} target="_blank">
            {children}
        </a>
        ) : (
        <button className={classes}>{children}</button>
        )}
    </>
    );
};

const btnColor = {
    primary: {
        solid: "text-black hover:text-white bg-green-400 hover:bg-green-700",
        outline: "text-green-400 hover:text-green-900 border-2 border-green-400 hover:border-green-700",
        icon: "text-green-400 hover:text-green-900 h-9 w-9 text-3xl",
    },
    secondary: {
        solid: "text-white bg-purple-600",
        outline: "",
        icon: "",
    },
};
`,
  headerCode: `import { Button } from "./Button";
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

  readme: `# Hola Juan soy el Readme de luddax`,
  indexCode: `Hola zapete sos el index del cs 📌`,
  Camilo: `Hola soy camilo`,
};
