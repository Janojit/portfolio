const knowledge=[
["rag","I build production-grade RAG systems for GenAI applications."],
["research","My research focuses on multimodal learning and speech AI."],
["publication","I am a co-author of an arXiv paper on speaker diarization."]
];

document.getElementById("chatinput").addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    const q=e.target.value.toLowerCase();
    let a="Ask me about my research, projects, or skills.";
    knowledge.forEach(k=>{ if(q.includes(k[0])) a=k[1]; });
    chatlog.innerHTML+=`<p><b>You:</b> ${q}</p><p><b>Bot:</b> ${a}</p>`;
    e.target.value="";
  }
});
