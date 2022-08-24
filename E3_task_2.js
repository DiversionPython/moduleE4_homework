function primeNumber(num) {
    let isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
            } else if (num > 1000) {
                return console.log('Данные неверны');
            }
        }
        if (isPrime == true) {
            return console.log('Число простое ');
        }
    }
}

primeNumber(55);