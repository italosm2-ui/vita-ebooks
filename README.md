# Vita Ebooks 📚

Plataforma brasileira de venda e download de ebooks digitais.

## Stack

- **Frontend:** HTML5 + CSS3 (design tokens, dark/light mode) + Vanilla JS
- **Fontes:** Zodiak (display) + Satoshi (body) via Fontshare
- **Ícones:** Lucide Icons (CDN)
- **Pagamentos:** Pix, Cartão de Crédito, Boleto
- **Hospedagem:** Hostinguer (frontend estático)

## Estrutura do Projeto

```
vita-ebooks/
├── index.html                    ← Landing page
├── catalogo.html                 ← Catálogo de ebooks
├── ebook.html                    ← Página do produto (detalhe do ebook)
├── planos.html                   ← Planos e assinatura
├── sobre.html                    ← Institucional / Sobre
├── suporte.html                  ← FAQ + Suporte
│
├── auth/
│   ├── login.html                ← Login
│   ├── cadastro.html             ← Criar conta
│   ├── recuperar-senha.html      ← Recuperação de senha
│   └── nova-senha.html           ← Redefinir senha (link do e-mail)
│
├── conta/
│   ├── minha-conta.html          ← Dashboard do usuário (downloads, perfil)
│   ├── meus-ebooks.html          ← Biblioteca pessoal
│   ├── pedidos.html              ← Histórico de compras
│   ├── perfil.html               ← Editar perfil e dados
│   └── assinatura.html           ← Gerenciar plano/assinatura
│
├── checkout/
│   ├── carrinho.html             ← Carrinho de compras
│   ├── pagamento.html            ← Formulário de pagamento
│   └── confirmacao.html          ← Confirmação / pós-compra
│
├── admin/
│   ├── index.html                ← Dashboard administrativo
│   ├── ebooks.html               ← Gestão de ebooks (CRUD)
│   ├── ebook-novo.html           ← Cadastrar novo ebook
│   ├── ebook-editar.html         ← Editar ebook existente
│   ├── usuarios.html             ← Gestão de usuários
│   ├── pedidos.html              ← Gestão de pedidos
│   ├── relatorios.html           ← Relatórios e métricas
│   ├── categorias.html           ← Gestão de categorias
│   ├── cupons.html               ← Cupons de desconto
│   └── configuracoes.html        ← Configurações da plataforma
│
├── assets/
│   ├── css/
│   │   ├── tokens.css            ← Design tokens (cores, tipografia, espaçamento)
│   │   ├── base.css              ← Reset + base global
│   │   ├── components.css        ← Botões, cards, forms, badges
│   │   ├── layout.css            ← Header, footer, container, grid
│   │   └── pages/                ← Estilos específicos por página
│   │       ├── home.css
│   │       ├── catalogo.css
│   │       ├── ebook.css
│   │       ├── auth.css
│   │       ├── conta.css
│   │       ├── checkout.css
│   │       └── admin.css
│   ├── js/
│   │   ├── theme.js              ← Dark/light mode toggle
│   │   ├── nav.js                ← Header responsivo + hamburger
│   │   ├── data.js               ← Mock data de ebooks
│   │   ├── auth.js               ← Simulação de auth (login/logout)
│   │   ├── cart.js               ← Lógica do carrinho
│   │   └── admin.js              ← Lógica do painel admin
│   └── img/
│       └── .gitkeep
│
├── docs/
│   ├── ARCHITECTURE.md           ← Arquitetura e decisões técnicas
│   ├── DESIGN-SYSTEM.md          ← Design tokens e guia de estilo
│   ├── PAGES.md                  ← Especificação de cada página
│   ├── USER-FLOWS.md             ← Fluxos do usuário (compra, login, etc.)
│   ├── ADMIN-GUIDE.md            ← Guia do painel administrativo
│   └── PLANS.md                  ← Especificação de planos e preços
│
├── .gitignore
└── README.md
```

## Páginas Públicas

| Página | URL | Descrição |
|---|---|---|
| Landing | `/` | Home com hero, categorias, destaques, depoimentos |
| Catálogo | `/catalogo.html` | Grid de todos os ebooks com filtros |
| Produto | `/ebook.html?slug=nome` | Página de venda de um ebook |
| Planos | `/planos.html` | Planos gratuito, básico, premium |
| Sobre | `/sobre.html` | Institucional |
| Suporte | `/suporte.html` | FAQ + formulário de contato |

## Autenticação (`/auth/`)

| Página | Descrição |
|---|---|
| `login.html` | Entrar com e-mail e senha |
| `cadastro.html` | Criar conta (nome, e-mail, senha) |
| `recuperar-senha.html` | Solicitar link de redefinição |
| `nova-senha.html` | Definir nova senha via token |

## Área do Usuário (`/conta/`)

| Página | Descrição |
|---|---|
| `minha-conta.html` | Dashboard: downloads recentes, atividade |
| `meus-ebooks.html` | Biblioteca pessoal com botões de download |
| `pedidos.html` | Histórico de compras e status |
| `perfil.html` | Alterar nome, e-mail, senha, foto |
| `assinatura.html` | Ver plano atual, upgrade, cancelar |

## Checkout (`/checkout/`)

| Página | Descrição |
|---|---|
| `carrinho.html` | Resumo de itens + campo de cupom |
| `pagamento.html` | Pix, cartão ou boleto |
| `confirmacao.html` | Ordem confirmada + link de download |

## Painel Admin (`/admin/`)

| Página | Descrição |
|---|---|
| `index.html` | KPIs: receita, usuários, downloads, conversão |
| `ebooks.html` | Tabela de ebooks com busca e ações |
| `ebook-novo.html` | Formulário de cadastro de ebook |
| `ebook-editar.html` | Editar metadados, preço, arquivo |
| `usuarios.html` | Lista de usuários, filtros, banir/promover |
| `pedidos.html` | Todos os pedidos com status e valor |
| `relatorios.html` | Gráficos de receita, top ebooks, retenção |
| `categorias.html` | Gerenciar categorias e tags |
| `cupons.html` | Criar/editar cupons de desconto |
| `configuracoes.html` | Dados da plataforma, e-mail, integrações |

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/italosm2-ui/vita-ebooks.git
cd vita-ebooks

# Abra com live-server (Node.js)
npx live-server --port=3000

# Ou simplesmente abra o index.html no navegador
open index.html
```

## GitHub Pages

Ative em **Settings → Pages → Deploy from branch `main` → / (root)**.

URL: `https://italosm2-ui.github.io/vita-ebooks/`

## Licença

Privado — todos os direitos reservados © Vita Ebooks.
