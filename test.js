function Person(name) {
    this.name = name;
}

function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}

// Inherit prototype, but DON'T fix constructor
Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student

const s1 = new Student("Alice", "A");

console.log(s1.constructor); // ❌ [Function: Person]


const s4 = new s1.constructor("David", "C");
console.log(s4.name);   // ✅ David
console.log(s4.grade);  // ❌ undefined
