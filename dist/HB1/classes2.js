"use strict";
class Sonar {
    ping() {
        console.log("ping!..");
    }
}
class Ball {
    ping() {
        throw new Error("Method not implemented.");
    }
    pong() {
        console.log("pong");
    }
}
class Animal {
    move() {
        console.log("Moving long..!");
    }
}
class Dog extends Animal {
    move(name) {
        if (name === undefined) {
            super.move();
        }
        else {
            console.log(`Hello  ${name}`);
        }
    }
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("wooof...!!");
        }
    }
}
const dog = new Dog();
const b1 = dog;
//Base Class Method
dog.move();
b1.move("Cat");
//Derived Class Method
dog.woof(5);
