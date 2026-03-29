const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n < 0) return 'Факториал не определен для отрицательных чисел';
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

rl.question('Введите неотрицательное целое число для вычисления факториала: ', (input) => {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log('Пожалуйста, введите корректное число.');
    } else {
        const result = factorial(number);
        console.log(`Факториал ${number} равен ${result}`);
    }
    rl.close();
})