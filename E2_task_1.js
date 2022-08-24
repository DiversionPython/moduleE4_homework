/* Модуль Модуль E2. Введение в JavaScript*/

/* Задача №1*/

let num= prompt('Введите значение ');
console.log(num);
num = (+num);
console.log(num)
console.log(typeof num)
if (typeof num == 'number' && num != NaN) {
    if (num == 0 ) {
        console.log('Вы ввели 0')
    } else if (num % 2 != 1) {
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
}
else {
    console.log('Упс, кажется, вы ошиблись')
}