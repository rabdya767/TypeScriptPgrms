abstract class Character {
    public name: string;
    public damage: number;
    public attackSpeed: number;

    constructor(name: string, damage: number, attackSpeed: number) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = attackSpeed;
    }

    public abstract damagePerSecond(): number;
}

class Goblin extends Character {
    constructor(name: string, damage: number, attackSpeed: number) {
        super(name, damage, attackSpeed);
    }

    public damagePerSecond(): number {
        return this.damage * this.attackSpeed;
    }
}

const G1: Goblin = new Goblin("YAMAHA", 1.4, 45);
console.log(`Damage Per Second is  ${G1.damagePerSecond()}%`);

