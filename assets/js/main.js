const FALLBACK_EBOOKS = [
  {
    id: "001",
    slug: "habitos-atomicos",
    capa: "assets/img/covers/habitos-atomicos.svg",
    capa_alt: "Capa do ebook Habitos Atomicos",
    titulo: "Hábitos Atômicos",
    autor: "James Clear",
    categoria: "desenvolvimento-pessoal",
    preco: 19.9,
    preco_original: 39.9,
    avaliacao: 4.9,
    paginas: 320,
    formato: "PDF + ePub",
    destaque: true,
    badge: "Mais lido",
    sinopse: "Um guia direto para construir rotinas que permanecem, mesmo em dias corridos.",
    descricao: "Hábitos Atômicos mostra como pequenas decisões diárias podem reorganizar constância, energia e resultado sem depender de motivação infinita.",
    aprendizados: [
      "Criar sistemas simples para repetir o que funciona",
      "Eliminar atritos que sabotam novos hábitos",
      "Medir progresso sem perder constância"
    ],
    para_quem: [
      "Leitores que querem rotina mais estável",
      "Profissionais em busca de consistência",
      "Quem prefere aplicação prática"
    ],
    atualizado_em: "Março de 2026",
    tom: "editorial-olive"
  },
  {
    id: "002",
    slug: "pai-rico-pai-pobre",
    capa: "assets/img/covers/pai-rico-pai-pobre.svg",
    capa_alt: "Capa do ebook Pai Rico, Pai Pobre",
    titulo: "Pai Rico, Pai Pobre",
    autor: "Robert T. Kiyosaki",
    categoria: "financas",
    preco: 17.9,
    preco_original: 29.9,
    avaliacao: 4.8,
    paginas: 268,
    formato: "PDF",
    destaque: true,
    badge: "Essencial",
    sinopse: "Uma leitura clássica para rever crenças sobre dinheiro, patrimônio e decisão financeira.",
    descricao: "O livro de Robert Kiyosaki ajuda a enxergar ativos, passivos e educação financeira com muito mais clareza para o dia a dia.",
    aprendizados: [
      "Diferenciar ativos e passivos no cotidiano",
      "Avaliar decisões de consumo com mais lucidez",
      "Pensar riqueza como construção de longo prazo"
    ],
    para_quem: [
      "Quem está organizando as finanças",
      "Leitores interessados em patrimônio",
      "Pessoas que querem linguagem simples"
    ],
    atualizado_em: "Março de 2026",
    tom: "editorial-gold"
  },
  {
    id: "003",
    slug: "trabalho-profundo",
    capa: "assets/img/covers/trabalho-profundo.svg",
    capa_alt: "Capa do ebook Trabalho Profundo",
    titulo: "Trabalho Profundo",
    autor: "Cal Newport",
    categoria: "tecnologia",
    preco: 14.9,
    preco_original: 24.9,
    avaliacao: 4.8,
    paginas: 296,
    formato: "PDF + ePub",
    destaque: true,
    badge: "Destaque da semana",
    sinopse: "Foco, atenção e profundidade intelectual em uma rotina dominada por distrações.",
    descricao: "Cal Newport mostra como proteger horas de concentração para produzir mais, com mais qualidade e menos ruído digital.",
    aprendizados: [
      "Blindar blocos reais de concentração",
      "Reduzir interrupções sem perder fluidez",
      "Transformar foco em entrega de alto valor"
    ],
    para_quem: [
      "Profissionais de tecnologia e criação",
      "Equipes sobrecarregadas por mensagens",
      "Quem quer recuperar profundidade"
    ],
    atualizado_em: "Março de 2026",
    tom: "editorial-slate"
  },
  {
    id: "004",
    slug: "mindset-a-psicologia-do-sucesso",
    capa: "assets/img/covers/mindset-a-psicologia-do-sucesso.svg",
    capa_alt: "Capa do ebook Mindset: A Psicologia do Sucesso",
    titulo: "Mindset: A Psicologia do Sucesso",
    autor: "Carol S. Dweck",
    categoria: "desenvolvimento-pessoal",
    preco: 16.9,
    preco_original: 27.9,
    avaliacao: 4.7,
    paginas: 304,
    formato: "PDF",
    destaque: true,
    badge: "Curadoria Vita",
    sinopse: "Um olhar claro sobre mentalidade fixa, crescimento e aprendizado ao longo da vida.",
    descricao: "Carol Dweck conecta comportamento, aprendizado e autopercepção para mostrar como a forma de encarar desafios altera resultados.",
    aprendizados: [
      "Reconhecer padrões de autossabotagem",
      "Transformar erro em feedback acionável",
      "Cultivar progresso sem perfeccionismo"
    ],
    para_quem: [
      "Quem quer destravar aprendizado contínuo",
      "Líderes, educadores e estudantes",
      "Pessoas em transição de carreira"
    ],
    atualizado_em: "Março de 2026",
    tom: "editorial-rose"
  },
  {
    id: "005",
    slug: "comece-pelo-porque",
    capa: "assets/img/covers/comece-pelo-porque.svg",
    capa_alt: "Capa do ebook Comece Pelo Porque",
    titulo: "Comece Pelo Porquê",
    autor: "Simon Sinek",
    categoria: "negocios",
    preco: 18.9,
    preco_original: 31.9,
    avaliacao: 4.7,
    paginas: 256,
    formato: "PDF + ePub",
    destaque: true,
    badge: "Negócios",
    sinopse: "Um livro sobre posicionamento, liderança e clareza de propósito para negócios mais memoráveis.",
    descricao: "Simon Sinek mostra como empresas e profissionais criam conexão quando conseguem comunicar primeiro a intenção, depois a execução.",
    aprendizados: [
      "Organizar narrativa de marca com clareza",
      "Dar contexto antes de vender uma oferta",
      "Criar decisões estratégicas mais coerentes"
    ],
    para_quem: [
      "Empreendedores e consultores",
      "Equipes de marketing e vendas",
      "Líderes que querem fortalecer cultura"
    ],
    atualizado_em: "Março de 2026",
    tom: "editorial-copper"
  }
];

