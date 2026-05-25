function setColor(el,color){document.querySelectorAll('.color-opt').forEach(c=>c.classList.remove('active'));el.classList.add('active');const shoe=document.getElementById('shoe');shoe.style.background=color;shoe.style.boxShadow=`0 20px 60px ${color}66`;}
// Product card reveal
const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';};}),{threshold:.1});
document.querySelectorAll('.pcard').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(30px)';el.style.transition=`opacity .6s ${i*.1}s,transform .6s ${i*.1}s`;obs.observe(el);});
