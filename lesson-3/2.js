/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение

function f () {
    
    let result = 0;

    for (item of arguments) {

        if (typeof item !== 'number') {
            throw new Error( 'all parameters should be a Number type' )
        }

        result += item
    }

    return result;
}

console.log(f(1, 2, 3));
console.log(f(1, 1, 1, 1, 1, 1, 1, 1));

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

module.export = f;
/* не удалять */
