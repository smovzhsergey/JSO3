const array = [2, -1, -3, 15, 0, 4]
let result = 0;

for (item of array) {
    result = item >= 0 ? result + item : result;
}

console.log(result);
