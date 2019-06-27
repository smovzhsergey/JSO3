/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение


function f (n) {

    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    if ( typeof n === 'number' ) {
        if ( n > 0 && n < 8) {
            return weekDays[n-1];
        } else {
            throw new Error( 'parameter should be in the range of 1 to 7' );
        }
    } else {
        throw new Error( 'parameter type is not a Number' );
    }

}

console.log(f(1));
console.log(f(2));

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

module.export = f;
/* не удалять */