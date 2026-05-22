const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const topBtn = document.getElementById("topBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Visitor Counter
fetch("https://counterapi.dev/api/pooja-yogesh-athawale/visits/up")
  .then((response) => response.json())
  .then((data) => {

    // Actual visitor count from API
    let realCount = data.count || data.value || 0;

    // Add 101 starting value
    let displayCount = realCount + 201;

    document.getElementById("visitorCount").innerText = displayCount;
  })
  .catch((error) => {
    document.getElementById("visitorCount").innerText = "201";
    console.log("Visitor counter error:", error);
  });
