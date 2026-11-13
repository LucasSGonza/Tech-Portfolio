import type { Translation } from "./ptBR";

export const enUS: Translation = {
  meta: {
    title: "Lucas's Tech Portfolio",
  },
  nav: {
    label: "Main navigation",
    home: "Home",
    about: "About me",
    tech: "Technologies",
    projects: "Projects",
    expand: "Expand menu",
    collapse: "Collapse menu",
  },
  language: {
    change: "Change language",
    avatarAlt: "Lucas's profile picture",
  },
  home: {
    title: "Lucas's Tech Portfolio",
    period: "2026/2027",
    spriteAlt: "Pixel art campfire",
  },
  about: {
    title: "About me",
    paragraphs: [
      "My name is Lucas Silva Gonçalves. I hold a degree in Information Systems from Universidade do Sul de Santa Catarina (UNISUL) and I work as a Full-stack Software Developer at Softplan.",
      "My journey started in apprenticeship programs: I took the Back-End Programming industrial apprenticeship course at SENAI São José and I was a Young Apprentice at Intelbras, where I worked with mobile development for iOS (Swift) and Android (Kotlin).",
      "Today the technologies I work with the most are Java (Spring Boot + JPA), JavaScript and TypeScript (Node.js, Vite and React), relational databases (SQL) and Git. I am always looking for new knowledge through courses and certifications, to get better every day.",
    ],
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
