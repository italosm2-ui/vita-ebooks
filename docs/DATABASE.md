# Schema do Banco de Dados — Vita Ebooks

Modelagem para Supabase (PostgreSQL). No MVP, os mesmos campos são usados nos arquivos JSON locais.

---

## Tabelas

### `ebooks`

```sql
CREATE TABLE ebooks (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug            TEXT UNIQUE NOT NULL,
  titulo          TEXT NOT NULL,
  subtitulo       TEXT,
  autor           TEXT NOT NULL,           -- nome público/pseudônimo
  pseudonimo_id   UUID REFERENCES pseudonimos(id),
  categoria_id    UUID REFERENCES categorias(id),
  descricao       TEXT,
  descricao_curta TEXT,                    -- usado nos cards
  preco           NUMERIC(10,2) NOT NULL,
  preco_promocional NUMERIC(10,2),
  paginas         INTEGER,
  formatos        TEXT[] DEFAULT '{PDF}',  -- ['PDF', 'ePub']
  destaque        BOOLEAN DEFAULT FALSE,
  lancamento      BOOLEAN DEFAULT FALSE,
  ativo           BOOLEAN DEFAULT TRUE,
  avaliacao_media NUMERIC(3,2) DEFAULT 0,
  total_vendas    INTEGER DEFAULT 0,
  capa_url        TEXT,
  arquivo_url     TEXT,                    -- URL privada no Storage
  tags            TEXT[],
  sumario         JSONB,                   -- [{capitulo, descricao}]
  aprendizados    TEXT[],                  -- bullets "o que você vai aprender"
  criado_em       TIMESTAMPTZ DEFAULT NOW(),
  atualizado_em   TIMESTAMPTZ DEFAULT NOW()
);
```

### `categorias`

```sql
CREATE TABLE categorias (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  nome        TEXT NOT NULL,
  descricao   TEXT,
  icone       TEXT,                        -- nome do ícone Lucide
  cor_acento  TEXT,                        -- hex para customização visual
  ordem       INTEGER DEFAULT 0,
  ativa       BOOLEAN DEFAULT TRUE,
  criado_em   TIMESTAMPTZ DEFAULT NOW()
);

-- Categorias iniciais:
-- 'desenvolvimento-pessoal', 'financas', 'saude-bem-estar',
-- 'relacionamentos', 'espiritualidade', 'negocios',
-- 'produtividade', 'culinaria'
```

### `pseudonimos`

> Autores fictícios com identidade editorial própria, para curadoria de nichos.

```sql
CREATE TABLE pseudonimos (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome            TEXT NOT NULL,
  slug            TEXT UNIQUE NOT NULL,
  bio             TEXT,
  especialidade   TEXT,                    -- nicho principal
  personalidade   TEXT,                    -- tom editorial
  avatar_url      TEXT,
  redes           JSONB,                   -- {instagram, tiktok, etc}
  ativo           BOOLEAN DEFAULT TRUE,
  criado_em       TIMESTAMPTZ DEFAULT NOW()
);
```

### `usuarios`

```sql
CREATE TABLE usuarios (
  id              UUID PRIMARY KEY REFERENCES auth.users(id),
  nome            TEXT,
  email           TEXT UNIQUE NOT NULL,
  avatar_url      TEXT,
  newsletter      BOOLEAN DEFAULT FALSE,
  plano           TEXT DEFAULT 'free',     -- 'free' | 'premium'
  criado_em       TIMESTAMPTZ DEFAULT NOW(),
  atualizado_em   TIMESTAMPTZ DEFAULT NOW()
);
```

### `pedidos`

```sql
CREATE TABLE pedidos (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id        UUID REFERENCES usuarios(id),
  ebook_id          UUID REFERENCES ebooks(id),
  status            TEXT DEFAULT 'pendente', -- 'pendente' | 'aprovado' | 'recusado' | 'reembolsado'
  metodo_pagamento  TEXT,                    -- 'pix' | 'cartao' | 'boleto'
  valor_cobrado     NUMERIC(10,2) NOT NULL,
  valor_original    NUMERIC(10,2),
  cupom_id          UUID REFERENCES cupons(id),
  gateway_id        TEXT,                    -- ID da transação no gateway
  gateway_raw       JSONB,                   -- resposta bruta do gateway
  download_url      TEXT,                    -- URL temporária pós-aprovação
  download_expira   TIMESTAMPTZ,
  criado_em         TIMESTAMPTZ DEFAULT NOW(),
  atualizado_em     TIMESTAMPTZ DEFAULT NOW()
);
```

### `cupons`

