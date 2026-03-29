const input = document.getElementById('username');
const message = document.getElementById('message');
const form = document.getElementById('userForm');   

input.addEventListener('input', () => {
    const value = input.value.trim();

    if (value.length < 3) {
        message.textContent = 'Имя должно содержать минимум 3 символа';
        message.className = 'error';
    } else if (!/\d/.test(value)) {
        message.textContent = 'Имя не должно содержать цифры';
        message.className = 'error';
    } else {
        message.textContent = 'Валидное имя';
        message.className = 'valid';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim();

    if (value.length >= 3) {
        alert(`Имя пользователя: ${value}`);
    }
});