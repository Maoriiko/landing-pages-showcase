const dests=document.querySelectorAll('.dest');
const slides=document.querySelectorAll('.slide');
let current=0,timer;
function switchTo(idx){
  slides[current].classList.remove('active');
  dests[current].classList.remove('active');
  current=idx;
  slides[current].classList.add('active');
  dests[current].classList.add('active');
}
dests.forEach((d,i)=>d.addEventListener('click',()=>{clearInterval(timer);switchTo(i);startAuto();}));
function startAuto(){timer=setInterval(()=>switchTo((current+1)%slides.length),5000);}
startAuto();
// Parallax
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.querySelector('.hero-content').style.transform=`translateY(${y*.3}px)`;
});
