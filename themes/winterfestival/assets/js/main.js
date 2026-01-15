// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  }

  // Schedule tabs
  const scheduleDays = document.querySelectorAll(".schedule-day");
  if (scheduleDays.length > 0) {
    // Show first day by default if none are active
    const hasActive = Array.from(scheduleDays).some((day) =>
      day.classList.contains("active"),
    );
    if (!hasActive && scheduleDays[0]) {
      scheduleDays[0].classList.add("active");
    }

    // Add click handlers for day titles (if you want to make them clickable)
    scheduleDays.forEach((day, index) => {
      const title = day.querySelector(".schedule-day-title");
      if (title) {
        title.style.cursor = "pointer";
        title.addEventListener("click", function () {
          scheduleDays.forEach((d) => d.classList.remove("active"));
          day.classList.add("active");
        });
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe cards and sections
  document
    .querySelectorAll(
      ".feature-card, .ticket-card, .speaker-card, .benefit-card, .blog-card",
    )
    .forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });
});
