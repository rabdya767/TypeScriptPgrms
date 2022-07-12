class Point {
    // x!: number;
    // y!: number;
    x = 0;
    y = 0;
    x1: number | string;
    y1 = 0;
    constructor(x: number | string, y: number);
    constructor(y: string);
    constructor(x?: any, y?: number) {
        this.x1 = x;
        if (y !== undefined) {
            this.y1 = y;
        }
    }

}


const pt = new Point("100", 200);
console.log(pt);
// pt.x = 0;
// pt.y = 0;

class GoodConstructor {
    readonly name: string = "Rabdya Santhosh";

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}

class DerivedClass extends GoodConstructor{
    constructor(){
        super();
        console.log(this.name);
    }
}

console.log(new GoodConstructor("Prem").name);
console.log(new DerivedClass().name);