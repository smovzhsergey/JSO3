/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента,
 * и возвращать число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 * 
 * Генерировать ошибки, если:
 * - При вызове функции не был передан один аргумент;
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

// Решение

function collect (array) {

    if (arguments.length < 1) {
        throw new Error('The number of arguments must not be less than 1!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array!')
    }

    function createSingleLevelArray ( multiLevelArray ) {
        
        return multiLevelArray.reduce( ( resultArray, value ) => {
        
            if (Array.isArray(value)) {
                return [...resultArray, ...createSingleLevelArray(value)]
            } else {

                if (typeof value !== 'number') {
                    throw new Error('Only "numbers" or "arrays" !')
                }

                return [...resultArray, value]
            }

        }, [] )
    }

    const singleLevelArray = createSingleLevelArray(array);

    return singleLevelArray.reduce( (sum, value ) => { return sum + value }, 0);
}

const onMoreArray = [9, [6, [11, [7, 4, [19, [15, [20, [[[14], 16]], 2]], -30]], 7]]]
console.log(collect(onMoreArray));

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
console.log(collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
console.log(collect(array3)); // 6

const array4 = [[[[[]]]]];
console.log(collect(array4)); // 0

const array5 = [[[[[], 3]]]];
console.log(collect(array5)); // 3

exports.collect = collect;
