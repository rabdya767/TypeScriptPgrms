//exporting
export default function helloWorld(): void {
    console.log("Hello World!");
}

export const PI = 3.141;
export const squareTwo = 1.41;
export const phi = 1.61;

export function absolute(num: number): number {
    return (num < 0) ? num * (-1) : num;
}