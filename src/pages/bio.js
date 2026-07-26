export function bioPage(t) {
  return `
    <section class="py-10 sm:py-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4">
        <div class="mb-8 sm:mb-12">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.bio.about}</span>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight gradient-text">${t.bio.title}</h2>
          <p class="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] mt-3 max-w-xl leading-relaxed">${t.bio.desc}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
          <div class="glass rounded-xl p-6 sm:p-8 stagger-1 scroll-reveal hover-lift">
            <div class="mb-4 flex"><svg class="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="var(--accent)"/></svg></div>
            <h3 class="text-lg sm:text-xl font-semibold mb-3">${t.bio.whoTitle}</h3>
            <p class="text-sm sm:text-base leading-relaxed" style="color:var(--text-secondary)">${t.bio.whoText}</p>
          </div>
          <div class="glass rounded-xl p-6 sm:p-8 stagger-2 scroll-reveal hover-lift">
            <div class="mb-4 flex"><svg class="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
            <h3 class="text-lg sm:text-xl font-semibold mb-3">${t.bio.missionTitle}</h3>
            <p class="text-sm sm:text-base leading-relaxed" style="color:var(--text-secondary)">${t.bio.missionText}</p>
          </div>
        </div>
        <div class="mb-8 sm:mb-12">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.bio.timeline}</span>
          <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight gradient-text">${t.bio.journey}</h2>
        </div>
        <div class="relative">
          <div class="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-px" style="background:var(--border)"></div>
          <div class="space-y-10 sm:space-y-12">
            ${t.bio.items.map((item, i) => `
              <div class="relative pl-10 sm:pl-14 stagger-${i + 1} scroll-reveal-left">
                <div class="absolute left-[8px] sm:left-[11px] top-1 w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full timeline-dot" style="background:var(--accent);box-shadow:0 0 12px var(--accent-glow)"></div>
                <div class="text-xs sm:text-sm font-semibold mb-1.5" style="color:var(--accent)">${item.period}</div>
                <h3 class="text-base sm:text-xl font-semibold">${item.title}</h3>
                <p class="text-sm sm:text-base mt-0.5" style="color:var(--text-secondary)">${item.sub}</p>
                <p class="text-sm sm:text-base mt-2 leading-relaxed" style="color:var(--text-tertiary)">${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
