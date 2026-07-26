export function initCursor() {
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, {
    position: "fixed", top: "0", left: "0",
    width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "9999",
    cursor: "none",
  });
  document.body.appendChild(canvas);
  document.body.style.cursor = "none";
  const ctx = canvas.getContext("2d");

  let particles = [];
  let ripples = [];
  let mouse = { x: -200, y: -200, px: -200, py: -200 };
  let trail = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  const SHAPES = ["diamond", "triangle", "dot", "hex"];
  const PALETTE = [
    { h: 250, s: 75, l: 65 },
    { h: 190, s: 80, l: 65 },
    { h: 42,  s: 85, l: 62 },
    { h: 270, s: 70, l: 60 },
  ];

  function pickColor() { return PALETTE[Math.floor(Math.random() * PALETTE.length)]; }

  class Particle {
    constructor(x, y, vx, vy) {
      this.x = x; this.y = y;
      this.vx = vx + (Math.random() - 0.5) * 0.3;
      this.vy = vy + (Math.random() - 0.5) * 0.3 - Math.random() * 0.4;
      this.size = 1.5 + Math.random() * 2.5;
      this.life = 1;
      this.decay = 0.008 + Math.random() * 0.012;
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.08;
      this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      this.gravity = 0.003 + Math.random() * 0.003;
      const c = pickColor();
      this.h = c.h; this.s = c.s; this.l = c.l;
      this.born = performance.now();
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      this.vy += this.gravity;
      this.vx *= 0.98;
      this.rot += this.rotSpeed;
      this.life -= this.decay;
    }
    draw() {
      if (this.life <= 0) return;
      const a = Math.max(0, this.life);
      const s = this.size * this.life;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = a;
      ctx.fillStyle = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${a})`;
      ctx.shadowColor = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${a * 0.5})`;
      ctx.shadowBlur = s * 3;

      if (this.shape === "diamond") {
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.lineTo(s, 0); ctx.lineTo(0, s); ctx.lineTo(-s, 0);
        ctx.closePath(); ctx.fill();
      } else if (this.shape === "triangle") {
        ctx.beginPath();
        ctx.moveTo(0, -s); ctx.lineTo(-s * 0.8, s * 0.6); ctx.lineTo(s * 0.8, s * 0.6);
        ctx.closePath(); ctx.fill();
      } else if (this.shape === "hex") {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i;
          const px = s * 0.7 * Math.cos(a), py = s * 0.7 * Math.sin(a);
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath(); ctx.fill();
      } else {
        ctx.beginPath(); ctx.arc(0, 0, s * 0.5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
  }

  class Ripple {
    constructor(x, y) {
      this.x = x; this.y = y;
      this.radius = 0;
      this.maxRadius = 40 + Math.random() * 30;
      this.life = 1;
      this.decay = 0.025;
    }
    update() {
      this.radius += 2;
      this.life -= this.decay;
    }
    draw() {
      if (this.life <= 0) return;
      const a = Math.max(0, this.life);
      ctx.save();
      ctx.globalAlpha = a * 0.5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(250, 75%, 65%, ${a * 0.6})`;
      ctx.lineWidth = 1.5 - a * 0.8;
      ctx.shadowColor = `hsla(250, 75%, 65%, ${a * 0.3})`;
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawCursor(x, y) {
    ctx.save();
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "rgba(108, 99, 255, 0.8)";
    ctx.shadowBlur = 12;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.strokeStyle = "hsla(250, 75%, 65%, 0.3)";
    ctx.lineWidth = 1;
    ctx.shadowBlur = 0;
    ctx.stroke();
    ctx.restore();
  }

  let animId;

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dx = mouse.x - mouse.px;
    const dy = mouse.y - mouse.py;
    const speed = Math.sqrt(dx * dx + dy * dy);

    trail.push({ x: mouse.x, y: mouse.y, life: 1 });
    if (trail.length > 25) trail.shift();
    trail.forEach(p => p.life -= 0.04);
    trail = trail.filter(p => p.life > 0);

    if (trail.length > 1) {
      for (let i = 0; i < trail.length - 1; i++) {
        const a = trail[i], b = trail[i + 1];
        const alpha = a.life * 0.25;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `hsla(250, 70%, 60%, ${alpha})`;
        ctx.lineWidth = a.life * 0.8;
        ctx.shadowColor = `hsla(250, 70%, 60%, ${alpha * 0.3})`;
        ctx.shadowBlur = 4;
        ctx.stroke();
        ctx.restore();
      }
    }

    if (speed > 2) {
      const count = Math.min(Math.floor(speed * 0.12) + 1, 4);
      for (let i = 0; i < count; i++) {
        const spread = 4 + Math.random() * 6;
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.2;
        const force = 0.5 + Math.random() * 0.8;
        particles.push(new Particle(
          mouse.x + (Math.random() - 0.5) * spread,
          mouse.y + (Math.random() - 0.5) * spread,
          -Math.cos(angle) * force,
          -Math.sin(angle) * force,
        ));
      }
    }

    if (particles.length > 1) {
      for (let i = 0; i < Math.min(particles.length, 30); i++) {
        for (let j = i + 1; j < Math.min(particles.length, 30); j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 60) {
            const alpha = Math.max(0, Math.min(a.life, b.life)) * 0.15 * (1 - d / 60);
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(250, 70%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    ripples.forEach(r => { r.update(); r.draw(); });
    ripples = ripples.filter(r => r.life > 0);

    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => { p.update(); p.draw(); });
    if (particles.length > 120) particles = particles.slice(-120);

    drawCursor(mouse.x, mouse.y);

    animId = requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", e => {
    mouse.px = mouse.x; mouse.py = mouse.y;
    mouse.x = e.clientX; mouse.y = e.clientY;
  });

  document.addEventListener("mousedown", () => {
    ripples.push(new Ripple(mouse.x, mouse.y));
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 / 6) * i;
      const force = 1.2 + Math.random() * 0.8;
      particles.push(new Particle(mouse.x, mouse.y, Math.cos(angle) * force, Math.sin(angle) * force));
    }
  });

  document.addEventListener("mouseleave", () => { mouse.x = -200; mouse.y = -200; });
  document.addEventListener("mouseenter", e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  window.addEventListener("resize", resize);
  resize();
  animate();

  return () => {
    cancelAnimationFrame(animId);
    document.body.style.cursor = "";
    document.body.removeChild(canvas);
  };
}
