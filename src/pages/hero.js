export function heroPage(t) {
  return `
    <section class="min-h-[calc(100vh-3rem)] flex flex-col justify-center relative overflow-hidden pb-8">
      <div class="max-w-6xl mx-auto px-4 w-full">
        <div class="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          <div class="flex-1 space-y-4 sm:space-y-5">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs sm:text-sm text-[var(--text-secondary)] stagger-1" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ${t.hero.available}
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] break-words stagger-2" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${t.hero.title1}<br/><span class="gradient-text">${t.hero.title2}</span><br/>${t.hero.title3}
            </h1>
            <p class="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed stagger-3" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">${t.hero.desc}</p>
            <div class="flex flex-wrap gap-2 sm:gap-3 stagger-4" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <a href="/projects" data-nav class="btn-primary inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm">${t.hero.cta}<svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
              <a href="/contact" data-nav class="btn-glass inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm">${t.hero.contact}</a>
            </div>
            <div class="flex items-center gap-3 sm:gap-4 stagger-5" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <div class="flex -space-x-1.5 sm:-space-x-2">${["JS","Py","C#","Lu"].map((s, i) => `<div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-[8px] sm:text-[10px] font-bold" style="color:var(--text);background:${["#6C63FF","#10B981","#F59E0B","#F43F5E"][i]}33">${s}</div>`).join("")}</div>
              <span class="text-xs sm:text-sm text-[var(--text-secondary)]">${t.hero.techs}</span>
            </div>
          </div>
          <div class="flex-shrink-0 stagger-6" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
            <div class="relative">
              <div class="w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-2xl glass-strong flex items-center justify-center overflow-hidden" style="animation:float 6s ease-in-out infinite">
                <div class="text-center px-4">
                  <div class="flex justify-center"><svg class="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                  <div class="text-base sm:text-xl lg:text-2xl font-bold gradient-text mt-1">wb3eqr</div>
                  <div class="text-[11px] sm:text-sm lg:text-base text-[var(--text-secondary)]">${t.hero.subtitle}</div>
                </div>
              </div>
              <div class="absolute -top-2 -right-2 w-11 h-11 sm:w-16 sm:h-16 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center backdrop-blur-xl">
                <div class="text-center"><div class="text-sm sm:text-lg lg:text-xl font-bold" style="color:var(--accent)">5</div><div class="text-[8px] sm:text-[10px] lg:text-xs" style="color:var(--text-secondary);line-height:1.1">${t.hero.years}<br/>${t.hero.coding}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto px-4 mt-6 sm:mt-8">
        <div id="terminal-container" class="glass rounded-xl p-3 sm:p-4 overflow-hidden stagger-7" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0;max-height:240px;overflow-y:auto"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 mt-3 sm:mt-4">
        <div id="gh-stats-container" class="stagger-8" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0"></div>
      </div>
    </section>`;
}
