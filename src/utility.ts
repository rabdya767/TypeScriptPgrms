/*eslint-disable max-len */
/**
 * Partial changes all the properties in an object to be optional.
 */

interface Point {
    x: number,
    y: number
}

// eslint-disable-next-line prefer-const
let pointPart: Partial<Point> = {};
// `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart.x, pointPart.y);

/**
 * Required changes all the properties in an object to be required.
 */
interface Car {
    make: string;
    model: string;
    mileage?: number;
}

// eslint-disable-next-line prefer-const
let myCar: Required<Car> = {
    make: "Ford",
    model: "Focus",
    mileage: 12000 // `Required` forces mileage to be defined
};

console.log(`${myCar.make} ${myCar.model} ${myCar.mileage}`);

/**
 * Record is a shortcut to defining an object type with a specific key type and value type.
 * Record<string, number> is equivalent to { [key: string]: number }
 * 
 */
const nameAgeMap: Record<string, number> = {
    "Rabdya": 41,
    "Sravan": 51,
    "Venkatsh": 30,
    "Sanath": 14
};

console.log(`${nameAgeMap.Rabdya}`);

/**
 * Omit removes keys from an object type.
 * Pick removes all but the specified keys from an object type.
 */
interface Prsn {
    name: string;
    age: number;
    location?: string;
}
/**
 * const bob: Omit<Person, 'age' | 'location'> = {
 * name: 'Bob'
 * //`Omit` has removed age and location from the type and they can't be defined here
 *  }; 
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bob: Pick<Prsn, "name"> = {
    name: "Bob"
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};