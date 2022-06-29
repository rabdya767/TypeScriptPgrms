"use strict";
const address = {
    name: "Osmania University",
    street: "Tarnaka",
    city: "Hyderabad",
    country: "India",
    postalCode: 500007,
    unit: 10
};
console.log(`Address is ${Object.values(address)}`);
// function draw(circle : ColorFul & Circle){
function draw(circle) {
    console.log(`Color is ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
draw({ color: "RED", radius: 42 });
