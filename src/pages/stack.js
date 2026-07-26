export function stackPage(t) {
  const levels = { Expert: 95, Advanced: 80, Intermediate: 65 };
  const colors = [
    "from-yellow-500/20 to-yellow-600/10",
    "from-emerald-500/20 to-emerald-600/10",
    "from-purple-500/20 to-purple-600/10",
    "from-orange-500/20 to-orange-600/10",
    "from-blue-500/20 to-blue-600/10",
    "from-sky-500/20 to-sky-600/10",
    "from-red-500/20 to-red-600/10",
    "from-cyan-500/20 to-cyan-600/10",
  ];
  const initials = ["JS", "Py", "C#", "Ja", "C", "Lu", "H", "SQL"];

  return `
    <section class="min-h-screen py-12 sm:py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-8 sm:mb-10">
          <span class="text-xs font-medium tracking-widest uppercase" style="color:var(--accent)">${t.stack.skills}</span>
          <h2 class="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">${t.stack.title}</h2>
          <p class="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">${t.stack.desc}</p>
        </div>
        <div class="space-y-8">
          <div>
            <h3 class="text-xs font-medium tracking-wider uppercase mb-4" style="color:var(--text-secondary)">${t.stack.languages}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              ${t.stack.langNames.map((name, i) => `
                <div class="glass rounded-xl p-4 tech-card stagger-${i + 1} scroll-reveal">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="flex-shrink-0">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
                        <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">${initials[i]}</text>
                      </svg>
                    </span>
                    <div>
                      <div class="text-xs font-medium">${name}</div>
                      <div class="text-[10px] mt-0.5" style="color:var(--accent)">${t.stack.levels[['Expert','Advanced','Advanced','Upper-Intermediate','Intermediate','Advanced','Expert','Intermediate'][i]] || name}</div>
                    </div>
                  </div>
                  <div class="h-1 rounded-full overflow-hidden" style="background:var(--border)">
                    <div class="h-full rounded-full bg-gradient-to-r ${colors[i]}" style="width:${levels[['Expert','Advanced','Advanced','Intermediate','Intermediate','Advanced','Expert','Intermediate'][i]] || 65}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-xs font-medium tracking-wider uppercase mb-4" style="color:var(--text-secondary)">${t.stack.frameworks}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              ${t.stack.fwList.map((fw, i) => `
                <div class="glass rounded-lg px-3 py-2 text-xs text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${fw}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-xs font-medium tracking-wider uppercase mb-4" style="color:var(--text-secondary)">${t.stack.databases}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              ${t.stack.dbList.map((db, i) => `
                <div class="glass rounded-lg px-3 py-2 text-xs text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${db}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-xs font-medium tracking-wider uppercase mb-4" style="color:var(--text-secondary)">${t.stack.gameDev}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              ${t.stack.gdList.map((g, i) => `
                <div class="glass rounded-lg px-3 py-2 text-xs text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.2s ease">${g}</div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
