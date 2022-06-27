"use strict";
console.log("Hello TypeScript...!");
const message = "Hello World!";
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
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet("Rabdya", new Date());
const Names = ["James", "Puppy", "Alice"];
Names.forEach((s) => { console.log(s.toUpperCase()); });
function printId(id) {
    if (typeof (id) === "string") {
        console.log(`Your id is ${id.toUpperCase()}`);
    }
    else {
        console.log(`Your id is ${id}`);
    }
}
printId(202);
printId("s2ajhje23ns");
function printCoord(pt) {
    console.log(`(x,y) = (${pt.x},${pt.y})`);
}
printCoord({ x: 2, y: 3 });
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(`${compare("Hello", "hello")}`);
console.log(`${compare("hello", "hello")}`);
console.log(`${compare("hello", "Hello")}`);
function configure(x) {
    console.log(`Width is ${x}`);
}
configure({ width: 100 });
configure("auto");
// configure("automatic");
