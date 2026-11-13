export type Language = "pt-BR" | "en-US" | "es-ES";

export type TechnologyId =
  | "java"
  | "spring"
  | "javascript"
  | "typescript"
  | "react"
  | "node"
  | "vite"
  | "html"
  | "css"
  | "sql"
  | "git"
  | "python"
  | "kotlin"
  | "swift"
  | "mui"
  | "github";

export interface Technology {
  id: TechnologyId;
  name: string;
  icon: string;
}

export type ProjectId =
  | "stock-manager"
  | "stock-manager-backend"
  | "the-impostor-game"
  | "tech-portfolio"
  | "bot-of-legends"
  | "api-pokemon"
  | "marvel-ios-app"
  | "pokedex-ios-app"
  | "contact-list-android-app"
  | "sistema-evento";

export interface Project {
  id: ProjectId;
  name: string;
  icon: string;
  repositoryUrl: string;
  demoUrl?: string;
  technologies: Technology[];
}

export interface LanguageOption {
  code: Language;
  /** Nome do idioma no próprio idioma (endônimo) — não é traduzido. */
  label: string;
  flag: string;
  avatar: string;
}
