class Accident {
    public name: string;
    public damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.damage = damage;
    }

    public talk(): void {
        console.log("Says something ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his fists.`);
    }
}

class HAccident extends Accident {
    public weapon: string;

    constructor(name: string, damage: number, weapon: string) {
        super(name, damage);

        this.weapon = weapon;
    }

    public talk(): void {
        console.log("Says something but in orcish ...");
    }

    public attack(): void {
        console.log(`Attacks his target with his ${this.weapon}.`);
    }
}

const h1: HAccident = new HAccident("JACK", 0.54, "AXE");
h1.attack();