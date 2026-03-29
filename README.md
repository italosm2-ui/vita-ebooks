# 📚 Vita Ebooks

> Plataforma editorial brasileira de venda de ebooks — estética literária, conversão direta, experiência de leitura.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)](#roadmap)
[![License](https://img.shields.io/badge/license-MIT-green)](#)

---

## Sobre o projeto

Vita Ebooks é uma plataforma de venda de ebooks com identidade visual quente e literária. O conceito parte da palavra *vita* (vida em latim) — conhecimento que nasce e cresce. O resultado é uma estética creme/bege aquecido com verde-floresta como acento primário.

## Stack

| Camada | Tecnologia |
|---|---|
| Markup | HTML5 semântico |
| Estilo | CSS custom properties + design tokens |
| Tipografia | Zodiak (display) + Satoshi (corpo) via Fontshare |
| Ícones | Lucide Icons (CDN) |
| Animações | CSS `animation-timeline: view()` (sem JS) |
| Deploy | GitHub Pages / Vercel |

## Paleta

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#f5f2ec` | Superfície principal (creme) |
| `--color-primary` | `#1a5c3a` | Verde-floresta — acento único |
| `--color-text` | `#1e1b15` | Texto principal |
| `--color-text-muted` | `#6b6860` | Texto secundário |

## Estrutura de pastas

```
vita-ebooks/
├── index.html           ← Home / Landing
├── catalogo.html        ← Catálogo com filtros
├── ebook.html           ← Página de vendas individual
├── sobre.html           ← Institucional
├── suporte.html         ← FAQ e suporte
├── minha-conta.html     ← Login / downloads
├── assets/
│   ├── css/
│   │   ├── tokens.css   ← Design tokens (cores, tipografia, espaçamento)
│   │   ├── base.css     ← Reset + base styles
│   │   └── components/  ← Estilos por componente
│   ├── js/
│   │   └── main.js      ← Comportamentos globais (tema, mobile menu)
│   └── img/             ← Capas de ebooks, imagens editoriais
└── .github/
    └── ISSUE_TEMPLATE/  ← Templates de issue
```

## Roadmap

Veja as [Issues](../../issues) organizadas por milestone para o roadmap completo detalhado.

### Milestones

1. **M1 — Fundação** — Design system, tokens, componentes base
2. **M2 — Home** — Todas as seções da landing page
3. **M3 — Catálogo** — Listagem com filtros e busca
4. **M4 — Produto** — Página de vendas do ebook
5. **M5 — Páginas de suporte** — FAQ, Sobre, Minha Conta
6. **M6 — Qualidade** — Acessibilidade, performance, dark mode, mobile QA
7. **M7 — Deploy** — GitHub Pages / domínio customizado

## Como contribuir

```bash
# Clone o repositório
git clone https://github.com/italosm2-ui/vita-ebooks.git
cd vita-ebooks

# Abra com Live Server ou qualquer servidor HTTP estático
# Não há dependências de build — HTML/CSS/JS puro
```

Siga o fluxo de branches:
- `main` — código em produção
- `develop` — branch de integração
- `feat/nome-da-feature` — novas funcionalidades
- `fix/nome-do-bug` — correções

---

*Vita Ebooks © 2026 — Conhecimento que nasce e cresce.*
