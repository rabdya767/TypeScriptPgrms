"use strict";
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(["One", "Three", "Six", "Seven", "Nine"]));
console.log(firstElement([1, 3, 6, 7, 9]));
console.log(firstElement([false, true, false]));
function firstElementGeneric(arr) {
    return arr[0];
}
console.log(firstElementGeneric(["One", "Three", "Six", "Seven", "Nine"])); //string
console.log(firstElementGeneric([1, 3, 6, 7, 9])); //number
console.log(firstElementGeneric([false, true, false])); //boolean
console.log(firstElementGeneric([])); //Undefined
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
let arr1 = [13, 43, 32];
let arr2 = [5, 52, 427];
let arr3 = combine(arr1, arr2);
console.log(`arr1 is ${arr1} arr2 is ${arr2} and combined array is ${arr3}`);
// Type 'string' is not assignable to type 'number'
console.log(combine(arr1, ["hello", "world"]));
function Greet(param) {
    console.log(`Hello ${param}`);
}
Greet("World!");
