const vals=[100,118,142,128,168,152,190,218,245,264];
const chartBars=document.getElementById('chartBars');
const maxV=Math.max(...vals);
vals.forEach((v,i)=>{const b=document.createElement('div');const pct=(v/maxV)*100;b.style.cssText='flex:1;background:'+(i===vals.length-1?'#2d7a3a':'#c8e6c9')+';border-radius:4px 4px 0 0;transition:height .8s '+(i*.08)+'s ease;height:0';chartBars.appendChild(b);const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){b.style.height=pct+'%';}});},{threshold:.5});obs.observe(b);});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.topic').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(25px);transition:all .5s '+(i*.1)+'s, border .3s, box-shadow .3s, transform .3s';obs.observe(el);});