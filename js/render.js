const d = window.PORTFOLIO_DATA;

document.getElementById("about").innerHTML = `
<div class="about-hero">
  <h1>${d.about.name}</h1>
  <h2>${d.about.role}</h2>
  <p>${d.about.summary}</p>
</div>`;

document.getElementById("experience-container").innerHTML =
d.experience.map(e=>`
<div class="card">
<h3>${e.role} — ${e.org}</h3>
<p>${e.period}</p>
<ul>${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
</div>`).join("");

document.getElementById("education-container").innerHTML =
d.education.map(e=>`
<div class="card">
<h3>${e.degree}</h3>
<p>${e.institute}</p>
<p>${e.period} ${e.grade||""}</p>
</div>`).join("");

document.getElementById("projects-container").innerHTML =
d.projects.map((p,i)=>`
<div class="card project-card" onclick="openProject(${i})">
<h3>${p.title}</h3><p>${p.desc}</p>
</div>`).join("");

document.getElementById("publication-container").innerHTML = `
<div class="card project-card" onclick="openPublication()">
<h3>${d.publication.title}</h3>
<p>${d.publication.venue}</p>
</div>`;

document.getElementById("skills-container").innerHTML =
d.skills.map(s=>`<span class="skill-tag">${s}</span>`).join("");

window.scrollToPanel = i =>
document.querySelectorAll(".panel")[i]
  .scrollIntoView({behavior:"smooth",inline:"start"});

window.openProject = i => {
  const p = d.projects[i];
  projectModal(p.title, p.desc, p.link, "GitHub");
};

window.openPublication = () => {
  const p = d.publication;
  projectModal(p.title, p.desc, p.link, "arXiv");
};

function projectModal(title, desc, link, label){
  document.getElementById("project-modal-body").innerHTML =
  `<h2>${title}</h2><p>${desc.replace(/\n/g,"<br>")}</p>
   <a href="${link}" target="_blank">${label} ↗</a>`;
  document.getElementById("project-modal").style.display="flex";
}

window.closeModal = () =>
document.getElementById("project-modal").style.display="none";
