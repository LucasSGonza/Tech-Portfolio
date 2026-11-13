---
description: Guia de desenvolvimento React + Vite + TypeScript — stack, arquitetura em camadas, estrutura de pastas, inicialização, componentes, páginas, hooks, serviços, tipagem, imports, variáveis de ambiente e nomenclatura.
---

# React Development Guide

Guia técnico para toda contribuição ao front-end. Ele é o **núcleo** independente de bibliotecas; regras de bibliotecas específicas (roteamento, UI, estado global, HTTP, testes) ficam nos módulos em `docs/guides/modules/` — consulte-os sempre que a tarefa envolver aquela biblioteca.

Documentos relacionados:
- `docs/rules/security.md` — segurança (prevalece sobre este guia)
- `docs/rules/engineering.md` — princípios, Gitflow, commits e verificação
- `docs/guides/web-interface-guide.md` — identidade visual, responsividade, estados de UI e acessibilidade

> Os exemplos deste guia usam HTML semântico puro. Se um módulo de UI estiver instalado (ex.: `mui.md`), use os componentes e o sistema de estilos dele.

---

## Stack e Versões

Fonte da verdade: `package.json` e `.nvmrc`. Estas versões **não devem ser alteradas sem aprovação explícita** (ver `engineering.md`).

| Tecnologia | Versão | Observação |
|---|---|---|
| Node.js | 23.11.0 | `.nvmrc`; `engines`: `^20.19.0 \|\| >=22.12.0 <=23.11.0` (mínimo exigido pelo Vite 7). O Node 23 está fora de suporte — ver "Avisos esperados" abaixo |
| React + React DOM | ^18.3.1 | **React 18** — APIs exclusivas do React 19 (`use`, `ref` como prop, Actions, `useActionState`, `useOptimistic`) **não** estão disponíveis |
| Vite | ^7.3.8 | `@vitejs/plugin-react` ^4.7.0 (compatível com Vite 7, não com Vite 8); dev server na porta 3000 |
| TypeScript | ^5.5.3 | `strict` ativo; `verbatimModuleSyntax` **não** está ativo, mas use `import type` mesmo assim |
| Material UI | `@mui/material` ^7.3.4 | Com `@emotion/styled` ^11.14 — ver `modules/mui.md` |
| React Router DOM | ^7.5.0 | `BrowserRouter` + `Routes` — ver `modules/react-router.md` |
| ESLint | ^9.9.0 | Flat config + `typescript-eslint` ^8.72.2, `react-hooks`, `react-refresh` |
| Ícones | Material Icons / Material Symbols | Fontes do Google carregadas no `index.html`, usadas com `<Icon>` do MUI (sem `@mui/icons-material`) |

Não há neste projeto: estado global (Redux etc.), cliente HTTP (Axios) nem framework de testes. **Não** os adicione sem aprovação.

> Use apenas APIs disponíveis nas versões instaladas. Antes de usar uma API recente, confirme a versão no `package.json`.

### Overrides de segurança

O `package.json` tem um `overrides` que força `minimatch` `^11.0.8` dentro de `@typescript-eslint/typescript-estree`. Ele existe porque até o `typescript-eslint` 8.72.2 depende de um `minimatch` 10.x vulnerável. **Não** remova esse override, a menos que o `typescript-eslint` passe a usar `minimatch` 11 e o `npm audit` continue limpo sem ele.

### Avisos esperados

Com o Node 23.11.0, o `npm install` exibe um aviso `EBADENGINE` do `eslint-visitor-keys@5`, que pede Node `^20.19.0 || ^22.13.0 || >=24`. O aviso é inofensivo e vem do Node 23 estar fora de suporte. **Não** rebaixe dependências para silenciá-lo, porque isso reintroduz vulnerabilidades. A solução definitiva é migrar para o Node 24 LTS (`.nvmrc` e `engines`), o que exige aprovação.

### Pastas ainda inexistentes

