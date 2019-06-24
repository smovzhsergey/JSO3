const array = [6, 5, 12, 3, 25, 11];
let length = array.length;

for (let i = 0; i < length; i++) {
    let min = array[i];
    let currentIndex;
    
    for (let j = i; j < length; j ++) {
        
        if ( min > array[j]) {
            min = array[j];
            currentIndex = j;
        } 
    }
    
    if(currentIndex) {   
        array[currentIndex] = array[i];
        array[i] = min;
    }
}

console.log(array);
