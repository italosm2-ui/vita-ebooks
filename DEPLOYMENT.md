# Deploy Manual na Hostinger

## Objetivo

Publicar a versão estática da Vita Ebooks sem build e sem automação de deploy.

## Premissas

- A produção roda no domínio raiz.
- O conteúdo da raiz do repositório espelha o que vai para `public_html/`.
- GitHub continua sendo a fonte de verdade do código.

## Passo a passo

1. Revise a branch `main`.
2. Confirme que `index.html`, as páginas `.html` e `assets/` estão atualizados.
3. No painel da Hostinger, abra o File Manager do domínio.
4. Entre em `public_html/`.
5. Envie os arquivos e pastas da raiz do projeto para `public_html/`.
6. Substitua os arquivos antigos pelos novos.
7. Abra o domínio e valide:
   - `index.html`
   - `planos.html`
   - `catalogo.html`
   - `ebook.html?slug=habitos-atomicos`
   - `sobre.html`
   - `suporte.html`
   - `conta.html`
8. Verifique que `assets/css/style.css`, `assets/js/main.js` e `assets/data/*.json` carregaram sem erro.

## Checklist rápido

- Sem links `href="#"`.
- Sem imagens `picsum.photos`.
- Sem formulários falsos com `return false`.
- Sem referência a GitHub Pages ou `github.io`.
- Todas as rotas usam `.html` explicitamente.

## Observação

Se a Hostinger mantiver arquivos antigos que não existem mais no repositório, remova-os manualmente para evitar que páginas velhas continuem acessíveis.
