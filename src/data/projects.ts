import type { Project } from "./types";

/* ---------------------------------------------------------------------------
 * Las descripciones salen de lo que muestra cada screenshot. Revisá que digan
 * lo que querés destacar, y completá los TODO(kevin) de links y stack.
 * ------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: "juriadica",
    title: "JuriAdica",
    featured: true,
    tag: { ES: "Producto", EN: "Product" },
    description: {
      ES: "SaaS para estudios jurídicos: expedientes, vencimientos, clientes y documentos en un solo lugar, con un asistente de IA que responde citando los expedientes propios.",
      EN: "SaaS for law firms: cases, deadlines, clients and documents in one place, with an AI assistant that answers by citing the firm's own case files.",
    },
    image: "/projects/juriadica.jpg",
    deploy: "", // TODO(kevin): URL pública si la tiene
    privateRepo: true,
    stack: [
      { value: "nextjs", title: "Next.js" },
      { value: "typescript", title: "TypeScript" },
      { value: "react", title: "React" },
      { value: "tailwind", title: "Tailwind CSS" },
    ], // TODO(kevin): confirmar stack
  },
  {
    id: "gerix",
    title: "Gerix",
    featured: true,
    tag: { ES: "Producto", EN: "Product" },
    description: {
      ES: "Gestión para complejos deportivos: calendario de canchas, reservas, socios, cobros y reportes en un mismo panel.",
      EN: "Management for sports venues: court calendar, bookings, members, payments and reports in a single dashboard.",
    },
    image: "/projects/gerix.jpg",
    deploy: "", // TODO(kevin)
    privateRepo: true,
    stack: [
      { value: "nextjs", title: "Next.js" },
      { value: "typescript", title: "TypeScript" },
      { value: "react", title: "React" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    id: "lunear",
    title: "Lunear",
    tag: { ES: "Producto", EN: "Product" },
    description: {
      ES: "Plataforma de eventos: invitaciones digitales, asignación de mesas y álbumes compartidos, de casamientos a cumpleaños.",
      EN: "Event platform: digital invitations, table seating and shared albums, from weddings to birthdays.",
    },
    image: "/projects/lunear.jpg",
    deploy: "", // TODO(kevin)
    privateRepo: true,
    stack: [
      { value: "react", title: "React" },
      { value: "typescript", title: "TypeScript" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    id: "tutorar",
    title: "tutor.ar",
    tag: { ES: "Producto", EN: "Product" },
    description: {
      ES: "Marketplace que conecta alumnos con profesores particulares: búsqueda por materia, perfiles y reseñas, clases 100% online.",
      EN: "Marketplace connecting students with private teachers: search by subject, profiles and reviews, fully online classes.",
    },
    image: "/projects/tutorar.jpg",
    deploy: "", // TODO(kevin)
    privateRepo: true,
    stack: [
      { value: "nextjs", title: "Next.js" },
      { value: "typescript", title: "TypeScript" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    id: "tuxedo",
    title: "Tuxedo",
    tag: { ES: "E-commerce", EN: "E-commerce" },
    description: {
      ES: "Tienda de impresión 3D: figuras coleccionables, accesorios TCG y deco, con catálogo, carrito y contacto por WhatsApp.",
      EN: "3D-printing store: collectible figures, TCG accessories and decor, with catalogue, cart and WhatsApp contact.",
    },
    image: "/projects/tuxedo.jpg",
    deploy: "", // TODO(kevin)
    privateRepo: true,
    stack: [
      { value: "nextjs", title: "Next.js" },
      { value: "typescript", title: "TypeScript" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    id: "scarlet-files",
    title: "Scarlet Files",
    tag: { ES: "Personal", EN: "Side project" },
    description: {
      ES: "Libro físico de casos criminales con pistas impresas en tinta escarlata: la app acompaña el juego, revela pistas con la cámara y puntúa según cuántas usaste.",
      EN: "A physical book of criminal cases with clues printed in scarlet ink: the companion app reveals them with the camera and scores you by how many you used.",
    },
    image: "/projects/scarlet-files.jpg",
    deploy: "", // TODO(kevin)
    repository: "", // TODO(kevin)
    stack: [
      { value: "react", title: "React" },
      { value: "typescript", title: "TypeScript" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    id: "hqtracker",
    title: "HQTracker",
    tag: { ES: "Personal", EN: "Side project" },
    description: {
      ES: "Companion app para HeroQuest: lleva los puntos de vida, controla los turnos y suma ambientación sonora. Funciona offline.",
      EN: "HeroQuest companion app: tracks hit points, controls turns and adds atmospheric sound. Works offline.",
    },
    image: "/projects/hqtracker.jpg",
    deploy: "", // TODO(kevin)
    repository: "", // TODO(kevin)
    stack: [
      { value: "react", title: "React" },
      { value: "typescript", title: "TypeScript" },
      { value: "vite", title: "Vite" },
    ],
  },
  {
    id: "alvarez-rey",
    title: "Estudio Álvarez Rey",
    tag: { ES: "Cliente", EN: "Client" },
    description: {
      ES: "Sitio institucional para un estudio jurídico: presentación del equipo, áreas de práctica y contacto directo por WhatsApp.",
      EN: "Website for a law firm: team presentation, practice areas and direct WhatsApp contact.",
    },
    image: "/projects/estudio-alvarez-rey.jpg",
    deploy: "", // TODO(kevin)
    privateRepo: true,
    stack: [
      { value: "react", title: "React" },
      { value: "typescript", title: "TypeScript" },
      { value: "tailwind", title: "Tailwind CSS" },
    ],
  },

];

/** Lo que el sitio renderiza. */
export const publishedProjects = projects;
