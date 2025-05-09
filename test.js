// // function Person(name) {
// //     this.name = name;
// // }

// // function Student(name, grade) {
// //     Person.call(this, name);
// //     this.grade = grade;
// // }

// // // Inherit prototype, but DON'T fix constructor
// // Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student

// // const s1 = new Student("Alice", "A");

// // console.log(s1.constructor); // ❌ [Function: Person]

// // const s4 = new s1.constructor("David", "C");
// // console.log(s4.name);   // ✅ David
// // console.log(s4.grade);  // ❌ undefined

// class Programmer {
//     constructor(name) {
//         this.name = name;
//     }

//     work() {
//         console.log(`${this.name} is solving problems.`);
//     }
// }

// // Derived Class: FrontEndProgrammer inherits from Programmer
// class FrontEndProgrammer extends Programmer {
//     constructor(name) {
//         super(name);
//     }

//     work() {
//         super.work(); // Calls the base class method
//         console.log(`${this.name} is also designing and implementing UI Components`);
//     }
// }

// const steven = new FrontEndProgrammer('Steven');
// steven.work();

//cache
// function sum(num1, num2) {
//     let obj = {}
//     return function add() {
//         if (obj[`${num1},${num2}`]) {
//             return obj[`${num1},${num2}`]
//         }

//         obj[`${num1},${num2}`] = num1 + num2
//         return obj[`${num1},${num2}`]

//     }
// }

// let res = sum(2, 2)
// console.log(res());

// let arr = [1, 2, 3, 4, 5]
// let arr1 = [6, 7, 8, 9, 0]

// arr.forEach((value, index, array) => {
//     console.log(value, index, array)
// })
// Array.prototype.myForEach = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         cb(this[index], index, this)
//     }
// }

// arr.myForEach((value, index, array) => {
//     console.log(value, index, array)
// })

// Array.prototype.myConcat = function (arr) {
//     return [...this, ...arr]
// }

// let res = arr.myConcat(arr1)
// console.log(res)

// Array.prototype.myFindIndex = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         if (cb(this[index], index, this)) {
//             return index;
//         }
//     }
//     return -1
// }

// const res1 = arr.myFindIndex((value, index, array) => {
//     return value > 3;
// });

// console.log(res1);

// const arr = [3, 5, 7, 10, 2];

// // Find the index of the first number greater than 6
// const res1 = arr.findIndex((value, index, array) => {
//     return value > 10;
// });

// console.log(res1);

// console.log("👋 Chaiwala opens shop");

// setTimeout(() => {
//     console.log("🧓 Uncle walks in and orders chai (macrotask)");
// }, 1000);

// Promise.resolve().then(() => {
//     console.log("📞 Phone call order: 2 chai (microtask)");
// });

// console.log("🧹 Sweeping the shop (sync work)");

// const _language = new WeakMap();

// class ProgrammerUsingGettersAndSetters {

//     constructor(name, language) {
//         this.name = name;
//         _language.set(this, language);
//     }

//     get language() {
//         return _language.get(this);
//     }

//     set language(newLanguage) {
//         if (!newLanguage) throw new Error('Skills cannot be empty');
//         _language.set(this, newLanguage);
//     }
// }

// class ProgrammerUsingGettersAndSetters {
//     #language;

//     constructor(name, language) {
//         this.name = name;
//         this.#language = language;
//     }

//     get language() {
//         return this.#language;
//     }

//     set language(newLanguage) {
//         if (!newLanguage) throw new Error('Skills cannot be empty');
//         this.#language = newLanguage;
//     }
// }

// const programmer3 = new ProgrammerUsingGettersAndSetters('Steven', 'JavaScript');
// console.log(programmer3.language); // Outputs: JavaScript
// programmer3.language = 'Python';
// console.log(programmer3.language); // Outputs: Python

// class Programmer {
//     constructor(name) {
//         this.name = name;
//     }

//     work() {
//         console.log(`${this.name} is solving problems.`);
//     }
// }

// // Derived Class: FrontEndProgrammer inherits from Programmer
// class FrontEndProgrammer extends Programmer {
//     constructor(name) {
//         super(name);
//     }

//     worked() {
//         // super.work(); // Calls the base class method
//         console.log(`${this.name} is also designing and implementing UI Components`);
//     }
// }

// const steven = new FrontEndProgrammer('Steven kumar');
// steven.worked();

// const _language = Symbol();

// class ProgrammerUsingSymbols {
//     constructor(name, language) {
//         this[name] = name;
//         this[_language] = language;
//     }

//     getLanguage() {
//         return this[_language];
//     }
// }

// const programmer = new ProgrammerUsingSymbols('Steven', 'JavaScript');
// console.log(programmer.getLanguage()); // Outputs: JavaScript

// const original = {
//     name: "Bob",
//     skills: ["Go", "Rust"],
//     address: {
//         city: "Delhi"
//     }
// };

// // const deepCopy = JSON.parse(JSON.stringify(original));
// const deepCopy = { ...original };

// // Modify nested fields
// deepCopy.skills.push("Zig");
// deepCopy.address.city = "Mumbai";

// console.log(original.skills);        // ["Go", "Rust"] ✅ Unchanged
// console.log(original.address.city);  // "Delhi"

// let arr = [1, 2, 3, 4, 5]
// let arr = [1, 2, 3]
// // let arr1 = [6, 7, 8, 9, 0]

