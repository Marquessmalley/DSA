// ===================================
// DSA Course — Phase 0 Animations
// Using anime.js
// ===================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all animations
  initHeroAnimations();
  initScrollAnimations();
  initFloatingShapes();
  initBookDemo();
  initBigOCards();
  initPhaseAnimations();
  initRoadmapAnimations();
  initMobileNavigation();
});

// ===================================
// Mobile Navigation Toggle
// ===================================

function initMobileNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  if (!navToggle || !navLinks) return;

  function toggleMenu() {
    const isOpen = navToggle.classList.contains("active");
    
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    if (navOverlay) navOverlay.classList.toggle("active");
    
    // Update ARIA attributes
    navToggle.setAttribute("aria-expanded", !isOpen);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isOpen ? "hidden" : "";
  }

  function closeMenu() {
    navToggle.classList.remove("active");
    navLinks.classList.remove("active");
    if (navOverlay) navOverlay.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  navToggle.addEventListener("click", toggleMenu);
  
  if (navOverlay) {
    navOverlay.addEventListener("click", closeMenu);
  }

  // Close menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navToggle.classList.contains("active")) {
      closeMenu();
    }
  });

  // Close menu on window resize (if switching to desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navToggle.classList.contains("active")) {
      closeMenu();
    }
  });
}

// ===================================
// Hero Section Animations
// ===================================

function initHeroAnimations() {
  const timeline = anime.timeline({
    easing: "easeOutExpo",
  });

  // Animate hero elements in sequence
  timeline
    .add({
      targets: ".hero-tag",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
    })
    .add(
      {
        targets: ".title-line",
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1000,
        delay: anime.stagger(150),
      },
      "-=400"
    )
    .add(
      {
        targets: ".hero-subtitle",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      },
      "-=600"
    )
    .add(
      {
        targets: ".phase-card",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
      },
      "-=400"
    )
    .add(
      {
        targets: ".cta-button",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      },
      "-=300"
    )
    .add(
      {
        targets: ".scroll-indicator",
        opacity: [0, 0.7],
        duration: 1000,
      },
      "-=200"
    );
}

// ===================================
// Floating Background Shapes
// ===================================

function initFloatingShapes() {
  // Animate each shape with random floating motion
  document.querySelectorAll(".shape").forEach((shape, index) => {
    const randomDuration = 15000 + Math.random() * 10000;
    const randomDelay = index * 500;

    anime({
      targets: shape,
      translateX: [
        { value: anime.random(-30, 30), duration: randomDuration },
        { value: anime.random(-30, 30), duration: randomDuration },
      ],
      translateY: [
        { value: anime.random(-30, 30), duration: randomDuration },
        { value: anime.random(-30, 30), duration: randomDuration },
      ],
      scale: [
        { value: 1, duration: randomDuration / 2 },
        { value: 1.1, duration: randomDuration / 2 },
      ],
      easing: "easeInOutQuad",
      loop: true,
      delay: randomDelay,
    });
  });
}

// ===================================
// Scroll-triggered Animations
// ===================================

function initScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");

  // Create intersection observer for fade-in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the element
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: "easeOutCubic",
          });

          // Add visible class
          entry.target.classList.add("visible");

          // Animate child elements with stagger
          const children = entry.target.querySelectorAll(
            ".def-card, .step, .topic-item"
          );
          if (children.length > 0) {
            anime({
              targets: children,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              delay: anime.stagger(100, { start: 200 }),
              easing: "easeOutCubic",
            });
          }

          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Observe all fade-in elements
  fadeElements.forEach((el) => observer.observe(el));

  // Animate lesson numbers on scroll
  const lessonNumbers = document.querySelectorAll(".lesson-number");
  const numberObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 0.3],
            scale: [0.8, 1],
            duration: 1000,
            easing: "easeOutExpo",
          });
          numberObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  lessonNumbers.forEach((el) => numberObserver.observe(el));

  // Animate Big-O reveals on scroll
  const bigOReveals = document.querySelectorAll(".big-o-reveal");
  const bigOObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelector(".big-o"),
            scale: [0, 1],
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutElastic(1, 0.5)",
          });
          bigOObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  bigOReveals.forEach((el) => bigOObserver.observe(el));
}

// ===================================
// Book Comparison Demo
// ===================================

