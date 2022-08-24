/* Модуль E3. Функции */

/* Задача №1 */

function checkingElements() {
    const array2 = [null, NaN, '.', '0', '2', '3', 'str', true, false, 1, 2, 3, 4, 4, 6, 5, 0, 0, 7];
    let even_numbers = 0;
    let odd_numbers = 0;
    let zero = 0;

    for (let i = 0; i < array2.length; i++) {
        if (typeof array2[i] == 'number' &&  !isNaN(array2[i])) {
            if (array2[i] % 2 === 0 && array2[i] > 0) {
                even_numbers += 1;
            } else if (array[i] === 0){
                zero += 1;
            } else  {
                odd_numbers += 1 ;
            }
        }
    }
    console.log('чётных: ', even_numbers, 'нечётных: ', odd_numbers, 'нулей: ', zero)

}

checkingElements();