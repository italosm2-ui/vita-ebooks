# Vita Ebooks

Plataforma brasileira de venda de ebooks digitais. Site estático (HTML + CSS + JS), sem dependências de build.

## Estrutura

```
vita-ebooks/
├── index.html           # Landing page principal
├── catalogo.html        # Catálogo com filtros (a criar)
├── ebook.html           # Página de produto individual (a criar)
├── suporte.html         # FAQ e suporte (a criar)
├── sobre.html           # Sobre a plataforma (a criar)
├── conta.html           # Login / Minha conta (a criar)
├── assets/
│   ├── css/style.css    # Design system + componentes
│   └── js/main.js       # Interatividade (dark mode, menu, ebooks mock)
└── README.md
```

## Design

- **Paleta:** creme/bege aquecido + verde-floresta `#1a5c3a`
- **Tipografia:** Zodiak (display) + Satoshi (corpo) via Fontshare
- **Modo escuro/claro:** automático via `prefers-color-scheme` + toggle manual
- **Responsivo:** 375px → 1440px+
- **Acessibilidade:** WCAG AA, HTML semântico, skip link, aria-labels

## GitHub Pages

1. Settings → Pages → Source: `main` / `/ (root)`
2. URL: `https://italosm2-ui.github.io/vita-ebooks/`

## Próximas páginas

- [ ] `catalogo.html` — grid filtrado com categorias e busca
- [ ] `ebook.html` — página de vendas individual
- [ ] `suporte.html` — FAQ + formulário de contato
- [ ] `sobre.html` — institucional
- [ ] `conta.html` — login + biblioteca do leitor
