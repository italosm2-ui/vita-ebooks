# Arquitetura — Vita Ebooks

## Visão Geral

Site estático com HTML/CSS/JS puro no MVP, evoluindo para integração com Supabase e gateway de pagamento. Toda navegação é baseada em arquivos HTML separados, com dados carregados de arquivos JSON locais.

---

## Mapa de Páginas

### Públicas

| Rota | Arquivo | Propósito |
|---|---|---|
| `/` | `index.html` | Landing principal + conversão |
| `/catalogo` | `catalogo.html` | Grid de ebooks com filtros e busca |
| `/ebook/:slug` | `ebook.html?slug=...` | Página de vendas do produto |
| `/sobre` | `sobre.html` | Institucional + credibilidade |
| `/faq` | `faq.html` | Dúvidas sobre compra, entrega, reembolso |
| `/404` | `404.html` | Página de erro |

### Fluxo de Compra

| Rota | Arquivo | Propósito |
|---|---|---|
| `/checkout` | `checkout.html` | Formulário de pagamento |
| `/sucesso` | `sucesso.html` | Confirmação + acesso à biblioteca |

### Área do Leitor

| Rota | Arquivo | Propósito |
|---|---|---|
| `/entrar` | `entrar.html` | Login |
| `/criar-conta` | `criar-conta.html` | Cadastro |
| `/minha-biblioteca` | `minha-biblioteca.html` | Ebooks comprados + download |
| `/minha-conta` | `minha-conta.html` | Perfil, pedidos, configurações |

---

## Seções da Home (`index.html`)

```
1. Header sticky (logo + nav + toggle dark/light + login/cadastro)
2. Hero (título display, subtítulo, CTA primário, pilha de capas, 3 stats)
3. Barra de Busca (fundo verde-floresta, campo + select categoria + botão)
4. Categorias (grid 2×4, 8 cards com ícone, nome e seta animada)
5. Ebooks Destaque (grid 3 colunas, 6 cards de produto)
6. Como Funciona (3 passos: escolher → pagar → baixar)
7. Depoimentos (3 cards com citação, nome, cidade)
8. Newsletter (campo email + CTA + aviso privacidade)
9. Banner CTA Final (fundo verde integral, oferta R$1 na 1ª compra)
10. Footer (4 colunas: Plataforma, Empresa, Suporte, Links legais)
```

---

## Fluxos de Navegação

### Fluxo de Descoberta
```
Home
  → Busca / Categoria
    → Catálogo (filtrado)
      → Página do Ebook
        → Checkout
```

### Fluxo de Compra
```
Página do Ebook
  → [Comprar agora]
    → Checkout
      → [Pagamento aprovado] → Sucesso → Minha Biblioteca
      → [Pagamento recusado] → Erro inline no checkout
      → [Pendente Pix/Boleto] → Página aguardando
```

### Fluxo do Leitor Recorrente
```
Home ou e-mail
  → Entrar
    → Minha Biblioteca
      → [Baixar] → Download do PDF/ePub
```

---

## Componentes Reutilizáveis

| Componente | Uso | Arquivo JS |
|---|---|---|
| `BookCard` | Catálogo, Destaque, Biblioteca | `main.js` |
| `CategoryCard` | Grid de categorias | `main.js` |
| `SearchBar` | Home + Catálogo | `catalogo.js` |
| `FilterToolbar` | Catálogo | `catalogo.js` |
| `PriceBlock` | Página do ebook | `ebook.js` |
| `TestimonialCard` | Home + Ebook | `main.js` |
| `NewsletterForm` | Home + Footer | `main.js` |
| `EmptyState` | Catálogo vazio, Biblioteca vazia | `main.js` |
| `ThemeToggle` | Header | `main.js` |
| `MobileMenu` | Header | `main.js` |

---

## Design Tokens

### Paleta de Cores

```css
/* Vita Ebooks — Verde floresta + creme aquecido */
:root {
  /* Superfícies */
  --color-bg:             #f5f3ee; /* creme quente */
  --color-surface:        #f9f7f3;
  --color-surface-2:      #fdfcfa;
  --color-surface-offset: #eeebe5;

  /* Texto */
  --color-text:           #1c1a14;
  --color-text-muted:     #6b6860;
  --color-text-faint:     #b0ae9e;
  --color-text-inverse:   #f9f7f3;

  /* Primário — Verde Floresta */
  --color-primary:        #1a5c3a;
  --color-primary-hover:  #144830;
  --color-primary-active: #0e3422;
  --color-primary-highlight: #d4e8dc;

  /* Outros tokens em style.css */
}
```

### Tipografia

```css
--font-display: 'Zodiak', Georgia, serif;   /* Títulos e headings */
--font-body:    'Satoshi', 'Inter', sans-serif; /* Corpo e UI */
```

### Breakpoints

| Nome | Largura | Uso |
|---|---|---|
| Mobile | 375px+ | Layout base (mobile-first) |
| Tablet | 768px+ | Grid 2 colunas |
| Desktop | 1024px+ | Grid completo, sidebar |
| Wide | 1440px+ | Container máximo |

---

## Estrutura de Dados (MVP — JSON Estático)

Os dados do catálogo são carregados de `assets/data/ebooks.json` via `fetch()`. Na produção, este fetch aponta para a API do Supabase.

```javascript
// Exemplo de carregamento
const res = await fetch('./assets/data/ebooks.json');
const { ebooks } = await res.json();
renderCatalog(ebooks);
```

---

## Evolução da Arquitetura

```
Fase 1 (MVP):
  HTML estático + JSON local + GitHub Pages

Fase 2 (Integração pagamento):
  Checkout → Mercado Pago / Stripe
  Webhook → marcar pedido como pago
  Email automático com link de download

Fase 3 (Backend):
  Supabase Auth (login/cadastro)
  Supabase DB (ebooks, usuários, pedidos)
  Supabase Storage (arquivos PDF/ePub)
  Row Level Security para downloads privados

Fase 4 (Escala):
  Vercel Deploy + CDN
  Painel admin completo
  Analytics e KPIs em tempo real
```
