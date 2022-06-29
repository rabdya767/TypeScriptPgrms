/* eslint-disable max-len */
/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 * Tuples are great because they allow each element in the array to be a known type of value.
 * To define a tuple, specify the type of each element in the array:
 */

let empDetails: [number, string, boolean];

// eslint-disable-next-line prefer-const
empDetails = [100, "Santhosh", true];

console.log(`Emp details id : ${empDetails[0]} Name : ${empDetails[1]} and student : ${empDetails[2]}`);

empDetails.push("$300");//Throws error for readonly case
console.log(empDetails);

/**
 * Named tuples allow us to provide context for our values at each index.
 */
const graph : [a : number, b : number] = [12,56.56];
const [p,q] = graph;
console.log(`P is ${p} and Q is ${q}`);

