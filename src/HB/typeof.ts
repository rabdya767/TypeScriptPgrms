/* eslint-disable @typescript-eslint/no-unused-vars */
console.log(typeof "Hello World!");
const s = "Hello";
let n: typeof s;
//n is string

type Persn = { age: number; name: string; alive: boolean };
type Age = Persn["age"];
//Age is number

type I1 = Persn["age" | "name"];
//I1 is string or number

type I2 = Persn[keyof Persn];
//I2 is string or number or boolean

type AliveOrName = "alive" | "name";
type I3 = Persn[AliveOrName];
//I3 is string or boolean

const myArray1 = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "James", age: 19 },
    { name: "Eve", age: 20 }
];

type Persn1 = typeof myArray1[number];
// type Persn1 = {
//     name: string;
//     age: number;
// }
type Age1 = typeof myArray1[number]["age"];
//Age1 is number

// const key = "age";
type key = "age";
type age1 = Persn[key];
