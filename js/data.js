window.PORTFOLIO_DATA = {
  about: {
    name: "Janojit Chakraborty",
    role: "AI / ML Engineer & Researcher",
    summary: `
AI/ML Engineer with strong research and applied experience in
Retrieval-Augmented Generation (RAG), multimodal learning,
speech processing, and large-scale data analytics.
Currently pursuing MSc in Big Data Analytics at RKMVERI and
working on production-grade GenAI systems.
`
  },

  experience: [
    {
      role: "AI/ML Intern",
      org: "Rezolve AI",
      period: "Jan 2026 – Present",
      bullets: [
        "Designed production-grade RAG pipelines for GenAI voice assistants",
        "Optimized semantic retrieval and prompt orchestration",
        "Integrated LLM inference with speech and retrieval systems"
      ]
    },
    {
      role: "Summer Research Fellow",
      org: "Indian Institute of Technology, Ropar",
      period: "May 2025 – Jul 2025",
      bullets: [
        "IASc–INSA–NASI Summer Research Fellow (SRFP-2025)",
        "Worked under Dr. Sudarshan Iyengar"
      ]
    }
  ],

  education: [
    {
      degree: "MSc Big Data Analytics",
      institute: "Ramakrishna Mission Vivekananda Educational and Research Institute",
      period: "2024 – 2026"
    },
    {
      degree: "BSc Data Science",
      institute: "CHRIST University, Pune – Lavasa",
      period: "2021 – 2024",
      grade: "CGPA: 9.17 / 10"
    }
  ],

  projects: [
    {
      title: "Speech Completion Prediction",
      desc: `
Real-time system estimating semantic progress of a speech.

• Supervised BiGRU using semantic information gain, knowledge graphs, GloVe
• Unsupervised topic modeling with LLM-generated reference content
• Combined both for robustness
• Deployed via MERN stack
(May – Jul 2025)
`,
      link: "https://github.com/Team1-SpeechCompletion/Speech-Completion-Prediction"
    },
    {
      title: "Multimodal Hate Speech Detection (MMHS150K)",
      desc: "Text + Image multimodal deep learning with fusion strategies",
      link: "https://github.com/Janojit/Multi-modal-Hate-Speech-Detection-using-MMHS150K-Dataset"
    }
  ],

  publication: {
    title: "The TCG CREST — NCIIPC Startup India AI Grand Challenge",
    venue: "arXiv · Dec 2025",
    desc: `
Integrated multilingual pipeline for speaker diarization,
identification, ASR, and translation.

• Robust VAD
• Fine-tuned speaker embeddings
• Multi-kernel consensus spectral clustering
• Speaker ID, Language ID, ASR, NMT integration
`,
    link: "https://www.arxiv.org/pdf/2512.11009"
  },

  skills: [
    "Generative AI","RAG","Deep Learning","NLP","Computer Vision",
    "Reinforcement Learning","Hadoop","MongoDB","MySQL","Python","R"
  ],

  awards: [
    "GATE DA 2025 Qualified",
    "Co-Curricular Scholarship – CHRIST University"
  ],

  languages: [
    "Bengali (Native)",
    "English (Full Professional)",
    "Hindi (Full Professional)",
    "French (Elementary)"
  ]
};
