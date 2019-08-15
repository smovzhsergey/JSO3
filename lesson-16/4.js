/**
 * Задача 4.
 *
 * Реализуйте класс Stringer, который будет иметь следующие методы (каждый принимает строку в качестве аргумента):
 * 
 * - reverse(string) — возвращает строку в перевернутом виде;
 * - uppercaseFirst(string) — возвращает строку, сделав ее первую букву заглавной;
 * - uppercaseAll(string) — делает заглавной первую букву каждого слова строки и возвращает её.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript.
 */

// Решение

class Stringer {
    
    reverse (str) {

        const modifiedString = str.split('').reverse().join('');
        return modifiedString;
    }

    uppercaseFirst (str) {

        const modifiedString = str.slice(0,1).toUpperCase() + str.slice(1);
        return modifiedString;
    }

    uppercaseAll (str) {

        const arrayFromString = [ ...str ];
        
        for (let i = 0; i < arrayFromString.length; i++) {

            if (i === 0) {
                arrayFromString[i] = arrayFromString[i].toUpperCase();
            }
            if (arrayFromString[i] === ' ') {
                arrayFromString[i + 1] = arrayFromString[i + 1].toUpperCase()
            }
        }

        return arrayFromString.join('');
    }
}

const stringer = new Stringer();

console.log(stringer.reverse('good morning!')); // !gninrom doog
console.log(stringer.uppercaseFirst('good morning!')); // Good morning!
console.log(stringer.uppercaseAll('good morning!')); // Good Morning!

exports.Stringer = Stringer;