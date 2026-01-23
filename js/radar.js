const c=document.getElementById("radarChart");
const ctx=c.getContext("2d");
c.width=c.height=300;
const s=[90,85,80,75,70],r=100,cx=150,cy=150;
ctx.beginPath();
s.forEach((v,i)=>{
  const a=2*Math.PI*i/s.length;
  ctx.lineTo(cx+(v/100)*r*Math.cos(a), cy+(v/100)*r*Math.sin(a));
});
ctx.closePath();
ctx.strokeStyle="#00ffd5";
ctx.stroke();
