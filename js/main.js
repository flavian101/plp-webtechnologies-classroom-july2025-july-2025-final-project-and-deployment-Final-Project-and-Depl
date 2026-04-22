// ── Footer year ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});

// ── Mobile nav toggle ─────────────────────────────────────────────
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ── Scroll reveal ─────────────────────────────────────────────────
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => io.observe(el));

// ── Project data ──────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "nexora",
    title: "Nexora",
    desc: "Full-stack AI prompt-sharing platform with public profiles, middleware auth guards, likes/saves with optimistic UI, and dark/light theming.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "MongoDB"],
    status: "active",
    statusLabel: "Active",
    url: "https://github.com/flavian101",
    featured: true,
  },
  {
    id: "gateway",
    title: "Gateway Real Estates",
    desc: "Fully responsive real-estate listing platform with client-side filtering, dynamic detail views, and modular component architecture.",
    tags: ["TypeScript", "React", "CSS", "Vercel"],
    status: "live",
    statusLabel: "Live",
    url: "https://github.com/flavian101",
    featured: true,
  },
  {
    id: "yaru",
    title: "Yaru — Task Manager",
    desc: "Board-based project management tool with drag-and-drop workflows, demonstrating advanced state management and client-side logic in TypeScript.",
    tags: ["TypeScript", "React", "CSS"],
    status: "live",
    statusLabel: "Live",
    url: "https://github.com/flavian101",
    featured: true,
  },
  {
    id: "vercel-dashboard",
    title: "Vercel Admin Dashboard",
    desc: "Administrative dashboard with dynamic routing, API integration, and responsive data visualisation — replicating enterprise SaaS patterns.",
    tags: ["Next.js", "TypeScript", "React", "CSS"],
    status: "live",
    statusLabel: "Live",
    url: "https://github.com/flavian101",
    featured: false,
  },
  {
    id: "hospital-mgmt",
    title: "Hospital Management System",
    desc: "Led a 4-person team to deliver a full-stack system with RBAC, AES-256 encryption, and a normalised database schema for high-concurrency operations.",
    tags: ["Java", "Apache Tomcat", "MySQL"],
    status: "archived",
    statusLabel: "Academic",
    url: "https://github.com/flavian101",
    featured: false,
  },
  {
    id: "network-suite",
    title: "Network Programming Suite",
    desc: "Scalable C++ client-server applications using async I/O and thread pooling, sustaining 100+ concurrent clients at sub-100ms latency.",
    tags: ["C++", "Boost::Asio", "TCP/IP"],
    status: "archived",
    statusLabel: "Academic",
    url: "https://github.com/flavian101",
    featured: false,
  },
];

// ── Render helpers ────────────────────────────────────────────────
function buildProjectCard(p) {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.innerHTML = `
    <div class="project-card-header">
      <h3>${p.title}</h3>
      <span class="project-status ${p.status}">${p.statusLabel}</span>
    </div>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="project-card-actions">
      <a class="btn small ghost" href="${p.url}" target="_blank" rel="noopener">View on GitHub →</a>
    </div>
  `;
  return card;
}

function renderProjects(containerId, filter = "all") {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  const filtered = PROJECTS.filter((p) =>
    filter === "all"
      ? true
      : p.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())),
  );
  if (filtered.length === 0) {
    container.innerHTML =
      '<p style="color:var(--muted)">No projects match this filter.</p>';
    return;
  }
  filtered.forEach((p) => {
    const card = buildProjectCard(p);
    container.appendChild(card);
    // Re-observe new cards for reveal
    io.observe(card);
  });
}

// ── Bootstrap on DOM ready ────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Featured projects (home page — first 3)
  const featuredContainer = document.getElementById("featured-projects");
  if (featuredContainer) {
    PROJECTS.filter((p) => p.featured).forEach((p) => {
      const card = buildProjectCard(p);
      featuredContainer.appendChild(card);
      io.observe(card);
    });
  }

  // Full project list (projects page)
  if (document.getElementById("project-list")) {
    renderProjects("project-list");

    // Filter buttons
    document.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll("[data-filter]")
          .forEach((b) => b.classList.remove("primary"));
        btn.classList.add("primary");
        renderProjects("project-list", btn.dataset.filter);
      });
    });
  }
});
