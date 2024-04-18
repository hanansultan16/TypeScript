// Question 1 Solution

let greeting = "Hello World";
console.log(greeting);

// Qustion 2 Solution

let num1 = 10;
let num2 = 8;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log(sum); // 18
console.log(difference); // 2
console.log(product); //80
console.log(quotient); // 1.25

// Question 3 Solution

let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a); // 5
console.log("b =", b); // 10

// Switching the values without a third variable
a = a + b;
b = a - b;
a = a - b;

console.log("After swapping:");
console.log("a =", a); // 10
console.log("b =", b); // 5

// Question 4 Solution

let message: string 45;
console.log(message);    // It is impossible so it gives Error

// Question 5 Solution

let num3 = 7;
let num4 = 9;

let modules = num3 % num4;
console.log(modules); // 7

// Question 6 Solution

let counter = 0;
counter += 1; // 1
counter = counter + 1; // 2
console.log(counter); // 2

// Question 7 Solution

let q = true;
let w = false;
let e = true;

// And  operator (&&)
console.log(q && w); // false
console.log(q && e); // true
console.log(w && e); // false

// Or  operator (||)
console.log(q || w); // true
console.log(q || e); // true
console.log(w || e); // true

//  Not (!) operator
console.log(!q == w); // true
console.log(!w == e); // true
console.log(!q == !e); // true

// Question 8 Solution

let num = 10;

num += 5; // 15
num -= 5; // 10
num /= 5; // 2
num *= 5; // 10
num %= 5; // 0

console.log(num); // 0

// Question 9 Solution

let i: number = 34;

// Check if i is even or odd
if (i % 2 == 0) {
  console.log(`${i} is even.`);
} else {
  console.log(`${i} is odd.`);
}

// Question 10 Solution

let age = 16;

if (age < 18) {
  console.log("You are not eligilble  for voting.");
} else {
  console.log("You are eligible for voting.");
}

// Question 11 Solution

let score = 100;
let grade: string;

if (score >= 90) {
  grade = "A";
} else if (score >= 75) {
  grade = "B";
} else if (score >= 60) {
  grade = "C";
} else if (score >= 50) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade, "Your Grade is A Congratulations");

// Question 12 Solution

let x = 32;
let y = 45;
let z = 23;
let max: number;

if (x > y && x > z) {
  max = x;
} else if (y > x && y > z) {
  max = y;
} else {
  max = z;
}
console.log(`The maximum value between ${x},${y}, and ${z} is ${max}`);

// Question 13 Solution

let year = 2024;

if (year % 4 === 0) {
  console.log("This is a leap year.");
} else {
  console.log("This is not a leap year.");
}

// Question 14 Solution

let fahrenheit = 86;
let celsius = ((fahrenheit - 32) * 5) / 9;
console.log(
  `${fahrenheit} degrees Fahrenheit equals ${celsius} degrees Celsius`
);

// Question 15 Solution

let number = 2;

function checkNumber(num: number): string {
  // Check if number is positive
  if (num > 0) {
    return "Positive";
  }
  // Check if number is negative
  else if (num < 0) {
    return "Negative";
  }
  // If not positive or negative, number is zero
  else {
    return "Zero";
  }
}

console.log(`The number ${number} is ${checkNumber(number)}.`);

// Question  16 Solution

const givenNumber = 7;

console.log(`${givenNumber} X 1 = ${givenNumber * 1}`);
console.log(`${givenNumber} X 2 = ${givenNumber * 2}`);
console.log(`${givenNumber} X 3 = ${givenNumber * 3}`);
console.log(`${givenNumber} X 4 = ${givenNumber * 4}`);
console.log(`${givenNumber} X 5 = ${givenNumber * 5}`);
console.log(`${givenNumber} X 6 = ${givenNumber * 6}`);
console.log(`${givenNumber} X 7 = ${givenNumber * 7}`);
console.log(`${givenNumber} X 8 = ${givenNumber * 8}`);
console.log(`${givenNumber} X 9 = ${givenNumber * 9}`);
console.log(`${givenNumber} X 10 = ${givenNumber * 10}`);
