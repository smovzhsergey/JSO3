/**
 * Задача 2.
 *
 * Напишите функцию checkSpam(source, example)
 * Функция возвращает true, если строка source содержит подстроку spam. Иначе — false.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров на тип string.
 * - Функция должна быть нечувствительна к регистру:
 */

// Решение

const checkSpam = function (source, example) {

    if (typeof source !== 'string' || typeof example !== 'string') {
        throw new Error('parameter is not a string type')
    }

    const str = source.toLowerCase();
    const reg = example.toLowerCase();

    return str.search(reg) > 0 ? true : false;
    
}

console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterXXX@gmail.com', 'xxx'));
console.log(checkSpam('pitterXXX@gmail.com', 'xxxx'));
console.log(checkSpam('pitterXXX@gmail.com', 4));

checkSpam('pitterXXX@gmail.com', 'xxx'); // true
checkSpam('pitterxxx@gmail.com', 'XXX'); // true

exports.checkSpam = checkSpam;
