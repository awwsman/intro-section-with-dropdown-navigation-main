const features = document.querySelector(".feat");
const company = document.querySelector(".com");
const menuClose = document.querySelector(".menu-close");
const menuopen = document.querySelector(".menu");
const nav = document.querySelector("nav");

menuopen.addEventListener("click", () => {
  nav.classList.add("active");
  document.querySelector("main").style.backgroundColor = "hsl(0, 0%, 81%)";
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("active");
  document.querySelector("main").style.backgroundColor = "hsl(0, 0%, 98%)";
});

features.addEventListener("click", () => {
  features.classList.toggle("open");
});
company.addEventListener("click", () => {
  company.classList.toggle("open");
});
