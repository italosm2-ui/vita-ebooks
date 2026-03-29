# Schema de Dados — Vita Ebooks

Documentação dos modelos de dados usados no frontend estático. Os JSONs ficam em `assets/data/`. Quando houver backend, este schema serve como base para o banco de dados.

---

## Ebook

**Arquivo:** `assets/data/ebooks.json`

```json
{
  "id": "ebook-001",
  "slug": "o-ultimo-horizonte",
  "titulo": "O Último Horizonte",
  "subtitulo": "Uma jornada além dos limites",
  "autor": "Marina Lessa",
  "pseudonimo_id": "pseudo-001",
  "categoria": "romance",
  "tags": ["aventura", "superação", "drama"],
  "preco": 19.90,
  "preco_promocional": 1.00,
  "preco_original": 29.90,
  "avaliacao": 4.8,
  "total_avaliacoes": 142,
  "total_vendas": 380,
  "paginas": 184,
  "palavras": 48000,
  "formatos": ["PDF", "ePub"],
  "lingua": "pt-BR",
  "isbn": "978-65-XXXXX-XX-X",
  "destaque": true,
  "lancamento": false,
  "mais_vendido": true,
  "status": "publicado",
  "capa": "/assets/images/ebooks/o-ultimo-horizonte.jpg",
  "descricao_curta": "Uma mulher perdida num mundo que nunca a esperou.",
  "descricao": "Descrição completa do ebook com benefícios e proposta de valor...",
  "o_que_voce_vai_aprender": [
    "Como lidar com mudanças repentinas",
    "A importância da resiliência",
    "Construir novos começos"
  ],
  "sumario": [
    { "capitulo": 1, "titulo": "O primeiro passo" },
    { "capitulo": 2, "titulo": "Encontros inesperados" }
  ],
  "arquivo_url": "/downloads/o-ultimo-horizonte.pdf",
  "data_publicacao": "2026-01-15",
  "data_atualizacao": "2026-03-01"
}
```

---

## Categoria

**Arquivo:** `assets/data/categorias.json`

```json
{
  "id": "cat-001",
  "slug": "romance",
  "nome": "Romance",
  "descricao": "Histórias de amor, paixão e relacionamentos.",
  "icone": "heart",
  "total_ebooks": 24,
  "destaque": true,
  "ordem": 1
}
```

**Categorias previstas:**

| Slug | Nome | Ícone |
|---|---|---|
| `romance` | Romance | heart |
| `fantasia` | Fantasia | sparkles |
| `autoajuda` | Autoajuda | sun |
| `negocios` | Negócios | briefcase |
| `saude` | Saúde & Bem-estar | leaf |
| `suspense` | Suspense & Thriller | eye |
| `historia` | História & Biografia | book-open |
| `tecnologia` | Tecnologia | cpu |

---

## Usuário

**Usado em:** `conta.js` (estado em memória / integração futura)

```json
{
  "id": "user-001",
  "nome": "João Silva",
  "email": "joao@email.com",
  "avatar_url": null,
  "plano": "free",
  "status": "ativo",
  "biblioteca": ["ebook-001", "ebook-003", "ebook-007"],
  "favoritos": ["ebook-010", "ebook-015"],
  "total_gasto": 59.70,
  "cupons_usados": ["PRIMEIRACOMPRA"],
  "data_cadastro": "2026-02-10",
  "ultimo_acesso": "2026-03-29"
}
```

---

## Pedido

**Usado em:** `conta.js` e painel admin

```json
{
  "id": "order-001",
  "usuario_id": "user-001",
  "ebook_id": "ebook-001",
  "ebook_titulo": "O Último Horizonte",
  "ebook_capa": "/assets/images/ebooks/o-ultimo-horizonte.jpg",
  "valor_original": 19.90,
  "desconto": 18.90,
  "valor_pago": 1.00,
  "cupom_aplicado": "PRIMEIRACOMPRA",
  "metodo_pagamento": "pix",
  "status": "aprovado",
  "gateway": "mercadopago",
  "gateway_id": "mp-txn-XXXXX",
  "data_pedido": "2026-03-15T14:32:00Z",
  "data_pagamento": "2026-03-15T14:32:45Z",
  "download_disponivel": true,
  "downloads_realizados": 2
}
```

**Status possíveis:** `pendente` | `aprovado` | `recusado` | `estornado` | `expirado`

---

## Cupom

```json
{
  "id": "cup-001",
  "codigo": "PRIMEIRACOMPRA",
  "tipo": "valor_fixo",
  "desconto": 18.90,
  "desconto_percentual": null,
  "valor_minimo": 19.90,
  "usos_maximos": 1000,
  "usos_realizados": 347,
  "uso_por_usuario": 1,
  "ativo": true,
  "aplica_em": "todos",
  "categorias_restritas": [],
  "ebooks_restritos": [],
  "data_inicio": "2026-01-01",
  "data_expiracao": "2026-12-31"
}
```

**Tipos de cupom:** `valor_fixo` | `percentual` | `frete_gratis`

---

## Pseudônimo

**Arquivo:** `assets/data/pseudonimos.json` (uso interno)

```json
{
  "id": "pseudo-001",
  "nome": "Marina Lessa",
  "genero": "feminino",
  "genero_literario": "romance",
  "personalidade": "empática, apaixonada, introspectiva",
  "bio_curta": "Marina Lessa é uma escritora apaixonada por histórias de superação e amor.",
  "bio_completa": "...",
  "foto": "/assets/images/autores/marina-lessa.jpg",
  "redes_sociais": {
    "instagram": "@marinalessa.livros",
    "tiktok": "@marinalessa"
  },
  "ebooks": ["ebook-001", "ebook-004"],
  "total_vendas": 850,
  "ativo": true
}
```

---

## Depoimento

**Arquivo:** `assets/data/depoimentos.json`

```json
{
  "id": "dep-001",
  "nome": "Fernanda Costa",
  "cargo": "Professora",
  "cidade": "São Paulo – SP",
  "avaliacao": 5,
  "texto": "Comprei por impulso e não me arrependi. A leitura foi uma das melhores experiências que tive.",
  "ebook_id": "ebook-001",
  "ebook_titulo": "O Último Horizonte",
  "data": "2026-02-20",
  "destaque": true
}
```

---

## Relações entre Modelos

```
Categoria ←── Ebook ──→ Pseudônimo
                │
                ▼
             Pedido ──→ Usuário
                │
               Cupom

Ebook ──→ Depoimento
Usuário ──→ Depoimento (futuro)
```

---

## Exemplo: `ebooks.json` (array completo)

```json
[
  {
    "id": "ebook-001",
    "slug": "o-ultimo-horizonte",
    "titulo": "O Último Horizonte",
    "autor": "Marina Lessa",
    "categoria": "romance",
    "preco": 19.90,
    "preco_promocional": 1.00,
    "avaliacao": 4.8,
    "destaque": true,
    "mais_vendido": true,
    "capa": "/assets/images/ebooks/o-ultimo-horizonte.jpg",
    "descricao_curta": "Uma mulher perdida num mundo que nunca a esperou."
  }
]
```

> **Nota:** Para o MVP, os dados são servidos por JSON estático. Quando houver backend (Node.js/Supabase), este schema define a estrutura das tabelas.
