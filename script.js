// ============================================================
// HEADER - scroll effect & mobile menu
// ============================================================
const header = document.getElementById('main-header');
const mobileMenu = document.getElementById('mobile-menu');
const menuBtn = document.getElementById('menu-btn');
const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');

// Scroll effect
window.addEventListener('scroll', () => {
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
      header.classList.remove('header-top');
    } else {
      header.classList.remove('header-scrolled');
      header.classList.add('header-top');
    }
  }
});

// Mobile menu toggle
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    if (menuIconOpen) menuIconOpen.style.display = isOpen ? 'none' : 'block';
    if (menuIconClose) menuIconClose.style.display = isOpen ? 'block' : 'none';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

// Close menu on nav link click
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (menuIconOpen) menuIconOpen.style.display = 'block';
    if (menuIconClose) menuIconClose.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// Mark active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('[data-nav-path]').forEach(link => {
  const path = link.getAttribute('data-nav-path');
  const isActive = (path === '/' && (currentPath === '/' || currentPath === '/index.html'))
    || (path !== '/' && currentPath.endsWith(path));
  if (isActive) link.classList.add('active');
});

// ============================================================
// COOKIE BANNER
// ============================================================
const cookieBanner = document.getElementById('cookie-banner');
const cookieKey = 'bp2c_cookie_consent';

if (cookieBanner && !localStorage.getItem(cookieKey)) {
  setTimeout(() => cookieBanner.classList.add('visible'), 800);
}

function acceptCookies() {
  localStorage.setItem(cookieKey, 'accepted');
  if (cookieBanner) cookieBanner.classList.remove('visible');
}
function rejectCookies() {
  localStorage.setItem(cookieKey, 'rejected');
  if (cookieBanner) cookieBanner.classList.remove('visible');
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(title, desc) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.querySelector('.toast-title').textContent = title;
  toast.querySelector('.toast-desc').textContent = desc;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 4000);
}

// ============================================================
// CONTACT FORMS
// ============================================================
document.querySelectorAll('form[data-contact-form]').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    data.date = new Date().toISOString();
    const contacts = JSON.parse(localStorage.getItem('bp2c_contacts') || '[]');
    contacts.push(data);
    localStorage.setItem('bp2c_contacts', JSON.stringify(contacts));
    showToast('Message envoyé !', 'Nous vous contacterons dans les plus brefs délais.');
    form.reset();
  });
});

// ============================================================
// FAQ ACCORDION
// ============================================================
document.querySelectorAll('.faq-btn').forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector('.faq-icon');
    const question = btn.querySelector('.faq-question');
    const isOpen = answer.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('text-blue-600');
      q.classList.add('text-slate-900');
    });
    document.querySelectorAll('.faq-icon').forEach(ic => {
      ic.classList.remove('bg-blue-100', 'text-blue-600');
      ic.classList.add('bg-slate-100', 'text-slate-500');
      ic.querySelector('.icon-minus').style.display = 'none';
      ic.querySelector('.icon-plus').style.display = 'block';
    });

    // Toggle clicked
    if (!isOpen) {
      answer.classList.add('open');
      question.classList.add('text-blue-600');
      question.classList.remove('text-slate-900');
      icon.classList.add('bg-blue-100', 'text-blue-600');
      icon.classList.remove('bg-slate-100', 'text-slate-500');
      icon.querySelector('.icon-minus').style.display = 'block';
      icon.querySelector('.icon-plus').style.display = 'none';
    }
  });

  // Open first by default
  if (i === 0) btn.click();
});

// ============================================================
// SMOOTH SCROLL for anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden-reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => {
  el.classList.add('hidden-reveal');
  revealObserver.observe(el);
});
