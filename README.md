# Vita Ebooks

Vitrine estática da Vita Ebooks com catálogo, páginas de produto, comparação de planos e suporte comercial, pronta para publicação manual na Hostinger.

## Direção atual

- GitHub é a fonte de verdade do código, da documentação e das referências visuais.
- Hostinger é o ambiente de produção via upload manual para `public_html/`.
- O V1 continua 100% estático: HTML, CSS, JS vanilla e dados locais em `assets/data/`.
- O visual oficial agora segue `DESIGN-SYSTEM.md`, na direção **Cinematic Reader**.
- `design-references/` guarda as telas de referência usadas para compor o redesign, mas não faz parte das rotas produtivas.
- Checkout, login e biblioteca real continuam fora do escopo desta fase. Os CTAs seguem honestos e apontam para produto, planos, catálogo ou suporte.

## Estrutura principal

```text
vita-ebooks/
├── index.html
├── planos.html
├── catalogo.html
├── ebook.html
├── sobre.html
├── suporte.html
├── conta.html
├── DESIGN-SYSTEM.md
├── DEPLOYMENT.md
├── design-references/
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── data/
└── docs/
```

## Páginas do V1

- `index.html`: home comercial com hero cinematográfico, categorias, destaques e ofertas.
- `planos.html`: comparação entre compra avulsa, clube mensal e vital premium.
- `catalogo.html`: busca, filtros, rail de categorias e grade de títulos.
- `ebook.html`: produto renderizado por `slug`, com CTA honesto para suporte e planos.
- `sobre.html`: manifesto da marca, pilares e roadmap resumido.
- `suporte.html`: FAQ do V1 e contato via `mailto`.
- `conta.html`: página “em breve”, sem login fake.

## Como testar localmente

Use um servidor local simples para evitar restrições de `fetch` nos JSONs:

```bash
python -m http.server 8000
```

## Publicação

O fluxo de publicação está em [DEPLOYMENT.md](DEPLOYMENT.md).

Resumo:

1. Revisar o estado final em `main`.
2. Enviar o conteúdo da raiz para `public_html/` na Hostinger.
3. Confirmar que todas as rotas `.html` e `assets/` carregam corretamente.

## Documentação

- [Arquitetura](docs/ARCHITECTURE.md)
- [Páginas](docs/PAGES.md)
- [Planos](docs/PLANS.md)
- [Fluxos](docs/USER-FLOWS.md)
- [Roadmap](docs/ROADMAP.md)
