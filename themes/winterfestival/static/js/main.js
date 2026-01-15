// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  // Initialize sponsor slider
  initSponsorSlider();
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle mobile menu
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");

      // Animate hamburger icon
      const hamburgers = navToggle.querySelectorAll(".hamburger");
      hamburgers.forEach((hamburger) => {
        hamburger.classList.toggle("active");
      });
    });

    // Close menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");

        const hamburgers = navToggle.querySelectorAll(".hamburger");
        hamburgers.forEach((hamburger) => {
          hamburger.classList.remove("active");
        });
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !navToggle.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");

        const hamburgers = navToggle.querySelectorAll(".hamburger");
        hamburgers.forEach((hamburger) => {
          hamburger.classList.remove("active");
        });
      }
    });
  }

  // Smooth scrolling for anchor links
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

  // Contact form handling
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.innerHTML = '<span class="loading"></span> Versturen...';
      submitButton.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        // Reset form
        contactForm.reset();

        // Show success message
        showNotification(
          "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
          "success",
        );

        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 2000);
    });
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => {
      notification.remove();
    });

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close" aria-label="Sluiten">&times;</button>
            </div>
        `;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;

    // Add close functionality
    const closeButton = notification.querySelector(".notification-close");
    closeButton.addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideOut 0.3s ease-out";
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);

    document.body.appendChild(notification);
  }

  // Add notification animations to CSS
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }

        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }

        .notification-close:hover {
            opacity: 1;
        }

        .nav-toggle.active .hamburger:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-toggle.active .hamburger:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active .hamburger:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
  document.head.appendChild(style);

  // Lazy loading for images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Add scroll-to-top functionality
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerHTML = "↑";
  scrollToTopButton.className = "scroll-to-top";
  scrollToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1e3a8a;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(scrollToTopButton);

  // Show/hide scroll-to-top button
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Add hover effects to cards
  document.querySelectorAll(".card, .event-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Initialize any ticket iframe responsiveness
  const ticketIframes = document.querySelectorAll(".ticket-frame iframe");
  ticketIframes.forEach((iframe) => {
    // Ensure iframe is responsive
    iframe.style.width = "100%";
    iframe.style.minHeight = "600px";

    // Handle iframe load events
    iframe.addEventListener("load", function () {
      console.log("Ticket iframe loaded successfully");
    });

    iframe.addEventListener("error", function () {
      console.error("Error loading ticket iframe");
      showNotification(
        "Er is een probleem met het laden van de ticket service. Probeer de pagina te vernieuwen.",
        "error",
      );
    });
  });

  console.log("Winterfestival website initialized successfully");
});

// Sponsor Slider Functionality
function initSponsorSlider() {
  const sponsorSlider = document.querySelector(".sponsor-slider");
  const sponsorTrack = document.getElementById("sponsorTrack");
  const sponsorSlides = document.querySelectorAll(".sponsor-slide");

  if (!sponsorTrack || sponsorSlides.length === 0) {
    return;
  }

  const originalSlidesCount = sponsorSlides.length / 3; // Triple set for smooth loop

  // Function to detect which slide is in the center of viewport
  function updateCenterSlide() {
    const sliderRect = sponsorSlider.getBoundingClientRect();
    const sliderCenter = sliderRect.left + sliderRect.width / 2;

    let centerSlide = null;
    let minDistance = Infinity;

    sponsorSlides.forEach((slide) => {
      slide.classList.remove("sponsor-center");

      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - sliderCenter);

      if (distance < minDistance) {
        minDistance = distance;
        centerSlide = slide;
      }
    });

    if (centerSlide) {
      centerSlide.classList.add("sponsor-center");
    }
  }

  // Update center slide on animation frame for smooth detection
  function animationLoop() {
    updateCenterSlide();
    requestAnimationFrame(animationLoop);
  }

  // Start the animation loop
  animationLoop();

  // Optional: Pause animation on hover for better interaction
  const sponsorContainer = document.querySelector(".sponsor-slider-container");

  sponsorContainer.addEventListener("mouseenter", function () {
    sponsorTrack.style.animationPlayState = "paused";
  });

  sponsorContainer.addEventListener("mouseleave", function () {
    sponsorTrack.style.animationPlayState = "running";
  });

  // Touch/swipe support for mobile
  let startX = 0;
  let startTime = 0;

  sponsorTrack.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    startTime = Date.now();
    sponsorTrack.style.animationPlayState = "paused";
  });

  sponsorTrack.addEventListener("touchend", function (e) {
    const endX = e.changedTouches[0].clientX;
    const endTime = Date.now();
    const diff = startX - endX;
    const timeDiff = endTime - startTime;

    // Only register as swipe if it's quick and significant
    if (Math.abs(diff) > 50 && timeDiff < 300) {
      const currentTransform =
        sponsorTrack.style.transform || "translateX(0px)";
      const currentX = parseFloat(currentTransform.match(/-?\d+\.?\d*/)) || 0;

      if (diff > 0) {
        // Swiped left - move forward
        sponsorTrack.style.transform = `translateX(${currentX - 150}px)`;
      } else {
        // Swiped right - move backward
        sponsorTrack.style.transform = `translateX(${currentX + 150}px)`;
      }

      // Resume animation after a brief delay
      setTimeout(() => {
        sponsorTrack.style.transform = "";
        sponsorTrack.style.animationPlayState = "running";
      }, 300);
    } else {
      sponsorTrack.style.animationPlayState = "running";
    }
  });

  // Click to center functionality
  sponsorSlides.forEach((slide) => {
    slide.addEventListener("click", function (e) {
      // If clicking on the center slide, follow the link
      if (slide.classList.contains("sponsor-center")) {
        return; // Let the default link behavior happen
      }

      // Otherwise, pause animation briefly for interaction feedback
      e.preventDefault();
      sponsorTrack.style.animationPlayState = "paused";

      setTimeout(() => {
        sponsorTrack.style.animationPlayState = "running";
      }, 1000);
    });
  });
}

// Helper function to check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Utility functions
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
      const navMenu = document.querySelector(".nav-menu");
      const navToggle = document.querySelector(".nav-toggle");

      if (navMenu && navToggle) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");

        const hamburgers = navToggle.querySelectorAll(".hamburger");
        hamburgers.forEach((hamburger) => {
          hamburger.classList.remove("active");
        });
      }
    }
  }, 250),
);
