type carYear = number;
type carType = string;
type carModel = string;

type car = {
    year: carYear,
    type: carType,
    model: carModel
}

const CarYear : carYear = 2001;
const CarType : carType = "Toyota";
const CarModel : carModel="Corolla";

const Car : car = {
    year : CarYear,
    type : CarType,
    model : CarModel
};
//works fine in es2017 version or later
console.log(`Car is ${Object.keys(Car)} --> ${Object.values(Car)}`);

