// Keripik Tempe Lancar Abadi - Interactions

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // Mobile Navigation
  // ==========================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navbar = document.getElementById('navbar');

  if (navToggle && navMenu) {

    const icon = navToggle.querySelector('i');

    // Fungsi untuk menutup menu
    const closeMenu = () => {
      navMenu.classList.remove('active');

      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
      }

      navToggle.setAttribute('aria-label', 'Buka menu');
    };

    // Fungsi untuk membuka / menutup menu
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();

      const isOpen = navMenu.classList.toggle('active');

      if (isOpen) {
        if (icon) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }

        navToggle.setAttribute('aria-label', 'Tutup menu');
      } else {
        closeMenu();
      }
    });

    // Tutup menu ketika link navigasi diklik
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // ==========================================
    // Tutup menu ketika klik di luar navbar
    // ==========================================
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Mencegah klik di dalam menu dianggap sebagai
    // klik di luar menu
    navMenu.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }


  // ==========================================
  // Navbar Scroll Effect
  // ==========================================
  const handleScroll = () => {
    if (!navbar) return;

    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();


  // ==========================================
  // Reveal-on-Scroll Animation
  // ==========================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  });

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });


  // ==========================================
  // Smooth Scrolling with Navbar Offset
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', (e) => {

      const targetId = anchor.getAttribute('href');

      if (targetId && targetId.length > 1) {

        const target = document.querySelector(targetId);

        if (target) {

          e.preventDefault();

          const navbarHeight = navbar ? navbar.offsetHeight : 0;

          const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight +
            1;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    });

  });

});
