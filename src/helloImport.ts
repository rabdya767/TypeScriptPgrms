// import helloWorld, { PI, squareTwo, phi as Ï, absolute } from "./hello.js";
// import helloWorld from "./hello.js";
// import { PI, squareTwo, absolute } from "./hello.js";
// import { phi as Ï } from "./hello.js";
// helloWorld();
// console.log("PI is ", PI);
// console.log("SquareTwo is ", squareTwo);
// console.log("phi is ", Ï);
// console.log(absolute(-8));

import helloWorld, * as math from "./hello.js";
helloWorld();
console.log("PI is ", math.PI);
console.log("SquareTwo is ", math.squareTwo);
console.log("phi is ", math.phi);
console.log(math.absolute(-8));
