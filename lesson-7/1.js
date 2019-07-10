/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента,
 * и возвращать новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 * 
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
];


// Решение

function inspect (array) {

    if (arguments.length < 1) {
        throw new Error('The number of arguments must not be less than 1!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array!')
    }

    return array
            .filter( item => typeof item === 'string' )
            .map( string => string.length );

}

console.log(inspect([1, 2, 4]));
console.log(inspect([1, 2, 4, 'array', '', ' ']))

const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]

exports.inspect = inspect;
