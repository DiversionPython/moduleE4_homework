/* Задача №4 */

function outputNumbers(num1, num2) {
    let timerId = setInterval(function() {
        console.log(num1), num1++;
        if (num1 == num2+1) {
            clearInterval(timerId);
        }

    }, 1000);
}

outputNumbers(5, 15);
