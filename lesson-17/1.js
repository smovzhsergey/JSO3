/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone (start, end, delay) {
    
    const params = [ ...arguments ];

    if (params.length < 3) {
        throw new Error('The number of parameters must not be less than 3 !!!')
    }

    params.forEach( item => {
        if (typeof item !== 'number') {
            throw new Error('All parameters must be a number !!!')
        }
    });

    let count = 1;
    
    if (end > start) {
        for (let i = start; i <= end; i++) {
            setTimeout( () => { console.log(i); }, delay * count);
            count++;
        }
    } else {
        for (let i = start; i >= end; i--) {
            setTimeout( () => { console.log(i); }, delay * count);
            count++;
        }
    }
}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
