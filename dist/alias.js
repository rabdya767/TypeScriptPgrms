"use strict";
const CarYear = 2001;
const CarType = "Toyota";
const CarModel = "Corolla";
const Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
};
//works fine in es2017 version or later
console.log(`Car is ${Object.keys(Car)} --> ${Object.values(Car)}`);
