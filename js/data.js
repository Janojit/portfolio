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
        "Selected as IASc-INSA-NASI Summer Research Fellow (SRFP-2025)",
        "Worked under Dr. Sudarshan Iyengar on research problems"
      ]
    },
    {
      role: "Intern",
      org: "Exavalu",
      period: "Jan 2024 – Apr 2024",
      bullets: [
        "Built interactive Tableau dashboards",
        "Analyzed sales and customer datasets for insights"
      ]
    },
    {
      role: "Intern",
      org: "Indian Statistical Institute, Kolkata",
      period: "Jul 2023 – Aug 2023",
      bullets: [
        "Worked on WPI compilation for DES Tripura",
        "Performed statistical data aggregation and validation"
      ]
    },
    {
      role: "Summer Research Intern",
      org: "Ramakrishna Mission Vidyamandira",
      period: "Jul 2022 – Aug 2022",
      bullets: [
        "Applied ML techniques in smart agriculture and health domains"
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
Real-time system to estimate the semantic progress of a speech or lecture as a percentage.

• Developed a supervised BiGRU-based model using semantic information gain,
  knowledge graphs, and GloVe embeddings.
• Designed an unsupervised approach using topic modeling with LLM-generated
  reference content.
• Combined both approaches for improved robustness and accuracy.
• Deployed the system via an interactive MERN-based web interface.
Tools: PyTorch, GloVe, MERN Stack
(May – Jul 2025)
`,
  link: "https://github.com/Team1-SpeechCompletion/Speech-Completion-Prediction"
},

    {
      title: "Multimodal Hate Speech Detection (MMHS150K)",
      desc: "Text + Image multimodal deep learning with fusion strategies",
      link: "https://github.com/Janojit/Multi-modal-Hate-Speech-Detection-using-MMHS150K-Dataset"
    },
    {
      title: "Spotify Track Popularity Prediction",
      desc: "Regression and ensemble models (Voting Regressor best)",
      link: "https://github.com/Janojit/Predicting-Spotify-Track-Popularity-Using-Machine-Learning-Models"
    },
    {
      title: "Chess Quest",
      desc: "Pygame-based chess + Cows & Bulls game",
      link: "https://github.com/Janojit/Chess-Quest-The-Cows-and-Bulls-Challenge"
    }
  ],

  skills: [
    "Generative AI","RAG","Deep Learning","NLP","Computer Vision",
    "Reinforcement Learning","Hadoop","MongoDB","MySQL","Python","R"
  ],

  publication: {
  title: "The TCG CREST — RKMVERI Submission for the NCIIPC Startup India AI Grand Challenge",
  venue: "arXiv · Dec 2025",
  desc: `
We developed an integrated multilingual audio processing pipeline for
Language-Agnostic Speaker Identification, Diarisation, Transcription,
and Translation.

Key contributions:
• Robust Voice Activity Detection (VAD)
• Fine-tuned speaker embedding models for low-resource settings
• Proposed a multi-kernel consensus spectral clustering framework
• Integrated Speaker ID, Language ID, ASR, and NMT modules
• Post-processing refinements for real-world robustness
`,
  link: "https://www.arxiv.org/pdf/2512.11009"
},


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
