const text='Japan greets you not with a shout, but a whisper — the rustle of bamboo in Arashiyama, the hushed reverence of Fushimi Inari before dawn, the soft clatter of a ramen shop at midnight in Shinjuku...';
const out=document.getElementById('out');let i=0;
setTimeout(()=>{const t=setInterval(()=>{if(i<text.length){out.textContent+=text[i++];}else clearInterval(t);},35);},1500);
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0) scale(1)'}}));
document.querySelectorAll('.uc').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(20px) scale(.97);transition:all .5s '+(i*.08)+'s, background .3s, border .3s, color .3s, transform .3s';obs.observe(el);});