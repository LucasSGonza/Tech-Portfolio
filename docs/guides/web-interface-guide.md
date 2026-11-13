---
description: Guia de interface — identidade visual (tokens), responsividade mobile-first, estados de interface, acessibilidade (WCAG 2.1 AA), imagens e checklist visual.
---

# Web Interface Guide

Orientações visuais e de experiência para qualquer elemento de interface. A seção **Identidade Visual** é específica deste projeto; as demais seções valem sempre.

## Visão Geral

Portfólio pessoal com visual de "taverna" em pixel art (madeira clara + rubi). Layout: barra lateral colapsável à esquerda (Início, Sobre mim, Tecnologias, Projetos), conteúdo centralizado e, no canto superior direito, o avatar circular com a bandeira do idioma atual logo abaixo. Em telas pequenas a barra lateral fica recolhida e, ao expandir, sobrepõe o conteúdo.

- **Referência de design:** [protótipo no Figma](https://www.figma.com/design/s400omU83eOzCHEicL3xHA/MyPortfolio?node-id=0-1&p=f&t=BYNOOCeet7YyvuUe-0) — é a fonte para o que ainda não estiver documentado aqui.
- **Onde os tokens estão definidos no código:** tema do MUI em `src/theme/theme.ts` (`createTheme`), aplicado no `main.tsx` com `ThemeProvider` + `CssBaseline`. Para mudar um token, altere o tema — nunca o componente.

> Se o design de referência divergir deste documento, pergunte antes de implementar.

## Identidade Visual

### Cores

| Token | Valor | Uso |
|---|---|---|
| primary (`primary.main`) | `#8E1023` (rubi) | Títulos, ícones do menu, item ativo, ações principais |
| secondary (`secondary.main`) | `#5B3A1E` (madeira escura) | Bordas, molduras, capa do livro, tooltips |
| background (`background.default`) | `#D8B88A` (madeira clara) | Fundo da aplicação |
| surface (`background.paper`) | `#EBD9B4` (pergaminho) | Barra lateral, slots de ícone, páginas do livro, menus |
| text-primary (`text.primary`) | `#2B2B2B` (grafite) | Texto principal |
| text-secondary (`text.secondary`) | `#4A3F35` | Texto de apoio |
| divider | `#5B3A1E` | Divisores e bordas finas |
| error / warning / success | Padrões do MUI até haver definição | Feedback de estado |

### Tipografia

- **Títulos, rótulos e botões:** Pixelify Sans (variantes `h1`–`h6` e `button`).
- **Texto corrido:** JetBrains Mono (demais variantes).
- **Como as fontes são carregadas:** Google Fonts, por `<link>` no `index.html`. Adicionar outra fonte exige aprovação.
- **Escala tipográfica:** definida no tema, com `responsiveFontSizes` (os títulos encolhem em telas pequenas). Título de página: `variant="h2" component="h1"`; a Home usa `variant="h1"`.

### Espaçamento, bordas e sombras

- **Unidade base de espaçamento:** 8px (`theme.spacing` padrão do MUI — use `p: 2`, `gap: 3` etc.).
- **Border-radius:** `0` em tudo (`shape.borderRadius` do tema), para manter o visual pixel. A única exceção é o avatar, que é circular.
- **Bordas:** molduras com `border: 4` e `borderColor: "secondary.main"`; o destaque (hover, foco, item ativo) troca a cor para `primary.main`.
- **Sombras:** use a escala `boxShadow` do MUI (`1`–`24`) apenas onde o componente do MUI já a aplica (diálogo, menu).

### Ícones

- **Pixel art (identidade do site):** SVGs próprios em `src/assets/icons/` (`menu/`, `flags/`, `tech/`, `projects/`) e `src/assets/home/`, desenhados em grade 16×16 com `shape-rendering="crispEdges"`. Renderize com o componente `PixelIcon`. Um ícone novo segue a mesma grade e fica na subpasta correspondente — **não** copie texturas ou logotipos de terceiros.
- **Controles utilitários** (abrir/fechar menu, fechar diálogo): fonte **Material Icons**, carregada via Google Fonts no `index.html` e usada com o componente `<Icon>` do MUI (ex.: `<Icon>close</Icon>`). O projeto **não** usa `@mui/icons-material`.

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