const FALLBACK_CATEGORIES = [
  {
    id: "desenvolvimento-pessoal",
    nome: "Desenvolvimento Pessoal",
    icone: "sparkles",
    descricao: "Hábitos, produtividade e autoconhecimento para construir uma vida com mais constância.",
    total: 540
  },
  {
    id: "negocios",
    nome: "Negócios",
    icone: "briefcase-business",
    descricao: "Estratégia, liderança, posicionamento e repertório para vender e crescer melhor.",
    total: 420
  },
  {
    id: "financas",
    nome: "Finanças",
    icone: "wallet-cards",
    descricao: "Patrimônio, clareza de compra e organização financeira para o longo prazo.",
    total: 310
  },
  {
    id: "saude",
    nome: "Saúde & Bem-estar",
    icone: "heart-pulse",
    descricao: "Energia, descanso e rotina saudável para sustentar desempenho e leveza.",
    total: 260
  },
  {
    id: "tecnologia",
    nome: "Tecnologia",
    icone: "cpu",
    descricao: "IA, inovação e cultura digital em leituras que aproximam conceito e aplicação.",
    total: 190
  },
  {
    id: "relacionamentos",
    nome: "Relacionamentos",
    icone: "messages-square",
    descricao: "Comunicação, vínculos e presença para conversas mais maduras e conscientes.",
    total: 160
  },
  {
    id: "espiritualidade",
    nome: "Espiritualidade",
    icone: "sun-medium",
    descricao: "Silêncio, propósito e atenção para uma vida mais centrada.",
    total: 130
  },
  {
    id: "educacao",
    nome: "Educação",
    icone: "graduation-cap",
    descricao: "Aprendizagem, ensino e repertório para quem compartilha conhecimento.",
    total: 110
  }
];

