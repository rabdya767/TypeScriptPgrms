"use strict";
class Point {
    constructor(x, y) {
        // x!: number;
        // y!: number;
        this.x = 0;
        this.y = 0;
        this.y1 = 0;
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
    constructor(otherName) {
        this.name = "Rabdya Santhosh";
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
}
class DerivedClass extends GoodConstructor {
    constructor() {
        super();
        console.log(this.name);
    }
}
console.log(new GoodConstructor("Prem").name);
console.log(new DerivedClass().name);
