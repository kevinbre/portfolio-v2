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
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-icons": "^4.8.0",
      "react-syntax-highlighter": "^15.5.0"
    },
    "devDependencies": {
      "@types/react": "^18.0.28",
      "@types/react-dom": "^18.0.11",
      "@typescript-eslint/eslint-plugin": "^5.57.1",
      "@typescript-eslint/parser": "^5.57.1",
      "@vitejs/plugin-react": "^4.0.0",
      "autoprefixer": "^10.4.14",
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
  indexcss: `@tailwind base;
@tailwind components;
@tailwind utilities;
  
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
`,
  projects: `import { SectionLayout } from "../layout/SectionLayout";
import { projects } from "../mocks/projects";
import { ProjectCard } from "./ProjectCard";

interface Props {
  projectsRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Projects: React.FC<Props> = ({ projectsRef }) => {
  return (
    <SectionLayout title="Proyectos" reference={projectsRef}>
      <div className="h-full grid xl:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1">
        {projects.reverse().map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </SectionLayout>
  );
};
`,
};
