const Parser = exprEval.Parser;;
// Подключение библиотеки expr-eval для вычисления математических выражений
let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.button'));
// Получение элементов дисплея и кнопок калькулятора
// Добавление обработчиков событий для каждой кнопки
buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    const parser = new Parser();
                    display.innerText = parser.evaluate(display.innerText);
                } catch {
                    display.innerText = "Error!";
                }
                break;
            case "+/-":
                if (display.innerText !== "0") {
                    // Найти последнее число в выражении
                    const expr = display.innerText;
                    const match = expr.match(/(-?\d+\.?\d*)$/);
                    if (match) {
                        const number = match[0];
                        // Поменять знак у последнего числа
                        const toggled = number.startsWith('-') ? number.slice(1) : '-' + number;
                        display.innerText = expr.slice(0, -number.length) + toggled;
                    }
                }
                break;
            case "%":
                display.innerText = String(parseFloat(display.innerText) / 100);
                break;
            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});