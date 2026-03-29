# Guia do Painel Administrativo — Vita Ebooks

## Acesso

URL: `/admin/`  
Acesso restrito a usuários com role `admin`.

## Dashboard (`admin/index.html`)

### KPIs Principais

| Métrica | Descrição |
|---|---|
| Receita total do mês | Soma de todos os pedidos pagos |
| Novos usuários | Cadastros nos últimos 30 dias |
| Downloads realizados | Total de downloads do mês |
| Taxa de conversão | Visitantes que compraram / total de visitantes |

### Gráficos
- Receita por dia (últimos 30 dias) — linha
- Top 5 ebooks mais vendidos — barras horizontais
- Ebooks por categoria — pizza

---

## Gestão de Ebooks (`admin/ebooks.html`)

### Colunas da tabela
- Capa (miniatura)
- Título
- Categoria
- Preço
- Vendas totais
- Status (Publicado / Rascunho)
- Ações: Editar | Despublicar | Excluir

### Formulário de Ebook (`admin/ebook-novo.html` e `admin/ebook-editar.html`)

| Campo | Tipo | Obrigatório |
|---|---|---|
| Título | Texto | Sim |
| Autor | Texto | Sim |
| Slug (URL) | Texto | Sim |
| Descrição curta | Textarea (150 chars) | Sim |
| Descrição longa | Rich text | Sim |
| Categoria | Select | Sim |
| Tags | Multi-select | Não |
| Preço (R$) | Número | Sim |
| Preço promocional | Número | Não |
| Capa | Upload imagem | Sim |
| Arquivo PDF | Upload PDF | Sim |
| Arquivo ePub | Upload ePub | Não |
| Páginas | Número | Não |
| Idioma | Select | Sim |
| Status | Publicado / Rascunho | Sim |
| Data de publicação | Date picker | Não |

---

## Gestão de Usuários (`admin/usuarios.html`)

### Colunas
- Avatar
- Nome
- E-mail
- Plano (Gratuito / Básico / Premium)
- Data de cadastro
- Último acesso
- Status (Ativo / Bloqueado)
- Ações: Ver pedidos | Bloquear | Promover a admin

---

## Gestão de Pedidos (`admin/pedidos.html`)

### Colunas
- ID do pedido
- Usuário
- Ebook(s)
- Valor
- Método de pagamento
- Status (Pendente / Pago / Cancelado / Estornado)
- Data
- Ações: Ver detalhes | Reenviar link | Estornar

---

## Cupons de Desconto (`admin/cupons.html`)

### Campos do cupom

| Campo | Descrição |
|---|---|
| Código | Ex: VITA20 |
| Tipo | Percentual (%) ou Valor fixo (R$) |
| Desconto | Número |
| Uso máximo | Quantas vezes pode ser usado |
| Validade | Data de expiração |
| Aplicável a | Todos os ebooks / Categoria específica / Ebook específico |
| Status | Ativo / Inativo |

---

## Relatórios (`admin/relatorios.html`)

- **Receita:** por dia / semana / mês, com comparação ao período anterior
- **Top ebooks:** mais vendidos e mais baixados
- **Usuários:** cadastros por dia, retenção, planos ativos
- **Conversão:** visitantes → cadastros → compradores
- **Exportação:** CSV dos relatórios

---

## Configurações (`admin/configuracoes.html`)

### Abas
- **Geral:** nome da plataforma, logo, descrição, e-mail de contato
- **E-mail:** configurar SMTP, templates de e-mail transacional
- **Pagamentos:** chaves de API (Stripe / Pagar.me), ambientes sandbox/produção
- **Segurança:** 2FA, sessões ativas, logs de acesso admin
- **SEO:** meta tags padrão, robots.txt, sitemap
