const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateFibonacci(n) {
    const sequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            sequence.push(0);
        } else if (i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}

rl.question('Введите число n: ', (input) => {
    const n = parseInt(input);
    if (isNaN(n) || n < 1) {
        console.log('Пожалуйста, введите положительное целое число.');
    } else {
        const fibonacci = generateFibonacci(n);
        console.log(`Первые ${n} чисел Фибоначчи:`);
        console.log(fibonacci.join(', '));
    }
    rl.close();
});