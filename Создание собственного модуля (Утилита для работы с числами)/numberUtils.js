function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function factorial(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function findPrimesInRange(min, max) {
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = {
    isPrime,
    factorial,
    findPrimesInRange
};