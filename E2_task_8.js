/* Задача №8 */

let cars = new Map()
cars.set("Japan", "Mitsubishi");
cars.set("USA", "Ford");
cars.set("China", "Chery");


for (let country of cars.keys()) {
    console.log(`Ключ - ${country}, значение - ${cars.get(country)}`);
}
