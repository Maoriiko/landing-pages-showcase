// Animate bars on load
setTimeout(()=>{document.querySelectorAll('.bar').forEach(b=>{const h=b.style.getPropertyValue('--h');b.style.height=h;});},300);
// Scroll reveal features
const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';}});},{threshold:.1});
document.querySelectorAll('.feat-box').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(20px)';el.style.transition=`opacity .6s ${i*.08}s,transform .6s ${i*.08}s`;obs.observe(el);});
