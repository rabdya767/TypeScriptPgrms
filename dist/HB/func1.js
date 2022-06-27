"use strict";
function OptionalParam(n) {
    if (n) {
        console.log(`My Id is ${n}`);
    }
    else {
        console.log(`Id is empty`);
    }
}
OptionalParam(12);
OptionalParam();
