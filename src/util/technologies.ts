import cssIcon from "@/assets/icons/tech/css.svg";
import gitIcon from "@/assets/icons/tech/git.svg";
import githubIcon from "@/assets/icons/tech/github.svg";
import htmlIcon from "@/assets/icons/tech/html.svg";
import javaIcon from "@/assets/icons/tech/java.svg";
import javascriptIcon from "@/assets/icons/tech/javascript.svg";
import kotlinIcon from "@/assets/icons/tech/kotlin.svg";
import muiIcon from "@/assets/icons/tech/mui.svg";
import nodeIcon from "@/assets/icons/tech/node.svg";
import pythonIcon from "@/assets/icons/tech/python.svg";
import reactIcon from "@/assets/icons/tech/react.svg";
import springIcon from "@/assets/icons/tech/spring.svg";
import sqlIcon from "@/assets/icons/tech/sql.svg";
import swiftIcon from "@/assets/icons/tech/swift.svg";
import typescriptIcon from "@/assets/icons/tech/typescript.svg";
import viteIcon from "@/assets/icons/tech/vite.svg";
import type { Technology, TechnologyId } from "@/types";

export const TECHNOLOGY_BY_ID: Record<TechnologyId, Technology> = {
  java: { id: "java", name: "Java", icon: javaIcon },
  spring: { id: "spring", name: "Spring Boot", icon: springIcon },
  javascript: { id: "javascript", name: "JavaScript", icon: javascriptIcon },
  typescript: { id: "typescript", name: "TypeScript", icon: typescriptIcon },
  react: { id: "react", name: "React", icon: reactIcon },
  node: { id: "node", name: "Node.js", icon: nodeIcon },
  vite: { id: "vite", name: "Vite", icon: viteIcon },
  html: { id: "html", name: "HTML", icon: htmlIcon },
  css: { id: "css", name: "CSS", icon: cssIcon },
  sql: { id: "sql", name: "SQL", icon: sqlIcon },
  git: { id: "git", name: "Git", icon: gitIcon },
  python: { id: "python", name: "Python", icon: pythonIcon },
  kotlin: { id: "kotlin", name: "Kotlin", icon: kotlinIcon },
  swift: { id: "swift", name: "Swift", icon: swiftIcon },
  mui: { id: "mui", name: "Material UI", icon: muiIcon },
  github: { id: "github", name: "GitHub", icon: githubIcon },
};

export const TECHNOLOGIES: Technology[] = Object.values(TECHNOLOGY_BY_ID);
