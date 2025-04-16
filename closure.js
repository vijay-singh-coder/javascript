
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


//********************************************************** */
//CURRYING
//CURRYING
//CURRYING
//********************************************************** */

// 🔥 What is Currying?
// Currying is a process in functional programming where a function with multiple arguments
// is transformed into a sequence of functions, each taking a single argument.

// 🧠 Why Use Currying?
// - Makes code reusable and modular
// - Useful in function composition
// - Cleaner and more readable logic

// 💡 Example without currying:
function addNormal(a, b) {
    return a + b;
  }
  console.log(addNormal(2, 3)); // Output: 5
  
  // ✅ Same function with currying:
  function addCurried(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log(addCurried(2)(3)); // Output: 5
  
  // 👆 What happens here:
  // - addCurried(2) returns a function: function(b) { return 2 + b }
  // - Then we call that function with (3), so it becomes 2 + 3
  
  // 🛠️ More Practical Example: Greeting Function
  function greet(greeting) {
    return function(name) {
      return `${greeting}, ${name}!`;
    };
  }
  const sayHello = greet("Hello");
  console.log(sayHello("Alice")); // Hello, Alice!
  console.log(sayHello("Bob"));   // Hello, Bob!
  
  // 👇 sayHello is a curried function with "Hello" already provided
  // We just reuse it for different names
  
  // 💪 Currying using ES6 Arrow Functions
  const multiply = a => b => a * b;
  console.log(multiply(2)(5)); // Output: 10
  
  // ⚠️ Note:
  // - Currying transforms a multi-arg function into a series of 1-arg functions
  // - It is not the same as Partial Application
  // - Partial Application means pre-filling some arguments, but doesn’t require all functions to be unary
  
  // ✅ Summary:
  // - Currying breaks a function into smaller one-argument functions
  // - It’s powerful for code reuse and functional patterns
  // - Can be written using regular or arrow functions
  
//********************************************************** */
  //call, apply, and bind
  //call, apply, and bind
  //call, apply, and bind
//********************************************************** */


  // 🔥 What are call, apply, and bind?
// These are JavaScript methods used to control the value of `this` inside functions.

// JavaScript functions are first-class objects, and they come with some built-in methods:
// - call()
// - apply()
// - bind()

// Let's create an example object:
const person = {
    name: "Alice",
    greet: function(city, country) {
      console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
    }
  };
  
  // ------------------------------------------------------------
  // 🧠 call()
  // Immediately invokes the function with a specified `this` value and arguments passed one by one
  
  // Syntax: func.call(thisArg, arg1, arg2, ...)
  
  person.greet("Delhi", "India"); 
  // Output: Hi, I'm Alice from Delhi, India
  
  const person2 = { name: "Bob" };
  person.greet.call(person2, "Paris", "France"); 
  // Output: Hi, I'm Bob from Paris, France
  
  // ------------------------------------------------------------
  // 🧠 apply()
  // Same as call(), but arguments are passed as an array
  
  // Syntax: func.apply(thisArg, [arg1, arg2, ...])
  
  person.greet.apply(person2, ["Berlin", "Germany"]); 
  // Output: Hi, I'm Bob from Berlin, Germany
  
  // ------------------------------------------------------------
  // 🧠 bind()
  // Returns a new function with the specified `this` value and optional preset arguments.
  // It does NOT invoke the function immediately.
  
  // Syntax: const newFunc = func.bind(thisArg, arg1, arg2, ...)
  
  const greetBob = person.greet.bind(person2, "Tokyo", "Japan");
  
  greetBob(); 
  // Output: Hi, I'm Bob from Tokyo, Japan
  
  // ------------------------------------------------------------
  // 🧪 Summary Differences:
  
  // call():
  // - Invokes the function immediately
  // - Pass arguments one by one
  
  // apply():
  // - Invokes the function immediately
  // - Pass arguments as an array
  
  // bind():
  // - Returns a new function
  // - Use it later with the given `this` and preset args
  
  // ------------------------------------------------------------
  // 💡 Real-world usage example: Borrowing a method
  
  const calculator = {
    total: 0,
    add(a) {
      this.total += a;
      return this.total;
    }
  };
  
  const calc2 = { total: 10 };
  
  // Use add() method from calculator for calc2 using call
  console.log(calculator.add.call(calc2, 5)); // 15
  
  // Use bind to create a reusable function for calc2
  const addToCalc2 = calculator.add.bind(calc2);
  console.log(addToCalc2(10)); // 25
  
  // calc2.total is now updated to 25
  
  // ------------------------------------------------------------
  // ✅ Final Tip:
  // Use call/apply when you want to change context and invoke immediately
  // Use bind when you want to change context but call the function later
  