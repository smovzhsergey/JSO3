/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

const upperCaseFirst = function(str) {

    if (typeof str !== 'string') {
        throw new Error('parameter is not a string type')
    }

    return `${str.slice(0,1).toUpperCase()}${str.slice(1)}`;

}

console.log(upperCaseFirst('pitter'));
console.log(upperCaseFirst(''));
console.log(upperCaseFirst(4));

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
