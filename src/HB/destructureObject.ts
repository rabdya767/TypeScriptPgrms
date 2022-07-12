function destructureTuple(param: [string, number]): void {
    const [inputString, hash] = param;
    console.log(inputString);
    console.log(hash);
}

destructureTuple(["This is input string", 100]);

const point: [number, number] = [3, 4];

function distanceFromOrigin([x, y]: [number, number]): number {
    return Math.sqrt(x ** 2 + y ** 2);
}

console.log(distanceFromOrigin(point));