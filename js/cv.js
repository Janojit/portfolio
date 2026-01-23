const d=window.PORTFOLIO_DATA;
document.getElementById("cv").innerHTML=`
<h1>${d.name}</h1>
<p>${d.title}</p>
<p>${d.email} | ${d.github} | ${d.linkedin}</p>

<h2>Education</h2>
${d.education.map(e=>`<p><b>${e.degree}</b><br>${e.institute} (${e.period})</p>`).join("")}

<h2>Experience</h2>
${d.experience.map(e=>`
<p><b>${e.role}</b> – ${e.org}</p>
<ul>${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
`).join("")}

<h2>Skills</h2>
<p>${d.skills.join(", ")}</p>

<h2>Publication</h2>
<p><a href="${d.publication.link}">${d.publication.title}</a></p>
`;
