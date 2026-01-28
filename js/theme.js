const btn=document.getElementById("theme-toggle");
const saved=localStorage.getItem("theme");
if(saved)document.documentElement.setAttribute("data-theme",saved);

btn.onclick=()=>{
const cur=document.documentElement.getAttribute("data-theme");
const next=cur==="light"?"dark":"light";
document.documentElement.setAttribute("data-theme",next);
localStorage.setItem("theme",next);
btn.textContent=next==="light"?"🌙":"☀️";
};
