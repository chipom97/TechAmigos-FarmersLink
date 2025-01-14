// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Animate hamburger menu
    const spans = menuToggle.getElementsByTagName("span");
    for (let span of spans) {
      span.classList.toggle("active");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".navbar")) {
      navLinks.classList.remove("active");
      const spans = menuToggle.getElementsByTagName("span");
      for (let span of spans) {
        span.classList.remove("active");
      }
    }
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code here
});
