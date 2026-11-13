import type { ProjectId } from "@/types";

export const ptBR = {
  meta: {
    title: "Portfólio técnico do Lucas",
  },
  nav: {
    label: "Navegação principal",
    home: "Início",
    about: "Sobre mim",
    tech: "Tecnologias",
    projects: "Projetos",
    expand: "Expandir menu",
    collapse: "Recolher menu",
  },
  language: {
    change: "Alterar idioma",
    avatarAlt: "Foto de perfil do Lucas",
  },
  home: {
    title: "Portfólio técnico do Lucas",
    period: "2026/2027",
    spriteAlt: "Fogueira em pixel art",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Meu nome é Lucas Silva Gonçalves. Sou formado em Sistemas de Informação pela Universidade do Sul de Santa Catarina (UNISUL) e atuo como Desenvolvedor de Software Full-stack na Softplan.",
      "Minha trajetória começou em programas de aprendizagem: fiz o curso de Aprendizagem Industrial em Programação Back-End no SENAI de São José e fui Jovem Aprendiz na Intelbras, onde tive contato com desenvolvimento mobile para iOS (Swift) e Android (Kotlin).",
      "Hoje as tecnologias com que mais trabalho são Java (Spring Boot + JPA), JavaScript e TypeScript (Node.js, Vite e React), bancos de dados relacionais (SQL) e Git. Estou sempre em busca de novos conhecimentos por meio de cursos e certificações, para ser melhor a cada dia.",
    ],
  },
  tech: {
    title: "Tecnologias",
    intro: "Tecnologias com que trabalho ou já tive contato. Passe o mouse ou navegue com Tab para ver o nome.",
    listLabel: "Lista de tecnologias",
  },
  projects: {
    title: "Projetos",
    intro: "Meus projetos no GitHub. Selecione um item para abrir o livro com os detalhes.",
    listLabel: "Lista de projetos",
    summaryLabel: "Resumo",
    technologiesLabel: "Tecnologias utilizadas",
    repository: "Ver no GitHub",
    demo: "Ver demonstração",
    close: "Fechar livro",
    summaries: {
      "stock-manager":
        "Aplicação web para gerenciar o estoque de produtos de uma loja de forma prática, com foco em usabilidade, e também acompanhar o fluxo de caixa.",
      "stock-manager-backend":
        "Servidor back-end do Stock Manager: API em Java com Spring Boot e JPA que atende a aplicação web.",
      "the-impostor-game":
        "Front-end para jogar “O Impostor” de forma dinâmica e customizada, direto no navegador.",
      "tech-portfolio":
        "Este portfólio: uma SPA para apresentar minha trajetória, minhas tecnologias e meus projetos, com visual inspirado em pixel art.",
      "bot-of-legends": "Chatbot desenvolvido em Python com AIML.",
      "api-pokemon":
        "Projeto desenvolvido nas aulas de Desenvolvimento de APIs do curso Aprendiz Industrial Programador Back-End do SENAI de São José.",
      "marvel-ios-app":
        "Aplicativo iOS sobre heróis da Marvel, desenvolvido em Swift com a Marvel API.",
      "pokedex-ios-app":
        "Aplicativo iOS que simula uma Pokédex, desenvolvido em Swift com a PokeAPI.",
      "contact-list-android-app":
        "Aplicativo Android que simula uma lista de contatos, desenvolvido em Kotlin.",
      "sistema-evento":
        "Projeto autônomo que simula o site de um evento, com compra de ingressos e informações gerais.",
    } satisfies Record<ProjectId, string>,
  },
};

export type Translation = typeof ptBR;
