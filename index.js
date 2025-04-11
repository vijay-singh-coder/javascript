function createCounter() {
    let count = 10; // this variable is private

    return function () {
        count++; // count is remembered even after createCounter() is done
        console.log(count);
    };
}

const counter = createCounter(); // counter now holds a function with access to 'count'
counter(); // Output: 1






