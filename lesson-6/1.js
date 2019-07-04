/**
 * Задача 1.
 *
 * Вручную создать имплементацию функцию `forEach`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = [1, 2, 3];

// Решение

function forEach ( array, callback ) {
    
    if (arguments.length < 2) {
        throw new Error('The number of arguments must not be less than 2 !!!')
    }

    if (!Array.isArray(arguments[0])) {
        throw new Error('The first argument must be an array !!!')
    }

    if (typeof arguments[1] !== 'function') {
        throw new Error('The second argument must be an function !!!')
    }

    for ( let i = 0; i < array.length; i++ ) {
        callback(array[i], i, array);
    }
}

const array1 = [1, 2, 3, 6, 9];
const array2 = [ ...array1 ];

console.log(array1,` - array1 before`)
console.log(array2,` - array2 before`)

forEach(array1,(item, i) => {
    array1[i] = item * 2 + '';
});

array2.forEach((item, i) => {
    array2[i] = item * 2 + '';
})

console.log(array1,` - array1 after custom function forEach`);
console.log(array2,` - array2 after standart method forEach`);

console.log('*******************************'); 

const result = forEach(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив
});

console.log(result); // undefined

exports.forEach = forEach;
