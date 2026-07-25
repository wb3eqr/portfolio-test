export function renderCarousel(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container || !items?.length) return;
  let current = 0;
  const colors = ["#6C63FF", "#10B981", "#F43F5E", "#3B82F6"];
  function render() {
    const item = items[current];
    container.innerHTML = `
      <div class="glass rounded-xl overflow-hidden" style="background:linear-gradient(135deg, ${colors[current % colors.length]}22, ${colors[(current + 1) % colors.length]}11)">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-5 sm:p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-medium px-2 py-0.5 rounded-full" style="background:${colors[current % colors.length]}33;color:${colors[current % colors.length]}">${item.tag || "Project"}</span>
              <span class="text-xs" style="color:var(--text-tertiary)">${current + 1}/${items.length}</span>
            </div>
            <h4 class="text-base font-semibold mb-1">${item.title}</h4>
            <p class="text-xs leading-relaxed mb-3" style="color:var(--text-secondary)">${item.desc}</p>
            <div class="flex flex-wrap gap-1.5">${item.tags.map(t => `<span class="px-2 py-0.5 rounded text-[10px]" style="background:var(--border);color:var(--text-secondary)">${t}</span>`).join("")}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 mt-3">
        <button id="carousel-prev" class="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></button>
        <div class="flex gap-1.5">${items.map((_, i) => `<button class="carousel-dot w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "w-6" : ""}" style="background:${i === current ? "var(--accent)" : "var(--border)"}"></button>`).join("")}</div>
        <button id="carousel-next" class="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>
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
