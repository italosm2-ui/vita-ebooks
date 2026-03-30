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

const FALLBACK_MEMBER = {
  perfil: {
    nome: "Clara Ribeiro",
    iniciais: "CR",
    cargo: "Estratégia de marca",
    cidade: "São Paulo - SP",
    membro_desde: "Janeiro de 2026",
    bio: "Leitora que usa a Vita para manter repertório de trabalho, salvar títulos de volta e construir um ritmo semanal mais consistente."
  },
  plano: {
    nome: "Clube mensal",
    status: "Ativo",
    descricao: "Acesso recorrente à curadoria com mais continuidade de leitura.",
    renovacao: "12 de abril de 2026"
  },
  metricas: [
    { rotulo: "Dias seguidos", valor: "8" },
    { rotulo: "Sessões na semana", valor: "4" },
    { rotulo: "Ebooks concluídos", valor: "12" },
    { rotulo: "Favoritos salvos", valor: "18" }
  ],
  rotina: [
    {
      titulo: "Janela de leitura mais estável",
      descricao: "Manhãs curtas com 20 a 30 minutos antes de abrir o fluxo do trabalho."
    },
    {
      titulo: "Tema dominante da semana",
      descricao: "Foco, hábitos e clareza para aprofundar leitura aplicada ao trabalho."
    },
    {
      titulo: "Melhor próximo passo",
      descricao: "Retomar um título salvo e abrir um novo livro da mesma trilha sem perder contexto."
    }
  ],
  atalhos: [
    {
      titulo: "Retomar Trabalho Profundo",
      descricao: "Voltar para um título forte que já está puxando sua semana.",
      href: "ebook.html?slug=trabalho-profundo",
      label: "Abrir ebook",
      icon: "book-open"
    },
    {
      titulo: "Explorar sua biblioteca",
      descricao: "Ver favoritos, recentes e os salvos para depois.",
      href: "aluno/biblioteca.html",
      label: "Ir para biblioteca",
      icon: "library-big"
    },
    {
      titulo: "Comparar seu plano",
      descricao: "Rever benefícios do Clube mensal com a Vita.",
      href: "planos.html",
      label: "Ver Premium",
      icon: "badge-check"
    }
  ],
  insights: [
    {
      titulo: "Sua semana está consistente",
      descricao: "Você voltou à Vita em quatro sessões e manteve a leitura concentrada em produtividade e rotina."
    },
    {
      titulo: "Um título está pedindo continuidade",
      descricao: "Trabalho Profundo já virou o centro da sua trilha. Vale manter esse eixo antes de abrir muitos temas."
    }
  ],
  biblioteca: {
    continuar: ["trabalho-profundo", "habitos-atomicos"],
    favoritos: ["comece-pelo-porque", "mindset-a-psicologia-do-sucesso", "trabalho-profundo"],
    salvos: ["pai-rico-pai-pobre", "habitos-atomicos", "comece-pelo-porque", "mindset-a-psicologia-do-sucesso"],
    recentes: ["trabalho-profundo", "habitos-atomicos", "pai-rico-pai-pobre"]
  },
  preferencias: [
    {
      titulo: "Curadoria semanal",
      descricao: "Receber seleções e destaques novos por e-mail.",
      status: "Ativa",
      apoio: "Toda sexta-feira"
    },
    {
      titulo: "Formato preferido",
      descricao: "Prioridade para títulos com leitura confortável entre PDF e ePub.",
      status: "PDF + ePub",
      apoio: "Ajustado ao seu ritmo atual"
    },
    {
      titulo: "Avisos de continuidade",
      descricao: "Lembretes suaves para voltar aos livros salvos e manter sequência.",
      status: "Ligados",
      apoio: "Sem pressão, só retomada"
    }
  ],
  seguranca: [
    {
      titulo: "E-mail principal",
      descricao: "clara@vitaebooks.com.br",
      status: "Verificado"
    },
    {
      titulo: "Recuperação de acesso",
      descricao: "Apoio assistido pela equipe Vita quando você precisar retomar sua conta.",
      status: "Suporte humano"
    }
  ]
};

const state = { ebooks: [], categories: [], testimonials: [], member: null };

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

const APP_NAV = [
  { page: "dashboard", href: "aluno/dashboard.html", label: "Dashboard", icon: "layout-dashboard" },
  { page: "biblioteca", href: "aluno/biblioteca.html", label: "Biblioteca", icon: "library-big" },
  { page: "perfil", href: "aluno/perfil.html", label: "Perfil", icon: "circle-user-round" },
  { page: "configuracoes", href: "aluno/configuracoes.html", label: "Configuracoes", icon: "settings-2" }
];

const qs = (selector, parent = document) => parent.querySelector(selector);

function isAppShell() {
  return document.body.dataset.shell === "app";
}

function relativeToRoot(path = "") {
  const prefix = isAppShell() ? "../" : "";
  return `${prefix}${path}`;
}

