// ============================================
// Riad Amirat Al Jamal — Interactive Scripts
// Pure vanilla JavaScript, no frameworks
// ============================================

(function () {
  'use strict';

  // ============================================
  // Navbar scroll effect
  // ============================================
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ============================================
  // Mobile navigation toggle
  // ============================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ============================================
  // Active nav link on scroll
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkEls.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ============================================
  // Scroll reveal animation
  // ============================================
  const revealElements = document.querySelectorAll(
    '.room-card, .amenity-card, .gallery-item, .about-image, .about-content, .contact-item, .contact-form-wrapper'
  );

  revealElements.forEach(function (el) {
    el.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ============================================
  // Testimonials slider
  // ============================================
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
  let currentTestimonial = 0;
  let testimonialInterval;

  function showTestimonial(index) {
    testimonialCards.forEach(function (card, i) {
      card.classList.toggle('active', i === index);
    });
    testimonialDots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === index);
    });
    currentTestimonial = index;
  }

  function nextTestimonial() {
    showTestimonial((currentTestimonial + 1) % testimonialCards.length);
  }

  function startTestimonialAutoPlay() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
  }

  function stopTestimonialAutoPlay() {
    clearInterval(testimonialInterval);
  }

  testimonialDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      stopTestimonialAutoPlay();
      showTestimonial(parseInt(dot.dataset.index, 10));
      startTestimonialAutoPlay();
    });
  });

  if (testimonialCards.length > 0) {
    startTestimonialAutoPlay();
  }

  // ============================================
  // Booking form : géré entièrement dans booking.js (connexion Nozoul)
  // ============================================

  // ============================================
  // Contact form
  // ============================================
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      formSuccess.style.display = 'flex';
    });
  }

  // ============================================
  // Gallery Lightbox
  // ============================================
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');

  if (galleryItems.length > 0 && lightbox) {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    const images = galleryItems.map(function (item) {
      // src de l'image affichée : valable en local comme après le build Vite
      return item.querySelector('img').src || item.getAttribute('data-full');
    });

    let currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      updateLightboxImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightboxImage() {
      const alt = galleryItems[currentIndex].querySelector('img').getAttribute('alt') || 'Riad Amirat Al Jamal';
      lightboxImage.setAttribute('src', images[currentIndex]);
      lightboxImage.setAttribute('alt', alt);
      lightboxCounter.textContent = (currentIndex + 1) + ' / ' + images.length;
    }

    function showPrev() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateLightboxImage();
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      updateLightboxImage();
    }

    galleryItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        openLightbox(index);
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);
    if (lightboxNext) lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  // ============================================
  // Dining menu flipbook — book-style page turner
  // ============================================
  const bookEl = document.getElementById('bookEl');

  if (bookEl) {
    const pages = Array.from(bookEl.querySelectorAll('.book-page-wrap'));
    const prevBtn = document.getElementById('bookPrev');
    const nextBtn = document.getElementById('bookNext');
    const currentLabel = document.getElementById('bookPageCurrent');
    const totalLabel = document.getElementById('bookPageTotal');
    const FLIP_DURATION = 650;

    let currentIndex = pages.findIndex(function (page) {
      return page.classList.contains('is-active');
    });
    if (currentIndex < 0) currentIndex = 0;
    let isFlipping = false;

    if (totalLabel) totalLabel.textContent = String(pages.length);

    function updateControls() {
      if (currentLabel) currentLabel.textContent = String(currentIndex + 1);
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex === pages.length - 1;
    }

    function goToPage(newIndex, direction) {
      if (isFlipping) return;
      if (newIndex < 0 || newIndex >= pages.length || newIndex === currentIndex) return;

      const outgoing = pages[currentIndex];
      const incoming = pages[newIndex];
      const dirClass = direction === 'next' ? 'dir-next' : 'dir-prev';

      isFlipping = true;

      // Position the incoming page just off-screen (edge-on), no transition yet.
      incoming.classList.add('is-prep', dirClass);
      // Force a reflow so that edge-on position is committed as the starting point.
      void incoming.offsetWidth;

      outgoing.classList.remove('is-active');
      outgoing.classList.add('is-turning-out', dirClass);

      // Next frame: drop the "no transition" prep state and flip to active,
      // so the incoming page animates in from the edge instead of snapping.
      requestAnimationFrame(function () {
        incoming.classList.remove('is-prep');
        incoming.classList.add('is-active');
      });

      setTimeout(function () {
        outgoing.classList.remove('is-turning-out', 'dir-next', 'dir-prev');
        incoming.classList.remove('dir-next', 'dir-prev');
        isFlipping = false;
      }, FLIP_DURATION);

      currentIndex = newIndex;
      updateControls();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goToPage(currentIndex - 1, 'prev');
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        goToPage(currentIndex + 1, 'next');
      });
    }

    document.addEventListener('keydown', function (e) {
      const book = document.getElementById('menuBook');
      if (!book) return;
      const rect = book.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;
      if (e.key === 'ArrowLeft') goToPage(currentIndex - 1, 'prev');
      if (e.key === 'ArrowRight') goToPage(currentIndex + 1, 'next');
    });

    updateControls();
  }

  // ============================================
  // Smooth scroll for anchor links (fallback)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = navbar.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
