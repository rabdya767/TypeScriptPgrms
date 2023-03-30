/**
 * Polymorphism.
 * Objects can take on more than one form depending on the context. 
 * The program will determine which meaning or 
 * usage is necessary for each execution of that object, 
 * cutting down the need to duplicate code.
 *
 * Let us understand this by going through an example. 
 * We will notice that the Player object is extended 
 * by two different subsclasses and take different context 
 * when each a new instance of each subsclass is created.
 */
class Player {
    public name = "";
    public role = "";
}

class basketballPlayer extends Player {
    public setName(name: string): void {
        this.name = name;
        this.role = "BasketBall Player";
    }
    public getName(): string {
        return `User name: ${this.name} Role: ${this.role}`;
    }
}

class golfPlayer extends Player {
    public setName(name: string): void {
        this.name = name;
        this.role = "Golf Player";
    }
    public getName(): string {
        return `User name: ${this.name} Role: ${this.role}`;
    }
}

const person1 = new basketballPlayer();
const person2 = new golfPlayer();
person1.setName("Kevin Odongo");
person2.setName("Kevin Odongo");
console.log(person1.getName());
console.log(person2.getName());