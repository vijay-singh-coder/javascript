// Topic: Handling Asynchronous Operations in JavaScript

// Problem: How to handle asynchronous operations in JavaScript using different techniques like callbacks, promises, async/await.

///////////////////////////////////////////
// 1. Callbacks
///////////////////////////////////////////

// Problem: Callbacks are used to handle asynchronous data, but they can lead to "callback hell" when dealing with multiple operations.
// Callbacks pass functions as arguments and are executed once the asynchronous task is completed.

console.log('Before');

// Example: Using callbacks to handle a grocery list retrieval and checking item availability.
getGroceryList(1, (list) => {
    // Once the grocery list is fetched, it calls getGroceryItems with the list name.
    getGroceryItems(list.name, (items) => {
        // After fetching items, it checks the availability of the first item in the list.
        checkItemAvailability(items[0], (availability) => {
            // Final callback, displaying the availability of the item.
            console.log('Availability:', availability);
        });
    });
});

console.log('After');

// Callback functions to simulate asynchronous operations like fetching data
function getGroceryList(id, callback) {
    setTimeout(() => {
        console.log('Fetching grocery list from the database...');
        // Callback function is called after the data is "fetched"
        callback({ id: id, name: 'Weekly Groceries' });
    }, 2000);
}

function getGroceryItems(listName, callback) {
    setTimeout(() => {
        console.log('Fetching grocery items...');
        // Callback function is called with the list of items
        callback(['Milk', 'Bread', 'Eggs']);
    }, 2000);
}

function checkItemAvailability(item, callback) {
    setTimeout(() => {
        console.log('Checking item availability...');
        // Callback function is called with availability information
        callback({ item: item, available: true });
    }, 2000);
}

///////////////////////////////////////////
// 2. Promises
///////////////////////////////////////////

// Problem: Callbacks can become complex to manage. Promises offer a cleaner way to handle asynchronous data.
// Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

const getGroceryListPromise = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching grocery list from the database...');
            // Resolves the promise with the data (if successful)
            resolve({ id: id, name: 'Weekly Groceries' });
        }, 2000);
    });
};

const getGroceryItemsPromise = (listName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fetching grocery items...');
            // Resolves the promise with the list of items
            resolve(['Milk', 'Bread', 'Eggs']);
        }, 2000);
    });
};

const checkItemAvailabilityPromise = (item) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Checking item availability...');
            // Resolves the promise with availability information
            resolve({ item: item, available: true });
        }, 2000);
    });
};

// Using promise chaining to handle the asynchronous flow more cleanly
getGroceryListPromise(1)
    .then(list => getGroceryItemsPromise(list.name))  // Once list is fetched, get the items
    .then(items => checkItemAvailabilityPromise(items[0]))  // Once items are fetched, check availability
    .then(availability => console.log('Availability:', availability))  // Once availability is checked, display it
    .catch(err => console.error('Error:', err.message));  // Catch any errors during the flow

///////////////////////////////////////////
// 3. Async/Await
///////////////////////////////////////////

// Problem: Managing multiple promises can still be complex. Async/await simplifies working with promises and allows for more readable code.
// Async/await allows us to work with promises in a more synchronous-like way. We use `await` to pause execution until the promise resolves.

async function displayItemAvailability() {
    try {
        const list = await getGroceryListPromise(1);  // Wait until the grocery list is fetched
        const items = await getGroceryItemsPromise(list.name);  // Wait until the grocery items are fetched
        const availability = await checkItemAvailabilityPromise(items[0]);  // Wait until availability is checked
        console.log('Availability:', availability);  // Display the availability once everything is resolved
    } catch (err) {
        // If any error occurs during the async process, catch it here and log the error message
        console.log('Error:', err.message);
    }
}

displayItemAvailability();

///////////////////////////////////////////
// 4. Promise.race
///////////////////////////////////////////

// Problem: Sometimes you want to take the result of the first promise to complete in a race condition.
// Promise.race() resolves or rejects based on the first promise that either resolves or rejects.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        reject(new Error('unable to complete'));  // Rejects after 2 seconds
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);  // Resolves after 2 seconds
    }, 2000);
});

// Promise.race will resolve with the result of the first promise to finish, whether it's a resolve or reject.
Promise.race([p1, p2])
    .then(result => console.log(result))  // Log the result of the first promise that resolves
    .catch(err => console.log('Error:', err.message));  // Catch and log any errors

// Conclusion:
// 1. Callbacks allow handling async tasks but can lead to deeply nested code, making it hard to manage.
// 2. Promises improve on callbacks by providing a cleaner way to manage asynchronous flow.
// 3. Async/await simplifies promises and makes asynchronous code look more like synchronous code, improving readability and maintainability.
// 4. Promise.race allows handling multiple promises, where only the first one to resolve or reject is taken into account.

