/* eslint-disable @typescript-eslint/no-unused-vars */
console.log("Hello TypeScript...!");

// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const message: string = "Hello World!";
console.log(message.toLowerCase());

// message();
const User = {
    name: "James",
    age: 26
};

// console.log(User.salary);
//JS will give undefined

console.log(message.toLocaleUpperCase());

// const value1 = Math.random() < 0.5 ? "a" : "b";
// if(value1!== "a"){
//     console.log("a");
// }
// else if(value1 === "b"){
//     console.log("b");
// }
// else{
//     console.log("Both are equal");
// }

function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet("Rabdya", new Date());

const Names: string[] = ["James", "Puppy", "Alice"];
Names.forEach((s: string) => { console.log(s.toUpperCase()); });

function printId(id: number | string): void {
    if (typeof (id) === "string") {
        console.log(`Your id is ${id.toUpperCase()}`);
    }
    else {
        console.log(`Your id is ${id}`);
    }
}

printId(202);
printId("s2ajhje23ns");

// eslint-disable-next-line @typescript-eslint/naming-convention
type alias = {
    // interface alias {
    x: number;
    y: number;
}

function printCoord(pt: alias): void {
    console.log(`(x,y) = (${pt.x},${pt.y})`);
}

printCoord({ x: 2, y: 3 });

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

console.log(`${compare("Hello", "hello")}`);
console.log(`${compare("hello", "hello")}`);
console.log(`${compare("hello", "Hello")}`);

interface Options {
    width: number;
}

function configure(x: Options | "auto"): void {
    console.log(`Width is ${x}`);
}

configure({ width: 100 });
configure("auto");
// configure("automatic");