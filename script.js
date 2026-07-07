const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (topBtn) {
    topBtn.classList.toggle("show", window.scrollY > 400);
  }
});

revealOnScroll();

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
