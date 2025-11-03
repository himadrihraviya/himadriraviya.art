window.projectCard = (p) => `
  <a class="card" href="project.html?slug=${encodeURIComponent(p.slug)}" aria-label="${p.title}">
    <img src="${p.cover}" alt="${p.title} cover">
    <div class="pad">
      <h3>${p.title}</h3>
      <p>${p.year} · ${p.category}</p>
    </div>
  </a>
`;
