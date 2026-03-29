const toggleButton = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  toggleButton.textContent = 'Светлая тема';
} else {
  toggleButton.textContent = 'Темная тема';
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Светлая тема';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = 'Темная тема';
    localStorage.setItem('theme', 'light');
  }
});