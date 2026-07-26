export function initContactForm(containerId, t) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <form id="contact-form" class="space-y-3" action="https://formspree.io/f/xqapwqry" method="POST">
      <div class="grid sm:grid-cols-2 gap-3">
        <input type="text" name="name" placeholder="${t.contact.namePlaceholder}" required class="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" style="caret-color:var(--accent)">
        <input type="email" name="email" placeholder="${t.contact.emailPlaceholder}" required class="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" style="caret-color:var(--accent)">
      </div>
      <textarea name="message" rows="3" placeholder="${t.contact.msgPlaceholder}" required class="w-full px-3 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] resize-none" style="caret-color:var(--accent)"></textarea>
      <button type="submit" class="btn-primary w-full px-4 py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        ${t.contact.send}
      </button>
    </form>`;

  const form = container.querySelector("#contact-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const orig = btn.innerHTML;
    btn.innerHTML = '<span class="animate-pulse">Sending...</span>'; btn.disabled = true;
    try {
      await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      form.innerHTML = `<div class="text-center py-8"><svg class="w-12 h-12 mx-auto mb-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><p class="text-lg font-semibold">${t.contact.thanks}</p><p class="text-sm mt-2" style="color:var(--text-secondary)">${t.contact.reply}</p></div>`;
    } catch { btn.innerHTML = orig; btn.disabled = false; alert("Error sending message. Try again."); }
  });
}
