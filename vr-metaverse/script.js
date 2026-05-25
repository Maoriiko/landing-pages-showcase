const c=document.getElementById('c');const ctx=c.getContext('2d');
c.width=window.innerWidth;c.height=window.innerHeight;
window.addEventListener('resize',()=>{c.width=window.innerWidth;c.height=window.innerHeight;});
const pts=Array.from({length:50},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}));
function draw(){ctx.clearRect(0,0,c.width,c.height);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>c.width)p.vx*=-1;if(p.y<0||p.y>c.height)p.vy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,1.5,0,Math.PI*2);ctx.fillStyle='rgba(0,255,245,.5)';ctx.fill();pts.forEach(q=>{const d=Math.hypot(p.x-q.x,p.y-q.y);if(d<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle='rgba(0,255,245,'+(0.06*(1-d/120))+')';ctx.stroke();}});});requestAnimationFrame(draw);}
draw();
// Live counter
let count=84291;
setInterval(()=>{count+=Math.floor(Math.random()*20-10);const el=document.getElementById('onlineCount');if(el)el.textContent=count.toLocaleString();},2000);