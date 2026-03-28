const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));

if (userGuess === randomNumber) {
    alert("Поздравляю! Ты угадал число.");
} else {
    alert(`К сожалению, ты не угадал. Загаданное число было ${randomNumber}.`);
}
const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", function() {
    location.reload();
    alert("Игра началась заново! Угадайте число от 1 до 10:");
}
);