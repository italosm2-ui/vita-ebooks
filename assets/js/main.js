const FALLBACK_EBOOKS = [
  { id: "001", slug: "habitos-atomicos", titulo: "Hábitos Atômicos", autor: "James Clear", categoria: "desenvolvimento-pessoal", preco: 19.9, preco_original: 39.9, avaliacao: 4.9, paginas: 320, formato: "PDF + ePub", destaque: true, badge: "Mais lido", sinopse: "Um plano prático para trocar pequenas repetições por mudanças que realmente permanecem.", descricao: "Hábitos Atômicos mostra como pequenos ajustes de ambiente, rotina e identidade podem produzir avanços consistentes sem depender de motivação infinita.", aprendizados: ["Criar sistemas simples para repetir o que funciona", "Eliminar atritos que sabotam novos hábitos", "Medir progresso sem perder constância"], para_quem: ["Quem quer construir uma rotina estável", "Profissionais em busca de consistência", "Leitores que gostam de aplicação prática"], atualizado_em: "Março de 2026", tom: "editorial-olive" },
  { id: "002", slug: "pai-rico-pai-pobre", titulo: "Pai Rico, Pai Pobre", autor: "Robert T. Kiyosaki", categoria: "financas", preco: 17.9, preco_original: 29.9, avaliacao: 4.8, paginas: 268, formato: "PDF", destaque: true, badge: "Essencial", sinopse: "Uma introdução direta para rever crenças sobre dinheiro, ativos e independência financeira.", descricao: "O clássico de Robert Kiyosaki ajuda a repensar o que é riqueza, como avaliar passivos e como construir uma vida financeira menos reativa.", aprendizados: ["Diferenciar ativos de passivos no dia a dia", "Avaliar decisões de consumo com mais clareza", "Entender educação financeira como estratégia"], para_quem: ["Quem está começando a organizar as finanças", "Leitores interessados em patrimônio de longo prazo", "Pessoas que querem linguagem simples e direta"], atualizado_em: "Março de 2026", tom: "editorial-gold" },
  { id: "003", slug: "trabalho-profundo", titulo: "Trabalho Profundo", autor: "Cal Newport", categoria: "tecnologia", preco: 14.9, preco_original: 24.9, avaliacao: 4.8, paginas: 296, formato: "PDF + ePub", destaque: true, badge: "Oferta do mês", sinopse: "Foco e concentração como vantagem competitiva em um mundo de distrações constantes.", descricao: "Trabalho Profundo mostra como profissionais do conhecimento podem produzir mais, melhor e com menos ruído ao desenhar blocos reais de foco.", aprendizados: ["Blindar horas de concentração no calendário", "Reduzir interrupções sem perder comunicação", "Transformar foco em entrega de alto valor"], para_quem: ["Profissionais de tecnologia e criação", "Equipes que vivem em reuniões e mensagens", "Quem quer recuperar profundidade intelectual"], atualizado_em: "Março de 2026", tom: "editorial-slate" },
  { id: "004", slug: "mindset-a-psicologia-do-sucesso", titulo: "Mindset: A Psicologia do Sucesso", autor: "Carol S. Dweck", categoria: "desenvolvimento-pessoal", preco: 16.9, preco_original: 27.9, avaliacao: 4.7, paginas: 304, formato: "PDF", destaque: true, badge: "Curadoria Vita", sinopse: "Um olhar claro sobre a diferença entre mentalidade fixa e mentalidade de crescimento.", descricao: "Carol Dweck conecta comportamento, aprendizado e autopercepção para mostrar por que a forma como interpretamos falhas muda resultados inteiros.", aprendizados: ["Reconhecer padrões de autossabotagem", "Transformar erro em feedback acionável", "Cultivar progresso sem perfeccionismo"], para_quem: ["Quem quer destravar aprendizado contínuo", "Líderes, educadores e estudantes", "Pessoas em transição de carreira"], atualizado_em: "Março de 2026", tom: "editorial-rose" }
];

const FALLBACK_CATEGORIES = [
  { id: "desenvolvimento-pessoal", nome: "Desenvolvimento Pessoal", icone: "sparkles", descricao: "Hábitos, produtividade e autoconhecimento.", total: 540 },
  { id: "negocios", nome: "Negócios", icone: "briefcase-business", descricao: "Posicionamento, liderança e estratégia.", total: 420 },
  { id: "financas", nome: "Finanças", icone: "wallet-cards", descricao: "Patrimônio, organização e decisão.", total: 310 },
  { id: "tecnologia", nome: "Tecnologia", icone: "cpu", descricao: "IA, inovação e repertório digital.", total: 190 }
];

