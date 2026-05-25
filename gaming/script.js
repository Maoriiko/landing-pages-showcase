// Matrix rain
const canvas=document.getElementById('matrixCanvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
const chars='01アイウエオカキクケコNEXUSPROTOCOL';
const cols=Math.floor(canvas.width/18);
const drops=Array(cols).fill(1);
function drawMatrix(){
  ctx.fillStyle='rgba(2,4,8,0.05)';ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#00fff5';ctx.font='14px Share Tech Mono';
  drops.forEach((y,i)=>{
    const char=chars[Math.floor(Math.random()*chars.length)];
    ctx.fillStyle=`rgba(0,255,245,${Math.random()*.8+.2})`;
    ctx.fillText(char,i*18,y*18);
    if(y*18>canvas.height&&Math.random()>.975)drops[i]=0;
    drops[i]++;
  });
}
setInterval(drawMatrix,50);
// Glitch intensify on hover
const h1s=document.querySelectorAll('.glitch');
document.querySelector('.hero').addEventListener('mouseenter',()=>{h1s.forEach(h=>h.style.animationDuration='.3s');});
document.querySelector('.hero').addEventListener('mouseleave',()=>{h1s.forEach(h=>h.style.animationDuration='3s');});
