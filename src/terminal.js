export function initTerminal(containerId, lang = "en") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const t = lang === "ru" ? {
    welcome: "Добро пожаловать в терминал wb3eqr. Введи 'help' для списка команд.",
    help: `Available commands:\n  whoami     — Обо мне\n  skills     — Технологии\n  projects   — Проекты\n  contact    — Контакты\n  theme      — Сменить тему\n  clear      — Очистить\n  help       — Это сообщение`,
    whoami: "wb3eqr — Middle Fullstack & GameDev.\n5+ лет опыта. Кодю с 10 лет.\nСтек: JS/TS, Python, C#, Java, Luau.",
    skills: "Языки: JS/TS, Python, C#, Java, C/C++, Luau/Lua\nФреймворки: React, Node.js, Vue, Tailwind, .NET\nБД: PostgreSQL, MySQL, MongoDB, Firebase, Redis\nИнструменты: Docker, Git, Linux, Nginx, CI/CD",
    projects: "Избранные проекты:\n  • Minecraft Сервер (50+ онлайн)\n  • Discord/Telegram Боты\n  • Roblox Game Scripts\n  • Веб-приложения\n  • CrosshairStudio (C# WPF)",
    contact: "Telegram: @sell_program\nКанал: @hello_my_super_bio\nEmail: HelloMyWorld@xyecoc.com\nGitHub: github.com/wb3eqr",
    unknown: "Команда не найдена. Введи 'help' для списка.",
    theme: "Тема переключена!", cleared: "",
  } : {
    welcome: "Welcome to wb3eqr terminal. Type 'help' for commands.",
    help: `Available commands:\n  whoami     — About me\n  skills     — Tech stack\n  projects   — Featured projects\n  contact    — How to reach me\n  theme      — Toggle dark/light theme\n  clear      — Clear terminal\n  help       — This message`,
    whoami: "wb3eqr — Middle Fullstack & GameDev Developer.\n5+ years exp. Code since age 10.\nTech: JS/TS, Python, C#, Java, Luau.",
    skills: "Languages: JS/TS, Python, C#, Java, C/C++, Luau/Lua\nFrameworks: React, Node.js, Vue, Tailwind, .NET\nDB: PostgreSQL, MySQL, MongoDB, Firebase, Redis\nTools: Docker, Git, Linux, Nginx, CI/CD",
    projects: "Featured projects:\n  • Minecraft Server (50+ online)\n  • Discord/Telegram Bots\n  • Roblox Game Scripts\n  • Web Applications\n  • CrosshairStudio (C# WPF)",
    contact: "Telegram: @sell_program\nChannel: @hello_my_super_bio\nEmail: HelloMyWorld@xyecoc.com\nGitHub: github.com/wb3eqr",
    unknown: "Command not found. Type 'help' for commands.",
    theme: "Theme toggled!", cleared: "",
  };

  container.innerHTML = `
    <div class="terminal-body font-mono text-xs sm:text-sm leading-relaxed" style="color:#a1e8a1">
      <div class="terminal-line"><span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$ echo "${t.welcome}"</div>
      <div class="terminal-line">${t.help.split('\n').map(l => l.trim() ? `  ${l}` : '').join('<br>')}</div>
      <div class="flex items-center gap-1 mt-1">
        <span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$<span class="terminal-input-wrap flex-1"><input type="text" id="terminal-input" class="w-full bg-transparent border-none outline-none text-inherit font-mono text-xs sm:text-sm" autofocus placeholder="type help..." style="caret-color:#6C63FF"></span>
      </div>
    </div>`;

  const input = container.querySelector("#terminal-input");
  const body = container.querySelector(".terminal-body");

  function handleCommand(cmd) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.innerHTML = `<span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$ ${cmd}`;
    body.insertBefore(line, body.lastElementChild);
    const res = document.createElement("div");
    res.className = "terminal-line";
    res.style.cssText = "white-space:pre-wrap;margin-bottom:4px";
    const c = cmd.trim().toLowerCase();
    if (c === "help") res.innerHTML = t.help.split('\n').map(l => l.trim() ? `  ${l}` : '').join('<br>');
    else if (c === "whoami") res.textContent = t.whoami;
    else if (c === "skills") res.textContent = t.skills;
    else if (c === "projects") res.textContent = t.projects;
    else if (c === "contact") res.textContent = t.contact;
    else if (c === "theme") { document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach(b => b.click()); res.textContent = t.theme; }
    else if (c === "clear") { body.querySelectorAll(".terminal-line").forEach(el => { if (el !== body.lastElementChild) el.remove(); }); return; }
    else if (c === "") return;
    else res.textContent = t.unknown;
    body.insertBefore(res, body.lastElementChild);
    body.scrollTop = body.scrollHeight;
  }

  input.addEventListener("keydown", e => { if (e.key === "Enter") { handleCommand(input.value); input.value = ""; } });
  setTimeout(() => input.focus(), 300);
  container.addEventListener("click", () => input.focus());
}
