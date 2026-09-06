import type { Localized } from "./types";

/**
 * Ruta al ícono de cada tecnología. Todos viven en public/icons.
 * Ojo: sólo existen los archivos listados acá — `getTechIcon` devuelve
 * undefined para el resto y el componente cae al fallback de texto.
 */
export const techIcons: Record<string, string> = {
  javascript: "/icons/javascript.svg",
  typescript: "/icons/typescript.svg",
  react: "/icons/react.svg",
  nextjs: "/icons/nextjs.svg",
  svelte: "/icons/svelte.svg",
  vue: "/icons/vue.svg",
  vite: "/icons/vite.svg",
  tailwind: "/icons/tailwind.svg",
  sass: "/icons/sass.svg",
  bootstrap: "/icons/bootstrap.svg",
  redux: "/icons/redux.svg",
  node: "/icons/node.svg",
  express: "/icons/express.svg",
  graphql: "/icons/graphql.svg",
  websocket: "/icons/websocket.svg",
  php: "/icons/php.svg",
  mysql: "/icons/mysql.svg",
  mongodb: "/icons/mongodb.svg",
  firebase: "/icons/firebase.svg",
  docker: "/icons/docker.svg",
  git: "/icons/git.svg",
};

export const getTechIcon = (value: string): string | undefined =>
  techIcons[value.toLowerCase()];

export interface TechGroup {
  id: string;
  label: Localized<string>;
  items: { value: string; title: string }[];
}

export const techGroups: TechGroup[] = [
  {
    id: "frontend",
    label: { ES: "Frontend", EN: "Frontend" },
    items: [
      { value: "typescript", title: "TypeScript" },
      { value: "javascript", title: "JavaScript" },
      { value: "react", title: "React" },
      { value: "nextjs", title: "Next.js" },
      { value: "svelte", title: "Svelte" },
      { value: "vue", title: "Vue" },
      { value: "redux", title: "Redux" },
    ],
  },
  {
    id: "styling",
    label: { ES: "Estilos y build", EN: "Styling & build" },
    items: [
      { value: "tailwind", title: "Tailwind CSS" },
      { value: "sass", title: "Sass" },
      { value: "bootstrap", title: "Bootstrap" },
      { value: "vite", title: "Vite" },
    ],
  },
  {
    id: "backend",
    label: { ES: "Backend y datos", EN: "Backend & data" },
    items: [
      { value: "node", title: "Node.js" },
      { value: "express", title: "Express" },
      { value: "graphql", title: "GraphQL" },
      { value: "websocket", title: "Socket.IO" },
      { value: "php", title: "PHP" },
      { value: "mysql", title: "MySQL" },
      { value: "mongodb", title: "MongoDB" },
      { value: "firebase", title: "Firebase" },
    ],
  },
  {
    id: "tooling",
    label: { ES: "Herramientas", EN: "Tooling" },
    items: [
      { value: "git", title: "Git" },
      { value: "docker", title: "Docker" },
    ],
  },
];
