// Audio visualizer wave
const canvas=document.getElementById('waveCanvas');
const ctx=canvas.getContext('2d');
canvas.width=window.innerWidth;canvas.height=200;
window.addEventListener('resize',()=>{canvas.width=window.innerWidth;});
let t=0;
function drawWave(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const waves=[{color:'rgba(139,92,246,0.5)',amp:40,freq:.012,speed:.04},{color:'rgba(236,72,153,0.4)',amp:30,freq:.018,speed:.06},{color:'rgba(139,92,246,0.2)',amp:60,freq:.008,speed:.02}];
  waves.forEach(w=>{
    ctx.beginPath();ctx.moveTo(0,canvas.height/2);
    for(let x=0;x<=canvas.width;x++){
      const y=canvas.height/2+Math.sin(x*w.freq+t*w.speed)*w.amp;
      ctx.lineTo(x,y);
    }
    ctx.lineTo(canvas.width,canvas.height);ctx.lineTo(0,canvas.height);ctx.closePath();
    ctx.fillStyle=w.color;ctx.fill();
  });
  t++;requestAnimationFrame(drawWave);
}
drawWave();
// Play button toggle
document.querySelector('.play').addEventListener('click',function(){
  this.textContent=this.textContent==='▶'?'⏸':'▶';
  document.querySelector('.vinyl').style.animationPlayState=this.textContent==='⏸'?'running':'paused';
});
