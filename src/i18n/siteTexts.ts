import ComponentsApp from "/components-app.jpg";
import HeroesApp from "/heroes-app.jpg";
import Iochat from "/iochat.jpg";
import PokemonGame from "/pokedex-game.jpg";
import RandomFood from "/random-food.jpg";
import RapidCv from "/rapidcv.jpg";

export const siteTexts = {
  ES: {
    components: {
      header: {
        downloadCV: "Descargar CV",
        downloadToast: "Se descargó el CV correctamente.",
        downloadPromise: "Cargando"
      },
      navbar: {
        home: "Inicio",
        knowledge: "Conocimientos",
        projects: "Proyectos",
        cv: "Curriculum",
        contact: "Contacto",
      },
      knowledge: {
        title: "Conocimientos",
        subtitle: "Tengo experiencia en las siguientes tecnologías:",
      },
      projects: {
        title: "Proyectos",
        subtitle: "Estos son algunos de mis proyectos personales:",
        items: [
          {
            id: 0,
            title: "IO Chat",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
              { value: "websocket", title: "SocketIo" },
              { value: "express", title: "Express" },
            ],
            description: "Chat online utilizando socket.io.",
            image: Iochat,
            deploy: "https://iochat-production.up.railway.app/",
          },
          {
            id: 1,
            title: "Rapid CV",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description: "Web para crear curriculum.",
            image: RapidCv,
            deploy: "https://rapidcv.vercel.app/",
          },
          {
            id: 2,
            title: "Random Food",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description:
              "App creada para elegir un restaurant al azar de un listado.",
            image: RandomFood,
            deploy: "https://random-food-two.vercel.app/",
            repository: "https://github.com/kevinbre/random-food",
          },
          {
            id: 3,
            title: "Components App",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description:
              "Web creada para dar una charla sobre componentes de React.",
            image: ComponentsApp,
            deploy: "https://components-wine.vercel.app/",
            repository: "https://github.com/kevinbre/components",
          },
          {
            id: 4,
            title: "Pokedex Game",
            technologie: [
              { value: "nextjs", title: "Nextjs" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description:
              "Mini juego para capturar Pokemon's y verlos en tu pokedex",
            image: PokemonGame,
            deploy: "https://pokedex-game-lyart.vercel.app/",
            repository: "https://github.com/kevinbre/pokemon",
          },
          {
            id: 5,
            title: "Heroes App",
            technologie: [
              { value: "javascript", title: "Javascript" },
              { value: "react", title: "React" },
              { value: "redux", title: "Redux" },
            ],
            description:
              "Aplicación para buscar heroes y villanos y armar un equipo.",
            image: HeroesApp,
            deploy: "",
            repository: "https://github.com/kevinbre/app-heros-react",
          },
        ],
      },
      cv: {
        contact: "Contacto",
        tecnologies: "Tecnologías",
        languages: "Idiomas",
        effect: "Efecto 3D",
        profile: {
          title: "Perfil",
          description:
            "Soy un desarrollador web full stack, con experiencia en el desarrollo de aplicaciones web y móviles. Me gusta trabajar en equipo y aprender nuevas tecnologías.",
        },
        education: {
          title: "Educación",
          items: [
            {
              title: "Técnico en Programación",
              institution: "Instituto Superior de Profesorado N° 8",
              date: "2018 - 2020",
            },
          ],
        },
        experience: {
          title: "Experiencia",
          items: [
            {
              id: 0,
              company: "Nosis",
              duration: "nov 2022 - act",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones Web React, Css Modules, Typescript, Vite, Svelte, Tailwind.",
            },
            {
              id: 1,
              company: "Qualita",
              duration: "dic 2021 - act",
              position: "DESARROLLADOR FULLSTACK",
              description:
                "Desarrollo de aplicaciones web React, Next, Typescript, Tailwind, GraphQl, Directus.",
            },
            {
              id: 2,
              company: "Dos al Cubo",
              duration: "dic 2021 - nov 2022",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones web HTML, SASS, PHP, Twig, Javascript y Jquery",
            },
            {
              id: 4,
              company: "Providencial Consulting",
              duration: "mar 2016 - ago 2019",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones web HTML, CSS y Javascript. Mantenimiento de sistemas .NET",
            },
          ],
        },
      },
    },
  },
  EN: {
    components: {
      header: {
        downloadCV: "Download Resume",
        downloadToast: "The CV was downloaded successfully.",
        downloadPromise: "Loading"
      },
      navbar: {
        home: "Home",
        knowledge: "Knowledge",
        projects: "Projects",
        cv: "Resume",
        contact: "Contact",
      },
      knowledge: {
        title: "Knowledge",
        subtitle: "I have experience in the following technologies:",
      },
      projects: {
        title: "Projects",
        subtitle: "These are some of my personal projects:",
        items: [
          {
            id: 0,
            title: "IO Chat",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
              { value: "websocket", title: "SocketIo" },
              { value: "express", title: "Express" },
            ],
            description: "Chat online with socket.io.",
            image: Iochat,
            deploy: "https://iochat-production.up.railway.app/",
          },
          {
            id: 1,
            title: "Rapid CV",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description: "Website to create resume.",
            image: RapidCv,
            deploy: "https://rapidcv.vercel.app/",
          },
          {
            id: 2,
            title: "Random Food",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description:
              "App created to choose a random restaurant from a list.",
            image: RandomFood,
            deploy: "https://random-food-two.vercel.app/",
            repository: "https://github.com/kevinbre/random-food",
          },
          {
            id: 3,
            title: "Components App",
            technologie: [
              { value: "vite", title: "Vite" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description: "Web created to give a talk about React components.",
            image: ComponentsApp,
            deploy: "https://components-wine.vercel.app/",
            repository: "https://github.com/kevinbre/components",
          },
          {
            id: 4,
            title: "Pokedex Game",
            technologie: [
              { value: "nextjs", title: "Nextjs" },
              { value: "typescript", title: "Typescript" },
              { value: "react", title: "React" },
            ],
            description:
              "Mini game to capture Pokemon's and see them in your pokedex.",
            image: PokemonGame,
            deploy: "https://pokedex-game-lyart.vercel.app/",
            repository: "https://github.com/kevinbre/pokemon",
          },

          {
            id: 5,
            title: "Heroes App",
            technologie: [
              { value: "javascript", title: "Javascript" },
              { value: "react", title: "React" },
              { value: "redux", title: "Redux" },
            ],
            description:
              "Application to search for heroes and villains and build a team.",
            image: HeroesApp,
            deploy: "",
            repository: "https://github.com/kevinbre/app-heros-react",
          },
        ],
      },
      cv: {
        contact: "Contacto",
        tecnologies: "Tecnologías",
        languages: "Idiomas",
        effect: "3D Effect",
        profile: {
          title: "Perfil",
          description:
            "Soy un desarrollador web full stack, con experiencia en el desarrollo de aplicaciones web y móviles. Me gusta trabajar en equipo y aprender nuevas tecnologías.",
        },
        education: {
          title: "Educación",
          items: [
            {
              title: "Técnico en Programación",
              institution: "Instituto Superior de Profesorado N° 8",
              date: "2018 - 2020",
            },
          ],
        },
        experience: {
          title: "Experiencia",
          items: [
            {
              id: 0,
              company: "Nosis",
              duration: "nov 2022 - act",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones Web React, Css Modules, Typescript, Vite, Svelte, Tailwind.",
            },
            {
              id: 1,
              company: "Qualita",
              duration: "dic 2021 - act",
              position: "DESARROLLADOR FULLSTACK",
              description:
                "Desarrollo de aplicaciones web React, Next, Typescript, Tailwind, GraphQl, Directus.",
            },
            {
              id: 2,
              company: "Dos al Cubo",
              duration: "dic 2021 - nov 2022",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones web HTML, SASS, PHP, Twig, Javascript y Jquery",
            },
            {
              id: 4,
              company: "Providencial Consulting",
              duration: "mar 2016 - ago 2019",
              position: "DESARROLLADOR FRONTEND",
              description:
                "Desarrollo de aplicaciones web HTML, CSS y Javascript. Mantenimiento de sistemas .NET",
            },
          ],
        },
      },
    },
  },
  networks: {
    github: "https://github.com/kevinbre",
    linkedin: "https://www.linkedin.com/in/kevinbre/",
    whatsapp:
      "https://web.whatsapp.com/send/?phone=5493415462966&text&type=phone_number&app_absent=0",
    email: "mailto:bredeliskev@gmail.com",
    downloadCV: "",
  },
};
