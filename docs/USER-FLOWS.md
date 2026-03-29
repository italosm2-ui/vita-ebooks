# Fluxos do Usuário — Vita Ebooks

## Fluxo 1: Compra de Ebook (visitante)

```
[Landing] → [Catálogo ou página do produto]
         → [Página do produto]
         → [Adicionar ao carrinho]
         → [Carrinho]
         → [Cadastro / Login] ← (só se não estiver logado)
         → [Pagamento]
         → [Confirmação + Download]
```

## Fluxo 2: Login e acesso à biblioteca

```
[Header: "Entrar"]
  → [Login]
    ↳ Conta inexistente → [Cadastro]
    ↳ Esqueceu senha   → [Recuperar senha] → [E-mail] → [Nova senha]
  → [Minha Conta / Dashboard]
    → [Meus Ebooks]
      → [Download do arquivo]
```

## Fluxo 3: Assinatura de plano

```
[Planos]
  → [Selecionar plano]
  → [Login / Cadastro]
  → [Pagamento] (cartão recorrente ou Pix mensal)
  → [Confirmação de assinatura]
  → [Minha Conta → aba Assinatura]
```

## Fluxo 4: Admin — Cadastro de novo ebook

```
[Admin: login]
  → [Dashboard Admin]
    → [Ebooks → Novo ebook]
      → [Preencher: título, autor, descrição, categoria, preço, capa, arquivo PDF/ePub]
      → [Salvar]
      → [Publicado / Rascunho]
```

## Fluxo 5: Admin — Gestão de pedidos

```
[Admin: Pedidos]
  → [Listar todos os pedidos]
  → [Filtrar por status: pendente / pago / cancelado]
  → [Ver detalhes do pedido]
  → [Reenviar link de download]
  → [Estornar pedido]
```

## Estados de Sessão

| Estado | Acesso permitido |
|---|---|
| Visitante (não logado) | Landing, catálogo, página de produto, planos, auth |
| Usuário logado | + área da conta, checkout, download |
| Admin | + painel admin completo |

## Regras de Redirecionamento

- Usuário não logado tenta acessar `/conta/*` → redireciona para `/auth/login.html`
- Usuário não-admin acessa `/admin/*` → redireciona para `/index.html`
- Usuário já logado acessa `/auth/login.html` → redireciona para `/conta/minha-conta.html`
