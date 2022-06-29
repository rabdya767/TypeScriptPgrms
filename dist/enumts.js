"use strict";
/* eslint-disable @typescript-eslint/naming-convention */
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["BLACK"] = 1] = "BLACK";
    COLORS[COLORS["WHITE"] = 2] = "WHITE";
    COLORS[COLORS["GREEN"] = 3] = "GREEN";
    COLORS[COLORS["YELLOW"] = 4] = "YELLOW";
})(COLORS || (COLORS = {}));
console.log(`Position of RED color is ${COLORS.RED}`);
for (const x in COLORS) {
    console.log(`${COLORS[x]} --> ${x}`);
}
var STUDENTS;
(function (STUDENTS) {
    //auto increment
    STUDENTS[STUDENTS["RAJU"] = 1] = "RAJU";
    STUDENTS[STUDENTS["RAVI"] = 2] = "RAVI";
    STUDENTS[STUDENTS["ROHITH"] = 3] = "ROHITH";
    STUDENTS[STUDENTS["RANI"] = 4] = "RANI";
    STUDENTS[STUDENTS["RAM"] = 5] = "RAM";
})(STUDENTS || (STUDENTS = {}));
for (const x in STUDENTS) {
    console.log(`${STUDENTS[x]} --> ${x}`);
}
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);
