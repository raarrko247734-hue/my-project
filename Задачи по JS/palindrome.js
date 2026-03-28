const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-za-яё0-9]/gi, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

rl.question('Введите строку для проверки на палиндром: ', (input) => {
    if (isPalindrome(input)) {
        console.log('Это палиндром!');
    } else {
        console.log('Это не палиндром.');
    }
    rl.close();
});