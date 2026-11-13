---
description: Módulo React Router — integração no main.tsx, definição central de rotas, navegação, parâmetros e lazy loading.
---

# Módulo: React Router

> 📦 **Aplique somente se o projeto usar `react-router-dom` (ou `react-router` v7).** Importe do pacote que estiver no `package.json`.

## Integração no `main.tsx`

`BrowserRouter` é o provider mais externo depois do `StrictMode` (ver ordem canônica no `react-development-guide.md`):

```tsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

## `src/routes/WebRouter.tsx`

Todas as rotas da aplicação ficam em um único arquivo, renderizado pelo `App.tsx`:

```tsx
import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, ProductsPage } from "@/pages";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default WebRouter;
```

## Regras

- **NUNCA** defina rotas fora de `WebRouter.tsx`.
- Cada rota aponta para **exatamente uma** página de `src/pages/`, importada pelo barrel `@/pages`.
- Adicionar uma página exige registrá-la aqui — esta é uma alteração esperada em `WebRouter.tsx`.
- Caminhos em minúsculas e `kebab-case` (`/my-projects`); parâmetros com nomes claros (`/products/:productId`).
- Navegação interna com `<Link>`, `<NavLink>` ou `useNavigate` — **NUNCA** `<a href>` para rotas internas nem `window.location`.
- Leia parâmetros com `useParams`/`useSearchParams` e **valide-os** antes de usar (são entrada de usuário — ver `security.md`).
- Se existir página de "não encontrado", ela é a última rota (`path="*"`).

## Lazy loading (opcional)

Para páginas pesadas, carregue sob demanda com `lazy` + `Suspense` e fallback acessível. Introduza apenas quando houver ganho real (YAGNI):

```tsx
import { lazy, Suspense } from "react";

const ReportsPage = lazy(() =>
  import("@/pages/ReportsPage").then((module) => ({ default: module.ReportsPage }))
);

<Route
  path="/reports"
  element={
    <Suspense fallback={<p role="status">Carregando...</p>}>
      <ReportsPage />
    </Suspense>
  }
/>;
```

## Checklist

- [ ] Rota registrada somente em `WebRouter.tsx`
- [ ] Página importada via `@/pages`
- [ ] Navegação interna sem `<a href>` ou `window.location`
- [ ] Parâmetros de rota validados
