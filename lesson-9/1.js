/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 * Одноименные свойства объекта из второго аргумента, которые уже есть в объекте из первого аргумента копировать не нужно.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение

function checkParameters (argumentsOfFunction) {
    for (param of argumentsOfFunction) {
        if (Object.prototype.toString.call(param) !== '[object Object]') {
            return false;
        }
    }
    return true;
}

function shallowMerge (obj1, obj2) {

    const params = [ ...arguments ];
    
    if (params.length < 2) {
        throw new Error('The number of arguments must not be less than 2!');
    }

    if (!checkParameters(params)) {
        throw new Error('The arguments must be only objects!');
    }

    const mergedObject = {};

    for (currentObject of params) {

        const currentObjectEntries = Object.entries(Object.getOwnPropertyDescriptors(currentObject));
        
        for (item of currentObjectEntries) {
            
            Object.defineProperty(mergedObject, item[0], item[1] );
        }
    }

    return mergedObject;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;
