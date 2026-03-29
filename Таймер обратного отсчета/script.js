let timerId;
let remainingSeconds;
let isRunning = false;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer(count = remainingSeconds) {
    if (isNaN(count) || count <= 0) return;

    remainingSeconds = count;
    document.getElementById("display").textContent = formatTime(remainingSeconds);
    document.getElementById("title").textContent = "Таймер запущен";

    clearInterval(timerId);
    isRunning = true;

    timerId = setInterval(() => {
        remainingSeconds--;
        document.getElementById("display").textContent = formatTime(remainingSeconds);

        if (remainingSeconds <= 0) {
            clearInterval(timerId);
            isRunning = false;
            document.getElementById("title").textContent = "Время вышло!";
            alert("Время вышло!");
        }
    }, 1000);
}

document.getElementById("startBtn").addEventListener("click", () => {
     const input = parseInt(document.getElementById("secondsInput").value, 10);

    if (isNaN(input) || input <= 0) {
        alert("Введите корректное количество секунд");
        return;
    }

    startTimer(input);
});

document.getElementById("stopBtn").addEventListener("click", () => {
    clearInterval(timerId);
    isRunning = false;
    document.getElementById("title").textContent = "Таймер остановлен";
});

document.getElementById("resumeBtn").addEventListener("click", () => {
    if (!isRunning && remainingSeconds > 0) {
        startTimer(remainingSeconds);
        document.getElementById("title").textContent = "Таймер продолжается";
    }
});