"use strict";
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(`Car Object is ${Object.keys(car)}`);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const car1 = {
    type: "Toyota",
    mileage: 60
    //Property 'mileage' is missing in type '{ type: string; }' 
    // but required in type '{ type: string; mileage: number; }'
};
const car2 = {
    type: "Toyota"
};
car2.mileage = 100;
