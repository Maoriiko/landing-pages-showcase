// Scroll reveal
const obs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';};}),{threshold:.1});
document.querySelectorAll('.srv').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(30px)';el.style.transition=`opacity .6s ${i*.1}s,transform .6s ${i*.1}s`;obs.observe(el);});
// Parallax petals
window.addEventListener('scroll',()=>{const y=window.scrollY*.1;document.querySelectorAll('.petal').forEach((p,i)=>p.style.transform=`translateY(${y*(i%2===0?1:-1)}px) rotate(${y*(i*.5)}deg)`);});
