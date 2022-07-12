"use strict";
/* eslint-disable max-len */
//using identity function
function identity(arg) {
    return arg;
}
console.log(`Number ${identity(100)}`);
console.log(`Boolean ${identity(true)}`);
console.log(`String ${identity("Hello World!")}`);
console.log(`Object ${identity({})}`);
console.log(`Array[] ${identity([1, 3, 4, 5, 7])}`);
//using Generic Type function
function identityGeneric(arg) {
    return arg;
}
console.log(`Number ${identityGeneric(100)}`);
console.log(`Boolean ${identityGeneric(true)}`);
console.log(`String ${identityGeneric("Hello World!")}`);
console.log(`Object ${identityGeneric({})}`);
console.log(`Array[] ${identityGeneric([8, 78, 6, 3, 1, 97])}`);
// function loggingIdentityLength<Type>(arg: Array<Type>): Array<Type> {//};
function loggingIdentityLength(arg) {
    console.log(arg.length);
    return arg;
}
console.log(`Number[4,6,2,6,8,9] ${loggingIdentityLength([4, 6, 2, 6, 8, 9])}`);
console.log(`Boolean[true,false,true,false,false] ${loggingIdentityLength([true, false, true, false, false])}`);
console.log(`String["Hello","World","!"] ${loggingIdentityLength(["Hello", "World", "!"])}`);
console.log(`Object[{},{a:3,b:5},{x:4,y:8,z:9}] ${loggingIdentityLength([{}, { a: 3, b: 5 }, { x: 4, y: 8, z: 9 }])}`);
function loggingIdentityLengthWise(arg) {
    console.log(arg.length);
    return arg;
}
// Argument of type 'number' is not assignable to parameter of type 'lengthWise'
// loggingIdentityLengthWise(3);
console.log(loggingIdentityLengthWise({ length: 10, value: 3 }));
