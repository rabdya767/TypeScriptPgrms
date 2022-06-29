"use strict";
function greetPerson(person) {
    return `Hello ${person.name}`;
}
function greetPersonInterface(person) {
    return `Hello ${person.name}`;
}
function greetPersonType(person) {
    return `Hello ${person.name}`;
}
let personobject = {
    name: "RABDYA",
    age: 21
};
console.log(greetPerson(personobject), greetPersonInterface(personobject), greetPersonType(personobject));
