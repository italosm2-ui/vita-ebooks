# Vita Ebooks

Plataforma brasileira de venda de ebooks com design editorial, tema claro/escuro, totalmente responsivo e acessível.

## Estrutura

```
vita-ebooks/
├── index.html              ← Landing page principal
├── assets/
│   ├── css/style.css       ← Design tokens + todos os componentes
│   └── js/main.js          ← Dark mode, menu mobile, renderização dinâmica
└── README.md
```

## Design

- **Tipografia:** Zodiak (display/títulos) + Satoshi (corpo) — via Fontshare CDN
- **Paleta:** Creme/bege aquecido + Verde-floresta `#1a5c3a` como acento único
- **Modo escuro:** Automático via `prefers-color-scheme` + toggle manual
- **Responsivo:** 375px → 1440px+
- **Acessível:** HTML semântico, hierarquia de headings, `aria-label`, foco visível, reduced-motion

## Seções

| Seção | Função |
|---|---|
| Header sticky | Navegação + dark mode toggle + menu mobile |
| Hero | Título display, pilha de capas, 3 stats de prova social |
| Busca | Campo + filtro de categoria em fundo verde |
| Categorias | 8 cards com ícone e contagem |
| Destaques | 6 cards de ebook com badge, preço e avaliação |
| Como funciona | 3 passos com numeração circular |
| Depoimentos | 3 cards com citação e avaliação |
| Newsletter | Formulário com feedback inline |
| CTA Banner | Fundo verde, oferta R$1,00 na 1ª compra |
| Footer | 4 colunas + links legais |

## Próximas páginas

- `catalogo.html` — Grid com filtros e paginação
- `ebook.html` — Página de produto individual
- `suporte.html` — FAQ por tópicos
- `sobre.html` — Institucional
- `conta.html` — Login + biblioteca do leitor

## GitHub Pages

1. **Settings → Pages**
2. Source: `Deploy from a branch` → `main` → `/ (root)`
3. URL: `https://italosm2-ui.github.io/vita-ebooks/`

## Desenvolvimento local

```bash
# Qualquer servidor estático funciona, ex:
npx serve .
# ou
python3 -m http.server 8080
```
