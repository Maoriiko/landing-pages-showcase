// Animated sun rays
const sunEl=document.getElementById('sunRays');
const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
svg.setAttribute('viewBox','0 0 600 600');svg.style.cssText='width:100%;height:100%;animation:rotateSun 20s linear infinite;opacity:.3';
for(let i=0;i<12;i++){const line=document.createElementNS('http://www.w3.org/2000/svg','line');const angle=(i/12)*Math.PI*2;line.setAttribute('x1',300+Math.cos(angle)*80);line.setAttribute('y1',300+Math.sin(angle)*80);line.setAttribute('x2',300+Math.cos(angle)*280);line.setAttribute('y2',300+Math.sin(angle)*280);line.setAttribute('stroke','#f5a800');line.setAttribute('stroke-width','3');svg.appendChild(line);}
const circle=document.createElementNS('http://www.w3.org/2000/svg','circle');circle.setAttribute('cx',300);circle.setAttribute('cy',300);circle.setAttribute('r',60);circle.setAttribute('fill','#f5a800');svg.appendChild(circle);sunEl.appendChild(svg);
const style=document.createElement('style');style.textContent='@keyframes rotateSun{from{transform:rotate(0)}to{transform:rotate(360deg)}}';document.head.appendChild(style);
// Savings calculator
const slider=document.getElementById('billSlider');
slider.addEventListener('input',function(){
  const bill=+this.value;document.getElementById('billVal').textContent='$'+bill;
  const savings=Math.round(bill*0.8*12);document.getElementById('savingsAmt').textContent='$'+savings.toLocaleString();
  const co2=(savings/1200).toFixed(1);document.getElementById('co2Amt').textContent=co2+'T';
  const pct=((bill-50)/450)*100;this.style.background='linear-gradient(to right, #f5a800 '+pct+'%, #e0e0e0 '+pct+'%)';
});