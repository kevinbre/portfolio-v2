import PokemonGame from "/pokedex-game.jpg";
import Giffy from "/giffy.jpg";
import ComponentsApp from "/components-app.jpg";
import RandomFood from "/random-food.jpg";

export const siteTexts = {
  ES: {
    components: {
      header: {
        downloadCV: "Descargar CV",
      },
      navbar: {
        home: "Inicio",
        knowledge: "Conocimientos",
        projects: "Proyectos",
        cv: "Curriculum",
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
            title: "Pokedex Game",
            technologie: ["react", "typescript", "nextjs"],
            description:
              "Mini juego de pokemon para capturar Pokemon's y verlos en tu pokedex",
            image: PokemonGame,
            deploy: "https://pokedex-game-lyart.vercel.app/",
            repository: "https://github.com/kevinbre/pokemon",
          },
          {
            id: 1,
            title: "Giffy",
            technologie: ["javascript", "react"],
            description:
              "Aplicación utilizando la api de Giphy para buscar gifs.",
            image: Giffy,
            deploy: "https://giffy-iota.vercel.app/",
            repository: "https://github.com/kevinbre/giffy",
          },
          {
            id: 2,
            title: "Components App",
            technologie: ["vite", "typescript", "react"],
            description:
              "Web creada para dar una charla sobre componentes de React.",
            image: ComponentsApp,
            deploy: "https://components-wine.vercel.app/",
            repository: "https://github.com/kevinbre/components",
          },
          {
            id: 3,
            title: "Random Food",
            technologie: ["vite", "typescript", "react"],
            description:
              "App creada para elegir un restaurant al azar de un listado.",
            image: RandomFood,
            deploy: "https://random-food-two.vercel.app/",
            repository: "https://github.com/kevinbre/random-food",
          },
        ],
      },
      cv: {
        contact: "Contacto",
        tecnologies: "Tecnologías",
        languages: "Idiomas",
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
      },
      navbar: {
        home: "Home",
        knowledge: "Knowledge",
        projects: "Projects",
        cv: "Resume",
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
            title: "Pokedex Game",
            technologie: ["react", "typescript", "nextjs"],
            description:
              "Mini game of pokemon to capture Pokemon's and see them in your pokedex.",
            image: PokemonGame,
            deploy: "https://pokedex-game-lyart.vercel.app/",
            repository: "https://github.com/kevinbre/pokemon",
          },
          {
            id: 1,
            title: "Giffy",
            technologie: ["javascript", "react"],
            description: "Application using the Giphy api to search for gifs.",
            image: Giffy,
            deploy: "https://giffy-iota.vercel.app/",
            repository: "https://github.com/kevinbre/giffy",
          },
          {
            id: 2,
            title: "Components App",
            technologie: ["vite", "typescript", "react"],
            description: "Web created to give a talk about React components.",
            image: ComponentsApp,
            deploy: "https://components-wine.vercel.app/",
            repository: "https://github.com/kevinbre/components",
          },
          {
            id: 3,
            title: "Random Food",
            technologie: ["vite", "typescript", "react"],
            description:
              "App created to choose a random restaurant from a list.",
            image: RandomFood,
            deploy: "https://random-food-two.vercel.app/",
            repository: "https://github.com/kevinbre/random-food",
          },
        ],
      },
      cv: {
        contact: "Contacto",
        tecnologies: "Tecnologías",
        languages: "Idiomas",
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
