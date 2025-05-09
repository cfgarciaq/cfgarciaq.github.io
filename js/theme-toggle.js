/*
Consulta si hay un tema guardado en localStorage (dark o light). 
Si no lo hay, usa la preferencia del sistema.
Cambia el ícono del botón según el modo.
Guarda la preferencia en localStorage para futuras visitas.
*/

const toggleBtn = document.getElementById('theme-toggle');

// Aplicar modo almacenado al cargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '🌞';
} else if (savedTheme === 'light') {
  document.body.classList.remove('dark');
  toggleBtn.textContent = '🌙';
} else {
  // Si no hay preferencia guardada, usar la del sistema
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.body.classList.add('dark');
    toggleBtn.textContent = '🌞';
  }
}

// Al hacer clic, alternar tema y guardar
// window.matchMedia && ... Es un check de seguridad para comprobar que matchMedia es soportado  por el browser anted de tratar de usarlo (browsers viejos/no actuaizados podrian no soportarlo).
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  toggleBtn.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});