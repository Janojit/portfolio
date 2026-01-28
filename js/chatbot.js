const knowledge = [
["rag","I build production-grade RAG systems for GenAI applications."],
["speech","I worked on Speech Completion Prediction using BiGRU and LLMs."],
["publication","I authored an arXiv paper on multilingual speaker diarization."]
];

document.getElementById("chatinput").addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const q = e.target.value.toLowerCase();
    let a = "Ask me about my projects, research, or skills.";
    knowledge.forEach(k => { if(q.includes(k[0])) a = k[1]; });
    chatlog.innerHTML += `<p><b>You:</b> ${q}</p><p><b>Bot:</b> ${a}</p>`;
    e.target.value = "";
  }
});
