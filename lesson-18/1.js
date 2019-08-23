// # Задача 1

// Создать класс `DB` который будет имплементировать `CRUD` модель.

// -   В качестве структуры данных использовать `Map`.
// -   Метод `create`:
// -   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
// -   -   возвращает `id`
// -   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
// -   Метод `read`:
// -   -   принимает идентификатор пользователь
// -   -   если такого пользователя нет возвращать `null`
// -   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
// -   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
// -   Метод `readAll`:
// -   -   возвращает массив пользователей
// -   -   генерировать ошибку если в метод `readAll` передан параметр
// -   Метод `update`:
// -   -   обновляет пользователя
// -   -   принимает 2 обязательных параметра
// -   -   генерирует ошибку если передан несуществующий `id`
// -   -   генерирует ошибку если передан `id` с типом не строка
// -   -   генерирует ошибку если второй параметр не валидный
// -   Метод `delete`:
// -   -   удаляет пользователя
// -   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`

// javascript

class DB {

    constructor () {
        this.db = new Map();
    }

    static checkObject (object, action) {
        
        const template = {
            name: 'string',
            age: 'number',
            country: 'string',
            salary: 'number',
        };

        const templateFields = Object.entries(template);
        const objectFields = Object.entries(object);

        if (action === 'create') {

            templateFields.forEach( templateField => {

                const objectField = objectFields.filter( field => field[0] === templateField[0]);

                if (objectField.length === 0) {
                    throw new Error(`Object is not valid!!! Object must contains field "${templateField[0]}".`);
                }
                if (typeof objectField[0][1] !== templateField[1] ) {
                    throw new Error(`Object is not valid !!! Field "${templateField[0]}" must be a/an "${templateField[1]}" type, not a/an "${typeof objectField[0][1]}" type.`);
                }
                
            });

        } else {
            
            objectFields.forEach( objectField => {
                
                const templateField  = templateFields.filter( field => field[0] === objectField[0]);
                
                if (templateField.length === 0) {
                    throw new Error(`Object is not valid!!! Object contains a wrong field - "${objectField[0]}"!`);
                }
                if (typeof objectField[1] !== templateField[0][1]) {
                    throw new Error(`Object is not valid !!! Field "${objectField[0]}" must be a/an "${templateField[0][1]}" type, not a/an "${typeof objectField[1]}" type.`);
                }
            });
        }
    }

    static createID (length) {

        let id = '';
        const leters = ['a', 'b', 'c', 'd', 'e', 'f'];

        for (let i = 0; i < length; i++) {
            const numberOrLetter = Math.random();

            if (numberOrLetter > 0.5) {

                id += Math.floor(Math.random() * 10);

            } else {

                if (numberOrLetter < 0.25) {
                    id += leters[Math.round(numberOrLetter * 10)];
                } else {
                    id += leters[Math.round(numberOrLetter * 10)].toUpperCase();
                }
            }
        }
        return id;
    }

    create (user) {

        if (typeof user !== 'object' || Object.prototype.toString.call(user) !== '[object Object]') {
            throw new Error('Parameter must be an object !!!');
        }

        DB.checkObject(user, 'create');

        const id = DB.createID(12) ;

        this.db.set(id, user)
        
        return id;
    }
    
    read (id) {

        if (arguments.length < 1) {
            throw new Error('The number of parameters must not be less than 1!');
        }
        if (typeof id !== 'string' || id === undefined) {
            throw new Error('Parameter must be a string !!!')
        }

        if (!this.db.has(id)) {
            return null;
        }

        const user = this.db.get(id);
        
        return {...user, id};
    }

    readAll () {
        return [...this.db.values()];
    }

    update (id, props) {

        if (arguments.length < 2) {
            throw new Error('The number of parameters must not be less than 2!');
        }
        if (typeof id !== 'string') {
            throw new Error('First parameter must be a string!');
        }
        if (typeof props !== 'object' || Object.prototype.toString.call(props) !== '[object Object]') {
            throw new Error('Second parameter must be an object !!!');
        }
        if (!this.db.has(id)) {
            throw new Error(`User with ID ${id} does not exist!`);
        }

        DB.checkObject(props, 'update');

        const user = this.db.get(id);

        this.db.set(id, {...user, ...props});
    }

    delete (id) {
        if (typeof id !== 'string') {
            throw new Error('Parameter must be a string!');
        }
        if (!this.db.has(id)) {
            throw new Error(`User with ID ${id} does not exist!`);
        }

        this.db.delete(id);
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const id = db.create(person);
const customer = db.read(id);
const customers = db.readAll(); // массив пользователей
db.update(id, { age: 22 }); // id
db.delete(id); // true

exports.DB = DB;