const FALLBACK_TESTIMONIALS = [
  {
    id: 1,
    nome: "Mariana Costa",
    cargo: "Designer, São Paulo - SP",
    inicial: "M",
    texto: "Entrei pela curadoria de desenvolvimento pessoal e continuei pela organização da plataforma. Dá para descobrir títulos bons sem se perder.",
    estrelas: 5
  },
  {
    id: 2,
    nome: "Rafael Mendes",
    cargo: "Empreendedor, Belo Horizonte - MG",
    inicial: "R",
    texto: "A página de planos deixa tudo claro e a assinatura faz sentido logo de cara. O site passa confiança sem parecer genérico.",
    estrelas: 5
  },
  {
    id: 3,
    nome: "Ana Beatriz Lima",
    cargo: "Professora, Fortaleza - CE",
    inicial: "A",
    texto: "Uso a Vita para montar repertório de aula e leitura pessoal. A curadoria em português me economiza tempo toda semana.",
    estrelas: 5
  }
];

const state = { ebooks: [], categories: [], testimonials: [] };

const ICON_SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
const ICON_MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
const LOGO_MARK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 5.5h8.5a3.5 3.5 0 0 1 0 7H6z"></path><path d="M6 13h9.5a2.5 2.5 0 0 1 0 5H6z"></path></svg>';
const MENU_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';

const PRIMARY_NAV = [
  { page: "home", href: "index.html", label: "Início" },
  { page: "catalogo", href: "catalogo.html", label: "Catálogo" },
  { page: "planos", href: "planos.html", label: "Premium" }
];

const MOBILE_NAV = [
  ...PRIMARY_NAV,
  { page: "sobre", href: "sobre.html", label: "Sobre" },
  { page: "suporte", href: "suporte.html", label: "Suporte" },
  { page: "conta", href: "conta.html", label: "Conta" }
];

const qs = (selector, parent = document) => parent.querySelector(selector);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

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
  } catch {
    // no-op
  }
}

function createIcons() {
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons();
  }
}

function pageForPrimaryNav(page) {
  if (page === "ebook") return "catalogo";
  return page;
}

function currentSearchQuery() {
  return new URLSearchParams(window.location.search).get("q") || "";
}

function buildHeader(page) {
  const currentPrimary = pageForPrimaryNav(page);
  const query = escapeHtml(currentSearchQuery());
  const desktopNav = PRIMARY_NAV.map((item) => `
    <li><a class="shell-link" href="${item.href}"${currentPrimary === item.page ? ' aria-current="page"' : ""}>${item.label}</a></li>
  `).join("");
  const mobileNav = MOBILE_NAV.map((item) => `
    <li><a href="${item.href}"${page === item.page ? ' aria-current="page"' : ""}>${item.label}</a></li>
  `).join("");

  return `
    <div class="container-wide header-inner">
      <a class="logo" href="index.html" aria-label="Vita Ebooks">
        <span class="logo-mark" aria-hidden="true">${LOGO_MARK}</span>
        <span class="logo-wordmark">Vita Ebooks</span>
      </a>

      <form class="shell-search" action="catalogo.html" method="get" role="search" aria-label="Buscar ebooks">
        <label class="shell-search-field" for="site-search">
          <i data-lucide="search" aria-hidden="true"></i>
          <input id="site-search" name="q" type="search" value="${query}" placeholder="Buscar títulos, autores ou temas">
        </label>
      </form>

      <nav class="nav-desktop" aria-label="Navegação principal">
        <ul>${desktopNav}</ul>
      </nav>

      <div class="header-actions">
        <button class="btn-icon" type="button" data-theme-toggle aria-label="Alternar tema"></button>
        <a class="btn-icon header-account${page === "conta" ? " is-current" : ""}" href="conta.html" aria-label="Minha conta">
          <i data-lucide="circle-user-round" aria-hidden="true"></i>
        </a>
        <a class="btn btn-primary header-cta desktop-only" href="planos.html">Assinar Premium</a>
        <button class="btn-icon menu-toggle" id="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="mobile-menu" aria-expanded="false">${MENU_ICON}</button>
      </div>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Menu mobile" hidden>
      <div class="container-wide">
        <form class="mobile-search" action="catalogo.html" method="get" role="search" aria-label="Buscar ebooks">
          <label class="shell-search-field" for="mobile-search">
            <i data-lucide="search" aria-hidden="true"></i>
            <input id="mobile-search" name="q" type="search" value="${query}" placeholder="Buscar no catálogo">
          </label>
        </form>
        <ul>${mobileNav}</ul>
      </div>
    </nav>
  `;
}

