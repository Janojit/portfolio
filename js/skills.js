document.querySelectorAll(".circle").forEach(c=>{
  const p=c.dataset.percent;
  c.style.background=`conic-gradient(#00ffd5 ${p}%, #222 ${p}%)`;
});
