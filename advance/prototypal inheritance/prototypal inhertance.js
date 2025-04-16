// =====================
// Constructor Functions & Prototypal Inheritance
// =====================

// 1. A Constructor Function is used to create objects with shared properties and methods.
function Programmer(name) {
    this.name = name;  // This is an instance property that each programmer will have
}

// 2. Adding methods to the prototype allows all instances of Programmer to share these methods.
// The prototype is shared among all objects created from this constructor.
Programmer.prototype.code = function () {
    console.log(`${this.name} starts coding.`);
};
//work salary, post 


let program = new Programmer("vijay")
let program1 = new Programmer("somanath")

// =====================
// Creating child constructors - FrontEndProgrammer and BackEndProgrammer
// =====================

// 3. FrontEndProgrammer and BackEndProgrammer will inherit from Programmer, but have their own specific methods.
function FrontEndProgrammer(name) {
    // Calling the Programmer constructor to inherit properties (name)
    Programmer.call(this, name);
}

function BackEndProgrammer(name) {
    // Calling the Programmer constructor to inherit properties (name)
    Programmer.call(this, name);
}

// =====================
// Inheritance with extend() function
// =====================

// 4. The `extend` function helps set up inheritance between Parent (Programmer) and Child (FrontEndProgrammer, BackEndProgrammer).
function extend(Child, Parent) {
    // This makes the child's prototype inherit from the parent's prototype.
    Child.prototype = Object.create(Parent.prototype);
    // This ensures the child constructor points to the child class (not the parent).
    Child.prototype.constructor = Child;
}

// 5. Setting up inheritance so FrontEndProgrammer and BackEndProgrammer inherit methods from Programmer
extend(FrontEndProgrammer, Programmer);
extend(BackEndProgrammer, Programmer);

// =====================
// Method Overriding in Child Constructors
// =====================

// 6. Now we override (change) the code method for both FrontEndProgrammer and BackEndProgrammer to give them unique behavior.
FrontEndProgrammer.prototype.code = function () {
    // Call the parent (Programmer) code method
    Programmer.prototype.code.call(this);
    console.log(`${this.name} is coding in HTML/CSS/JavaScript.`);
};

BackEndProgrammer.prototype.code = function () {
    // Call the parent (Programmer) code method
    Programmer.prototype.code.call(this);
    console.log(`${this.name} is coding server-side logic.`);
};

// =====================
// Creating instances to test the inheritance and method overriding
// =====================

const steven = new FrontEndProgrammer('Steven');  // Create a FrontEndProgrammer instance
const alice = new BackEndProgrammer('Alice');    // Create a BackEndProgrammer instance

steven.code();  // Will call FrontEndProgrammer's code method
alice.code();   // Will call BackEndProgrammer's code method

// =====================
// Composition (Mixins) - Adding behavior dynamically
// =====================

