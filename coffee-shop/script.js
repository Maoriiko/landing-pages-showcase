// Steam particles
const steamEl = document.getElementById('steam');
function createSteam() {
  const s = document.createElement('div');
  s.style.cssText = `
    position:absolute;
    width:${Math.random()*4+2}px;
    height:${Math.random()*60+40}px;
    background:rgba(200,160,120,0.06);
    border-radius:50%;
    left:${Math.random()*100}%;
    bottom:${Math.random()*30}%;
    animation:riseSteam ${Math.random()*4+3}s linear forwards;
  `;
  steamEl.appendChild(s);
  setTimeout(()=>s.remove(), 7000);
}
const style = document.createElement('style');
style.textContent = `@keyframes riseSteam{from{transform:translateY(0) scaleX(1);opacity:.6}to{transform:translateY(-200px) scaleX(2);opacity:0}}`;
document.head.appendChild(style);
setInterval(createSteam, 400);

// Scroll reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
},{threshold:0.1});
document.querySelectorAll('.feat,.card').forEach(el=>observer.observe(el));
