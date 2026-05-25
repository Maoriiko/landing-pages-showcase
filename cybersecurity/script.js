// Live threat counter
let threats=0;
setInterval(()=>{
  const el=document.querySelector('.threats');
  if(Math.random()<.1){threats++;el.textContent=threats+' threat'+(threats>1?'s':'')+' detected — neutralized';el.style.color='#ff3355';setTimeout(()=>{threats=0;el.textContent='0 threats detected in last 24h';el.style.color='#00ff88';},3000);}
},5000);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.fc').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(20px);transition:all .6s '+(i*.1)+'s, background .3s';obs.observe(el);});