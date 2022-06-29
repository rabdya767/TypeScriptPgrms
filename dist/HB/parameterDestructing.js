"use strict";
// eslint-disable-next-line max-len
function paramDestructing({ a, b, c }) {
    console.log(a + b + c);
}
paramDestructing({ a: 1, b: 2, c: 3 });
const f1 = () => {
    return true;
};
const f2 = () => true;
const f3 = function () {
    return false;
};
console.log(f1());
console.log(f2());
console.log(f3());
