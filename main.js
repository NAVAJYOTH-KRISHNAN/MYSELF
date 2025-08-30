setTimeout(() => {
  document.querySelector(".noise").classList.add("hidden");
}, 1500);
const projectsDiv = document.getElementById("projects");
const ul = document.createElement("ul");
let projects = [
  { name: "RETRO LEARN", url: "https://retrolearn.pages.dev/" },
  {
    name: "TALP(CHROME EXTENSION)",
    url: "https://github.com/NAVAJYOTH-KRISHNAN/ChromeExtensio",
  },

  {
    name: "RETROLEARN V2(COMING SOON)",
    url: "https://sites.google.com/view/comingsoonnkd/home",
  },
  {
    name: "AROUND APP(COMING SOON)",
    url: "https://sites.google.com/view/comingsoonnkd/home",
  },
];
projects.forEach((project) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = project.url;
  a.textContent = project.name;
  a.target = "_blank";
  li.appendChild(a);
  ul.appendChild(li);
});
projectsDiv.appendChild(ul);
