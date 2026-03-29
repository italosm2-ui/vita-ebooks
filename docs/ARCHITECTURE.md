# Arquitetura — Vita Ebooks

Documentação da estrutura do site: páginas, rotas, fluxos de navegação e componentes reutilizáveis.

---

## Mapa de Páginas

### Públicas

| Rota | Arquivo | Função |
|---|---|---|
| `/` | `index.html` | Landing principal, conversão, catálogo destaque |
| `/catalogo` | `catalogo.html` | Grid com filtros, busca, paginação |
| `/ebook/:slug` | `ebook.html` | Página de produto + compra |
| `/sobre` | `sobre.html` | Institucional, proposta, equipe |
| `/faq` | `faq.html` | Perguntas frequentes agrupadas por tópico |
| `/contato` | `contato.html` | Formulário de contato |
| `/termos` | `termos.html` | Termos de uso |
| `/privacidade` | `privacidade.html` | Política de privacidade |

### Conta do Leitor

| Rota | Arquivo | Função |
|---|---|---|
| `/entrar` | `entrar.html` | Login com email/senha |
| `/criar-conta` | `criar-conta.html` | Cadastro novo usuário |
| `/minha-biblioteca` | `minha-biblioteca.html` | Ebooks comprados + download |
| `/meus-pedidos` | `meus-pedidos.html` | Histórico + recibos |

### Fluxo de Compra

| Rota | Arquivo | Função |
|---|---|---|
| `/checkout` | `checkout.html` | Formulário de pagamento |
| `/checkout/sucesso` | `checkout-sucesso.html` | Confirmação + link para biblioteca |

### Admin

| Rota | Arquivo | Função |
|---|---|---|
| `/admin` | `admin.html` | Dashboard com KPIs |

---

## Fluxos de Navegação

### Fluxo de Descoberta
```
Home → Busca / Categorias → Catálogo → Página do Ebook
```

### Fluxo de Compra
```
Página do Ebook → Checkout → Sucesso → Minha Biblioteca
```

### Fluxo de Retorno
```
Entrar → Minha Biblioteca → Download do Ebook
```

### Fluxo de Primeira Compra (Oferta R$ 1,00)
```
Home (CTA) → Criar Conta → Checkout (R$ 1,00 aplicado) → Sucesso → Biblioteca
```

---

## Seções da Home (`index.html`)

| # | Seção | Função | Decisão de Design |
|---|---|---|---|
| 1 | Header sticky | Navegação + dark mode + acesso à conta | Blur backdrop, sombra no scroll |
| 2 | Hero | Primeira impressão + CTA | Título Zodiak, pilha de capas animadas, 3 stats |
| 3 | Barra de busca | Descoberta imediata | Fundo verde-floresta, contraste alto |
| 4 | Categorias (8 cards) | Exploração do catálogo | Grid responsivo 2→4 cols, seta animada |
| 5 | Destaques (6 livros) | Produtos em evidência | Cards com capa, badge, preço, rating |
| 6 | Como Funciona | Redução de fricção | 3 passos com linha conectora |
| 7 | Depoimentos | Prova social | 3 cards com citação, avatar, cargo |
| 8 | Newsletter | Captação de leads | Form simples + aviso de privacidade |
| 9 | CTA Banner | Conversão final | Fundo verde total, oferta R$ 1,00 |
| 10 | Footer | Navegação secundária | 4 colunas de links |

---

## Componentes Reutilizáveis

### Componentes de UI

| Componente | Classe CSS | Usado em |
|---|---|---|
| Book Card | `.book-card` | Home, Catálogo, Busca |
| Category Card | `.category-card` | Home, Catálogo |
| Testimonial Card | `.testimonial-card` | Home, Ebook |
| Price Block | `.price-block` | Ebook, Checkout |
| Search Bar | `.search-bar` | Home, Catálogo |
| Newsletter Form | `.newsletter-form` | Home, Footer |
| Badge | `.badge` | Book Card |
| Button Primary | `.btn-primary` | Global |
| Button Secondary | `.btn-secondary` | Global |
| Button Ghost | `.btn-ghost` | Global |
| Modal | `.modal` | Login, Confirmações |
| Empty State | `.empty-state` | Biblioteca, Pedidos |
| Skeleton Loader | `.skeleton` | Catálogo, Biblioteca |

### Componentes de Layout

| Componente | Classe CSS | Função |
|---|---|---|
| Container | `.container` | max-width centralizado |
| Section | `.section` | Espaçamento padrão entre seções |
| Grid | `.grid-books` | Grid responsivo de livros |
| Grid Categories | `.grid-categories` | Grid de categorias |

---

## Design System

### Paleta de Cores (Vita — Verde Floresta)

```css
:root {
  /* Acento primário — verde-floresta */
  --color-primary:        #1a5c3a;
  --color-primary-hover:  #154a2f;
  --color-primary-active: #0f3620;

  /* Superfícies — creme/bege aquecido */
  --color-bg:             #faf8f3;
  --color-surface:        #fdf9f0;
  --color-surface-2:      #fefcf7;
  --color-surface-offset: #f5f1e8;

  /* Texto */
  --color-text:           #1c1a14;
  --color-text-muted:     #6b6860;
  --color-text-faint:     #b0ae9c;
  --color-text-inverse:   #faf8f3;
}
```

### Tipografia

```css
:root {
  --font-display: 'Zodiak', 'Georgia', serif;       /* Títulos h1-h3 */
  --font-body:    'Satoshi', 'Helvetica Neue', sans-serif; /* Corpo, UI */
}
```

**Fontes via Fontshare:**
```html
<link href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,700&f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet">
```

### Escala Tipográfica

```css
--text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);
--text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);
--text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
--text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);
--text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);
--text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);
--text-3xl:  clamp(2.5rem,   1rem    + 4vw,    5rem);
```

---

## Responsividade

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | 375px | 1 coluna, menu hamburger |
| Mobile L | 480px | 2 colunas categorias |
| Tablet | 768px | 2-3 colunas livros, nav visível |
| Desktop | 1024px | 3-4 colunas, layout completo |
| Wide | 1440px | Max-width 1200px centralizado |

---

## Dark Mode

- Toggle sun/moon no header com `data-theme-toggle`
- `data-theme="dark"` no `<html>` ativa o modo escuro
- `prefers-color-scheme` como fallback automático
- Preferência salva em variável JS (sem localStorage — bloqueia em iframes)

---

## Performance

- Imagens com `loading="lazy"` e `decoding="async"`
- JS com `defer` em todos os scripts
- Fontes com `font-display: swap`
- `content-visibility: auto` nas seções fora do viewport
- Dados carregados de JSON estático (`fetch` no client)
