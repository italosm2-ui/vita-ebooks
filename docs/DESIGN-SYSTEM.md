# Design System — Vita Ebooks

## Art Direction

```
Conceito: vita (vida em latim) + universo editorial brasileiro
Tom: quente, literário, confiável, crescimento
Paleta: creme/bege aquecido + verde-floresta como acento primário
Tipografia: Zodiak (display serifa) + Satoshi (body sans-serif)
Densidade: balanced — generoso nas landings, denso no admin
```

## Paleta de Cores

### Light Mode

| Token | Hex | Uso |
|---|---|---|
| `--color-bg` | `#f7f4ee` | Fundo geral |
| `--color-surface` | `#faf8f3` | Cards, modais |
| `--color-surface-2` | `#fdfcf9` | Elevação secundária |
| `--color-surface-offset` | `#f0ece3` | Seções alternadas |
| `--color-text` | `#1e1a12` | Texto principal |
| `--color-text-muted` | `#6b6558` | Texto secundário |
| `--color-text-faint` | `#b5b0a6` | Placeholders, labels |
| `--color-text-inverse` | `#faf8f3` | Texto em fundo escuro |
| `--color-primary` | `#1a5c3a` | Verde-floresta (CTA) |
| `--color-primary-hover` | `#154d30` | Hover em verde |
| `--color-primary-active` | `#0f3b24` | Active em verde |
| `--color-primary-highlight` | `#d2e8db` | Fundo leve de destaque |
| `--color-border` | `#dbd6cc` | Bordas |
| `--color-divider` | `#e5e1d8` | Separadores |

### Dark Mode

| Token | Hex |
|---|---|
| `--color-bg` | `#141210` |
| `--color-surface` | `#1a1815` |
| `--color-text` | `#cbc8c2` |
| `--color-primary` | `#4a9e6e` |

## Tipografia

### Fontes

```html
<!-- Fontshare -->
<link href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
```

| Variável | Fonte | Uso |
|---|---|---|
| `--font-display` | Zodiak, Georgia, serif | Títulos h1–h3 |
| `--font-body` | Satoshi, system-ui, sans-serif | Corpo, UI |

### Escala de Tamanhos

```css
--text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);  /* 12–14px */
--text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);      /* 14–16px */
--text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);  /* 16–18px */
--text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);    /* 18–24px */
--text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);   /* 24–36px */
--text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);    /* 32–56px */
--text-3xl:  clamp(2.5rem,   1rem    + 4vw,    5rem);       /* 40–80px */
```

## Espaçamento (4px base)

```css
--space-1: 0.25rem;  /*  4px */
--space-2: 0.5rem;   /*  8px */
--space-4: 1rem;     /* 16px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-24: 6rem;    /* 96px */
```

## Bordas e Sombras

```css
--radius-sm:   0.375rem;
--radius-md:   0.5rem;
--radius-lg:   0.75rem;
--radius-xl:   1rem;
--radius-full: 9999px;

--shadow-sm: 0 1px 2px oklch(0.2 0.03 80 / 0.06);
--shadow-md: 0 4px 12px oklch(0.2 0.03 80 / 0.08);
--shadow-lg: 0 12px 32px oklch(0.2 0.03 80 / 0.12);
```

## Componentes Base

### Botões

| Classe | Uso |
|---|---|
| `.btn.btn-primary` | CTA principal (verde) |
| `.btn.btn-secondary` | Ação secundária (outline) |
| `.btn.btn-ghost` | Ação terciária (sem borda) |
| `.btn.btn-danger` | Ação destrutiva (vermelho) |

### Badges

| Classe | Cor |
|---|---|
| `.badge-novo` | Verde |
| `.badge-destaque` | Âmbar |
| `.badge-oferta` | Vermelho |
| `.badge-gratuito` | Cinza |

### Cards de Ebook

Estrutura padrão:

```html
<article class="book-card">
  <div class="book-card__cover">
    <img src="..." alt="Capa do ebook" />
    <span class="badge badge-destaque">Destaque</span>
  </div>
  <div class="book-card__body">
    <p class="book-card__category">Categoria</p>
    <h3 class="book-card__title">Título do Ebook</h3>
    <p class="book-card__author">Autor</p>
    <div class="book-card__rating">★★★★☆ 4.7</div>
    <div class="book-card__footer">
      <span class="book-card__price">R$ 19,90</span>
      <a href="/ebook.html?slug=titulo" class="btn btn-primary btn-sm">Ver detalhes</a>
    </div>
  </div>
</article>
```
