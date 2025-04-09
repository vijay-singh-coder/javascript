// 1. Voting eligibility
let age = 20;
if (age >= 18) {
    console.log('Eligible to vote');
} else {
    console.log('Not eligible to vote');
}

// 2. Grading system
let marks = 82;
if (marks >= 90) {
    console.log('Grade A');
} else if (marks >= 75) {
    console.log('Grade B');
} else if (marks >= 50) {
    console.log('Grade C');
} else {
    console.log('Fail');
}

// 3. Check for username
let username = '';
if (username) {
    console.log('Welcome');
} else {
    console.log('Please enter username');
}

// 4. Switch case on day
let day = 'Tuesday';
switch (day) {
    case 'Monday':
        console.log('Start of the week');
        break;
    case 'Tuesday':
        console.log('Second day of the week');
        break;
    case 'Friday':
        console.log('Weekend is near!');
        break;
    default:
        console.log('It’s just another day');
}

// 5. Ternary even/odd
let num = 7;
let result = num % 2 === 0 ? 'Even' : 'Odd';
console.log(result);

// 6. Party access with AND
let hasInvitation = true;
let isAdult = true;
if (hasInvitation && isAdult) {
    console.log('Access granted');
} else {
    console.log('Access denied');
}

// 7. Positive, negative or zero
let value = 0;
if (value > 0) {
    console.log('Positive');
} else if (value < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

// 8. Guard clause with falsy check
function greet(name) {
    if (!name) {
        console.log('No name provided');
        return;
    }
    console.log('Hello,', name);
}
greet('Alice');
greet('');
