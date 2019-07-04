/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано три аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 * - В качестве третьего аргумента было передан не число.
 */

const array = [1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение

function reduce ( array, callback, accumulator ) {
    
    if (arguments.length < 3) {
        throw new Error('The number of arguments must not be less than 3 !!!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array !!!')
    }

    if (typeof arguments[1] !== 'function') {
        throw new Error('The second argument must be a function !!!')
    }

    if (typeof arguments[2] !== 'number') {
        throw new Error('The third argument must be a number !!!')
    }

    let result = accumulator;

    for ( let i = 0; i < array.length; i++ ) {
        result = callback(result, array[i], i, array);
    }

    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const sumFunc = reduce( arr, ( sum, number ) => sum + number, INITIAL_ACCUMULATOR);
const sumMethod = arr.reduce(( sum, number ) => sum + number, INITIAL_ACCUMULATOR);

console.log( sumFunc === sumMethod);

const result = reduce(
    array,
    function(accumulator, item, i, arrayRef) {
        console.log(accumulator); // значение-аккумулятор
        console.log(item); // элемент массива
        console.log(i); // индекс элемента
        console.log(arrayRef); // ссылка на обрабатываемый массив
        
        return accumulator + item;
    },
    INITIAL_ACCUMULATOR,
);

console.log(result); // 21

exports.reduce = reduce;
