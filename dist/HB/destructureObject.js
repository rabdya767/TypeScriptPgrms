"use strict";
function destructureTuple(param) {
    const [inputString, hash] = param;
    console.log(inputString);
    console.log(hash);
}
destructureTuple(["This is input string", 100]);
const point = [3, 4];
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
console.log(distanceFromOrigin(point));
