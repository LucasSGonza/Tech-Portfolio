import type { Translation } from "./ptBR";

export const esES: Translation = {
  meta: {
    title: "Portafolio técnico de Lucas",
  },
  nav: {
    label: "Navegación principal",
    home: "Inicio",
    about: "Sobre mí",
    tech: "Tecnologías",
    projects: "Proyectos",
    expand: "Expandir menú",
    collapse: "Contraer menú",
  },
  language: {
    change: "Cambiar idioma",
    avatarAlt: "Foto de perfil de Lucas",
  },
  home: {
    title: "Portafolio técnico de Lucas",
    period: "2026/2027",
    spriteAlt: "Hoguera en pixel art",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Me llamo Lucas Silva Gonçalves. Soy graduado en Sistemas de Información por la Universidade do Sul de Santa Catarina (UNISUL) y trabajo como Desarrollador de Software Full-stack en Softplan.",
      "Mi trayectoria empezó en programas de aprendizaje: hice el curso de Aprendizaje Industrial en Programación Back-End en el SENAI de São José y fui Joven Aprendiz en Intelbras, donde tuve contacto con el desarrollo móvil para iOS (Swift) y Android (Kotlin).",
      "Hoy las tecnologías con las que más trabajo son Java (Spring Boot + JPA), JavaScript y TypeScript (Node.js, Vite y React), bases de datos relacionales (SQL) y Git. Siempre estoy buscando nuevos conocimientos mediante cursos y certificaciones, para ser mejor cada día.",
    ],
  },
  tech: {
    title: "Tecnologías",
    intro: "Tecnologías con las que trabajo o he tenido contacto. Pasa el ratón o navega con Tab para ver el nombre.",
    listLabel: "Lista de tecnologías",
  },
  projects: {
    title: "Proyectos",
    intro: "Mis proyectos en GitHub. Selecciona un elemento para abrir el libro con los detalles.",
    listLabel: "Lista de proyectos",
    summaryLabel: "Resumen",
    technologiesLabel: "Tecnologías utilizadas",
    repository: "Ver en GitHub",
    demo: "Ver demostración",
    close: "Cerrar libro",
    summaries: {
      "stock-manager":
        "Aplicación web para gestionar el inventario de productos de una tienda de forma práctica, centrada en la usabilidad, que también permite controlar el flujo de caja.",
      "stock-manager-backend":
        "Servidor back-end de Stock Manager: API en Java con Spring Boot y JPA que atiende a la aplicación web.",
      "the-impostor-game":
        "Front-end para jugar a “El Impostor” de forma dinámica y personalizada, directamente en el navegador.",
      "tech-portfolio":
        "Este portafolio: una SPA para presentar mi trayectoria, mis tecnologías y mis proyectos, con un estilo inspirado en el pixel art.",
      "bot-of-legends": "Chatbot desarrollado en Python con AIML.",
      "api-pokemon":
        "Proyecto desarrollado en las clases de Desarrollo de APIs del curso Aprendiz Industrial Programador Back-End del SENAI de São José.",
      "marvel-ios-app":
        "Aplicación iOS sobre héroes de Marvel, desarrollada en Swift con la Marvel API.",
      "pokedex-ios-app":
        "Aplicación iOS que simula una Pokédex, desarrollada en Swift con la PokeAPI.",
      "contact-list-android-app":
        "Aplicación Android que simula una lista de contactos, desarrollada en Kotlin.",
      "sistema-evento":
        "Proyecto independiente que simula el sitio web de un evento, con compra de entradas e información general.",
    },
  },
};
