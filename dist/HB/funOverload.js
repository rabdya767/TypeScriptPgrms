"use strict";
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
console.log(`${d1}`);
console.log(`${d2}`);
function len(x) {
    return x.length;
}
console.log(`len("Hello World") is ${len("Hello World")}`);
// eslint-disable-next-line max-len
console.log(`len([12,33,57,53,13,87,90, 1, 2.48]) is ${len([12, 33, 57, 53, 13, 87, 90, 1, 2.48])}`);
console.log(`len(["a","b","c","d","e"]) is ${len(["a", "b", "c", "d", "e"])}`);
console.log(`len(" ") is ${len(" ")}`);
