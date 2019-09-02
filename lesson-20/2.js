// # Задача 2

// Улучшите класс `Customers` добавив функцию генератор.

// **Обратите внимание**:

// 1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.

class Customers {

    constructor () {
        this.storage = []
    }

    *[Symbol.iterator]() {
        for (const user of this.storage) {
            if (user.verified) {
                yield user;
            }
        }
    }

    add (customer) {
        this.storage.push(customer);
    }
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}

// В консоли будет
// { name: 'Andrii', verified: true }
// { name: 'Marco', verified: true }
// { name: 'Lisa', verified: true }
// { name: 'Ivan', verified: true }

exports.Customers = Customers;
