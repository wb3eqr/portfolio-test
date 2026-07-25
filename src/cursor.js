export function initCursor() {
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, { position: "fixed", top: "0", left: "0", width: "100%", height: "100%", pointerEvents: "none", zIndex: "9999" });
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let trails = []; let mouse = { x: 0, y: 0, prevX: 0, prevY: 0 };
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  class Trail {
    constructor(x, y) { this.x = x; this.y = y; this.size = Math.random() * 3 + 1; this.life = 1; this.decay = 0.015 + Math.random() * 0.01; this.hue = 250 + Math.random() * 30; }
    update() { this.life -= this.decay; this.size *= 0.97; }
    draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.life * 0.6})`; ctx.fill(); }
  }
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trails.push(new Trail(mouse.x, mouse.y));
    trails = trails.filter(t => t.life > 0);
    trails.forEach(t => { t.update(); t.draw(); });
    const dx = mouse.x - mouse.prevX, dy = mouse.y - mouse.prevY, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > 1) { ctx.beginPath(); ctx.moveTo(mouse.prevX, mouse.prevY); ctx.lineTo(mouse.x, mouse.y); ctx.strokeStyle = `hsla(260, 70%, 60%, ${Math.min(dist * 0.02, 0.3)})`; ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.stroke(); }
    requestAnimationFrame(animate);
  }
  document.addEventListener("mousemove", e => { mouse.prevX = mouse.x; mouse.prevY = mouse.y; mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("resize", resize);
  resize(); animate();
  return () => document.body.removeChild(canvas);
}
