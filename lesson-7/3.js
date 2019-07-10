/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

// const createArray = (value, number) => Array.from(Array(number), el => value)
const createArray = ( ...params ) => {

    const [ value, quantity ] = params;

    if (params.length < 2) {
        throw new Error('The number of arguments must not be less than 2!')
    }
    
    if (typeof value !== 'object' && typeof value !== 'number' && typeof value !== 'string' || value === null) {
        throw new Error('The first argument must be an array, an object, a number or a string!')
    }

    if (typeof quantity !== 'number') {
        throw new Error('The second argument must be an number!')
    }

    return Array.from(Array(quantity), el => value)
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
