export function initCursor() {
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", zIndex: "9999" });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let stars = [];
  let orbiting = [];
  let mouse = { x: 0, y: 0, prevX: 0, prevY: 0 };
  let frameCount = 0;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  class Star {
    constructor(x, y) {
      this.x = x; this.y = y;
      this.size = Math.random() * 3 + 1.5;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.12;
      this.alpha = 0.9;
      this.decay = 0.006 + Math.random() * 0.01;
      this.vy = -(Math.random() * 0.6 + 0.2);
      this.vx = (Math.random() - 0.5) * 0.6;
      this.gravity = 0.004;
      const palettes = [
        { h: 250 + Math.random() * 30, s: 70, l: 60 },
        { h: 45 + Math.random() * 15, s: 85, l: 65 },
        { h: 200 + Math.random() * 20, s: 60, l: 70 },
        { h: 330 + Math.random() * 30, s: 60, l: 65 },
      ];
      const p = palettes[Math.floor(Math.random() * palettes.length)];
      this.hue = p.h; this.sat = p.s; this.light = p.l;
      this.points = 4 + Math.floor(Math.random() * 2);
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.vy += this.gravity;
      this.rotation += this.rotSpeed; this.alpha -= this.decay;
      this.size *= 0.998;
    }
    draw() {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = Math.max(0, this.alpha);
      const outer = this.size, inner = this.size * 0.35, spikes = this.points;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const a = (Math.PI / spikes) * i - Math.PI / 2;
        i === 0 ? ctx.moveTo(r * Math.cos(a), r * Math.sin(a)) : ctx.lineTo(r * Math.cos(a), r * Math.sin(a));
      }
      ctx.closePath();
      ctx.fillStyle = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, ${this.alpha})`;
      ctx.shadowColor = `hsla(${this.hue}, ${this.sat}%, ${this.light}%, ${this.alpha * 0.6})`;
      ctx.shadowBlur = this.size * 4;
      ctx.fill();
      ctx.restore();
    }
  }

  class Orbiter {
    constructor() {
      this.angle = Math.random() * Math.PI * 2;
      this.radius = 8 + Math.random() * 12;
      this.speed = 0.02 + Math.random() * 0.03;
      this.size = 1.5 + Math.random() * 1.5;
      this.phase = Math.random() * Math.PI * 2;
      this.hue = 250 + Math.random() * 30;
    }
    update() {
      this.angle += this.speed;
    }
    draw(mx, my) {
      const x = mx + Math.cos(this.angle) * this.radius;
      const y = my + Math.sin(this.angle) * this.radius;
      const a = 0.4 + Math.sin(this.angle * 2 + this.phase) * 0.25;
      const s = this.size * (0.8 + Math.sin(this.angle * 2 + this.phase) * 0.2);
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = a;
      const outer = s, inner = s * 0.35, spikes = 4;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const ang = (Math.PI / spikes) * i - Math.PI / 2;
        i === 0 ? ctx.moveTo(r * Math.cos(ang), r * Math.sin(ang)) : ctx.lineTo(r * Math.cos(ang), r * Math.sin(ang));
      }
      ctx.closePath();
      ctx.fillStyle = `hsla(${this.hue}, 70%, 65%, ${a})`;
      ctx.shadowColor = `hsla(${this.hue}, 70%, 65%, ${a * 0.5})`;
      ctx.shadowBlur = s * 3;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 5; i++) orbiting.push(new Orbiter());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const dx = mouse.x - mouse.prevX, dy = mouse.y - mouse.prevY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 1) {
      const count = Math.min(Math.floor(dist * 0.15) + 1, 5);
      for (let i = 0; i < count; i++) {
        stars.push(new Star(
          mouse.x + (Math.random() - 0.5) * 8,
          mouse.y + (Math.random() - 0.5) * 8
        ));
      }
    }

    frameCount++;
    if (frameCount % 8 === 0 && dist < 3) {
      stars.push(new Star(
        mouse.x + (Math.random() - 0.5) * 14,
        mouse.y + (Math.random() - 0.5) * 14
      ));
    }

    stars = stars.filter(s => s.alpha > 0);
    stars.forEach(s => { s.update(); s.draw(); });
    if (stars.length > 150) stars = stars.slice(-150);

    orbiting.forEach(o => { o.update(); o.draw(mouse.x, mouse.y); });

    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", e => {
    mouse.prevX = mouse.x; mouse.prevY = mouse.y;
    mouse.x = e.clientX; mouse.y = e.clientY;
  });

  window.addEventListener("resize", resize);
  resize();
  animate();

  return () => document.body.removeChild(canvas);
}
