/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
function firstElement(arr: any[]) {
    return arr[0];
}

console.log(firstElement(["One", "Three", "Six", "Seven", "Nine"]));
console.log(firstElement([1, 3, 6, 7, 9]));
console.log(firstElement([false, true, false]));

function firstElementGeneric<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

console.log(firstElementGeneric(["One", "Three", "Six", "Seven", "Nine"]));//string
console.log(firstElementGeneric([1, 3, 6, 7, 9]));//number
console.log(firstElementGeneric([false, true, false]));//boolean
console.log(firstElementGeneric([]));//Undefined

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

let arr1: number[] = [13, 43, 32];
let arr2: number[] = [5, 52, 427];
let arr3: number[] = combine(arr1, arr2);

console.log(`arr1 is ${arr1} arr2 is ${arr2} and combined array is ${arr3}`);
// Type 'string' is not assignable to type 'number'
console.log(combine<string | number>(arr1, ["hello", "world"]));

function Greet(param: string): void {
    console.log(`Hello ${param}`);
}

Greet("World!");