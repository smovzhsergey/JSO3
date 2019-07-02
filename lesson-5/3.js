/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение

const truncate = (string, maxLength) => {

    if (typeof string !== 'string') {
        throw new Error(`First parameter isn't a string type, it's a "${typeof string}" type`)
    }

    if (typeof maxLength !== 'number') {
        throw new Error(`Second parameter isn't a number type, it's a "${typeof maxLength}" type`)
    }

    const replacement = '...';
    
    return string.length <= maxLength
        ? string
        : `${ string.slice(0, (maxLength - replacement.length)) }${ replacement }`;

}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));
console.log(truncate('Вот, что я хотел', 16));
console.log(truncate('Вот, что я хотел', '16'));

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
