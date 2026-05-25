const canvas=document.getElementById('visualizer');const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=200;
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;});
let bars=Array.from({length:80},()=>({h:Math.random()*80+20,target:Math.random()*80+20,speed:Math.random()*.05+.02}));
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);const bw=canvas.width/bars.length;bars.forEach((b,i)=>{b.h+=(b.target-b.h)*b.speed;if(Math.abs(b.h-b.target)<1){b.target=Math.random()*80+20;}ctx.fillStyle='rgba(255,58,92,'+(b.h/100*.4)+')';ctx.fillRect(i*bw,canvas.height-b.h,bw-2,b.h);});requestAnimationFrame(draw);}
draw();
// Mini bars for tracks
document.querySelectorAll('.bars-mini').forEach((el,ti)=>{const bs=Array.from({length:5},()=>{const b=document.createElement('div');b.style.cssText='flex:1;border-radius:2px 2px 0 0;background:#ff3a5c;transition:height .1s;height:4px';el.appendChild(b);return b;});let active=false;function animBars(){if(active){bs.forEach(b=>{b.style.height=Math.random()*16+4+'px';});}}el.closest('.track').addEventListener('click',()=>{active=!el.closest('.track').classList.contains('active');if(active)setInterval(animBars,150);});});
function playTrack(el){document.querySelectorAll('.track').forEach(t=>t.classList.remove('active'));el.classList.add('active');}