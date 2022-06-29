"use strict";
/* eslint-disable max-len */
function getTime() {
    return new Date();
}
console.log(`Time is ${getTime()}`);
function printHello() {
    console.log(`Hello World!`);
}
printHello();
function add(a, b, c) {
    return a + b + (c || 0);
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function pow(a, b = 2) {
    return a ** b;
}
function restParameters(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
const a = 10;
const b = 5;
console.log(`Addition of ${a} and ${b} is ${add(a, b)}`);
console.log(`Addition of ${a},12 and ${b} is ${add(a, b, 12)}`);
console.log(`Substraction of ${a} and ${b} is ${subtract(a, b)}`);
console.log(`Multiplication of ${a} and ${b} is ${multiply(a, b)}`);
console.log(`Pow of ${a} and ${b} is ${pow(a)}`);
console.log(`Rest parameters are ${a},${b} is ${restParameters(a, b)}`);
console.log(`Rest parameters are ${a},${b},1,20,30 is ${restParameters(a, b, 1, 20, 30)}`);
console.log(`Rest parameters are ${a},${b},10,20,30 is ${restParameters(a, b, 10, 20, 30)}`);
