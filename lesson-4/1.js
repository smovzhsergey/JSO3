/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {};

// Решение

const months = [
    {
        name: "January",
        days: 31,
    },
    {
        name: "February",
        days: 28,
    },
    {
        name: "March",
        days: 31,
    },
    {
        name: "April",
        days: 30,
    },
    {
        name: "May",
        days: 31,
    },
    {
        name: "June",
        days: 30,
    },
    {
        name: "July",
        days: 31,
    },
    {
        name: "August",
        days: 31,
    },
    {
        name: "September",
        days: 30,
    },
    {
        name: "October",
        days: 31,
    },
    {
        name: "November",
        days: 30,
    },
    {
        name: "December",
        days: 31,
    }
];

Object.defineProperty(person, 'salary', {
    get() {

        const date = new Date();
        
        return months[date.getMonth()]['days'] - date.getDate() > 20 ?
            `good salary` : `bad salary`;
    }
});

console.log(person.salary)

person.salary; // good salary

exports.person = person;
