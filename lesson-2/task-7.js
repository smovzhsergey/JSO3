const array = [1, 2, 3, 4];

let result = 0;

for (let i = 0; i < array.length; i++) {

    result = i % 2 === 0 ? result + array[i] : result;
    
}

console.log(result);

