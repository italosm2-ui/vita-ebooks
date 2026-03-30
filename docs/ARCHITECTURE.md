# Arquitetura — Vita Ebooks

## Princípio

O repositório espelha o pacote que vai para `public_html/` na Hostinger. Não há build, bundler, rotas SPA ou backend nesta fase.

## Rotas públicas

| URL | Arquivo | Papel |
|---|---|---|
| `/` | `index.html` | Home comercial |
| `/planos.html` | `planos.html` | Comparação de ofertas |
| `/catalogo.html` | `catalogo.html` | Catálogo com busca, chips e filtros |
| `/ebook.html?slug=...` | `ebook.html` | Página de produto |
| `/sobre.html` | `sobre.html` | Posicionamento da marca |
| `/suporte.html` | `suporte.html` | FAQ e contato |
| `/conta.html` | `conta.html` | Preview pública da área do assinante |

## Rotas internas estruturais

| URL | Arquivo | Papel |
|---|---|---|
| `/aluno/dashboard.html` | `aluno/dashboard.html` | Visão geral da área do assinante |
| `/aluno/biblioteca.html` | `aluno/biblioteca.html` | Biblioteca com salvos, favoritos e recentes |
| `/aluno/perfil.html` | `aluno/perfil.html` | Perfil com estatísticas semanais |
| `/aluno/configuracoes.html` | `aluno/configuracoes.html` | Preferências, acesso e segurança |
| `/aluno/esqueci-senha.html` | `aluno/esqueci-senha.html` | Recuperação de acesso com suporte honesto |

## Camadas

### HTML

- Cada página tem sua própria rota `.html`.
- O site público usa header comercial e footer compartilhados.
- A área `/aluno/` usa shell próprio com sidebar e topbar.
- Não existem partials, includes ou dependências de servidor.

### CSS

- Um único arquivo compartilhado em `assets/css/style.css`.
- A base visual cobre site público e a camada `/aluno/`.
- O design system oficial está em `DESIGN-SYSTEM.md`, com tokens e regras da direção **Cinematic Reader**.

### JS

- Um único arquivo em `assets/js/main.js`.
- Responsável por tema, shell público, shell logado, renderização dos dados do catálogo, produto e área `/aluno/`, filtros e geração dos contatos via `mailto:`.

### Dados

- `assets/data/ebooks.json`
- `assets/data/categorias.json`
- `assets/data/depoimentos.json`
- `assets/data/aluno.json`

Os dados são estáticos e carregados no cliente. Em ambiente local, o ideal é usar um servidor simples para evitar restrições de `fetch`.

### Referências visuais

- `design-references/` guarda as telas de referência usadas no redesign.
- Essas referências não devem ser tratadas como rotas produtivas nem como código-fonte final do site público.

## Decisões importantes

- GitHub é a fonte de verdade.
- Hostinger é a produção.
- `main` representa a versão pronta para upload.
- A conta pública continua sendo uma vitrine honesta; a camada `/aluno/` não finge backend real.
- O modo escuro é a referência principal da marca; o modo claro é a inversão tonal coerente do mesmo sistema.
- Todos os CTAs levam para catálogo, planos, produto ou suporte.
