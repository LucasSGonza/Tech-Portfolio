---
description: Guia de interface — identidade visual (tokens), responsividade mobile-first, estados de interface, acessibilidade (WCAG 2.1 AA), imagens e checklist visual.
---

# Web Interface Guide

Orientações visuais e de experiência para qualquer elemento de interface. A seção **Identidade Visual** é específica deste projeto; as demais seções valem sempre.

## Visão Geral

Portfólio pessoal de página única. Seções atuais: **Sobre mim** (foto de perfil circular e texto de apresentação), **Projetos** e **Tecnologias**. Hoje o layout é dividido em duas colunas (Sobre mim à esquerda; Projetos e Tecnologias à direita).

- **Referência de design:** [protótipo no Figma](https://www.figma.com/design/s400omU83eOzCHEicL3xHA/MyPortfolio?node-id=0-1&p=f&t=BYNOOCeet7YyvuUe-0) — é a fonte para cores, tipografia e layout ainda não documentados aqui.
- **Onde os tokens estão definidos no código:** ⚠️ A definir. Ainda não há tema do MUI; hoje existem valores soltos em `src/css/index.css` e em `src/pages/HomePage/Home.tsx`. O destino previsto é um tema `createTheme` em `src/theme/` (ver `modules/mui.md`), cuja criação exige aprovação.

> Se o design de referência divergir deste documento, pergunte antes de implementar.

## Identidade Visual

### Cores

| Token | Valor | Uso |
|---|---|---|
| primary | ⚠️ A definir (consultar o Figma) | Ações principais e destaques |
| secondary | ⚠️ A definir (consultar o Figma) | Ações secundárias e superfícies de destaque |
| background | `#fbfce8` (em uso no fundo da `HomePage`) | Fundo da aplicação |
| surface | ⚠️ A definir | Cards, modais e painéis |
| text-primary | `black` (regra global em `src/css/index.css`) | Texto principal |
| text-secondary | ⚠️ A definir | Texto de apoio |
| error / warning / success | Padrões do MUI até haver definição | Feedback de estado |

### Tipografia

- **Fonte principal:** Open Sans (sans-serif como fallback).
- **Como a fonte é carregada:** ⚠️ hoje **não** é carregada — apenas declarada em `src/css/index.css`. Carregá-la (Google Fonts no `index.html` ou `@font-face`) exige aprovação.
- **Escala tipográfica:** variantes padrão do `Typography` do MUI (`h1`–`h6`, `body1`, `body2`) até haver definição no Figma.

### Espaçamento, bordas e sombras

- **Unidade base de espaçamento:** 8px (`theme.spacing` padrão do MUI — use `p: 2`, `gap: 3` etc.).
- **Border-radius:** ⚠️ A definir. A foto de perfil é circular.
- **Sombras:** ⚠️ A definir — use a escala `boxShadow` do MUI (`1`–`24`) até haver definição.

### Ícones

- **Biblioteca de ícones:** fontes **Material Icons** e **Material Symbols Outlined**, carregadas via Google Fonts no `index.html` e usadas com o componente `<Icon>` do MUI (ex.: `<Icon>smart_toy</Icon>`). O projeto **não** usa `@mui/icons-material`.

### Regras de identidade

- **NUNCA** use cores, fontes, espaçamentos ou sombras soltos no componente (hex e px "mágicos") — use os tokens do local indicado em "Visão Geral". Se faltar um token, proponha a criação em vez de inventar um valor.
- Não introduza novas fontes, paletas ou bibliotecas de ícones sem aprovação.

## Responsividade (Mobile-first)

- Escreva os estilos base para telas pequenas (~360px) e acrescente ajustes para telas maiores com breakpoints de largura **mínima**.
- **Breakpoints:** padrões do MUI — `xs` 0px, `sm` 600px, `md` 900px, `lg` 1200px, `xl` 1536px (ex.: `sx={{ flexDirection: { xs: "column", md: "row" } }}`).
- Nenhuma tela pode ter rolagem horizontal a partir de 320px de largura.
- Prefira unidades relativas (`rem`, `%`, `fr`) e layouts flexíveis (flexbox/grid); evite larguras fixas em px para contêineres.
- Valide em pelo menos três larguras: 360px, 768px e 1280px.

## Estados de Interface

Toda tela ou componente que depende de dados assíncronos trata os quatro estados:

| Estado | O que exibir |
|---|---|
| Carregando | Skeleton ou indicador com texto acessível (`role="status"`) |
| Erro | Mensagem amigável, sem detalhes técnicos, com ação de "tentar novamente" quando possível (`role="alert"`) |
| Vazio | Mensagem explicando a ausência de dados e, se houver, a próxima ação |
| Sucesso | O conteúdo |

- Botões que disparam requisições ficam desabilitados e indicam progresso enquanto aguardam resposta.
- Ações destrutivas pedem confirmação (ver `security.md`).

## Acessibilidade (WCAG 2.1 AA)

- **HTML semântico:** `header`, `nav`, `main`, `section`, `footer`; `button` para ações e `a` para navegação. **NUNCA** `div`/`span` clicável.
- **Um `<h1>` por página** e hierarquia de títulos sem pular níveis.
- **Imagens:** `alt` descritivo; imagens decorativas com `alt=""`.
- **Formulários:** todo campo tem `<label>` associado (ou `aria-label`); mensagens de erro são textuais e ligadas ao campo (`aria-describedby`).
- **Contraste mínimo:** 4.5:1 para texto normal; 3:1 para texto grande e elementos gráficos de interface.
- **Teclado:** tudo que é clicável é alcançável por `Tab` e acionável por `Enter`/`Espaço`; o foco é sempre visível (não remova `outline` sem substituto).
- **Área de toque** mínima de 44×44px em elementos interativos.
- Botões só com ícone têm `aria-label`.
- Não transmita informação **apenas** por cor — acompanhe com texto ou ícone.
- Respeite `prefers-reduced-motion` em animações.
- O `<html>` declara o idioma do conteúdo (`lang`) e cada página tem um `<title>` significativo.

## Imagens e Assets

- Importe imagens de `src/assets/` pelo sistema de módulos (`import avatar from "@/assets/avatar.png"`) — **NUNCA** use strings como `"src/assets/..."`, que quebram no build de produção.
- Arquivos que precisam de URL fixa (favicon, `robots.txt`) ficam em `public/` e são referenciados a partir da raiz (`/favicon.svg`).
- Prefira SVG para ícones e ilustrações e formatos modernos (WebP/AVIF) para fotos; defina `width`/`height` para evitar deslocamento de layout.

## Checklist de UI

- [ ] Apenas tokens de cor, tipografia e espaçamento definidos
- [ ] Funciona a partir de 320px sem rolagem horizontal e se adapta a telas maiores
- [ ] Estados carregando/erro/vazio implementados
- [ ] HTML semântico e um `<h1>` por página
- [ ] Imagens com `alt`; campos com `label`; botões de ícone com `aria-label`
- [ ] Navegável por teclado, com foco visível
- [ ] Contraste AA respeitado
- [ ] Assets importados via módulo, sem caminhos `src/...` em string
