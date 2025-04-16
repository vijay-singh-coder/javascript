// ==============================================
// ✅ JavaScript Interview Questions Summary File
// ==============================================

// 🟡 Getters, Setters, and Prototypal Inheritance
// ----------------------------------------------
/*
1. Getters and setters are special methods that get or set the value of a property. They allow controlled access to object properties.
2. You can prevent direct access to internal data and add validation logic using getters/setters. For example: set fullName(val) { ... }.
3. `__proto__` is an object's actual prototype, while `.prototype` is a property on functions used to create new objects.
4. Prototypal inheritance allows objects to inherit from other objects directly. Classical uses classes and instantiates them.
5. JavaScript looks up a property first on the object itself. If not found, it checks the prototype chain up to Object.prototype.
*/

// 🟡 Closures & Private Variables using Constructor Functions
// ----------------------------------------------------------
/*
6. A closure is a function that "remembers" variables from its outer scope, even after the outer function has returned.
7. Object.defineProperties() allows you to define properties with getters/setters, enabling encapsulation and access control.
8. Object.setPrototypeOf(obj, proto) changes an object's prototype, allowing dynamic inheritance setup between objects.
9. Constructor methods create a new copy for each instance. Prototype methods are shared across instances (memory efficient).
10. You can use Object.create() or directly set __proto__ to share behavior between objects without using class syntax.
*/

// 🟡 Property Descriptors & Control
// --------------------------------
/*
11. Property descriptors define the behavior of object properties (e.g., writable, configurable, enumerable).
12. `writable`: can change value; `enumerable`: appears in loops; `configurable`: can delete/change descriptor.
13. Use Object.defineProperty to set enumerable: false or writable: false to make a property hidden or read-only.
14. Use Object.getOwnPropertyDescriptor(obj, prop) to retrieve a descriptor of any property, even on built-ins.
15. Use Object.defineProperty when you want fine-grained control over property behavior (e.g., making computed properties).
*/

// 🟡 Prototype and __proto__ Relationship
// ---------------------------------------
/*
16. `prototype` is used by constructor functions; `__proto__` is the actual internal prototype link of objects.
17. The prototype chain is a series of linked objects JS uses for property lookup (e.g., obj → prototype → Object.prototype).
18. Object.prototype is the top of the prototype chain and contains default methods like toString(), hasOwnProperty().
19. Inheritance is implemented by linking objects via the [[Prototype]] (or __proto__) reference internally.
20. When using `new`, JavaScript sets the object's internal prototype (__proto__) to the constructor’s prototype.
*/

// 🟡 Classical Inheritance using Constructor Functions
// ---------------------------------------------------
/*
21. Classical inheritance uses constructor functions and manually sets up the prototype chain to inherit properties/methods.
22. Defining methods on prototype ensures they're shared, reducing memory usage and maintaining consistent behavior.
23. Override `toString()` by adding it to the prototype, so when console.log(obj) runs, you get a custom string.
24. When methods are on the prototype, only one copy exists for all instances (shared behavior = more efficient).
25. Without prototype, each instance has its own method copy, increasing memory usage and potentially duplicating logic.
*/

// 🟡 Property Lookup and hasOwnProperty
// ------------------------------------
/*
26. for...in loops over all enumerable properties, including those from the prototype chain.
27. Object.keys() only returns an array of an object’s own enumerable properties (ignores inherited).
28. hasOwnProperty() checks if a property is the object's own (not inherited).
29. You can compare with `obj.hasOwnProperty(key)` to detect if a property belongs directly to the object.
30. Checking property ownership is important to avoid mistakenly using inherited values that could break logic.
*/

// 🟡 Extending Built-in Prototypes Safely
// ---------------------------------------
/*
31. You can extend prototypes like Array.prototype.shuffle = function() { ... }, adding new behavior.
32. Modifying built-in prototypes can cause conflicts with future JS versions or other libraries.
33. Always check `typeof Array.prototype.newMethod === 'function'` before defining, to avoid overwriting.
34. Extend built-ins only in controlled environments like internal libraries, not in public-facing code.
35. Instead of extending, prefer utility functions or libraries like Lodash to keep behavior isolated.
*/

// 🔁 BONUS: Miscellaneous & Best Practices
// ---------------------------------------
/*
36. Classical inheritance is class-based (like Java), prototypal inheritance uses direct object linkage (more flexible).
37. Encapsulation hides internal logic and state, exposing only what’s necessary, making code secure and maintainable.
38. JavaScript simulates private members using closures or, in modern versions, `#privateMethod()` syntax.
39. Closures retain access to their lexical scope (parent variables), even after the parent function finishes executing.
40. Factory functions return new objects (alternative to constructors), and are more flexible with dynamic creation logic.
*/
