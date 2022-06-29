/* eslint-disable @typescript-eslint/naming-convention */
class Person {
    // public constructor(private name:string){};
    private name: string;
    private readonly gender : string = "MALE";
    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getDetails() : string{
        return `Name is ${this.name} and gender is ${this.gender}`;
    }
}

const person = new Person("Jane");
console.log(`Name is ${person.getName()}`);
console.log(`Person Details are ${person.getDetails()}`);
