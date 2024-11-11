let menu = document.querySelector(".navbar-toggle");
let navlinks = document.querySelector(".navbar-list");
menu.onclick = () => {
  menu.classList.toggle("active");
  navlinks.classList.toggle("show");
};
window.onscroll = () => {
  menu.classList.remove("active");
  navlinks.classList.remove("show");
};
