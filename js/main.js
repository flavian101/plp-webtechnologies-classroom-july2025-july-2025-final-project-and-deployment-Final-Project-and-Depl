// Global interactions: mobile menu, year, scroll reveal, dynamic projects

// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Mobile-friendly toggle menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal animations
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach(el => observer.observe(el));

// Simple in-memory data for projects
const PROJECTS = [
  {
    title: 'DX11 Terrain Renderer',
    desc: 'Real-time tessellated terrain with normal mapping and frustum culling.',
    img: 'images/DX11Terrain renderer.png',
    tags: ['graphics', 'DirectX', 'C++'],
    url: 'https://github.com/flavian101'
  },
  {
    title: 'Python Build Pipeline',
    desc: 'Config-driven CI scripts for asset processing and deployment.',
    img: 'images/Stylized python.png',
    tags: ['python', 'automation'],
    url: 'https://github.com/flavian101'
  },
  {
    title: 'SQL Inventory Schema',
    desc: 'Normalized schema with indexing strategy and sample queries.',
    img: 'images/Minimalist ER diagram.png',
    tags: ['sql', 'database'],
    url: 'https://github.com/flavian101'
  },
  {
    title: 'Win32 Render Framework',
    desc: 'Minimal Win32 app bootstrapping DX11 device, swap chain, and message loop.',
    img: 'images/win 32.png',
    tags: ['graphics', 'Win32', 'C++'],
    url: 'https://github.com/flavian101'
  }
];

// Render projects (used on Home and Projects)
function renderProjects(containerId, filter = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  const filtered = PROJECTS.filter(p =>
    filter === 'all' ? true : p.tags.map(t => t.toLowerCase()).includes(filter)
  );

  filtered.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <a class="btn small" href="${p.url}" target="_blank" rel="noopener">View code</a>
    `;
    container.appendChild(card);
  });

  if (filtered.length === 0) {
    const empty = document.createElement('p');
    empty.textContent = 'No projects match this filter.';
    container.appendChild(empty);
  }
}

// On load, hydrate project sections
document.addEventListener('DOMContentLoaded', () => {
  // Featured (home)
  if (document.getElementById('featured-projects')) {
    // Show first two as featured
    const featured = PROJECTS.slice(0, 2);
    const container = document.getElementById('featured-projects');
    featured.forEach(p => {
      const card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}" />
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <a class="btn small" href="${p.url}" target="_blank" rel="noopener">View code</a>
      `;
      container.appendChild(card);
    });
  }

  // Full list (projects page)
  if (document.getElementById('project-list')) {
    renderProjects('project-list');
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('primary'));
        btn.classList.add('primary');
        renderProjects('project-list', btn.dataset.filter);
      });
    });
  }
});