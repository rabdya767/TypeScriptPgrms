"use strict";
function getDetails(clg) {
    switch (clg.name) {
        case "JNTU":
            return `Our college is ${clg.name} located in ${clg.location}`;
        case "OSMANIA":
            return `Our college is ${clg.name} UNIVERSITY`;
        default:
            return `Cannot find the details of ${clg.name} college`;
    }
    // if (clg.name === "JNTU") {
    //     return `Our college is ${clg.name} located in ${clg.location}`;
    // }
    // else if(clg.name === "OSMANIA"){
    //     return `Our college is ${clg.name} UNIVERSITY`;
    // }
    // else {
    //     return `Cannot find the details of your college`;
    // }
}
console.log(`${getDetails({ name: "CBIT", area: 200, kind: "PVT", location: "KPHB", rank: 4, university: false })}`);
// console.log(`${getDetails({ name: "OSMANIA", area: 200, kind: "PVT", location: "SECUNDRABAD"})}`);
function example() {
    let x;
    x = Math.random() < 0.5;
    console.log(x); //x is boolean
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x); // x is string
    }
    else {
        x = 100;
        console.log(x); //x is number
    }
    return x;
}
console.log(`Value is ${example()}`);
