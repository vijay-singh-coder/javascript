// ───────────────🔹 VARIABLES ───────────────
// ───────────────🔹 VARIABLES ───────────────
// Variables are containers for storing values.
// 'var' was used before ES6, but now we use 'let' and 'const'.
// 'let' allows reassignment, 'const' does not.

var previousNamingConvention = 'Your First Name';
let firstName = 'Your First Name';

// Declare a variable without a value (it becomes undefined by default).
let variableDeclaration;

// Assign a value later using the assignment operator (=).
variableDeclaration = 'value';

// Output to the console.
console.log(variableDeclaration); // Output: value



// ───────────────🔹 CONSTANTS ───────────────
// ───────────────🔹 CONSTANTS ───────────────
// 'const' is used when you want to prevent reassignment.
// Constants help ensure certain values never change in your program.

const christmas_2024 = '12.25.2024';
console.log(christmas_2024); // Output: 12.25.2024

// Conventionally, constants can be written in UPPERCASE with underscores.
const COLOR_GREEN = 'green';

// Type coercion example: JS converts "1" (string) and 1 (number) into same type.
let res = "1" - 1;
console.log(res); // Output: 0
console.log(typeof res); // Output: number



// ───────────────🔹 DATA TYPES ───────────────
// ───────────────🔹 DATA TYPES ───────────────
// JavaScript has 8 data types: string, number, bigint, boolean, undefined, null, symbol, object.

// String examples with different quote styles.
let favoriteFruit = 'strawberries';
let favoriteIceCream = "chocolate";
let favoriteProgrammingLanguage = `JavaScript`; // Template literals (with backticks).

// Numbers
let numberOfDonuts = 12;
let pi = 3.14;

// BigInt (for very large integers)
let veryLargeNumber = 54389759347634976346n;

// Boolean (true or false)
let lovesCoding = true;

// Undefined (declared but not assigned a value)
let favoriteColor;
console.log(favoriteColor); // Output: undefined

// Null (explicitly means "no value")
favoriteFruit = null;

// typeof operator is used to check the data type of a value
console.log(typeof 3); // number
console.log(typeof favoriteFruit); // object (because it's null)
console.log(typeof 109234532525n); // bigint
console.log(typeof 'taco'); // string
console.log(typeof null); // object (this is a known bug in JS)



// ───────────────🔹 DYNAMIC TYPING ───────────────
// ───────────────🔹 DYNAMIC TYPING ───────────────
// JavaScript is dynamically typed — variables can hold any type of value.

firstName = 'Steven';
console.log(typeof firstName); // string

firstName = 100;
console.log(typeof firstName); // number

firstName = true;
console.log(typeof firstName); // boolean



// ───────────────🔹 OBJECTS ───────────────
// ───────────────🔹 OBJECTS ───────────────
// Objects store key-value pairs and represent real-world things.
// Useful for grouping related data.

let courseObj = {
    name: 'JavaScript for Beginners',
    hours: 3,
};

// Access values using dot notation
console.log(courseObj.name);

// Modify values
courseObj.name = 'JavaScript Fundamentals';
console.log(courseObj.name);

// Access using bracket notation (useful for dynamic property access)
console.log(courseObj['name']);
courseObj['name'] = 'JavaScript 101';
console.log(courseObj.name);

// Dynamic access with variables
let property = 'hours';
console.log(courseObj[property]);

// Minimal object example
let obj = {
    key: 'value'
};



// ───────────────🔹 ARRAYS ───────────────
// ───────────────🔹 ARRAYS ───────────────
// Arrays are ordered lists and use square brackets []. They are also objects.

let productColors = ['blue', 'green'];
console.log(productColors); // Output: [ 'blue', 'green' ]

// Accessing elements using index
console.log(productColors[0]); // Output: blue

// Arrays are technically of type 'object'
console.log(typeof productColors); // Output: object

// .length property gives total number of elements
console.log(productColors.length); // Output: 2



// ───────────────🔹 FUNCTIONS (BASIC) ───────────────
// ───────────────🔹 FUNCTIONS (BASIC) ───────────────
// Functions group reusable code to perform actions or return values.

function sayHi() {
    console.log('Hi!');
}
sayHi(); // Output: Hi!

// Function with a parameter
function sayHiPartTwo(name) {
    console.log('Hi! ' + name);
}
sayHiPartTwo('John'); // Output: Hi! John



// ───────────────🔹 FUNCTIONS (RETURN VALUES) ───────────────
// ───────────────🔹 FUNCTIONS (RETURN VALUES) ───────────────
// Functions can also calculate and return a value using the `return` keyword.

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 2)); // Output: 4

// Function without a return will return undefined by default
function add(num1, num2) {
    const sum = num1 + num2;
    // no return here
}
console.log(add(3, 3)); // Output: undefined


// QUESTIONS
// QUESTIONS
// QUESTIONS
// QUESTIONS
// QUESTIONS


// 🧠 1. What is the difference between `let` and `const` in JavaScript? Give one example of each.

// 🧠 2. What will be the output of the following code and why?
// let x;
// console.log(x);

// 🧪 3. Explain what happens in this line of code and the final output:
// let res = "1" - 1;

// 🧪 4. Why does `typeof null` return `'object'` instead of `'null'`?

// 🧰 5. How does dynamic typing work in JavaScript? Give an example of a variable changing types.

// 🧱 6. What are two ways to access or modify a property inside an object? Provide code examples for both.

// 🧱 7. What will this code output and why?
// let property = 'hours';
// let course = { hours: 3 };
// console.log(course[property]);

// 📚 8. What is the type of an array in JavaScript according to the `typeof` operator, and how can you get the number of elements in it?

// 🧮 9. What will the following function call output and why?
// function add(a, b) {
//     const result = a + b;
// }
// console.log(add(2, 3));

// 🧮 10. Write a function named `greetUser` that takes a username and returns a greeting like: `Hello, Alice!`

// 🛠️ 11. Create a function called `square` that takes a number and returns its square.

// 🛠️ 12. Create an object called `book` with properties: title, author, and pages.

// 🛠️ 13. Create an array named `favoriteFoods` with at least 3 string values.

// 🛠️ 14. Create a function called `isEven` that returns true if a number is even, false otherwise.

// 🛠️ 15. Declare a variable called `status` using `let` and assign it a boolean value.

// 🛠️ 16. Create a constant called `PI` and assign it the value 3.14159.

// 🛠️ 17. Write a function named `multiplyByTen` that takes one parameter and returns the number multiplied by 10.

// 🛠️ 18. Create an object `person` with name, age, and hobbies (as an array of strings).

// 🛠️ 19. Create a function `getFirstElement` that takes an array and returns its first element.

// 🛠️ 20. Write a function called `printCourseInfo` that logs the name and hours of a course object passed to it.
