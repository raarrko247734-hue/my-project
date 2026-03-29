const emailInput = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === "") {
    emailInput.classList.remove('valid', 'invalid');
    message.textContent = "";
    submitBtn.disabled = true;
    return;
  }

  if (value.includes('@')) {
    emailInput.classList.add('valid');
    emailInput.classList.remove('invalid');
    message.textContent = "Email корректен";
    message.className = "message success";
    submitBtn.disabled = false;
  } else {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    message.textContent = "Введите корректный email";
    message.className = "message error";
    submitBtn.disabled = true;
  }
}

emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);

document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Форма успешно отправлена!");
});
