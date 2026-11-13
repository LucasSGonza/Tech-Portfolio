import apiPokemonIcon from "@/assets/icons/projects/api-pokemon.svg";
import botOfLegendsIcon from "@/assets/icons/projects/bot-of-legends.svg";
import contactListAndroidAppIcon from "@/assets/icons/projects/contact-list-android-app.svg";
import marvelIosAppIcon from "@/assets/icons/projects/marvel-ios-app.svg";
import pokedexIosAppIcon from "@/assets/icons/projects/pokedex-ios-app.svg";
import sistemaEventoIcon from "@/assets/icons/projects/sistema-evento.svg";
import stockManagerBackendIcon from "@/assets/icons/projects/stock-manager-backend.svg";
import stockManagerIcon from "@/assets/icons/projects/stock-manager.svg";
import techPortfolioIcon from "@/assets/icons/projects/tech-portfolio.svg";
import theImpostorGameIcon from "@/assets/icons/projects/the-impostor-game.svg";
import type { Project } from "@/types";
import { PROFILE } from "./profile";
import { TECHNOLOGY_BY_ID } from "./technologies";

const GITHUB_PROFILE_URL = PROFILE.githubUrl;
const GITHUB_PAGES_URL = "https://lucassgonza.github.io";

const { css, html, java, javascript, kotlin, mui, python, react, spring, swift, typescript, vite } =
  TECHNOLOGY_BY_ID;

export const PROJECTS: Project[] = [
  {
    id: "stock-manager",
    name: "Stock Manager",
    icon: stockManagerIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/Stock-Manager`,
    technologies: [typescript, react, vite, mui],
  },
  {
    id: "stock-manager-backend",
    name: "Stock Manager Backend",
    icon: stockManagerBackendIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/Stock-Manager-Backend`,
    technologies: [java, spring],
  },
  {
    id: "the-impostor-game",
    name: "The Impostor Game",
    icon: theImpostorGameIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/TheImpostorGame`,
    demoUrl: `${GITHUB_PAGES_URL}/TheImpostorGame/`,
    technologies: [typescript, react, vite],
  },
  {
    id: "tech-portfolio",
    name: "Tech Portfolio",
    icon: techPortfolioIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/Tech-Portfolio`,
    technologies: [typescript, react, vite, mui],
  },
  {
    id: "bot-of-legends",
    name: "BotOfLegends",
    icon: botOfLegendsIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/BotOfLegends`,
    technologies: [python, html],
  },
  {
    id: "api-pokemon",
    name: "API Pokémon",
    icon: apiPokemonIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/APIPokemon`,
    demoUrl: `${GITHUB_PAGES_URL}/APIPokemon/`,
    technologies: [javascript, html, css],
  },
  {
    id: "marvel-ios-app",
    name: "Marvel iOS App",
    icon: marvelIosAppIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/Marvel-iOSApp`,
    technologies: [swift],
  },
  {
    id: "pokedex-ios-app",
    name: "Pokédex iOS App",
    icon: pokedexIosAppIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/Pokedex-iOSApp`,
    technologies: [swift],
  },
  {
    id: "contact-list-android-app",
    name: "Contact List Android App",
    icon: contactListAndroidAppIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/ContactList-AndroidApp`,
    technologies: [kotlin],
  },
  {
    id: "sistema-evento",
    name: "Sistema Evento",
    icon: sistemaEventoIcon,
    repositoryUrl: `${GITHUB_PROFILE_URL}/SistemaEvento`,
    technologies: [java],
  },
];
