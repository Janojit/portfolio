const texts = ["AI Engineer", "ML Researcher", "RAG Specialist"];
let i=0,j=0;
const el=document.getElementById("typing");

function type(){
  if(j<texts[i].length){
    el.textContent+=texts[i][j++];
    setTimeout(type,100);
  } else setTimeout(erase,1500);
}
function erase(){
  if(j>0){
    el.textContent=texts[i].slice(0,--j);
    setTimeout(erase,50);
  } else { i=(i+1)%texts.length; type(); }
}
type();