```sql
CREATE TABLE cupons (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo          TEXT UNIQUE NOT NULL,
  tipo            TEXT DEFAULT 'percentual', -- 'percentual' | 'fixo'
  valor           NUMERIC(10,2) NOT NULL,    -- % ou R$
  limite_usos     INTEGER,                   -- NULL = ilimitado
  usos_atuais     INTEGER DEFAULT 0,
  ativo           BOOLEAN DEFAULT TRUE,
  expira_em       TIMESTAMPTZ,
  criado_em       TIMESTAMPTZ DEFAULT NOW()
);
```

### `avaliacoes`

```sql
CREATE TABLE avaliacoes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ebook_id    UUID REFERENCES ebooks(id),
  usuario_id  UUID REFERENCES usuarios(id),
  nota        INTEGER CHECK (nota BETWEEN 1 AND 5),
  comentario  TEXT,
  aprovado    BOOLEAN DEFAULT FALSE,
  criado_em   TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(ebook_id, usuario_id)
);
```

### `newsletter_leads`

```sql
CREATE TABLE newsletter_leads (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email       TEXT UNIQUE NOT NULL,
  nome        TEXT,
  origem      TEXT,                        -- 'home' | 'ebook' | 'popup'
  ativo       BOOLEAN DEFAULT TRUE,
  criado_em   TIMESTAMPTZ DEFAULT NOW()
);
```

---

## JSON de Exemplo (MVP estático)

### `assets/data/ebooks.json`

```json
{
  "ebooks": [
    {
      "id": "ebook-001",
      "slug": "habitos-de-leitura",
      "titulo": "Hábitos de Leitura",
      "subtitulo": "Como ler mais em menos tempo",
      "autor": "Ana Vitale",
      "categoria": "desenvolvimento-pessoal",
      "descricao_curta": "Construa uma rotina de leitura sustentável em 21 dias.",
      "preco": 19.90,
      "preco_promocional": 1.00,
      "paginas": 84,
      "formatos": ["PDF", "ePub"],
      "destaque": true,
      "avaliacao_media": 4.8,
      "total_vendas": 312,
      "capa_url": "./assets/images/capas/habitos-de-leitura.jpg",
      "tags": ["leitura", "habitos", "foco"],
      "aprendizados": [
        "Como criar uma rotina de leitura de 20 minutos/dia",
        "Técnicas para absorver mais conteúdo",
        "Como escolher os livros certos para seu objetivo"
      ]
    }
  ]
}
```

### `assets/data/categorias.json`

```json
{
  "categorias": [
    { "slug": "desenvolvimento-pessoal", "nome": "Desenvolvimento Pessoal", "icone": "star" },
    { "slug": "financas", "nome": "Finanças", "icone": "trending-up" },
    { "slug": "saude-bem-estar", "nome": "Saúde & Bem-estar", "icone": "heart" },
    { "slug": "relacionamentos", "nome": "Relacionamentos", "icone": "users" },
    { "slug": "espiritualidade", "nome": "Espiritualidade", "icone": "sun" },
    { "slug": "negocios", "nome": "Negócios", "icone": "briefcase" },
    { "slug": "produtividade", "nome": "Produtividade", "icone": "zap" },
    { "slug": "culinaria", "nome": "Culinária", "icone": "utensils" }
  ]
}
```

---

## Políticas de Segurança (RLS — Supabase)

```sql
-- Usuários só acessam seus próprios dados
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
CREATE POLICY "usuarios_proprios" ON usuarios
  FOR ALL USING (auth.uid() = id);

-- Pedidos: leitura só do próprio usuário
ALTER TABLE pedidos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "pedidos_proprios" ON pedidos
  FOR SELECT USING (auth.uid() = usuario_id);

-- Arquivos de ebook: acesso só com pedido aprovado
-- (implementado via Storage Policies no Supabase)

-- Ebooks e categorias: leitura pública
ALTER TABLE ebooks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "ebooks_publicos" ON ebooks
  FOR SELECT USING (ativo = TRUE);
```

---

## Índices Recomendados

```sql
CREATE INDEX idx_ebooks_categoria ON ebooks(categoria_id);
CREATE INDEX idx_ebooks_destaque ON ebooks(destaque) WHERE destaque = TRUE;
CREATE INDEX idx_ebooks_ativo ON ebooks(ativo) WHERE ativo = TRUE;
CREATE INDEX idx_pedidos_usuario ON pedidos(usuario_id);
CREATE INDEX idx_pedidos_status ON pedidos(status);
CREATE INDEX idx_avaliacoes_ebook ON avaliacoes(ebook_id);
```
