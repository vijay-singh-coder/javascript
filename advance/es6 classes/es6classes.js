// ------------------ Lesson: Constructor Functions vs ES6 Classes ------------------

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

const programmer = new Programmer('Steven', 'JavaScript');
programmer.code(); // Outputs: Steven is coding in JavaScript.
// **Real-world use case**: Classes are used for defining blueprints for creating objects, like defining a "Programmer" object for a team of developers in an application.

// ------------------ Exercise: Grocery Item ------------------

// Constructor Function Example
function GroceryItemFunc(name, quantity) {
    this.name = name;
    this.quantity = quantity;

    this.display = function() {
        console.log(`${this.name} x ${this.quantity}`);
    }
}

// Class Example
class GroceryItem {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    display() {
        console.log(`${this.name} x ${this.quantity}`);
    }
}

const item = new GroceryItem('Apple', 4);
item.display(); // Outputs: Apple x 4
// **Real-world use case**: Grocery list management, where you want to create items and track the quantity of goods in an inventory system.

// ------------------ Static Methods ------------------

// Static methods are functions that are associated with the class, not instances of it.
// They cannot be called on an object but can be used for utility functions related to the class.
class Programmer {
    constructor(name, preferredLanguage) {
        this.name = name;
        this.preferredLanguage = preferredLanguage;
    }

    static compareSkill(programmer1, programmer2) {
        return programmer1.preferredLanguage === programmer2.preferredLanguage;
    }
}

const dev1 = new Programmer('Steven', 'JavaScript');
const dev2 = new Programmer('Alice', 'JavaScript');
console.log(Programmer.compareSkill(dev1, dev2)); // Outputs: true
// **Real-world use case**: Static methods are useful for utility functions like comparing objects, handling transformations, or creating factory methods.

// ------------------ Private Members and Methods ------------------

// Using WeakMap to store private data for each object. WeakMap allows for better memory management and privacy.
const _language = new WeakMap();
const _work = new WeakMap();

class ProgrammerImplementation {
    constructor(name, language) {
        this.name = name;
        _language.set(this, language);
        _work.set(this, () => {
            console.log(`${this.name} is coding in ${_language.get(this)}`);
        });
    }

    code() {
        _work.get(this)(); // Calls private method
    }
}

const programmer = new ProgrammerImplementation('Steven', 'JavaScript');
programmer.code(); // Outputs: Steven is coding in JavaScript
// **Real-world use case**: Using WeakMap for private members ensures that data is encapsulated and cannot be accessed or modified directly from outside the object, providing better security and data integrity.

// ------------------ Getters and Setters ------------------

// Getters and setters allow you to define methods to access and update private fields in a controlled way.
// They are useful for data validation and encapsulating logic.
class ProgrammerUsingGettersAndSetters {
    constructor(name, language) {
        this.name = name;
        _language.set(this, language);
    }

    get language() {
        return _language.get(this);
    }

    set language(newLanguage) {
        if (!newLanguage) throw new Error('Skills cannot be empty');
        _language.set(this, newLanguage);
    }
}

const programmer3 = new ProgrammerUsingGettersAndSetters('Steven', 'JavaScript');
console.log(programmer3.language); // Outputs: JavaScript
programmer3.language = 'Python';
console.log(programmer3.language); // Outputs: Python
// **Real-world use case**: Getters and setters are useful for controlling how an object's properties are accessed and modified. For example, in applications where user input needs to be validated, like form submission.

// ------------------ Inheritance and Method Overriding ------------------

// Inheritance allows one class to inherit the properties and methods from another class.
// Method overriding is used when a subclass redefines a method from the parent class.
class Programmer {
    constructor(name) {
        this.name = name;
    }

    work() {
        console.log(`${this.name} is solving problems.`);
    }
}

// Derived Class: FrontEndProgrammer inherits from Programmer
class FrontEndProgrammer extends Programmer {
    constructor(name) {
        super(name);
    }

    work() {
        super.work(); // Calls the base class method
        console.log(`${this.name} is also designing and implementing UI Components`);
    }
}

const steven = new FrontEndProgrammer('Steven');
steven.work(); 
// Outputs:
// Steven is solving problems.
// Steven is also designing and implementing UI Components
// **Real-world use case**: In software development, inheritance allows you to create specialized types of programmers (e.g., front-end vs back-end) that have common behavior (work) but can also introduce their own behavior (UI design).

// ------------------ Using Symbols for Privacy ------------------

// Symbols are used for creating unique, non-enumerable properties that are not easily accessible, providing a form of privacy.
const _language = Symbol();

class ProgrammerUsingSymbols {
    constructor(name, language) {
        this[name] = name;
        this[_language] = language;
    }

    getLanguage() {
        return this[_language];
    }
}

const programmer = new ProgrammerUsingSymbols('Steven', 'JavaScript');
console.log(programmer.getLanguage()); // Outputs: JavaScript
// **Real-world use case**: Symbols can be used to define private properties and methods in a class. This is useful for encapsulation in object-oriented programming where certain methods or properties shouldn't be accessed directly by external code.

// ------------------ Private Method Using Symbols ------------------

// Private method using Symbols ensures that methods cannot be accessed externally unless you specifically provide the symbol.
const _work = Symbol();

class ProgrammerWithPrivateMethod {
    constructor(name, language) {
        this.name = name;
        this.language = language;
    }

    [_work]() {
        console.log(`${this.name} is coding in ${this.language}`);
    }

    code() {
        this[_work](); // Access private method
    }
}

const privateProgrammer = new ProgrammerWithPrivateMethod('Steven', 'JavaScript');
privateProgrammer.code(); // Outputs: Steven is coding in JavaScript
// **Real-world use case**: This approach can be used in situations where you want to ensure that only specific methods are exposed publicly and others remain internal to the class.

