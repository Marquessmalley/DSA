// ===================================
// DSA Course — Phase 0 Animations
// Using anime.js (Performance Optimized)
// ===================================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all animations
  initHeroAnimations();
  initScrollAnimations();
  if (!prefersReducedMotion) {
    initFloatingShapes(); // Only run if user allows motion
  }

  initBookDemo();
  initBigOCards();
  initPhaseAnimations();
  initRoadmapAnimations();
  initDrawerNavigation();
  initOptimizedScrollEffects();
});

// ===================================
// Drawer Navigation (Mobile)
// ===================================

function initDrawerNavigation() {
  const drawer = document.getElementById("courseDrawer");
  const drawerToggle = document.getElementById("drawerToggle");
  const drawerToggleButton = document.getElementById("drawerToggleButton");
  if (!drawer) return;

  const drawerLinks = drawer.querySelectorAll("a.drawer-link");
  const drawerSections = drawer.querySelectorAll("[data-collapsible]");
  const lessonSections = document.querySelectorAll("[data-lesson-section]");

  drawerSections.forEach((section) => {
    const toggle = section.querySelector(".drawer-section-toggle");
    const links = section.querySelector(".drawer-links");
    if (!toggle || !links) return;

    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    links.hidden = !isExpanded;

    toggle.addEventListener("click", () => {
      const nextState = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(nextState));
      links.hidden = !nextState;
    });
  });

  const setDrawerCollapsed = (collapsed) => {
    document.body.classList.toggle("drawer-collapsed", collapsed);
    if (drawerToggle) {
      drawerToggle.setAttribute("aria-expanded", String(!collapsed));
    }
    if (drawerToggleButton) {
      drawerToggleButton.setAttribute("aria-expanded", String(!collapsed));
      drawerToggleButton.style.display = collapsed ? "inline-flex" : "none";
    }
  };

  if (drawerToggle) {
    drawerToggle.addEventListener("click", () => {
      setDrawerCollapsed(!document.body.classList.contains("drawer-collapsed"));
    });
  }

  if (drawerToggleButton) {
    drawerToggleButton.addEventListener("click", () => {
      setDrawerCollapsed(false);
    });
  }

  const setActiveLink = (hash) => {
    if (!hash) return;
    drawerLinks.forEach((link) => {
      const linkHash = link.getAttribute("href")?.split("#")[1];
      const isActive = linkHash && `#${linkHash}` === hash;
      link.classList.toggle("active", Boolean(isActive));
    });
  };

  if (window.location.hash) {
    setActiveLink(window.location.hash);
  } else if (lessonSections.length > 0) {
    setActiveLink(`#${lessonSections[0].id}`);
  }

  if (lessonSections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.2 },
    );

    lessonSections.forEach((section) => observer.observe(section));
  }

  window.addEventListener("hashchange", () => {
    if (window.location.hash) {
      setActiveLink(window.location.hash);
    }
  });

  setDrawerCollapsed(document.body.classList.contains("drawer-collapsed"));
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
      "-=400",
    )
    .add(
      {
        targets: ".hero-subtitle",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      },
      "-=600",
    )
    .add(
      {
        targets: ".phase-card",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
      },
      "-=400",
    )
    .add(
      {
        targets: ".cta-button",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
      },
      "-=300",
    )
    .add(
      {
        targets: ".scroll-indicator",
        opacity: [0, 0.7],
        duration: 1000,
      },
      "-=200",
    );
}

// ===================================
// Floating Background Shapes (Optimized)
// ===================================

function initFloatingShapes() {
  const shapes = document.querySelectorAll(".shape");

  // Use CSS animations instead for better performance
  // Only animate the first 3 shapes to reduce load
  shapes.forEach((shape, index) => {
    if (index > 2) {
      // Skip animation for extra shapes
      return;
    }

    // Longer durations = less CPU usage
    const duration = 20000 + index * 5000;

    anime({
      targets: shape,
      translateX: [0, anime.random(-20, 20), 0],
      translateY: [0, anime.random(-20, 20), 0],
      duration: duration,
      easing: "easeInOutSine", // Simpler easing
      loop: true,
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
            ".def-card, .step, .topic-item",
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
    },
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
    { threshold: 0.5 },
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
            scale: [0.5, 1],
            opacity: [0, 1],
            duration: 600,
            easing: "easeOutCubic", // Simpler easing, better performance
          });
          bigOObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
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
              rotate: () => anime.random(-30, 30),
              translateX: () => anime.random(-8, 8),
              translateY: () => anime.random(-4, 4),
              duration: 500,
              delay: anime.stagger(40),
              easing: "easeOutCubic", // Simpler easing
            });

            // Animate fast/sorted pile
            anime({
              targets: fastBooks,
              rotate: 0,
              translateX: 0,
              translateY: 0,
              duration: 600,
              delay: anime.stagger(40, { start: 200 }),
              easing: "easeOutCubic",
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(demo);
  });
}

// ===================================
// Big-O Cards Hover Animation (Optimized)
// ===================================

function initBigOCards() {
  const cards = document.querySelectorAll(".big-o-card");

  // Use CSS for hover effects instead of JS (much more performant)
  // The hover animation is now handled via CSS transitions
  // See styles.css .bar transition

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
              duration: 600,
              delay: anime.stagger(100),
              easing: "easeOutCubic",
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
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
// Navbar Background on Scroll (Optimized)
// ===================================

// Removed - now handled in initOptimizedScrollEffects()

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
      { threshold: 0.5 },
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
                "-=400",
              )
              .add(
                {
                  targets: ".phase-description",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=500",
              )
              .add(
                {
                  targets: ".topic-tag",
                  opacity: [0, 1],
                  scale: [0.8, 1],
                  duration: 400,
                  delay: anime.stagger(50),
                },
                "-=300",
              );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
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
      { threshold: 0.5 },
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
                "-=400",
              )
              .add(
                {
                  targets: ".phase-complete p",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=400",
              )
              .add(
                {
                  targets: ".next-phase",
                  opacity: [0, 1],
                  translateY: [20, 0],
                  duration: 600,
                },
                "-=300",
              );

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
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
    { threshold: 0.2 },
  );

  observer.observe(roadmap);
}

// ===================================
// Optimized Scroll Effects (Throttled with RAF)
// ===================================

function initOptimizedScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const heroContent = document.querySelector(".hero-content");
  const shapes = document.querySelectorAll(".shape");

  let ticking = false;
  let lastScrollY = 0;

  function updateScrollEffects() {
    const scrolled = lastScrollY;

    // Navbar background
    if (navbar) {
      if (scrolled > 100) {
        navbar.style.background = "rgba(10, 14, 23, 0.95)";
      } else {
        navbar.style.background = "rgba(10, 14, 23, 0.8)";
      }
    }

    // Hero parallax (only if not reduced motion and in view)
    if (!prefersReducedMotion && heroContent && scrolled < window.innerHeight) {
      heroContent.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
      heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.8;
    }

    // Shape parallax (simplified - only first 2 shapes)
    if (!prefersReducedMotion && scrolled < window.innerHeight) {
      shapes.forEach((shape, index) => {
        if (index > 1) return; // Only animate first 2 shapes on scroll
        const speed = 0.05 + index * 0.03;
        shape.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
      });
    }

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      lastScrollY = window.pageYOffset;

      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    },
    { passive: true },
  );
}
