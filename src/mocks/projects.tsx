import PokemonGame from "/pokedex-game.jpg";
import Giffy from "/giffy.jpg";
import ComponentsApp from "/components-app.jpg";
import RandomFood from "/random-food.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  deploy: string;
  repository: string;
  technologie: string[];
}

export const projects = [
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
    description: "Aplicación utilizando la api de Giphy para buscar gifs.",
    image: Giffy,
    deploy: "https://giffy-iota.vercel.app/",
    repository: "https://github.com/kevinbre/giffy",
  },
  {
    id: 2,
    title: "Components App",
    technologie: ["vite", "typescript", "react"],
    description: "Web creada para dar una charla sobre componentes de React.",
    image: ComponentsApp,
    deploy: "https://components-wine.vercel.app/",
    repository: "https://github.com/kevinbre/components",
  },
  {
    id: 3,
    title: "Random Food",
    technologie: ["vite", "typescript", "react"],
    description: "App creada para elegir un restaurant al azar de un listado.",
    image: RandomFood,
    deploy: "https://random-food-two.vercel.app/",
    repository: "https://github.com/kevinbre/random-food",
  },
];
