/**
 * Задача 7.
 *
 * Дан массив с числами `[1, 2, 3]`.
 * Создайте функцию `f`, которая принимает массив в качестве параметра,
 * а затем последовательно выводит на экран его элементы.
 *
 * Условия:
 * - Входной параметр должен быть не пустым массивом;
 * - Обязательно использовать рекурсию;
 * - Использовать цикл запрещено.
 *
 * Заметки:
 * - Возможно вам понадобится метод splice → https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

// Решение

function f (arr) {

    if (!Array.isArray(arr)) {
        throw new Error( 'parameter type should be an array' );
    }

    if (arr.length === 0) {
        throw new Error( 'parameter can\'t be an empty' );
    }

    if (arr.length > 0) {

        console.log(arr[0]);

        const editedArray = arr.splice(1, arr.length - 1);

        if ( editedArray.length > 0 ) {
            f(editedArray);
        }
    }
}

/* не удалять */
f([1, 2, 3]);
// 1
// 2
// 3
f(1, 2, 3); // Error: parameter type should be an array
f('Content'); // Error: parameter type should be an array
f([]); // Error: parameter can't be an empty

module.export = f;
/* не удалять */
