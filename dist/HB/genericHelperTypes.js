"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
function doSomething(value) {
    value.forEach((x) => console.log(x));
}
const myArray = ["hello", "World", "!"];
doSomething(myArray);
// eslint-disable-next-line @typescript-eslint/no-array-constructor
doSomething(new Array("Hello", "Good", "Morning"));
// let x1 : readonly string[] =[];
// let y11 : string[]= [];
// x1= y11;
// //The type 'readonly string[]' is 'readonly' and 
// //cannot be assigned to the mutable type 'string[]'
// y11=x1;
