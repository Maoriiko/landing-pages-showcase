const wave=document.getElementById('waveVis');
const bars=Array.from({length:40},()=>{const b=document.createElement('div');b.style.cssText='flex:1;background:linear-gradient(to top,#ff6b35,#7c3aed);border-radius:2px;min-width:2px';wave.appendChild(b);return b;});
let playing=true;
function anim(){bars.forEach(b=>{b.style.height=(playing?Math.random()*70+10:4)+'px';b.style.transition='height .1s';})}
setInterval(anim,150);
document.getElementById('pb').addEventListener('click',function(){playing=!playing;this.textContent=playing?'▶':'⏸';});