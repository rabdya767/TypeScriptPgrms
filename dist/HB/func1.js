"use strict";
function optionalParam(n) {
    if (n) {
        console.log(`My Id is ${n}`);
    }
    else {
        console.log(`Id is empty`);
    }
}
optionalParam(12);
optionalParam();
