const array = [1, 2, 3, 6, 5, 4];
let length = array.length;

/* Sort */

for (let i = 0; i < length; i++) {
    let max = array[i];

    for (let j = i; j < length; j ++) {
        
        if ( max > array[j]) {
            max = max
        } else {
            max = array[j];
            currentIndex = j;
        }
    }
        
    array[currentIndex] = array[i];
    array[i] = max;
}

console.log('Sort       ', array);

/* Reverse */

const array1 = [1, 2, 3, 6, 5, 4];
let length1 = array1.length;

for (let i = 0; i < length1 / 2; i++) {

    let temporary = array1[length1 - 1 - i];

    array1[length1 - 1 - i] = array1[i];

    array1[i] = temporary;

}

console.log('Reverse    ', array1);



