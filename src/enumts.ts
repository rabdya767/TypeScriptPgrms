enum COLORS {
    RED, BLACK, WHITE, GREEN, YELLOW
}

console.log(`Position of RED color is ${COLORS.RED}`);

for (const x in COLORS) {
    console.log(`${COLORS[x]} --> ${x}`);
}

enum STUDENTS {
    //auto increment
    RAJU = 1,
    RAVI,
    ROHITH,
    RANI,
    RAM
}
for (const x in STUDENTS) {
    console.log(`${STUDENTS[x]} --> ${x}`);
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);