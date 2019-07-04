/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter ( array, callback ) {
    
    if (arguments.length < 2) {
        throw new Error('The number of arguments must not be less than 2 !!!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array !!!')
    }

    if (typeof arguments[1] !== 'function') {
        throw new Error('The second argument must be an function !!!')
    }

    let result = [];

    for ( let i = 0; i < array.length; i++ ) {
        if ( callback(array[i], i, array) ) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(filter( array, ( item ) => typeof item === 'string' ) );
console.log(array.filter(( item ) => typeof item === 'string' ) );

console.log('\n***************************\n');
const numbers = [0, -2, 42, 96, 147, 14, 4, 87, 36];

console.log(numbers, '6 < number < 75');
console.log( filter( numbers, ( number ) => number > 6 && number < 75 ) );
console.log( numbers.filter(( number ) => number > 6 && number < 75 ) );


console.log('\n***************************\n');

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
