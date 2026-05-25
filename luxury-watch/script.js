function updateClock(){
  const now=new Date();
  const s=now.getSeconds()*6;
  const m=now.getMinutes()*6+s/60;
  const h=(now.getHours()%12)*30+m/12;
  document.getElementById('second').style.transform='translateX(-50%) rotate('+s+'deg)';
  document.getElementById('minute').style.transform='translateX(-50%) rotate('+m+'deg)';
  document.getElementById('hour').style.transform='translateX(-50%) rotate('+h+'deg)';
}
updateClock();setInterval(updateClock,1000);
document.querySelectorAll('.cn-item').forEach(item=>{item.addEventListener('click',function(){document.querySelectorAll('.cn-item').forEach(x=>x.classList.remove('active'));this.classList.add('active');});});