function buildFooter() {
  return `
    <div class="container-wide footer-grid">
      <div class="footer-brand">
        <a class="logo" href="index.html" aria-label="Vita Ebooks">
          <span class="logo-mark" aria-hidden="true">${LOGO_MARK}</span>
          <span class="logo-wordmark">Vita Ebooks</span>
        </a>
        <p>Curadoria em português para quem quer descobrir, comparar e voltar a ler com mais repertório, ritmo e desejo de continuar.</p>
      </div>
      <nav class="footer-column" aria-label="Explorar">
        <h3>Explorar</h3>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li><a href="catalogo.html">Catálogo</a></li>
          <li><a href="planos.html">Premium</a></li>
        </ul>
      </nav>
      <nav class="footer-column" aria-label="Institucional">
        <h3>Institucional</h3>
        <ul>
          <li><a href="sobre.html">Sobre</a></li>
          <li><a href="suporte.html">Suporte</a></li>
          <li><a href="conta.html">Conta</a></li>
        </ul>
      </nav>
      <nav class="footer-column" aria-label="Destaques">
        <h3>Destaques</h3>
        <ul>
          <li><a href="ebook.html?slug=trabalho-profundo">Trabalho Profundo</a></li>
          <li><a href="ebook.html?slug=habitos-atomicos">Hábitos Atômicos</a></li>
          <li><a href="catalogo.html?categoria=negocios">Negócios</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-bottom">
      <div class="container-wide">
        <p>&copy; <span data-year></span> Vita Ebooks.</p>
        <nav class="footer-legal" aria-label="Atalhos finais">
          <a href="suporte.html#faq">FAQ</a>
          <a href="suporte.html#contato">Contato</a>
        </nav>
      </div>
    </div>
  `;
}

function renderShell() {
  const page = document.body.dataset.page || "home";
  const header = qs("#site-header");
  const footer = qs("#site-footer");
  if (header) header.innerHTML = buildHeader(page);
  if (footer) footer.innerHTML = buildFooter();
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = qs("[data-theme-toggle]");
  const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  let theme = getStoredTheme() || system;
  const apply = () => {
    root.setAttribute("data-theme", theme);
    if (!toggle) return;
    toggle.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
    toggle.setAttribute("aria-label", `Alternar para modo ${theme === "dark" ? "claro" : "escuro"}`);
  };
  apply();
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    setStoredTheme(theme);
    apply();
  });
}

