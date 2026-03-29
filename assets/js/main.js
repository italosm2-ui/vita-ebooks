// ═══════════════════════════════════════ DARK MODE ══
(function () {
  const html = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.setAttribute('data-theme', theme);

  function updateIcon() {
    if (!btn) return;
    btn.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    btn.setAttribute('aria-label', theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro');
  }

  if (btn) {
    btn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', theme);
      updateIcon();
    });
  }
  updateIcon();
})();

// ══════════════════════════════════════ HEADER SCROLL ══
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ════════════════════════════════════ MOBILE MENU ══
(function () {
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    menu.setAttribute('aria-hidden', !open);
    btn.querySelector('svg')?.remove();
    btn.innerHTML = open
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
    });
  });
})();

// ════════════════════════════════ DADOS MOCK ══
const CATEGORIAS = [
  { icon: '🧠', nome: 'Desenvolvimento Pessoal', qtd: 48, slug: 'desenvolvimento-pessoal' },
  { icon: '💰', nome: 'Finanças', qtd: 35, slug: 'financas' },
  { icon: '🏃', nome: 'Saúde & Bem-estar', qtd: 29, slug: 'saude' },
  { icon: '💻', nome: 'Tecnologia', qtd: 42, slug: 'tecnologia' },
  { icon: '📚', nome: 'Educação', qtd: 31, slug: 'educacao' },
  { icon: '🏢', nome: 'Negócios', qtd: 27, slug: 'negocios' },
  { icon: '🎨', nome: 'Criatividade', qtd: 19, slug: 'criatividade' },
  { icon: '🌿', nome: 'Espiritualidade', qtd: 22, slug: 'espiritualidade' },
];

const EBOOKS = [
  { titulo: 'Hábitos que Transformam', autor: 'Mariana Lopes', preco: 'R$24,90', estrelas: '★★★★★', badge: 'Mais vendido', cor: '#1a5c3a' },
  { titulo: 'Investir do Zero', autor: 'Carlos Ferreira', preco: 'R$19,90', estrelas: '★★★★★', badge: 'Novo', cor: '#2d6b45' },
  { titulo: 'Mente Produtiva', autor: 'Ana Beatriz Costa', preco: 'R$29,90', estrelas: '★★★★☆', badge: null, cor: '#3a7a52' },
  { titulo: 'Python na Prática', autor: 'João Oliveira', preco: 'R$34,90', estrelas: '★★★★★', badge: 'Destaque', cor: '#246040' },
  { titulo: 'Nutrição Consciente', autor: 'Dra. Paula Mendes', preco: 'R$22,90', estrelas: '★★★★★', badge: null, cor: '#1f5538' },
  { titulo: 'Liderança Autêntica', autor: 'Roberto Alves', preco: 'R$27,90', estrelas: '★★★★☆', badge: 'Novo', cor: '#2a6244' },
];

// ══════════════════════════════ RENDERIZAÇÃO ══
document.addEventListener('DOMContentLoaded', () => {

  // Categorias
  const gridCat = document.getElementById('grid-categorias');
  if (gridCat) {
    gridCat.innerHTML = CATEGORIAS.map(c => `
      <a href="#destaques" class="card-categoria" aria-label="${c.nome} — ${c.qtd} ebooks">
        <span class="card-categoria-icon" aria-hidden="true">${c.icon}</span>
        <span class="card-categoria-info">
          <span class="card-categoria-nome">${c.nome}</span>
          <span class="card-categoria-qtd">${c.qtd} ebooks</span>
        </span>
        <span class="card-categoria-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </a>
    `).join('');
  }

  // Ebooks
  const gridLivros = document.getElementById('grid-livros');
  if (gridLivros) {
    gridLivros.innerHTML = EBOOKS.map(e => `
      <article class="card-livro">
        <div class="card-livro-capa">
          ${e.badge ? `<span class="card-livro-badge">${e.badge}</span>` : ''}
          <div class="card-livro-capa-bg" style="background:${e.cor}">${e.titulo}</div>
        </div>
        <div class="card-livro-body">
          <h3 class="card-livro-titulo">${e.titulo}</h3>
          <p class="card-livro-autor">${e.autor}</p>
          <div class="card-livro-footer">
            <span class="card-livro-preco">${e.preco}</span>
            <span class="card-livro-estrelas" aria-label="Avaliação: ${e.estrelas}">${e.estrelas}</span>
          </div>
          <a href="#" class="card-livro-btn">Ver detalhes</a>
        </div>
      </article>
    `).join('');
  }

  // Newsletter
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');
  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if (!email || !email.includes('@')) {
        feedback.textContent = 'Por favor, insira um e-mail válido.';
        feedback.style.color = 'var(--color-notification, #a13544)';
        return;
      }
      feedback.textContent = '✓ Ótimo! Você vai receber as novidades em breve.';
      feedback.style.color = 'var(--color-primary)';
      form.reset();
    });
  }

  // Lucide icons init
  if (window.lucide) window.lucide.createIcons();
});
