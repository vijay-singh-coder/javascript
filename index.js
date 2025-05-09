// function Person(name) {
//     this.name = name;
// }

// function Student(name, grade) {
//     Person.call(this, name);
//     this.grade = grade;
// }

// // Inherit prototype, but DON'T fix constructor
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student

// const s1 = new Student("Alice", "A");

// console.log(s1.constructor); // ❌ [Function: Person]


// const s4 = new s1.constructor("David", "C");
// console.log(s4.name);   // ✅ David
// console.log(s4.grade);  // ❌ undefined



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
programmer.walk();       // Calls the walk method from canWalk/ ------------------ Lesson: Constructor Functions vs ES6 Classes ------------------






//*************************************
//*************************************
//*************************************
//*************************************
// Constructor functions were used in JavaScript before ES6 to create objects with shared properties and methods.
// They are function-based and not as structured as ES6 classes.
function ProgrammerFunc(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;

    this.code = function() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
    }
}

// ES6 Classes provide a more structured and object-oriented approach to creating objects.
// Classes have a constructor method and can also define methods for instances of the class.
class Programmer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    code() {
        console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
    }
}
programmer.code();       // Calls the code method from canCode