Hoje `src/` contém `assets/`, `components/`, `css/`, `pages/` e `routes/`. As pastas `hooks/`, `services/`, `types/` e `util/` da estrutura abaixo são criadas quando surgir o primeiro conteúdo delas, seguindo este guia.

---

## Arquitetura em Camadas

```
┌─────────────────────────────────┐
│ UI: pages/ e components/        │  renderização, eventos, composição
└────────────────┬────────────────┘
                 │ usa
┌────────────────▼────────────────┐
│ hooks/ (custom hooks)           │  estado, efeitos, regras de apresentação
└────────────────┬────────────────┘
                 │ chama
┌────────────────▼────────────────┐
│ services/                       │  comunicação externa (HTTP, storage, SDKs)
└────────────────┬────────────────┘
                 │ usa
┌────────────────▼────────────────┐
│ cliente HTTP / SDK              │  instância única e configurada
└─────────────────────────────────┘
   types/ e util/ podem ser usados por qualquer camada
```

- Dependências apontam **só para baixo**: componentes não chamam o cliente HTTP; serviços não importam componentes nem hooks.
- **Páginas orquestram:** compõem componentes e consomem hooks. **NUNCA** coloque regra de negócio, filtros/transformações não triviais ou chamadas de rede diretamente em páginas.
- **Componentes são de apresentação:** recebem dados por props e comunicam ações por callbacks (`onSelect`, `onClose`). Não conhecem serviços nem estado global, a menos que sejam explicitamente componentes de domínio.
- **Composição sobre configuração:** prefira `children` e componentes menores combinados a um componente gigante controlado por muitas flags.

---

## Estrutura do Projeto

```
📁 src/
├── 📁 assets/          # Imagens, fontes e arquivos importados pelo código
├── 📁 components/      # Componentes reutilizáveis
│   ├── 📁 ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── index.ts
│   └── index.ts        # Barrel de todos os componentes
├── 📁 css/
│   └── index.css       # Estilos globais
├── 📁 hooks/           # Custom hooks compartilhados por mais de um componente/página
│   └── index.ts
├── 📁 pages/           # Um componente de página por rota
│   ├── 📁 ProductsPage/
│   │   ├── ProductsPage.tsx
│   │   ├── useProductsPage.ts   # hook local da página (quando houver lógica)
│   │   └── index.ts
│   └── index.ts
├── 📁 routes/          # Definição de rotas (ver módulo de roteamento)
├── 📁 services/        # Comunicação externa
│   └── index.ts
├── 📁 types/           # Tipos e interfaces compartilhados
│   ├── types.ts
│   └── index.ts
├── 📁 util/            # Funções puras, helpers e constantes
│   ├── constants.ts
│   └── index.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

### Regras de estrutura

- Cada componente e cada página tem **sua própria pasta** com `NomeDoComponente.tsx` + `index.ts`.
- Cada diretório de topo (`components/`, `pages/`, `hooks/`, `services/`, `types/`, `util/`) tem um `index.ts` que re-exporta seus membros públicos.
- Hook usado por um único componente/página fica na pasta dele; hook compartilhado fica em `src/hooks/`.
- Pastas desta estrutura são criadas quando surgir o primeiro conteúdo — não crie pastas vazias (YAGNI).
- **NUNCA** crie arquivos soltos em `src/` fora da estrutura acima.
- Testes, se o projeto os tiver, ficam ao lado do arquivo testado (`ProductCard.test.tsx`).

### Barrel exports (`index.ts`)

```ts
// src/components/ProductCard/index.ts
export { ProductCard } from "./ProductCard";
```

```ts
// src/components/index.ts
export { NavBar } from "./NavBar";
export { ProductCard } from "./ProductCard";
```

- Use exports **nomeados e explícitos** — evite `export *`, que esconde o que é público e facilita conflitos de nome.
- De fora do diretório, importe pelo barrel: `import { ProductCard } from "@/components"`.
- Entre membros do mesmo diretório de topo (ex.: um componente usando outro), importe pela pasta (`@/components/ProductCard`) para evitar import circular.

---

## Inicialização

### `main.tsx`

Monta a árvore de providers e o `App`. Versão mínima:

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Ordem canônica dos providers quando os módulos estiverem instalados (de fora para dentro):

```
StrictMode > BrowserRouter (roteamento) > Provider (estado global) > ThemeProvider + CssBaseline (UI) > App
```

- `main.tsx` só é alterado para adicionar ou remover providers globais.

### `App.tsx`

Responsável por:
1. Layout estrutural (cabeçalho/navegação + área `<main>` de conteúdo)
2. Carregamento de dados globais iniciais, quando houver (via hook)
3. Estado de carregamento/erro desse carregamento inicial
4. Renderizar o roteador

```tsx
function App() {
  // 1. Hooks (dados e estado globais)
  // 2. Render condicional de carregamento/erro
  // 3. Layout + roteador
}

