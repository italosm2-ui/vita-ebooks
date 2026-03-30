# Arquitetura — Vita Ebooks

## Princípio

O repositório espelha o pacote que vai para `public_html/` na Hostinger. Não há build, bundler, rotas SPA ou backend nesta fase.

## Rotas públicas do V1

| URL | Arquivo | Papel |
|---|---|---|
| `/` | `index.html` | Home comercial |
| `/planos.html` | `planos.html` | Comparação de ofertas |
| `/catalogo.html` | `catalogo.html` | Catálogo com busca, filtros e rail |
| `/ebook.html?slug=...` | `ebook.html` | Página de produto |
| `/sobre.html` | `sobre.html` | Posicionamento da marca |
| `/suporte.html` | `suporte.html` | FAQ e contato |
| `/conta.html` | `conta.html` | Estado “em breve” |

## Camadas

### HTML

- Cada página tem sua própria rota `.html`.
- Header e footer seguem repetidos por simplicidade operacional.
- Não existem partials, includes ou dependências de servidor.

### CSS

- Um único arquivo compartilhado em `assets/css/style.css`.
- A base visual cobre home, planos, catálogo, produto, sobre, suporte e conta.
- O design system oficial está em `DESIGN-SYSTEM.md`, com tokens e regras da direção **Cinematic Reader**.

### JS

- Um único arquivo em `assets/js/main.js`.
- Responsável por tema, menu mobile, renderização dos dados do catálogo e produto, filtros e geração do e-mail de suporte.

### Dados

- `assets/data/ebooks.json`
- `assets/data/categorias.json`
- `assets/data/depoimentos.json`

Os dados são estáticos e carregados no cliente. Em ambiente local, o ideal é usar um servidor simples para evitar restrições de `fetch`.

### Referências visuais

- `design-references/` guarda as telas de referência usadas no redesign.
- Essas referências não devem ser tratadas como rotas produtivas nem como código-fonte final do site público.

## Decisões importantes

- GitHub é a fonte de verdade.
- Hostinger é a produção.
- `main` representa a versão pronta para upload.
- O V1 não simula checkout, autenticação ou biblioteca.
- O modo escuro é a referência principal da marca; o modo claro é a inversão tonal coerente do mesmo sistema.
- Todos os CTAs levam para catálogo, planos, produto ou suporte.
