let x: unknown = "Hello";
console.log((x as string).length);
// prints undefined since numbers don't have a length

let y1: unknown = "RABDYA SANTHOSH";
console.log(`Length of the string ${y1} is ${(<string>y1).length}`);
