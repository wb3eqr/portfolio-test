export function contactPage(t) {
  return `
    <section class="py-10 sm:py-14">
      <div class="max-w-4xl mx-auto px-4 w-full">
        <div class="text-center mb-6 sm:mb-8">
          <span class="text-xs font-medium tracking-widest uppercase" style="color:var(--accent)">${t.contact.connect}</span>
          <h2 class="text-2xl sm:text-4xl font-bold mt-1 tracking-tight">${t.contact.title}</h2>
          <p class="text-sm text-[var(--text-secondary)] mt-1 max-w-lg mx-auto">${t.contact.desc}</p>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
          <a href="mailto:HelloMyWorld@xyecoc.com" class="glass rounded-lg p-3 flex items-center gap-2 contact-card stagger-1 scroll-reveal">
            <div class="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-[18px] h-[18px] text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
            <div class="min-w-0"><div class="text-xs font-medium truncate">${t.contact.email}</div><div class="text-[10px] truncate" style="color:var(--text-secondary)">HelloMyWorld@xyecoc.com</div></div>
          </a>
          <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="glass rounded-lg p-3 flex items-center gap-2 contact-card stagger-2 scroll-reveal">
            <div class="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-[18px] h-[18px] text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></div>
            <div class="min-w-0"><div class="text-xs font-medium truncate">${t.contact.telegram}</div><div class="text-[10px] truncate" style="color:var(--text-secondary)">@sell_program</div></div>
          </a>
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="glass rounded-lg p-3 flex items-center gap-2 contact-card stagger-3 scroll-reveal">
            <div class="w-9 h-9 rounded-lg bg-gray-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" style="color:var(--text-secondary)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div>
            <div class="min-w-0"><div class="text-xs font-medium truncate">${t.contact.github}</div><div class="text-[10px] truncate" style="color:var(--text-secondary)">/wb3eqr</div></div>
          </a>
          <a href="https://t.me/hello_my_super_bio" target="_blank" rel="noopener" class="glass rounded-lg p-3 flex items-center gap-2 contact-card stagger-4 scroll-reveal">
            <div class="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-[18px] h-[18px] text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.41-.88.03-.24.36-.49.98-.74 3.82-1.66 6.36-2.76 7.64-3.29 3.64-1.51 4.39-1.77 4.88-1.78.11 0 .36.03.52.17.14.12.18.28.2.45-.01.06-.02.19-.03.3z"/></svg></div>
            <div class="min-w-0"><div class="text-xs font-medium truncate">${t.contact.channel}</div><div class="text-[10px] truncate" style="color:var(--text-secondary)">@hello_my_super_bio</div></div>
          </a>
        </div>
        <div id="contact-form-container" class="max-w-md mx-auto mb-4 stagger-5 scroll-reveal"></div>
        <div id="guestbook-container" class="max-w-md mx-auto mb-4 stagger-6 scroll-reveal"></div>
        <div class="glass rounded-lg p-5 text-center stagger-7 scroll-reveal">
          <div class="mb-2 flex justify-center"><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg></div>
          <h3 class="text-sm sm:text-base font-semibold mb-1">${t.contact.openTitle}</h3>
          <p class="text-xs mb-3 max-w-sm mx-auto" style="color:var(--text-secondary)">${t.contact.openDesc}</p>
          <div class="flex flex-wrap justify-center gap-2">
            <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>${t.contact.sayHello}</a>
            <a href="mailto:HelloMyWorld@xyecoc.com" class="btn-glass inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>${t.contact.email}</a>
          </div>
        </div>
      </div>
    </section>`;
}
