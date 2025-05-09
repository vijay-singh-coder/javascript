// Topic: Handling Asynchronous Operations in JavaScript

// Problem: How to handle asynchronous operations in JavaScript using different techniques like callbacks, promises, async/await.

///////////////////////////////////////////
// 1. Callbacks
///////////////////////////////////////////

// Problem: Callbacks are used to handle asynchronous data, but they can lead to "callback hell" when dealing with multiple operations.
// Callbacks pass functions as arguments and are executed once the asynchronous task is completed.

// console.log('Before');

// // Example: Using callbacks to handle steps for making tea
// boilWater((water) => {
//     // Once water is boiled, add tea leaves
//     addTeaLeaves(water, (tea) => {
//         // Once tea is ready, serve it
//         serveTea(tea, (served) => {
//             // Final callback, displaying tea status
//             console.log('Tea Status:', served);
//         });
//     });
// });

console.log('After');

// Callback functions to simulate asynchronous operations like making tea
function boilWater(callback) {
    setTimeout(() => {
        console.log('Boiling water...');
        // Callback function is called after boiling
        callback('Hot Water');
    }, 1000);
}

function addTeaLeaves(water, callback) {
    setTimeout(() => {
        console.log('Adding tea leaves to', water);
        // Callback function is called after adding tea
        callback('Tea');
    }, 1000);
}

function serveTea(tea, callback) {
    setTimeout(() => {
        console.log('Serving', tea);
        // Callback function is called after serving
        callback('Tea is served!');
    }, 1000);
}

///////////////////////////////////////////
// 2. Promises
///////////////////////////////////////////

// Problem: Callbacks can become complex to manage. Promises offer a cleaner way to handle asynchronous data.
// Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

function boilWaterPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Boiling water...');
            // Resolves the promise with the result
            resolve('Hot Water');
        }, 1000);
    });
}

function addTeaLeavesPromise(water) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Adding tea leaves to', water);
            // Resolves the promise with the result
            resolve('Tea');
        }, 1000);
    });
}

function serveTeaPromise(tea) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Serving', tea);
            // Resolves the promise with the result
            resolve('Tea is served!');
        }, 1000);
    });
}

// Using promise chaining to handle the asynchronous flow more cleanly
// boilWaterPromise()
//     .then(water => addTeaLeavesPromise(water))  // Once water is boiled, add tea leaves
//     .then(tea => serveTeaPromise(tea))          // Once tea is made, serve it
//     .then(status => console.log('Tea Status:', status))  // Display final tea status
//     .catch(err => console.error('Error:', err.message));  // Handle any error

///////////////////////////////////////////
// 3. Async/Await
///////////////////////////////////////////

// Problem: Managing multiple promises can still be complex. Async/await simplifies working with promises and allows for more readable code.
// Async/await allows us to work with promises in a more synchronous-like way. We use `await` to pause execution until the promise resolves.

async function makeTea() {
    try {
        const water = await boilWaterPromise();  // Wait until water is boiled
        const tea = await addTeaLeavesPromise(water);  // Wait until tea is ready
        const result = await serveTeaPromise(tea);  // Wait until tea is served
        console.log('Tea Status:', result);  // Display final tea status
    } catch (err) {
        // If any error occurs during the async process, catch it here and log the error message
        console.log('Error:', err.message);
    }
}

makeTea();
