const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Введите строку символов: ', (input) => {
    const length = input.length;

    console.log(`Количество символов в строке: ${length}`);
    rl.close();
});