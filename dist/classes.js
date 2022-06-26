"use strict";
class Person {
    constructor(name) {
        this.gender = "MALE";
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getDetails() {
        return `Name is ${this.name} and gender is ${this.gender}`;
    }
}
const person = new Person("Jane");
console.log(`Name is ${person.getName()}`);
console.log(`Person Details are ${person.getDetails()}`);
