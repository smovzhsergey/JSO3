/**
 * Задача 3.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Для свойства rate и days добавьте методы для установки значений.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение

class Worker {

    #firstName = null;
    #lastName = null;
    #rate = null;
    #days = null;
    constructor (firstName, lastName, rate, days) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#rate = rate;
        this.#days = days;
    }

    getName () {
        return `${ this.#firstName } ${ this.#lastName }`;
    }

    getRate () {
        return this.#rate;
    }

    setRate (value) {
        this.#rate = value;
    }

    getDays () {
        return this.#days;
    }

    setDays (value) {
        this.#days = value;
    }

    getSalary () {
        return this.#rate * this.#days;
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); // 20 * 10 = 200

exports.Worker = Worker;
