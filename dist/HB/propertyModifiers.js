"use strict";
function paintShape(opts) {
    /**
     * @xPos and @ypos is always numbers in this case
     */
    let xPos = opts.xPos === undefined ? 0 : opts.xPos;
    let yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(`Shape is ${opts.shape} and its coordinates are (x,y)=(${xPos},${yPos})`);
    /**
     * ?Using Optional Chaining
     * @PropertyModifiers
     * if (opts?.xPos && opts?.yPos) {
     *      console.log(`Shape is ${opts.shape} and its coordinates are (x,y)=(${opts.xPos},${opts.yPos})`);
     *  } else {
     *      console.log(`Shape is ${opts.shape}`);
     * }
     * }
     */
}
function paintShapeDefault({ shape, xPos = 0, yPos = 0 }) {
    console.log(`Shape is ${shape}`);
    console.log(`x coordinate at ${xPos}`);
    console.log(`y coordinate at ${yPos}`);
}
const shape = "Circle";
paintShape({ shape });
paintShape({ shape, xPos: 10 });
paintShape({ shape, xPos: 10, yPos: 8 });
paintShapeDefault({ shape });
paintShapeDefault({ shape, xPos: 10 });
paintShapeDefault({ shape, xPos: 10, yPos: 8 });
