/**
 *  It is used when we we know that a variable that 
 * TypeScript thinks could be null or undefined actually isn't.
 */
class genericNumber<NumType>{
    zeroValue!: NumType;
    add!: (x: NumType, y: NumType) => NumType;
}

const myGenericNumber = new genericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};
console.log(`${myGenericNumber.zeroValue}`);
console.log(`${myGenericNumber.add(2,3)}`);

const stringNumeric = new genericNumber<string>();
stringNumeric.zeroValue = "empty";
stringNumeric.add = function(x, y) {
    return x + y;
};

console.log(`${stringNumeric.zeroValue}`);
console.log(`${stringNumeric.add("Hello ","World!")}`);

function getProperty<Type,Key extends keyof Type>(obj :Type,key :Key):Type[Key]{
    return obj[key];
}

const x12 = {a:1,b:2,c:3,d:4};

console.log(getProperty(x12,"a"));
// Argument of type '"m"' is not assignable to parameter of 
//type '"a" | "b" | "c" | "d"'
// console.log(getProperty(x12,"m"));