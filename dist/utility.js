"use strict";
/*eslint-disable max-len */
/**
 * Partial changes all the properties in an object to be optional.
 */
// eslint-disable-next-line prefer-const
let pointPart = {};
// `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart.x, pointPart.y);
// eslint-disable-next-line prefer-const
let myCar = {
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
const nameAgeMap = {
    "Rabdya": 41,
    "Sravan": 51,
    "Venkatsh": 30,
    "Sanath": 14
};
console.log(`${nameAgeMap.Rabdya}`);
/**
 * const bob: Omit<Person, 'age' | 'location'> = {
 * name: 'Bob'
 * //`Omit` has removed age and location from the type and they can't be defined here
 *  };
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bob = {
    name: "Bob"
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
