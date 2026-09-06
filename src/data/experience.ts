import type { Job } from "./types";

/* TODO(kevin): actualizar con los datos del CV — sobre todo dónde estás hoy
 * y las fechas reales. `end` vacío = "actualidad". */
export const experience: Job[] = [
  {
    id: "nosis",
    company: "Nosis",
    position: { ES: "Desarrollador Frontend", EN: "Frontend Developer" },
    start: "2022-11",
    end: undefined, // TODO(kevin): confirmar si seguís acá
    description: {
      ES: "Desarrollo de aplicaciones web con React, Svelte y TypeScript, con foco en componentes reutilizables y performance.",
      EN: "Web application development with React, Svelte and TypeScript, focused on reusable components and performance.",
    },
    stack: ["react", "svelte", "typescript", "vite", "tailwind"],
  },
  {
    id: "qualita",
    company: "Qualita",
    position: { ES: "Desarrollador Fullstack", EN: "Fullstack Developer" },
    start: "2021-12",
    end: undefined, // TODO(kevin): confirmar
    description: {
      ES: "Aplicaciones web con React, Next.js y GraphQL sobre Directus, del modelado de datos a la interfaz.",
      EN: "Web apps with React, Next.js and GraphQL over Directus, from data modelling to the interface.",
    },
    stack: ["react", "nextjs", "typescript", "graphql", "tailwind"],
  },
  {
    id: "dosalcubo",
    company: "Dos al Cubo",
    position: { ES: "Desarrollador Frontend", EN: "Frontend Developer" },
    start: "2021-12",
    end: "2022-11",
    description: {
      ES: "Sitios y aplicaciones con PHP, Twig, SASS y JavaScript para clientes de distintos rubros.",
      EN: "Sites and applications with PHP, Twig, SASS and JavaScript for clients across industries.",
    },
    stack: ["php", "sass", "javascript"],
  },
  {
    id: "providencial",
    company: "Providencial Consulting",
    position: { ES: "Desarrollador Frontend", EN: "Frontend Developer" },
    start: "2016-03",
    end: "2019-08",
    description: {
      ES: "Desarrollo web con HTML, CSS y JavaScript, y mantenimiento de sistemas internos en .NET.",
      EN: "Web development with HTML, CSS and JavaScript, plus maintenance of internal .NET systems.",
    },
    stack: ["javascript", "css", "html"],
  },
];
