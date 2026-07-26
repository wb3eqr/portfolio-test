export function projectsPage(t) {
  const gradients = ["from-[var(--accent)]/20 to-purple-600/10","from-emerald-500/20 to-cyan-600/10","from-rose-500/20 to-orange-600/10","from-sky-500/20 to-indigo-600/10"];
  const icons = ['<path d="M4 4h16v4a4 4 0 00-4 4h8v8H4V4z"/><path d="M12 12h8"/><path d="M4 12h4"/>','<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/><path d="M9 7h6"/><path d="M12 7v4"/><path d="M8 11V7a4 4 0 018 0v4"/>','<rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="14" r="1"/><path d="M8 14h8"/>','<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>'];
  return `
    <section class="min-h-screen py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-8 sm:mb-12">
          <span class="text-xs font-medium tracking-widest uppercase" style="color:var(--accent)">${t.projects.work}</span>
          <h2 class="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">${t.projects.title}</h2>
          <p class="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">${t.projects.desc}</p>
        </div>
        <div id="carousel-container" class="mb-6 stagger-2 scroll-reveal"></div>
        <div class="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          ${t.projects.items.map((item, i) => `
            <div class="glass rounded-xl overflow-hidden project-card stagger-${i + 1} scroll-reveal">
              <div class="relative h-32 sm:h-40 bg-gradient-to-br ${gradients[i]} flex items-center justify-center overflow-hidden">
                <div class="select-none flex items-center justify-center" style="animation:float ${4 + i * 0.5}s ease-in-out infinite ${i * 0.5}s"><svg class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35">${icons[i]}</svg></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent"></div>
                ${item.tag ? `<div class="absolute bottom-3 left-3"><span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-medium">${item.tag}</span></div>` : ""}
              </div>
              <div class="p-3 sm:p-4">
                <h3 class="text-sm sm:text-base font-semibold mb-1">${item.title}</h3>
                <p class="text-xs leading-relaxed mb-3" style="color:var(--text-secondary)">${item.desc}</p>
                <div class="flex flex-wrap gap-1.5">${item.tags.map(t => `<span class="px-2 py-0.5 rounded-full text-[10px]" style="background:var(--border);color:var(--text-secondary)">${t}</span>`).join("")}</div>
              </div>
            </div>`).join("")}
        </div>
        <div class="text-center">
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="btn-glass inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385z"/></svg>${t.projects.seeAll}</a>
        </div>
      </div>
    </section>`;
}
