"use strict";
function createLabel(nameOrId) {
    throw `${nameOrId} is unimplemented`;
}
console.log(createLabel("hello"));
function createLabel1(idOrName) {
    throw idOrName + " Using Conditional Type ";
}
const a1 = createLabel1("TypeScript!"); //a is nameLabel Type
const b1 = createLabel1(2.8); //b is idLabel Type
const c1 = createLabel1(Math.random() ? "hello" : 42);
// "message" property isn't available in dogMessageContents 
// so by default we mentioning "never" type
