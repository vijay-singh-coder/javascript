// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  // 2. Print even numbers 1–20
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
  }
  
  // 3. Print 10 to 1 using while
  let count = 10;
  while (count >= 1) {
    console.log(count);
    count--;
  }
  
  // 4. Simulate do...while input > 100
  let input = 90;
  do {
    console.log('User entered:', input);
    input = 120; // simulate valid input
  } while (input <= 100);
  
  // 5. Break at 5
  for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log('Number:', i);
  }
  
  // 6. Continue when i === 7
  for (let i = 1; i <= 10; i++) {
    if (i === 7) continue;
    console.log(i);
  }
  
  // 7. for...of over "JAVASCRIPT"
  for (const letter of 'JAVASCRIPT') {
    console.log(letter);
  }
  
  // 8. for...in over object
  const person = { name: "John", age: 25, city: "Delhi" };
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // 9. Multiplication table 1 to 5
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log('-----------');
  }
  