function setupHeader() {
  const header = qs("#site-header");
  const button = qs("#menu-toggle");
  const menu = qs("#mobile-menu");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  if (!button || !menu) return;
  button.addEventListener("click", () => {
    const open = !menu.hidden;
    menu.hidden = open;
    button.setAttribute("aria-expanded", String(!open));
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
  return `${"★".repeat(full)}${"☆".repeat(Math.max(0, 5 - full))}`;
}

function categoryName(id) {
  return state.categories.find((item) => item.id === id)?.nome || id;
}

function bySlugOrId(value) {
  return state.ebooks.find((book) => book.slug === value || book.id === value);
}

function bookCoverSrc(book) {
  return typeof book?.capa === "string" ? book.capa : "";
}

function bookCoverAlt(book) {
  return book?.capa_alt || `Capa do ebook ${book?.titulo || "Vita Ebooks"}`;
}

function renderCover(book, extraClass = "", options = {}) {
  const classes = ["cover-art", book.tom || "editorial-indigo", extraClass].filter(Boolean).join(" ");
  if (bookCoverSrc(book)) {
    const alt = options.decorative ? "" : escapeHtml(bookCoverAlt(book));
    const loading = options.loading || "lazy";
    return `
      <div class="${classes} is-image">
        <img class="cover-image" src="${escapeHtml(bookCoverSrc(book))}" alt="${alt}" loading="${loading}" decoding="async">
      </div>
    `;
  }

  return `
    <div class="${classes}">
      <small>${categoryName(book.categoria)}</small>
      <strong>${book.titulo}</strong>
      <span>${book.autor}</span>
    </div>
  `;
}

function renderHeroPoster(book, positionClass) {
  return `
    <a class="hero-poster ${positionClass}" href="ebook.html?slug=${book.slug}" aria-label="Abrir ${book.titulo}">
      ${renderCover(book, "book-cover-hero", { decorative: true, loading: "eager" })}
    </a>
  `;
}

function renderHomeHero() {
  const target = qs("#home-hero-stage");
  if (!target) return;

  const spotlight = bySlugOrId("trabalho-profundo") || state.ebooks[0];
  const supportA = bySlugOrId("habitos-atomicos") || state.ebooks[1] || spotlight;
  const supportC = bySlugOrId("pai-rico-pai-pobre") || state.ebooks[3] || spotlight;
  const supportB = bySlugOrId("comece-pelo-porque") || state.ebooks[2] || spotlight;
  if (!spotlight) return;

  target.innerHTML = `
    <div class="poster-stack">
      <div class="hero-stage-glow"></div>
      <div class="hero-stage-shell"></div>
      ${renderHeroPoster(spotlight, "hero-card-a")}
      ${renderHeroPoster(supportB, "hero-card-b")}
      ${renderHeroPoster(supportA, "hero-card-c")}
      ${renderHeroPoster(supportC, "hero-card-d")}
      <aside class="floating-panel spotlight-panel">
        <span class="mini-label">Destaque da semana</span>
        <h2>${spotlight.titulo}</h2>
        <p>${spotlight.sinopse}</p>
        <ul class="signal-list">
          <li><span>Autor</span><strong>${spotlight.autor}</strong></li>
          <li><span>Formato</span><strong>${spotlight.formato}</strong></li>
          <li><span>Avaliação</span><strong>${spotlight.avaliacao.toFixed(1)} de 5</strong></li>
        </ul>
        <a class="btn btn-primary" href="ebook.html?slug=${spotlight.slug}">Abrir destaque</a>
      </aside>
    </div>
  `;
}

function renderShelfCard(book) {
  return `
    <article class="book-card">
      <a href="ebook.html?slug=${book.slug}" aria-label="Ver ${book.titulo}">
        <div class="cover-shell">
          ${book.badge ? `<span class="tag book-badge">${book.badge}</span>` : ""}
          ${renderCover(book)}
        </div>
        <div class="book-body">
          <div class="book-meta">
            <span>${categoryName(book.categoria)}</span>
            <span>${book.formato}</span>
          </div>
          <h3 class="book-title">${book.titulo}</h3>
          <p class="book-author">${book.autor}</p>
          <p class="book-description">${book.sinopse}</p>
        </div>
      </a>
      <div class="book-footer">
        <div class="price-row">
          <strong class="book-price">${price(book.preco)}</strong>
          <span class="book-price-old">${price(book.preco_original)}</span>
        </div>
        <div class="book-footline">
          <span class="rating" aria-label="Avaliação ${book.avaliacao}">${stars(book.avaliacao)} ${book.avaliacao.toFixed(1)}</span>
          <a class="text-link" href="ebook.html?slug=${book.slug}">Abrir detalhes</a>
        </div>
      </div>
    </article>
  `;
}

function renderContinueCard(book, label) {
  return `
    <article class="continue-card">
      <a class="continue-card-link" href="ebook.html?slug=${book.slug}" aria-label="Abrir ${book.titulo}">
        <div class="continue-cover-shell">
          ${renderCover(book, "continue-cover", { decorative: true })}
        </div>
        <div class="continue-content">
          <span class="mini-label">${label}</span>
          <h3>${book.titulo}</h3>
          <p>${book.autor}</p>
        </div>
      </a>
    </article>
  `;
}

function renderHomeCategory(category) {
  return `
    <a class="genre-card home-category-card" href="catalogo.html?categoria=${category.id}">
      <span class="genre-icon"><i data-lucide="${category.icone}" aria-hidden="true"></i></span>
      <div>
        <h3>${category.nome}</h3>
        <p>${category.descricao}</p>
      </div>
    </a>
  `;
}

function renderTopPick(book, label) {
  return `
    <article class="top-pick-card">
      ${renderCover(book, "top-pick-cover", { decorative: true })}
      <div class="pick-content">
        <span class="mini-label">${label}</span>
        <h3>${book.titulo}</h3>
        <p>${book.sinopse}</p>
        <a class="text-link" href="ebook.html?slug=${book.slug}">Abrir detalhes</a>
      </div>
    </article>
  `;
}

function renderQuote(item) {
  return `
    <blockquote class="quote-card">
      <p>${item.texto}</p>
      <footer>
        <span class="avatar" aria-hidden="true">${item.inicial}</span>
        <div>
          <strong>${item.nome}</strong>
          <p class="section-copy">${item.cargo}</p>
        </div>
        <span class="stars">${"★".repeat(item.estrelas)}</span>
      </footer>
    </blockquote>
  `;
}

function renderHome() {
  const categories = qs("#home-categories");
  const featured = qs("#home-featured");
  const spotlight = qs("#home-spotlight");
  const premium = qs("#home-premium");
  const quotes = qs("#home-testimonials");

  renderHomeHero();

  if (categories) {
    categories.innerHTML = state.categories.slice(0, 4).map(renderHomeCategory).join("");
  }

  if (featured) {
    featured.innerHTML = state.ebooks.filter((book) => book.destaque).slice(0, 3).map(renderShelfCard).join("");
  }

  if (spotlight) {
    spotlight.innerHTML = state.ebooks.filter((book) => book.destaque).slice(0, 3).map((book, index) => {
      const label = index === 0 ? "Abrir agora" : index === 1 ? "Seguir lendo" : "Vale ver";
      return renderContinueCard(book, label);
    }).join("");
  }

  if (premium) {
    premium.innerHTML = sortBooks(state.ebooks, "avaliacao").slice(0, 2).map(renderShelfCard).join("");
  }

  if (quotes) {
    quotes.innerHTML = state.testimonials.slice(0, 3).map(renderQuote).join("");
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
  const form = qs("#catalog-form");
  const searchInput = qs("#catalog-search");
  const categorySelect = qs("#catalog-category");
  const sortSelect = qs("#catalog-sort");
  const controls = qs("#catalog-quick-filters");
  const grid = qs("#catalog-grid");
  const count = qs("#catalog-count");
  const reset = qs("#catalog-reset");
  const topPicks = qs("#catalog-top-picks");
  if (!grid || !form || !searchInput || !categorySelect || !sortSelect) return;

  categorySelect.innerHTML = `<option value="">Todas as categorias</option>${state.categories.map((item) => `<option value="${item.id}">${item.nome}</option>`).join("")}`;

  if (controls) {
    controls.innerHTML = [
      '<button type="button" class="catalog-chip is-active" data-category-pill=""><i data-lucide="sparkles"></i><span>Todos os temas</span></button>',
      ...state.categories.map((item) => `
        <button type="button" class="catalog-chip" data-category-pill="${item.id}">
          <i data-lucide="${item.icone}"></i>
          <span>${item.nome}</span>
        </button>
      `)
    ].join("");
  }

  if (topPicks) {
    topPicks.classList.add("editorial-track");
    topPicks.innerHTML = state.ebooks.filter((book) => book.destaque).slice(0, 3).map((book, index) => {
      const label = index === 0 ? "Escolha da semana" : index === 1 ? "Mais lido" : "Vale conhecer";
      return renderTopPick(book, label);
    }).join("");
  }

  const params = new URLSearchParams(window.location.search);
  searchInput.value = params.get("q") || "";
  categorySelect.value = params.get("categoria") || "";
  sortSelect.value = params.get("ordem") || "destaque";

  const render = () => {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;
    const pills = [...document.querySelectorAll("[data-category-pill]")];
    const filtered = sortBooks(state.ebooks.filter((book) => {
      const haystack = `${book.titulo} ${book.autor} ${book.sinopse} ${categoryName(book.categoria)}`.toLowerCase();
      return (!query || haystack.includes(query)) && (!category || book.categoria === category);
    }), sort);

    grid.classList.toggle("is-empty", filtered.length === 0);
    grid.innerHTML = filtered.length
      ? filtered.map(renderShelfCard).join("")
      : `
        <section class="empty-state glass-panel">
          <h2>Nenhum ebook encontrado</h2>
          <p>Tente outro termo, navegue por categoria ou volte para os destaques da curadoria.</p>
        </section>
      `;

    if (count) {
      count.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;
    }

    pills.forEach((pill) => {
      pill.classList.toggle("is-active", pill.dataset.categoryPill === category);
    });

    const next = new URLSearchParams();
    if (query) next.set("q", searchInput.value.trim());
    if (category) next.set("categoria", category);
    if (sort && sort !== "destaque") next.set("ordem", sort);
    history.replaceState({}, "", next.toString() ? `?${next.toString()}` : "catalogo.html");
    createIcons();
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });

  [searchInput, categorySelect, sortSelect].forEach((field) => {
    field.addEventListener("input", render);
    field.addEventListener("change", render);
  });

  document.querySelectorAll("[data-category-pill]").forEach((pill) => {
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
  const target = qs("#ebook-app");
  if (!target) return;
  const params = new URLSearchParams(window.location.search);
  const value = params.get("slug") || params.get("id") || state.ebooks[0]?.slug;
  const book = bySlugOrId(value);

  if (!book) {
    target.innerHTML = `
      <section class="section">
        <div class="container-wide">
          <section class="empty-state glass-panel">
            <h2>Ebook não encontrado</h2>
            <p>Volte ao catálogo para continuar explorando a curadoria da Vita.</p>
            <div class="cta-actions"><a class="btn btn-primary" href="catalogo.html">Voltar ao catálogo</a></div>
          </section>
        </div>
      </section>
    `;
    return;
  }

  const related = state.ebooks.filter((item) => item.slug !== book.slug && item.categoria === book.categoria).slice(0, 3);

  target.innerHTML = `
    <section class="section product-page-shell">
      <div class="container-wide product-shell">
        <div class="product-layout product-hero-layout">
          <aside class="product-cover product-cover-stage">
            <div class="glass-panel product-cover-panel">
              ${renderCover(book, "product-cover-art", { loading: "eager" })}
            </div>
            <div class="product-proof-strip glass-panel">
              <span>${book.paginas} páginas</span>
              <span>${book.formato}</span>
              <span>${book.avaliacao.toFixed(1)} de 5</span>
            </div>
          </aside>
          <article class="product-summary">
            <div class="product-summary-head">
              <span class="eyebrow">${categoryName(book.categoria)}</span>
              <h1>${book.titulo}</h1>
              <p class="product-lead">${book.sinopse}</p>
              <div class="product-meta">
                <span>${book.autor}</span>
                <span>${book.atualizado_em}</span>
                <span>${book.badge || "Curadoria Vita"}</span>
              </div>
            </div>

            <div class="product-decision-grid">
              <div class="product-story-stack">
                <p class="section-copy product-story-copy">${book.descricao}</p>
                <div class="product-story-panels">
                  <article class="detail-card product-story-card">
                    <h3>O que você encontra nesta leitura</h3>
                    <p>Uma leitura clara, de aplicação rápida e com força suficiente para abrir novas decisões no tema ${categoryName(book.categoria).toLowerCase()}.</p>
                  </article>
                  <article class="detail-card product-story-card">
                    <h3>O que você leva desta leitura</h3>
                    <ul class="detail-list">${book.aprendizados.map((item) => `<li>${item}</li>`).join("")}</ul>
                  </article>
                </div>
              </div>

              <aside class="product-buy-card glass-panel">
                <div class="product-buy-top">
                  <span class="mini-label">Compra avulsa</span>
                  <div class="product-price-row">
                    <strong>${price(book.preco)}</strong>
                    <span>${price(book.preco_original)}</span>
                  </div>
                  <p>Ideal para entrar por um título e decidir com calma como continuar dentro da curadoria.</p>
                </div>
                <div class="summary-chips">
                  <span class="summary-chip"><i data-lucide="download" aria-hidden="true"></i>${book.formato}</span>
                  <span class="summary-chip"><i data-lucide="badge-check" aria-hidden="true"></i>${book.badge || "Curadoria Vita"}</span>
                  <span class="summary-chip"><i data-lucide="star" aria-hidden="true"></i>${book.avaliacao.toFixed(1)} de 5</span>
                </div>
                <div class="cta-actions">
                  <a class="btn btn-primary" href="suporte.html?interesse=${book.slug}#contato">Quero este ebook</a>
                  <a class="btn btn-ghost" href="planos.html">Ver Premium</a>
                </div>
                <p class="product-support-note">Receba detalhes de acesso, formatos e a melhor opção para leitura com o apoio da equipe Vita.</p>
              </aside>
            </div>

            <div class="detail-grid product-detail-grid">
              <article class="detail-card">
                <h3>Para quem este título funciona melhor</h3>
                <ul class="detail-list">${book.para_quem.map((item) => `<li>${item}</li>`).join("")}</ul>
              </article>
              <article class="detail-card">
                <h3>Por que ele entrou na curadoria</h3>
                <ul class="detail-list">
                  <li>Leitura clara, aplicável e fácil de recomendar</li>
                  <li>Boa porta de entrada para o tema ${categoryName(book.categoria).toLowerCase()}</li>
                  <li>Ótimo equilíbrio entre profundidade e ritmo</li>
                </ul>
              </article>
              <article class="detail-card">
                <h3>Formato e contexto de leitura</h3>
                <ul class="detail-list">
                  <li>${book.paginas} páginas para avançar com ritmo constante</li>
                  <li>${book.formato} para abrir no formato mais confortável</li>
                  <li>Atualizado em ${book.atualizado_em}</li>
                </ul>
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container-wide">
        <section class="stream-section">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Relacionados</span>
              <h2>Continue nesta mesma frente</h2>
            </div>
            <a class="text-link" href="catalogo.html?categoria=${book.categoria}">Explorar categoria</a>
          </div>
          <div class="related-grid">
            ${related.length ? related.map(renderShelfCard).join("") : `
              <article class="detail-card">
                <h3>Mais títulos chegando</h3>
                <p>Esta categoria segue crescendo com novas páginas de produto e novas leituras da curadoria.</p>
              </article>
            `}
          </div>
        </section>
      </div>
    </section>
  `;
}

function setupSupportForm() {
  const button = qs("#support-mailto");
  const name = qs("#support-name");
  const email = qs("#support-email");
  const topic = qs("#support-topic");
  const message = qs("#support-message");
  const hint = qs("#support-prefill");
  if (!button || !name || !email || !topic || !message) return;

  const params = new URLSearchParams(window.location.search);
  const interest = params.get("interesse");
  const plan = params.get("plano");

  if (interest) {
    topic.value = `Interesse no ebook: ${interest}`;
    message.value = `Olá, equipe Vita.\n\nQuero receber mais detalhes sobre o ebook "${interest}" e entender a melhor forma de acesso.`;
    if (hint) hint.textContent = `Interesse carregado automaticamente: ${interest}`;
  }

  if (plan) {
    topic.value = `Interesse no plano: ${plan}`;
    message.value = `Olá, equipe Vita.\n\nQuero saber mais sobre o plano "${plan}" e entender qual formato combina melhor com meu ritmo de leitura.`;
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
  renderShell();
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
