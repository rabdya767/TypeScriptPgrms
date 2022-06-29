interface Box<Type> {
    contents: Type;
}

/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let boxString: Box<string>;
let boxBoolean: Box<boolean>;
let boxNumber: Box<number>;

boxString = { contents: "Hello World!" };
boxBoolean = { contents: true };
boxNumber = { contents: 41 };