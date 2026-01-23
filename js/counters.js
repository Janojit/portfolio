document.querySelectorAll("[data-count]").forEach(el=>{
  let t=+el.dataset.count,c=0;
  const i=setInterval(()=>{
    c+=Math.ceil(t/100);
    el.textContent=c>=t?(clearInterval(i),t):c;
  },20);
});
