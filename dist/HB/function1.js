"use strict";
function squareArray(x) {
    return x.map(i => i ** 2);
}
// eslint-disable-next-line prefer-const
let array = [1, 5, 7, 3, 2, 9, 4, 6];
console.log(squareArray(array));
function multiplyNumber(n, ...m) {
    return m.map((x) => n * x);
}
// eslint-disable-next-line prefer-const
let m = multiplyNumber(9, 0, 1, 2, 3, 4, 5);
console.log(m);
const array1 = [1, 2, 3];
const array2 = [4, 5, 6, 7, 8];
const concatArray = array1.push(...array2);
console.log(concatArray);
