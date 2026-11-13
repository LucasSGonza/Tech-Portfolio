---
description: Módulo Material UI (MUI) — integração no main.tsx, tema e tokens, estilização com sx, layout, tipografia, ícones e responsividade.
---

# Módulo: Material UI (MUI)

> 📦 **Aplique somente se o projeto usar `@mui/material`.**
> Este módulo prevalece sobre os exemplos em HTML puro do guia núcleo: em vez de `div`, `p`, `h1`, `img`, use os componentes do MUI.

## Integração no `main.tsx`

Quando o projeto tiver tema customizado, `ThemeProvider` + `CssBaseline` envolvem o `App`, por dentro do router e do store (ver ordem canônica no `react-development-guide.md`). Neste projeto eles ficam dentro do `ThemeModeProvider` (`src/theme/`), que cria o tema a partir do modo escuro/claro; o exemplo abaixo é a forma mínima:

```tsx
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

<ThemeProvider theme={theme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

## Tema e Tokens

- Os tokens do `web-interface-guide.md` (cores, tipografia, breakpoints, espaçamento) vivem no **tema** (`createTheme`), em `src/theme/`. Se o projeto ainda não tiver tema, **proponha** criá-lo antes — é uma mudança de estrutura.
- Nos componentes, referencie o tema: `color: "primary.main"`, `bgcolor: "background.paper"`, `p: 2` (múltiplos de `theme.spacing`) — **NUNCA** hex ou px soltos.

```ts
// src/theme/theme.ts — valores ilustrativos
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#1565c0" },
    background: { default: "#fafafa", paper: "#ffffff" },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
});
```

## Estilização com `sx`

```tsx
// ✅ Correto
<Box sx={{ display: "flex", gap: 2, p: 3, bgcolor: "background.paper" }}>

// ❌ Incorreto
<div style={{ display: "flex", gap: "16px", padding: "24px", background: "#fff" }}>
```

- Estilize com a prop `sx` (ou `styled`) — **NUNCA** `style={{}}`.
- Layout com `Box`, `Stack`, `Container` e `Grid`. Preserve a semântica com `component`: `<Box component="main">`, `<Box component="section">`.
- Textos com `Typography` — **NUNCA** `<p>`, `<h1>`, `<span>` crus. Use `variant` para o visual e `component` para a semântica: `<Typography variant="h4" component="h1">`.
- Imagens: `<Box component="img" src={minifigure} alt="Descrição" sx={{ width: 120 }} />`.
- Objetos `sx` grandes ou repetidos em mais de um lugar: extraia para constante tipada (`const cardSx: SxProps<Theme> = { ... }`) ou para um componente dedicado.
- Responsividade mobile-first com valores por breakpoint: `sx={{ flexDirection: { xs: "column", md: "row" } }}`.
- Prefira componentes prontos do MUI (`Button`, `TextField`, `Dialog`, `Card`, `Alert`, `Skeleton`, `CircularProgress`) a recriá-los do zero.

## Ícones

- Siga o padrão já adotado no projeto (`@mui/icons-material` **ou** `<Icon>` com a fonte Material Icons) — não misture os dois. Adicionar `@mui/icons-material` é nova dependência e exige aprovação.
- Botões só com ícone: `<IconButton aria-label="Adicionar produto">`.

## Exemplo de componente

```tsx
import { Box, Typography } from "@mui/material";
import type { CSSProperties, ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  title?: string;
  width?: CSSProperties["width"];
}

export const SectionCard: React.FC<SectionCardProps> = ({
  children,
  title,
  width = "auto",
}) => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1, p: 3, width }}
    >
      {title && (
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
};
```

## Checklist

- [ ] Sem `style={{}}`; estilos via `sx`/tema
- [ ] Cores e espaçamentos vindos do tema (sem hex/px soltos)
- [ ] Textos com `Typography` e semântica correta via `component`
- [ ] Responsividade com breakpoints do tema (`xs`, `sm`, `md`, ...)
- [ ] `IconButton` com `aria-label`
