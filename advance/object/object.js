// ------------------
// 1. Primitive vs Reference Types
// ------------------

// Primitives: passed by value
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10

// Objects (reference types): passed by reference
a = { value: 20 };
b = a;
a.value = 100;
console.log(a); // { value: 100 }
console.log(b); // { value: 100 }

// ------------------
// 2. Object Literals and Dynamic Properties
// ------------------

const person = {
    name: 'Steven'
};

// Add properties dynamically
person.favoriteFood = 'tacos';
person['favoriteIceCream'] = 'chocolate';

// Remove properties
delete person.favoriteIceCream;

// Add method dynamically
person.eat = function () {
    console.log(`${this.name} eats ${this.favoriteFood}`);
}
person.eat(); // Steven eats tacos

// ------------------
// 3. Iterating over Objects and Arrays
// ------------------

let numbers = [1, 2, 3, 4, 5];
for (const element of numbers) console.log(element); // Array iteration

const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};

for (const key in dog) console.log(dog[key]); // for...in
for (const key of Object.keys(dog)) console.log(key); // keys
for (const value of Object.values(dog)) console.log(value); // values
for (const [key, value] of Object.entries(dog)) console.log(`Key: ${key} => Value: ${value}`);

// ------------------
// 4. Factory Functions
// ------------------

// Factory: returns a new object
function createProgrammer(name, preferredLanguage) {
    return {
        name,
        preferredLanguage,
        writeCode() {
            console.log(`${this.name} writes ${this.preferredLanguage} code.`);
        },
        drinkCoffee() {
            console.log(`${this.name} drinks coffee.`);
        }
    };
}

const p1 = createProgrammer('Alice', 'JavaScript');
p1.writeCode();

// ------------------
// 5. Constructor Functions
// ------------------

function Programmer(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function () {
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    };
    this.drinksCoffee = function () {
        console.log(`${this.name} drinks coffee.`);
    };
}

const prog = new Programmer('Bob', 'Python');
prog.writeCode();

// ------------------
// 6. Using Function Constructors (Advanced)
// ------------------

const ProgrammerFunc = new Function('name', `
    this.name = name;
    this.writeCode = function() {
        console.log('Code in JavaScript');
    };
`);
const dynamicProg = new ProgrammerFunc('Steven');
dynamicProg.writeCode(); // Code in JavaScript

// ------------------
// 7. Functions as First-Class Citizens
// ------------------

function add(num1, num2) {
    return num1 + num2;
}

const n = add;
console.log(n(2, 2)); // 4
console.log(add.length); // 2

// ------------------
// 8. Private Methods with Closures
// ------------------

function ProgrammerWithPrivate(name, preferredLanguage) {
    let privateName = name;

    this.preferredLanguage = preferredLanguage;

    // Public
    this.writeCode = function () {
        console.log(`${privateName} codes in ${this.preferredLanguage}`);
    }

    // Private
    let drinkCoffee = function () {
        console.log('Gulp...');
    }

    this.startDay = function () {
        drinkCoffee();
    }
}

const secureDev = new ProgrammerWithPrivate('Alice', 'JavaScript');
secureDev.writeCode();
secureDev.startDay();

// ------------------
// 9. Encapsulation Example: Bank Account
// ------------------

function BankAccount(initialBalance) {
    let balance = initialBalance;

    const isValidAmount = function (amount) {
        return typeof amount === 'number' && amount > 0;
    }

    this.deposit = function (amount) {
        if (isValidAmount(amount)) {
            balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log('Invalid deposit amount');
        }
    };

    this.withdraw = function (amount) {
        if (isValidAmount(amount)) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`Withdrew: $${amount}`);
            } else {
                console.log('Insufficient funds');
            }
        } else {
            console.log('Invalid withdraw amount');
        }
    };

    this.getBalance = function () {
        return balance;
    };
}

const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(myAccount.getBalance()); // 120

// ------------------
// 10. Using Getters/Setters with Validation
// ------------------

function ProgrammerWithGetter(name, preferredLanguage) {
    let privateName = name;

    Object.defineProperties(this, {
        'name': {
            get: function () {
                return privateName;
            },
            set: function (newName) {
                if (!newName) {
                    console.log('Name cannot be empty');
                    return;
                }
                privateName = newName;
            }
        }
    });

    this.preferredLanguage = preferredLanguage;

    this.writeCode = function () {
        console.log(`${privateName} codes in ${this.preferredLanguage}`);
    }

    let drinkCoffee = function () {
        console.log('Gulp...');
    }

    this.startDay = function () {
        drinkCoffee();
    }
}

const getterDev = new ProgrammerWithGetter('Alice', 'JavaScript');
console.log(getterDev.name); // Alice
getterDev.name = '';         // Name cannot be empty
console.log(getterDev.name); // Alice



//questions
//questions

// Question 1:
// Create a constructor function `Book` with `title`, `author`, and a method `describe()`
// that logs: "<title> is written by <author>"

// Question 2:
// Create a factory function `createCar` that returns a car object with `make`, `model`,
// and a method `start()` that logs: "<make> <model> started"

// Question 3:
// Create a `Counter` using closures that keeps `count` private.
// Return an object with `increment()` and `getValue()` methods.

// Question 4:
// Use Object.defineProperties to create a `User` constructor with a private `username`,
// and provide getter and setter with validation (username cannot be empty).

// Question 5:
// Make a `BankAccount` object using closures. It should allow deposits, withdrawals,
// and viewing balance, but not expose the balance directly.

