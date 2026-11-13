---
description: Guia de interface — identidade visual (tokens), responsividade mobile-first, estados de interface, acessibilidade (WCAG 2.1 AA), imagens e checklist visual.
---

# Web Interface Guide

Orientações visuais e de experiência para qualquer elemento de interface. A seção **Identidade Visual** é específica deste projeto; as demais seções valem sempre.

## Visão Geral

Portfólio pessoal em forma de aparelho portátil estilo "Pokédex" (genérico — sem logotipos, nomes ou elementos gráficos oficiais da franquia), centralizado na página. O aparelho tem três partes:

- **Faixa superior** (`DeviceHeader`): lente redonda e três luzes decorativas (`aria-hidden`), o rótulo do portfólio em texto pequeno e, à direita, um painel com a bandeira do idioma e o botão de tema.
- **Barra lateral** (`AppSidebar`): coluna de botões colapsável (Início, Tecnologias, Projetos). Em telas pequenas fica recolhida e, ao expandir, sobrepõe a tela.
- **Tela** (`DeviceFrame`): painel rebaixado com moldura grossa (bezel); é a `<main>`, onde as rotas são renderizadas.

Em `md` ou maior o aparelho fica centralizado (largura máxima de 1040px, altura mínima de `min(720px, 100vh - 48px)`); em `xs`/`sm` ocupa a largura toda com margem pequena e cresce com o conteúdo. Há dois temas: **escuro** (padrão — azul sobre um céu noturno com estrelas em pixel) e **claro** (creme e vermelho), alternados pelo visitante.

