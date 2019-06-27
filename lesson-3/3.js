/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит проверку входного параметра на тип number.
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

const f = function (a, b, c) {

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' ) {
        return ( a - b ) / c;
    }

    throw new Error( 'all parameters should be a Number type' );
    
}
console.log(f(9, 3, 2))

/* не удалять */
f(9, 3, 2); // 3
f('s', 9, 3); // Error: all parameters type should be a Number

module.export = f;
/* не удалять */