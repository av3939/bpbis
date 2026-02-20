// BP2C - Shared Header & Footer Components

// ============================================================
// ICONS (Inline SVG)
// ============================================================
const ICONS = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 ml-2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  shieldCheck: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
};

// ============================================================
// HEADER HTML
// ============================================================
const navLinks = [
  { path: '/', label: 'Accueil', file: 'index.html' },
  { path: '/plomberie', label: 'Plomberie', file: 'plomberie.html' },
  { path: '/chauffage', label: 'Chauffage', file: 'chauffage.html' },
  { path: '/climatisation', label: 'Climatisation', file: 'climatisation.html' },
  { path: '/renovation', label: 'Rénovation', file: 'renovation.html' },
  { path: '/about', label: 'À propos', file: 'about.html' },
  { path: '/contact', label: 'Contact', file: 'contact.html' },
];

const mobileExtraLinks = [
  { path: '/faq', label: 'FAQ', file: 'faq.html' },
  { path: '/mentions-legales', label: 'Mentions Légales', file: 'mentions-legales.html' },
  { path: '/politique-confidentialite', label: 'Confidentialité', file: 'politique-confidentialite.html' },
];

function renderHeader() {
  const desktopNavHTML = navLinks.map(link =>
    `<a href="${link.file}" data-nav-path="${link.path}" class="nav-link">${link.label}</a>`
  ).join('');

  const mobileNavHTML = navLinks.map(link =>
    `<a href="${link.file}" data-nav-path="${link.path}" class="mobile-nav-link">
      <span style="display:flex;align-items:center;gap:12px">${link.label}</span>
      <span style="color:#94a3b8">${ICONS.chevronRight}</span>
    </a>`
  ).join('');

  const mobileExtraHTML = mobileExtraLinks.map(link =>
    `<a href="${link.file}" data-nav-path="${link.path}" class="mobile-nav-link" style="padding:12px 16px;font-size:0.875rem;color:#64748b">${link.label}</a>`
  ).join('');

  const headerHTML = `
<header id="main-header" class="header-top" style="position:fixed;top:0;left:0;right:0;z-index:40;transition:all 0.5s">
  <div class="container" style="padding:0 24px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <!-- Logo -->
      <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;position:relative;z-index:50">
        <div style="position:relative">
          <img src="https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg"
            alt="BP2C Logo" style="height:52px;width:auto;object-fit:contain;display:block;transition:transform 0.3s"
            onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        </div>
        <div style="display:flex;flex-direction:column">
          <span style="font-size:1.375rem;font-weight:800;color:#0f172a;line-height:1;letter-spacing:-0.02em">BP2C</span>
          <span style="font-size:0.65rem;font-weight:600;color:#2563eb;letter-spacing:0.15em;text-transform:uppercase">L'excellence de l'habitat</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-pill hide-mobile-menu" style="display:flex;align-items:center">
        ${desktopNavHTML}
      </nav>

      <!-- Right actions -->
      <div style="display:flex;align-items:center;gap:12px">
        <a href="tel:+33601761395" class="hide-mobile-menu"
          style="display:flex;align-items:center;gap:8px;background:#0f172a;color:white;padding:10px 20px;border-radius:9999px;font-weight:700;font-size:0.875rem;text-decoration:none;transition:all 0.3s"
          onmouseover="this.style.background='#1e293b'" onmouseout="this.style.background='#0f172a'">
          <span style="background:rgba(255,255,255,0.2);border-radius:50%;padding:4px;display:flex">${ICONS.phone}</span>
          <span>06 01 76 13 95</span>
        </a>
        <!-- Hamburger -->
        <button id="menu-btn" class="show-mobile-only" aria-label="Menu"
          style="background:#f1f5f9;border:none;border-radius:50%;padding:8px;cursor:pointer;position:relative;z-index:50;line-height:0;color:#0f172a">
          <span id="menu-icon-open">${ICONS.menu}</span>
          <span id="menu-icon-close" style="display:none">${ICONS.x}</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu">
    <div style="padding:16px 16px 0;flex-grow:1">
      <span style="font-size:0.65rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.15em;padding:0 16px;display:block;margin-bottom:8px">Menu Principal</span>
      ${mobileNavHTML}
      <div style="margin:24px 0;border-top:1px solid #f1f5f9"></div>
      <span style="font-size:0.65rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.15em;padding:0 16px;display:block;margin-bottom:8px">Informations</span>
      ${mobileExtraHTML}
    </div>
    <div style="padding:24px;background:#f8fafc;border-top:1px solid #f1f5f9;padding-bottom:96px">
      <a href="tel:+33601761395"
        style="display:flex;align-items:center;justify-content:center;gap:12px;background:#0f172a;color:white;width:100%;padding:16px;border-radius:12px;font-weight:700;font-size:1.125rem;text-decoration:none;margin-bottom:8px">
        ${ICONS.phone} Appeler maintenant
      </a>
      <p style="text-align:center;font-size:0.75rem;color:#94a3b8">Disponible 7j/7 pour vos urgences</p>
    </div>
  </div>
</header>`;

  const placeholder = document.getElementById('header-placeholder');
  if (placeholder) placeholder.outerHTML = headerHTML;
}