// 7. Composition allows us to mix in different behaviors (methods) into an object dynamically.
const canEat = {
    eat: function () {
        this.hunger--;  // Each time eat is called, hunger level decreases by 1
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

// 8. The `mixin` function allows us to add functionality to an object dynamically by copying methods from other objects.
function mixin(target, ...sources) {
    Object.assign(target, ...sources);  // Copies methods from the source objects into the target object
}

// 9. Programmer constructor is now simple; it only has the `name` and `hunger` properties.
function Programmer(name) {
    this.name = name;
    this.hunger = 10; // Default hunger level
}

// 10. Create a programmer instance
const programmer = new Programmer('Steven');

// 11. Use mixin to add behaviors (eat, walk, and code) to this programmer instance.
mixin(programmer, canEat, canWalk, canCode);

// =====================
// Test the mixed-in behaviors
// =====================

console.log(programmer);  // Shows the programmer with all added behaviors
programmer.eat();        // Calls the eat method from canEat
programmer.walk();       // Calls the walk method from canWalk
programmer.code();       // Calls the code method from canCode



// Detailed Explanation of Concepts:
// 1. Constructor Functions & Prototypal Inheritance:

//     Constructor functions are special functions used to create new objects. The Programmer constructor is used to create a Programmer object that has a name property.

//     Prototypal inheritance allows objects to inherit methods and properties from another object. By adding methods to the Programmer.prototype, all instances of Programmer (or its child classes) will have access to these methods. For example, code is a method available to all Programmer instances.


// 2. Inheritance Between Constructors:

//     The FrontEndProgrammer and BackEndProgrammer constructors are child classes that inherit from Programmer.

//     We use Programmer.call(this, name) to inherit properties (like name) from the parent class Programmer.

//     The extend function is a helper function that sets up inheritance by linking child prototypes to the parent prototype. This allows child classes to inherit methods from the parent class.


// 3. Method Overriding:

//     In method overriding, child classes can modify (or completely replace) methods from the parent class. For example, we override code in FrontEndProgrammer and BackEndProgrammer to add specific behavior.

//     In FrontEndProgrammer.prototype.code, we first call Programmer.prototype.code.call(this) to retain the base functionality, and then add more specific functionality for front-end development.


// 4. Composition (Mixins):

//     Composition is a pattern where you can combine multiple behaviors (methods) into a single object. This is a more flexible alternative to classical inheritance.

//     We create canEat, canWalk, and canCode as separate objects that define specific behaviors (methods). Using the mixin function, we can dynamically add these methods to an instance (e.g., programmer), allowing the object to "mix in" behaviors from different sources.


// 5. Object.assign in Mixins:

//     Object.assign(target, ...sources) is a JavaScript method that copies the properties and methods from the source objects into the target object. In our example, we use it in the mixin function to add the behaviors from canEat, canWalk, and canCode to the programmer instance.

// Key Takeaways:

//     Constructor functions and prototypal inheritance help you create objects and share behaviors across instances.

//     Method overriding allows you to change or extend the functionality of inherited methods.

//     Composition allows you to mix behaviors into objects dynamically, offering more flexibility than inheritance alone.















// ✅ Why Interviewers Ask About Prototypal Inheritance

// Because it helps them judge:

//     🔄 Your understanding of how JS handles inheritance behind the scenes (vs class-based OOP)

//     🏗️ Your ability to use prototype chains, constructor functions, and Object.create()

//     🧠 Your grasp of this, .constructor, .prototype, and instance relationships

// 💡 Common Interview Questions on Prototypal Inheritance

// Here’s what they might ask you:
// 1. Explain prototypal inheritance in JavaScript.

//     "What is it? How does it work under the hood?"

// You could say:

//     JavaScript uses prototypal inheritance, meaning objects can inherit properties directly from other objects. Every object has an internal [[Prototype]] (or accessible via .prototype in constructors), and when you access a property, JS walks up the prototype chain until it finds it or hits null.

// 2. Show how to implement inheritance using constructor functions.

//     (Just like what you were doing earlier)

// 3. What’s the difference between __proto__ and .prototype?

// Answer:

//     .prototype is used on functions and defines what future instances will inherit.

//     __proto__ is an object's internal pointer to its prototype (you can also access it with Object.getPrototypeOf()).

// 4. What happens if you don’t reset the constructor after inheritance?

//     This is exactly what you asked earlier, and YES, it's an interview question.

// 5. Implement inheritance using Object.create() (without constructor functions).

// const animal = {
//   speak() {
//     console.log("Animal speaks");
//   }
// };

// const dog = Object.create(animal);
// dog.bark = function () {
//   console.log("Dog barks");
// };

// dog.speak(); // Inherited
// dog.bark();  // Own method

// 6. ES6 class vs prototype inheritance — what's the difference?

// Even though class is just syntax sugar over prototypes, interviewers like to see if you understand both.
// 7. Bonus (tougher): Modify or override inherited methods using prototypes.
// 🚀 Want to prepare better?

// I can give you:

//     Flashcards for quick revision

//     Code challenges with answers

//     Mock interview Q&A