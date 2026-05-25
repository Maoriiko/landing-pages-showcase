// Dot grid canvas
const canvas = document.getElementById('grid');
const ctx = canvas.getContext('2d');
let W, H, mouse = {x:0,y:0};
function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
resize(); window.addEventListener('resize',resize);
window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
const SPACING=40;
function draw(){
  ctx.clearRect(0,0,W,H);
  for(let x=0;x<W;x+=SPACING){
    for(let y=0;y<H;y+=SPACING){
      const dx=mouse.x-x,dy=mouse.y-y,dist=Math.sqrt(dx*dx+dy*dy);
      const r=Math.max(0,1-(dist/200))*2.5+0.5;
      const alpha=Math.max(0.08,Math.min(0.5,0.1+(200-Math.min(dist,200))/200*0.4));
      ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);
      ctx.fillStyle=`rgba(99,102,241,${alpha})`;ctx.fill();
    }
  }
  requestAnimationFrame(draw);
}
draw();
// Counter animation
function animateCount(el){
  const target=+el.dataset.target;let current=0;
  const step=target/80;
  const t=setInterval(()=>{
    current=Math.min(current+step,target);
    el.textContent=Math.floor(current).toLocaleString();
    if(current>=target)clearInterval(t);
  },16);
}
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.num').forEach(animateCount);obs.disconnect();}});
});
obs.observe(document.querySelector('.stats'));
