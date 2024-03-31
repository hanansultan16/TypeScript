// operators

// arthmeitc
// -addition
let x = 2;
let y = 5;

let add = 2 + 5;
let add1 = "x" + "y";
let add2 = "xy" + x + y;
let add3 = "xy" + add;
let add4 = x + y + "xy";
let add5 = x + y + "xy" + x;
console.log("add: ", add);
console.log("add1: ", add1);
console.log("add2 ", add2);
console.log("add3 ", add3);
console.log(add4, "add4");
console.log(add5, "add5");

// -subtraction
let sub = 7 - 3;
// let sub1 = "x" - "y"; // error
// let sub2 = 2 - "y"; // error
console.log(sub, "sub");

// - multiplication
let multiplication = 7 * 3;
// let multiplication1 = "x" * "y"; // error
// let multiplication2 = 2 * "y"; // error
console.log(multiplication, "multiplication");

// -division
let division = 7 / 3;
// let division1 = "x" / "y"; // error
// let division2 = 2 / "y"; // error
console.log(division, "division");

// -exponentiation
let exp = x ** y;
console.log("exp ", exp);
