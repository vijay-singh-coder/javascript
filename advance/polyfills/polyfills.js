// Polyfills Summary

// What is a Polyfill?
// A polyfill is a piece of code (usually JavaScript) that provides functionality that 
// is not supported by some browsers or environments. It "fills in" the gaps in functionality, 
// allowing developers to use modern JavaScript features that may not be available everywhere.

// Real World Use Case:
// You may write JavaScript using modern features like arrow functions or promises, 
// but older browsers like Internet Explorer may not support them. In such cases, 
// a polyfill can be used to make your code compatible with those older browsers.

// Problem Solved by Polyfills:
// - Allows developers to use modern features even in old browsers.
// - Ensures your application works across different environments.

// Common Polyfills:
// 1. Array.prototype.includes
// Older browsers may not support the 'includes' method on arrays. 
// A polyfill can add this feature in older environments.
if (!Array.prototype.includes) {
    Array.prototype.includes = function (element) {
        return this.indexOf(element) !== -1;
    };
}

// 2. Object.assign
// Older JavaScript engines may not have the 'Object.assign' method, 
// which is used to copy all properties from one object to another.
if (!Object.assign) {
    Object.assign = function (target, ...sources) {
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        const to = Object(target);
        sources.forEach(source => {
            if (source != null) {
                for (let key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        to[key] = source[key];
                    }
                }
            }
        });
        return to;
    };
}

// Example 1: Polyfill for String.prototype.startsWith
// This polyfill ensures that the 'startsWith' method on strings works in older browsers.
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position = 0) {
        return this.substring(position, position + searchString.length) === searchString;
    };
}

// Example 2: Polyfill for Fetch API
// Some browsers may not support the Fetch API, so we can use a polyfill for it.
// This fetch polyfill allows you to use the Fetch API in older browsers.
if (!window.fetch) {
    window.fetch = function (url, options) {
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.open(options.method || 'GET', url);
            xhr.onload = function () {
                resolve({
                    json: function () {
                        return Promise.resolve(JSON.parse(xhr.responseText));
                    },
                });
            };
            xhr.onerror = function () {
                reject(new TypeError('Network request failed'));
            };
            xhr.send(options.body);
        });
    };
}

// Benefits of Using Polyfills:
// - Compatibility with older browsers
// - Ability to use modern JavaScript features in a wide range of environments
// - Makes your code more portable and consistent across different devices and browsers

// When Should You Use Polyfills?
// - If you need to support older browsers (like Internet Explorer)
// - If you are using newer JavaScript features that are not universally supported yet
// - When writing code that needs to run on a wide variety of platforms and environments

// Conclusion:
// Polyfills are a crucial tool for modern web development, enabling developers to use newer JavaScript features while still ensuring compatibility with older environments. By using polyfills, you can ensure your code runs reliably for a wider range of users.

// Important Notes:
// - Polyfills can increase the size of your code, so use them wisely.
// - It's important to check if a polyfill is already available before adding it to avoid unnecessary code.
