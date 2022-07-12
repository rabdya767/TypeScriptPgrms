/* eslint-disable @typescript-eslint/no-unused-vars */

type OrNull<Type> = Type | null;
type OneOrMore<Type> = Type | Type[];
type OneOrMoreOrNull<Type> = OrNull<OneOrMore<Type>>;
type OneOrMoreOrNullStrings = OneOrMoreOrNull<string>;

function doSomething(value: Array<string>): void {
    value.forEach((x) => console.log(x));
}

const myArray: string[] = ["hello", "World", "!"];

doSomething(myArray);
// eslint-disable-next-line @typescript-eslint/no-array-constructor
doSomething(new Array("Hello", "Good", "Morning"));

interface arr<Type> {
    /**
     * Gets the length of the array
     */
    length: number;

    /**
     * Removes the last element from an array and returns it
     */
    pop(): Type | undefined;

    /**
     * append new elements to an array and returns the length of the new array
     */
    push(...items: Type[]): number;
}

// let x1 : readonly string[] =[];
// let y11 : string[]= [];
// x1= y11;
// //The type 'readonly string[]' is 'readonly' and 
// //cannot be assigned to the mutable type 'string[]'
// y11=x1;