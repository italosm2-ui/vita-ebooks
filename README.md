# Vita Ebooks

> Plataforma brasileira de venda e entrega de ebooks digitais. Catálogo curado, checkout simples, download imediato.

## Visão Geral

Vita Ebooks é uma plataforma de e-commerce focada em ebooks digitais com:
- Catálogo navegável por categorias
- Busca por título, autor e tema
- Checkout com Pix, cartão e boleto
- Entrega digital imediata pós-pagamento
- Biblioteca pessoal do leitor com re-download ilimitado
- Pseudônimos editoriais para curadoria de nichos

## Stack

| Camada | Tecnologia |
|---|---|
| Frontend (MVP) | HTML5 + CSS3 + Vanilla JS |
| Design Tokens | CSS Custom Properties (OKLCH) |
| Tipografia | Zodiak (display) + Satoshi (corpo) via Fontshare |
| Ícones | Lucide Icons (CDN) |
| Dados (MVP) | JSON estático (`assets/data/`) |
| Dados (produção) | Supabase (PostgreSQL) |
| Pagamentos | Mercado Pago / Stripe |
| Armazenamento | Supabase Storage / AWS S3 |
| Deploy | GitHub Pages (MVP) → Vercel (produção) |

## Estrutura de Pastas

```
vita-ebooks/
├── index.html              # Home / Landing
├── catalogo.html           # Catálogo com filtros
├── ebook.html              # Página de produto
├── checkout.html           # Fluxo de compra
├── sucesso.html            # Confirmação pós-compra
├── entrar.html             # Login
├── criar-conta.html        # Cadastro
├── minha-biblioteca.html   # Biblioteca do leitor
├── minha-conta.html        # Perfil e pedidos
├── faq.html                # Dúvidas frequentes
├── sobre.html              # Institucional
├── 404.html                # Página de erro
├── assets/
│   ├── css/
│   │   └── style.css       # Design tokens + componentes
│   ├── js/
│   │   ├── main.js         # Dark mode, menu mobile, utils
│   │   ├── catalogo.js     # Filtros, busca, ordenação
│   │   ├── ebook.js        # Página de produto
│   │   ├── checkout.js     # Fluxo de compra
│   │   └── conta.js        # Área do leitor
│   ├── images/
│   │   ├── capas/          # Capas dos ebooks
│   │   └── ui/             # Assets da interface
│   └── data/
│       ├── ebooks.json     # Catálogo de ebooks
│       ├── categorias.json # Categorias e metadados
│       └── depoimentos.json
└── docs/                   # Documentação técnica e estratégica
    ├── ARCHITECTURE.md
    ├── DATABASE.md
    ├── ROADMAP.md
    ├── EDITORIAL.md
    ├── MARKETING.md
    ├── IDENTIDADE.md
    ├── KPIS.md
    ├── JURIDICO.md
    └── GOVERNANCA.md
```

## Como Rodar Localmente

```bash
git clone https://github.com/italosm2-ui/vita-ebooks.git
cd vita-ebooks
# Qualquer servidor HTTP local funciona:
npx serve .
# ou
python3 -m http.server 8080
```

Acesse `http://localhost:8080`

## Deploy

**MVP — GitHub Pages:**
- Settings → Pages → Source: `main` / `/ (root)`
- URL: `https://italosm2-ui.github.io/vita-ebooks/`

**Produção — Vercel:**
```bash
npx vercel --prod
```

## Documentação

| Documento | Conteúdo |
|---|---|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Estrutura de páginas, rotas e fluxos |
| [DATABASE.md](docs/DATABASE.md) | Schema do banco de dados |
| [ROADMAP.md](docs/ROADMAP.md) | Roadmap estratégico 4 meses |
| [EDITORIAL.md](docs/EDITORIAL.md) | Playbook editorial |
| [MARKETING.md](docs/MARKETING.md) | Estratégia de marketing orgânico |
| [IDENTIDADE.md](docs/IDENTIDADE.md) | Manual de identidade dos pseudônimos |
| [KPIS.md](docs/KPIS.md) | Dashboard de KPIs |
| [JURIDICO.md](docs/JURIDICO.md) | Checklist jurídico-editorial |
| [GOVERNANCA.md](docs/GOVERNANCA.md) | Governança de comunidade |

## Licença

Privado — todos os direitos reservados.
