// Animated impact ticker
const messages=['🌱 847,291 trees planted so far today','💧 Saving 14M litres of water this season','♻ 98% of our packaging is recycled','🌍 Carbon negative since 2022','⭐ Certified B Corp · 1% for the Planet'];
let mi=0;const ticker=document.getElementById('impTicker');
function nextMsg(){ticker.style.opacity=0;setTimeout(()=>{ticker.textContent=messages[mi=(mi+1)%messages.length];ticker.style.opacity=1;},400);}
ticker.textContent=messages[0];ticker.style.transition='opacity .4s';setInterval(nextMsg,3500);
// Material bar animation
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){document.querySelectorAll('.mi-fill').forEach(f=>{f.style.width=f.style.width;});}});},{threshold:.5});
obs.observe(document.querySelector('.material-info'));
// Product grid reveal
const obs2=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.ci').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(30px);transition:all .6s '+(i*.12)+'s, transform .3s';obs2.observe(el);});