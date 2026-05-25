// Hover dish rotation
document.querySelectorAll('.dish').forEach(d=>{
  d.addEventListener('mouseenter',()=>{d.querySelector('.dish-inner').style.transform='scale(1.05) rotate(5deg)';d.querySelector('.dish-inner').style.transition='transform .4s';});
  d.addEventListener('mouseleave',()=>{d.querySelector('.dish-inner').style.transform='scale(1) rotate(0)';});
});
// Menu item hover effect
document.querySelectorAll('.menu-item').forEach(item=>{
  item.addEventListener('mouseenter',()=>{item.querySelector('.mi-num').style.color='var(--orange)';item.querySelector('.mi-num').style.transition='color .3s';});
  item.addEventListener('mouseleave',()=>{item.querySelector('.mi-num').style.color='rgba(26,14,5,.2)';});
});
// Scroll animations
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.style.opacity=1;}));
document.querySelectorAll('.menu-item').forEach((el,i)=>{el.style.opacity=0;el.style.transition=`opacity .5s ${i*.1}s`;obs.observe(el);});