const FALLBACK_TESTIMONIALS = [
  { id: 1, nome: "Mariana Costa", cargo: "Designer, São Paulo - SP", inicial: "M", texto: "Entrei pela curadoria de desenvolvimento pessoal e continuei pela organização da plataforma. Dá para descobrir títulos bons sem se perder no catálogo.", estrelas: 5 },
  { id: 2, nome: "Rafael Mendes", cargo: "Empreendedor, Belo Horizonte - MG", inicial: "R", texto: "A página de planos deixa tudo claro. Consigo comparar compra avulsa com assinatura em minutos, sem linguagem enrolada.", estrelas: 5 },
  { id: 3, nome: "Ana Beatriz Lima", cargo: "Professora, Fortaleza - CE", inicial: "A", texto: "Uso a Vita para montar repertório de aula e leitura pessoal. A curadoria em português me economiza muito tempo.", estrelas: 5 }
];

const state = { ebooks: [], categories: [], testimonials: [] };

const iconSun = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
const iconMoon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';

function getStoredTheme() {
  try {
    return window.localStorage.getItem("vita-theme");
  } catch {
    return null;
  }
}

function setStoredTheme(value) {
  try {
    window.localStorage.setItem("vita-theme", value);
  } catch {}
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  let theme = getStoredTheme() || system;

  const applyTheme = () => {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    toggle.innerHTML = theme === "dark" ? iconSun : iconMoon;
    toggle.setAttribute("aria-label", `Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`);
  };

  applyTheme();

  if (!toggle) return;
  toggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    setStoredTheme(theme);
    applyTheme();
  });
}

