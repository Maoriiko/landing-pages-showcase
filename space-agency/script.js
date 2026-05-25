const c=document.getElementById('stars');const ctx=c.getContext('2d');
c.width=window.innerWidth;c.height=window.innerHeight;
const stars=Array.from({length:300},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.5+.2,a:Math.random(),da:Math.random()*.02-.01}));
function draw(){ctx.clearRect(0,0,c.width,c.height);stars.forEach(s=>{s.a=Math.max(.1,Math.min(1,s.a+s.da));ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(200,216,255,${s.a})`;ctx.fill();});requestAnimationFrame(draw);}
draw();
window.addEventListener('resize',()=>{c.width=window.innerWidth;c.height=window.innerHeight;});
// Shooting stars
setInterval(()=>{const s={x:Math.random()*c.width,y:0,vx:2,vy:1.5,len:80,life:1};const iv=setInterval(()=>{s.life-=.05;ctx.beginPath();ctx.moveTo(s.x,s.y);ctx.lineTo(s.x-s.len,s.y-s.len*.75);ctx.strokeStyle=`rgba(79,195,247,${s.life*.5})`;ctx.lineWidth=1;ctx.stroke();s.x+=s.vx*3;s.y+=s.vy*3;if(s.life<=0)clearInterval(iv);},16);},4000);