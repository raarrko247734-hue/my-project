const numberUtils = require('./numberUtils');

const isPrime7 = numberUtils.isPrime(7);
console.log('7 простое?', isPrime7);
const isPrime10 = numberUtils.isPrime(10);
console.log('10 простое?', isPrime10);

console.log('Факториал 5:', numberUtils.factorial(5)); // 120

const primes = numberUtils.findPrimesInRange(1, 20);
console.log('Простые числа от 1 до 20:', primes);