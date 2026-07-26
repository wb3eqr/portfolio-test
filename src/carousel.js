export function renderCarousel(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container || !items?.length) return;
  let current = 0;
  const colors = ["#6C63FF", "#10B981", "#F43F5E", "#3B82F6"];
  function render() {
    const item = items[current];
    container.innerHTML = `
      <div class="glass rounded-xl overflow-hidden fade-enter" style="background:linear-gradient(135deg, ${colors[current % colors.length]}22, ${colors[(current + 1) % colors.length]}11)">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-6 sm:p-8">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-medium px-3 py-1 rounded-full" style="background:${colors[current % colors.length]}33;color:${colors[current % colors.length]}">${item.tag || "Project"}</span>
              <span class="text-sm" style="color:var(--text-tertiary)">${current + 1}/${items.length}</span>
            </div>
            <h4 class="text-lg sm:text-xl font-semibold mb-2">${item.title}</h4>
            <p class="text-sm sm:text-base leading-relaxed mb-4" style="color:var(--text-secondary)">${item.desc}</p>
            <div class="flex flex-wrap gap-2">${item.tags.map(t => `<span class="px-3 py-1 rounded text-xs sm:text-sm" style="background:var(--border);color:var(--text-secondary)">${t}</span>`).join("")}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-4 mt-4">
        <button id="carousel-prev" class="btn-glass w-10 h-10 rounded-xl flex items-center justify-center hover-scale"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></button>
        <div class="flex gap-2">${items.map((_, i) => `<button class="carousel-dot w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-7" : ""}" style="background:${i === current ? "var(--accent)" : "var(--border)"}"></button>`).join("")}</div>
        <button id="carousel-next" class="btn-glass w-10 h-10 rounded-xl flex items-center justify-center hover-scale"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>
      </div>`;
    container.querySelector("#carousel-prev")?.addEventListener("click", () => { current = (current - 1 + items.length) % items.length; render(); });
    container.querySelector("#carousel-next")?.addEventListener("click", () => { current = (current + 1) % items.length; render(); });
    container.querySelectorAll(".carousel-dot").forEach((dot, i) => dot.addEventListener("click", () => { current = i; render(); }));
    let auto = setInterval(() => { current = (current + 1) % items.length; render(); }, 4000);
    container.addEventListener("mouseenter", () => clearInterval(auto));
    container.addEventListener("mouseleave", () => { auto = setInterval(() => { current = (current + 1) % items.length; render(); }, 4000); });
  }
  render();
}
