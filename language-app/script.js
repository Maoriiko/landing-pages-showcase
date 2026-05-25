// Confetti burst
const c=document.getElementById('confetti');
const colors=['#58cc02','#ffd900','#1cb0f6','#ff4b4b','#ce82ff'];
Array.from({length:30},()=>{const d=document.createElement('div');const size=Math.random()*10+5;d.style.cssText=`position:absolute;width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${Math.random()*.5+.2};transform:rotate(${Math.random()*360}deg)`;c.appendChild(d);});
// Language selector
const langs=document.querySelectorAll('.lang');
const startBtn=document.getElementById('startLearning');
const names={0:'Spanish',1:'French',2:'German',3:'Japanese',4:'Italian',5:'Portuguese'};
langs.forEach((l,i)=>{l.addEventListener('click',function(){langs.forEach(x=>x.classList.remove('active'));this.classList.add('active');startBtn.textContent='Start Learning '+names[i]+' →';});});
// Animate features
const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}));
document.querySelectorAll('.feat').forEach((el,i)=>{el.style.cssText='opacity:0;transform:translateY(25px);transition:all .5s '+(i*.1)+'s, border .3s, box-shadow .3s, transform .3s';obs.observe(el);});