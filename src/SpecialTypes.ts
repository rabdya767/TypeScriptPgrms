/**
 * any type
 */
let u = true;

/**
 * u = "string";
 * Type 'string' is not assignable to type 'boolean'.
 * 
 * Math.round(u);
 * Argument of type 'boolean' is not assignable to parameter of type 'number'
 */

let v: any = true;
v = "any string";
//"any string" in this case
console.log(` v is ${v}`);
//NaN as it convert to Math
console.log(` Now v is ${Math.round(v)}`);

/**
 * unknown type
 */

let w: unknown = 1;
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
let y: undefined = undefined;
let z: null = null;
console.log(`x is ${y} and y is ${z}`);
