/* Задача №6 */

let array = [1, 1, 1, 1, 1, 4];
let answer = true;
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i+1]) {
        answer = false;
    }
}
console.log(answer)