const words=['Anything','Python','Design','Marketing','AI','Finance','Music','Language'];
let wi=0;const rotator=document.getElementById('rotator');
setInterval(()=>{rotator.style.opacity=0;rotator.style.transform='translateY(-10px)';setTimeout(()=>{wi=(wi+1)%words.length;rotator.textContent=words[wi];rotator.style.opacity=1;rotator.style.transform='translateY(0)';rotator.style.transition='all .4s';},300);},2000);
// Course card hover
document.querySelectorAll('.cp-card').forEach((c,i)=>{c.style.opacity=0;c.style.transform='translateX(30px)';c.style.transition=`opacity .6s ${i*.15}s,transform .6s ${i*.15}s,border-color .3s,box-shadow .3s`;setTimeout(()=>{c.style.opacity=1;c.style.transform='translateX(0)';},300);});
