// ============================================================
// perfil.js — INTERACCIÓN DINÁMICA DE CADA PERFIL
// Botón "Revelar un dato random": muestra/oculta un dato curioso
// personal sin recargar la página, tomando el texto desde el
// atributo data-fact definido en cada perfil.
// ============================================================

function revelarDato(boton) {
  const texto = boton.nextElementSibling;
  if (!texto || !texto.classList.contains('fun-fact-text')) return;

  const visible = texto.classList.toggle('visible');

  if (visible && !texto.textContent.trim()) {
    texto.textContent = texto.dataset.fact || '[COMPLETAR dato random]';
  }

  boton.textContent = visible ? '🙈 Ocultar dato' : '🎲 Revelar un dato random';
}
