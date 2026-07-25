export function contactPage(t) {
  return `
    <section class="min-h-[calc(100vh-4rem)] py-16 sm:py-20 flex items-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div class="text-center mb-12 sm:mb-16">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${t.contact.connect}</span>
          <h2 class="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">${t.contact.title}</h2>
          <p class="text-base sm:text-lg text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">${t.contact.desc}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <a href="mailto:HelloMyWorld@xyecoc.com" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-1 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
            <div><div class="text-sm font-medium">${t.contact.email}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">HelloMyWorld@xyecoc.com</div></div>
          </a>
          <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-2 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14z"/></svg></div>
            <div><div class="text-sm font-medium">${t.contact.telegram}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">@sell_program</div></div>
          </a>
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-3 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style="color:var(--text-secondary)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div>
            <div><div class="text-sm font-medium">${t.contact.github}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">/wb3eqr</div></div>
          </a>
          <a href="https://t.me/hello_my_super_bio" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-4 scroll-reveal sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0z"/></svg></div>
            <div><div class="text-sm font-medium">${t.contact.channel}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">@hello_my_super_bio</div></div>
          </a>
        </div>
        <div id="contact-form-container" class="max-w-lg mx-auto mb-10 stagger-5 scroll-reveal"></div>
        <div id="guestbook-container" class="max-w-lg mx-auto mb-10 stagger-6 scroll-reveal"></div>
        <div class="glass rounded-2xl p-8 text-center stagger-7 scroll-reveal">
          <div class="mb-4 flex justify-center"><svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg></div>
          <h3 class="text-xl font-semibold mb-2">${t.contact.openTitle}</h3>
          <p class="text-sm mb-6 max-w-md mx-auto" style="color:var(--text-secondary)">${t.contact.openDesc}</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>${t.contact.sayHello}</a>
            <a href="mailto:HelloMyWorld@xyecoc.com" class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>${t.contact.email}</a>
          </div>
        </div>
      </div>
    </section>`;
}