export default App;
```

> `App.tsx` e o arquivo de rotas usam `export default`. Todos os demais componentes, páginas, hooks e serviços usam **named export**.

---

## Componentes

```tsx
import type { ReactNode } from "react";
import { formatCurrency } from "@/util";

interface ProductCardProps {
  title: string;
  price: number;
  footer?: ReactNode;
  onSelect?: (title: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  footer,
  onSelect,
}) => {
  const handleSelect = () => {
    onSelect?.(title);
  };

  return (
    <article>
      <h3>{title}</h3>
      <p>{formatCurrency(price)}</p>
      {footer}
      <button type="button" onClick={handleSelect}>
        Ver detalhes
      </button>
    </article>
  );
};
```

### Regras de componentes

- Apenas **function components** — **NUNCA** class components.
- Tipagem com `React.FC<Props>`; a interface de props é declarada **no mesmo arquivo**, acima do componente, com o nome `<NomeDoComponente>Props`.
- **Named export** (exceto `App.tsx` e o arquivo de rotas).
- Props obrigatórias não têm default; props opcionais recebem default na desestruturação quando houver valor sensato.
- Handlers internos com prefixo `handle` (`handleSelect`); props de callback com prefixo `on` (`onSelect`).
- Booleanos com prefixo `is`/`has`/`should` (`isLoading`, `hasError`, `isModalOpen`).
- Listas com `key` estável e única (o id do item) — **NUNCA** o índice do array quando a lista pode mudar.
- Passe conteúdo aninhado como filho (`<Card>...</Card>`), não pela prop `children={...}`.
- Componente com várias responsabilidades ou com mais de ~150 linhas deve ser dividido.

---

## Páginas

Página = componente de rota. Ela orquestra hooks e componentes e não contém regra de negócio.

```ts
// src/pages/ProductsPage/useProductsPage.ts
import { useMemo, useState } from "react";
import { useProducts } from "@/hooks";

export const useProductsPage = () => {
  const { products, isLoading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return products;
    return products.filter((product) => product.name.toLowerCase().includes(term));
  }, [products, search]);

  return { filteredProducts, isLoading, error, search, setSearch };
};
```

```tsx
// src/pages/ProductsPage/ProductsPage.tsx
import type { ChangeEvent } from "react";
import { ProductCard } from "@/components";
import { useProductsPage } from "./useProductsPage";

