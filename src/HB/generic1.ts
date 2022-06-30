/* eslint-disable max-len */
//using identity function
function identity(arg: any): any {
    return arg;
}

console.log(`Number ${identity(100)}`);
console.log(`Boolean ${identity(true)}`);
console.log(`String ${identity("Hello World!")}`);
console.log(`Object ${identity({})}`);
console.log(`Array[] ${identity([1, 3, 4, 5, 7])}`);

//using Generic Type function
function identityGeneric<Type>(arg: Type): Type {
    return arg;
}
console.log(`Number ${identityGeneric<number>(100)}`);
console.log(`Boolean ${identityGeneric<boolean>(true)}`);
console.log(`String ${identityGeneric<string>("Hello World!")}`);
console.log(`Object ${identityGeneric<object>({})}`);
console.log(`Array[] ${identityGeneric<number[]>([8, 78, 6, 3, 1, 97])}`);

// function loggingIdentityLength<Type>(arg: Array<Type>): Array<Type> {//};
function loggingIdentityLength<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}
console.log(`Number[4,6,2,6,8,9] ${loggingIdentityLength<number>([4, 6, 2, 6, 8, 9])}`);
console.log(`Boolean[true,false,true,false,false] ${loggingIdentityLength<boolean>([true, false, true, false, false])}`);
console.log(`String["Hello","World","!"] ${loggingIdentityLength<string>(["Hello", "World", "!"])}`);
console.log(`Object[{},{a:3,b:5},{x:4,y:8,z:9}] ${loggingIdentityLength<object>([{}, { a: 3, b: 5 }, { x: 4, y: 8, z: 9 }])}`);

interface lengthWise {
    length: number;
}

function loggingIdentityLengthWise<Type extends lengthWise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}
// Argument of type 'number' is not assignable to parameter of type 'lengthWise'
// loggingIdentityLengthWise(3);

console.log(loggingIdentityLengthWise({ length: 10, value: 3 }));
