const knowledge=[
["speech","I worked on Speech Completion Prediction using BiGRU and LLMs."],
["rag","I design production-grade RAG systems."],
["publication","I authored an arXiv paper on speaker diarization."]
];

chatinput.onkeydown=e=>{
if(e.key==="Enter"){
const q=e.target.value.toLowerCase();
let a="Ask me about my work.";
knowledge.forEach(k=>{if(q.includes(k[0]))a=k[1];});
chatlog.innerHTML+=`<p><b>You:</b> ${q}</p><p><b>Bot:</b> ${a}</p>`;
e.target.value="";
}};
