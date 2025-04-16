// =====================
// Constructor Functions & Prototypal Inheritance
// =====================

// 1. Create a constructor function called `Programmer` that takes a `name` parameter and sets it as an instance property.
// What should the constructor function `Programmer` do?

function Programmer(name) {
    this.name = name;  // Instance property
}

// 2. Add a method `code` to `Programmer`'s prototype so all `Programmer` instances can use it.
// How do you add methods to the prototype of a constructor function?

Programmer.prototype.code = function () {
    console.log(`${this.name} starts coding.`);
};

// =====================
// Creating child constructors - FrontEndProgrammer and BackEndProgrammer
// =====================

// 3. Create two child constructors, `FrontEndProgrammer` and `BackEndProgrammer`, that inherit from `Programmer`.
// How do you create child constructors that inherit properties from a parent constructor?

function FrontEndProgrammer(name) {
    Programmer.call(this, name);  // Inherit properties from Programmer
}

function BackEndProgrammer(name) {
    Programmer.call(this, name);  // Inherit properties from Programmer
}

// =====================
// Inheritance with extend() function
// =====================

// 4. Write a function `extend` that sets up inheritance between a parent and child constructor.
// How do you set up inheritance so a child constructor inherits methods from a parent constructor?

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);  // Child inherits from Parent
    Child.prototype.constructor = Child;  // Fix constructor reference
}

// 5. Use `extend` to set up inheritance for `FrontEndProgrammer` and `BackEndProgrammer`.
// How do you make sure the child classes inherit methods from the parent?

extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

// =====================
// Method Overriding in Child Constructors
// =====================

// 6. Override the `code` method in both `FrontEndProgrammer` and `BackEndProgrammer` to customize their behavior.
// What is method overriding, and how can we change the behavior of the `code` method for child constructors?

FrontEndProgrammer.prototype.code = function () {
    Programmer.prototype.code.call(this);  // Call parent method
    console.log(`${this.name} is coding in HTML/CSS/JavaScript.`);
};

BackEndProgrammer.prototype.code = function () {
    Programmer.prototype.code.call(this);  // Call parent method
    console.log(`${this.name} is coding server-side logic.`);
};

// =====================
// Creating instances to test the inheritance and method overriding
// =====================

// 7. Create instances of `FrontEndProgrammer` and `BackEndProgrammer`, and test their `code` methods.
// How do you create instances of `FrontEndProgrammer` and `BackEndProgrammer`, and what should their `code` methods output?

const steven = new FrontEndProgrammer('Steven');
const alice = new BackEndProgrammer('Alice');

steven.code();  // FrontEndProgrammer's code method
alice.code();   // BackEndProgrammer's code method

// =====================
// Composition (Mixins) - Adding behavior dynamically
// =====================

// 8. Define three objects: `canEat`, `canWalk`, and `canCode`. Each object should contain one method (`eat`, `walk`, `code`).
// What is composition, and how can we dynamically add multiple behaviors to an object?

const canEat = {
    eat: function () {
        this.hunger--;  // Decrease hunger level when eating
        console.log(`${this.name} is eating.`);
    }
};

const canWalk = {
    walk: function () {
        console.log(`${this.name} is walking.`);
    }
};

const canCode = {
    code: function () {
        console.log(`${this.name} is coding.`);
    }
};

// 9. Write a `mixin` function that adds the methods from `canEat`, `canWalk`, and `canCode` into a `programmer` object.
// How does the `mixin` function work, and what will it do to the `programmer` object?

function mixin(target, ...sources) {
    Object.assign(target, ...sources);  // Add methods from sources to target
}

// 10. Create an instance of `Programmer` and use the `mixin` function to add `canEat`, `canWalk`, and `canCode` methods.
// How do you use `mixin` to add multiple behaviors to an existing object?

function Programmer(name) {
    this.name = name;
    this.hunger = 10; // Default hunger level
}

// 11. Create a programmer instance and test the `eat`, `walk`, and `code` methods.
// What should the result be when calling `eat`, `walk`, and `code` on the `programmer` instance?

const programmer = new Programmer('Steven');
mixin(programmer, canEat, canWalk, canCode);

// =====================
// Test the mixed-in behaviors
// =====================

// 12. Call the methods `eat`, `walk`, and `code` on the `programmer` object.
// What do you expect to see when you call `eat()`, `walk()`, and `code()` on the object?

console.log(programmer);  // Shows the programmer with all added behaviors
programmer.eat();        // Calls the eat method from canEat
programmer.walk();       // Calls the walk method from canWalk
programmer.code();       // Calls the code method from canCode
