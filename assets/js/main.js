/* Vita Ebooks — main.js */

/* === DARK MODE TOGGLE === */
(function () {
  const toggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  if (toggle) {
    updateIcon();
    toggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      updateIcon();
    });
  }
  function updateIcon() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', `Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`);
    toggle.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

/* === HEADER SCROLL SHADOW === */
(function () {
  const header = document.getElementById('site-header');
  if (!header) return;
  const obs = new IntersectionObserver(
    ([e]) => header.classList.toggle('scrolled', e.intersectionRatio < 1),
    { threshold: 1, rootMargin: '-1px 0px 0px 0px' }
  );
  obs.observe(document.getElementById('main') || document.body);
})();

/* === MOBILE MENU === */
(function () {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = !menu.hidden;
    menu.hidden = open;
    btn.setAttribute('aria-expanded', String(!open));
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* === EBOOKS MOCK DATA === */
const EBOOKS = [
  { id: 1, titulo: 'Hábitos Atômicos', autor: 'James Clear', categoria: 'Desenvolvimento Pessoal', preco: 'R$19,90', stars: '★★★★★', badge: 'Mais vendido', cover: 'https://picsum.photos/seed/habitos/300/400' },
  { id: 2, titulo: 'Pai Rico, Pai Pobre', autor: 'Robert Kiyosaki', categoria: 'Finanças', preco: 'R$24,90', stars: '★★★★★', badge: null, cover: 'https://picsum.photos/seed/riqueza/300/400' },
  { id: 3, titulo: 'O Poder do Agora', autor: 'Eckhart Tolle', categoria: 'Espiritualidade', preco: 'R$17,90', stars: '★★★★☆', badge: 'Novo', cover: 'https://picsum.photos/seed/agora/300/400' },
  { id: 4, titulo: 'Mindset', autor: 'Carol Dweck', categoria: 'Desenvolvimento Pessoal', preco: 'R$21,90', stars: '★★★★★', badge: null, cover: 'https://picsum.photos/seed/mindset/300/400' },
  { id: 5, titulo: 'A Startup Enxuta', autor: 'Eric Ries', categoria: 'Negócios', preco: 'R$22,90', stars: '★★★★☆', badge: null, cover: 'https://picsum.photos/seed/startup/300/400' },
  { id: 6, titulo: 'Deep Work', autor: 'Cal Newport', categoria: 'Produtividade', preco: 'R$18,90', stars: '★★★★★', badge: 'Destaque', cover: 'https://picsum.photos/seed/deepwork/300/400' },
];

/* === RENDER EBOOKS === */
(function () {
  const grid = document.getElementById('grid-livros');
  if (!grid) return;
  grid.innerHTML = EBOOKS.map(e => `
    <article class="card-livro">
      <div class="card-livro-capa">
        <img src="${e.cover}" alt="Capa do ebook ${e.titulo}" width="300" height="400" loading="lazy" decoding="async" />
        ${e.badge ? `<span class="card-livro-badge">${e.badge}</span>` : ''}
      </div>
      <div class="card-livro-body">
        <span class="card-livro-cat">${e.categoria}</span>
        <h3 class="card-livro-titulo">${e.titulo}</h3>
        <p class="card-livro-autor">${e.autor}</p>
        <div class="card-livro-footer">
          <span class="card-livro-preco">${e.preco}</span>
          <span class="card-livro-stars" aria-label="Avaliação">${e.stars}</span>
        </div>
      </div>
      <a href="ebook.html?id=${e.id}" class="card-livro-link" aria-label="Ver detalhes de ${e.titulo}">Ver detalhes</a>
    </article>
  `).join('');
})();

/* === NEWSLETTER FORM === */
(function () {
  const form = document.getElementById('newsletter-form');
  const feedback = document.getElementById('nl-feedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    if (!email || !email.includes('@')) {
      feedback.textContent = 'Por favor, insira um e-mail válido.';
      feedback.className = 'nl-feedback err';
      return;
    }
    feedback.textContent = '✓ Cadastrado com sucesso! Fique de olho no seu e-mail.';
    feedback.className = 'nl-feedback ok';
    form.reset();
  });
})();

/* === LUCIDE ICONS === */
if (typeof lucide !== 'undefined') lucide.createIcons();
