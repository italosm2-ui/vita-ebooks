# Especificação de Páginas — Vita Ebooks

## 1. Landing Page (`index.html`)

### Seções
1. **Header sticky** — Logo, nav, toggle dark/light, CTA "Começar por R$1"
2. **Hero** — Título grande, subtítulo, pilha de capas animadas, 3 stats sociais, 2 CTAs
3. **Barra de Busca** — Fundo verde-floresta, campo de busca + select de categoria
4. **Categorias** — 8 cards em grid (Negócios, Saúde, Tecnologia, etc.)
5. **Destaques** — 6 book cards com badge, preço e avaliação
6. **Como Funciona** — 3 passos com linha conectora
7. **Depoimentos** — 3 cards com citação, avatar, cargo e cidade
8. **Newsletter** — Campo de e-mail + botão + aviso de privacidade
9. **CTA Banner** — Fundo verde total, oferta R$1 na 1ª compra
10. **Footer** — 4 colunas + links legais

---

## 2. Catálogo (`catalogo.html`)

### Elementos
- **Header** com título "Catálogo" e contagem de resultados
- **Filtros** (sidebar ou top bar): Categoria, Faixa de preço, Ordenação
- **Grid de Book Cards** (reutiliza componente da landing)
- **Paginação** ou botão "Carregar mais"

### Filtros Disponíveis
- Categoria (select)
- Faixa de preço (range ou checkboxes: Grátis, Até R$20, R$20–50, R$50+)
- Formato (PDF, ePub)
- Ordenação (Relevância, Mais vendidos, Mais recentes, Menor preço)

---

## 3. Página do Produto (`ebook.html`)

### Estrutura
```
[ Capa grande ] [ Título + autor + categoria + avaliação + preço + CTA comprar ]

[ Descrição focada em benefícios ]
[ O que você vai aprender (bullets) ]
[ Sumário / Prévia ]
[ Para quem é / Para quem não é ]
[ Detalhes técnicos: páginas, formato, idioma, atualizado em ]
[ Depoimentos específicos deste ebook ]
[ Ebooks relacionados ]
```

### Meta de Conversão
- CTA primário: "Comprar por R$ XX" sempre visível (sticky na mobile)
- Selos de segurança: pagamento seguro, download imediato, garantia 7 dias

---

## 4. Planos (`planos.html`)

### Planos

| Plano | Preço | Recursos |
|---|---|---|
| **Gratuito** | R$ 0 | 1 ebook grátis/mês, formato PDF |
| **Básico** | R$ 19,90/mês | 5 ebooks/mês, PDF + ePub |
| **Premium** | R$ 39,90/mês | Ilimitado, todos os formatos, acesso antecipado |

### Elementos da Página
- Cards de plano com destaque no Premium
- Tabela comparativa de funcionalidades
- Perguntas frequentes sobre assinatura
- CTA de cada plano

---

## 5. Auth — Login (`auth/login.html`)

### Campos
- E-mail
- Senha (com botão mostrar/ocultar)
- "Esqueceu a senha?" → recuperar-senha.html
- Botão "Entrar"
- Link "Não tem conta? Cadastrar"
- Divisor + "Entrar com Google" (placeholder)

---

## 6. Auth — Cadastro (`auth/cadastro.html`)

### Campos
- Nome completo
- E-mail
- Senha (com indicador de força)
- Confirmar senha
- Checkbox: aceitar termos + política de privacidade
- Botão "Criar conta"

---

## 7. Conta — Minha Conta (`conta/minha-conta.html`)

### Seções
- **Boas-vindas** com nome e plano atual
- **Downloads recentes** (últimos 3 ebooks)
- **Atividade** (última compra, último acesso)
- **Atalhos rápidos**: Ver biblioteca, Ver pedidos, Editar perfil

---

## 8. Conta — Meus Ebooks (`conta/meus-ebooks.html`)

### Elementos
- Grid de book cards (capas dos ebooks comprados)
- Botão de download em cada card
- Filtro por data de compra
- Estado vazio: "Você ainda não comprou nenhum ebook"

---

## 9. Checkout — Carrinho (`checkout/carrinho.html`)

### Elementos
- Lista de itens com capa, título, preço e botão remover
- Campo de cupom de desconto
- Resumo: subtotal, desconto, total
- CTA "Ir para pagamento"
- Estado vazio: "Seu carrinho está vazio + link para catálogo"

---

## 10. Checkout — Pagamento (`checkout/pagamento.html`)

### Métodos
- **Pix** → QR Code gerado + chave Pix copiável
- **Cartão de crédito** → número, nome, validade, CVV, parcelamento
- **Boleto** → gerar boleto + e-mail com link

### Resumo do pedido sempre visível na lateral (desktop) ou acima (mobile)

---

## 11. Checkout — Confirmação (`checkout/confirmacao.html`)

### Elementos
- Ícone de sucesso animado
- Título: "Compra realizada com sucesso!"
- Número do pedido
- Botão de download imediato
- Link para "Acessar minha biblioteca"
- E-mail de confirmação enviado para: [email]
