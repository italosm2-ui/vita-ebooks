// Vita Ebooks — main.js

// === DARK MODE TOGGLE ===
(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    if (toggle) {
      toggle.innerHTML = t === 'dark' ? sunIcon : moonIcon;
      toggle.setAttribute('aria-label', `Alternar para tema ${t === 'dark' ? 'claro' : 'escuro'}`);
    }
  }

  applyTheme(theme);

  if (toggle) {
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      applyTheme(theme);
    });
  }
})();

// === HEADER SCROLL SHADOW ===
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  const obs = new IntersectionObserver(
    ([e]) => header.classList.toggle('scrolled', !e.isIntersecting),
    { rootMargin: '-1px 0px 0px 0px', threshold: 0 }
  );
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:64px;height:1px;width:100%;pointer-events:none';
  document.body.prepend(sentinel);
  obs.observe(sentinel);
})();

// === MENU MOBILE ===
(function () {
  const btn = document.querySelector('.hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    if (open) menu.setAttribute('hidden', '');
    else menu.removeAttribute('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', '');
    });
  });
})();

// === DADOS MOCK DE EBOOKS ===
const EBOOKS = [
  { id: 1, titulo: 'Mindset de Crescimento', autor: 'Ana Ribeiro', categoria: 'Autodesenvolvimento', preco: 'R$ 9,90', badge: 'Mais vendido', cor: ['#1a5c3a', '#0d3820'], emoji: '🌱' },
  { id: 2, titulo: 'Finanças Pessoais do Zero', autor: 'Carlos Mendes', categoria: 'Finanças', preco: 'R$ 12,90', badge: 'Novo', cor: ['#2d5a8e', '#1a3a5c'], emoji: '💰' },
  { id: 3, titulo: 'Produtividade Real', autor: 'Mariana Costa', categoria: 'Negócios', preco: 'R$ 14,90', badge: null, cor: ['#8e4a2d', '#5c2e1a'], emoji: '⚡' },
  { id: 4, titulo: 'Programação para Todos', autor: 'Rafael Lima', categoria: 'Tecnologia', preco: 'R$ 19,90', badge: 'Mais vendido', cor: ['#4a2d8e', '#2e1a5c'], emoji: '💻' },
  { id: 5, titulo: 'Alimentação Consciente', autor: 'Lucia Santos', categoria: 'Saúde', preco: 'R$ 11,90', badge: null, cor: ['#5c8e2d', '#3a5c1a'], emoji: '🥗' },
  { id: 6, titulo: 'Comunicação Assertiva', autor: 'Pedro Alves', categoria: 'Autodesenvolvimento', preco: 'R$ 13,90', badge: 'Novo', cor: ['#8e2d5a', '#5c1a38'], emoji: '🗣️' },
];

const CATEGORIAS = [
  { nome: 'Negócios', icon: '📈', sub: '42 ebooks', slug: 'negocios' },
  { nome: 'Autodesenvolvimento', icon: '🧠', sub: '68 ebooks', slug: 'autodesenvolvimento' },
  { nome: 'Tecnologia', icon: '💻', sub: '35 ebooks', slug: 'tecnologia' },
  { nome: 'Saúde & Bem-estar', icon: '🌿', sub: '29 ebooks', slug: 'saude' },
  { nome: 'Finanças', icon: '💰', sub: '38 ebooks', slug: 'financas' },
  { nome: 'Educação', icon: '📚', sub: '24 ebooks', slug: 'educacao' },
  { nome: 'Criatividade', icon: '🎨', sub: '18 ebooks', slug: 'criatividade' },
  { nome: 'Marketing', icon: '📣', sub: '31 ebooks', slug: 'marketing' },
];

// === RENDERIZAR CATEGORIAS ===
(function () {
  const grid = document.getElementById('categorias-grid');
  if (!grid) return;
  grid.innerHTML = CATEGORIAS.map(c => `
    <a href="/catalogo?categoria=${c.slug}" class="categoria-card">
      <span class="categoria-icon" aria-hidden="true">${c.icon}</span>
      <h3>${c.nome}</h3>
      <p>${c.sub}</p>
      <span class="categoria-arrow" aria-hidden="true">→</span>
    </a>
  `).join('');
})();

// === RENDERIZAR LIVROS ===
(function () {
  const grid = document.getElementById('livros-grid');
  if (!grid) return;
  grid.innerHTML = EBOOKS.map(e => `
    <article class="livro-card">
      <a href="/ebook/${e.id}" class="livro-card-link" aria-label="Ver ${e.titulo}">
        <div class="livro-capa" style="background: linear-gradient(135deg, ${e.cor[0]}, ${e.cor[1]})">
          <span aria-hidden="true" style="font-size:3rem">${e.emoji}</span>
          ${e.badge ? `<span class="livro-badge">${e.badge}</span>` : ''}
        </div>
        <div class="livro-info">
          <p class="livro-categoria">${e.categoria}</p>
          <h3 class="livro-titulo">${e.titulo}</h3>
          <p class="livro-autor">${e.autor}</p>
          <div class="livro-footer">
            <span class="livro-preco">${e.preco}</span>
            <span class="livro-stars" aria-label="4.9 estrelas">★★★★★</span>
          </div>
        </div>
      </a>
    </article>
  `).join('');
})();

// === NEWSLETTER FEEDBACK ===
(function () {
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('newsletter-feedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!email) return;
    feedback.textContent = `✓ Ótimo! Você receberá novidades em ${email}.`;
    feedback.removeAttribute('hidden');
    form.reset();
  });
})();
