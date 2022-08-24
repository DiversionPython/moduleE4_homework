/* Задача №3 */

function acceptNumber(a) {
    return function (b) {
        return a + b
    }
}

const sumNumbers = acceptNumber(4);
console.log(sumNumbers);
let result = sumNumbers(5);

console.log(result);
