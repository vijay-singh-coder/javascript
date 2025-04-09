// ---------------------- Loops in JavaScript ----------------------
// Loops allow us to repeat blocks of code multiple times.

// ---------------------- for loop ----------------------
// Best when you know how many times you want to loop

for (let i = 0; i < 5; i++) {
    console.log('Iteration:', i);
  }
  
  // Example: Print even numbers from 0 to 10
  for (let i = 0; i <= 10; i += 2) {
    console.log('Even:', i);
  }
  
  // ---------------------- while loop ----------------------
  // Best when the number of iterations is unknown and based on condition
  
  let count = 0;
  
  while (count < 5) {
    console.log('Count is:', count);
    count++;
  }
  
  // Example: Loop until user input is correct (mocked)
  let password = '';
  let attempts = 0;
  
  while (password !== '1234' && attempts < 3) {
    password = '1234'; // simulating correct input
    attempts++;
  }
  
  console.log('Access granted');
  
  // ---------------------- do...while loop ----------------------
  // Similar to while, but runs **at least once**, even if the condition is false
  
  let number = 0;
  
  do {
    console.log('Number is:', number);
    number++;
  } while (number < 3);
  
  // ---------------------- break and continue ----------------------
  
  // break → exits the loop completely
  for (let i = 1; i <= 5; i++) {
    if (i === 4) break;
    console.log('Break at:', i); // Stops at 3
  }
  
  // continue → skips current iteration and continues
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log('Continue skips 3:', i); // Skips 3
  }
  
  // ---------------------- for...of loop ----------------------
  // Used to loop over **iterables** like arrays, strings
  
  const fruits = ['apple', 'banana', 'mango'];
  
  for (const fruit of fruits) {
    console.log('Fruit:', fruit);
  }
  
  // Example: Loop over string
  for (const char of 'Hello') {
    console.log('Char:', char);
  }
  
  // ---------------------- for...in loop ----------------------
  // Used to loop over object **keys**
  
  const person = {
    name: 'Alice',
    age: 25,
    country: 'USA'
  };
  
  for (const key in person) {
    console.log(key + ':', person[key]);
  }
  
  // ---------------------- Summary ----------------------
  // - for → best when you know how many times to loop
  // - while → best when condition controls the loop
  // - do...while → runs at least once
  // - for...of → for arrays and strings
  // - for...in → for objects
  // - break → exits the loop
  // - continue → skips to next iteration

  
  // ---------------------- Loops – Practice Questions ----------------------

// 1. Print numbers from 1 to 10 using a for loop.

// 2. Print all even numbers from 1 to 20 using a for loop.

// 3. Use a while loop to print numbers from 10 to 1.

// 4. Use a do...while loop to simulate a user input that repeats until they enter a number > 100.

// 5. Use a for loop that prints numbers 1 to 10 but stops when number equals 5 (use break).

// 6. Use a for loop that skips printing the number 7 (use continue).

// 7. Use for...of to print each letter of the word "JAVASCRIPT".

// 8. Use for...in to print all keys and values in the object:
//    { name: "John", age: 25, city: "Delhi" }

// 9. BONUS: Use nested for loops to create a multiplication table from 1 to 5.
