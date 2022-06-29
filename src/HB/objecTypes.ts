/* eslint-disable prefer-const */
/* eslint-disable max-len */
type TypePerson = {
    name: string;
    age: number;
}

interface GreetPersonInterface {
    name: string;
    age: number;
}

function greetPerson(person: { name: string; age: number }): string {
    return `Hello ${person.name}`;
}

function greetPersonInterface(person: GreetPersonInterface): string {
    return `Hello ${person.name}`;
}

function greetPersonType(person: TypePerson): string {
    return `Hello ${person.name}`;
}

let personobject: TypePerson = {
    name: "RABDYA",
    age: 21
};

console.log(greetPerson(personobject), greetPersonInterface(personobject), greetPersonType(personobject));