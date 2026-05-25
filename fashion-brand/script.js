// Reveal hero elements
const heroEls=['.col-left','.col-center','.col-right'];
heroEls.forEach((sel,i)=>{
  const el=document.querySelector(sel);
  el.style.opacity=0;el.style.transform='translateY(20px)';
  el.style.transition=`opacity .9s ${i*.2+.3}s, transform .9s ${i*.2+.3}s`;
  setTimeout(()=>{el.style.opacity=1;el.style.transform='translateY(0)';},50);
});
// Magnetic buttons
document.querySelectorAll('.nav-side,.shop-link').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*.3}px,${y*.3}px)`;
  });
  btn.addEventListener('mouseleave',()=>{btn.style.transform='';btn.style.transition='transform .5s';});
});
