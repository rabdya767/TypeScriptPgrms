"use strict";
class Rectangle1 {
    constructor(height1, width1) {
        this.height1 = height1;
        this.width1 = width1;
    }
    getArea() {
        return this.width1 * this.height1;
    }
}
class Square extends Rectangle1 {
    constructor(side) {
        super(side, side);
        this.side = side;
    }
}
const rct = new Rectangle1(10, 5);
console.log(`Area of Rectangle with width:5 and height:10 is ${rct.getArea()}`);
const sqr = new Square(10);
console.log(`Area of Square with side:10  is ${sqr.getArea()}`);
/**
 * Abstract Classes
 */
class Polygon {
    toString() {
        return `Polygon[area=${this.getPolygonArea()}]`;
    }
}
class RectanglePolygon extends Polygon {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getPolygonArea() {
        return this.width * this.height;
    }
}
const AbsObj = new RectanglePolygon(10, 10);
//   console.log(`Area is ${AbsObj.toString()}`);
console.log(`Area is ${AbsObj.getPolygonArea()}`);
/**
 *Generics
 */
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
