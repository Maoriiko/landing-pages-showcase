const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateX(0)';};}),{threshold:.1});
document.querySelectorAll('.pa').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateX(-20px)';el.style.transition=`opacity .6s ${i*.1}s,transform .6s ${i*.1}s`;obs.observe(el);});
