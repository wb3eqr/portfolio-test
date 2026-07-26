export function stackPage(t) {
  const levels = { Expert: 95, Advanced: 80, Intermediate: 65 };
  const colors = [
    "from-yellow-400 to-yellow-600",
    "from-emerald-400 to-emerald-600",
    "from-purple-400 to-purple-600",
    "from-orange-400 to-orange-600",
    "from-blue-400 to-blue-600",
    "from-sky-400 to-sky-600",
    "from-red-400 to-red-600",
    "from-cyan-400 to-cyan-600",
  ];
  const initials = ["JS", "Py", "C#", "Ja", "C", "Lu", "H", "SQL"];
  const progLevels = ['Expert','Advanced','Advanced','Intermediate','Intermediate','Advanced','Expert','Intermediate'];

  return `
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-8 sm:mb-12">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.stack.skills}</span>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight gradient-text">${t.stack.title}</h2>
          <p class="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mt-3 max-w-xl leading-relaxed">${t.stack.desc}</p>
        </div>
        <div class="space-y-10 sm:space-y-12">
          <div>
            <h3 class="text-sm sm:text-base font-medium tracking-wider uppercase mb-4 sm:mb-5" style="color:var(--text-secondary)">${t.stack.languages}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              ${t.stack.langNames.map((name, i) => `
                <div class="glass rounded-xl p-4 sm:p-6 tech-card stagger-${i + 1} scroll-reveal-scale">
                  <div class="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span class="flex-shrink-0">
                      <svg class="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
                        <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">${initials[i]}</text>
                      </svg>
                    </span>
                    <div>
                      <div class="text-sm sm:text-base font-medium">${name}</div>
                      <div class="text-[11px] sm:text-xs mt-0.5" style="color:var(--accent)">${t.stack.levels[progLevels[i]] || name}</div>
                    </div>
                  </div>
                  <div class="h-1.5 sm:h-2 rounded-full overflow-hidden" style="background:var(--border)">
                    <div class="h-full rounded-full bg-gradient-to-r ${colors[i]} progress-fill" style="--progress-width:${levels[progLevels[i]]}%;width:${levels[progLevels[i]]}%"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-medium tracking-wider uppercase mb-4 sm:mb-5" style="color:var(--text-secondary)">${t.stack.frameworks}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              ${t.stack.fwList.map((fw, i) => `
                <div class="glass rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.3s ease">${fw}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-medium tracking-wider uppercase mb-4 sm:mb-5" style="color:var(--text-secondary)">${t.stack.databases}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              ${t.stack.dbList.map((db, i) => `
                <div class="glass rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.3s ease">${db}</div>
              `).join('')}
            </div>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-medium tracking-wider uppercase mb-4 sm:mb-5" style="color:var(--text-secondary)">${t.stack.gameDev}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
              ${t.stack.gdList.map((g, i) => `
                <div class="glass rounded-lg px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base text-center hover-scale stagger-${i + 1} scroll-reveal" style="transition:all 0.3s ease">${g}</div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
