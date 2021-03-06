/**
 * Explicit Type Assignment
 * Implicit Type Assignment
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const firstName: string = "Rabdya Santhosh";
// eslint-disable-next-line prefer-const
let firstName1 = "James Nicholas";

console.log(`firstName is ${firstName}`);
console.log(`firstName1 is ${firstName1}`);

/**
 * firstName = 33;
 * Type 'number' is not assignable to type 'string'.
 */

const json = JSON.parse("100");
console.log(`type of JSON.parse("100") is ${typeof(json)}`);
