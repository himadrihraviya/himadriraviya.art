(() => {
  const c = document.getElementById('bg');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h, t = 0;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  function resize(){
    w = c.width = innerWidth * DPR;
    h = c.height = innerHeight * DPR;
    c.style.width = innerWidth + 'px';
    c.style.height = innerHeight + 'px';
  }
  resize(); addEventListener('resize', resize);
  const blobs = new Array(5).fill(0).map((_,i) => ({
    r: 120 + i*12, x: Math.random()*w, y: Math.random()*h, a: Math.random()*Math.PI*2, s: .0006 + Math.random()*.0012
  }));
  function draw(){
    t += 1;
    ctx.clearRect(0,0,w,h);
    const g = ctx.createLinearGradient(0,0,w,h);
    g.addColorStop(0, '#0a0b10');
    g.addColorStop(1, '#12131a');
    ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach((b,i) => {
      const x = b.x + Math.cos(b.a + t*b.s)*80;
      const y = b.y + Math.sin(b.a*1.2 + t*b.s)*80;
      const r = b.r + Math.sin((t*b.s)*2+i)*10;
      const rad = ctx.createRadialGradient(x,y,0,x,y,r);
      rad.addColorStop(0, 'rgba(100,140,255,.15)');
      rad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = rad;
      ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(draw);
  }
  draw();
})();