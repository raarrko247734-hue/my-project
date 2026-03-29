const button = document.getElementById('smartButton');
const resetButton = document.getElementById('resetButton');

let clickCount = loadClickCount();
updateButtonText(clickCount);

button.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetClickCount);

function loadClickCount() {
    return parseInt(localStorage.getItem('clickCount')) || 0;
}

function updateButtonText(count) {
    button.textContent = count > 0 ? `Кликов: ${count}` : 'Нажми меня';
}

function handleClick() {
    clickCount++;
    updateButtonText(clickCount);
    localStorage.setItem('clickCount', clickCount);
    changeBackgroundColor();
}

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function resetClickCount() {
    clickCount = 0;
    localStorage.removeItem('clickCount');
    updateButtonText(clickCount);
    document.body.style.backgroundColor = '#ffffff';
}