
// ───────────────🔹 CLOSURES IN JAVASCRIPT ───────────────
// A closure is formed when a function is defined inside another function,
// and it retains access to the outer function’s variables
// even after the outer function has completed execution.

// Closures are a combination of a function and its lexical environment (scope).
// This means the inner function "remembers" variables from its outer function.

function outer() {
    let outerVar = 'I am from the outer function';

    function inner() {
        // inner() has access to outerVar even after outer() is done
        console.log(outerVar);
    }

    return inner; // return the inner function itself
}

const myFunc = outer(); // outer() runs and returns inner()
myFunc(); // Output: I am from the outer function

// ───────────────🔹 WHY ARE CLOSURES USEFUL? ───────────────
// Closures are useful for:
// - Data encapsulation (private variables)
// - Maintaining state
// - Functional programming patterns like currying or function factories
// - Avoiding global variables

// Example: Creating private variables using closure

function createCounter() {
    let count = 0; // this variable is private

    return function () {
        count++; // count is remembered even after createCounter() is done
        console.log(count);
    };
}

const counter = createCounter(); // counter now holds a function with access to 'count'
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

console.log(
    counter().count)

// 'count' cannot be accessed or changed directly from outside
// It's protected by the closure

// ───────────────🔹 COMMON ISSUE: CLOSURES INSIDE LOOPS ───────────────
// A classic mistake with closures inside loops when using 'var'

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output after 1 second: 4, 4, 4 (not 1, 2, 3)
    }, 1000);
}

// Explanation:
// All three functions share the same 'i' due to 'var' being function-scoped
// By the time the timeout runs, the loop is over and i is 4

// 🔧 FIX: Use 'let' instead of 'var' for block scope

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i); // Output: 1, 2, 3
    }, 1000);
}

// ───────────────🔹 FUNCTION FACTORY EXAMPLE ───────────────
// Closures allow us to create functions customized with preserved data

function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// 'factor' is remembered in each returned function due to closure

// ✅ Summary of Closures:
// - Inner functions "remember" variables from outer functions
// - Closure is created when a function is returned or passed from inside another function
// - Useful for creating private state, avoiding global variables, or building functional patterns
