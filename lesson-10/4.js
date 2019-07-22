/**
 * Задача 4.
 *
 * Напишите функции compose(), которая в качестве аргументов принимает неограниченное количество функций.
 *
 * При запуске compose() последовательно запускает коллбек-функции из аргументов.
 * 
 * Важно: compose() выполняет коллбек-функции из аргументов НАЧИНАЯ С КОНЦА.
 *
 * Каждая коллбек-функция из цепочки в качестве своего аргумента принимает то, что возвращает предыдущая коллбек-функция.
 * То есть возвращаемое значение каждой коллбек-функции из цепочки
 * становится доступным из параметра следующей коллбек-функции в цепочке.
 *
 * Функция compose() возвращает ещё одну функцию с одним параметром.
 * Значение, переданное этой функции в качестве аргумента должно стать
 * параметром первой коллбек-функции в цепочке выполнения функции compose().
 *
 * Итого, подпись функции compose: `compose(f, g)(x) = f(g(x))`.
 *
 * Генерировать ошибки если:
 * - Любой из аргументов не является функцией;
 * - Любая функция из аргументов не вернула значение.
 *
 * Заметка:
 * Если функции, которая является возвращаемым значением compose()
 * не передать в качестве аргумента какое-либо значение, генерировать ошибку не нужно.
 */

// Решение

function compose (...functions) {

    for (func of functions) {
        if (typeof func !== 'function') {
            throw new Error('Each parameter must be only function!')
        }
    }
    
    return function (param) {

        let result;

        for (let i = functions.length; i > 0; i--) {

            if (i === functions.length) {
                if ( param !== undefined)
                    result = functions[i-1](param);
                else {
                    result = functions[i-1]();
                }
            } else {
                result = functions[i-1](result);
            }

            if ( result === undefined ) {
                throw new Error(`Callback at index ${ i-1 } did not return any value.`)
            }
        }

        return result;
    }
}

const result1 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
)('h');
const result2 = compose(
    prevResult => prevResult + 'o',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'l',
    prevResult => prevResult + 'e',
    () => 'h',
)();

console.log(result1); // 'hello'
console.log(result2); // 'hello'

exports.compose = compose;
