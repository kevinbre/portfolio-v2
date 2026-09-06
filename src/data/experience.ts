import type { Job } from "./types";

/** Tomado del CV. `end` vacío = puesto actual. */
export const experience: Job[] = [
  {
    id: "membrane",
    company: "Membrane Labs",
    position: { ES: "Software Engineer", EN: "Software Engineer" },
    location: { ES: "Nueva York, EE.UU. · Remoto", EN: "New York, USA · Remote" },
    start: "2024-10",
    description: {
      ES: "Ownership del frontend de los dominios de Loans y Collateral: defino la arquitectura de microfrontends y las decisiones de UX, y entrego features completas a producción —frontend, endpoints sobre PostgreSQL, releases progresivas con feature flags y CI/CD en AWS.",
      EN: "I own the frontend of the Loans and Collateral domains: I define the microfrontend architecture and the UX decisions, and ship complete features to production — frontend, endpoints over PostgreSQL, progressive rollouts behind feature flags and CI/CD on AWS.",
    },
    stack: ["react", "typescript", "nx", "mui", "postgresql", "aws"],
  },
  {
    id: "geopagos",
    company: "Geopagos",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2024-01",
    end: "2024-10",
    description: {
      ES: "Referente técnico de frontend: definí criterios de arquitectura y revisé el código del equipo. Construí herramientas internas para generar casos de uso de clientes y agilizar el soporte, sobre Module Federation.",
      EN: "Frontend technical referent: I set the architecture guidelines and reviewed the team's code. Built internal tools to generate client use cases and speed up support, on Module Federation.",
    },
    stack: ["nextjs", "typescript", "mui", "tailwind"],
  },
  {
    id: "qualita",
    company: "Qualita",
    position: { ES: "Fullstack Developer", EN: "Fullstack Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2022-04",
    end: "2024-03",
    description: {
      ES: "Entregué productos completos para clientes, entre ellos Vluvex (plataforma de compras tipo warehouse en el exterior) y tiendas de e-commerce. Llevé productos web a desktop y mobile desde el mismo código base con Electron y Capacitor.",
      EN: "Delivered complete client products, including Vluvex (an overseas warehouse-style shopping platform) and e-commerce stores. Shipped web products to desktop and mobile from a single codebase with Electron and Capacitor.",
    },
    stack: ["nextjs", "react", "typescript", "graphql"],
  },
  {
    id: "nosis",
    company: "Nosis",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2022-11",
    end: "2023-12",
    description: {
      ES: "Desarrollé el CRM interno de la compañía desde cero hasta producción y lideré el frontend de la V2 del e-commerce. Impulsé la migración del código base a TypeScript y el refactor de varios módulos sobre un stack heterogéneo.",
      EN: "Built the company's internal CRM from scratch to production and led the frontend of the e-commerce V2. Drove the codebase migration to TypeScript and the refactor of several modules across a heterogeneous stack.",
    },
    stack: ["react", "nextjs", "svelte", "vue", "typescript"],
  },
  {
    id: "dosalcubo",
    company: "Dos al Cubo",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2021-12",
    end: "2022-11",
    description: {
      ES: "Alta de nuevos clientes en el CMS Thinkindot para medios digitales —diarios, radios y TV—, con soporte de sistemas productivos, maquetación y tareas de backend en PHP.",
      EN: "Onboarded new clients onto the Thinkindot CMS for digital media — newspapers, radio and TV — with production support, markup and backend work in PHP.",
    },
    stack: ["php", "sass", "javascript"],
  },
  {
    id: "providencial",
    company: "Providencial Consulting",
    position: { ES: "Fullstack Developer", EN: "Fullstack Developer" },
    location: { ES: "Rosario, Argentina", EN: "Rosario, Argentina" },
    start: "2016-04",
    end: "2019-08",
    description: {
      ES: "Desarrollo de nuevas funcionalidades y soporte de sistemas en producción con .NET y PHP, en proyectos de los sectores agropecuario, e-commerce y CRMs.",
      EN: "Developed new features and supported production systems in .NET and PHP, on projects across agriculture, e-commerce and CRMs.",
    },
    stack: ["php", "javascript", "css"],
  },
];
