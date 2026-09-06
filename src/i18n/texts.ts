import type { Localized } from "../data/types";

/**
 * Un solo diccionario: cada clave guarda sus dos idiomas juntos, así no se
 * puede traducir una y olvidar la otra (el problema del archivo anterior).
 */
const t = <T,>(ES: T, EN: T): Localized<T> => ({ ES, EN });

export const texts = {
  nav: {
    home: t("Inicio", "Home"),
    about: t("Sobre mí", "About"),
    stack: t("Stack", "Stack"),
    work: t("Experiencia", "Experience"),
    projects: t("Proyectos", "Projects"),
    contact: t("Contacto", "Contact"),
  },

  hero: {
    role: t("Frontend Developer", "Frontend Developer"),
    status: t("Disponible para proyectos", "Available for work"),
    tagline: t(
      "Construyo interfaces rápidas y prolijas para la web.",
      "I build fast, polished interfaces for the web."
    ),
    location: t("Rosario, Argentina", "Rosario, Argentina"),
    viewWork: t("Ver proyectos", "View projects"),
    downloadCV: t("Descargar CV", "Download CV"),
    downloading: t("Preparando el CV…", "Preparing the CV…"),
    downloaded: t("CV descargado.", "CV downloaded."),
  },

  about: {
    title: t("Sobre mí", "About me"),
    subtitle: t("Quién está del otro lado", "Who is on the other side"),
    /* TODO(kevin): reescribí esto con tus palabras cuando pases el CV. */
    body: t(
      "Desarrollador frontend con más de 8 años construyendo aplicaciones web. Hoy trabajo en Membrane Labs, en una plataforma fintech de activos digitales institucionales, con microfrontends sobre React y TypeScript. Antes pasé por Geopagos, Qualita, Nosis y Dos al Cubo, entre fintech, e-commerce y medios. Me interesa el detalle: la performance, la accesibilidad y las animaciones que aportan en lugar de estorbar.",
      "Frontend developer with 8+ years building web applications. I currently work at Membrane Labs on an institutional digital-asset fintech platform, with microfrontends built on React and TypeScript. Before that I worked at Geopagos, Qualita, Nosis and Dos al Cubo, across fintech, e-commerce and media. I care about the details: performance, accessibility, and animation that helps instead of getting in the way."
    ),
  },

  stack: {
    title: t("Stack", "Stack"),
    subtitle: t(
      "Las herramientas con las que trabajo todos los días",
      "The tools I work with every day"
    ),
  },

  work: {
    title: t("Experiencia", "Experience"),
    subtitle: t("Dónde estuve y qué construí", "Where I've been and what I built"),
    present: t("Actualidad", "Present"),
    trustedBy: t("Empresas con las que trabajé", "Companies I've worked with"),
  },

  projects: {
    title: t("Proyectos", "Projects"),
    subtitle: t(
      "Cosas que construí, algunas por trabajo y otras por gusto",
      "Things I've built, some for work and some for fun"
    ),
    deploy: t("Ver sitio", "Live site"),
    repo: t("Código", "Source"),
    privateRepo: t("Código privado", "Private source"),
    privateLabel: t("Privado", "Private"),
    empty: t("Pronto, nuevos proyectos.", "New projects coming soon."),
  },

  contact: {
    title: t("Contacto", "Contact"),
    subtitle: t(
      "¿Tenés un proyecto en mente? Escribime.",
      "Got a project in mind? Get in touch."
    ),
    cta: t("Enviar un mail", "Send an email"),
    copied: t("Mail copiado al portapapeles.", "Email copied to clipboard."),
    copy: t("Copiar", "Copy"),
    rights: t("Todos los derechos reservados.", "All rights reserved."),
    builtWith: t("Hecho con", "Built with"),
  },

  common: {
    language: t("Idioma", "Language"),
    menu: t("Menú", "Menu"),
    close: t("Cerrar", "Close"),
    scroll: t("Scrolleá", "Scroll"),
  },
} as const;

export const links = {
  github: "https://github.com/kevinbre",
  linkedin: "https://www.linkedin.com/in/kevinbre/",
  whatsapp: "https://wa.me/5493415462966",
  email: "bredeliskev@gmail.com",
  cv: {
    ES: "/KevinBredelis-FrontendDeveloper-ES.pdf",
    EN: "/KevinBredelis-FrontendDeveloper-EN.pdf",
  },
} as const;
