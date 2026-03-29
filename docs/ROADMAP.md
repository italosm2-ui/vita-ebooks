# ROADMAP — Vita Ebooks

## Visão geral
Este documento descreve as entregas planejadas por fase para a plataforma Vita Ebooks.

---

## Fase 0 — Fundação (Concluída)
- [x] Estrutura HTML estática completa
- [x] Design system (tokens.css, base.css, style.css)
- [x] Página inicial (index.html)
- [x] Catálogo (catalogo.html)
- [x] Página de ebook (ebook.html)
- [x] Checkout (checkout.html)
- [x] Sucesso de compra (sucesso.html)
- [x] Área do usuário (minha-conta.html, minha-biblioteca.html)
- [x] Autenticação UI (entrar.html)
- [x] Sobre, FAQ (sobre.html, faq.html)
- [x] JSONs de dados (ebooks, categorias, depoimentos)

## Fase 1 — Integração de Pagamento (Q2 2026)
- [ ] Integrar Mercado Pago Checkout Pro
- [ ] Integrar PagSeguro como alternativa
- [ ] Configurar webhook de confirmação de pagamento
- [ ] Geração automática de link de download pós-pagamento
- [ ] Página de fallback para pagamento pendente (Boleto)

## Fase 2 — Autenticação Real (Q3 2026)
- [ ] Integrar Supabase Auth (ou Firebase Auth)
- [ ] Login com Google/Facebook
- [ ] Recuperação de senha por e-mail
- [ ] Persistência de biblioteca do usuário
- [ ] Histórico de compras vinculado ao perfil

## Fase 3 — CMS e Conteúdo (Q3 2026)
- [ ] Integrar Contentful ou Strapi headless CMS
- [ ] Painel de cadastro de novos ebooks (sem deploy)
- [ ] Sistema de tags e busca avançada
- [ ] Reviews e avaliações de leitores

## Fase 4 — Marketing e Crescimento (Q4 2026)
- [ ] Blog integrado (artigos sobre leitura e temas dos ebooks)
- [ ] Sistema de cupons e promoções
- [ ] Programa de indicação (referral)
- [ ] Email marketing automatizado (boas-vindas, abandono de carrinho)
- [ ] Integração Google Analytics 4 + Meta Pixel

## Fase 5 — Expansão (2027)
- [ ] App mobile (PWA ou React Native)
- [ ] Leitor de ebooks integrado (PDF.js)
- [ ] Assinatura mensal (acesso ilimitado)
- [ ] Programa de autores independentes
