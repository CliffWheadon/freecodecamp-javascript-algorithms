const sumPrimes = function sumPrimes(num) {
    let sum = 0;
    let counter = 2;

    while(counter <= num ) {
        if (isPrime(counter)) {
            sum += counter;
        }

        counter++;
    }

    return sum;
};

function isPrime(num) {
    if (num === 2) {
        return true;
    } else if (num === 3) {
        return true;
    } if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(num); i+=2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = sumPrimes;