function setupHeader() {
  const header = document.getElementById("site-header");
  const button = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 10);

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!button || !menu) return;

  button.addEventListener("click", () => {
    const isOpen = !menu.hidden;
    menu.hidden = isOpen;
    button.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setYear() {
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

function createIcons() {
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons();
  }
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error("fetch failed");
    return await response.json();
  } catch {
    return fallback;
  }
}

function price(value) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

function stars(value) {
  const full = Math.round(value);
  return "★".repeat(full) + "☆".repeat(Math.max(0, 5 - full));
}

function categoryName(id) {
  return state.categories.find((item) => item.id === id)?.nome || id;
}

function bySlugOrId(value) {
  return state.ebooks.find((book) => book.slug === value || book.id === value);
}

function renderCover(book, extraClass = "") {
  return `<div class="book-cover-art ${book.tom || "editorial-olive"} ${extraClass}"><small>${categoryName(book.categoria)}</small><strong>${book.titulo}</strong><span>${book.autor}</span></div>`;
}

function renderBookCard(book) {
  return `
    <article class="book-card">
      ${book.badge ? `<span class="tag book-badge">${book.badge}</span>` : ""}
      ${renderCover(book)}
      <div class="book-body">
        <div class="book-meta">
          <span>${categoryName(book.categoria)}</span>
          <span>${book.formato}</span>
        </div>
        <h3 class="book-title">${book.titulo}</h3>
        <p class="book-author">${book.autor}</p>
        <p class="book-description">${book.sinopse}</p>
        <div class="book-footer">
          <div class="book-price-line">
            <strong class="book-price">${price(book.preco)}</strong>
            <span class="book-price-old">${price(book.preco_original)}</span>
          </div>
          <span class="book-rating" aria-label="Avaliação ${book.avaliacao}">${stars(book.avaliacao)} ${book.avaliacao.toFixed(1)}</span>
          <div class="book-actions">
            <a class="btn btn-primary" href="ebook.html?slug=${book.slug}">Ver ebook</a>
            <a class="btn btn-ghost" href="planos.html">Ver planos</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const categoriesTarget = document.getElementById("home-categories");
  const booksTarget = document.getElementById("home-featured");
  const testimonialsTarget = document.getElementById("home-testimonials");

  if (categoriesTarget) {
    categoriesTarget.innerHTML = state.categories.slice(0, 8).map((category) => `
      <a class="category-card" href="catalogo.html?categoria=${category.id}">
        <span class="category-icon"><i data-lucide="${category.icone}" aria-hidden="true"></i></span>
        <h3>${category.nome}</h3>
        <p>${category.descricao}</p>
        <strong>${category.total} títulos</strong>
      </a>
    `).join("");
  }

  if (booksTarget) {
    booksTarget.innerHTML = state.ebooks.filter((book) => book.destaque).slice(0, 6).map(renderBookCard).join("");
  }

  if (testimonialsTarget) {
    testimonialsTarget.innerHTML = state.testimonials.slice(0, 3).map((item) => `
      <blockquote class="testimonial-card">
        <p>${item.texto}</p>
        <footer>
          <span class="avatar" aria-hidden="true">${item.inicial}</span>
          <div>
            <strong>${item.nome}</strong>
            <span class="section-copy">${item.cargo}</span>
          </div>
          <span class="stars" aria-label="${item.estrelas} estrelas">${"★".repeat(item.estrelas)}</span>
        </footer>
      </blockquote>
    `).join("");
  }
}

function sortBooks(books, mode) {
  const sorted = [...books];
  const strategies = {
    destaque: (a, b) => Number(b.destaque) - Number(a.destaque) || a.preco - b.preco,
    "preco-asc": (a, b) => a.preco - b.preco,
    "preco-desc": (a, b) => b.preco - a.preco,
    avaliacao: (a, b) => b.avaliacao - a.avaliacao,
    nome: (a, b) => a.titulo.localeCompare(b.titulo, "pt-BR")
  };
  sorted.sort(strategies[mode] || strategies.destaque);
  return sorted;
}

function renderCatalog() {
  const form = document.getElementById("catalog-form");
  const searchInput = document.getElementById("catalog-search");
  const categorySelect = document.getElementById("catalog-category");
  const sortSelect = document.getElementById("catalog-sort");
  const pills = document.querySelectorAll("[data-category-pill]");
  const grid = document.getElementById("catalog-grid");
  const count = document.getElementById("catalog-count");
  const reset = document.getElementById("catalog-reset");
  if (!grid || !searchInput || !categorySelect || !sortSelect) return;

  categorySelect.innerHTML = `<option value="">Todas as categorias</option>${state.categories.map((item) => `<option value="${item.id}">${item.nome}</option>`).join("")}`;

  const params = new URLSearchParams(window.location.search);
  searchInput.value = params.get("q") || "";
  categorySelect.value = params.get("categoria") || "";
  sortSelect.value = params.get("ordem") || "destaque";

  const render = () => {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;

    const filtered = sortBooks(state.ebooks.filter((book) => {
      const haystack = `${book.titulo} ${book.autor} ${book.sinopse} ${categoryName(book.categoria)}`.toLowerCase();
      return (!query || haystack.includes(query)) && (!category || book.categoria === category);
    }), sort);

    grid.classList.toggle("is-empty", filtered.length === 0);
    grid.innerHTML = filtered.length
      ? filtered.map(renderBookCard).join("")
      : `<section class="empty-state surface-card"><h2>Nenhum ebook encontrado</h2><p>Tente ajustar a busca ou remover o filtro de categoria para explorar melhor o catálogo.</p></section>`;

    if (count) count.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;

    pills.forEach((pill) => pill.classList.toggle("is-active", pill.dataset.categoryPill === category));

    const next = new URLSearchParams();
    if (query) next.set("q", searchInput.value.trim());
    if (category) next.set("categoria", category);
    if (sort && sort !== "destaque") next.set("ordem", sort);
    const target = next.toString() ? `?${next.toString()}` : window.location.pathname.split("/").pop();
    history.replaceState({}, "", target);
    createIcons();
  };

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });

  [searchInput, categorySelect, sortSelect].forEach((field) => field.addEventListener("input", render));

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      categorySelect.value = pill.dataset.categoryPill || "";
      render();
    });
  });

  reset?.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "";
    sortSelect.value = "destaque";
    render();
  });

  render();
}

function renderProduct() {
  const target = document.getElementById("ebook-app");
  if (!target) return;

  const params = new URLSearchParams(window.location.search);
  const value = params.get("slug") || params.get("id") || state.ebooks[0]?.slug;
  const book = bySlugOrId(value);

  if (!book) {
    target.innerHTML = `<section class="not-found surface-card"><h2>Ebook não encontrado</h2><p>O título que você procurou não está disponível nesta versão do site.</p><div class="stack-actions"><a class="btn btn-primary" href="catalogo.html">Voltar ao catálogo</a></div></section>`;
    return;
  }

  const related = state.ebooks.filter((item) => item.slug !== book.slug && item.categoria === book.categoria).slice(0, 3);

  target.innerHTML = `
    <section class="product-layout">
      <aside class="product-cover-card surface-card">
        ${renderCover(book)}
      </aside>
      <div class="product-summary">
        <div>
          <span class="eyebrow">${categoryName(book.categoria)}</span>
          <h1>${book.titulo}</h1>
          <p class="section-copy">${book.descricao}</p>
        </div>
        <div class="product-submeta">
          <span>${book.autor}</span>
          <span>${book.paginas} páginas</span>
          <span>${book.formato}</span>
          <span>${book.atualizado_em}</span>
          <span>${book.avaliacao.toFixed(1)} de 5</span>
        </div>
        <div class="product-price">
          <strong>${price(book.preco)}</strong>
          <span>${price(book.preco_original)}</span>
          <small class="section-copy">Compra avulsa exibida como referência comercial.</small>
        </div>
        <section class="product-cta-box">
          <div class="stack-actions">
            <a class="btn btn-primary" href="suporte.html?interesse=${book.slug}#contato">Quero este ebook</a>
            <a class="btn btn-ghost" href="planos.html">Comparar com assinatura</a>
          </div>
          <p>Checkout em implantação. Nesta fase, os CTAs levam para o suporte comercial e para a página de planos.</p>
          <ul class="trust-list" style="margin-top: 1.25rem;">
            <li>Oferta honesta, sem pagamento simulado</li>
            <li>Site preparado para deploy manual na Hostinger</li>
            <li>Estrutura pronta para integrar checkout real depois</li>
          </ul>
        </section>
        <div class="feature-grid">
          <article class="feature-card">
            <h3>O que você vai aprender</h3>
            <ul>${book.aprendizados.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
          <article class="feature-card">
            <h3>Para quem este ebook foi pensado</h3>
            <ul>${book.para_quem.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
          <article class="feature-card">
            <h3>Resumo da oferta</h3>
            <ul>
              <li>Acesso em formato ${book.formato}</li>
              <li>Preço de vitrine para compra avulsa</li>
              <li>Opção de comparar com planos mensais e vitalícios</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-header">
        <div>
          <span class="eyebrow">Relacionados</span>
          <h2>Mais títulos na mesma frente</h2>
        </div>
      </div>
      <div class="related-grid">${related.length ? related.map(renderBookCard).join("") : `<article class="info-card"><h3>Mais títulos chegando</h3><p>Esta categoria vai ganhar mais páginas de produto na próxima rodada.</p></article>`}</div>
    </section>
  `;
}

function setupSupportForm() {
  const button = document.getElementById("support-mailto");
  const name = document.getElementById("support-name");
  const email = document.getElementById("support-email");
  const topic = document.getElementById("support-topic");
  const message = document.getElementById("support-message");
  const hint = document.getElementById("support-prefill");
  if (!button || !name || !email || !topic || !message) return;

  const params = new URLSearchParams(window.location.search);
  const interest = params.get("interesse");
  const plan = params.get("plano");

  if (interest) {
    topic.value = `Interesse no ebook: ${interest}`;
    message.value = `Olá, equipe Vita.\n\nTenho interesse no ebook "${interest}" e gostaria de saber como vocês pretendem abrir a compra nesta primeira versão do site.`;
    if (hint) hint.textContent = `Interesse carregado automaticamente: ${interest}`;
  }

  if (plan) {
    topic.value = `Interesse no plano: ${plan}`;
    message.value = `Olá, equipe Vita.\n\nTenho interesse no plano "${plan}" e gostaria de receber mais detalhes comerciais.`;
    if (hint) hint.textContent = `Plano carregado automaticamente: ${plan}`;
  }

  button.addEventListener("click", () => {
    const subject = encodeURIComponent(topic.value || "Contato pelo site Vita Ebooks");
    const body = encodeURIComponent([
      `Nome: ${name.value || "-"}`,
      `Email: ${email.value || "-"}`,
      "",
      message.value || "Olá, equipe Vita."
    ].join("\n"));
    button.href = `mailto:contato@vitaebooks.com.br?subject=${subject}&body=${body}`;
  });
}

async function boot() {
  setupTheme();
  setupHeader();
  setYear();

  [state.ebooks, state.categories, state.testimonials] = await Promise.all([
    loadJson("assets/data/ebooks.json", FALLBACK_EBOOKS),
    loadJson("assets/data/categorias.json", FALLBACK_CATEGORIES),
    loadJson("assets/data/depoimentos.json", FALLBACK_TESTIMONIALS)
  ]);

  const page = document.body.dataset.page || "home";
  if (page === "home") renderHome();
  if (page === "catalogo") renderCatalog();
  if (page === "ebook") renderProduct();
  if (page === "suporte") setupSupportForm();

  createIcons();
}

window.addEventListener("DOMContentLoaded", boot);
