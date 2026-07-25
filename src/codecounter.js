export function initCodeCounter(containerId, tr) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const days = Math.floor((Date.now() - new Date("2020-01-01").getTime()) / 86400000);
  const est = (days * 150).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  container.innerHTML = `
    <div class="text-center py-4">
      <div class="inline-flex items-center gap-3 glass rounded-xl px-5 py-3">
        <svg class="w-8 h-8" style="color:var(--accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        <div class="text-left">
          <div class="text-lg font-bold gradient-text">${est}</div>
          <div class="text-[10px]" style="color:var(--text-tertiary)">${tr.common.codeEst} · ${days} ${tr.common.days}</div>
        </div>
      </div>
    </div>`;
}
