---
description: Regras de segurança obrigatórias para front-ends React + Vite (SPA) — segredos, autenticação, XSS, dados sensíveis, entrada de dados, dependências e checklist de revisão.
---

# Regras de Segurança

Regras **obrigatórias** em qualquer alteração deste repositório. Em caso de conflito com outro documento, este prevalece.

> **Premissa:** este é um front-end executado no navegador. Todo código, todo asset e toda variável `VITE_*` enviados ao bundle são **públicos** — qualquer pessoa pode lê-los pelo DevTools. Segurança efetiva (autorização, validação definitiva, guarda de segredos) é responsabilidade do backend.

## Segredos e Variáveis de Ambiente

- **NUNCA** coloque segredos (chaves privadas de API, client secrets, senhas, tokens de serviço, strings de conexão) no código **nem em variáveis `VITE_*`** — o Vite embute essas variáveis no JavaScript final.
- Use `VITE_*` apenas para configuração **pública**: URL base de API, chaves *publishable*/anônimas que o provedor declara como seguras no cliente, feature flags.
- Se uma integração exige segredo, ela deve passar por um backend, BFF ou proxy — peça orientação antes de implementar.
- **NUNCA** faça hardcode de URLs de ambiente, tokens ou chaves — leia de `import.meta.env`.
- **NUNCA** comite `.env`, `.env.local` ou similares; versione apenas `.env.example`, com as chaves e sem valores.

## Autenticação e Autorização

- **NUNCA** implemente autenticação customizada sem aprovação explícita — use o mecanismo já existente no projeto ou no provedor.
- Verificações de permissão no cliente (esconder botão, bloquear rota) são **apenas UX**. A autorização real acontece no servidor; nunca trate o cliente como barreira de segurança.
- Prefira sessão em cookie `HttpOnly` + `Secure` + `SameSite` emitido pelo backend. Se o projeto já guarda token no cliente, siga o padrão existente e **não** crie novos locais de armazenamento.
- Tokens e credenciais **NUNCA** aparecem em logs, URLs (query string), comentários ou mensagens exibidas ao usuário.
- No logout, limpe todo estado sensível em memória e no armazenamento do navegador.

## XSS e Renderização de Conteúdo

- O React escapa conteúdo por padrão — **não contorne isso**.
- **NUNCA** use `dangerouslySetInnerHTML` com conteúdo vindo do usuário ou de API. Se for inevitável, sanitize com biblioteca dedicada (ex.: DOMPurify) — adicioná-la exige aprovação.
- **NUNCA** use `eval`, `new Function` ou `setTimeout`/`setInterval` com string.
- Valide URLs dinâmicas usadas em `href`/`src`: aceite apenas `https:`/`http:` (e `mailto:`/`tel:` quando fizer sentido) — bloqueie `javascript:` e `data:`.
- Links externos com `target="_blank"` levam `rel="noopener noreferrer"`.
- Não injete scripts de terceiros (analytics, widgets, pixels) sem aprovação.

## Dados Sensíveis

- **NUNCA** registre em log (`console.*`) dados pessoais (CPF, e-mail, telefone, endereço), senhas, tokens ou respostas completas de API.
- **NUNCA** coloque dados pessoais ou sensíveis em URL, query string, `localStorage` ou `sessionStorage`.
- Mensagens de erro exibidas ao usuário são genéricas e úteis — nunca mostre stacktrace, mensagem interna do servidor ou detalhes de banco de dados.
- Toda comunicação com APIs usa HTTPS; `http://` só é aceitável em desenvolvimento local.

## Entrada de Dados

- Toda entrada de usuário é não confiável. Valide tipo, formato e tamanho no cliente para dar feedback rápido — **sabendo que o servidor precisa validar novamente**.
- Em upload de arquivos, valide tipo (MIME e extensão) e tamanho antes de enviar.
- Nunca monte URLs ou seletores concatenando entrada do usuário sem codificar (`encodeURIComponent`).
- Parâmetros de rota e query string também são entrada de usuário — valide antes de usar.

## Ações Destrutivas

- Ações destrutivas ou irreversíveis (excluir, cancelar, sobrescrever) exigem **confirmação explícita** do usuário na interface (ex.: diálogo de confirmação).
- Evite envio duplicado: desabilite o controle enquanto a requisição está em andamento.

## Dependências

- **NUNCA** adicione dependências sem aprovação. Ao sugerir uma, informe o motivo, a alternativa sem dependência e a saúde do pacote (manutenção, adoção).
- Ao identificar vulnerabilidades (`npm audit`), reporte — não execute `npm audit fix --force` por conta própria.

## Responsabilidade do Backend

Hash de senha, expiração de sessão, controle de acesso por recurso (IDOR), rate limiting e validação definitiva **não** se resolvem no front-end. Se a tarefa depender deles, sinalize ao usuário em vez de simular a proteção no cliente.

## Checklist de Segurança

- [ ] Nenhum segredo no código ou em variáveis `VITE_*`
- [ ] Nenhuma URL, token ou chave hardcoded
- [ ] Nenhum dado sensível em logs, URLs ou armazenamento do navegador
- [ ] Sem `dangerouslySetInnerHTML`/`eval` com conteúdo não confiável
- [ ] URLs dinâmicas validadas; links externos com `rel="noopener noreferrer"`
- [ ] Entradas de usuário (incluindo parâmetros de rota) validadas
- [ ] Ações destrutivas com confirmação
- [ ] Erros exibidos sem detalhes internos
- [ ] Nenhuma dependência nova sem aprovação
