/* eslint-disable max-len */
interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};

interface ColoredRectangle extends Rectangle {
    color: string
}

const coloredRectangle: ColoredRectangle = {
    height: 30,
    width: 15,
    color: "RED"
};

console.log(`Rectangle height : ${rectangle.height} and width : ${rectangle.width}`);
console.log(`ColouredRectangle height: ${coloredRectangle.height} width: ${coloredRectangle.width} and color: ${coloredRectangle.color}`);

/**
 * TypeScript Union Types
 * Union types are used when a value can be more than a single type.
 * Such as when a property would be string or number
 * Using the | we are saying our parameter is a string or number
 */

function printStatusCode(code: string | number): void {
    console.log(`Status code is ${code} and type is ${typeof (code)}`);
}

printStatusCode(404);
printStatusCode("404");