// ============================================================
// main.js — funciones compartidas por todas las páginas
// ============================================================

// --- Menú hamburguesa (responsive, todas las páginas) ---
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('nav.main-nav ul');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('open');
      const isOpen = navList.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // Marca el link activo según la página actual
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav a').forEach(link => {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  // Si estamos en una página de perfil, resalta también el botón "Perfiles"
  if (current.startsWith('perfil-')) {
    const toggle = document.querySelector('.submenu-toggle');
    if (toggle) toggle.classList.add('active');
  }

  // --- Submenú "Perfiles": clic para abrir/cerrar (funciona en mobile y desktop) ---
  const submenuItem = document.querySelector('li.has-submenu');
  const submenuToggle = document.querySelector('.submenu-toggle');

  if (submenuItem && submenuToggle) {
    submenuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = submenuItem.classList.toggle('open');
      submenuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Cierra el submenú al hacer clic en cualquier otro lugar de la página
    document.addEventListener('click', () => {
      submenuItem.classList.remove('open');
      submenuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // --- Modo claro / oscuro ---
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    actualizarIconoTema(themeToggle);
    themeToggle.addEventListener('click', () => {
      const actual = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const nuevo = actual === 'dark' ? 'light' : 'dark';

      if (nuevo === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem('theme', nuevo);
      actualizarIconoTema(themeToggle);
    });
  }
});

function actualizarIconoTema(boton) {
  const esOscuro = document.documentElement.getAttribute('data-theme') === 'dark';
  boton.textContent = esOscuro ? '☀️' : '🌙';
  boton.setAttribute('aria-label', esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

// ============================================================
// INTERACCIÓN DINÁMICA DE LA PORTADA
// Buscador en vivo: filtra las tarjetas de integrantes por
// nombre o por habilidad mientras el usuario escribe.
// ============================================================
function filtrarIntegrantes() {
  const input = document.getElementById('buscador-equipo');
  const contador = document.getElementById('contador-resultados');
  if (!input) return;

  const texto = input.value.trim().toLowerCase();
  const tarjetas = document.querySelectorAll('.member-card');
  let visibles = 0;

  tarjetas.forEach(tarjeta => {
    const datos = (tarjeta.dataset.search || '').toLowerCase();
    const coincide = datos.includes(texto);
    tarjeta.style.display = coincide ? '' : 'none';
    if (coincide) visibles++;
  });

  if (contador) {
    contador.textContent = texto === ''
      ? `Mostrando los ${tarjetas.length} integrantes del equipo`
      : `${visibles} resultado${visibles === 1 ? '' : 's'} para "${input.value}"`;
  }
}
