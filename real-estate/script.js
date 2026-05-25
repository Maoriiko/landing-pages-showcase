// Scroll animations for listings
const listings=document.querySelectorAll('.listing');
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)';}
  });
},{threshold:.1});
listings.forEach((l,i)=>{l.style.opacity=0;l.style.transform='translateY(40px)';l.style.transition=`opacity .7s ${i*.1}s, transform .7s ${i*.1}s`;obs.observe(l);});
// Search bar focus
document.querySelector('.search-bar input').addEventListener('focus',function(){this.parentElement.style.boxShadow='0 0 0 3px rgba(184,151,58,.3)';});
document.querySelector('.search-bar input').addEventListener('blur',function(){this.parentElement.style.boxShadow='none';});
