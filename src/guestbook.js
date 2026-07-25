export function initGuestbook(containerId, t) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const messages = JSON.parse(localStorage.getItem("guestbook") || "[]");
  const g = t.common || {};
  function escape(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  function render() {
    container.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <h4 class="text-sm font-semibold">${g.guestbookTitle} (${messages.length})</h4>
          <button id="gb-toggle-form" class="btn-glass px-3 py-1.5 rounded-lg text-xs font-medium">${g.guestbookSign}</button>
        </div>
        <form id="gb-form" class="hidden space-y-2">
          <input type="text" id="gb-name" placeholder="${g.guestbookName}" maxlength="30" class="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none focus:border-[var(--accent)]">
          <textarea id="gb-msg" rows="2" placeholder="${g.guestbookMsg}" maxlength="200" class="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none focus:border-[var(--accent)] resize-none"></textarea>
          <button type="submit" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-medium">${g.guestbookPost}</button>
        </form>
        <div id="gb-messages" class="space-y-2 max-h-[300px] overflow-y-auto">
          ${messages.length === 0 ? `<p class="text-xs" style="color:var(--text-tertiary)">${g.guestbookEmpty}</p>` : ""}
          ${messages.slice().reverse().map(m => `<div class="glass rounded-lg p-3"><div class="flex items-center justify-between gap-2 mb-1"><span class="text-xs font-semibold" style="color:var(--accent)">${escape(m.name || "Anonymous")}</span><span class="text-[10px]" style="color:var(--text-tertiary)">${m.date}</span></div><p class="text-xs leading-relaxed" style="color:var(--text-secondary)">${escape(m.msg)}</p></div>`).join("")}
        </div>
      </div>`;
    container.querySelector("#gb-toggle-form")?.addEventListener("click", () => container.querySelector("#gb-form")?.classList.toggle("hidden"));
    container.querySelector("#gb-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (container.querySelector("#gb-name")?.value || "").trim() || "Anonymous";
      const msg = (container.querySelector("#gb-msg")?.value || "").trim();
      if (!msg) return;
      messages.push({ name, msg, date: new Date().toLocaleDateString() });
      localStorage.setItem("guestbook", JSON.stringify(messages));
      render();
    });
  }
  render();
}
