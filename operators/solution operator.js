// 1. Arithmetic calculation
let result1 = (5 + 3) * 2;
console.log('Result 1:', result1); // 16

// 2. Check if number is even using %
let number = 10;
console.log('Is even:', number % 2 === 0); // true

// 3. Exponentiation
let power = 3 ** 4;
console.log('3^4 =', power); // 81

// 4. Shorthand increment
let a = 10;
a += 5;
console.log('a after increment:', a); // 15

// 5. Loose equality ==
let x = '5';
let y = 5;
console.log('Loose equality:', x == y); // true

// 6. Strict equality ===
console.log('Strict equality:', x === y); // false

// 7. Ternary operator
let age = 21;
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log('Is adult?', isAdult); // Yes

// 8. Logical AND
let isLoggedIn = true;
let hasSubscription = true;
console.log('Access:', isLoggedIn && hasSubscription); // true

// 9. Logical OR with fallback name
let userName = '';
let defaultName = 'Guest';
let finalName = userName || defaultName;
console.log('Username:', finalName); // Guest

// 10. NOT operator
let isOnline = false;
console.log('Is offline:', !isOnline); // true

// 11. Nullish coalescing
let inputValue = null;
let finalValue = inputValue ?? 'Default Value';
console.log('Value:', finalValue); // Default Value
