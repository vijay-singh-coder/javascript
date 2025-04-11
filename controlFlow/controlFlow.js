// ---------------------- Control Flow in JavaScript ----------------------
// Control flow allows us to control how code is executed based on conditions.

// ---------------------- if / else if / else ----------------------
// Use these to perform conditional logic.

let temperature = 30;

if (temperature > 35) {
  console.log('It’s really hot outside!');
} else if (temperature > 20) {
  console.log('Nice and warm outside.');
} else {
  console.log('It’s cold outside.');
}

// ---------------------- if statements with boolean variables ----------------------

let isLoggedIn = true;

if (isLoggedIn) {
  console.log('Welcome back!');
} else {
  console.log('Please log in.');
}

// ---------------------- truthy / falsy with control flow ----------------------

let username = '';

if (username) {
  console.log('Hello, ' + username);
} else {
  console.log('No username provided.');
}

// ---------------------- switch statement ----------------------
// Useful when you have many specific cases to handle

let day = 'Tuesday';

switch (day) {
  case 'Monday':
    console.log('Start of the work week.');
    break;
  case 'Tuesday':
    console.log('Second day of work.');
    break;
  case 'Wednesday':
    console.log('Mid-week day.');
    break;
  case 'Friday':
    console.log('Almost weekend!');
    break;
  default:
    console.log('Enjoy your day!');
}

// ---------------------- Ternary Operator (again) ----------------------
// Best for simple one-line conditionals

let isMember = true;
const accessLevel = isMember ? 'Full Access' : 'Guest Access';
console.log(accessLevel); // 'Full Access'

// ---------------------- Nested if statements ----------------------
// You can combine multiple conditions inside if blocks

let score = 85;

if (score >= 80) {
  if (score >= 90) {
    console.log('Grade: A');
  } else {
    console.log('Grade: B');
  }
} else {
  console.log('Below average');
}

// ---------------------- Logical Operators with if ----------------------
// Combine multiple conditions with && (and) and || (or)

let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log('Allowed to enter.');
} else {
  console.log('Access denied.');
}

// ---------------------- Guard Clauses ----------------------
// Return early to avoid deep nesting

function greetUser(name) {
  if (!name) {
    console.log('No name provided');
    return;
  }

  console.log('Hello, ' + name);
}

greetUser('Alice');
greetUser('');


let react = true
let node = true
let db = false

react ?
  (node ?
    (
      db ?
        "you get a job"
        : console.log("no db")
    )
    : console.log("no node")
  )
  : console.log("no job")

// ---------------------- Conclusion ----------------------
// Control flow lets us build logic and make decisions based on data or conditions.
// Start with `if`, then scale to `else if`, `else`, `switch`, and ternary when needed.



//questions
//questions
//questions

// ---------------------- Control Flow – Practice Questions ----------------------

// 1. Write a program that checks if a person is eligible to vote (age ≥ 18)

// 2. Write a grading system:
//    - If marks ≥ 90: Grade A
//    - If marks ≥ 75: Grade B
//    - If marks ≥ 50: Grade C
//    - Else: Fail

// 3. Given a variable `username`, log "Welcome" if it's truthy, otherwise log "Please enter username".

// 4. Use a switch case to log a message based on the value of `day` (e.g. Monday, Tuesday, etc).

// 5. Use the ternary operator to check if a number is even or odd.

// 6. A user can enter a party if they are over 18 AND have an invitation. Use logical AND (&&) to check both.

// 7. Use nested if statements to check if a number is positive, negative, or zero.

// 8. Write a function `greet(name)` that returns early with "No name provided" if `name` is falsy.
