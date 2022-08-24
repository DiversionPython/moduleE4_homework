/* Задача №2 */

let x;
if (typeof x == 'number') {
    console.log('x - это число')
} else if (typeof x == 'string') {
    console.log('x - это строка')
} else if (typeof x == 'boolean') {
    console.log('x - логического типа')
} else {
    console.log('Тип x не определён')
}