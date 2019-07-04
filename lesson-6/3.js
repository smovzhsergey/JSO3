/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3, 4, 5, 6];

// Решение

function every ( array, callback ) {
    
    if (arguments.length < 2) {
        throw new Error('The number of arguments must not be less than 2 !!!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array !!!')
    }

    if (typeof arguments[1] !== 'function') {
        throw new Error('The second argument must be an function !!!')
    }

    for ( let i = 0; i < array.length; i++ ) {
        if ( !callback(array[i], i, array) ) {
            return false;
        }
    }

    return true;
}

console.log( array, 'every item < 4' );
console.log( every(array, item => item < 4), 'function' );
console.log( array.every( item => item < 4), 'method' );

console.log('\n***************************\n');

const result = every(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'number';
});

console.log(result); // true

exports.every = every;
