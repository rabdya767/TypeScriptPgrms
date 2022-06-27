interface shape {
    getArea: () => number;
}

class Rectangle1 implements shape {
    public constructor(protected readonly height1: number, protected readonly width1: number) { }

    public getArea(): number {
        return this.width1 * this.height1;
    }
}

class Square extends Rectangle1 {
    public constructor(protected readonly side: number) {
        super(side, side);
    }
}

const rct: Rectangle1 = new Rectangle1(10, 5);
console.log(`Area of Rectangle with width:5 and height:10 is ${rct.getArea()}`);

const sqr: Square = new Square(10);
console.log(`Area of Square with side:10  is ${sqr.getArea()}`);

/**
 * Abstract Classes
 */

abstract class Polygon {
    public abstract getPolygonArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getPolygonArea()}]`;
    }
}

class RectanglePolygon extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getPolygonArea(): number {
        return this.width * this.height;
    }
}

const AbsObj = new RectanglePolygon(10, 10);
//   console.log(`Area is ${AbsObj.toString()}`);
console.log(`Area is ${AbsObj.getPolygonArea()}`);

/**
 *Generics
 */
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  const value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10