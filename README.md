# 💻 Tech Portfolio

**Meu Portfólio técnico como Desenvolvedor de Software Full-stack!**

É uma aplicação web (SPA) que expõe de forma visual as **tecnologias** que mais utilizo e tive contato em minha trajetória como desenvolvedor, juntamente dos principais projetos pessoais que desenvolvi. O visual é inspirada em um aparelho portátil estilo "Pokédex" com ícones em pixel art por todo o projeto 👾.

🌐 **Site publicado:** <https://lucassgonza.github.io/Tech-Portfolio/>

## Tecnologias

| Área | Tecnologia |
|---|---|
| Linguagem | TypeScript |
| Interface | React 18 |
| Build e dev server | Vite 7 |
| Componentes e tema | Material UI (MUI) 7 + Emotion |
| Rotas | React Router 7 |
| Qualidade | ESLint 9 (flat config) com regras de hooks e `typescript-eslint` |
| Fonte | JetBrains Mono (Google Fonts) |

> Não há backend, variáveis de ambiente nem chamadas de rede: todo o conteúdo é estático e vive no código. Os ícones, as bandeiras e os bonecos são SVGs em pixel art desenhados especialmente para o projeto.

## Como rodar

**Pré-requisito:** Node.js `23.11.0` (definido em `.nvmrc`; o `engines` do `package.json` aceita `^20.19.0 || >=22.12.0 <=23.11.0`).

```bash
nvm use 23.11.0
npm install
npm run dev
```

O Vite sobe em <http://localhost:3000/Tech-Portfolio/> (porta fixa: se estiver ocupada, o comando falha em vez de trocar de porta) e abre o navegador.

> Com o Node 23, o `npm install` mostra um aviso `EBADENGINE` do `eslint-visitor-keys`. O aviso é esperado e inofensivo.

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (alias de `npm start`) |
| `npm run build` | Checagem de tipos (`tsc -b`) e build de produção em `dist/` |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run preview` | Serve o build de produção localmente (em `/Tech-Portfolio/`) |

Não há testes automatizados configurados.

## Deploy

O site é publicado no **GitHub Pages** pelo workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que roda a cada push na `main` (ou manualmente, em **Actions → Deploy to GitHub Pages → Run workflow**): instala as dependências com `npm ci`, roda `npm run build` e publica a pasta `dist/`.

- **Configuração única no GitHub:** `Settings → Pages → Build and deployment → Source: GitHub Actions`.
- **Caminho base:** como é um site de projeto, o app é servido em `/Tech-Portfolio/` (`base` no `vite.config.ts` e `basename` do `BrowserRouter` em `src/main.tsx`).
- **`404.html`:** o GitHub Pages não redireciona rotas para o `index.html`. O workflow copia `dist/index.html` para `dist/404.html`, e assim o React Router assume quando alguém abre ou recarrega `/Tech-Portfolio/tech` ou `/Tech-Portfolio/projects` diretamente.
- **Tudo é público:** todo o conteúdo de `dist/` (e, portanto, de `public/`) fica acessível a qualquer pessoa. Nunca coloque `.env`, segredos ou dados privados em `public/` nem no código.

## Estrutura do projeto

```
src/
├── assets/        # SVGs em pixel art: ícones (menu, bandeiras, tecnologias, projetos, redes) e bonecos
├── components/    # Componentes reutilizáveis (DeviceFrame, AppSidebar, PixelIconList, ProjectBookDialog...)
├── css/           # Estilos globais
├── hooks/         # Custom hooks (useLanguage, useThemeMode)
├── i18n/          # Provider de idioma e dicionários pt-BR, en-US e es-ES
├── pages/         # Uma página por rota (HomePage, TechPage, ProjectsPage)
├── routes/        # Definição das rotas (WebRouter)
├── services/      # Persistência das preferências de idioma e de tema
├── theme/         # Tema do MUI (escuro e claro) e provider de tema
├── types/         # Tipos compartilhados
└── util/          # Dados estáticos (perfil, tecnologias, projetos) e constantes
```

O fluxo segue a arquitetura em camadas **UI → hooks → services**. Cada pasta expõe um `index.ts` e os imports entre pastas usam o alias `@/` (que aponta para `src/`).

## Padrões do repositório

> 💡 E utilizados durante o desenvolvimento do projeto!

- **Gitflow:** `main` (produção) e `develop` (integração); novas funcionalidades em `feature/*` a partir de `develop`, sempre integradas por Pull Request.
- **Commits semânticos:** [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) em inglês, no formato `type(scope): description`.
- **Versionamento:** [SemVer](https://semver.org/lang/pt-BR/), com tag `vX.Y.Z` a cada release (versão atual `0.0.0`, ainda sem tags).
- **Qualidade:** `npm run build` e `npm run lint` precisam passar antes de abrir um PR.

## Documentação

As regras e os guias do projeto ficam em [`docs/`](docs/), e o [`AGENTS.md`](AGENTS.md) é o ponto de entrada para agentes de IA que atuam no repositório.

| Documento | Conteúdo |
|---|---|
| [`docs/rules/security.md`](docs/rules/security.md) | Regras de segurança para o front-end |
| [`docs/rules/engineering.md`](docs/rules/engineering.md) | Princípios de código, Gitflow, commits e PRs |
| [`docs/guides/react-development-guide.md`](docs/guides/react-development-guide.md) | Stack, arquitetura, estrutura e convenções de código |
| [`docs/guides/web-interface-guide.md`](docs/guides/web-interface-guide.md) | Identidade visual, temas, responsividade e acessibilidade |
| [`docs/guides/modules/mui.md`](docs/guides/modules/mui.md) | Uso do Material UI e do tema |
| [`docs/guides/modules/react-router.md`](docs/guides/modules/react-router.md) | Rotas e navegação |