function hrefWithQuery(path, params = {}, hash = "") {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  ).toString();
  return `${relativeToRoot(path)}${query ? `?${query}` : ""}${hash}`;
}

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
    <li><a class="shell-link" href="${relativeToRoot(item.href)}"${currentPrimary === item.page ? ' aria-current="page"' : ""}>${item.label}</a></li>
  `).join("");
  const mobileNav = MOBILE_NAV.map((item) => `
    <li><a href="${relativeToRoot(item.href)}"${page === item.page ? ' aria-current="page"' : ""}>${item.label}</a></li>
  `).join("");

  return `
    <div class="container-wide header-inner">
      <a class="logo" href="${relativeToRoot("index.html")}" aria-label="Vita Ebooks">
        <span class="logo-mark" aria-hidden="true">${LOGO_MARK}</span>
        <span class="logo-wordmark">Vita Ebooks</span>
      </a>

      <form class="shell-search" action="${relativeToRoot("catalogo.html")}" method="get" role="search" aria-label="Buscar ebooks">
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
        <a class="btn-icon header-account${page === "conta" ? " is-current" : ""}" href="${relativeToRoot("conta.html")}" aria-label="Minha conta">
          <i data-lucide="circle-user-round" aria-hidden="true"></i>
        </a>
        <a class="btn btn-primary header-cta desktop-only" href="${relativeToRoot("planos.html")}">Assinar Premium</a>
        <button class="btn-icon menu-toggle" id="menu-toggle" type="button" aria-label="Abrir menu" aria-controls="mobile-menu" aria-expanded="false">${MENU_ICON}</button>
      </div>
    </div>
    <nav class="mobile-menu" id="mobile-menu" aria-label="Menu mobile" hidden>
      <div class="container-wide">
        <form class="mobile-search" action="${relativeToRoot("catalogo.html")}" method="get" role="search" aria-label="Buscar ebooks">
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
        <a class="logo" href="${relativeToRoot("index.html")}" aria-label="Vita Ebooks">
          <span class="logo-mark" aria-hidden="true">${LOGO_MARK}</span>
          <span class="logo-wordmark">Vita Ebooks</span>
        </a>
        <p>Curadoria em português para quem quer descobrir, comparar e voltar a ler com mais repertório, ritmo e desejo de continuar.</p>
      </div>
      <nav class="footer-column" aria-label="Explorar">
        <h3>Explorar</h3>
        <ul>
          <li><a href="${relativeToRoot("index.html")}">Início</a></li>
          <li><a href="${relativeToRoot("catalogo.html")}">Catálogo</a></li>
          <li><a href="${relativeToRoot("planos.html")}">Premium</a></li>
        </ul>
      </nav>
      <nav class="footer-column" aria-label="Institucional">
        <h3>Institucional</h3>
        <ul>
          <li><a href="${relativeToRoot("sobre.html")}">Sobre</a></li>
          <li><a href="${relativeToRoot("suporte.html")}">Suporte</a></li>
          <li><a href="${relativeToRoot("conta.html")}">Conta</a></li>
        </ul>
      </nav>
      <nav class="footer-column" aria-label="Destaques">
        <h3>Destaques</h3>
        <ul>
          <li><a href="${hrefWithQuery("ebook.html", { slug: "trabalho-profundo" })}">Trabalho Profundo</a></li>
          <li><a href="${hrefWithQuery("ebook.html", { slug: "habitos-atomicos" })}">Hábitos Atômicos</a></li>
          <li><a href="${hrefWithQuery("catalogo.html", { categoria: "negocios" })}">Negócios</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer-bottom">
      <div class="container-wide">
        <p>&copy; <span data-year></span> Vita Ebooks.</p>
        <nav class="footer-legal" aria-label="Atalhos finais">
          <a href="${relativeToRoot("suporte.html")}#faq">FAQ</a>
          <a href="${relativeToRoot("suporte.html")}#contato">Contato</a>
        </nav>
      </div>
    </div>
  `;
}

function buildAppSidebar(page) {
  const profile = state.member?.perfil || FALLBACK_MEMBER.perfil;
  const nav = APP_NAV.map((item) => `
    <li>
      <a class="app-nav-link${page === item.page ? " is-current" : ""}" href="${relativeToRoot(item.href)}"${page === item.page ? ' aria-current="page"' : ""}>
        <i data-lucide="${item.icon}" aria-hidden="true"></i>
        <span>${item.label}</span>
      </a>
    </li>
  `).join("");

  return `
    <div class="app-sidebar-inner">
      <a class="app-brand" href="${relativeToRoot("index.html")}" aria-label="Vita Ebooks">
        <span class="logo-mark" aria-hidden="true">${LOGO_MARK}</span>
        <span class="logo-wordmark">Vita Ebooks</span>
      </a>

      <section class="app-profile-card glass-panel">
        <span class="app-avatar" aria-hidden="true">${escapeHtml(profile.iniciais)}</span>
        <div>
          <strong>${escapeHtml(profile.nome)}</strong>
          <p>${escapeHtml(profile.cargo)}</p>
        </div>
      </section>

      <nav class="app-nav" aria-label="Área do assinante">
        <ul>${nav}</ul>
      </nav>

      <section class="app-sidebar-card surface-card">
        <span class="mini-label">Continuidade</span>
        <h2>Seu ritmo de leitura agora tem um lugar próprio.</h2>
        <p>Biblioteca, progresso e Premium organizados no mesmo fluxo.</p>
      </section>
    </div>
  `;
}

function buildAppTopbar() {
  const plan = state.member?.plano || FALLBACK_MEMBER.plano;
  return `
    <div class="app-topbar-inner">
      <div class="app-topbar-group">
        <button class="btn-icon app-menu-toggle" id="app-menu-toggle" type="button" aria-label="Abrir navegação interna" aria-controls="app-sidebar" aria-expanded="false">${MENU_ICON}</button>
        <form class="app-search" action="${relativeToRoot("catalogo.html")}" method="get" role="search" aria-label="Buscar no catálogo">
          <label class="shell-search-field" for="app-search">
            <i data-lucide="search" aria-hidden="true"></i>
            <input id="app-search" name="q" type="search" placeholder="Buscar títulos, autores ou temas">
          </label>
        </form>
      </div>

      <div class="app-topbar-actions">
        <span class="app-plan-pill"><i data-lucide="sparkles" aria-hidden="true"></i>${escapeHtml(plan.nome)} · ${escapeHtml(plan.status)}</span>
        <a class="btn btn-ghost app-support-link" href="${relativeToRoot("suporte.html")}#contato">Falar com a Vita</a>
        <button class="btn-icon" type="button" data-theme-toggle aria-label="Alternar tema"></button>
      </div>
    </div>
  `;
}

function renderShell() {
  const page = document.body.dataset.page || "home";
  if (isAppShell()) {
    const sidebar = qs("#app-sidebar");
    const topbar = qs("#app-topbar");
    if (sidebar) sidebar.innerHTML = buildAppSidebar(page);
    if (topbar) topbar.innerHTML = buildAppTopbar();
    return;
  }

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

function setupAppChrome() {
  const shell = qs(".app-shell");
  const sidebar = qs("#app-sidebar");
  const toggle = qs("#app-menu-toggle");
  if (!shell || !sidebar || !toggle) return;
  toggle.addEventListener("click", () => {
    const open = shell.classList.toggle("is-sidebar-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      shell.classList.remove("is-sidebar-open");
      toggle.setAttribute("aria-expanded", "false");
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
    const response = await fetch(relativeToRoot(path), { cache: "no-store" });
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

function booksFromSlugs(values = []) {
  return values.map((value) => bySlugOrId(value)).filter(Boolean);
}

function bookCoverSrc(book) {
  return typeof book?.capa === "string" ? relativeToRoot(book.capa) : "";
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
    <a class="hero-poster ${positionClass}" href="${hrefWithQuery("ebook.html", { slug: book.slug })}" aria-label="Abrir ${book.titulo}">
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
        <a class="btn btn-primary" href="${hrefWithQuery("ebook.html", { slug: spotlight.slug })}">Abrir destaque</a>
      </aside>
    </div>
  `;
}

