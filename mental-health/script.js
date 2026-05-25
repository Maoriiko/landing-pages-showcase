const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';};}),{threshold:.1});
document.querySelectorAll('.ben').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(20px)';el.style.transition=`opacity .6s ${i*.15}s,transform .6s ${i*.15}s`;obs.observe(el);});
// Breathing animation for circles
const circles=document.querySelectorAll('.c');
circles.forEach((c,i)=>{c.style.animation=`breathe ${4+i}s ease-in-out ${i*.7}s infinite`;});
const style=document.createElement('style');
style.textContent='@keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}';
document.head.appendChild(style);
