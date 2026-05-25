let cur=0;const slides=document.querySelectorAll('.slide');const btns=document.querySelectorAll('.sn');
function goTo(i){slides[cur].classList.remove('active');btns[cur].classList.remove('active');cur=i;slides[cur].classList.add('active');btns[cur].classList.add('active');}
btns.forEach((b,i)=>b.addEventListener('click',()=>goTo(i)));
setInterval(()=>goTo((cur+1)%slides.length),5000);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.room-card').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(30px);transition:all .7s '+(i*.15)+'s, box-shadow .3s, transform .3s';obs.observe(el);});