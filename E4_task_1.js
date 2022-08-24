/* Модуль E4. Объекты */
// Задание 1.
function keyObj(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        }
    }
}

// const person = {
//     city: "Moscow"
// }
// const dog = Object.create(person);
// dog.name = 'Lisa'
// dog. breed = 'Pudel'
// dog.age = '1'
// console.log(dog.city);

// keyObj(dog);
