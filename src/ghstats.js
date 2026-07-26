export function initGitHubStats(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="flex items-center justify-center py-3">
      <div class="flex gap-4 sm:gap-6">
        <div class="text-center">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-1">
            <svg class="w-4 h-4 sm:w-5 sm:h-5" style="color:var(--accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div id="gh-repos" class="text-base sm:text-lg font-bold gradient-text">-</div>
          <div class="text-[9px] sm:text-[10px]" style="color:var(--text-tertiary)">repos</div>
        </div>
        <div class="text-center">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-1">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div id="gh-followers" class="text-base sm:text-lg font-bold gradient-text">-</div>
          <div class="text-[9px] sm:text-[10px]" style="color:var(--text-tertiary)">followers</div>
        </div>
        <div class="text-center">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-1">
            <svg class="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div id="gh-stars" class="text-base sm:text-lg font-bold gradient-text">-</div>
          <div class="text-[9px] sm:text-[10px]" style="color:var(--text-tertiary)">stars</div>
        </div>
      </div>
    </div>`;

  fetch("https://api.github.com/users/wb3eqr").then(r => r.json()).then(d => { document.getElementById("gh-repos").textContent = d.public_repos ?? "-"; document.getElementById("gh-followers").textContent = d.followers ?? "-"; }).catch(() => {});
  fetch("https://api.github.com/users/wb3eqr/repos?per_page=100").then(r => r.json()).then(d => { if (Array.isArray(d)) document.getElementById("gh-stars").textContent = d.reduce((s, r) => s + (r.stargazers_count || 0), 0); }).catch(() => {});
}
