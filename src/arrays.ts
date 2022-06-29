/**
 * Arrays in TypeScript
 */
const rollnumbers : number[] = [];

rollnumbers.push(46);
rollnumbers.push(12);
rollnumbers.push(56);
rollnumbers.push(41);
//Error: 
//Argument of type 'string' is not assignable to parameter of type 'number'
//rollnumbers.push("41");
console.log(`Array contains ${rollnumbers}`);

/**
 * readonly
 */

const names : readonly string[] = ["virat","sachin","dhoni"];
//Property 'push' does not exist on type 'readonly string[]'
// names.push("rohith");
console.log(`Ranchi Player is ${names[2]}`);