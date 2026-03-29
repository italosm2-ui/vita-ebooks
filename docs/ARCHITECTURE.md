# Arquitetura — Vita Ebooks

## Visão Geral

O Vita Ebooks é uma plataforma de venda de ebooks digitais construída como site estático (HTML + CSS + JS). Toda a lógica de negócio que envolve persistência real (autenticação, banco de dados, pagamentos) será conectada via API REST futuramente.

## Camadas

```
┌─────────────────────────────────────────────────┐
│                  FRONTEND                        │
│  HTML Semântico + CSS Tokens + Vanilla JS        │
│  Responsivo 375px → 1440px  •  Dark/Light Mode   │
└───────────────────┬─────────────────────────────┘
                    │ fetch() / XHR
┌───────────────────▼─────────────────────────────┐
│                  API REST (futura)               │
│  Auth  •  Ebooks  •  Orders  •  Users  •  Admin  │
└───────────────────┬─────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────┐
│               BANCO DE DADOS (futuro)            │
│  Usuários  •  Ebooks  •  Pedidos  •  Downloads   │
└─────────────────────────────────────────────────┘
```

## Fase Atual (Estático / Mock)

O projeto na sua fase inicial funciona 100% no browser, sem backend:

- `assets/js/data.js` → array de ebooks (mock)
- `assets/js/auth.js` → simulação de sessão em memória (sem localStorage)
- `assets/js/cart.js` → carrinho em memória
- `assets/js/admin.js` → dados fictícios no painel admin

## Design System

Ver [`docs/DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md).

## Decisões Técnicas

| Decisão | Justificativa |
|---|---|
| Sem framework JS | Mínimo de dependência para site estático |
| CSS com design tokens | Consistência visual e manutenção fácil |
| Sem localStorage | Compatibilidade com iframes e sandboxes |
| Hash routing | URLs limpas sem servidor |
| Fontshare CDN | Fontes de alta qualidade sem custo |
| Lucide Icons CDN | Ícones consistentes e leves |

## Integrações Planejadas

- **Pagamentos:** Stripe / Pagar.me / Mercado Pago
- **E-mail:** SendGrid / Mailchimp
- **Storage:** AWS S3 (arquivos de ebooks)
- **Auth:** JWT ou Supabase Auth
- **Analytics:** Plausible ou Google Analytics 4