// arr.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// Array.prototype.kuchBhi = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         cb(this[index], index, this)
//     }

// }

// arr.kuchBhi((value, index, array) => {
//     console.log(value, index, array)
// })

// Array.prototype.myForEach = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         cb(this[index], index, this)
//     }
// }

// arr.myForEach((value, index, array) => {
//     console.log(value, index, array)
// })

// Array.prototype.myConcat = function (arr) {
//     return [...this, ...arr]
// }

// let res = arr.myConcat(arr1)
// console.log(res)

// Array.prototype.myFindIndex = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         if (cb(this[index], index, this)) {
//             return index;
//         }
//     }
//     return -1
// }

// const res1 = arr.myFindIndex((value, index, array) => {
//     return value > 3;
// });

// console.log(res1);

// const arr = [3, 5, 7, 10, 2];

// // Find the index of the first number greater than 6
// const res1 = arr.findIndex((value, index, array) => {
//     return value > 10;
// });

// console.log(res1);

// Array
// let arr = [1, 2, 3]
// let arr1 = [4, 5]
// Array.prototype.kuchBhi = function (cb) {
//     for (let index = 0; index < this.length; index++) {
//         cb(this[index], index, this)
//     }
// }

// arr.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// arr.kuchBhi((value, index, array) => {
//     console.log(value, index, array)
// })

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Promise resolved!');
//         reject('Promise resolved!');
//     }, 2000);
// });

// promise.then(result => {
//     console.log(result);  // "Promise resolved!" will be logged after 2 seconds
// }).catch(error => {
//     console.log("this error come from reject", error);
// });

// function databaseCall() {
//     //logic1
//     //logic2
//     //logic3
//     //logic4

// }

// console.log('1');

// setTimeout(() => {
//     console.log('2');
//     Promise.resolve().then(() => {
//         console.log('3');
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('4');
// });

// async function asyncFunc1() {
//     console.log('5');
//     await asyncFunc2();
//     console.log('6');
// }

// async function asyncFunc2() {
//     console.log('7');
//     await Promise.resolve();
//     console.log('8');
// }

// asyncFunc1();

// console.log('9');

//output
// 1
// 5
// 7
// 9
// 4
// 8
// 6
// 2
// 3

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');

    setTimeout(() => {
        console.log('D');
    }, 0);

    Promise.resolve().then(() => {
        console.log('E');
    });
});

(async function () {
    console.log('F');
    await null;
    console.log('G');
})();

console.log('H');


// [1, 2, 3].forEach((value, index) => {
//     console.log(index, value);
// });

// [1, 2, 3].myForEach((value, index) => {
//     console.log(index, value);
// });

/*
🔰 Level 1 — Basic Constructor Practice

1️⃣ Create a Car constructor:
    - Properties: brand, model, year
    - Method: getDetails() → "Toyota Camry (2020)"

2️⃣ Create a Person constructor:
    - Properties: name, age
    - Method: isAdult() → true if age >= 18

3️⃣ Create a Rectangle:
    - Properties: width, height
    - Method: getArea() → width * height

4️⃣ Create a Circle:
    - Property: radius
    - Method: getCircumference() → 2 * Math.PI * radius
*/

/*
🔥 Level 2 — Intermediate Constructor Practice

5️⃣ Create a BankAccount:
    - Properties: ownerName, balance
    - Methods:
        - deposit(amount)
        - withdraw(amount)
        - getBalance()

6️⃣ Create a Student:
    - Properties: name, grades (array)
    - Methods:
        - addGrade(grade)
        - getAverage()

7️⃣ Create a Book:
    - Properties: title, author, pages
    - Method: shortSummary() → "BookName by Author - 200 pages"
*/

/*
⚙️ Level 3 — Advanced Constructor Practice

8️⃣ Create an Employee with Manager subclass:
    - Employee:
        - name, position
        - getDetails() → "John - Developer"
    - Manager extends Employee:
        - team (array of employees)
        - addToTeam(employee)
        - Override getDetails() to include team size

9️⃣ Create a Clock:
    - Properties: hour and minute
    - Method: tick() → increments time by 1 minute
    - Rolls over hours and minutes properly (e.g., 59 -> 0)

🔟 Create a Library system:
    - Has a collection of Book objects
    - Methods:
        - addBook(book)
        - findBook(title)
        - listBooks()
*/

/*
✅ BONUS Practice

🔹 Create a Counter class:
    - Static property: count
    - Instance method: increment()
    - Static method: getCount()

🔹 Create a Password class:
    - Private property: #secret
    - Method: check(password) → returns true if matches
*/

// console.log('A');

// setTimeout(() => {
//     console.log('B');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('C');

//     setTimeout(() => {
//         console.log('D');
//     }, 0);

//     Promise.resolve().then(() => {
//         console.log('E');
//     });
// });

// (async function () {
//     console.log('F');
//     await null;
//     console.log('G');
// })();

// console.log('H');

// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('3');
// });

// queueMicrotask(() => {
//     console.log('4');
// });

// setTimeout(() => {
//     Promise.resolve().then(() => {
//         console.log('5');
//     });
// }, 0);

// console.log('6');

// let rsult = new Promise((resolve, reject) => {
//     resolve("hi");
// });

// rsult
//     .then((result) => {
//         console.log(result);
//         return result;
//     })
//     .then((greet) => console.log(greet + " vijay"));


