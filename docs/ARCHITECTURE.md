# Arquitetura — Vita Ebooks

## Princípio

O repositório espelha o pacote que vai para `public_html/` na Hostinger. Não há build, bundler, rotas SPA ou dependência de backend nesta fase.

## Rotas públicas do V1

| URL | Arquivo | Papel |
|---|---|---|
| `/` | `index.html` | Home comercial |
| `/planos.html` | `planos.html` | Comparação de ofertas |
| `/catalogo.html` | `catalogo.html` | Catálogo com busca e filtros |
| `/ebook.html?slug=...` | `ebook.html` | Página de produto |
| `/sobre.html` | `sobre.html` | Posicionamento da marca |
| `/suporte.html` | `suporte.html` | FAQ e contato |
| `/conta.html` | `conta.html` | Estado “em breve” |

## Camadas

### HTML

- Cada página tem sua própria rota `.html`.
- Header e footer são repetidos por decisão de simplicidade operacional.
- Não existem partials ou includes dependentes de servidor.

### CSS

- Um único arquivo compartilhado em `assets/css/style.css`.
- A mesma base visual cobre home, catálogo, planos, produto, sobre, suporte e conta.

### JS

- Um único arquivo em `assets/js/main.js`.
- Responsável por tema, menu mobile, renderização dos dados do catálogo e página de produto, filtros e geração do e-mail de suporte.

### Dados

- `assets/data/ebooks.json`
- `assets/data/categorias.json`
- `assets/data/depoimentos.json`

Os dados são estáticos e carregados no cliente. Em ambiente local, o ideal é usar um servidor simples para evitar restrições de `fetch`.

## Decisões importantes

- GitHub é a fonte de verdade.
- Hostinger é a produção.
- `main` representa a versão pronta para upload.
- O V1 não simula checkout, autenticação ou biblioteca.
- Todos os CTAs são honestos e levam para catálogo, planos, produto ou suporte.
