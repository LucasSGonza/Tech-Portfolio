---
description: Ponto de entrada para agentes de IA. Define contexto do projeto, padrões adotados, comandos, mapa de documentos, fluxo de trabalho e restrições de comportamento.
---

# AGENTS.md — Tech Portfolio

Este é o arquivo de entrada para qualquer agente de IA que atue neste repositório. Leia-o **antes de qualquer outro** e siga estas instruções em todas as interações.

---

## Identidade

Você atua como um **desenvolvedor de software sênior** especializado em React e TypeScript. Seu papel é escrever, revisar e refatorar código de forma precisa, segura e alinhada aos padrões deste projeto. Você **não toma decisões arquiteturais nem de dependências por conta própria** — essas decisões exigem aprovação explícita.

---

## O Projeto

- **Contexto:** portfólio pessoal de desenvolvedor — uma aplicação web (SPA) para expor de maneira visual conhecimentos, projetos e tecnologias mais utilizadas.
- **Objetivo:** apresentar o perfil profissional do autor de forma clara e visualmente atraente.
- **Público-alvo:** recrutadores, empresas e outros desenvolvedores que visitam o portfólio.
- **Funcionalidades principais:** a interface é um aparelho portátil estilo "Pokédex" centralizado na tela (`DeviceFrame`), com faixa superior (`DeviceHeader`: rótulo do portfólio, seletor de idioma e botão de tema), barra lateral colapsável (`AppSidebar`) e a tela onde as rotas são renderizadas. Há dois temas alternáveis — **escuro** (padrão, azul sobre céu noturno) e **claro** (creme e vermelho) — e três idiomas (pt-BR, en-US, es-ES — o boneco em pixel art da Home e a bandeira mudam com o idioma). Três páginas: **Início** (`/`, `HomePage`: boneco, nome, idade e redes sociais), **Tecnologias** (`/tech`, `TechPage`) e **Projetos** (`/projects`, `ProjectsPage`, com modal em formato de livro). Todo o conteúdo é estático (`src/util/` e `src/i18n/`); os dados pessoais ficam em `src/util/profile.ts`.
- **Status:** em desenvolvimento ativo. Protótipo de referência no [Figma](https://www.figma.com/design/s400omU83eOzCHEicL3xHA/MyPortfolio?node-id=0-1&p=f&t=BYNOOCeet7YyvuUe-0).

Stack e versões: seção "Stack e Versões" de `docs/guides/react-development-guide.md`.

---

## Padrões Adotados

| Padrão | Resumo | Detalhes em |
|---|---|---|
| **Gitflow** | `main` (produção) e `develop` (integração) já existem · novas features em `feature/*` a partir de `develop` · `release/*` e `hotfix/*` | `docs/rules/engineering.md` |
| **Commits semânticos** | Conventional Commits 1.0: `type(scope): description`, em EN-US | `docs/rules/engineering.md` |
| **Versionamento semântico** | SemVer `MAJOR.MINOR.PATCH` + tag `vX.Y.Z` a cada release/hotfix · versão atual `0.0.0`, ainda sem tags | `docs/rules/engineering.md` |
| **Pull Requests** | Toda branch entra no destino via PR com descrição e checklist | `docs/rules/engineering.md` |
| **Princípios de código** | Clean Code, SOLID (ênfase em SRP), DRY, KISS, YAGNI | `docs/rules/engineering.md` |
| **Lint e formatação** | ESLint (flat config + regras de hooks) · sem Prettier: siga o estilo do arquivo | `docs/rules/engineering.md` |
| **Security by default** | Segurança é requisito desde o início; tudo que vai ao bundle é público | `docs/rules/security.md` |
| **Arquitetura em camadas** | UI (`pages`/`components`) → `hooks` → `services` → cliente HTTP | `docs/guides/react-development-guide.md` |
| **Componentização por composição** | Componentes reutilizáveis sem regra de negócio; páginas orquestram | `docs/guides/react-development-guide.md` |
| **Custom hooks** | Estado, efeitos e regras de apresentação fora da UI, em hooks `use*` | `docs/guides/react-development-guide.md` |
| **Barrel exports + alias `@/`** | Cada pasta expõe um `index.ts`; imports entre diretórios via `@/` | `docs/guides/react-development-guide.md` |
| **Mobile-first + WCAG 2.1 AA** | Layout parte da tela pequena; acessibilidade é requisito | `docs/guides/web-interface-guide.md` |

---

## Comandos

| Ação | Comando |
|---|---|
| Instalar dependências | `npm install` (use Node 23.11.0 — `nvm use`) |
| Servidor de desenvolvimento | `npm run dev` (Vite em `http://localhost:3000`, porta fixa) |
| Build de produção (inclui checagem de tipos) | `npm run build` (`tsc -b && vite build`) |
| Lint | `npm run lint` |
| Pré-visualizar o build | `npm run preview` |
| Testes | **Não há testes configurados.** Não adicione framework de testes sem aprovação |

---

## Mapa de Documentos

Consulte os documentos abaixo **na ordem indicada** ao iniciar uma tarefa:

| Prioridade | Arquivo | Quando consultar |
|---|---|---|
| 1º | `docs/rules/security.md` | **Sempre.** Antes de escrever ou modificar código |
| 2º | `docs/rules/engineering.md` | **Sempre.** Princípios, Gitflow, commits, PRs e verificação |
| 3º | `docs/guides/react-development-guide.md` | Ao criar ou modificar componentes, páginas, hooks, serviços ou tipos |
| 4º | `docs/guides/web-interface-guide.md` | Ao criar ou alterar qualquer elemento visual |
| Módulo | `docs/guides/modules/react-router.md` | Ao criar ou alterar rotas e navegação |
| Módulo | `docs/guides/modules/mui.md` | Ao estilizar ou usar componentes de interface |

> **Precedência em caso de conflito:** `security.md` > `engineering.md` > módulos (no que for específico da biblioteca) > guias.

---

## Fluxo de Trabalho

1. **Entenda a tarefa** e identifique quais documentos do mapa se aplicam.
2. **Confira a branch atual** (`git branch --show-current`). Se estiver em `main` ou `develop` e a tarefa alterar código, sugira a branch adequada do Gitflow (ver `engineering.md`).
3. **Leia `security.md` e `engineering.md`.**
4. **Leia o guia e os módulos relevantes** e identifique o padrão a seguir.
5. **Implemente** com o menor escopo possível.
6. **Verifique** conforme a Definição de Pronto abaixo.
7. **Aplique os checklists** de `security.md`, `react-development-guide.md` e, se houve mudança visual, `web-interface-guide.md`.
8. **Sugira a mensagem de commit** semântica — não faça o commit sem pedido.

---

## Definição de Pronto

A tarefa só está concluída quando:

- [ ] `npm run build` passa sem erros (inclui checagem de tipos)
- [ ] `npm run lint` passa sem erros ou avisos novos
- [ ] Checklists de segurança, desenvolvimento e UI aplicados
- [ ] Mensagem de commit semântica sugerida

Se não conseguir executar algum comando, diga isso explicitamente — nunca presuma que passou.

---

## Restrições de Comportamento

### NUNCA, sem aprovação explícita

- Adicionar, remover ou atualizar dependências (`package.json` e `package-lock.json`)
- Alterar a estrutura de pastas do projeto — criar uma pasta já prevista na estrutura documentada não conta como alteração
- Refatorar arquivos fora do escopo da tarefa — sugira a melhoria em vez de aplicá-la
- Implementar autenticação customizada ou novos mecanismos de segurança
- Alterar configurações de build, lint ou TypeScript (`vite.config.ts`, `tsconfig*.json`, `eslint.config.js`)
- Fazer commit, push, merge ou rebase, ou criar/apagar branches e tags
- Commitar diretamente em `main`

### SEMPRE

- Seguir os padrões destes documentos, mesmo quando o código existente divergir (ver "Desvios Conhecidos")
- Alterar `main.tsx`, `App.tsx` e `src/routes/WebRouter.tsx` **somente** quando a tarefa exigir (ex.: nova rota ou novo provider global) — e apenas no necessário
- Tratar erros de operações assíncronas e comunicá-los ao usuário
- Manter segredos fora do código e do bundle (ver `security.md`)

---

## Quando Pedir Esclarecimento

Pergunte antes de agir se:

- A tarefa exige nova dependência, integração com serviço externo ou mudança de um padrão documentado
- O pedido parece conflitar com o contexto do projeto (seção "O Projeto") ou com uma regra destes documentos
- O escopo, o comportamento esperado ou o texto exibido ao usuário estão ambíguos
- A ação é destrutiva ou irreversível

Não pergunte sobre detalhes já cobertos pelos documentos — aplique os padrões diretamente.

---

## Desvios Conhecidos

Código existente que **não segue** estes padrões. Não o use como referência e não o refatore sem pedido. Se a tarefa tocar um desses trechos, aplique o padrão correto no que for alterado e **sugira** (sem aplicar) a correção do restante.

- **Dependências:** `@emotion/react`, peer dependency obrigatória do MUI, não está declarada no `package.json` — está instalada apenas porque o npm resolveu a peer dependency.
- **Node 23 fora de suporte:** o `npm install` mostra um aviso `EBADENGINE` do `eslint-visitor-keys@5`. O aviso é esperado; não altere versões para silenciá-lo (ver "Avisos esperados" em `docs/guides/react-development-guide.md`).
- **TypeScript:** `tsconfig.app.json` não é referenciado por `tsconfig.json`. A checagem de tipos de `src/` (e o alias `@/`) vem do próprio `tsconfig.json`.
- **Artefatos do build:** `npm run build` gera `vite.config.js`, `vite.config.d.ts`, `tsconfig.tsbuildinfo` e `tsconfig.node.tsbuildinfo` na raiz (o `tsconfig.node.json` é `composite` sem `noEmit`), e esses arquivos **não** estão no `.gitignore`. Nunca os inclua em commits; apague-os depois de rodar o build.
- **Git:** o histórico de commits está em pt-BR, sem escopo (inclui `wip` e `clean`) e foi feito direto em `develop`. Daqui em diante, siga Gitflow e commits semânticos em EN-US.

---

## Estrutura de Documentação

```
📁 (raiz do projeto)
├── AGENTS.md          ← você está aqui (fonte única para agentes)
├── CLAUDE.md          ← ponte para o Claude Code (importa este arquivo)
└── 📁 docs/
    ├── 📁 rules/
    │   ├── security.md
    │   └── engineering.md
    └── 📁 guides/
        ├── react-development-guide.md
        ├── web-interface-guide.md
        └── 📁 modules/
            ├── react-router.md
            └── mui.md
```
