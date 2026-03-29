const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
}  
themeToggle.addEventListener('change', function() {
    if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    }
});