import { posts } from '../../data/posts.js';

const ITEMS_PER_PAGE = 6;
let currentPage = 1;
let currentCategory = 'all';
let filteredPosts = [...posts];

// DOM Elements
const postsContainer = document.getElementById('blog-posts-container');
const loadMoreBtn = document.getElementById('load-more-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

export function initBlog() {
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

export function initHomeBlog() {
    const homeBlogGrid = document.querySelector('#blog .blog-grid');
    if (!homeBlogGrid || postsContainer) return;

    // Get latest 3 posts
    const latestPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

    homeBlogGrid.innerHTML = '';

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

    const start = 0;
    const end = currentPage * ITEMS_PER_PAGE;

    if (!reset) {
        const prevEnd = (currentPage - 1) * ITEMS_PER_PAGE;
        const newPosts = filteredPosts.slice(prevEnd, end);
        appendPosts(newPosts);
    } else {
        const pageOnePosts = filteredPosts.slice(0, ITEMS_PER_PAGE);
        appendPosts(pageOnePosts);
    }

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
    const date = new Date(dateString + 'T12:00:00');
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
}
