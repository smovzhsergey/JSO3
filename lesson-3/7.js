/**
 * Задача 7.
 *
 * Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная от 1 и заканчивая самим собой).
 * Если чётное — функция возвращает `true`, если нечётное — `false`.
 *
 * Условия:
 * - Входной параметр должен обладать типом number;
 * - Входной параметр должен быть больше 0.
 */

// Решение

function getDivisors (n) {

    const array = [];

    if (typeof n !== 'number') {
        throw new Error( 'parameter type is not a Number' );
    }

    if (n === 0) {

        throw new Error( 'parameter can\'t be a 0' );

    } else {

        const setOfNumbers = Array.from( Array(n), (el, index) => index + 1);

        for (item of setOfNumbers) {
            if ( n % item === 0 ) {
                array.push(item);
            }
        }
    }

    return array;
}

console.log(getDivisors(12))

/* не удалять */
getDivisors(12); // [1, 2, 3, 4, 6, 12]
getDivisors('Content'); // Error: parameter type is not a Number
getDivisors(0); // Error: parameter can't be a 0

module.export = getDivisors;
/* не удалять */
