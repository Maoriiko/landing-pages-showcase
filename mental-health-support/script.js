// Soft floating orbs
const orbitBg=document.getElementById('orbitBg');
['rgba(124,92,191,.06)','rgba(107,143,113,.05)','rgba(160,122,212,.04)'].forEach((c,i)=>{const d=document.createElement('div');const size=300+i*100;d.style.cssText='position:absolute;width:'+size+'px;height:'+size+'px;border-radius:50%;background:radial-gradient(circle,'+c+',transparent);top:'+['-10%','30%','60%'][i]+';left:'+['60%','-5%','70%'][i]+';animation:orbFloat '+(8+i*2)+'s ease-in-out infinite '+(i*1.5)+'s';orbitBg.appendChild(d);});
const style=document.createElement('style');style.textContent='@keyframes orbFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(20px,-20px)}}';document.head.appendChild(style);
// Tool buttons
document.querySelectorAll('.qt').forEach(qt=>{qt.addEventListener('click',function(){this.style.background='#e8e0ff';this.style.borderColor='#7c5cbf';setTimeout(()=>{this.style.background='';this.style.borderColor='';},500);});});
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.mod,.step-c').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(20px);transition:all .6s '+(i*.1)+'s, background .3s';obs.observe(el);});