const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

console.log(`Car Object is ${Object.keys(car)}`);


const car1 : { type : string , mileage : number} ={
    type : "Toyota",
    mileage : 60
    //Property 'mileage' is missing in type '{ type: string; }' 
    // but required in type '{ type: string; mileage: number; }'
}

const car2 : { type : string , mileage? : number} ={
    type : "Toyota"
}
car2.mileage = 100;
