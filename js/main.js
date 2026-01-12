// Data
const posts = [
    {
        id: 1,
        title: "Top 10 Vulnerabilidades OWASP en 2025",
        excerpt: "Un análisis detallado de las fallas de seguridad más críticas que afectan a las aplicaciones web modernas.",
        category: "security",
        date: "2026-01-10",
        image: "linear-gradient(to bottom, #111, #333)"
    },
    {
        id: 2,
        title: "¿Por qué Flutter dominará el mercado móvil?",
        excerpt: "Descubre las ventajas de utilizar un framework multiplataforma para reducir costos sin sacrificar rendimiento.",
        category: "mobile",
        date: "2026-01-05",
        image: "linear-gradient(to bottom, #111, #444)"
    },
    {
        id: 3,
        title: "Protegiendo tu API con Autenticación JWT",
        excerpt: "Tutorial paso a paso para implementar seguridad robusta en tus servicios backend utilizando JSON Web Tokens.",
        category: "dev",
        date: "2025-12-28",
        image: "linear-gradient(to bottom, #111, #555)"
    },
    {
        id: 4,
        title: "Introducción a Kubernetes",
        excerpt: "Domina la orquestación de contenedores y escala tus aplicaciones como los grandes.",
        category: "dev",
        date: "2025-12-15",
        image: "linear-gradient(to bottom, #111, #222)"
    },
    {
        id: 5,
        title: "Phishing: Cómo entrenar a tu equipo",
        excerpt: "Estrategias efectivas para prevenir ataques de ingeniería social en tu organización.",
        category: "security",
        date: "2025-12-10",
        image: "linear-gradient(to bottom, #111, #333)"
    },
    {
        id: 6,
        title: "React vs Vue: ¿Cuál elegir en 2026?",
        excerpt: "Comparativa actualizada de los frameworks frontend más populares.",
        category: "dev",
        date: "2025-11-20",
        image: "linear-gradient(to bottom, #111, #444)"
    },
    {
        id: 7,
        title: "Hacking Ético: Herramientas Esenciales",
        excerpt: "Kit de inicio para pentesters: Nmap, Burp Suite, Metasploit y más.",
        category: "security",
        date: "2025-11-15",
        image: "linear-gradient(to bottom, #111, #555)"
    },
    {
        id: 8,
        title: "Optimización de Rendimiento en Android",
        excerpt: "Tips avanzados para mejorar la fluidez y reducir el consumo de batería en apps nativas.",
        category: "mobile",
        date: "2025-11-05",
        image: "linear-gradient(to bottom, #111, #222)"
    },
    {
        id: 9,
        title: "GraphQL para Principiantes",
        excerpt: "Deja de usar REST y empieza a consultar solo los datos que necesitas.",
        category: "dev",
        date: "2025-10-30",
        image: "linear-gradient(to bottom, #111, #333)"
    },
    {
        id: 10,
        title: "XSS Moderno: Bypass de CSP y Mitigaciones",
        excerpt: "Análisis técnico de cómo los atacantes evaden las políticas de seguridad de contenido y cómo fortalecer tus defensas web.",
        category: "security",
        date: "2026-01-12",
        image: "linear-gradient(to bottom, #222, #00f0ff)"
    },
    {
        id: 11,
        title: "Seguridad en APIs REST: Más allá de HTTPS",
        excerpt: "Implementando Rate Limiting, validación estricta de esquemas y prevención de IDOR en tus endpoints críticos.",
        category: "security",
        date: "2026-01-11",
        image: "linear-gradient(to bottom, #222, #bc13fe)"
    },
    {
        id: 12,
        title: "Ingeniería Inversa de APKs: Lo que esconden tus apps",
        excerpt: "Cómo auditar la seguridad de aplicaciones Android descompilando binarios y analizando el código smali.",
        category: "mobile",
        date: "2026-01-11",
        image: "linear-gradient(to bottom, #222, #0aff68)"
    },
    {
        id: 13,
        title: "Advanced Persistent Threats (APTs)",
        excerpt: "Cómo detectar y neutralizar amenazas persistentes avanzadas en redes corporativas complejas.",
        category: "security",
        date: "2026-01-12",
        image: "linear-gradient(to bottom, #222, #00f0ff)"
    },
    {
        id: 14,
        title: "Securing Cloud Infrastructure",
        excerpt: "Best practices para asegurar entornos en AWS, Azure y Google Cloud Platform contra configuraciones erróneas.",
        category: "security",
        date: "2026-01-11",
        image: "linear-gradient(to bottom, #222, #bc13fe)"
    },
    {
        id: 15,
        title: "Zero Trust Architecture",
        excerpt: "Implementación de modelos de seguridad Zero Trust para minimizar la superficie de ataque lateral.",
        category: "security",
        date: "2026-01-11",
        image: "linear-gradient(to bottom, #222, #0aff68)"
    },
    {
        id: 16,
        title: "MuddyWater Launches RustyWater RAT via Spear-Phishing Across Middle East Sectors",
        excerpt: "Iranian threat actor MuddyWater has been observed using a new remote access trojan (RAT) called RustyWater...",
        category: "security",
        date: "2026-01-10",
        author: "Ravie Lakshmanan",
        body: "dumydmuuy",
        image: "linear-gradient(to bottom, #000, #ff0000)"
    },
    {
        id: 17,
        title: "DarkGate Malware Campaigns Exploit Windows SmartScreen Vulnerability",
        excerpt: "Attackers are abusing CVE-2024-21412 to bypass Microsoft Defender SmartScreen warnings and deploy DarkGate...",
        category: "security",
        date: "2026-01-09",
        author: "The Hacker News",
        body: "dumydmuuy",
        image: "linear-gradient(to bottom, #000, #aa0000)"
    },
    {
        id: 18,
        title: "Critical RCE Flaws Discovered in Juniper Networks Firewalls",
        excerpt: "Juniper Networks has released urgent patches for SRX Series firewalls to address remote code execution vulnerabilities...",
        category: "security",
        date: "2026-01-08",
        author: "Security Week",
        body: "dumydmuuy",
        image: "linear-gradient(to bottom, #000, #880000)"
    }
];

// Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Shadowacademy loaded (Bundle Version).');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Initialize Pages
    initBlog();
    initHomeBlog();
});


/* --- Blog Logic --- */
const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let currentCategory = 'all';
let filteredPosts = [...posts];

// DOM Elements
const postsContainer = document.getElementById('blog-posts-container');
const loadMoreBtn = document.getElementById('load-more-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

function initBlog() {
    if (!postsContainer) return; // Only run on blog page

    // Initial Filter
    filterPosts('all');

    // Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');

            const category = e.target.dataset.category;
            filterPosts(category);
        });
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMore);
    }
}

function initHomeBlog() {
    const homeBlogGrid = document.querySelector('#blog .blog-grid');
    if (!homeBlogGrid || postsContainer) return; // If postsContainer exists, we are on blog.html, so skip. OR if grid doesn't exist.

    // Get latest 3 posts
    const latestPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    homeBlogGrid.innerHTML = ''; // Clear static content

    latestPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        // Check for author
        const authorHtml = post.author ? `<span style="font-size: 0.75rem; color: var(--color-text-tertiary); display: block; margin-bottom: 0.5rem;">By ${post.author}</span>` : '';

        article.innerHTML = `
            <div class="blog-image">
                <div style="width:100%; height:100%; background: ${post.image};"></div>
            </div>
            <div class="blog-content">
                <span class="blog-date">${formatDate(post.date)}</span>
                ${authorHtml}
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Leer más</a>
            </div>
        `;
        homeBlogGrid.appendChild(article);
    });
}

function filterPosts(category) {
    currentCategory = category;
    currentPage = 1;

    if (category === 'all') {
        filteredPosts = [...posts];
    } else {
        filteredPosts = posts.filter(post => post.category === category);
    }

    // Sort by Date Descending
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    renderPosts(true);
}

function renderPosts(reset = false) {
    if (reset) {
        postsContainer.innerHTML = '';
        currentPage = 1;
    }

    // Calculate Slice
    const start = 0;
    const end = currentPage * ITEMS_PER_PAGE;

    if (!reset) {
        const prevEnd = (currentPage - 1) * ITEMS_PER_PAGE;
        const newPosts = filteredPosts.slice(prevEnd, end);
        appendPosts(newPosts);
    } else {
        // Reset (Initial render of first page)
        const pageOnePosts = filteredPosts.slice(0, ITEMS_PER_PAGE);
        appendPosts(pageOnePosts);
    }

    // Toggle Load More Button
    if (end >= filteredPosts.length) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    } else {
        if (loadMoreBtn) loadMoreBtn.style.display = 'inline-flex';
    }
}

function appendPosts(postsToAppend) {
    postsToAppend.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card animate-in';
        const authorHtml = post.author ? `<span style="font-size: 0.75rem; color: var(--color-text-tertiary); margin-left:10px;">By ${post.author}</span>` : '';

        article.innerHTML = `
            <div class="blog-image">
                <div style="width:100%; height:100%; background: ${post.image};"></div>
            </div>
            <div class="blog-content">
                <div style="display:flex; align-items:center; flex-wrap:wrap; gap:5px; margin-bottom:5px;">
                    <span class="blog-date">${formatDate(post.date)}</span>
                    <span class="blog-category-tag tag-${post.category}">${getCategoryName(post.category)}</span>
                    ${authorHtml}
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Leer más</a>
            </div>
        `;

        postsContainer.appendChild(article);
    });
}

function loadMore() {
    currentPage++;
    renderPosts(false);
}

function getCategoryName(cat) {
    const map = {
        'security': 'Ciberseguridad',
        'dev': 'Desarrollo',
        'mobile': 'Mobile',
        'all': 'Todos'
    };
    return map[cat] || cat;
}

function formatDate(dateString) {
    // Simple formatter "12 Ene 2026"
    const date = new Date(dateString + 'T12:00:00'); // Fix TZ issues
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}
