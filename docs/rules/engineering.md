---
description: Regras globais de engenharia — princípios de código, tratamento de erros, Gitflow, commits semânticos, versionamento semântico, pull requests, lint, testes e verificação.
---

# Regras Globais de Engenharia

Estas regras se aplicam a qualquer alteração neste repositório.

## Princípios de Código

- **Clean Code:** nomes revelam intenção, sem abreviações obscuras (`handleSubmitForm`, não `hsf`). Funções curtas, legíveis de cima para baixo.
- **SOLID, com ênfase em SRP:** cada função, componente, hook ou serviço tem **uma** responsabilidade. Se uma função precisa de mais de ~5 parâmetros, agrupe-os em um objeto tipado ou revise o design.
- **DRY:** **NUNCA** duplique regra de negócio — extraia para hook, serviço ou util.
- **KISS:** prefira a solução mais simples que resolve o problema atual.
- **YAGNI:** **NUNCA** crie abstrações, parâmetros, pastas ou camadas "para o futuro" que a tarefa não pede.
- **NUNCA** modernize frameworks, bibliotecas ou padrões do projeto sem avaliação e aprovação explícita.
- **NUNCA** deixe código morto, código comentado ou `console.log` de depuração.
- Comentários explicam **por quê**, não **o quê**.

## Tratamento de Erros

- **NUNCA** ignore erros. **NUNCA** deixe `catch` vazio ou apenas com `// TODO`.
- Todo erro de operação assíncrona deve: (1) ser capturado; (2) virar um estado que a UI exibe ao usuário de forma amigável; (3) quando houver logger/monitoramento, ser registrado sem dados sensíveis (ver `security.md`).
- Falhe de forma explícita e controlada — nunca esconda um erro retornando valores vazios silenciosamente.

## Gitflow

O repositório segue **Gitflow**:

| Branch | Sai de | Volta para (merge) | Uso |
|---|---|---|---|
| `main` | — | — | Código em produção. Recebe merge **apenas** de `release/*` e `hotfix/*` |
| `develop` | `main` | — | Integração do que irá para a próxima versão |
| `feature/<descricao>` | `develop` | `develop` | Novas funcionalidades e melhorias |
| `release/<x.y.z>` | `develop` | `main` **e** `develop` | Preparação de versão: só ajustes finais, versão e changelog |
| `hotfix/<descricao>` | `main` | `main` **e** `develop` | Correção urgente em produção |

- Nomes em `kebab-case`, curtos e descritivos, em inglês: `feature/projects-page`, `hotfix/broken-flag-icon`, `release/1.2.0`.
- Uma branch trata **um** assunto.
- Ao fechar `release/*` ou `hotfix/*`, a versão recebe a tag `vX.Y.Z` em `main` (ver SemVer).

### Regras do agente no Gitflow

- Antes de alterar código, confira a branch atual (`git branch --show-current`).
- **NUNCA** faça commit diretamente em `main`.
- Se estiver em `main` ou `develop`, **sugira** a branch adequada: `feature/*` a partir de `develop`; `hotfix/*` a partir de `main`.
- **NUNCA** faça commit, push, merge, rebase ou force-push, nem crie/apague branches ou tags, sem pedido explícito.

## Commits Semânticos (Conventional Commits 1.0)

```
<tipo>(<escopo opcional>): <descrição>

[corpo opcional — o quê e por quê]

[rodapé opcional — BREAKING CHANGE: ..., Refs: #123]
```

- **Idioma:** EN-US (inglês americano).
- Descrição no **imperativo**, em minúsculas, sem ponto final, com até ~72 caracteres.
- Escopo = área afetada, em minúsculas (`home`, `navbar`, `services`, `deps`).
- Um commit = uma mudança lógica.
- Mudança incompatível: `!` após tipo/escopo (`feat(api)!: ...`) e/ou rodapé `BREAKING CHANGE: <explicação>`.

| Tipo | Quando usar | Efeito no SemVer |
|---|---|---|
| `feat` | Nova funcionalidade | MINOR |
| `fix` | Correção de bug | PATCH |
| `perf` | Melhoria de performance | PATCH |
| `refactor` | Mudança de código sem alterar comportamento | — |
| `style` | Formatação, sem alterar lógica | — |
| `docs` | Somente documentação | — |
| `test` | Criação ou ajuste de testes | — |
| `build` | Build, dependências, configuração do Vite/TypeScript | — |
| `ci` | Pipelines de integração contínua | — |
| `chore` | Manutenção que não se encaixa nos tipos acima | — |

Exemplos (em EN-US; se o idioma definido acima for outro, mantenha `tipo` e `escopo` em inglês e traduza só a descrição):

```
feat(projects): add project card list to home page
fix(navbar): close mobile menu after navigation
refactor(services): extract error message helper
docs(readme): describe local setup
```

- **NUNCA** use mensagens genéricas como `ajustes`, `wip`, `update`, `changes` ou `fix` sem descrição.
- **NUNCA** inclua arquivos pessoais de IDE (ex.: `.vscode/`, `.idea/`) nem `.env` em commits.

## Versionamento Semântico (SemVer)

- Versão no formato `MAJOR.MINOR.PATCH`, no campo `version` do `package.json`:
  - **MAJOR:** mudança incompatível (`BREAKING CHANGE`)
  - **MINOR:** nova funcionalidade compatível (`feat`)
  - **PATCH:** correção compatível (`fix`, `perf`)
- A versão só muda em `release/*` ou `hotfix/*`, e cada merge em `main` recebe a tag `vX.Y.Z`.
- Enquanto a versão for `0.x.y`, o projeto é considerado instável.
- **NUNCA** altere a versão fora de uma release/hotfix ou sem pedido.

## Pull Requests

- Toda branch entra no destino via **Pull Request** — sem merge local direto em `develop` ou `main`.
- Destinos: `feature/*` → `develop`; `release/*` e `hotfix/*` → `main` (com merge de volta em `develop`).
- Título do PR no padrão de commit semântico.
- Descrição mínima:

```markdown
## O que muda
<resumo objetivo>

## Por quê
<motivação ou issue relacionada>

## Como testar
<passos para validar>

## Checklist
- [ ] Build e lint passando
- [ ] Checklists de segurança, desenvolvimento e UI aplicados
- [ ] Sem segredos, `console.log` de depuração ou código morto
```

## Lint e Formatação

- O projeto usa **ESLint** (flat config em `eslint.config.js`) com as regras de hooks do React. Código novo não introduz erros nem avisos de lint.
- **Formatação:** nenhuma ferramenta configurada (sem Prettier) — siga o estilo do arquivo editado (no código de `src/`: aspas duplas, ponto e vírgula, indentação de 2 espaços).
- **NUNCA** desative regras de lint (`eslint-disable`) para "fazer passar" — corrija a causa. Se for realmente necessário, desative só a linha e explique o motivo no comentário.

## Testes

- Se o projeto tiver setup de testes, toda funcionalidade nova ou bug corrigido vem com teste correspondente (ver o módulo de testes, se instalado).
- Se não houver setup de testes, **não** adicione framework de testes sem aprovação.

## Verificação Antes de Concluir

Antes de declarar uma tarefa concluída, execute os comandos de build, lint e testes listados no `AGENTS.md` e corrija o que a sua alteração quebrou. Se algum comando falhar por motivo pré-existente, informe — não esconda o problema nem o corrija fora do escopo.

Consulte `security.md` para as diretrizes completas de segurança.
