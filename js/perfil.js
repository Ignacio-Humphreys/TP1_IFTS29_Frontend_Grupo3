// Dato random en los perfiles
function revelarDato(boton) {
  const texto = boton.nextElementSibling;
  if (!texto || !texto.classList.contains('fun-fact-text')) return;

  const visible = texto.classList.toggle('visible');

  if (visible && !texto.textContent.trim()) {
    texto.textContent = texto.dataset.fact || '[COMPLETAR dato random]';
  }

  boton.textContent = visible ? '🙈 Ocultar dato' : '🎲 Revelar un dato random';
}
