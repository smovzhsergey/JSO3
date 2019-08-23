// # Задача 2

// Улучшить класс `DB` из предыдущей задачи.

// -   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
// -   Генерировать ошибку, если query не валидный
// -   Поля `name` и `country` ищут 100% совпадение
// -   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
// -   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса

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

    find (query) {

        let usersByQuery = [];
        const users = [ ...this.db ];
        // const queryFields = Object.entries(query);
        
        users.forEach( ( user ) => {
            
            const currentUser = user[1];
            let isUserSuitable;

            for (let item in currentUser) {
                
                if ( typeof currentUser[item] === 'string') {
                    
                    if (query[item] === undefined) {
                        continue;
                    } else if (currentUser[item] === query[item] ) {
                        isUserSuitable = true;
                    } else {
                        isUserSuitable = false;
                        break;
                    }
                } else {

                    if (query[item] === undefined) {
                        continue;
                    }
                    const min = query[item]['min'];
                    const max = query[item]['max'];

                    const interval = Object.keys(query[item]);
                    
                    if (interval.length === 2){
                        
                            if ( currentUser[item] >= min &&  currentUser[item] <= max) {
                                isUserSuitable = true;
                            } else {
                                isUserSuitable = false;
                                break;
                            }
                        
                    } else {

                        if (min !== undefined ) {

                            if ( currentUser[item] >= min) {
                                isUserSuitable = true;
                            } else {
                                isUserSuitable = false;
                                break;
                            }

                        } else {

                            if ( currentUser[item] <= max ) {
                                isUserSuitable = true;
                            } else {
                                isUserSuitable = false;
                                break;
                            }

                        }
                    }
                }
            }

            if (isUserSuitable) {
                usersByQuery.push(currentUser);
            }

            
        });
        console.log(usersByQuery)
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500 // обязательное поле с типом number
};

const person1 = { name: 'Roman', age: 25, country: 'ua', salary: 650 };
const person2 = { name: 'Anton', age: 30, country: 'us', salary: 400 };
const person3 = { name: 'Dima', age: 35, country: 'ua', salary: 299 };
const person4 = { name: 'Dima', age: 40, country: 'us', salary: 350 };
const person5 = { name: 'Lox', age: 45, country: 'ua', salary: 1000 };
const person6 = { name: 'PPC', age: 50, country: 'au', salary: 2000 };



const id = db.create(person);
const id1 = db.create(person1);
const id2 = db.create(person2);
const id3 = db.create(person3);
const id4 = db.create(person4);
const id5 = db.create(person5);
const id6 = db.create(person6);
// db.update(id, { age: 22 }); // id
// db.delete(id); // true



const query = {
    // name: 'Pitter',
    country: 'ua',
    age: {
        min: 20
    },
    salary: {
        min: 300,
        max: 700,
    }
};

const customers = db.find(query); // массив пользователей

exports.DB = DB;