function renderShelfCard(book) {
  return `
    <article class="book-card">
      <a href="${hrefWithQuery("ebook.html", { slug: book.slug })}" aria-label="Ver ${book.titulo}">
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
          <a class="text-link" href="${hrefWithQuery("ebook.html", { slug: book.slug })}">Abrir detalhes</a>
        </div>
      </div>
    </article>
  `;
}

function renderHomeMemberBridge() {
  const target = qs("#home-member-bridge");
  const member = state.member || FALLBACK_MEMBER;
  if (!target) return;

  const continueBook = booksFromSlugs(member.biblioteca?.continuar).find(Boolean) || bySlugOrId("trabalho-profundo") || state.ebooks[0];
  const stats = [
    { label: "Plano", value: member.plano?.nome || "Clube mensal" },
    { label: "Salvos", value: `${member.biblioteca?.salvos?.length || 0} títulos` },
    { label: "Ritmo", value: member.metricas?.[0]?.valor ? `${member.metricas[0].valor} dias` : "Constante" }
  ];

  target.innerHTML = `
    <div class="home-member-grid">
      <div class="home-member-copy">
        <span class="eyebrow">Área do assinante</span>
        <h2>Continue a experiência em uma área feita para retomar leitura, biblioteca e ritmo semanal.</h2>
        <p>O ambiente interno organiza sua trilha de leitura com o mesmo cuidado visual da vitrine, mas em uma navegação mais focada no que você já salvou e quer aprofundar.</p>
        <div class="home-member-actions">
          <a class="btn btn-primary" href="${relativeToRoot("aluno/dashboard.html")}">Ver dashboard</a>
          <a class="btn btn-ghost" href="${relativeToRoot("aluno/biblioteca.html")}">Abrir biblioteca</a>
        </div>
      </div>

      <article class="home-member-preview" aria-label="Prévia da área do assinante">
        <div class="home-member-preview-top">
          <div>
            <strong>${member.plano?.nome || "Clube mensal"}</strong>
            <span>${member.plano?.status || "Ativo"}</span>
          </div>
          <span class="mini-label">Aluno</span>
        </div>
        ${continueBook ? `
          <a class="home-member-preview-book" href="${hrefWithQuery("ebook.html", { slug: continueBook.slug })}">
            <div class="continue-cover-shell">
              ${renderCover(continueBook, "continue-cover", { decorative: true })}
            </div>
            <div class="home-member-preview-copy">
              <span class="mini-label">Retomar</span>
              <h3>${continueBook.titulo}</h3>
              <p>${continueBook.autor}</p>
            </div>
          </a>
        ` : ""}
        <div class="home-member-stats">
          ${stats.map((item) => `
            <div class="home-member-stat">
              <strong>${item.value}</strong>
              <span>${item.label}</span>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
  `;
}

function renderCatalogCard(book) {
  return `
    <article class="catalog-book-card">
      <a class="catalog-book-link" href="${hrefWithQuery("ebook.html", { slug: book.slug })}" aria-label="Ver ${book.titulo}">
        <div class="cover-shell">
          ${book.badge ? `<span class="tag book-badge">${book.badge}</span>` : ""}
          ${renderCover(book)}
        </div>
        <div class="catalog-book-copy">
          <div class="book-meta">
            <span>${categoryName(book.categoria)}</span>
            <span>${book.formato}</span>
          </div>
          <h3 class="book-title">${book.titulo}</h3>
          <p class="book-author">${book.autor}</p>
          <p class="book-description">${book.sinopse}</p>
          <div class="catalog-card-footer">
            <div class="price-row">
              <strong class="book-price">${price(book.preco)}</strong>
              <span class="book-price-old">${price(book.preco_original)}</span>
            </div>
            <div class="catalog-card-tail">
              <span class="rating" aria-label="Avaliação ${book.avaliacao}">${stars(book.avaliacao)} ${book.avaliacao.toFixed(1)}</span>
              <span class="catalog-card-action">Abrir</span>
            </div>
          </div>
        </div>
      </a>
    </article>
  `;
}

function renderContinueCard(book, label) {
  return `
    <article class="continue-card">
      <a class="continue-card-link" href="${hrefWithQuery("ebook.html", { slug: book.slug })}" aria-label="Abrir ${book.titulo}">
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
    <a class="genre-card home-category-card" href="${hrefWithQuery("catalogo.html", { categoria: category.id })}">
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
        <a class="text-link" href="${hrefWithQuery("ebook.html", { slug: book.slug })}">Abrir detalhes</a>
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
  const quotes = qs("#home-testimonials");

  renderHomeHero();
  renderHomeMemberBridge();

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
      '<button type="button" class="catalog-chip is-active" data-category-pill=""><i data-lucide="sparkles"></i><span>Todos</span></button>',
      ...state.categories.map((item) => `
        <button type="button" class="catalog-chip" data-category-pill="${item.id}">
          <i data-lucide="${item.icone}"></i>
          <span>${item.nome}</span>
        </button>
      `)
    ].join("");
  }

  if (topPicks) {
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
      ? filtered.map(renderCatalogCard).join("")
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

  const category = categoryName(book.categoria);
  const related = state.ebooks.filter((item) => item.slug !== book.slug && item.categoria === book.categoria).slice(0, 3);
  const testimonials = state.testimonials.slice(0, 3);
  const faqItems = [
    {
      title: "Como recebo este ebook depois do contato?",
      body: "Nossa equipe orienta o melhor formato para leitura, confirma o título escolhido e responde as dúvidas de acesso antes de finalizar a compra."
    },
    {
      title: "Este título funciona melhor para quem?",
      body: book.para_quem[0] || `Leitores que querem avançar com mais clareza dentro do tema ${category.toLowerCase()}.`
    },
    {
      title: "Quais formatos estão disponíveis?",
      body: `${book.formato} para você abrir a leitura no fluxo que fizer mais sentido, com ritmo mais confortável entre computador, tablet ou celular.`
    },
    {
      title: "Vale mais comprar avulso ou ir para o Premium?",
      body: `Se você quer começar por ${book.titulo}, a compra avulsa resolve. Se quiser continuar descobrindo novos títulos depois desta leitura, o Premium costuma entregar mais repertório.`
    }
  ];

  target.innerHTML = `
    <section class="product-billboard-section">
      <div class="container-wide product-billboard">
        <div class="product-hero-grid">
          <article class="product-hero-copy">
            <span class="eyebrow">${category}</span>
            <div class="product-headline-stack">
              <p class="mini-label">Curadoria Vita</p>
              <h1>${book.titulo}</h1>
              <p class="product-lead">${book.sinopse}</p>
              <p class="product-hero-body">${book.descricao}</p>
            </div>

            <div class="product-proof-row">
              <span class="product-proof-item"><i data-lucide="star" aria-hidden="true"></i>${book.avaliacao.toFixed(1)} de 5</span>
              <span class="product-proof-item"><i data-lucide="book-open-text" aria-hidden="true"></i>${book.paginas} páginas</span>
              <span class="product-proof-item"><i data-lucide="download" aria-hidden="true"></i>${book.formato}</span>
              <span class="product-proof-item"><i data-lucide="badge-check" aria-hidden="true"></i>${book.badge || "Escolha da curadoria"}</span>
            </div>

            <div class="product-hero-purchase">
              <div class="product-price-lockup">
                <span class="mini-label">Compra avulsa</span>
                <div class="product-price-row">
                  <strong>${price(book.preco)}</strong>
                  <span>${price(book.preco_original)}</span>
                </div>
              </div>
              <div class="hero-actions product-hero-actions">
                <a class="btn btn-primary" href="suporte.html?interesse=${book.slug}#contato">Quero este ebook</a>
                <a class="btn btn-ghost" href="#produto-conteudo">Ver conteúdo</a>
              </div>
              <p class="product-hero-note">Perfeito para entrar por um título forte, entender o tema com mais clareza e decidir o próximo passo dentro da sua rotina de leitura.</p>
            </div>
          </article>

          <aside class="product-hero-visual">
            <div class="product-cover-showcase">
              <div class="product-cover-halo" aria-hidden="true"></div>
              <div class="product-cover-frame glass-panel">
                ${renderCover(book, "product-billboard-cover", { loading: "eager" })}
              </div>
              <div class="product-cover-caption">
                <span>${book.badge || "Curadoria Vita"}</span>
                <strong>${book.autor}</strong>
                <p>${book.paginas} páginas • ${book.formato}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section section-tight" id="produto-conteudo">
      <div class="container-wide">
        <section class="stream-section">
          <div class="stream-head">
            <div>
              <span class="eyebrow">O que você vai encontrar</span>
              <h2>Uma leitura que entra rápido, organiza o tema e deixa aplicação clara</h2>
            </div>
            <p>${book.descricao}</p>
          </div>
          <div class="product-learning-grid">
            ${book.aprendizados.map((item, index) => `
              <article class="detail-card product-learn-card">
                <span class="product-learning-index">0${index + 1}</span>
                <h3>${item}</h3>
                <p>${index === 0
                  ? `Uma porta de entrada mais clara para avançar no tema ${category.toLowerCase()} sem excesso de teoria.`
                  : index === 1
                    ? "Estrutura prática para transformar leitura em decisão, não só em repertório guardado."
                    : "Uma forma mais madura de aplicar o conteúdo no trabalho, na rotina e nas próximas escolhas."}</p>
              </article>
            `).join("")}
          </div>
        </section>
      </div>
    </section>

    <section class="section-tight product-depth-section">
      <div class="container-wide">
        <div class="product-depth-grid">
          <article class="surface-card product-depth-card">
            <span class="mini-label">Para quem</span>
            <h3>Este título funciona melhor para leitores que querem direção rápida.</h3>
            <ul class="detail-list">${book.para_quem.map((item) => `<li>${item}</li>`).join("")}</ul>
          </article>
          <article class="surface-card product-depth-card">
            <span class="mini-label">Por que entrou na curadoria</span>
            <ul class="detail-list">
              <li>Leitura clara, aplicável e fácil de recomendar</li>
              <li>Boa porta de entrada para o tema ${category.toLowerCase()}</li>
              <li>Equilíbrio forte entre ritmo, profundidade e retenção</li>
            </ul>
          </article>
          <article class="surface-card product-depth-card">
            <span class="mini-label">Formato de leitura</span>
            <ul class="detail-list">
              <li>${book.paginas} páginas para avançar com constância</li>
              <li>${book.formato} para abrir no fluxo mais confortável</li>
              <li>Atualizado em ${book.atualizado_em}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section-tight product-proof-section">
      <div class="container-wide">
        <div class="stream-head">
          <div>
            <span class="eyebrow">Leitura com contexto</span>
            <h2>Quem entra na Vita costuma procurar clareza, seleção forte e menos ruído na escolha.</h2>
          </div>
          <p>O objetivo aqui é te dar contexto suficiente para escolher rápido, com mais convicção e menos dúvida no próximo passo.</p>
        </div>
        <div class="quote-grid product-quote-grid">
          ${testimonials.map(renderQuote).join("")}
        </div>
      </div>
    </section>

    <section class="section-tight product-confidence-section">
      <div class="container-wide product-confidence-grid">
        <article class="glass-panel product-guarantee-panel">
          <span class="eyebrow">Acesso orientado</span>
          <h2>Você entra neste título com formato claro, contexto certo e ajuda humana quando precisar.</h2>
          <p>Se a dúvida for sobre melhor formato, forma de acesso ou o que combina mais com o seu momento de leitura, a equipe Vita te orienta antes de você seguir.</p>
          <div class="cta-actions">
            <a class="btn btn-primary" href="suporte.html?interesse=${book.slug}#contato">Falar com a Vita</a>
            <a class="btn btn-ghost" href="planos.html">Ver Premium</a>
          </div>
        </article>
        <div class="faq-list product-faq-stack">
          ${faqItems.map((item) => `
            <details class="faq-item"${item === faqItems[0] ? " open" : ""}>
              <summary>${item.title}</summary>
              <p>${item.body}</p>
            </details>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section product-final-section">
      <div class="container-wide">
        <article class="stream-banner product-final-banner">
          <div class="product-final-copy">
            <span class="eyebrow">Pronto para abrir este título?</span>
            <h2>${book.titulo}</h2>
            <p>${book.sinopse}</p>
          </div>
          <div class="product-final-purchase">
            <div class="product-price-row">
              <strong>${price(book.preco)}</strong>
              <span>${price(book.preco_original)}</span>
            </div>
            <div class="cta-actions">
              <a class="btn btn-primary" href="suporte.html?interesse=${book.slug}#contato">Quero este ebook</a>
              <a class="btn btn-ghost" href="planos.html">Comparar com o Premium</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section-tight">
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
                <p>Esta frente segue crescendo com novas recomendações e leituras escolhidas pela curadoria.</p>
              </article>
            `}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderMemberShortcut(item) {
  const href = item.href.includes("?") ? relativeToRoot(item.href) : relativeToRoot(item.href);
  return `
    <article class="surface-card app-shortcut-card">
      <span class="app-shortcut-icon"><i data-lucide="${item.icon}" aria-hidden="true"></i></span>
      <div class="app-shortcut-copy">
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
      </div>
      <a class="text-link" href="${href}">${item.label}</a>
    </article>
  `;
}

function renderMemberMetric(item) {
  return `
    <article class="surface-card app-metric-card">
      <strong>${item.valor}</strong>
      <span>${item.rotulo}</span>
    </article>
  `;
}

function renderMemberInsight(item) {
  return `
    <article class="surface-card app-insight-card">
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `;
}

function renderMemberSetting(item) {
  return `
    <article class="surface-card app-setting-card">
      <div class="app-setting-copy">
        <span class="mini-label">${item.status}</span>
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
      </div>
      ${item.apoio ? `<small>${item.apoio}</small>` : ""}
    </article>
  `;
}

function renderDashboard() {
  const target = qs("#app-page-root");
  const member = state.member || FALLBACK_MEMBER;
  if (!target) return;

  const continueBooks = booksFromSlugs(member.biblioteca?.continuar).slice(0, 2);
  const favoriteBooks = booksFromSlugs(member.biblioteca?.favoritos).slice(0, 3);
  const plan = member.plano;

  target.innerHTML = `
    <section class="app-hero-section">
      <div class="app-hero-grid">
        <article class="app-hero-copy">
          <span class="eyebrow">Dashboard do leitor</span>
          <h1>Uma visão limpa para retomar leitura, repertório e seu Premium sem perder contexto.</h1>
          <p>O dashboard organiza o que merece volta rápida: progresso recente, atalhos do momento e o melhor próximo passo dentro da curadoria.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${relativeToRoot("aluno/biblioteca.html")}">Abrir biblioteca</a>
            <a class="btn btn-ghost" href="${relativeToRoot("catalogo.html")}">Explorar catálogo</a>
          </div>
        </article>

        <aside class="glass-panel app-hero-panel">
          <span class="mini-label">Seu acesso agora</span>
          <h2>${plan.nome}</h2>
          <p>${plan.descricao}</p>
          <ul class="signal-list">
            <li><span>Status</span><strong>${plan.status}</strong></li>
            <li><span>Renovação</span><strong>${plan.renovacao}</strong></li>
            <li><span>Biblioteca</span><strong>${member.biblioteca.salvos.length} títulos salvos</strong></li>
          </ul>
          <a class="btn btn-primary" href="${relativeToRoot("planos.html")}">Ver Premium</a>
        </aside>
      </div>
    </section>

    <section class="section-tight">
      <div class="app-metric-grid">
        ${member.metricas.map(renderMemberMetric).join("")}
      </div>
    </section>

    <section class="section-tight">
      <div class="app-duo-grid">
        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Retome sem atrito</span>
              <h2>Os livros mais próximos do seu momento.</h2>
            </div>
            <p>Dois títulos fortes para voltar hoje, antes de abrir outras frentes.</p>
          </div>
          <div class="shelf-track app-shelf-grid">
            ${continueBooks.map(renderShelfCard).join("")}
          </div>
        </div>

        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Atalhos de hoje</span>
              <h2>O que vale abrir agora.</h2>
            </div>
          </div>
          <div class="app-shortcut-grid">
            ${member.atalhos.map(renderMemberShortcut).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="app-duo-grid app-duo-grid-wide">
        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Favoritos em rotação</span>
              <h2>Uma base para continuar construindo repertório.</h2>
            </div>
          </div>
          <div class="shelf-track app-shelf-grid app-shelf-grid-compact">
            ${favoriteBooks.map(renderShelfCard).join("")}
          </div>
        </div>

        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Leitura da semana</span>
              <h2>Clareza sobre seu ritmo atual.</h2>
            </div>
          </div>
          <div class="app-insight-grid">
            ${member.insights.map(renderMemberInsight).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderLibrary() {
  const target = qs("#app-page-root");
  const member = state.member || FALLBACK_MEMBER;
  if (!target) return;

  const continuar = booksFromSlugs(member.biblioteca?.continuar);
  const favoritos = booksFromSlugs(member.biblioteca?.favoritos);
  const salvos = booksFromSlugs(member.biblioteca?.salvos);

  target.innerHTML = `
    <section class="app-hero-section app-page-hero">
      <div class="stream-head">
        <div>
          <span class="eyebrow">Biblioteca</span>
          <h1>Sua coleção organizada para retomar, salvar e revisitar sem ruído.</h1>
        </div>
        <p>Uma prateleira viva para continuar leitura, guardar ideias fortes e manter o catálogo mais perto da sua rotina.</p>
      </div>
    </section>

    <section class="section-tight">
      <div class="stream-head">
        <div>
          <span class="eyebrow">Continuar lendo</span>
          <h2>Os títulos com mais tração neste momento.</h2>
        </div>
      </div>
      <div class="shelf-track app-shelf-grid">
        ${continuar.map(renderShelfCard).join("")}
      </div>
    </section>

    <section class="section-tight">
      <div class="stream-head">
        <div>
          <span class="eyebrow">Favoritos</span>
          <h2>Livros que valem revisita.</h2>
        </div>
      </div>
      <div class="shelf-track app-shelf-grid app-shelf-grid-compact">
        ${favoritos.map(renderShelfCard).join("")}
      </div>
    </section>

    <section class="section">
      <div class="stream-head">
        <div>
          <span class="eyebrow">Salvos para depois</span>
          <h2>Uma fila mais clara para não perder bons títulos.</h2>
        </div>
        <p>${salvos.length} títulos esperando o melhor momento de entrada.</p>
      </div>
      <div class="catalog-grid app-library-grid">
        ${salvos.map(renderCatalogCard).join("")}
      </div>
    </section>
  `;
}

function renderProfile() {
  const target = qs("#app-page-root");
  const member = state.member || FALLBACK_MEMBER;
  if (!target) return;

  const recent = booksFromSlugs(member.biblioteca?.recentes).slice(0, 3);
  const profile = member.perfil;

  target.innerHTML = `
    <section class="app-hero-section app-profile-hero">
      <div class="app-profile-grid">
        <article class="glass-panel app-profile-card-large">
          <div class="app-profile-heading">
            <span class="app-avatar app-avatar-large" aria-hidden="true">${escapeHtml(profile.iniciais)}</span>
            <div>
              <span class="eyebrow">Perfil</span>
              <h1>${profile.nome}</h1>
              <p class="section-copy">${profile.cargo} · ${profile.cidade}</p>
            </div>
          </div>
          <p>${profile.bio}</p>
          <div class="summary-chips">
            <span class="summary-chip"><i data-lucide="calendar-range" aria-hidden="true"></i>Membro desde ${profile.membro_desde}</span>
            <span class="summary-chip"><i data-lucide="badge-check" aria-hidden="true"></i>${member.plano.nome}</span>
          </div>
        </article>

        <article class="surface-card app-profile-side">
          <span class="mini-label">Leitura da semana</span>
          <h2>Seu padrão atual está consistente e favorece profundidade.</h2>
          <p>O perfil mostra ritmo, intenção e continuidade para você decidir o próximo livro com mais consciência.</p>
        </article>
      </div>
    </section>

    <section class="section-tight">
      <div class="app-metric-grid">
        ${member.metricas.map(renderMemberMetric).join("")}
      </div>
    </section>

    <section class="section-tight">
      <div class="app-duo-grid">
        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Hábitos e contexto</span>
              <h2>O que está sustentando sua rotina.</h2>
            </div>
          </div>
          <div class="app-routine-grid">
            ${member.rotina.map((item) => `
              <article class="surface-card app-routine-card">
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Retomadas recentes</span>
              <h2>Livros que ajudam a manter o eixo.</h2>
            </div>
          </div>
          <div class="shelf-track app-shelf-grid app-shelf-grid-compact">
            ${recent.map(renderShelfCard).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSettings() {
  const target = qs("#app-page-root");
  const member = state.member || FALLBACK_MEMBER;
  if (!target) return;

  target.innerHTML = `
    <section class="app-hero-section app-page-hero">
      <div class="stream-head">
        <div>
          <span class="eyebrow">Configuracoes</span>
          <h1>Um lugar para entender preferências, acesso e segurança sem perder clareza.</h1>
        </div>
        <p>Esta camada organiza o que importa na conta sem prometer ações persistidas antes da hora. O foco aqui é leitura clara, status e apoio humano quando necessário.</p>
      </div>
    </section>

    <section class="section-tight">
      <div class="app-settings-layout">
        <div class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Preferências</span>
              <h2>Os principais ajustes do seu ritmo.</h2>
            </div>
          </div>
          <div class="app-settings-grid">
            ${member.preferencias.map(renderMemberSetting).join("")}
          </div>
        </div>

        <aside class="app-section-stack">
          <div class="stream-head">
            <div>
              <span class="eyebrow">Segurança e acesso</span>
              <h2>Estado atual da conta.</h2>
            </div>
          </div>
          <div class="app-settings-grid">
            ${member.seguranca.map(renderMemberSetting).join("")}
          </div>
          <article class="glass-panel app-support-panel">
            <span class="mini-label">Ajustes assistidos</span>
            <p>Quando a conta precisar de ajuda real, a saída correta continua sendo o suporte da Vita. Nada aqui simula uma alteração já salva.</p>
            <div class="cta-actions">
              <a class="btn btn-primary" href="${relativeToRoot("suporte.html")}#contato">Falar com a Vita</a>
              <a class="btn btn-ghost" href="${relativeToRoot("aluno/esqueci-senha.html")}">Recuperar acesso</a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  `;
}

function renderRecoveryPage() {
  const target = qs("#app-page-root");
  if (!target) return;

  target.innerHTML = `
    <section class="app-hero-section app-recovery-section">
      <div class="app-recovery-grid">
        <article class="app-hero-copy">
          <span class="eyebrow">Recuperacao de acesso</span>
          <h1>Se você perdeu o caminho da conta, a Vita te ajuda a retomar com clareza.</h1>
          <p>Esta página não finge um reset automático. Ela organiza o pedido certo para a equipe te orientar de forma humana e sem ruído.</p>
          <ul class="roadmap-list">
            <li>Informe o e-mail que você usa na Vita</li>
            <li>Monte um pedido de apoio claro para o suporte</li>
            <li>Receba a orientação correta para retomar seu acesso</li>
          </ul>
        </article>

        <aside class="glass-panel app-recovery-panel">
          <span class="mini-label">Montar pedido</span>
          <label class="app-field" for="recovery-email">
            <span>E-mail principal</span>
            <input id="recovery-email" type="email" placeholder="voce@email.com">
          </label>
          <p>Ao seguir, a Vita abre um contato preparado para recuperação de acesso. O retorno continua humano e honesto.</p>
          <div class="cta-actions">
            <a class="btn btn-primary" id="recovery-mailto" href="${relativeToRoot("suporte.html")}#contato">Abrir suporte</a>
            <a class="btn btn-ghost" href="${relativeToRoot("conta.html")}">Voltar para conta</a>
          </div>
        </aside>
      </div>
    </section>
  `;
}

function setupRecoveryForm() {
  const field = qs("#recovery-email");
  const button = qs("#recovery-mailto");
  if (!field || !button) return;

  const update = () => {
    const email = field.value.trim() || "meu e-mail de acesso";
    const subject = encodeURIComponent("Recuperacao de acesso - Vita Ebooks");
    const body = encodeURIComponent(`Olá, equipe Vita.\n\nPreciso de ajuda para retomar meu acesso à conta.\n\nE-mail principal: ${email}\n\nPodem me orientar com o próximo passo?`);
    button.href = `mailto:contato@vitaebooks.com.br?subject=${subject}&body=${body}`;
  };

  field.addEventListener("input", update);
  update();
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
  [state.ebooks, state.categories, state.testimonials, state.member] = await Promise.all([
    loadJson("assets/data/ebooks.json", FALLBACK_EBOOKS),
    loadJson("assets/data/categorias.json", FALLBACK_CATEGORIES),
    loadJson("assets/data/depoimentos.json", FALLBACK_TESTIMONIALS),
    loadJson("assets/data/aluno.json", FALLBACK_MEMBER)
  ]);

  renderShell();
  setupTheme();
  if (isAppShell()) {
    setupAppChrome();
  } else {
    setupHeader();
    setYear();
  }

  const page = document.body.dataset.page || "home";
  if (page === "home") renderHome();
  if (page === "catalogo") renderCatalog();
  if (page === "ebook") renderProduct();
  if (page === "dashboard") renderDashboard();
  if (page === "biblioteca") renderLibrary();
  if (page === "perfil") renderProfile();
  if (page === "configuracoes") renderSettings();
  if (page === "esqueci-senha") {
    renderRecoveryPage();
    setupRecoveryForm();
  }
  if (page === "suporte") setupSupportForm();

  createIcons();
}

window.addEventListener("DOMContentLoaded", boot);
