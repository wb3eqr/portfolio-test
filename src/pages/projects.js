export function projectsPage(t) {
  const gradients = ["from-[var(--accent)]/20 to-purple-600/10","from-emerald-500/20 to-cyan-600/10","from-rose-500/20 to-orange-600/10","from-sky-500/20 to-indigo-600/10"];
  const icons = ['<path d="M4 4h16v4a4 4 0 00-4 4h8v8H4V4z"/><path d="M12 12h8"/><path d="M4 12h4"/>','<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/><path d="M9 7h6"/><path d="M12 7v4"/><path d="M8 11V7a4 4 0 018 0v4"/>','<rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="14" r="1"/><path d="M8 14h8"/>','<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>'];
  return `
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-8 sm:mb-12">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.projects.work}</span>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight gradient-text">${t.projects.title}</h2>
          <p class="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mt-3 max-w-xl leading-relaxed">${t.projects.desc}</p>
        </div>
        <div id="carousel-container" class="mb-8 sm:mb-10 stagger-2 scroll-reveal-scale"></div>
        <div class="grid sm:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-12">
          ${t.projects.items.map((item, i) => `
            <div class="glass rounded-xl overflow-hidden project-card stagger-${i + 1} scroll-reveal">
              <div class="relative h-36 sm:h-48 bg-gradient-to-br ${gradients[i]} flex items-center justify-center overflow-hidden">
                <div class="select-none flex items-center justify-center" style="animation:float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.5}s"><svg class="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35">${icons[i]}</svg></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent"></div>
                ${item.tag ? `<div class="absolute bottom-3 left-3"><span class="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium">${item.tag}</span></div>` : ""}
              </div>
              <div class="p-5 sm:p-6">
                <h3 class="text-base sm:text-lg font-semibold mb-2">${item.title}</h3>
                <p class="text-sm sm:text-base leading-relaxed mb-4" style="color:var(--text-secondary)">${item.desc}</p>
                <div class="flex flex-wrap gap-2 sm:gap-2.5">${item.tags.map(t => `<span class="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm" style="background:var(--border);color:var(--text-secondary)">${t}</span>`).join("")}</div>
              </div>
            </div>`).join("")}
        </div>
        <div class="text-center">
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="btn-glass inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-sm sm:text-base hover-lift"><svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385z"/></svg>${t.projects.seeAll}</a>
        </div>
      </div>
    </section>`;
}
