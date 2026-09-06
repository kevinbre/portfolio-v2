import type { Job } from "./types";

/** Tomado del CV (jun 2026). `end` vacío = puesto actual. */
export const experience: Job[] = [
  {
    id: "membrane",
    company: "Membrane Labs",
    position: { ES: "Frontend Engineer", EN: "Frontend Engineer" },
    location: { ES: "Nueva York, EE.UU. · Remoto", EN: "New York, USA · Remote" },
    start: "2024-10",
    description: {
      ES: "Desarrollo fullstack en los dominios de Loans y Collateral de una plataforma fintech de activos digitales institucionales (transacciones OTC), con interfaces sobre una arquitectura de microfrontends.",
      EN: "Fullstack development across the Loans and Collateral domains of an institutional digital-asset fintech platform (OTC transactions), building interfaces on a microfrontend architecture.",
    },
    stack: ["react", "typescript", "nx", "mui", "node"],
  },
  {
    id: "geopagos",
    company: "Geopagos",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2024-01",
    end: "2024-10",
    description: {
      ES: "Herramientas internas para el registro y validación de actividades de negocio en una empresa de soluciones de pago digitales, con validadores y flujos a medida sobre Module Federation.",
      EN: "Internal tools for registering and validating business activities at a digital payments company, with custom validators and flows built on Module Federation.",
    },
    stack: ["nextjs", "typescript", "tailwind", "mui"],
  },
  {
    id: "qualita",
    company: "Qualita",
    position: { ES: "Fullstack Developer", EN: "Fullstack Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2022-04",
    end: "2024-03",
    description: {
      ES: "Aplicaciones fullstack de punta a punta: Vluvex (plataforma de compras tipo warehouse en el exterior), tiendas de e-commerce y una app para colonia infantil, integrando APIs vía GraphQL y el CMS headless Directus.",
      EN: "End-to-end fullstack applications: Vluvex (an overseas warehouse-style shopping platform), e-commerce stores and a summer-camp app, integrating APIs through GraphQL and the Directus headless CMS.",
    },
    stack: ["react", "nextjs", "typescript", "graphql"],
  },
  {
    id: "nosis",
    company: "Nosis",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2022-11",
    end: "2023-12",
    description: {
      ES: "Desarrollo del CRM interno de la empresa y liderazgo del frontend en la V2 del e-commerce, en una proveedora de información crediticia y financiera.",
      EN: "Built the company's internal CRM and led the frontend of the e-commerce V2, at a credit and financial information provider.",
    },
    stack: ["react", "nextjs", "svelte", "vue", "vite", "tailwind"],
  },
  {
    id: "dosalcubo",
    company: "Dos al Cubo",
    position: { ES: "Frontend Developer", EN: "Frontend Developer" },
    location: { ES: "Buenos Aires, Argentina", EN: "Buenos Aires, Argentina" },
    start: "2021-12",
    end: "2022-11",
    description: {
      ES: "Mantenimiento, soporte e integración de nuevos clientes al CMS Thinkindot para medios digitales: diarios, radios y TV.",
      EN: "Maintenance, support and onboarding of new clients onto the Thinkindot CMS for digital media: newspapers, radio and TV.",
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
      ES: "Aplicaciones web en .NET y PHP para proyectos de rubros diversos —agropecuario, e-commerce y CRMs—, entre nuevas funcionalidades y mantenimiento de sistemas.",
      EN: "Web applications in .NET and PHP across varied industries — agriculture, e-commerce and CRMs — spanning new features and system maintenance.",
    },
    stack: ["php", "javascript", "css"],
  },
];
