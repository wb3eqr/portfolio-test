export function heroPage(t) {
  return `
    <section class="min-h-[calc(100vh-3rem)] flex flex-col justify-center relative overflow-hidden pb-8">
      <div class="max-w-6xl mx-auto px-4 w-full">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          <div class="flex-1 space-y-5 sm:space-y-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-[var(--text-secondary)] stagger-1" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <span class="relative w-2 h-2"><span class="absolute inset-0 rounded-full bg-emerald-500"></span><span class="absolute inset-0 rounded-full bg-emerald-500 animate-ping-slow"></span></span> ${t.hero.available}
            </div>
            <h1 class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] break-words stagger-2" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${t.hero.title1}<br/><span class="gradient-text">${t.hero.title2}</span><br/>${t.hero.title3}
            </h1>
            <p class="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed stagger-3" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">${t.hero.desc}</p>
            <div class="flex flex-wrap gap-3 sm:gap-4 stagger-4" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <a href="/projects" data-nav class="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base group">${t.hero.cta}<svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
              <a href="/contact" data-nav class="btn-glass inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base">${t.hero.contact}</a>
            </div>
            <div class="flex items-center gap-4 sm:gap-5 stagger-5" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <div class="flex -space-x-2 sm:-space-x-2.5">${["JS","Py","C#","Lu"].map((s, i) => `<div class="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-[9px] sm:text-[11px] font-bold hover-lift" style="color:var(--text);background:${["#6C63FF","#10B981","#F59E0B","#F43F5E"][i]}33;transition:all 0.3s ease;animation-delay:${0.1 * i}s">${s}</div>`).join("")}</div>
              <span class="text-xs sm:text-sm text-[var(--text-secondary)]">${t.hero.techs}</span>
            </div>
          </div>
          <div class="flex-shrink-0 stagger-6" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
            <div class="relative">
              <div class="w-36 h-36 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-2xl glass-strong flex items-center justify-center overflow-hidden hover-lift" style="animation:float 6s ease-in-out infinite">
                <div class="absolute inset-0 shimmer-bg rounded-2xl"></div>
                <div class="text-center px-4 relative z-10">
                  <div class="flex justify-center"><svg class="w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                  <div class="text-lg sm:text-2xl lg:text-3xl font-bold gradient-text mt-2">wb3eqr</div>
                  <div class="text-xs sm:text-sm lg:text-base text-[var(--text-secondary)]">${t.hero.subtitle}</div>
                </div>
              </div>
              <div class="absolute -top-3 -right-3 w-12 h-12 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center backdrop-blur-xl" style="animation:breathe 3s ease-in-out infinite">
                <div class="text-center"><div class="text-base sm:text-xl lg:text-2xl font-bold" style="color:var(--accent)">5</div><div class="text-[8px] sm:text-[10px] lg:text-xs" style="color:var(--text-secondary);line-height:1.1">${t.hero.years}<br/>${t.hero.coding}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto px-4 mt-6 sm:mt-10 lg:mt-12">
        <div id="terminal-container" class="glass rounded-xl p-4 sm:p-5 overflow-hidden stagger-7" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0;max-height:260px;overflow-y:auto"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 mt-3 sm:mt-5">
        <div id="gh-stats-container" class="stagger-8" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0"></div>
      </div>
    </section>`;
}
