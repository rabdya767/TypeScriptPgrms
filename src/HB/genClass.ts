/* eslint-disable @typescript-eslint/no-inferrable-types */
class BeeKeeper {
    hasMask : boolean = true;
}

class ZooKeeper {
    nameTag : string = "Mocky!";
}

class Animal {
    numLegs : number = 4;
}

class Bee extends Animal {
    keeper : BeeKeeper= new BeeKeeper();
}

class Lion extends Animal{
    keeper : ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c : new()=>A):A{
    return new c();
}

console.log(createInstance(Lion).keeper.nameTag);
console.log(createInstance(Bee).keeper.hasMask);