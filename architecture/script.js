const obs=new IntersectionObserver(entries=>entries.forEach((e)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';};}),{threshold:.05});
document.querySelectorAll('.proj-item').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(20px)';el.style.transition=`opacity .5s ${i*.1}s,transform .5s ${i*.1}s,padding .3s`;obs.observe(el);});
// Color cycling blocks
const blocks=document.querySelectorAll('.gv-block');
setInterval(()=>{blocks.forEach(b=>{const rand=Math.random();b.style.opacity=0.5+rand*0.5;});},2000);
