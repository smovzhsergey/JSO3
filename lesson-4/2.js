/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 * Свойство `rate` можно читать и записывать, но нельзя удалять, а также это свойство не должно участвовать в перечислении всех свойств при переборе.
 * Свойство `salary` можно читать, но нельзя менять.
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 * Если rate не установлен — возвращаем число 0.
 */

'use strict'

const person = {};

// Решение

Object.defineProperties(person, {
    'rate': {
        value: null,
        writable: true,
    },
    'salary': {
        get() {
            return this.rate * (new Date().getDate());
        },
        enumerable: true
    }
});

console.log(Object.getOwnPropertyDescriptors(person));
console.log( Object.keys(person));

console.log('rate: ', person.rate);
console.log('salary: ', person.salary);

person.rate = 30;

console.log('rate: ', person.rate);
console.log('salary: ', person.salary);

delete person.rate;

// Предположим что сегодня 10 января, в этом случае это свойство возвращает число 300
person.salary;

exports.person = person;
