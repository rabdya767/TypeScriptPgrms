function squareArray(x: number[]): number[] {
    return x.map(i => i ** 2);
}
// eslint-disable-next-line prefer-const
let array = [1, 5, 7, 3, 2, 9, 4, 6];
console.log(squareArray(array));

function multiplyNumber(n: number, ...m: number[]): number[] {
    return m.map((x) => n * x);
}

// eslint-disable-next-line prefer-const
let m: number[] = multiplyNumber(9, 0, 1, 2, 3, 4, 5);
console.log(m);

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6, 7, 8];

const concatArray: number = array1.push(...array2);
console.log(concatArray);