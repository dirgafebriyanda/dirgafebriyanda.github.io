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

const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    backToTopButton.style.opacity = 1;
    backToTopButton.style.visibility = "visible";
  } else {
    backToTopButton.style.opacity = 0;
    backToTopButton.style.visibility = "hidden";
  }
});
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const links = document.querySelectorAll(".navbar-list a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});