// ============================================================
// FOOTER HTML
// ============================================================
function renderFooter() {
  const year = new Date().getFullYear();

  const footerHTML = `
<footer style="background:#020617;color:#cbd5e1;position:relative;overflow:hidden;font-family:inherit">
  <!-- Top gradient bar -->
  <div style="position:absolute;top:0;left:0;width:100%;height:4px;background:linear-gradient(to right,#2563eb,#ea580c,#2563eb);opacity:0.8"></div>
  <!-- Glows -->
  <div style="position:absolute;top:-300px;right:-300px;width:600px;height:600px;background:rgba(37,99,235,0.05);border-radius:50%;filter:blur(120px);pointer-events:none"></div>
  <div style="position:absolute;top:20%;left:-200px;width:500px;height:500px;background:rgba(234,88,12,0.05);border-radius:50%;filter:blur(100px);pointer-events:none"></div>

  <div class="container" style="padding:96px 24px 48px;position:relative;z-index:1">
    <div class="footer-grid">
      <!-- Brand col -->
      <div class="footer-brand" style="max-width:340px">
        <a href="index.html">
          <img src="https://horizons-cdn.hostinger.com/9fba43ae-9eea-4a9f-ab35-d6031519a866/68152e58c9d593adbe9e03b8d75dedcd.jpg"
            alt="BP2C" style="height:56px;width:auto;filter:brightness(0) invert(1);opacity:0.9;margin-bottom:20px;display:block">
        </a>
        <p style="color:#64748b;line-height:1.7;font-size:0.9rem;margin-bottom:24px">
          Expertise et passion au service de votre habitat à Fréjus et ses environs. Plomberie, chauffage, climatisation et rénovation de salle de bain par des artisans certifiés.
        </p>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px">
          <div style="display:flex;align-items:center;gap:12px;font-size:0.875rem;color:#64748b">
            <span style="color:#22c55e">${ICONS.shieldCheck}</span> Garantie Décennale
          </div>
          <div style="display:flex;align-items:center;gap:12px;font-size:0.875rem;color:#64748b">
            <span style="color:#f97316">${ICONS.clock}</span> Intervention 7j/7 (Urgences)
          </div>
        </div>
        <div style="display:flex;gap:12px">
          ${['facebook','instagram','linkedin'].map(s => `
            <a href="#" style="width:44px;height:44px;border-radius:12px;background:#0f172a;border:1px solid #1e293b;display:flex;align-items:center;justify-content:center;color:#64748b;text-decoration:none;transition:all 0.3s"
              onmouseover="this.style.background='#2563eb';this.style.color='white'" onmouseout="this.style.background='#0f172a';this.style.color='#64748b'">
              ${ICONS[s]}
            </a>
          `).join('')}
        </div>
      </div>

      <!-- Services -->
      <div>
        <h3 style="color:white;font-size:1.125rem;font-weight:700;margin-bottom:32px;position:relative;padding-bottom:12px">
          Nos Services
          <span style="position:absolute;bottom:-2px;left:0;width:48px;height:4px;background:#2563eb;border-radius:4px"></span>
        </h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:14px">
          ${[['Plomberie d\'urgence','plomberie.html'],['Chauffage & Chaudières','chauffage.html'],['Climatisation Gainable','climatisation.html'],['Rénovation Salle de Bain','renovation.html'],['Recherche de fuite','plomberie.html'],['Entretien annuel','chauffage.html']].map(([n,f]) => `
            <li><a href="${f}" style="color:#64748b;text-decoration:none;font-size:0.9rem;transition:color 0.2s;display:flex;align-items:center;gap:8px"
              onmouseover="this.style.color='white'" onmouseout="this.style.color='#64748b'">
              <span style="width:6px;height:6px;border-radius:50%;background:#2563eb;flex-shrink:0;opacity:0;transition:opacity 0.2s" class="footer-dot"></span>
              ${n}
            </a></li>
          `).join('')}
        </ul>
      </div>

      <!-- Entreprise -->
      <div>
        <h3 style="color:white;font-size:1.125rem;font-weight:700;margin-bottom:32px;position:relative;padding-bottom:12px">
          Entreprise
          <span style="position:absolute;bottom:-2px;left:0;width:48px;height:4px;background:#ea580c;border-radius:4px"></span>
        </h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:14px">
          ${[['À propos','about.html'],['Contact','contact.html'],['FAQ','faq.html'],['Mentions Légales','mentions-legales.html'],['Confidentialité','politique-confidentialite.html']].map(([n,f]) => `
            <li><a href="${f}" style="color:#64748b;text-decoration:none;font-size:0.9rem;transition:color 0.2s"
              onmouseover="this.style.color='white'" onmouseout="this.style.color='#64748b'">${n}</a></li>
          `).join('')}
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 style="color:white;font-size:1.125rem;font-weight:700;margin-bottom:32px;position:relative;padding-bottom:12px">
          Nous Contacter
          <span style="position:absolute;bottom:-2px;left:0;width:48px;height:4px;background:white;border-radius:4px"></span>
        </h3>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:24px">
          <li style="display:flex;align-items:flex-start;gap:16px">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#60a5fa">${ICONS.mapPin}</div>
            <div>
              <span style="font-size:0.65rem;color:#475569;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Adresse</span>
              <p style="color:#cbd5e1;margin-top:4px;line-height:1.5;font-size:0.9rem">160 Rue du Thoron<br>83600 Fréjus</p>
            </div>
          </li>
          <li style="display:flex;align-items:flex-start;gap:16px">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#60a5fa">${ICONS.phone}</div>
            <div>
              <span style="font-size:0.65rem;color:#475569;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Téléphone</span>
              <p style="margin-top:4px"><a href="tel:+33601761395" style="font-size:1.125rem;font-weight:700;color:white;text-decoration:none;transition:color 0.2s"
                onmouseover="this.style.color='#60a5fa'" onmouseout="this.style.color='white'">06 01 76 13 95</a></p>
            </div>
          </li>
          <li style="display:flex;align-items:flex-start;gap:16px">
            <div style="width:44px;height:44px;border-radius:12px;background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#60a5fa">${ICONS.mail}</div>
            <div>
              <span style="font-size:0.65rem;color:#475569;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Email</span>
              <p style="margin-top:4px"><a href="mailto:contact@bp2c.net" style="color:#cbd5e1;text-decoration:none;font-size:0.875rem;transition:color 0.2s"
                onmouseover="this.style.color='#60a5fa'" onmouseout="this.style.color='#cbd5e1'">contact@bp2c.net</a></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom bar -->
    <div style="border-top:1px solid #0f172a;padding-top:32px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;font-size:0.8rem;color:#475569">
      <p>© ${year} BP2C. Tous droits réservés. | SIRET: 93409778300013</p>
      <span>Artisanat Français 🇫🇷</span>
    </div>
  </div>
</footer>`;

  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = footerHTML;
}

