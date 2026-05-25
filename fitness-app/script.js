// Parallax hero text
document.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*20;
  const y=(e.clientY/window.innerHeight-.5)*20;
  document.querySelector('h1').style.transform=`translate(${x*.5}px,${y*.3}px)`;
  document.querySelector('.progress-panel').style.transform=`translate(${-x*.3}px,${-y*.2}px)`;
});
// Animate programs on scroll
const progs=document.querySelectorAll('.prog');
const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      setTimeout(()=>{e.target.style.opacity=1;e.target.style.transform='translateY(0)'},i*100);
    }
  });
},{threshold:0.1});
progs.forEach(p=>{p.style.opacity=0;p.style.transform='translateY(30px)';p.style.transition='all .5s';obs.observe(p);});
