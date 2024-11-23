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

// Ambil elemen back-to-top
const backToTopButton = document.querySelector(".back-to-top");

// Fungsi untuk menangani scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 700) {
    // Jika posisi scroll lebih dari 200px
    backToTopButton.style.opacity = 1; // Tampilkan tombol
    backToTopButton.style.visibility = "visible";
  } else {
    backToTopButton.style.opacity = 0; // Sembunyikan tombol
    backToTopButton.style.visibility = "hidden";
  }
});

// Fungsi untuk kembali ke atas saat tombol diklik
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan animasi smooth
});
