// ===== TROCA DE TEMA =====
const themeToggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');
const icon = themeToggle.querySelector('i');

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  icon.classList.replace('fa-moon', 'fa-sun');
} else {
  document.documentElement.removeAttribute('data-theme');
  icon.classList.replace('fa-sun', 'fa-moon');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.hasAttribute('data-theme');
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});

// ===== INICIALIZAR =====
document.querySelectorAll('.post').forEach(initPostEvents);