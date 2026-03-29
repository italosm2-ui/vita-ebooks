# Vita Ebooks

Vitrine estática da Vita Ebooks com catálogo, comparação de planos e páginas de produto preparadas para publicação manual na Hostinger.

## Direção do projeto

- GitHub é a fonte de verdade do código e da documentação.
- Hostinger é o ambiente de produção, via upload manual para `public_html/`.
- O V1 é 100% estático: HTML, CSS, JS vanilla e dados locais em `assets/data/`.
- Checkout, login e biblioteca real são próximos passos. Nesta versão, os CTAs são honestos e apontam para suporte ou comparação de planos.

## Estrutura atual

```text
vita-ebooks/
├── index.html
├── planos.html
├── catalogo.html
├── ebook.html
├── sobre.html
├── suporte.html
├── conta.html
├── DEPLOYMENT.md
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── data/
│   │   ├── categorias.json
│   │   ├── depoimentos.json
│   │   └── ebooks.json
│   ├── img/
│   │   └── .gitkeep
│   └── js/
│       └── main.js
└── docs/
    ├── ARCHITECTURE.md
    ├── PAGES.md
    ├── PLANS.md
    ├── ROADMAP.md
    └── USER-FLOWS.md
```

## Páginas do V1

- `index.html`: home comercial com proposta da marca, planos, categorias e destaques.
- `planos.html`: comparação entre compra avulsa, clube mensal e vital premium.
- `catalogo.html`: busca, filtros e ordenação do catálogo estático.
- `ebook.html`: página de produto com CTA honesto para suporte e planos.
- `sobre.html`: posicionamento da marca e roadmap resumido.
- `suporte.html`: FAQ e contato via e-mail preparado.
- `conta.html`: estado “em breve”, sem login fake.

## Como trabalhar localmente

1. Clone o repositório.
2. Abra os arquivos em um servidor local simples para testar os `fetch` de `assets/data/`.
3. Faça as alterações no repositório e revise antes de subir para produção.

Exemplo com Python:

```bash
python -m http.server 8000
```

## Publicação

O fluxo de publicação está em [DEPLOYMENT.md](DEPLOYMENT.md).

Resumo:

1. Revisar o estado final em `main`.
2. Enviar o conteúdo da raiz do projeto para `public_html/` na Hostinger.
3. Confirmar que todas as rotas `.html` e `assets/` carregam corretamente.

## Documentação

- [Arquitetura](docs/ARCHITECTURE.md)
- [Páginas](docs/PAGES.md)
- [Planos](docs/PLANS.md)
- [Fluxos](docs/USER-FLOWS.md)
- [Roadmap](docs/ROADMAP.md)
