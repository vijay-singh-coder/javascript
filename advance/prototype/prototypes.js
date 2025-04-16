// ===========================
// 1. OBJECTS WITH GETTERS, SETTERS & PROTOTYPAL INHERITANCE
// ===========================

/*
Why study this?
- Getters/Setters allow encapsulation (controlled access/modification).
- Prototypal inheritance helps share logic between related objects.

Problem it solves:
- Avoids redundant code.
- Encourages DRY (Don't Repeat Yourself) principle.

Interview Insight:
- You must know how inheritance works in JS (via `__proto__`, `Object.setPrototypeOf`, etc.)
- Difference between own and inherited properties.
*/

let user = {
    name: 'Steven',
    surname: 'Garcia',
    email: 'steven@stevencodecraft.com',
    isActive: true,

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    login() {
        console.log(`${this.fullName} logged in`);
    },

    logout() {
        console.log(`${this.fullName} logged out.`);
    }
};

// Prototype Inheritance
let admin = {
    __proto__: user,
    isAdmin: true,
    manageUsers() {
        console.log(`${this.fullName} is managing users.`);
    }
};

admin.fullName = 'Bruce Wayne';
console.log('Admin Full Name:', admin.fullName);
console.log('User Full Name:', user.fullName);

// Looping through own + inherited
for (let key in admin) console.log(key);

// Only own props
console.log(Object.keys(admin));


// ===========================
// 2. PRIVATE VARIABLES USING CLOSURE & INHERITANCE USING setPrototypeOf
// ===========================

/*
Why study this?
- Understand encapsulation using closures.
- Reusability via prototypes.

Problem solved:
- Prevents unwanted external access to sensitive data.

Interview Insight:
- Know how to use closures to create private variables.
- Difference between prototypal vs classical inheritance.
*/

const programmerPrototype = {
    writeCode() {
        console.log(`Writing code in ${this.preferredLanguage}`);
    },
    drinkCoffee() {
        console.log('Drinking coffee');
    }
};

// let programmer= new Programmer()
function Programmer(name, preferredLanguage) {
    let privateName = name; // closure for privacy
    this.preferredLanguage = preferredLanguage;

    Object.defineProperties(this, {
        name: {
            get() {
                return privateName;
            },
            set(newName) {
                privateName = newName;
            }
        }
    });

    Object.setPrototypeOf(this, programmerPrototype); // inheritance
}

const dev = new Programmer('Alice', 'JavaScript');
dev.writeCode();
dev.drinkCoffee();
console.log(dev.name); // Getter usage
dev.name = 'Steven';   // Setter usage
console.log(dev.name);


// ===========================
// 3. PROPERTY DESCRIPTORS
// ===========================

/*
Why study this?
- Control how object properties behave (visibility, modifiability).

Problem solved:
- Prevent accidental edits or exposure of internal data.

Interview Insight:
- Difference between writable, enumerable, configurable.
*/

let person = { name: 'Steven' };

Object.defineProperty(person, 'name', {
    writable: false,      // can't change
    enumerable: false,    // won't show in loops
    configurable: true
});

for (let key in person) console.log(key); // No output
console.log(Object.keys(person));         // []

const proto = Object.getPrototypeOf(person);
console.log(Object.getOwnPropertyDescriptor(proto, 'toString'));


// ===========================
// 4. PROTOTYPE AND __proto__ RELATIONSHIP
// ===========================

/*
Why study this?
- Core to how JS inheritance & object lookup works.

Problem solved:
- Efficient sharing of behavior.

Interview Insight:
- You must explain prototype chains clearly with examples.
*/

function Circle() {
    // empty constructor
}

console.log(Circle.prototype);     // The prototype object
let obj = {};
console.log(obj.__proto__);        // Inherited from Object.prototype
console.log(Object.prototype);     // Top-level prototype


// ===========================
// 5. CLASSICAL INHERITANCE USING CONSTRUCTOR FUNCTIONS
// ===========================

/*
Why study this?
- Foundation of how JS mimicked OOP before ES6 classes.

Problem solved:
- Sharing behavior while using constructor patterns.

Interview Insight:
- Be able to define prototypes manually and override methods.
*/

function Coder(name, language) {
    this.name = name;
    this.preferredLanguage = language;
}

Coder.prototype.writeCode = function() {
    console.log(`${this.name} writes code in ${this.preferredLanguage}`);
};

Coder.prototype.toString = function() {
    return `Coder: ${this.name}, Language: ${this.preferredLanguage}`;
};