// ============================================================
// COOKIE BANNER HTML
// ============================================================
function renderCookieBanner() {
  const html = `
<div id="cookie-banner">
  <div class="container" style="padding:0 24px">
    <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px">
      <div>
        <p style="font-weight:700;color:white;margin-bottom:4px">Nous respectons votre vie privée</p>
        <p style="font-size:0.8rem;color:#64748b">Nous utilisons des cookies pour améliorer votre expérience (RGPD).</p>
      </div>
      <div style="display:flex;gap:12px;flex-shrink:0">
        <button onclick="rejectCookies()" style="padding:8px 20px;border-radius:8px;background:#1e293b;color:#94a3b8;border:1px solid #334155;cursor:pointer;font-weight:600;font-size:0.875rem">Refuser</button>
        <button onclick="acceptCookies()" style="padding:8px 20px;border-radius:8px;background:#2563eb;color:white;border:none;cursor:pointer;font-weight:600;font-size:0.875rem">Accepter</button>
      </div>
    </div>
  </div>
</div>`;

  const placeholder = document.getElementById('cookie-banner-placeholder');
  if (placeholder) placeholder.outerHTML = html;
}

// ============================================================
// EMERGENCY BUTTON
// ============================================================
function renderEmergencyBtn() {
  const html = `
<a href="tel:+33601761395" id="emergency-btn" title="Urgence 24/7">
  <span style="position:relative;display:flex">
    <span style="position:absolute;inset:0;border-radius:50%;background:rgba(249,115,22,0.4);animation:ping 2s cubic-bezier(0,0,.2,1) infinite"></span>
    <span style="position:relative;display:inline-flex;width:10px;height:10px;border-radius:50%;background:#f97316"></span>
  </span>
  <span style="display:flex;flex-direction:column;line-height:1.2">
    <span style="font-size:0.7rem;opacity:0.8">Urgence 24/7</span>
    <span>06 01 76 13 95</span>
  </span>
</a>`;

  const placeholder = document.getElementById('emergency-btn-placeholder');
  if (placeholder) placeholder.outerHTML = html;
}

// ============================================================
// TOAST HTML
// ============================================================
function renderToast() {
  const html = `
<div id="toast">
  <div class="toast-title"></div>
  <div class="toast-desc"></div>
</div>`;

  const placeholder = document.getElementById('toast-placeholder');
  if (placeholder) placeholder.outerHTML = html;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  renderHeader();
  renderFooter();
  renderCookieBanner();
  renderEmergencyBtn();
  renderToast();

  // MOBILE MENU TOGGLE (correct execution order)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

      mobileMenu.classList.toggle("open");

      const isOpen = mobileMenu.classList.contains("open");

      if (iconOpen && iconClose) {
        iconOpen.style.display = isOpen ? "none" : "block";
        iconClose.style.display = isOpen ? "block" : "none";
      }

    });

  }

});