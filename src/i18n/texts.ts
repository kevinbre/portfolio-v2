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
    role: t("Software Engineer", "Software Engineer"),
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
    body: t(
      "Trabajo en Membrane Labs, una fintech de activos digitales institucionales, donde manejo el frontend completo: la arquitectura, las decisiones de UX y lo que sale a producción. También meto mano en backend, AWS y CI/CD. Antes estuve en Geopagos, Qualita, Nosis y Dos al Cubo, entre fintech, e-commerce y medios. Lo que más disfruto es cuando una interfaz deja de solo funcionar y se empieza a sentir bien.",
      "I work at Membrane Labs, an institutional digital-asset fintech, where I run the frontend end to end: the architecture, the UX calls and what ships to production. I also do a fair amount of backend, AWS and CI/CD. Before that I was at Geopagos, Qualita, Nosis and Dos al Cubo, across fintech, e-commerce and media. What I enjoy most is the point where an interface stops merely working and starts feeling right."
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
    ES: "/CV-Kevin-Bredelis-ESP.pdf",
    EN: "/CV-Kevin-Bredelis-EN.pdf",
  },
} as const;
