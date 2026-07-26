(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();function j(){const e=document.getElementById("particles-bg");if(!e)return;const t=document.createElement("canvas");t.className="absolute inset-0 w-full h-full",e.appendChild(t);const a=t.getContext("2d");let s=[],o={x:null,y:null},r,c=0;function l(){t.width=window.innerWidth,t.height=window.innerHeight}class d{constructor(){this.reset()}reset(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=Math.random()*2+.5,this.speedX=(Math.random()-.5)*.3,this.speedY=(Math.random()-.5)*.3,this.opacity=Math.random()*.5+.1,this.hue=Math.random()*60+240}update(){if(this.x+=this.speedX,this.y+=this.speedY,(this.x<0||this.x>t.width)&&(this.speedX*=-1),(this.y<0||this.y>t.height)&&(this.speedY*=-1),o.x&&o.y){const g=o.x-this.x,p=o.y-this.y;Math.sqrt(g*g+p*p)<150&&(this.x-=g*.005,this.y-=p*.005)}}draw(){a.beginPath(),a.arc(this.x,this.y,this.size,0,Math.PI*2),a.fillStyle=`hsla(${this.hue}, 70%, 60%, ${this.opacity})`,a.fill()}}function n(m){s=[];for(let g=0;g<m;g++)s.push(new d)}function i(){for(let m=0;m<s.length;m++)for(let g=m+1;g<s.length;g++){const p=s[m].x-s[g].x,f=s[m].y-s[g].y,k=Math.sqrt(p*p+f*f);k<120&&(a.beginPath(),a.moveTo(s[m].x,s[m].y),a.lineTo(s[g].x,s[g].y),a.strokeStyle=`hsla(250, 70%, 60%, ${.08*(1-k/120)})`,a.lineWidth=.5,a.stroke())}}function u(m){m-c>16&&(a.clearRect(0,0,t.width,t.height),s.forEach(p=>{p.update(),p.draw()}),i(),c=m),r=requestAnimationFrame(u)}return window.addEventListener("resize",l),document.addEventListener("mousemove",m=>{o.x=m.clientX,o.y=m.clientY}),document.addEventListener("mouseleave",()=>{o.x=null,o.y=null}),l(),n(Math.min(Math.floor(t.width*t.height/12e3),80)),u(0),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",l),e.removeChild(t)}}function E(){const e=document.createElement("canvas");Object.assign(e.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999"}),document.body.appendChild(e);const t=e.getContext("2d");let a=[],s={x:0,y:0,prevX:0,prevY:0};function o(){e.width=window.innerWidth,e.height=window.innerHeight}class r{constructor(d,n){this.x=d,this.y=n,this.size=Math.random()*3+1,this.life=1,this.decay=.015+Math.random()*.01,this.hue=250+Math.random()*30}update(){this.life-=this.decay,this.size*=.97}draw(){t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fillStyle=`hsla(${this.hue}, 80%, 65%, ${this.life*.6})`,t.fill()}}function c(){t.clearRect(0,0,e.width,e.height),a.push(new r(s.x,s.y)),a=a.filter(i=>i.life>0),a.forEach(i=>{i.update(),i.draw()});const l=s.x-s.prevX,d=s.y-s.prevY,n=Math.sqrt(l*l+d*d);n>1&&(t.beginPath(),t.moveTo(s.prevX,s.prevY),t.lineTo(s.x,s.y),t.strokeStyle=`hsla(260, 70%, 60%, ${Math.min(n*.02,.3)})`,t.lineWidth=2,t.lineCap="round",t.stroke()),requestAnimationFrame(c)}return document.addEventListener("mousemove",l=>{s.prevX=s.x,s.prevY=s.y,s.x=l.clientX,s.y=l.clientY}),window.addEventListener("resize",o),o(),c(),()=>document.body.removeChild(e)}function I(e,t="en"){const a=document.getElementById(e);if(!a)return;const s=t==="ru"?{welcome:"Добро пожаловать в терминал wb3eqr. Введи 'help' для списка команд.",help:`Available commands:
  whoami     — Обо мне
  skills     — Технологии
  projects   — Проекты
  contact    — Контакты
  theme      — Сменить тему
  clear      — Очистить
  help       — Это сообщение`,whoami:`wb3eqr — Middle Fullstack & GameDev.
5+ лет опыта. Кодю с 10 лет.
Стек: JS/TS, Python, C#, Java, Luau.`,skills:`Языки: JS/TS, Python, C#, Java, C/C++, Luau/Lua
Фреймворки: React, Node.js, Vue, Tailwind, .NET
БД: PostgreSQL, MySQL, MongoDB, Firebase, Redis
Инструменты: Docker, Git, Linux, Nginx, CI/CD`,projects:`Избранные проекты:
  • Minecraft Сервер (50+ онлайн)
  • Discord/Telegram Боты
  • Roblox Game Scripts
  • Веб-приложения
  • CrosshairStudio (C# WPF)`,contact:`Telegram: @sell_program
Канал: @hello_my_super_bio
Email: HelloMyWorld@xyecoc.com
GitHub: github.com/wb3eqr`,unknown:"Команда не найдена. Введи 'help' для списка.",theme:"Тема переключена!"}:{welcome:"Welcome to wb3eqr terminal. Type 'help' for commands.",help:`Available commands:
  whoami     — About me
  skills     — Tech stack
  projects   — Featured projects
  contact    — How to reach me
  theme      — Toggle dark/light theme
  clear      — Clear terminal
  help       — This message`,whoami:`wb3eqr — Middle Fullstack & GameDev Developer.
5+ years exp. Code since age 10.
Tech: JS/TS, Python, C#, Java, Luau.`,skills:`Languages: JS/TS, Python, C#, Java, C/C++, Luau/Lua
Frameworks: React, Node.js, Vue, Tailwind, .NET
DB: PostgreSQL, MySQL, MongoDB, Firebase, Redis
Tools: Docker, Git, Linux, Nginx, CI/CD`,projects:`Featured projects:
  • Minecraft Server (50+ online)
  • Discord/Telegram Bots
  • Roblox Game Scripts
  • Web Applications
  • CrosshairStudio (C# WPF)`,contact:`Telegram: @sell_program
Channel: @hello_my_super_bio
Email: HelloMyWorld@xyecoc.com
GitHub: github.com/wb3eqr`,unknown:"Command not found. Type 'help' for commands.",theme:"Theme toggled!"};a.innerHTML=`
    <div class="terminal-body font-mono text-xs sm:text-sm leading-relaxed" style="color:#a1e8a1">
      <div class="terminal-line"><span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$ echo "${s.welcome}"</div>
      <div class="terminal-line">${s.help.split(`
`).map(l=>l.trim()?`  ${l}`:"").join("<br>")}</div>
      <div class="flex items-center gap-1 mt-1">
        <span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$<span class="terminal-input-wrap flex-1"><input type="text" id="terminal-input" class="w-full bg-transparent border-none outline-none text-inherit font-mono text-xs sm:text-sm" autofocus placeholder="type help..." style="caret-color:#6C63FF"></span>
      </div>
    </div>`;const o=a.querySelector("#terminal-input"),r=a.querySelector(".terminal-body");function c(l){const d=document.createElement("div");d.className="terminal-line",d.innerHTML=`<span style="color:#6C63FF">guest@wb3eqr</span>:<span style="color:#3B82F6">~</span>$ ${l}`,r.insertBefore(d,r.lastElementChild);const n=document.createElement("div");n.className="terminal-line",n.style.cssText="white-space:pre-wrap;margin-bottom:4px";const i=l.trim().toLowerCase();if(i==="help")n.innerHTML=s.help.split(`
`).map(u=>u.trim()?`  ${u}`:"").join("<br>");else if(i==="whoami")n.textContent=s.whoami;else if(i==="skills")n.textContent=s.skills;else if(i==="projects")n.textContent=s.projects;else if(i==="contact")n.textContent=s.contact;else if(i==="theme")document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach(u=>u.click()),n.textContent=s.theme;else if(i==="clear"){r.querySelectorAll(".terminal-line").forEach(u=>{u!==r.lastElementChild&&u.remove()});return}else{if(i==="")return;n.textContent=s.unknown}r.insertBefore(n,r.lastElementChild),r.scrollTop=r.scrollHeight}o.addEventListener("keydown",l=>{l.key==="Enter"&&(c(o.value),o.value="")}),setTimeout(()=>o.focus(),300),a.addEventListener("click",()=>o.focus())}function P(e){const t=document.getElementById(e);t&&(t.innerHTML=`
    <div class="flex items-center justify-center py-6">
      <div class="flex gap-6">
        <div class="text-center">
          <div class="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-2">
            <svg class="w-6 h-6" style="color:var(--accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div id="gh-repos" class="text-xl font-bold gradient-text">-</div>
          <div class="text-[10px]" style="color:var(--text-tertiary)">repos</div>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
            <svg class="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          </div>
          <div id="gh-followers" class="text-xl font-bold gradient-text">-</div>
          <div class="text-[10px]" style="color:var(--text-tertiary)">followers</div>
        </div>
        <div class="text-center">
          <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
            <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          </div>
          <div id="gh-stars" class="text-xl font-bold gradient-text">-</div>
          <div class="text-[10px]" style="color:var(--text-tertiary)">stars</div>
        </div>
      </div>
    </div>`,fetch("https://api.github.com/users/wb3eqr").then(a=>a.json()).then(a=>{document.getElementById("gh-repos").textContent=a.public_repos??"-",document.getElementById("gh-followers").textContent=a.followers??"-"}).catch(()=>{}),fetch("https://api.github.com/users/wb3eqr/repos?per_page=100").then(a=>a.json()).then(a=>{Array.isArray(a)&&(document.getElementById("gh-stars").textContent=a.reduce((s,o)=>s+(o.stargazers_count||0),0))}).catch(()=>{}))}function B(e,t){const a=document.getElementById(e);if(!a)return;const s=Math.floor((Date.now()-new Date("2020-01-01").getTime())/864e5),o=(s*150).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ");a.innerHTML=`
    <div class="text-center py-4">
      <div class="inline-flex items-center gap-3 glass rounded-xl px-5 py-3">
        <svg class="w-8 h-8" style="color:var(--accent)" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        <div class="text-left">
          <div class="text-lg font-bold gradient-text">${o}</div>
          <div class="text-[10px]" style="color:var(--text-tertiary)">${t.common.codeEst} · ${s} ${t.common.days}</div>
        </div>
      </div>
    </div>`}function A(e,t){const a=document.getElementById(e);if(!a)return;const s=JSON.parse(localStorage.getItem("guestbook")||"[]"),o=t.common||{};function r(l){const d=document.createElement("div");return d.textContent=l,d.innerHTML}function c(){var l,d;a.innerHTML=`
      <div class="space-y-4">
        <div class="flex items-center justify-between gap-2">
          <h4 class="text-sm font-semibold">${o.guestbookTitle} (${s.length})</h4>
          <button id="gb-toggle-form" class="btn-glass px-3 py-1.5 rounded-lg text-xs font-medium">${o.guestbookSign}</button>
        </div>
        <form id="gb-form" class="hidden space-y-2">
          <input type="text" id="gb-name" placeholder="${o.guestbookName}" maxlength="30" class="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none focus:border-[var(--accent)]">
          <textarea id="gb-msg" rows="2" placeholder="${o.guestbookMsg}" maxlength="200" class="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-xs outline-none focus:border-[var(--accent)] resize-none"></textarea>
          <button type="submit" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-medium">${o.guestbookPost}</button>
        </form>
        <div id="gb-messages" class="space-y-2 max-h-[300px] overflow-y-auto">
          ${s.length===0?`<p class="text-xs" style="color:var(--text-tertiary)">${o.guestbookEmpty}</p>`:""}
          ${s.slice().reverse().map(n=>`<div class="glass rounded-lg p-3"><div class="flex items-center justify-between gap-2 mb-1"><span class="text-xs font-semibold" style="color:var(--accent)">${r(n.name||"Anonymous")}</span><span class="text-[10px]" style="color:var(--text-tertiary)">${n.date}</span></div><p class="text-xs leading-relaxed" style="color:var(--text-secondary)">${r(n.msg)}</p></div>`).join("")}
        </div>
      </div>`,(l=a.querySelector("#gb-toggle-form"))==null||l.addEventListener("click",()=>{var n;return(n=a.querySelector("#gb-form"))==null?void 0:n.classList.toggle("hidden")}),(d=a.querySelector("#gb-form"))==null||d.addEventListener("submit",n=>{var m,g;n.preventDefault();const i=(((m=a.querySelector("#gb-name"))==null?void 0:m.value)||"").trim()||"Anonymous",u=(((g=a.querySelector("#gb-msg"))==null?void 0:g.value)||"").trim();u&&(s.push({name:i,msg:u,date:new Date().toLocaleDateString()}),localStorage.setItem("guestbook",JSON.stringify(s)),c())})}c()}function F(e,t){const a=document.getElementById(e);if(!a)return;a.innerHTML=`
    <form id="contact-form" class="space-y-4" action="https://formspree.io/f/xqapwqry" method="POST">
      <div class="grid sm:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="${t.contact.namePlaceholder}" required class="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-sm outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" style="caret-color:var(--accent)">
        <input type="email" name="email" placeholder="${t.contact.emailPlaceholder}" required class="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-sm outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]" style="caret-color:var(--accent)">
      </div>
      <textarea name="message" rows="4" placeholder="${t.contact.msgPlaceholder}" required class="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text)] text-sm outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)] resize-none" style="caret-color:var(--accent)"></textarea>
      <button type="submit" class="btn-primary w-full px-6 py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        ${t.contact.send}
      </button>
    </form>`;const s=a.querySelector("#contact-form");s.addEventListener("submit",async o=>{o.preventDefault();const r=s.querySelector("button[type=submit]"),c=r.innerHTML;r.innerHTML='<span class="animate-pulse">Sending...</span>',r.disabled=!0;try{await fetch(s.action,{method:"POST",body:new FormData(s),headers:{Accept:"application/json"}}),s.innerHTML=`<div class="text-center py-8"><svg class="w-12 h-12 mx-auto mb-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><p class="text-lg font-semibold">${t.contact.thanks}</p><p class="text-sm mt-2" style="color:var(--text-secondary)">${t.contact.reply}</p></div>`}catch{r.innerHTML=c,r.disabled=!1,alert("Error sending message. Try again.")}})}function H(e,t){const a=document.getElementById(e);if(!a||!(t!=null&&t.length))return;let s=0;const o=["#6C63FF","#10B981","#F43F5E","#3B82F6"];function r(){var d,n;const c=t[s];a.innerHTML=`
      <div class="glass rounded-xl overflow-hidden" style="background:linear-gradient(135deg, ${o[s%o.length]}22, ${o[(s+1)%o.length]}11)">
        <div class="flex flex-col sm:flex-row">
          <div class="flex-1 p-5 sm:p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-medium px-2 py-0.5 rounded-full" style="background:${o[s%o.length]}33;color:${o[s%o.length]}">${c.tag||"Project"}</span>
              <span class="text-xs" style="color:var(--text-tertiary)">${s+1}/${t.length}</span>
            </div>
            <h4 class="text-base font-semibold mb-1">${c.title}</h4>
            <p class="text-xs leading-relaxed mb-3" style="color:var(--text-secondary)">${c.desc}</p>
            <div class="flex flex-wrap gap-1.5">${c.tags.map(i=>`<span class="px-2 py-0.5 rounded text-[10px]" style="background:var(--border);color:var(--text-secondary)">${i}</span>`).join("")}</div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 mt-3">
        <button id="carousel-prev" class="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg></button>
        <div class="flex gap-1.5">${t.map((i,u)=>`<button class="carousel-dot w-2 h-2 rounded-full transition-all duration-300 ${u===s?"w-6":""}" style="background:${u===s?"var(--accent)":"var(--border)"}"></button>`).join("")}</div>
        <button id="carousel-next" class="btn-glass w-8 h-8 rounded-lg flex items-center justify-center"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></button>
      </div>`,(d=a.querySelector("#carousel-prev"))==null||d.addEventListener("click",()=>{s=(s-1+t.length)%t.length,r()}),(n=a.querySelector("#carousel-next"))==null||n.addEventListener("click",()=>{s=(s+1)%t.length,r()}),a.querySelectorAll(".carousel-dot").forEach((i,u)=>i.addEventListener("click",()=>{s=u,r()}));let l=setInterval(()=>{s=(s+1)%t.length,r()},4e3);a.addEventListener("mouseenter",()=>clearInterval(l)),a.addEventListener("mouseleave",()=>{l=setInterval(()=>{s=(s+1)%t.length,r()},4e3)})}r()}const D={nav:{bio:"Bio",stack:"Stack",projects:"Projects",contact:"Contact"},hero:{available:"Available for projects",title1:"Middle",title2:"Fullstack",title3:"& GameDev",desc:"5 years of crafting code. From Minecraft servers to modern web — I build experiences that people remember.",cta:"View Projects",contact:"Contact Me",techs:"10+ technologies mastered",subtitle:"Code. Build. Ship.",years:"years",coding:"coding"},bio:{about:"About",title:"The Story",desc:"From a 10-year-old kid typing HTML in Notepad to a Middle developer shipping production code. Self-taught, driven, and obsessed with building.",whoTitle:"Who I Am",whoText:"Middle Fullstack & GameDev developer with 5 years of hands-on experience. Started coding at 10, built my first Minecraft server at 12, and scaled it to 50+ concurrent players. Self-taught through forums, YouTube, and now AI-assisted development.",missionTitle:"The Mission",missionText:"To build digital experiences that push boundaries. Whether it’s optimizing a Minecraft server for hundreds of players or crafting a pixel-perfect web interface — I obsess over quality, performance, and user delight.",timeline:"Timeline",journey:"The Journey",items:[{period:"2025 — Present",title:"Middle Fullstack Developer",sub:"Self-employed / Freelance",desc:"Building full-stack web applications, game scripts, and automation tools. Working with modern stacks: Node.js, React, Python, C#. Integrating AI into development workflow for maximum efficiency."},{period:"2024 — 2025",title:"Minecraft Server Lead Developer",sub:"Project Peak: 50+ Online",desc:"Architected and maintained a Minecraft server from scratch. Wrote custom plugins in Java, configured networking and CI/CD. Grew the playerbase to 50+ concurrent players."},{period:"2022 — 2024",title:"Game Scripter (Roblox + Minecraft)",sub:"Luau, Lua, Java",desc:"Developed game mechanics, UI systems, and backend logic for Roblox and Minecraft projects. Wrote efficient Luau scripts for player interactions, inventory systems, and game loops."},{period:"2020 — 2022",title:"Started Coding",sub:"HTML → JS → Python → Everything",desc:"Began with HTML and CSS at age 10. Quickly moved to JavaScript, then Python. Built small websites, games, and automation scripts. Discovered game development and never looked back."}]},stack:{skills:"Skills",title:"Tech Stack",desc:"Every tool in my belt — from frontend pixels to backend architecture.",languages:"Languages",frameworks:"Frameworks & Libraries",databases:"Databases & Infrastructure",gameDev:"Game Development",levels:{Expert:"Expert",Advanced:"Advanced",Intermediate:"Intermediate"},langNames:["JavaScript / TypeScript","Python","C#","Java","C / C++","Luau / Lua","HTML / CSS","SQL"],fwList:["React / Next.js","Node.js / Express","Vue.js","Tailwind CSS","React Native",".NET","Bootstrap","jQuery","Electron","Socket.IO"],dbList:["PostgreSQL","MySQL","MongoDB","Firebase","Redis","Docker","Git","Linux","Nginx","CI/CD"],gdList:["Minecraft Plugins (Java)","Roblox (Luau)","Unity (C#)","Game Mechanics","Server Architecture"]},projects:{work:"Work",title:"Featured Projects",desc:"What I’ve built — each one a story of code, creativity, and late nights.",items:[{tag:"50+ Online",title:"Minecraft Server",desc:"Fully custom Minecraft server with unique gameplay mechanics, custom plugins, optimized performance, and a dedicated community.",tags:["Java","PaperMC","MySQL","Linux"]},{tag:null,title:"Discord / Telegram Bots",desc:"Multi-functional automation bots for gaming communities. Moderation, minigames, economy systems, and real-time server monitoring.",tags:["Python","Node.js","Firebase"]},{tag:null,title:"Roblox Game Scripts",desc:"Custom game mechanics and interactive systems for Roblox experiences. Player progression, inventory management, real-time multiplayer synchronization.",tags:["Luau","Roblox API"]},{tag:null,title:"Web Applications",desc:"Full-stack web apps with modern architecture. From landing pages to complex dashboards. Responsive design, optimized performance.",tags:["React","Node.js","PostgreSQL","Docker"]}],seeAll:"See all on GitHub"},contact:{connect:"Connect",title:"Let’s Build",desc:"Got a project, idea, or just want to talk code? Hit me up — I’m always open to interesting conversations.",telegram:"Telegram",github:"GitHub",channel:"Telegram Channel",openTitle:"Open for opportunities",openDesc:"Whether it’s freelance, partnership, or just geeking out about tech — my DMs are always open.",sayHello:"Say Hello",email:"Email",emailAddr:"HelloMyWorld@xyecoc.com",send:"Send Message",thanks:"Thanks for reaching out!",reply:"I'll get back to you within 24h.",namePlaceholder:"Your name",emailPlaceholder:"Your email",msgPlaceholder:"Your message..."},common:{footer:"Built with precision.",email:"Email",codeEst:"lines of code (est.)",days:"days",guestbookTitle:"Guestbook",guestbookSign:"Sign",guestbookName:"Your name",guestbookMsg:"Leave a message...",guestbookPost:"Post",guestbookEmpty:"No messages yet. Be the first!"}},q={nav:{bio:"Био",stack:"Стек",projects:"Проекты",contact:"Контакты"},hero:{available:"Открыт к проектам",title1:"Middle",title2:"Fullstack",title3:"& GameDev",desc:"5 лет пишу код. От Minecraft-серверов до современного веба — создаю впечатления, которые запоминаются.",cta:"Проекты",contact:"Связаться",techs:"10+ технологий в арсенале",subtitle:"Код. Сборка. Релиз.",years:"лет",coding:"опыта"},bio:{about:"Обо мне",title:"История",desc:"С 10 лет таскал HTML в Блокноте — теперь Middle-разработчик, который поставляет продакшн-код.",whoTitle:"Кто я",whoText:"Middle Fullstack & GameDev разработчик с 5-летним опытом. Начал в 10, собрал первый Minecraft-сервер в 12.",missionTitle:"Миссия",missionText:"Создавать цифровые впечатления, которые раздвигают границы. Оптимизация Minecraft-сервера на сотни игроков или пиксель-перфект веб-интерфейс.",timeline:"Таймлайн",journey:"Путь",items:[{period:"2025 — сейчас",title:"Middle Fullstack Developer",sub:"Селф-эмплойд / Фриланс",desc:"Строю fullstack-приложения, игровые скрипты и инструменты автоматизации. Работаю с Node.js, React, Python, C#."},{period:"2024 — 2025",title:"Ведущий разработчик Minecraft-сервера",sub:"Пик: 50+ онлайн",desc:"Спроектировал и поддерживал Minecraft-сервер с нуля: плагины на Java, CI/CD, сеть."},{period:"2022 — 2024",title:"Игровой скриптер (Roblox + Minecraft)",sub:"Luau, Lua, Java",desc:"Разрабатывал игровые механики, UI и бэкенд для Roblox и Minecraft."},{period:"2020 — 2022",title:"Начало пути",sub:"HTML → JS → Python → Всё подряд",desc:"Начал с HTML и CSS в 10 лет. Быстро перешёл на JavaScript, потом Python."}]},stack:{skills:"Навыки",title:"Технологии",desc:"Весь арсенал — от фронтенд-пикселей до бэкенд-архитектуры.",languages:"Языки",frameworks:"Фреймворки и библиотеки",databases:"Базы данных и инфраструктура",gameDev:"Геймдев",levels:{Expert:"Эксперт",Advanced:"Продвинутый",Intermediate:"Средний"},langNames:["JavaScript / TypeScript","Python","C#","Java","C / C++","Luau / Lua","HTML / CSS","SQL"],fwList:["React / Next.js","Node.js / Express","Vue.js","Tailwind CSS","React Native",".NET","Bootstrap","jQuery","Electron","Socket.IO"],dbList:["PostgreSQL","MySQL","MongoDB","Firebase","Redis","Docker","Git","Linux","Nginx","CI/CD"],gdList:["Minecraft-плагины (Java)","Roblox (Luau)","Unity (C#)","Игровые механики","Серверная архитектура"]},projects:{work:"Работы",title:"Избранные проекты",desc:"То, что я построил — каждый проект со своей историей, кодом и бессонными ночами.",items:[{tag:"50+ Онлайн",title:"Minecraft-сервер",desc:"Полностью кастомный Minecraft-сервер с уникальными механиками, плагинами, оптимизацией и комьюнити.",tags:["Java","PaperMC","MySQL","Linux"]},{tag:null,title:"Discord / Telegram боты",desc:"Многофункциональные боты для автоматизации игровых сообществ: модерация, мини-игры, экономика.",tags:["Python","Node.js","Firebase"]},{tag:null,title:"Roblox Game Scripts",desc:"Кастомные игровые механики и интерактивные системы для Roblox: прогрессия, инвентарь, мультиплеер.",tags:["Luau","Roblox API"]},{tag:null,title:"Веб-приложения",desc:"Fullstack-приложения с современной архитектурой. От лендингов до сложных дашбордов.",tags:["React","Node.js","PostgreSQL","Docker"]}],seeAll:"Все проекты на GitHub"},contact:{connect:"Связь",title:"Давайте построим",desc:"Есть проект, идея или просто желание поговорить о коде? Пиши — я всегда открыт к интересным разговорам.",telegram:"Телеграм",github:"GitHub",channel:"Telegram-канал",openTitle:"Открыт к предложениям",openDesc:"Фриланс, партнёрство или просто потусить в тематических чатах — мои личные сообщения всегда открыты.",sayHello:"Написать",email:"Почта",emailAddr:"HelloMyWorld@xyecoc.com",send:"Отправить",thanks:"Спасибо за сообщение!",reply:"Отвечу в течение 24ч.",namePlaceholder:"Ваше имя",emailPlaceholder:"Ваш email",msgPlaceholder:"Ваше сообщение..."},common:{footer:"Сделано с аккуратностью.",email:"Почта",codeEst:"строк кода (прибл.)",days:"дней",guestbookTitle:"Гостевая",guestbookSign:"Написать",guestbookName:"Ваше имя",guestbookMsg:"Оставьте сообщение...",guestbookPost:"Отправить",guestbookEmpty:"Пока нет записей. Будьте первым!"}};function N(e){return`
    <section class="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20">
        <div class="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          <div class="flex-1 space-y-6 sm:space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-[var(--text-secondary)] stagger-1" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${e.hero.available}
            </div>
            <h1 class="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] stagger-2" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              ${e.hero.title1}<br/><span class="gradient-text">${e.hero.title2}</span><br/>${e.hero.title3}
            </h1>
            <p class="text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed stagger-3" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">${e.hero.desc}</p>
            <div class="flex flex-wrap gap-3 sm:gap-4 stagger-4" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <a href="/projects" data-nav class="btn-primary inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm">${e.hero.cta}<svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
              <a href="/contact" data-nav class="btn-glass inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm">${e.hero.contact}</a>
            </div>
            <div class="flex items-center gap-4 sm:gap-8 pt-3 sm:pt-4 stagger-5" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
              <div class="flex -space-x-2">${["JS","Py","C#","Lu"].map((t,a)=>`<div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--bg)] flex items-center justify-center text-[10px] sm:text-xs font-bold" style="color:var(--text);background:${["#6C63FF","#10B981","#F59E0B","#F43F5E"][a]}33">${t}</div>`).join("")}</div>
              <span class="text-xs sm:text-sm text-[var(--text-secondary)]">${e.hero.techs}</span>
            </div>
          </div>
          <div class="flex-shrink-0 stagger-6" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0">
            <div class="relative">
              <div class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl glass-strong flex items-center justify-center overflow-hidden" style="animation:float 6s ease-in-out infinite">
                <div class="text-center px-4">
                  <div class="mb-2 sm:mb-3 flex justify-center"><svg class="w-10 h-10 sm:w-12 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                  <div class="text-xl sm:text-2xl font-bold gradient-text">wb3eqr</div>
                  <div class="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">${e.hero.subtitle}</div>
                </div>
              </div>
              <div class="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center backdrop-blur-xl">
                <div class="text-center"><div class="text-base sm:text-lg font-bold" style="color:var(--accent)">5</div><div class="text-[9px] sm:text-[10px]" style="color:var(--text-secondary);line-height:1.2">${e.hero.years}<br/>${e.hero.coding}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto px-4 sm:px-6 mt-8 mb-8">
        <div id="terminal-container" class="glass rounded-xl p-4 sm:p-5 overflow-hidden stagger-7" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0;max-height:280px;overflow-y:auto"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div id="gh-stats-container" class="stagger-8" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0"></div>
        <div id="code-counter-container" class="stagger-9" style="animation:fadeInUp 0.5s ease-out forwards;opacity:0"></div>
      </div>
    </section>`}function z(e){return`
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-4xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.bio.about}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.bio.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">
            ${e.bio.desc}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-20">
          <div class="glass rounded-2xl p-8 stagger-1 scroll-reveal">
            <div class="mb-4 flex">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2" fill="var(--accent)"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">${e.bio.whoTitle}</h3>
            <p class="text-sm leading-relaxed" style="color:var(--text-secondary)">${e.bio.whoText}</p>
          </div>
          <div class="glass rounded-2xl p-8 stagger-2 scroll-reveal">
            <div class="mb-4 flex">
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
                <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">${e.bio.missionTitle}</h3>
            <p class="text-sm leading-relaxed" style="color:var(--text-secondary)">${e.bio.missionText}</p>
          </div>
        </div>

        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.bio.timeline}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.bio.journey}</h2>
        </div>

        <div class="relative">
          <div class="absolute left-[19px] top-0 bottom-0 w-[1px]" style="background:var(--border)"></div>
          <div class="space-y-12">
            ${e.bio.items.map((t,a)=>`
              <div class="relative pl-14 stagger-${a+1} scroll-reveal">
                <div class="absolute left-[11px] top-1 w-[17px] h-[17px] rounded-full timeline-dot" style="background:var(--accent)"></div>
                <div class="text-xs font-medium mb-1" style="color:var(--accent)">${t.period}</div>
                <h3 class="text-lg font-semibold">${t.title}</h3>
                <p class="text-sm mt-1" style="color:var(--text-secondary)">${t.sub}</p>
                <p class="text-sm mt-1 leading-relaxed" style="color:var(--text-tertiary)">${t.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function _(e){const t={Expert:95,Advanced:80,Intermediate:65},a=["from-yellow-500/20 to-yellow-600/10","from-emerald-500/20 to-emerald-600/10","from-purple-500/20 to-purple-600/10","from-orange-500/20 to-orange-600/10","from-blue-500/20 to-blue-600/10","from-sky-500/20 to-sky-600/10","from-red-500/20 to-red-600/10","from-cyan-500/20 to-cyan-600/10"],s=["JS","Py","C#","Ja","C","Lu","H","SQL"];return`
    <section class="min-h-[calc(100vh-4rem)] py-20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-16">
          <span class="text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.stack.skills}</span>
          <h2 class="text-4xl sm:text-5xl font-bold mt-3 tracking-tight">${e.stack.title}</h2>
          <p class="text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${e.stack.desc}</p>
        </div>
        <div class="space-y-12">
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.languages}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              ${e.stack.langNames.map((o,r)=>`
                <div class="glass rounded-xl p-5 tech-card stagger-${r+1} scroll-reveal">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="flex-shrink-0">
                      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" opacity="0.2"/>
                        <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">${s[r]}</text>
                      </svg>
                    </span>
                    <div>
                      <div class="text-sm font-medium">${o}</div>
                      <div class="text-xs mt-0.5" style="color:var(--accent)">${e.stack.levels[["Expert","Advanced","Advanced","Upper-Intermediate","Intermediate","Advanced","Expert","Intermediate"][r]]||o}</div>
                    </div>
                  </div>
                  <div class="h-1 rounded-full overflow-hidden" style="background:var(--border)">
                    <div class="h-full rounded-full bg-gradient-to-r ${a[r]}" style="width:${t[["Expert","Advanced","Advanced","Intermediate","Intermediate","Advanced","Expert","Intermediate"][r]]||65}%"></div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.frameworks}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.fwList.map((o,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${o}</div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.databases}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.dbList.map((o,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${o}</div>
              `).join("")}
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium tracking-wider uppercase mb-6" style="color:var(--text-secondary)">${e.stack.gameDev}</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              ${e.stack.gdList.map((o,r)=>`
                <div class="glass rounded-xl px-4 py-3 text-sm text-center hover-scale stagger-${r+1} scroll-reveal" style="transition:all 0.2s ease">${o}</div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function R(e){const t=["from-[var(--accent)]/20 to-purple-600/10","from-emerald-500/20 to-cyan-600/10","from-rose-500/20 to-orange-600/10","from-sky-500/20 to-indigo-600/10"],a=['<path d="M2 8l4-4h12l4 4-10 14L2 8z"/><path d="M2 8l10 2 10-2"/><path d="M12 22V10"/>','<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/><path d="M9 7h6"/><path d="M12 7v4"/><path d="M8 11V7a4 4 0 018 0v4"/>','<rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="12" cy="14" r="1"/><path d="M8 14h8"/>','<circle cx="12" cy="12" r="10"/><ellipse cx="12" cy="12" rx="4" ry="10"/><path d="M2 12h20"/>'];return`
    <section class="min-h-[calc(100vh-4rem)] py-16 sm:py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="mb-12 sm:mb-16">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.projects.work}</span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">${e.projects.title}</h2>
          <p class="text-base sm:text-lg text-[var(--text-secondary)] mt-4 max-w-2xl">${e.projects.desc}</p>
        </div>
        <div id="carousel-container" class="mb-8 stagger-2 scroll-reveal"></div>
        <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          ${e.projects.items.map((s,o)=>`
            <div class="glass rounded-2xl overflow-hidden project-card stagger-${o+1} scroll-reveal">
              <div class="relative h-48 sm:h-56 bg-gradient-to-br ${t[o]} flex items-center justify-center overflow-hidden">
                <div class="select-none flex items-center justify-center" style="animation:float ${4+o*.5}s ease-in-out infinite ${o*.5}s"><svg class="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.35">${a[o]}</svg></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent"></div>
                ${s.tag?`<div class="absolute bottom-4 left-4"><span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-medium">${s.tag}</span></div>`:""}
              </div>
              <div class="p-4 sm:p-6">
                <h3 class="text-base sm:text-xl font-semibold mb-2">${s.title}</h3>
                <p class="text-xs sm:text-sm leading-relaxed mb-4" style="color:var(--text-secondary)">${s.desc}</p>
                <div class="flex flex-wrap gap-2">${s.tags.map(r=>`<span class="px-3 py-1 rounded-full text-[10px] sm:text-xs" style="background:var(--border);color:var(--text-secondary)">${r}</span>`).join("")}</div>
              </div>
            </div>`).join("")}
        </div>
        <div class="text-center">
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385z"/></svg>${e.projects.seeAll}</a>
        </div>
      </div>
    </section>`}function J(e){return`
    <section class="min-h-[calc(100vh-4rem)] py-16 sm:py-20 flex items-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div class="text-center mb-12 sm:mb-16">
          <span class="text-xs sm:text-sm font-medium tracking-widest uppercase" style="color:var(--accent)">${e.contact.connect}</span>
          <h2 class="section-title text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight">${e.contact.title}</h2>
          <p class="text-base sm:text-lg text-[var(--text-secondary)] mt-4 max-w-xl mx-auto">${e.contact.desc}</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <a href="mailto:HelloMyWorld@xyecoc.com" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-1 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
            <div><div class="text-sm font-medium">${e.contact.email}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">HelloMyWorld@xyecoc.com</div></div>
          </a>
          <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-2 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14z"/></svg></div>
            <div><div class="text-sm font-medium">${e.contact.telegram}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">@sell_program</div></div>
          </a>
          <a href="https://github.com/wb3eqr" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-3 scroll-reveal">
            <div class="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style="color:var(--text-secondary)"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div>
            <div><div class="text-sm font-medium">${e.contact.github}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">/wb3eqr</div></div>
          </a>
          <a href="https://t.me/hello_my_super_bio" target="_blank" rel="noopener" class="glass rounded-xl p-6 flex items-center gap-4 contact-card stagger-4 scroll-reveal sm:col-span-2 lg:col-span-1">
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0"><svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0z"/></svg></div>
            <div><div class="text-sm font-medium">${e.contact.channel}</div><div class="text-xs mt-0.5" style="color:var(--text-secondary)">@hello_my_super_bio</div></div>
          </a>
        </div>
        <div id="contact-form-container" class="max-w-lg mx-auto mb-10 stagger-5 scroll-reveal"></div>
        <div id="guestbook-container" class="max-w-lg mx-auto mb-10 stagger-6 scroll-reveal"></div>
        <div class="glass rounded-2xl p-8 text-center stagger-7 scroll-reveal">
          <div class="mb-4 flex justify-center"><svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg></div>
          <h3 class="text-xl font-semibold mb-2">${e.contact.openTitle}</h3>
          <p class="text-sm mb-6 max-w-md mx-auto" style="color:var(--text-secondary)">${e.contact.openDesc}</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="https://t.me/sell_program" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>${e.contact.sayHello}</a>
            <a href="mailto:HelloMyWorld@xyecoc.com" class="btn-glass inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>${e.contact.email}</a>
          </div>
        </div>
      </div>
    </section>`}const y={"/":N,"/bio":z,"/stack":_,"/projects":R,"/contact":J};let v="",h=localStorage.getItem("lang")||"en",b=localStorage.getItem("theme")||"dark";function L(){return window.location.hash.replace(/^#/,"")||"/"}function x(){return h==="ru"?q:D}function S(e){document.documentElement.setAttribute("data-theme",e),b=e,localStorage.setItem("theme",e);const t=e==="dark"?"{":"}";document.querySelectorAll("#theme-icon, #theme-icon-mobile").forEach(a=>{a.textContent=t,a.className=e==="dark"?"theme-icon text-lg":"theme-icon light text-lg"})}function C(e){h=e,localStorage.setItem("lang",e),document.querySelectorAll("[data-lang-btn]").forEach(a=>{a.classList.toggle("active",a.dataset.langBtn===e)}),w(v,!1);const t=document.getElementById("footer-text");if(t){const a=x();t.textContent=a.common.footer}}function G(e){return(y[e]||y["/"])(x())}function W(e){e.startsWith("/")||(e="/"+e),e!==v&&(location.hash="#"+e)}async function w(e,t){const a=document.getElementById("page-content");if(!a)return;t&&(a.style.opacity="0",a.style.transform="translateY(12px) scale(0.98)",a.style.transition="opacity 0.2s ease, transform 0.2s ease",await new Promise(o=>setTimeout(o,200))),a.innerHTML=G(e),v=e,t&&requestAnimationFrame(()=>{a.style.transition="opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",a.style.opacity="1",a.style.transform="translateY(0) scale(1)"}),e==="/"&&(setTimeout(()=>I("terminal-container",h),300),setTimeout(()=>P("gh-stats-container"),500),setTimeout(()=>B("code-counter-container",x()),600)),e==="/contact"&&(setTimeout(()=>F("contact-form-container",x()),200),setTimeout(()=>A("guestbook-container",x()),300)),e==="/projects"&&setTimeout(()=>{var r;const o=x();(r=o.projects)!=null&&r.items&&H("carousel-container",o.projects.items)},200),T();const s=document.getElementById("mobile-menu");s&&s.classList.add("hidden"),window.scrollTo({top:0,behavior:"smooth"}),setTimeout(Q,100)}function T(){document.querySelectorAll("[data-nav]").forEach(e=>{const t=e.getAttribute("href").replace(/^#/,"");e.classList.toggle("active",t===v)})}function M(e){const t=e.currentTarget.getAttribute("href").replace(/^#/,"");t&&y[t]&&(e.preventDefault(),W(t))}function O(){document.querySelectorAll("[data-nav]").forEach(e=>{e.removeEventListener("click",M),e.addEventListener("click",M)}),T()}function Q(){const e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting&&(a.target.classList.add("revealed"),e.unobserve(a.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".scroll-reveal").forEach(t=>e.observe(t))}function Y(){const e=document.getElementById("menu-btn"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>t.classList.toggle("hidden"))}function U(){document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach(e=>{e.addEventListener("click",()=>S(b==="dark"?"light":"dark"))})}function V(){document.querySelectorAll("[data-lang-btn]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.langBtn;t&&t!==h&&C(t)})})}function $(){S(b),C(h),j(),E(),Y(),U(),V();const e=sessionStorage.getItem("spa:path");if(e){sessionStorage.removeItem("spa:path"),location.hash="#"+e;return}v=L(),w(v,!1),O(),window.addEventListener("hashchange",X)}function X(){const e=L();e!==v&&w(e,!0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$):$();
