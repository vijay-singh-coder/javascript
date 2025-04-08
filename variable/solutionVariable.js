// 🧠 1. What is the difference between `let` and `const` in JavaScript? Give one example of each.
let age = 25;
const BIRTH_YEAR = 2000;

// 🧠 2. What will be the output of the following code and why?
let x;
console.log(x); // undefined, because it's declared but not assigned

// 🧪 3. Explain what happens in this line of code and the final output:
let res = "1" - 1;
console.log(res); // 0 — JS converts "1" to number and subtracts

// 🧪 4. Why does `typeof null` return `'object'` instead of `'null'`?
console.log(typeof null); // "object" — this is a known bug in JS

// 🧰 5. How does dynamic typing work in JavaScript? Give an example of a variable changing types.
let data = "Hello";
data = 123;
data = true;
console.log(typeof data); // "boolean"

// 🧱 6. What are two ways to access or modify a property inside an object? Provide code examples for both.
let user = { name: "Alice", age: 30 };
console.log(user.name); // dot notation
console.log(user["age"]); // bracket notation

// 🧱 7. What will this code output and why?
let property = 'hours';
let course = { hours: 3 };
console.log(course[property]); // 3 — property holds the key name as a string

// 📚 8. What is the type of an array in JavaScript according to the `typeof` operator, and how can you get the number of elements in it?
let fruits = ['apple', 'banana', 'cherry'];
console.log(typeof fruits); // "object"
console.log(fruits.length); // 3

// 🧮 9. What will the following function call output and why?
function add(a, b) {
    const result = a + b;
}
console.log(add(2, 3)); // undefined — no return statement

// 🧮 10. Write a function named `greetUser` that takes a username and returns a greeting like: `Hello, Alice!`
function greetUser(username) {
    return `Hello, ${username}!`;
}
console.log(greetUser("Alice")); // Hello, Alice!

// 🛠️ 11. Create a function called `square` that takes a number and returns its square.
function square(num) {
    return num * num;
}
console.log(square(5)); // 25

// 🛠️ 12. Create an object called `book` with properties: title, author, and pages.
let book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320
};
console.log(book);

// 🛠️ 13. Create an array named `favoriteFoods` with at least 3 string values.
let favoriteFoods = ["pizza", "sushi", "tacos"];
console.log(favoriteFoods);

// 🛠️ 14. Create a function called `isEven` that returns true if a number is even, false otherwise.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false

// 🛠️ 15. Declare a variable called `status` using `let` and assign it a boolean value.
let status = true;
console.log(status);

// 🛠️ 16. Create a constant called `PI` and assign it the value 3.14159.
const PI = 3.14159;
console.log(PI);

// 🛠️ 17. Write a function named `multiplyByTen` that takes one parameter and returns the number multiplied by 10.
function multiplyByTen(num) {
    return num * 10;
}
console.log(multiplyByTen(6)); // 60

// 🛠️ 18. Create an object `person` with name, age, and hobbies (as an array of strings).
let person = {
    name: "John",
    age: 28,
    hobbies: ["reading", "gaming", "cycling"]
};
console.log(person);

// 🛠️ 19. Create a function `getFirstElement` that takes an array and returns its first element.
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 20, 30])); // 10

