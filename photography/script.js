const cursor=document.querySelector('.cursor');
const follower=document.querySelector('.cursor-follower');
let mx=0,my=0,fx=0,fy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
function animFollower(){fx+=(mx-fx)*.12;fy+=(my-fy)*.12;follower.style.left=fx+'px';follower.style.top=fy+'px';requestAnimationFrame(animFollower);}
animFollower();
document.querySelectorAll('.gi').forEach(el=>{
  el.addEventListener('mouseenter',()=>{follower.style.width='60px';follower.style.height='60px';follower.style.borderColor='rgba(255,255,255,.5)';});
  el.addEventListener('mouseleave',()=>{follower.style.width='30px';follower.style.height='30px';follower.style.borderColor='var(--dark)';});
});
// Subtle parallax on grid
document.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*15;
  const y=(e.clientY/window.innerHeight-.5)*10;
  document.querySelectorAll('.gi').forEach((el,i)=>{
    const factor=(i%2===0?1:-1)*(i*.1+.5);
    el.style.transform=`translate(${x*factor*.3}px,${y*factor*.2}px)`;
  });
});
