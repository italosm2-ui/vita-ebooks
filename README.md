# Vita Ebooks

Plataforma brasileira de venda de ebooks digitais com entrega imediata por download. Produção editorial com pseudônimos curados, marketing orgânico e modelo de negócio escalável.

## Visão Geral

- **Produto:** ebooks em PDF/ePub nas categorias romance, fantasia, autoajuda, negócios e saúde
- **Modelo:** venda direta com oferta de entrada em R$ 1,00 na 1ª compra
- **Público:** leitores brasileiros que buscam conteúdo acessível e download imediato
- **Meta (4 meses):** R$ 15.000/mês em receita recorrente, 500 clientes ativos

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5 + CSS (custom tokens) + JS vanilla |
| Fontes | Zodiak (Fontshare) + Satoshi (Fontshare) |
| Ícones | Lucide Icons (CDN) |
| Dados | JSON estático (`assets/data/`) |
| Checkout | Integração externa (Stripe / Mercado Pago) |
| Hosting | GitHub Pages / Vercel |
| Analytics | Google Analytics 4 |

## Estrutura de Arquivos

```
vita-ebooks/
├── index.html                  # Home / Landing principal
├── catalogo.html               # Catálogo com filtros
├── ebook.html                  # Página de produto (dinâmica via JS)
├── checkout.html               # Fluxo de compra
├── checkout-sucesso.html       # Pós-compra / confirmação
├── entrar.html                 # Login
├── criar-conta.html            # Cadastro
├── minha-biblioteca.html       # Biblioteca do leitor
├── meus-pedidos.html           # Histórico de pedidos
├── sobre.html                  # Institucional
├── faq.html                    # Perguntas frequentes
├── contato.html                # Contato
├── termos.html                 # Termos de uso
├── privacidade.html            # Política de privacidade
├── admin.html                  # Painel administrativo
├── assets/
│   ├── css/
│   │   └── style.css           # Todos os tokens + componentes
│   ├── js/
│   │   ├── main.js             # Dark mode, nav, utils globais
│   │   ├── catalogo.js         # Filtros, busca, renderização
│   │   ├── ebook.js            # Página de produto
│   │   ├── checkout.js         # Fluxo de compra
│   │   ├── conta.js            # Autenticação e biblioteca
│   │   └── admin.js            # Painel admin
│   ├── images/
│   │   ├── brand/              # Logo, favicon, og-image
│   │   ├── ebooks/             # Capas dos ebooks
│   │   └── ui/                 # Ilustrações e assets de UI
│   └── data/
│       ├── ebooks.json         # Catálogo de ebooks
│       ├── categorias.json     # Lista de categorias
│       └── depoimentos.json    # Depoimentos de leitores
└── docs/
    ├── ARCHITECTURE.md         # Estrutura do site e fluxos
    ├── DATABASE.md             # Schema de dados
    ├── ROADMAP.md              # Roadmap 4 meses
    ├── EDITORIAL.md            # Playbook editorial
    ├── MARKETING.md            # Playbook de marketing
    ├── IDENTIDADE.md           # Manual de identidade dos pseudônimos
    ├── KPIS.md                 # Dashboard de KPIs
    ├── JURIDICO.md             # Checklist jurídico-editorial
    └── GOVERNANCA.md           # Governança de comunidade
```

## Como Rodar Localmente

```bash
git clone git@github.com:italosm2-ui/vita-ebooks.git
cd vita-ebooks
# Abra index.html no browser ou use Live Server (VS Code)
```

## Deploy — GitHub Pages

1. **Settings → Pages**
2. Source: `Deploy from a branch` → `main` → `/ (root)`
3. URL: `https://italosm2-ui.github.io/vita-ebooks/`

## Documentação

| Doc | Conteúdo |
|---|---|
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Rotas, fluxos, componentes |
| [DATABASE.md](docs/DATABASE.md) | Schema JSON e modelos de dados |
| [ROADMAP.md](docs/ROADMAP.md) | Cronograma 4 meses |
| [EDITORIAL.md](docs/EDITORIAL.md) | Processo de criação de ebooks |
| [MARKETING.md](docs/MARKETING.md) | Marketing orgânico por plataforma |
| [IDENTIDADE.md](docs/IDENTIDADE.md) | Pseudônimos e identidade de marca |
| [KPIS.md](docs/KPIS.md) | Métricas e metas |
| [JURIDICO.md](docs/JURIDICO.md) | Checklist jurídico |
| [GOVERNANCA.md](docs/GOVERNANCA.md) | Governança de comunidade |
