/* eslint-disable @typescript-eslint/no-unused-vars */
let horseType: number | string;

type onlyBoolsAndHorses = {
    [key: string]: boolean | typeof horseType;
};

const conforms: onlyBoolsAndHorses = {
    del: true,
    rodney: false,
    asdf: "hello",
};

console.log(conforms.del);
console.log(conforms.rodney);
console.log(conforms.asdf);

