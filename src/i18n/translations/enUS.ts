import type { Translation } from "./ptBR";

export const enUS: Translation = {
  meta: {
    title: "Lucas's Tech Portfolio",
  },
  nav: {
    label: "Main navigation",
    home: "Home",
    tech: "Technologies",
    projects: "Projects",
    expand: "Expand menu",
    collapse: "Collapse menu",
  },
  language: {
    change: "Change language",
  },
  themeMode: {
    enableLight: "Switch to light mode",
    enableDark: "Switch to dark mode",
  },
  device: {
    title: "Lucas's Tech Portfolio",
    period: "2026/2027",
  },
  home: {
    minifigureAlt: "Lucas's LEGO-style minifigure in pixel art",
    ageSuffix: "years old",
    socialLabel: "Social links and contact",
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Send an e-mail",
    },
  },
  tech: {
    title: "Technologies",
    intro: "Technologies I work with or have had contact with. Hover or use Tab to see each name.",
    listLabel: "Technology list",
  },
  projects: {
    title: "Projects",
    intro: "My projects on GitHub. Select an item to open the book with the details.",
    listLabel: "Project list",
    summaryLabel: "Summary",
    technologiesLabel: "Technologies used",
    repository: "View on GitHub",
    demo: "View live demo",
    close: "Close book",
    summaries: {
      "stock-manager":
        "Web application to manage a store's product inventory in a practical way, focused on usability, which also tracks the store's cash flow.",
      "stock-manager-backend":
        "Back-end server for Stock Manager: a Java API built with Spring Boot and JPA that serves the web application.",
      "the-impostor-game":
        "Front-end to play “The Impostor” in a dynamic and customizable way, right in the browser.",
      "tech-portfolio":
        "This portfolio: an SPA that presents my background, technologies and projects, with a pixel-art-inspired look.",
      "bot-of-legends": "Chatbot developed in Python with AIML.",
      "api-pokemon":
        "Project developed during the API Development classes of the Back-End Programmer industrial apprenticeship course at SENAI São José.",
      "marvel-ios-app": "iOS app about Marvel heroes, developed in Swift with the Marvel API.",
      "pokedex-ios-app": "iOS app that simulates a Pokédex, developed in Swift with PokeAPI.",
      "contact-list-android-app":
        "Android app that simulates a contact list, developed in Kotlin.",
      "sistema-evento":
        "Independent project that simulates an event website, with ticket purchase and general information.",
    },
  },
};
