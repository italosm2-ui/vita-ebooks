# GOVERNANÇA — Vita Ebooks

## Estrutura de decisão

### Fase atual (MVP — até 10 colaboradores)
- **Founder/CEO:** visão, produto, financeiro, parcerias estratégicas
- **Dev/Tech:** desenvolvimento, hospedagem, integrações
- **Editorial:** curadoria de títulos, contratos de direitos autorais
- **Marketing:** conteúdo, tráfego pago, email marketing

## Fluxo de publicação de conteúdo
1. Triagem editorial → aprovação do CEO
2. Assinatura de contrato (Jurídico)
3. Upload do PDF no servidor
4. Atualização do `assets/data/ebooks.json`
5. Deploy (push na branch main → Hostinger via FTP ou GitHub Actions)
6. Anúncio na newsletter e redes sociais

## Processo de deploy
- **Repositório:** GitHub (`italosm2-ui/vita-ebooks`)
- **Branch principal:** `main`
- **Hospedagem:** Hostinger (hospedagem compartilhada)
- **Deploy manual:** upload via FTP dos arquivos estáticos
- **Deploy automatizado (futuro):** GitHub Actions → FTP Action

## Controle de versão
- Commits em inglês, prefixados: `feat:`, `fix:`, `docs:`, `style:`, `chore:`
- Pull Requests obrigatórios para mudanças em produção (a partir de 2 colaboradores)
- Tags de versão semântica: `v0.1.0`, `v0.2.0`, etc.

## Senhas e segredos
- Nunca commitar credenciais no repositório
- Usar variáveis de ambiente no Hostinger para chaves de API de pagamento
- Rotação de senhas a cada 90 dias

## Reunião de revisão
Mensal — primeiro domingo de cada mês. Pauta: KPIs, roadmap, jurídico, editorial.
