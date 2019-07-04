/**
 * Задача 4.
 *
 * Вручную создать имплементацию функции `some`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 'Добро пожаловать.', 4, 5, 6];

// Решение

function some ( array, callback ) {
    
    if (arguments.length < 2) {
        throw new Error('The number of arguments must not be less than 2 !!!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array !!!')
    }

    if (typeof arguments[1] !== 'function') {
        throw new Error('The second argument must be a function !!!')
    }

    for ( let i = 0; i < array.length; i++ ) {
        if ( callback(array[i], i, array) ) {
            return true;
        }
    }

    return false;
}
console.log(array, 'some item === 3');
console.log( some(array, item => item === 3), 'function' );
console.log( array.some( item => item === 3), 'method' );

console.log('\n***************************\n');

console.log(array, 'item % 3 === 2')
console.log( some(array, item => item % 3 === 2), 'function' );
console.log( array.some( item => item % 3 === 2), 'method' );

console.log('\n***************************\n');

const result = some(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return typeof item === 'string';
});

console.log(result); // true

exports.some = some;
