function sumOddFibs(num) {
    let sumOfOdds = 0;
    let fib1 = 0;
    let fib2 = 1;

    while (fib1 <= num) {
        if (fib1 % 2 !== 0) {

            sumOfOdds += fib1;
        }

        const temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;
    }

    return sumOfOdds;
}

module.exports = sumOddFibs;