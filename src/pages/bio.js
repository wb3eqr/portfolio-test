export function bioPage(t) {
  return `
    <section class="min-h-screen py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="mb-8 sm:mb-10">
          <span class="text-xs font-medium tracking-widest uppercase" style="color:var(--accent)">${t.bio.about}</span>
          <h2 class="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">${t.bio.title}</h2>
          <p class="text-sm text-[var(--text-secondary)] mt-2 max-w-xl">${t.bio.desc}</p>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-10">
          <div class="glass rounded-xl p-5 stagger-1 scroll-reveal">
            <div class="mb-3 flex"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="var(--accent)"/></svg></div>
            <h3 class="text-base font-semibold mb-2">${t.bio.whoTitle}</h3>
            <p class="text-xs leading-relaxed" style="color:var(--text-secondary)">${t.bio.whoText}</p>
          </div>
          <div class="glass rounded-xl p-5 stagger-2 scroll-reveal">
            <div class="mb-3 flex"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
            <h3 class="text-base font-semibold mb-2">${t.bio.missionTitle}</h3>
            <p class="text-xs leading-relaxed" style="color:var(--text-secondary)">${t.bio.missionText}</p>
          </div>
        </div>
        <div class="mb-8">
          <span class="text-xs font-medium tracking-widest uppercase" style="color:var(--accent)">${t.bio.timeline}</span>
          <h2 class="text-2xl sm:text-4xl font-bold mt-2 tracking-tight">${t.bio.journey}</h2>
        </div>
        <div class="relative">
          <div class="absolute left-[15px] top-0 bottom-0 w-px" style="background:var(--border)"></div>
          <div class="space-y-8">
            ${t.bio.items.map((item, i) => `
              <div class="relative pl-10 stagger-${i + 1} scroll-reveal">
                <div class="absolute left-[8px] top-1 w-3.5 h-3.5 rounded-full timeline-dot" style="background:var(--accent)"></div>
                <div class="text-[10px] font-medium mb-0.5" style="color:var(--accent)">${item.period}</div>
                <h3 class="text-sm font-semibold">${item.title}</h3>
                <p class="text-xs mt-0.5" style="color:var(--text-secondary)">${item.sub}</p>
                <p class="text-xs mt-0.5 leading-relaxed" style="color:var(--text-tertiary)">${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