function initBookDemo() {
  const demoSections = document.querySelectorAll(".comparison-demo");

  demoSections.forEach((demo) => {
    const slowBooks = demo.querySelectorAll(".slow .book");
    const fastBooks = demo.querySelectorAll(".fast .book");

    // Create observer for demo section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate slow/random pile
            anime({
              targets: slowBooks,
              rotate: () => anime.random(-45, 45),
              translateX: () => anime.random(-10, 10),
              translateY: () => anime.random(-5, 5),
              duration: 600,
              delay: anime.stagger(50),
              easing: "easeOutElastic(1, 0.5)",
            });

            // Animate fast/sorted pile
            anime({
              targets: fastBooks,
              rotate: 0,
              translateX: 0,
              translateY: 0,
              duration: 800,
              delay: anime.stagger(50, { start: 300 }),
              easing: "easeOutExpo",
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(demo);
  });
}

// ===================================
// Big-O Cards Hover Animation
// ===================================

function initBigOCards() {
  const cards = document.querySelectorAll(".big-o-card");

  cards.forEach((card) => {
    const bar = card.querySelector(".bar");

    card.addEventListener("mouseenter", () => {
      // Animate bar on hover
      anime({
        targets: bar,
        width: "100%",
        duration: 400,
        easing: "easeOutQuad",
      });
    });

    card.addEventListener("mouseleave", () => {
      // Reset bar width
      const complexity = card.dataset.complexity;
      let targetWidth = "20%";
      if (complexity === "on") targetWidth = "50%";
      if (complexity === "on2") targetWidth = "100%";

      anime({
        targets: bar,
        width: targetWidth,
        duration: 400,
        easing: "easeOutQuad",
      });
    });
  });

  // Animate cards on scroll
  const cardsContainer = document.querySelector(".big-o-cards");
  if (cardsContainer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: cards,
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.9, 1],
              duration: 600,
              delay: anime.stagger(150),
              easing: "easeOutCubic",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(cardsContainer);
  }
}

// ===================================
// Smooth Scroll for Navigation
// ===================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    
    // Skip if it's just "#" (home link)
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const target = document.querySelector(href);

    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80; // Account for navbar

      anime({
        targets: { scrollTop: window.pageYOffset },
        scrollTop: offsetTop,
        duration: 1000,
        easing: "easeInOutQuad",
        update: function (anim) {
          window.scrollTo(0, anim.animations[0].currentValue);
        },
      });
    }
  });
});

// ===================================
// Navbar Background on Scroll
// ===================================

let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background = "rgba(10, 14, 23, 0.95)";
  } else {
    navbar.style.background = "rgba(10, 14, 23, 0.8)";
  }

  lastScroll = currentScroll;
});

// ===================================
// Code Block Typing Effect (Optional)
// ===================================

function initCodeTyping() {
  const codeBlocks = document.querySelectorAll(".code-block code");

  codeBlocks.forEach((block) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const text = block.innerHTML;
            block.innerHTML = "";

            anime({
              targets: block,
              innerHTML: text,
              duration: text.length * 20,
              easing: "linear",
              round: 1,
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(block);
  });
}

// ===================================
// Phase Section Animations
// ===================================

function initPhaseAnimations() {
  // Animate phase header elements
  const phaseHeader = document.querySelector(".phase-header");
  if (phaseHeader) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime
              .timeline({ easing: "easeOutExpo" })
              .add({
                targets: ".phase-badge",
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 600,
              })
              .add(
                {
                  targets: ".phase-title",
                  opacity: [0, 1],
                  translateY: [30, 0],
                  duration: 800,
                },
                "-=400"
              )
              .add(
                {
                  targets: ".phase-description",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=500"
              )
              .add(
                {
                  targets: ".topic-tag",
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 400,
                  delay: anime.stagger(50),
                },
                "-=300"
              );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(phaseHeader);
  }

  // Animate lessons navigation
  const lessonsNav = document.querySelector(".lessons-nav");
  if (lessonsNav) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".lesson-nav-item",
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 600,
              delay: anime.stagger(100),
              easing: "easeOutCubic",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(lessonsNav);
  }

  // Animate phase complete section
  const phaseComplete = document.querySelector(".phase-complete");
  if (phaseComplete) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime
              .timeline({ easing: "easeOutExpo" })
              .add({
                targets: ".complete-icon",
                scale: [0, 1],
                rotate: [180, 0],
                duration: 800,
              })
              .add(
                {
                  targets: ".phase-complete h3",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=400"
              )
              .add(
                {
                  targets: ".phase-complete p",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=400"
              )
              .add(
                {
                  targets: ".next-phase",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=300"
              );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(phaseComplete);
  }
}

// ===================================
// Roadmap Animations
// ===================================

function initRoadmapAnimations() {
  const roadmap = document.querySelector(".roadmap");
  if (!roadmap) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: ".roadmap-item",
            opacity: [0, 1],
            translateX: [-50, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: "easeOutCubic",
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(roadmap);
}

// ===================================
// Parallax Effect for Hero
// ===================================

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  const shapes = document.querySelectorAll(".shape");

  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
  }

  shapes.forEach((shape, index) => {
    const speed = 0.1 + index * 0.05;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