- **Referência de design:** [protótipo no Figma](https://www.figma.com/design/s400omU83eOzCHEicL3xHA/MyPortfolio?node-id=0-1&p=f&t=BYNOOCeet7YyvuUe-0) — é a fonte para o que ainda não estiver documentado aqui.
- **Onde os tokens estão definidos no código:** `createAppTheme(mode)` em `src/theme/theme.ts`, aplicado pelo `ThemeModeProvider` (`ThemeProvider` + `CssBaseline`). Para mudar um token, altere o tema — nunca o componente.

> Se o design de referência divergir deste documento, pergunte antes de implementar.

## Identidade Visual

### Cores

| Token | Escuro (padrão) | Claro | Uso |
|---|---|---|---|
| `background.default` | `#060A18` | `#F3E7CF` | Fundo da página (no escuro, com estrelas em pixel); fundo do item ativo do menu |
| `background.paper` | `#0F1B36` | `#FBF4E4` | Barra lateral, slots de ícone, páginas do livro, menus, painel de controles |
| `primary.main` | `#6FB1FF` | `#A3131F` | Títulos, ícones ativos, item ativo, foco, ações principais |
| `secondary.main` | `#4570B8` | `#6E1A1A` | Bordas dos slots, capa do livro |
| `text.primary` | `#E8F0FF` | `#2B2B2B` | Texto principal; fundo dos tooltips (com texto em `background.paper`) |
| `text.secondary` | `#A8B8D8` | `#5A4A42` | Texto de apoio |
| `divider` | `#4570B8` | `#6E1A1A` | Divisores e bordas finas |
| `pokedex.body` | `#1D3F78` | `#C62828` | Corpo do aparelho |
| `pokedex.edge` | `#0C1E40` | `#7F1414` | Borda externa do aparelho, contorno da lente e das luzes, borda da capa do livro |
| `pokedex.screen` | `#0B1428` | `#FBF4E4` | Fundo da tela (`<main>`) |
| `pokedex.bezel` | `#060D1D` | `#3A2A26` | Moldura da tela |
| `pokedex.lens` | `#7FD4FF` | `#7FD4FF` | Lente da faixa superior |
| `pokedex.bodyText` | `#E8F0FF` | `#FFF8EE` | Texto sobre o corpo (rótulo da faixa superior), aro e brilho da lente |
| `pokedex.lights` | `#FF5A5A`, `#FFD23F`, `#5BD16A` | iguais | Luzes decorativas |
| error / warning / success | Padrões do MUI | Padrões do MUI | Feedback de estado |

- Os tokens `pokedex.*` estendem a paleta do MUI (module augmentation em `theme.ts`) e são usados no `sx` como qualquer outro (`bgcolor: "pokedex.body"`).
- O `secondary.main` e o `divider` do modo escuro foram clareados em relação à primeira proposta (`#2A4E8C` → `#4570B8`) para as bordas dos slots terem 3:1 sobre a tela (3.72) e sobre `background.paper` (3.46).
- Contrastes de referência (escuro / claro): `text.primary` sobre a tela 16.0 / 12.9; `text.secondary` sobre a tela 9.2 / 7.7; `primary.main` sobre a tela 8.2 / 7.2; `pokedex.bodyText` sobre o corpo 9.0 / 5.3; tooltip 14.9 / 12.9.
- As cores **internas** dos SVGs em pixel art são fixas e não dependem do tema.
- **Sempre valide os dois temas** ao criar ou alterar qualquer elemento visual: contraste AA e legibilidade no escuro e no claro.

### Tipografia

- **Fonte única:** JetBrains Mono em todas as variantes, inclusive títulos. Títulos (`h1`–`h6`) e botões em peso 700. O estilo pixel fica só nos ícones e nos bonecos.
- **Como as fontes são carregadas:** Google Fonts, por `<link>` no `index.html`. Adicionar outra fonte exige aprovação.
- **Escala tipográfica:** definida no tema (`h1` 2.25rem, `h2` 1.75rem, `h3` 1.25rem), com `responsiveFontSizes` (os títulos encolhem em telas pequenas). Título de página: `variant="h2" component="h1"`; na Home, o nome do autor é o `h1` (`variant="h1"`). O rótulo do portfólio na faixa superior usa `variant="overline"`.

### Espaçamento, bordas e sombras

- **Unidade base de espaçamento:** 8px (`theme.spacing` padrão do MUI — use `p: 2`, `gap: 3` etc.).
- **Border-radius:** `0` em tudo (`shape.borderRadius` do tema), para manter o visual pixel. As únicas exceções são a lente e as luzes da faixa superior, que são círculos.
- **Bordas:** retas e grossas (`border: 4`). Peças do aparelho usam `pokedex.edge`; slots usam `secondary.main`; o destaque (hover, foco, item ativo) troca a cor para `primary.main`.
- **Sombras:** use a escala `boxShadow` do MUI (`1`–`24`) apenas onde o componente do MUI já a aplica (diálogo, menu). O `Paper` não recebe o clareamento por elevação do modo escuro (`backgroundImage: none` no tema).

### Ícones e bonecos

- **Pixel art (identidade do site):** SVGs próprios em `src/assets/icons/` (`menu/`, `flags/`, `tech/`, `projects/`, `social/`), desenhados em grade 16×16 com `shape-rendering="crispEdges"` e um `<path>` por cor. Renderize com o componente `PixelIcon`. Um ícone novo segue a mesma grade e fica na subpasta correspondente — **não** copie texturas ou logotipos de terceiros.
- **Ícones do menu:** têm uma variante por tema (`home.svg` em rubi para o claro, `home-dark.svg` em azul para o escuro, idem `computer` e `book`); a `AppSidebar` escolhe pelo `mode` de `useThemeMode`.
- **Bonecos:** `src/assets/minifigures/minifigure-{pt,en,es}.svg`, grade 40×59, com as proporções de uma minifigura clássica (cabeça de cantos arredondados, pescoço, tronco em trapézio, braços abertos com mãos em "C", quadril e pernas). Mesma silhueta, mesmo rosto (sobrancelhas, olhos com brilho, sorriso aberto, sem barba) e mesmo cabelo castanho curto e levemente ondulado; só a roupa e o acessório mudam. Contorno de 1px em tudo. Contorno escuro para ler nos dois temas. Exiba em larguras múltiplas de 40px para os pixels ficarem nítidos.
- **Controles utilitários** (abrir/fechar menu, fechar diálogo, alternar tema): fonte **Material Icons**, carregada via Google Fonts no `index.html` e usada com o componente `<Icon>` do MUI (ex.: `<Icon>close</Icon>`). O projeto **não** usa `@mui/icons-material`.

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
- Respeite `prefers-reduced-motion` em animações. O tema já zera a duração de todas as transições e animações (inclusive as do MUI) quando o visitante pede menos movimento; não crie animação que dependa de JavaScript para avançar.
- O `<html>` declara o idioma do conteúdo (`lang`) e cada página tem um `<title>` significativo.

## Imagens e Assets

- Importe imagens de `src/assets/` pelo sistema de módulos (`import minifigure from "@/assets/minifigures/minifigure-pt.svg"`) — **NUNCA** use strings como `"src/assets/..."`, que quebram no build de produção.
- Arquivos que precisam de URL fixa (favicon, `robots.txt`) ficam em `public/` e são referenciados a partir da raiz (`/favicon.svg`).
- Prefira SVG para ícones e ilustrações e formatos modernos (WebP/AVIF) para fotos; defina `width`/`height` para evitar deslocamento de layout.

## Checklist de UI

- [ ] Apenas tokens de cor, tipografia e espaçamento definidos
- [ ] Funciona a partir de 320px sem rolagem horizontal e se adapta a telas maiores
- [ ] Estados carregando/erro/vazio implementados
- [ ] HTML semântico e um `<h1>` por página
- [ ] Imagens com `alt`; campos com `label`; botões de ícone com `aria-label`
- [ ] Navegável por teclado, com foco visível
- [ ] Contraste AA respeitado nos dois temas (escuro e claro)
- [ ] Assets importados via módulo, sem caminhos `src/...` em string
