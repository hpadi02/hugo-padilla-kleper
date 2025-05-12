// Create a new footer element
const footer = document.createElement('footer');

// Create a new Date object and get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Create a new paragraph element for the copyright
const copyright = document.createElement('p');

// Set the inner HTML to include the copyright symbol, name, and year
copyright.innerHTML = `&copy; Hugo Padilla ${thisYear}`;

// Append the copyright paragraph to the footer
footer.appendChild(copyright);

// Append the footer to the body

document.querySelector('body').appendChild(footer);

// Skills array
const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "GitHub",
  "Git",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL"
];

// Select the skills section by id
const skillsSection = document.getElementById('skills');

// Select the ul inside the skills section (create if not present)
let skillsList = skillsSection.querySelector('ul');
if (!skillsList) {
  skillsList = document.createElement('ul');
  skillsSection.appendChild(skillsList);
}

// Populate the skills list
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
