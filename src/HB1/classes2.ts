/* eslint-disable @typescript-eslint/no-unused-vars */
interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping(): void {
        console.log("ping!..");
    }
}

class Ball implements Pingable {
    ping(): void {
        throw new Error("Method not implemented.");
    }
    pong(): void {
        console.log("pong");

    }
}

class Animal {
    move(): void {
        console.log("Moving long..!");
    }
}

class Dog extends Animal {
    move(name?: string): void {
        if (name === undefined) {
            super.move();
        }
        else {
            console.log(`Hello  ${name}`);
        }
    }
    woof(times: number): void {
        for (let i = 0; i < times; i++) {
            console.log("wooof...!!");
        }
    }
}

const dog = new Dog();
const b1: Dog = dog;
//Base Class Method
dog.move();
b1.move("Cat");
//Derived Class Method
dog.woof(5);