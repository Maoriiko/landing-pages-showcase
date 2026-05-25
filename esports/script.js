const c=document.getElementById('bg');const ctx=c.getContext('2d');
c.width=window.innerWidth;c.height=window.innerHeight;
window.addEventListener('resize',()=>{c.width=window.innerWidth;c.height=window.innerHeight;});
const particles=Array.from({length:60},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+.5,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,hue:Math.random()<.5?120:270}));
function draw(){ctx.clearRect(0,0,c.width,c.height);particles.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`hsla(${p.hue},100%,60%,.5)`;ctx.fill();});requestAnimationFrame(draw);}
draw();
document.querySelectorAll('.gp').forEach(g=>{g.addEventListener('click',function(){document.querySelectorAll('.gp').forEach(x=>x.classList.remove('active'));this.classList.add('active');});});
// Countdown
let secs=9930;
setInterval(()=>{secs=Math.max(0,secs-1);const h=Math.floor(secs/3600).toString().padStart(2,'0');const m=Math.floor((secs%3600)/60).toString().padStart(2,'0');const s=(secs%60).toString().padStart(2,'0');const el=document.getElementById('countdown');if(el)el.textContent=secs>0?`LIVE IN ${h}:${m}:${s}`:'🔴 LIVE NOW';},1000);