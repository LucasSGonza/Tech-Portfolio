import type { ProjectId, SocialLinkId } from "@/types";

export const ptBR = {
  meta: {
    title: "Portfólio técnico do Lucas",
  },
  nav: {
    label: "Navegação principal",
    home: "Início",
    tech: "Tecnologias",
    projects: "Projetos",
    expand: "Expandir menu",
    collapse: "Recolher menu",
  },
  language: {
    change: "Alterar idioma",
  },
  themeMode: {
    enableLight: "Ativar modo claro",
    enableDark: "Ativar modo escuro",
  },
  device: {
    title: "Portfólio técnico do Lucas",
    period: "2026/2027",
  },
  home: {
    minifigureAlt: "Boneco estilo LEGO do Lucas em pixel art",
    ageSuffix: "anos",
    socialLabel: "Redes sociais e contato",
    social: {
      linkedin: "LinkedIn",
      github: "GitHub",
      email: "Enviar e-mail",
    } satisfies Record<SocialLinkId, string>,
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