export const ProductsPage: React.FC = () => {
  const { filteredProducts, isLoading, error, search, setSearch } = useProductsPage();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  if (isLoading) return <p role="status">Carregando produtos...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section>
      <h1>Produtos</h1>

      <label htmlFor="product-search">Buscar produto</label>
      <input id="product-search" value={search} onChange={handleSearchChange} />

      {filteredProducts.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <ProductCard title={product.name} price={product.price} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
```

### Regras de páginas

- Nome com sufixo `Page` (`ProductsPage`) e **um** `<h1>` por página.
- Sempre trate os estados **carregando**, **erro**, **vazio** e **sucesso** (ver `web-interface-guide.md`).
- A lógica da página vai para `use<NomeDaPagina>.ts`, na mesma pasta; esse hook não é exportado pelo barrel.
- Adicionar uma página = criar a pasta em `src/pages/`, exportá-la em `src/pages/index.ts` e registrar a rota (ver módulo de roteamento).

---

## Hooks

### Regras dos hooks

- Siga as [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks): **NUNCA** chame hooks dentro de condicionais, loops ou funções aninhadas.
- `useEffect` declara **todas** as dependências. **NUNCA** omita dependências nem desative `react-hooks/exhaustive-deps` para silenciar o aviso.
- Não use `useEffect` para derivar estado de props/estado: calcule durante o render (com `useMemo` se o cálculo for custoso).
- Use `useMemo`/`useCallback` quando houver custo real ou necessidade de estabilizar dependências — não por padrão.

### Custom hooks

- Prefixo `use` e uma única responsabilidade (`useProducts`, `useFileUpload`).
- Retornam um **objeto nomeado** (`{ products, isLoading, error }`), não arrays posicionais — exceto quando imitam a API do `useState`.

### Operações assíncronas em `useEffect`

Toda operação assíncrona precisa de estado de carregamento, erro exibível ao usuário e proteção contra atualização de estado após desmontagem ou troca de dependências:

```ts
// src/hooks/useProducts.ts
import { useEffect, useState } from "react";
import { ProductService } from "@/services";
import type { DProduct } from "@/types";

export const useProducts = () => {
  const [products, setProducts] = useState<DProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    ProductService.getAll()
      .then((data) => {
        if (isActive) setProducts(data);
      })
      .catch(() => {
        if (isActive) setError("Não foi possível carregar os produtos. Tente novamente.");
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return { products, isLoading, error };
};
```

```ts
// ❌ Incorreto — sem carregamento, sem tratamento de erro, sem cleanup
useEffect(() => {
  ProductService.getAll().then(setProducts);
}, []);
```

> Se o projeto adota uma biblioteca de busca/cache de dados ou estado global com ações assíncronas, siga o módulo correspondente em vez deste padrão manual.

---

## Camada de Serviço

Toda comunicação externa passa por `src/services/`. Se houver módulo de cliente HTTP instalado (ex.: `axios.md`), siga-o; caso contrário, use `fetch` com as mesmas regras:

```ts
// src/services/productService.ts
import type { DProduct } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const ProductService = {
  getAll: async (): Promise<DProduct[]> => {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
    return (await response.json()) as DProduct[];
  },
};
```

- Um arquivo por domínio: `productService.ts` exporta `ProductService`, um **objeto** com métodos nomeados pelo verbo (`getAll`, `getById`, `create`, `update`, `remove`) — **NUNCA** funções soltas.
- Serviços retornam dados **tipados** e lançam erros; quem decide o que mostrar ao usuário é o hook.
- **NUNCA** chame o cliente HTTP ou `fetch` diretamente em componentes, páginas ou hooks — sempre via serviço.
- Todo serviço é re-exportado por `src/services/index.ts`.

---

## Tipagem

```ts
// src/types/types.ts

/** Prefixo "D": entidade no formato em que vem da API/banco de dados. */
export interface DProduct {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
}

export type ProductCategory = "clothing" | "shoes" | "accessories";
```

```ts
// src/types/index.ts
export type { DProduct, ProductCategory } from "./types";
```

### Regras de tipagem

- **NUNCA** use `any`. Use `unknown` e faça a verificação de tipo (narrowing) antes de usar.
- Use `import type` / `export type` para tipos (obrigatório quando `verbatimModuleSyntax` está ativo, padrão nos templates atuais do Vite).
- Entidades vindas da API/banco têm prefixo `D` (`DProduct`). Variações usam os utilitários do TS: `Omit<DProduct, "id">`, `Partial<DProduct>`.
- Prefira **union de literais** a `enum` (sem código gerado; compatível com `erasableSyntaxOnly`).
- Tipos usados em mais de um arquivo vão para `src/types/`. Interfaces de props ficam no arquivo do componente.
- Evite asserções (`as`) e non-null (`!`). Exceções aceitas: `document.getElementById("root")!` em `main.tsx` e a tipagem do retorno de `response.json()` dentro de serviços.
- Use `CSSProperties["<propriedade>"]` para tipar props que recebem valores de estilo.

---

## Alias de Importação `@/`

`@/` aponta para `src/`. Use-o para importar entre diretórios; caminhos relativos apenas dentro da mesma pasta (`./useProductsPage`).

```tsx
// ✅ Correto
import { ProductCard } from "@/components";
import type { DProduct } from "@/types";

// ❌ Incorreto
import { ProductCard } from "../../components";
```

O alias precisa estar configurado no Vite **e** no TypeScript (não altere essa configuração sem pedido):

```ts
// vite.config.ts
resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
```

```jsonc
// tsconfig que inclui "src"
"compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["src/*"] } }
```

---

## Variáveis de Ambiente

- Prefixo `VITE_` obrigatório para expor a variável ao cliente; acesse via `import.meta.env.VITE_NOME`.
- ⚠️ **Toda variável `VITE_*` é pública** — fica legível no bundle. Nunca coloque segredos nela (ver `security.md`).
- Tipe as variáveis em `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

- Ao criar uma variável, adicione-a em `.env.example` (sem valor) e em `vite-env.d.ts`.
- **NUNCA** comite `.env`. **NUNCA** faça hardcode de URLs, tokens ou chaves.

---

## Convenções de Nomenclatura

| Elemento | Convenção | Exemplo |
|---|---|---|
| Componentes e seus arquivos | PascalCase | `ProductCard.tsx` |
| Páginas | PascalCase + sufixo `Page` | `ProductsPage` |
| Custom hooks e seus arquivos | camelCase + prefixo `use` | `useProducts.ts` |
| Serviços (objeto) | PascalCase + sufixo `Service` | `ProductService` |
| Arquivos de serviço | camelCase + sufixo `Service` | `productService.ts` |
| Interfaces de props | PascalCase + sufixo `Props` | `ProductCardProps` |
| Entidades da API/banco | prefixo `D` + PascalCase | `DProduct` |
| Handlers internos | camelCase + prefixo `handle` | `handleSearchChange` |
| Props de callback | camelCase + prefixo `on` | `onSelect` |
| Booleanos | prefixo `is`/`has`/`should` | `isLoading` |
| Constantes globais | UPPER_SNAKE_CASE | `MAX_FILE_SIZE_MB` |
| Variáveis de ambiente | `VITE_` + UPPER_SNAKE_CASE | `VITE_API_BASE_URL` |

---

## Checklist de Desenvolvimento

- [ ] Camadas respeitadas: UI → hooks → services (nenhuma chamada de rede em componente ou página)
- [ ] Pasta própria + `index.ts`; barrel do diretório atualizado com export nomeado
- [ ] Componente com `React.FC<Props>` e interface no mesmo arquivo
- [ ] Sem `any`; tipos importados com `import type`
- [ ] Imports entre diretórios usam `@/`
- [ ] Handlers com `handle*`, callbacks com `on*`, booleanos com `is*`/`has*`
- [ ] Operações assíncronas com carregamento, erro exibível e cleanup
- [ ] Estados carregando/erro/vazio tratados na interface
- [ ] Listas com `key` estável
- [ ] Nenhuma URL, token ou segredo hardcoded; variáveis via `import.meta.env.VITE_*`
- [ ] Módulos aplicáveis consultados e seguidos
- [ ] Checklist de `security.md` aplicado
