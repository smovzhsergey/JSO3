const array = [1, 2, 3, 4, 5, 6];

let result = 0;

for (let i = 0; i < array.length; i++) {

    result = ( array[i] > 3 && i % 2 === 0 ) ? result + array[i] : result;
    
}

console.log(result);

