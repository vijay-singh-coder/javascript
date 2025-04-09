// ---------------------- Expressions & Arithmetic Operators ----------------------
// An expression in JavaScript is anything that produces a value.
// It goes on the right-hand side of a variable assignment.

console.log(2 + 2); // 4
console.log(4 - 2); // 2
console.log(2 * 2); // 4
console.log(9 / 3); // 3
console.log(10 % 2); // 0 (remainder)
console.log(3 ** 2); // 9 (exponentiation)

// ---------------------- Increment & Decrement ----------------------
// Shorthand ways to increment or decrement a value

let a = 10;

a = a + 1;
a += 1;  // shorthand

a++;    // post-increment (returns previous value)
++a;    // pre-increment (returns updated value)

a--;    // post-decrement
--a;    // pre-decrement

a -= 1; // shorthand subtraction

// ---------------------- Assignment Operator ----------------------
// = is the assignment operator, not a comparison.
let programmingLanguage = 'JavaScript';

// ---------------------- Comparison Operators ----------------------
// >, >=, <, <= return a boolean: true or false

let num1 = 14;
let num2 = 10;

const isNum1Greater = num1 > num2; // true
const isNum1GreaterThanOrEqualTo = num1 >= num2; // true
const isNum1LessThan = num1 < num2; // false
const isNum1LessThanOrEqualTo = num1 <= num2; // false

console.log('isNum1Greater', isNum1Greater);
console.log('isNum1GreaterThanOrEqualTo', isNum1GreaterThanOrEqualTo);
console.log('isNum1LessThan', isNum1LessThan);
console.log('isNum1LessThanOrEqualTo', isNum1LessThanOrEqualTo);

// ---------------------- Equality Operators ----------------------
// ==  → loose equality (compares values only)
// === → strict equality (compares values AND types)

let b = '2';

console.log(a == b);  // true (because 2 == '2')
console.log(a === b); // false (different types)

console.log(true == '1');  // true

// Always use === to avoid type coercion confusion

// ---------------------- Ternary Operator ----------------------
// A shorthand for if-else conditions: condition ? trueValue : falseValue

let age = 16;
const canDrive = age >= 16 ? true : false;
console.log('canDrive', canDrive);

let points = 110;
const customerType = points > 100 ? 'gold' : 'silver';
console.log('customerType', customerType);

// ---------------------- Logical Operators ----------------------
// || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing)

// || OR Operator — returns the first truthy value

console.log(true || false);  // true
console.log(false || 'Steven'); // 'Steven'
console.log(false || 1 || 2);   // 1

let hasReservation = true;
let acceptingWalkIns = false;
const hasAccessToTable = hasReservation || acceptingWalkIns;
console.log('hasAccessToTable', hasAccessToTable);

// && AND Operator — returns the first falsy value or last truthy if all are truthy

console.log(true && true);    // true
console.log(false && true);   // false

let hasCar = true;
const isEligibleToDrive = age >= 16 && hasCar;
console.log('isEligibleToDrive', isEligibleToDrive);

// Example with grouping
let x = true, y = true, z = true, w = true;
console.log((x && y) || (z && w)); // true

// ! NOT Operator — inverts a boolean

console.log(!true); // false

let isClosedOnSunday = true;
const isRestaurantOpen = !isClosedOnSunday;
console.log('isRestaurantOpen', isRestaurantOpen); // false

// ?? Nullish Coalescing Operator — returns right side only if left side is null or undefined

let doesValueExist = null;
const result = doesValueExist ?? false; // false

// Equivalent to:
const resultOfExpression = (doesValueExist !== null && doesValueExist !== undefined) ? doesValueExist : false;

// ---------------------- Truthy & Falsy Values ----------------------
// Falsy values: undefined, null, 0, false, '', NaN
// Everything else is considered truthy

console.log(false || 'default'); // 'default'

// Another example using default value with OR
let usersChosenColor = 'blue';
let defaultColor = 'green';
const currentWebsiteColor = usersChosenColor || defaultColor;
console.log('currentWebsiteColor', currentWebsiteColor); // blue


// ---------------------- Operator – Practice Questions ----------------------

// 1. Use arithmetic operators to calculate the result of: (5 + 3) * 2

// 2. Use the modulo operator (%) to check if a number is even.

// 3. Use the exponentiation operator to calculate 3 to the power of 4.

// 4. Use shorthand (+=) to increment a variable from 10 to 15.

// 5. Compare two variables using loose equality (==) and log the result.

// 6. Compare two variables using strict equality (===) and log the result.

// 7. Use the ternary operator to check if a person is an adult (age >= 18).

// 8. Use logical AND (&&) to check if `isLoggedIn` and `hasSubscription` are both true.

// 9. Use logical OR (||) to assign a default name if userName is falsy.

// 10. Use the NOT (!) operator to invert a boolean value.

// 11. Use nullish coalescing (??) to assign a fallback value to a variable if it is null or undefined.