const coder = new Coder('Alice', 'JavaScript');
coder.writeCode();
console.log(coder.toString());


// ===========================
// 6. PROPERTY LOOKUP & OWN VS PROTOTYPE PROPERTIES
// ===========================

/*
Why study this?
- Helps understand prototype chains and memory optimization.

Problem solved:
- Differentiating between instance and inherited members.

Interview Insight:
- Use `hasOwnProperty()` and `for...in` properly.
*/

const dev2 = new Coder('Steven', 'JavaScript');
dev2.writeCode();

for (let key in dev2) console.log(key); // includes prototype keys
console.log(dev2.hasOwnProperty('name'));      // true
console.log(dev2.hasOwnProperty('writeCode')); // false (inherited)


// ===========================
// 7. EXTENDING BUILT-IN PROTOTYPES SAFELY
// ===========================

/*
Why study this?
- Extending native objects allows customization.

Problem solved:
- Add missing or reusable functionality like `shuffle()`.

Interview Insight:
- Must check before overriding global methods!
*/

if (typeof Array.prototype.shuffle !== 'function') {
    Array.prototype.shuffle = function() {
        console.log('shuffle');
    };
}

function shuffleArray(array) {
    // Your shuffle logic (e.g., Fisher-Yates)
    console.log('Shuffling array...');
    return array;
}

const arr = [1, 2, 3];
arr.shuffle();
const shuffled = shuffleArray(arr);
console.log('Shuffled:', shuffled);




//question


// ==============================================
// ✅ JavaScript Interview Questions Summary File
// ==============================================

// 🟡 Getters, Setters, and Prototypal Inheritance
// ----------------------------------------------
/*
1. What are getters and setters in JavaScript and how do they work?
2. How can you control access and modification of object properties using getters/setters?
3. What's the difference between __proto__ and prototype?
4. How does prototypal inheritance differ from classical inheritance?
5. How does JavaScript resolve property or method lookups through the prototype chain?
*/

// 🟡 Closures & Private Variables using Constructor Functions
// ----------------------------------------------------------
/*
6. What is a closure and how is it used to create private variables?
7. How do Object.defineProperties() and get/set help with encapsulation?
8. What does Object.setPrototypeOf() do and when should you use it?
9. What's the difference between assigning methods in constructor vs prototype?
10. How can you inherit behavior between objects without using classes?
*/

// 🟡 Property Descriptors & Control
// --------------------------------
/*
11. What are property descriptors in JavaScript?
12. What does writable, enumerable, and configurable mean?
13. How do you make a property read-only or hidden in loops?
14. How can you retrieve a property descriptor of a built-in method?
15. Why would you use Object.defineProperty instead of normal assignment?
*/

// 🟡 Prototype and __proto__ Relationship
// ---------------------------------------
/*
16. What is the difference between prototype and __proto__?
17. What is the prototype chain in JavaScript?
18. What does Object.prototype contain?
19. How is inheritance implemented under the hood in JavaScript?
20. How do new objects link to function constructors via prototype?
*/

// 🟡 Classical Inheritance using Constructor Functions
// ---------------------------------------------------
/*
21. How does classical inheritance work with constructor functions?
22. What is the benefit of adding methods to the prototype instead of the constructor?
23. How do you override the toString method for custom objects?
24. Why is memory more efficient when using prototypes for shared behavior?
25. What are the drawbacks of not using prototype for method definitions?
*/

// 🟡 Property Lookup and hasOwnProperty
// ------------------------------------
/*
26. How does the for...in loop work in JS, and what does it include?
27. How does Object.keys() differ from for...in?
28. What does hasOwnProperty() check?
29. How can you determine whether a property is from prototype or the object itself?
30. Why is it important to check ownership of properties in inheritance chains?
*/

// 🟡 Extending Built-in Prototypes Safely
// ---------------------------------------
/*
31. How can you extend a built-in object like Array or Object?
32. Why is it dangerous to modify built-in prototypes globally?
33. How do you safely check before extending a prototype (e.g., typeof check)?
34. When is it appropriate to add methods to built-in prototypes?
35. What are the alternatives to extending prototypes (e.g., utility libraries)?
*/

// 🔁 BONUS: Miscellaneous & Best Practices
// ---------------------------------------
/*
36. What is the difference between classical and prototypal inheritance?
37. Why is encapsulation important in object-oriented programming?
38. How does JavaScript simulate private members without native private keywords?
39. How do closures maintain their lexical scope?
40. What are factory functions, and how do they compare to constructor functions?
*/
