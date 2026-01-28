const d = window.PORTFOLIO_DATA;

/* ABOUT */
document.getElementById("about").innerHTML = `
<div class="about-hero">
  <h1>${d.about.name}</h1>
  <h2>${d.about.role}</h2>
  <p>${d.about.summary}</p>
</div>`;

/* EXPERIENCE */
document.getElementById("experience-container").innerHTML =
d.experience.map(e => `
<div class="card">
  <h3>${e.role} — ${e.org}</h3>
  <p>${e.period}</p>
  <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
</div>`).join("");

/* EDUCATION */
document.getElementById("education-container").innerHTML =
d.education.map(e => `
<div class="card">
  <h3>${e.degree}</h3>
  <p>${e.institute}</p>
  <p>${e.period} ${e.grade || ""}</p>
</div>`).join("");

/* PROJECTS */
document.getElementById("projects-container").innerHTML =
d.projects.map((p,i) => `
<div class="card project-card" onclick="openProject(${i})">
  <h3>${p.title}</h3>
  <p>${p.desc}</p>
  <span class="project-link">Click to view</span>
</div>`).join("");

/* SKILLS */
document.getElementById("skills-container").innerHTML =
d.skills.map(s => `<span class="skill-tag">${s}</span>`).join("");

/* PUBLICATION */
document.getElementById("publication-container").innerHTML =
`<a href="${d.publication.link}" target="_blank">${d.publication.title}</a>`;

/* AWARDS */
document.getElementById("awards-container").innerHTML =
d.awards.map(a => `<div class="card">${a}</div>`).join("");

/* LANGUAGES */
document.getElementById("languages-container").innerHTML =
d.languages.map(l => `<div class="card">${l}</div>`).join("");

/* PROJECT MODAL */
window.openProject = function(i){
  const p = d.projects[i];
  document.getElementById("project-modal-body").innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">View GitHub ↗</a>
  `;
  document.getElementById("project-modal").style.display = "flex";
};

window.closeProject = function(){
  document.getElementById("project-modal").style.display = "none";
};
