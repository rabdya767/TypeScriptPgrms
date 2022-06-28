// eslint-disable-next-line max-len
function paramDestructing({ a, b, c }: { a: number; b: number, c: number }): void {
    console.log(a + b + c);
}

paramDestructing({ a: 1, b: 2, c: 3 });

type VoidFunc = () => void;
const f1: VoidFunc = () => {
    return true;
};

const f2: VoidFunc = () => true;

const f3: VoidFunc = function() {
    return false;
};
console.log(f1());
console.log(f2());
console.log(f3());
