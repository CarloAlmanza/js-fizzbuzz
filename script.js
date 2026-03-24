for (let i = 1; i <= 100; i++) { //ciclo numeri da 1 a 100

    if (i % 3 === 0 && i % 5 === 0) { //calcolo numeri divisibili sia per 3 che per 5
        console.log('FizzBuzz');
    } else if (i % 3 === 0) { //calcolo numeri divisibili per 3
        console.log('Fizz');
    } else if (i % 5 === 0) { //calcolo numeri divisibili per 5
        console.log('Buzz');
    } else { //numeri che se divisi per 3 o per 5, il resto non fa 0
        console.log(i);
    }
}