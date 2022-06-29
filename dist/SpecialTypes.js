"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * any type
 */
const u = true;
/**
 * u = "string";
 * Type 'string' is not assignable to type 'boolean'.
 *
 * Math.round(u);
 * Argument of type 'boolean' is not assignable to parameter of type 'number'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let v = true;
v = "any string";
//"any string" in this case
console.log(` v is ${v}`);
//NaN as it convert to Math
console.log(` Now v is ${Math.round(v)}`);
/**
 * unknown type
 */
let w = 1;
//1 in this case
console.log(`w is ${w}`);
//string in this case
w = " some string";
console.log(`w is ${w}`);
/**
 * let n : never = true;
 * never type
 * throws an error whenever it is defined
 * Type 'number|string|boolean' is not assignable to type 'never'
 */
/**
 * undefined and null
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const y = undefined;
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const z = null;
console.log(`x is ${y} and y is ${z}`);
